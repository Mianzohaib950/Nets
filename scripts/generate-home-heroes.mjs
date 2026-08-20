import sharp from "sharp";
import { mkdir } from "node:fs/promises";
import { join } from "node:path";

const root = new URL("../", import.meta.url).pathname.replace(/^\/(.:)/, "$1");
const imports = join(root, "src", "imports");
const output = join(root, "public", "images", "home-heroes");
await mkdir(output, { recursive: true });

const images = [
  [join(root, "public", "hero-home-1280.webp"), "themed-play.webp"],
  [join(imports, "zoo-net-enclosure.webp"), "zoo.webp"],
  [join(imports, "waterpark-rope-netting.seo.webp"), "waterpark.webp"],
  [join(imports, "children-play-rope-bridge.webp"), "play.webp"],
  [join(imports, "bridge-tunnel-netting.webp"), "bridge.webp"],
  [join(imports, "secondary-protection-netting.webp"), "protection.webp"],
];

for (const [source, filename] of images) {
  await sharp(source)
    .rotate()
    // The hero column is tall and never exceeds roughly 900 CSS pixels wide.
    // A portrait crop avoids sending wide pixels hidden by object-cover.
    .resize({ width: 960, height: 1080, fit: "cover", position: "attention", withoutEnlargement: true })
    .webp({ quality: 46, effort: 6, smartSubsample: true })
    .toFile(join(output, filename));
}

console.log(`Generated ${images.length} optimized desktop hero images.`);
