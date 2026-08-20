import sharp from "sharp";
import { join } from "node:path";

const root = new URL("../", import.meta.url).pathname.replace(/^\/(.:)/, "$1");

const source = join(root, "src", "imports", "nets-unlimited-logo.webp");

await sharp(source)
  .resize({ width: 160, withoutEnlargement: true })
  .webp({ quality: 78, effort: 6 })
  .toFile(join(root, "src", "imports", "nets-unlimited-logo-160.webp"));

await sharp(source)
  .resize({ width: 160, withoutEnlargement: true })
  .webp({ quality: 78, effort: 6 })
  .toFile(join(root, "public", "nets-unlimited-logo-160.webp"));

console.log("Generated the 160px navigation logo.");
