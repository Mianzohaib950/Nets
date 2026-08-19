import { readFile, readdir, writeFile } from "node:fs/promises";
import { join } from "node:path";

const root = new URL("../", import.meta.url).pathname.replace(/^\/(.:)/, "$1");
const distRoot = join(root, "dist");

async function walk(directory) {
  const output = [];
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    const path = join(directory, entry.name);
    if (entry.isDirectory()) output.push(...await walk(path));
    else output.push(path);
  }
  return output;
}

const htmlFiles = (await walk(distRoot)).filter((file) => file.endsWith(".html"));
const rootHtml = await readFile(join(distRoot, "index.html"), "utf8");
const stylesheetMatch = rootHtml.match(/<link rel="stylesheet" crossorigin href="\/assets\/([^"]+\.css)">/i);

if (!stylesheetMatch) throw new Error("Production stylesheet link was not found.");

const css = await readFile(join(distRoot, "assets", stylesheetMatch[1]), "utf8");
const inlineStyle = `<style data-critical-css>${css}</style>`;
let updated = 0;

for (const file of htmlFiles) {
  const html = await readFile(file, "utf8");
  const next = html.replace(/<link rel="stylesheet" crossorigin href="\/assets\/[^"]+\.css">/i, inlineStyle);
  // The standalone static 404 page intentionally has no application stylesheet.
  if (next === html) continue;
  await writeFile(file, next);
  updated += 1;
}

console.log(`Inlined critical CSS into ${updated} HTML files.`);
