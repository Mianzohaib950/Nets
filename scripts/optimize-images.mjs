import { mkdir, readFile, readdir, rename, rm, stat, writeFile } from "node:fs/promises";
import { extname, join } from "node:path";
import { createHash } from "node:crypto";
import sharp from "sharp";

const projectRoot = new URL("../", import.meta.url).pathname.replace(/^\/(.:)/, "$1");

async function walk(directory) {
  const output = [];
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    const path = join(directory, entry.name);
    if (entry.isDirectory()) output.push(...await walk(path));
    else output.push(path);
  }
  return output;
}

const importedPngs = (await walk(join(projectRoot, "src", "imports")))
  .filter((file) => extname(file).toLowerCase() === ".png")
  .filter((file) => !file.endsWith("qt_q_95__1_.png") && !file.includes("Screenshot_"));

for (const source of importedPngs) {
  const destination = source.replace(/\.png$/i, ".webp");
  await sharp(source).rotate().resize({ width: 1920, withoutEnlargement: true }).webp({ quality: 78, effort: 5 }).toFile(destination);
}

console.log(`Created ${importedPngs.length} optimized WebP replacements.`);

const importedWebps = (await walk(join(projectRoot, "src", "imports")))
  .filter((file) => extname(file).toLowerCase() === ".webp" && !file.endsWith(".seo.webp"));
let largeWebps = 0;
for (const source of importedWebps) {
  if ((await stat(source)).size < 500 * 1024) continue;
  const destination = source.replace(/\.webp$/i, ".seo.webp");
  await sharp(source).rotate().resize({ width: 1600, withoutEnlargement: true }).webp({ quality: 70, effort: 5 }).toFile(destination);
  largeWebps += 1;
}
console.log(`Created ${largeWebps} optimized replacements for large imported WebP files.`);

const homeCardSources = {
  "zoos.webp": "zoo-net-enclosure.webp",
  "waterparks.webp": "waterpark-rope-netting.seo.webp",
  "play.webp": "children-play-rope-bridge.webp",
  "handrails.webp": "handrail-themed-netting.webp",
  "protection.webp": "secondary-protection-netting.webp",
  "bridges.webp": "bridge-tunnel-netting.webp",
  "hardware.webp": "rope-cable-hardware.webp",
  "decor.webp": "theming-decor-pool-netting.webp",
};
const homeCardRoot = join(projectRoot, "public", "images", "home-cards");
await mkdir(homeCardRoot, { recursive: true });
for (const [destination, source] of Object.entries(homeCardSources)) {
  await sharp(join(projectRoot, "src", "imports", source))
    .rotate()
    .resize({ width: 720, height: 540, fit: "cover" })
    .webp({ quality: 52, effort: 6 })
    .toFile(join(homeCardRoot, destination));
}
console.log(`Generated ${Object.keys(homeCardSources).length} optimized home-card images.`);

const publicGalleryRoot = join(projectRoot, "public", "images");
const publicWebps = (await walk(publicGalleryRoot))
  .filter((file) => extname(file).toLowerCase() === ".webp"
    && !file.includes(`${join("images", "_responsive")}`)
    && !file.includes(`${join("images", "home-cards")}`));
let optimizedGalleryImages = 0;
let galleryBytesBefore = 0;
let galleryBytesAfter = 0;
for (const source of publicWebps) {
  const before = (await stat(source)).size;
  galleryBytesBefore += before;
  if (before <= 200 * 1024) {
    galleryBytesAfter += before;
    continue;
  }

  const input = await readFile(source);
  const metadata = await sharp(input).metadata();
  if (before <= 500 * 1024 && (metadata.width ?? 0) <= 1600 && (metadata.height ?? 0) <= 1600) {
    galleryBytesAfter += before;
    continue;
  }
  let output = await sharp(input).rotate()
    .resize({ width: 1600, height: 1600, fit: "inside", withoutEnlargement: true })
    .webp({ quality: 68, effort: 5 }).toBuffer();
  if (output.length > 450 * 1024) {
    output = await sharp(input).rotate()
      .resize({ width: 1400, height: 1400, fit: "inside", withoutEnlargement: true })
      .webp({ quality: 58, effort: 5 }).toBuffer();
  }
  if (output.length > 500 * 1024) {
    output = await sharp(input).rotate()
      .resize({ width: 1200, height: 1200, fit: "inside", withoutEnlargement: true })
      .webp({ quality: 52, effort: 5 }).toBuffer();
  }
  const temporary = `${source}.seo-tmp`;
  await writeFile(temporary, output);
  await rm(source);
  await rename(temporary, source);
  galleryBytesAfter += output.length;
  optimizedGalleryImages += 1;
}
console.log(`Optimized ${optimizedGalleryImages} public gallery images in place (${(galleryBytesBefore / 1048576).toFixed(1)} MB -> ${(galleryBytesAfter / 1048576).toFixed(1)} MB).`);

