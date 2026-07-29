import { readFile, readdir, stat } from "node:fs/promises";
import { extname, join, relative } from "node:path";

const root = new URL("../", import.meta.url).pathname.replace(/^\/(.:)/, "$1");
const distRoot = join(root, "dist");
const publicImagesRoot = join(root, "public", "images");
const vercelConfigPath = join(root, "vercel.json");

async function walk(directory) {
  const output = [];
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    const path = join(directory, entry.name);
    if (entry.isDirectory()) output.push(...await walk(path));
    else output.push(path);
  }
  return output;
}

function normalizeRoute(pathname) {
  if (pathname === "index.html") return "/";
  const route = pathname.replaceAll("\\", "/").replace(/\/index\.html$/i, "/");
  return route.startsWith("/") ? route : `/${route}`;
}

function extract(html, expression) {
  return html.match(expression)?.[1]?.trim() ?? "";
}

const htmlFiles = (await walk(distRoot))
  .filter((file) => file.endsWith("index.html"))
  .sort();

const pageResults = [];
const titles = new Map();
const descriptions = new Map();

for (const file of htmlFiles) {
  const html = await readFile(file, "utf8");
  const route = normalizeRoute(relative(distRoot, file));
  const title = extract(html, /<title>([^<]+)<\/title>/i);
  const description = extract(html, /<meta name="description" content="([^"]+)"/i);
  const canonical = extract(html, /<link rel="canonical" href="([^"]+)"/i);
  const robots = extract(html, /<meta name="robots" content="([^"]+)"/i);
  const h1Count = (html.match(/<h1\b/gi) ?? []).length;
  const schemaScripts = [...html.matchAll(/<script type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/gi)];
  let validJsonLd = 0;
  for (const [, content] of schemaScripts) {
    try {
      JSON.parse(content);
      validJsonLd += 1;
    } catch {}
  }

  if (title) titles.set(title, [...(titles.get(title) ?? []), route]);
  if (description) descriptions.set(description, [...(descriptions.get(description) ?? []), route]);

  pageResults.push({
    route,
    titleLength: title.length,
    descriptionLength: description.length,
    canonical,
    robots,
    h1Count,
    jsonLdCount: schemaScripts.length,
    validJsonLd,
    failures: [
      ...(title.length >= 30 && title.length <= 60 ? [] : [`title length ${title.length}`]),
      ...(description.length >= 120 && description.length <= 160 ? [] : [`description length ${description.length}`]),
      ...(canonical ? [] : ["missing canonical"]),
      ...(robots.includes("index") ? [] : ["robots not indexable"]),
      ...(h1Count === 1 ? [] : [`h1 count ${h1Count}`]),
      ...(validJsonLd >= 1 ? [] : ["missing valid JSON-LD"]),
    ],
  });
}

const duplicateTitles = [...titles.entries()].filter(([, routes]) => routes.length > 1);
const duplicateDescriptions = [...descriptions.entries()].filter(([, routes]) => routes.length > 1);

const sitemap = await readFile(join(distRoot, "sitemap.xml"), "utf8");
const sitemapRoutes = [...sitemap.matchAll(/<loc>https:\/\/netsunlimited\.com([^<]*)<\/loc>/gi)]
  .map((match) => {
    const path = match[1] || "/";
    return path.endsWith("/") ? path : `${path}/`;
  })
  .sort();

const builtRoutes = pageResults.map((page) => page.route).sort();
const sitemapMissing = builtRoutes.filter((route) => !sitemapRoutes.includes(route));
const sitemapExtra = sitemapRoutes.filter((route) => !builtRoutes.includes(route));

const robots = await readFile(join(distRoot, "robots.txt"), "utf8");
const llms = await readFile(join(distRoot, "llms.txt"), "utf8");
const notFoundHtml = await readFile(join(distRoot, "404.html"), "utf8");
const vercelConfig = await readFile(vercelConfigPath, "utf8");

const imageFiles = (await walk(publicImagesRoot)).filter((file) => extname(file).toLowerCase() === ".webp" && !file.includes(`${join("images", "_responsive")}`));
let imagesOver200 = 0;
let imagesOver500 = 0;
let imagesOver1024 = 0;
let totalImageBytes = 0;

for (const file of imageFiles) {
  const size = (await stat(file)).size;
  totalImageBytes += size;
  if (size > 200 * 1024) imagesOver200 += 1;
  if (size > 500 * 1024) imagesOver500 += 1;
  if (size > 1024 * 1024) imagesOver1024 += 1;
}

const summary = {
  pages: pageResults.length,
  pageFailures: pageResults.filter((page) => page.failures.length > 0),
  duplicateTitles: duplicateTitles.map(([title, routes]) => ({ title, routes })),
  duplicateDescriptions: duplicateDescriptions.map(([description, routes]) => ({ description, routes })),
  sitemapUrls: sitemapRoutes.length,
  sitemapMissing,
  sitemapExtra,
  robotsHasSitemap: /Sitemap:\s*https:\/\/netsunlimited\.com\/sitemap\.xml/i.test(robots),
  llmsExists: llms.includes("Nets Unlimited"),
  static404Noindex: /<meta name="robots" content="[^"]*noindex/i.test(notFoundHtml),
  securityHeadersConfigured: /"key"\s*:\s*"X-Content-Type-Options"/.test(vercelConfig) && /"key"\s*:\s*"Referrer-Policy"/.test(vercelConfig),
  images: {
    total: imageFiles.length,
    totalMb: Number((totalImageBytes / 1048576).toFixed(1)),
    over200kb: imagesOver200,
    over500kb: imagesOver500,
    over1024kb: imagesOver1024,
  },
};

console.log(JSON.stringify(summary, null, 2));

const hardFailure = summary.pageFailures.length > 0
  || summary.duplicateTitles.length > 0
  || summary.duplicateDescriptions.length > 0
  || summary.sitemapMissing.length > 0
  || summary.sitemapExtra.length > 0
  || !summary.robotsHasSitemap
  || !summary.llmsExists
  || !summary.static404Noindex
  || !summary.securityHeadersConfigured
  || summary.images.over500kb > 0
  || summary.images.over1024kb > 0;

if (hardFailure) process.exit(1);
