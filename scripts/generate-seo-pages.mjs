import { mkdir, readFile, rm, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { pathToFileURL } from "node:url";

const root = new URL("../", import.meta.url).pathname.replace(/^\/(.:)/, "$1");
const dist = join(root, "dist");
const serverDist = join(root, "dist-server");
const shell = await readFile(join(dist, "index.html"), "utf8");
const baseUrl = "https://netsunlimited.com";

// Metadata, schema and markup all come from the app itself (see
// src/entry-server.tsx), so the static HTML matches what the browser renders.
const { render, pageSeo, schemaGraph, indexablePaths } = await import(pathToFileURL(join(serverDist, "entry-server.js")).href);

function escape(value) {
  return value.replaceAll("&", "&amp;").replaceAll('"', "&quot;").replaceAll("<", "&lt;").replaceAll(">", "&gt;");
}

for (const path of indexablePaths) {
  const { title, description, canonical } = pageSeo(path);
  const schema = JSON.stringify(schemaGraph(path)).replaceAll("<", "\u003c");
  const markup = await render(path === "/" ? "/" : `${path}/`);
  const html = shell
    .replace(/<title>.*?<\/title>/, `<title>${escape(title)}</title>`)
    .replace(/<meta name="description" content="[^"]*" \/>/, `<meta name="description" content="${escape(description)}" />`)
    .replace(/<link rel="canonical" href="[^"]*" \/>/, `<link rel="canonical" href="${canonical}" />`)
    .replace(/<meta property="og:title" content="[^"]*" \/>/, `<meta property="og:title" content="${escape(title)}" />`)
    .replace(/<meta property="og:description" content="[^"]*" \/>/, `<meta property="og:description" content="${escape(description)}" />`)
    .replace(/<meta property="og:url" content="[^"]*" \/>/, `<meta property="og:url" content="${canonical}" />`)
    .replace(/<meta name="twitter:title" content="[^"]*" \/>/, `<meta name="twitter:title" content="${escape(title)}" />`)
    .replace(/<meta name="twitter:description" content="[^"]*" \/>/, `<meta name="twitter:description" content="${escape(description)}" />`)
    .replace("</head>", `  <script type="application/ld+json" data-static-schema="true">${schema}</script>\n    </head>`)
    .replace('<div id="root"></div>', () => `<div id="root">${markup}</div>`);
  const output = path === "/" ? join(dist, "index.html") : join(dist, path.slice(1), "index.html");
  await mkdir(dirname(output), { recursive: true });
  await writeFile(output, html);
}

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${indexablePaths.map((path) => `  <url><loc>${baseUrl}${path === "/" ? "/" : `${path}/`}</loc></url>`).join("\n")}
</urlset>
`;
await writeFile(join(dist, "sitemap.xml"), sitemap);
await rm(serverDist, { recursive: true, force: true });

console.log(`Prerendered ${indexablePaths.length} routes with full HTML, metadata and JSON-LD; wrote sitemap.xml.`);