const galleryDimensions = {};
for (const source of publicWebps) {
  const metadata = await sharp(source).metadata();
  const relativePath = source.slice(join(projectRoot, "public").length).replaceAll("\\", "/");
  galleryDimensions[relativePath] = { width: metadata.width, height: metadata.height };
}
await mkdir(join(projectRoot, "src", "data"), { recursive: true });
await writeFile(join(projectRoot, "src", "data", "gallery-image-dimensions.json"), `${JSON.stringify(galleryDimensions, null, 2)}\n`);
console.log(`Recorded intrinsic dimensions for ${Object.keys(galleryDimensions).length} gallery images.`);

// Generate small card and medium lightbox sources. A manifest avoids putting
// gallery filenames containing spaces into srcset, where spaces are separators.
const responsiveRoot = join(publicGalleryRoot, "_responsive");
await mkdir(responsiveRoot, { recursive: true });
const responsiveGalleryImages = {};
for (const source of publicWebps) {
  const originalPath = source.slice(join(projectRoot, "public").length).replaceAll("\\", "/");
  const hash = createHash("sha1").update(originalPath).digest("hex").slice(0, 12);
  const input = await readFile(source);
  const metadata = await sharp(input).metadata();
  const entry = { width: metadata.width, height: metadata.height };

  for (const width of [480, 960]) {
    if ((metadata.width ?? 0) <= width) continue;
    const filename = `${hash}-${width}.webp`;
    await sharp(input)
      .rotate()
      .resize({ width, withoutEnlargement: true })
      .webp({ quality: width === 480 ? 58 : 66, effort: 5 })
      .toFile(join(responsiveRoot, filename));
    entry[`w${width}`] = `/images/_responsive/${filename}`;
  }
  responsiveGalleryImages[originalPath] = entry;
}
await writeFile(
  join(projectRoot, "src", "data", "gallery-responsive-images.json"),
  `${JSON.stringify(responsiveGalleryImages, null, 2)}\n`,
);
console.log(`Generated responsive sources for ${Object.keys(responsiveGalleryImages).length} gallery images.`);

const socialSource = join(projectRoot, "public", "images", "zoos", "zoo1.webp");
const socialOutput = join(projectRoot, "public", "og-image.webp");
const overlay = Buffer.from(`<svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
  <defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="0"><stop stop-color="#102a1d" stop-opacity="0.96"/><stop offset="0.7" stop-color="#102a1d" stop-opacity="0.38"/></linearGradient></defs>
  <rect width="1200" height="630" fill="url(#g)"/>
  <text x="72" y="245" fill="#ffffff" font-family="Georgia,serif" font-size="64">Nets Unlimited</text>
  <text x="72" y="315" fill="#d39a70" font-family="Arial,sans-serif" font-size="31">CUSTOM ROPE &amp; NETTING SOLUTIONS</text>
  <text x="72" y="375" fill="#ffffff" fill-opacity="0.82" font-family="Arial,sans-serif" font-size="25">Designed • Fabricated • Installed since 2004</text>
</svg>`);
await sharp(socialSource).rotate().resize(1200, 630, { fit: "cover" }).composite([{ input: overlay }]).webp({ quality: 84, effort: 5 }).toFile(socialOutput);
console.log("Generated public/og-image.webp (1200x630).");
