# Nets Unlimited: Final Technical SEO & GEO Report

**Site:** https://netsunlimited.com
**Date:** 3 November 2026
**Scope:** Live site (22 sitemap URLs + legacy/variant URLs spot-checked with curl and headless Chrome) and the `NetsUnlimitedWebsite-main` codebase (branch `main`)
**Hosting found:** Apache (not Vercel). `public/.htaccess` is the live server config; `vercel.json` is not used in production.
**Benchmark:** The checklists of four open-source SEO audit tools:

| Repo | What it is | Main focus |
|---|---|---|
| [AgricIDaniel/claude-seo](https://github.com/AgricIDaniel/claude-seo) | Claude Code SEO skill (30 commands) | 9-category technical audit, schema, E-E-A-T, GEO, IndexNow |
| [zubair-trabzada/geo-seo-claude](https://github.com/zubair-trabzada/geo-seo-claude) | Claude Code GEO skill | AI search visibility: AI crawlers, llms.txt, citability, brand mentions, 100-point technical rubric |
| [coreyhaines31/marketingskills](https://github.com/coreyhaines31/marketingskills) | 53 marketing skills (`seo-audit`, `schema`, `ai-seo`, ...) | Classic SEO audit checklist: crawl, index, canonicals, on-page, E-E-A-T |
| [SelmiAbderrahim/rankme.fast](https://github.com/SelmiAbderrahim/rankme.fast) | Self-hosted SEO platform | 26-check crawl audit, GSC/PSI/CrUX data, rank tracking, AI share-of-voice |

The four tools overlap heavily. This report merges their checks into one list and marks each one for our site.

---

## 1. Summary

| | Before | After this round |
|---|---|---|
| Technical score (geo-seo-claude rubric, CWV excluded, scaled to 100) | **~64** (Fair) | **~93** (Excellent) once `.htaccess` and `dist/` are deployed |
| Code-level issues found | 12 | **0 open**. Everything that can be fixed in code is fixed and verified on a local production build |
| Remaining items | — | Content edits, server/hosting work, and measurements (§5). None of them is a code change |

**The biggest finding:** inner pages were sending an almost empty HTML page. The real content only appeared after JavaScript ran, and the fallback text was inside a `hidden` block. Google renders JavaScript, but ChatGPT, Claude, Perplexity and most other AI crawlers do not, so for them 21 of the 22 pages had about 50 words. Every page is now prerendered at build time with its full content.

**Fixed in this round:** empty HTML on inner pages, live pages answering **410 Gone** without a trailing slash, no HTTP→HTTPS or www→non-www redirect, missing security headers on the live server, plain-text 404/410 error pages, `/index.html` and `/applications/` duplicates, metadata and schema that differed between the static HTML and the JavaScript version, missing FAQPage schema, a logo below Google's minimum size, LCP images losing `fetchpriority`, broken gallery `srcset`, and a thin `llms.txt`.

| Category (geo-seo-claude rubric) | Points | Before | After | Status |
|---|---|---|---|---|
| Crawlability | 15 | 13 | 15 | Pass |
| Indexability | 12 | 8 | 12 | Pass (after deploy) |
| Security | 10 | 3 | 9 | Pass (CSP pending) |
| URL structure | 8 | 7 | 8 | Pass |
| Mobile | 10 | ~9 | ~9 | Pass |
| Core Web Vitals | 15 | not measured | not measured | Needs PSI/CrUX run (§5) |
| Server-side rendering / prerender | 15 | 3 | 15 | Pass |
| Page speed & server | 15 | ~10 | ~10 | Warn (TTFB ~1.2 s, no Brotli, no CDN: hosting work) |

---

## 2. Fixed in this round

All of these were verified on a local production build (`npm run build` + `npm run verify:seo` + `vite preview`, checked in headless Chrome: real-time render, client-side navigation, no console errors). The `.htaccess` rules cannot run locally (no Apache), so they need the curl checks in §7 after upload.

| # | Issue (severity) | What was wrong | Fix | File(s) |
|---|---|---|---|---|
| 1 | **Inner pages had no content in HTML** (Critical) | The build copied an empty app shell to each route and added a `hidden` block with a heading and one sentence (~50 words). Non-JS crawlers (GPTBot, ClaudeBot, PerplexityBot) saw nothing else. Hidden text can also be discounted by Google | Build-time prerender: a Vite SSR bundle renders each route with the real React components, and the full markup goes into `dist/<route>/index.html`. Pages now ship 620–1,090 words of visible HTML. Routes use React Router's route-level `lazy`, and the browser waits for the matched page before mounting, so the prerendered page is swapped for identical markup with no blank frame | `src/entry-server.tsx` (new), `src/app/routes.ts`, `src/app/App.tsx`, `src/main.tsx`, `scripts/generate-seo-pages.mjs`, `package.json` |
| 2 | **Live pages returned 410 Gone** (Critical) | `/about`, `/services`, `/gallery`, `/gallery/zoos`, `/applications/zoo` … (no trailing slash) returned **410**, telling Google the page is permanently deleted. Until 25 Aug the site's own nav linked to these exact URLs, so Google and any backlinks know them | They now **301** to the trailing-slash URL (e.g. `/about` → `/about/`). Real legacy WordPress slugs (`/bridges`, `/we-zoo`, `/about-&-contact` …) still return 410, now also with a trailing slash | `public/.htaccess`, `vercel.json` |
| 3 | **No HTTPS / host redirect** (High) | `http://netsunlimited.com/` and `https://www.netsunlimited.com/` both answered 200: three copies of every page | 301 to `https://netsunlimited.com` (keeps the path). Honours `X-Forwarded-Proto` so it will not loop behind a proxy | `public/.htaccess` |
| 4 | **Security headers missing on the live server** (High) | Only `nosniff` and `Referrer-Policy` were sent. HSTS, X-Frame-Options and Permissions-Policy existed only in `vercel.json`, which production does not use | Added `Strict-Transport-Security: max-age=31536000`, `X-Frame-Options: SAMEORIGIN`, `Permissions-Policy`. All headers use `Header always` so they are also sent on redirects and errors | `public/.htaccess` |
| 5 | **Plain-text 404/410 pages** (Medium) | Apache returned a bare "404 Not Found" / "410 Gone" (8–13 bytes) with no link back into the site | `ErrorDocument 404 /404.html` and `410 /410.html` (both already existed, `noindex`, link home). `X-Robots-Tag: noindex` added on both | `public/.htaccess` |
| 6 | **Duplicate / dead URLs** (Medium) | `/index.html` returned the homepage with 200. `/applications/` returned **403 Forbidden** | `/index.html` → 301 `/`. `/applications/` → 301 `/services/` (the visible breadcrumb already uses Services as the parent) | `public/.htaccess` |
| 7 | **Static and JavaScript metadata disagreed** (Medium) | Two separate lists: the build script and `SEO.tsx`. After JavaScript ran, gallery pages switched to a different, templated description; breadcrumb schema switched parent from "Services" to "Applications → /#applications"; WebSite schema lost `inLanguage` | One source: `SEO.tsx` exports `pageSeo()` and `schemaGraph()`; the build script reads them through the SSR bundle. Static HTML and the live DOM now match for all 22 pages | `src/components/shared/SEO.tsx`, `scripts/generate-seo-pages.mjs` |
| 8 | **FAQ section without FAQPage schema** (Medium) | The homepage shows 3 FAQs but had no schema | `FAQPage` JSON-LD built from the same FAQ list the page renders (moved to `src/data/homeFaqs.ts`). Gallery pages are now `CollectionPage`; every page links its `BreadcrumbList` | `src/data/homeFaqs.ts` (new), `src/pages/Home.tsx`, `SEO.tsx` |
| 9 | **Logo too small for Google** (Low) | Organization `logo` was `favicon.png` (64×64). Google requires at least 112×112 | Uses `apple-touch-icon.png` (180×180) with width/height | `SEO.tsx` |
| 10 | **LCP image priority dropped** (Medium) | `fetchPriority="high"` is not supported by React 18.3; React dropped the attribute and logged a warning, so hero images loaded at normal priority | Passed as lowercase `fetchpriority`, which React 18 renders. Confirmed in the built HTML | `src/pages/Home.tsx`, `src/pages/applications/ApplicationPage.tsx` |
| 11 | **Broken gallery `srcset`** (Low) | 15 image files have a comma in their name (`rs=w_2560,h_1707.webp`). Commas split `srcset` entries, so Chrome dropped those candidates | Commas encoded as `%2C` in `srcset` URLs (Apache serves them; tested 200) | `src/components/shared/GalleryImage.tsx` |
| 12 | **Thin `llms.txt`** (Low) | Listed 7 links; applications pointed to `/#applications`; no galleries, license number or hours | Lists all 22 pages with one-line summaries, AZ ROC #236070, and opening hours | `public/llms.txt` |

Also: `sitemap.xml` is now generated from the same page list at build time (drops `changefreq`/`priority`, which Google ignores). `dist-server/` (temporary SSR bundle) is deleted after the build and added to `.gitignore`.

---

## 3. Already in place before this round

| # | Check | Evidence |
|---|---|---|
| 1 | robots.txt valid, allows all, lists the sitemap | `public/robots.txt` |
| 2 | AI crawlers allowed | GPTBot, ClaudeBot, PerplexityBot, Googlebot all get 200 |
| 3 | XML sitemap with all 22 indexable pages | `verify:seo`: 0 missing, 0 extra |
| 4 | Self-referencing canonical on every page, trailing-slash style | 22/22 pages |
| 5 | Unique titles (31–55 chars) and descriptions (120–150 chars) | 0 duplicates, 0 out of range |
| 6 | One H1 per page | 22/22 |
| 7 | Image alt text | 0 content images without alt (one decorative background uses `alt=""`, which is correct) |
| 8 | Organization/LocalBusiness with address, phone, hours, `sameAs` (7 profiles), Service schema on 9 service pages | JSON-LD |
| 9 | Visible breadcrumbs | `Breadcrumbs.tsx` |
| 10 | Open Graph + Twitter cards (1200×630) | Every page |
| 11 | Legacy WordPress URLs return 410 | `.htaccess` |
| 12 | Static 404 page `noindex` | `public/404.html` |
| 13 | Gzip; hashed assets cached 1 year (`immutable`); HTML `no-cache` | Response headers |
| 14 | GTM deferred until first interaction | `index.html` |
| 15 | All CSS inlined, hero preloaded | `inline-critical-css.mjs`, `index.html` |
| 16 | WebP images, intrinsic sizes, responsive 480/960 variants, none over 500 KB | `verify:seo` |
| 17 | Privacy policy, contact page with NAP, AZ ROC license in footer | Trust pages |
| 18 | `<html lang="en">`, viewport meta | `index.html` |

---

## 4. Full check matrix (all four tools vs. our site, after fixes)

| Check | claude-seo | geo-seo-claude | marketingskills | rankme.fast | Status |
|---|:-:|:-:|:-:|:-:|---|
| robots.txt valid + sitemap directive | ✓ | ✓ | ✓ | ✓ | ✅ Done |
| AI crawler access | ✓ | ✓ | | | ✅ Done |
| XML sitemap valid | ✓ | ✓ | ✓ | ✓ | ✅ Done (now generated at build) |
| Sitemap lastmod accurate | | ✓ | ✓ | | ⏳ No `lastmod` yet (better none than fake); add real dates when content changes |
| Sitemap includes all indexable pages | ✓ | | ✓ | | ✅ Done |
| Crawl depth ≤ 3 clicks | ✓ | ✓ | ✓ | | ✅ Done (every page linked from header/footer) |
| No accidental noindex | ✓ | ✓ | ✓ | ✓ | ✅ Done |
| Self-referencing canonicals | ✓ | ✓ | ✓ | ✓ | ✅ Done |
| HTTPS + HTTP→HTTPS, www consolidated, trailing slash | ✓ | ✓ | ✓ | | ✅ Fixed (#2, #3) |
| No redirect chains / loops | ✓ | ✓ | ✓ | ✓ | ✅ Single hop (check after deploy, §7) |
| Correct status codes (no live page as 410/403) | ✓ | | ✓ | ✓ | ✅ Fixed (#2, #6) |
| No duplicate / index bloat pages | ✓ | ✓ | ✓ | | ✅ Fixed (#3, #6) |
| Security headers (HSTS, nosniff, XFO, Referrer) | ✓ | ✓ | ✓ | | ✅ Fixed (#4) |
| Content-Security-Policy | ✓ | ✓ | | | ⏳ Open (§5, test with GTM first) |
| Clean URLs | ✓ | ✓ | ✓ | | ✅ Done |
| Viewport / responsive | ✓ | ✓ | ✓ | | ✅ Done |
| Core Web Vitals (LCP, INP, CLS) | ✓ | ✓ | ✓ | ✓ | ⏳ Not measured (§5) |
| TTFB < 800 ms, CDN, Brotli | | ✓ | ✓ | | ⏳ Open (§5, hosting: TTFB 1.2–1.7 s, gzip only) |
| Compression, static caching | | ✓ | ✓ | | ✅ Done |
| Server-side rendering; content/meta/schema in raw HTML | ✓ | ✓ | ✓ | | ✅ Fixed (#1, #7) |
| Title / description unique | ✓ | | ✓ | ✓ | ✅ Done |
| Title / description length | ✓ | | ✓ | ✓ | ✅ Done |
| One H1 per page | ✓ | | ✓ | ✓ | ✅ Done |
| Keyword in H1 | ✓ | | ✓ | | ⏳ H1s are brand names ("We Zoo", "We Play"), §5.1 |
| Image alt text | ✓ | ✓ | ✓ | ✓ | ✅ Done (application hero alt = "We Zoo" etc., could be more descriptive, §5.1) |
| Image format / size / `srcset` / priority | ✓ | ✓ | | | ✅ Fixed (#10, #11) |
| Organization + sameAs schema | ✓ | ✓ | ✓ | ✓ | ✅ Done (#9 logo) |
| LocalBusiness schema (NAP, hours, map) | ✓ | ✓ | ✓ | | ✅ Done |
| BreadcrumbList schema | ✓ | | ✓ | | ✅ Fixed, matches visible trail (#7) |
| Service schema | ✓ | | ✓ | | ✅ Done |
| FAQPage schema | ✓ | ✓ | ✓ | | ✅ Fixed (#8) |
| Open Graph / Twitter cards | ✓ | ✓ | | | ✅ Done |
| llms.txt present & valid | ✓ | ✓ | ✓ | | ✅ Fixed (#13) |
| IndexNow | ✓ | ✓ | | | ⏳ Open (§5, needs Bing Webmaster account) |
| Hreflang | ✓ | ✓ | ✓ | | N/A (English-only site) |
| NAP / entity facts consistent | ✓ | ✓ | ✓ | | ⏳ Founding year differs: homepage "Est. 2003", About/schema/llms.txt "January 2004" (§5.2) |
| E-E-A-T: about, contact, privacy, license | ✓ | ✓ | ✓ | | ✅ Done |
| E-E-A-T: case studies, testimonials, named team | ✓ | ✓ | ✓ | | ⏳ Missing (§5.1) |
| Content depth / citability | ✓ | ✓ | ✓ | ✓ | ⏳ Gallery pages thin (§5.1) |
| Brand mentions, backlinks, rankings | ✓ | ✓ | ✓ | ✓ | ⏳ Not measured (off-site, needs GSC/Semrush) |

---

## 5. Remaining items (not code changes)

### 5.1 Content (Marketing / Content)

Unique words per page below exclude the ~580 words of header and footer that every page shares.

| Page(s) | Problem | Target |
|---|---|---|
| 8 gallery category pages (`/gallery/zoos/` …) | ~40–70 unique words: a heading and photos only. Thin for Google and gives AI tools nothing to quote | 150–300 words each: what the project types are, materials, 2–3 named example projects with location and year |
| 8 application pages | H1 is the brand phrase ("We Zoo", "We Play", "We Mitigate Risk"). The keyword is only in the title | Keep "We Zoo" as the small label above, make the H1 descriptive, e.g. "Zoo & Aquarium Netting" |
| Homepage | H1 "Imagine the Alter'NET'ives" has no keyword | Add the keyword to the H1 or the line directly under it, e.g. "Custom Rope & Netting Systems" |
| Application hero images | `alt` is the page label ("We Zoo") | Describe the photo, e.g. "Lemurs inside a custom zoo net enclosure" |
| Whole site | No case studies, testimonials or named team members/credentials | 3–5 project case studies (client, problem, solution, photos, numbers), client quotes with names, a team section on About. This is the largest E-E-A-T gap |
| Whole site | No dated content | Optional: a "Projects" or "News" section with dated posts gives the sitemap real `lastmod` values and AI tools fresh facts |

### 5.2 Decisions needed (Team lead)

- **Legacy URLs: 410 or 301?** Old WordPress pages like `/bridges`, `/zoos`, `/waterparks`, `/we-zoo`, `/protection-netting` return 410 (kept as the team chose). Each has an obvious new page (`/applications/bridge/`, `/applications/zoo/` …). A 301 to that page would keep any backlinks those URLs earned. Check Search Console → Links for these URLs; if any have external links, switch them to 301.
- **Founding year:** the homepage says "Est. 2003 … since 2003"; the About page, schema and `llms.txt` say January 2004. Kept as is on request. AI tools and Google compare these facts, so pick one year and use it everywhere.
- **`vercel.json`:** production runs on Apache, so this file has no effect. It also mixes `routes` with `headers`/`cleanUrls`, which Vercel rejects. Either delete it or keep it only if a Vercel deploy is planned. It was updated to mirror the new redirect rules so the two do not drift further.
- **Old `SEO-AUDIT-REPORT.md` (July 2026):** superseded by this report. It claimed static HTML was SEO-complete, but inner pages had no visible content. Remove or mark it as outdated.

### 5.3 Server / hosting (DevOps)

- **TTFB:** 1.2–1.7 s from Pakistan for a static HTML file. Target < 800 ms. Put Cloudflare (free) in front of the site, or move the static `dist/` to a CDN host.
- **Brotli:** the server only sends gzip. Enable `mod_brotli` (the `.htaccess` already has the rule inside `IfModule`).
- **HTTP/2:** the server advertises `Upgrade: h2,h2c`; confirm HTTP/2 is actually negotiated over TLS (Cloudflare gives HTTP/2 and HTTP/3 automatically).
- **Content-Security-Policy:** add after testing with GTM/GA. Start with `Content-Security-Policy-Report-Only`.
- **HSTS `includeSubDomains` / `preload`:** left out on purpose. Add only once every subdomain serves HTTPS.

### 5.4 Accounts / off-site (SEO / Marketing)

- **Search Console:** submit `sitemap.xml` after deploy. Watch Pages → "Not found (404)", "Page with redirect" and "Crawled – currently not indexed"; the 410 → 301 change should move `/about`-style URLs to "Page with redirect", which is correct.
- **IndexNow:** register in Bing Webmaster Tools and add the key file (helps Bing and, through it, ChatGPT/Copilot search).
- **Google Business Profile:** confirm name, address, phone and hours match the site exactly (Nets Unlimited, Inc., 20625 North 29th Place, Phoenix AZ 85050, +1-480-515-1300, Mon–Fri 7–4). Add its URL to `sameAs` in `SEO.tsx`.
- **Measure:** PageSpeed Insights / CrUX on mobile for the homepage, one application page and one gallery page. Then a Semrush baseline for backlinks, rankings and AI share-of-voice.

---

## 6. Content & on-page SEO tools in the four repos

Besides technical audits, the four repos ship ready-made tools for content and on-page work. These are the ones to use when we work on §5.1.

### 6.1 What each repo provides

| Tool | Repo | What it does | Use it for |
|---|---|---|---|
| `/seo page <url>` | claude-seo | Single-page review: title, description, H1, heading hierarchy, links, word count, schema, images | Check each page after a content edit |
| `/seo content <url>` | claude-seo | Content quality score /100: E-E-A-T, readability, thin content, keyword use | Gallery and application pages before publishing |
| `/seo content-brief <topic>` | claude-seo | Brief from the top-ranking pages: outline, word counts, meta tags, "information gain" | New case-study pages |
| `/seo local` | claude-seo | Local SEO: GBP signals, NAP consistency, review health, local schema | Phoenix / Arizona visibility |
| `/seo images` | claude-seo | Alt text, file size, formats, lazy loading, `fetchpriority`, file names | The 229 gallery images |
| `/seo drift baseline` / `compare` | claude-seo | Snapshot of on-page SEO before a deploy, diff after it | Catch titles/H1s/canonicals that break in a release |
| `/geo citability <url>` | geo-seo-claude | Scores each content block for how likely AI tools are to quote it; best passages are 134–167 words, self-contained, with facts and numbers | Application-page sections and new gallery intros |
| `/geo platforms <url>` | geo-seo-claude | Readiness score per AI platform (Google AI Overviews, ChatGPT, Perplexity, Gemini, Copilot) | Choosing where to focus |
| `/geo brands` | geo-seo-claude | Brand Authority Score from YouTube, Reddit, Wikipedia, LinkedIn mentions | Off-site plan |
| `copywriting`, `copy-editing` | marketingskills | Page copy and a "Seven Sweeps" edit, including an AI-tell check | H1 rewrites and gallery intros |
| `ai-seo` | marketingskills | Checks our key queries in AI answers + Structure / Authority / Presence playbook | "custom zoo netting", "rope bridge manufacturer" etc. |
| `schema`, `directory-submissions` | marketingskills | Schema guidance; listing the business in directories (citations) | LocalBusiness schema, local citations |
| Content Intelligence, Internal Linking, Cannibalization | rankme.fast | Page scoring with evidence, orphan pages, competing pages (from GSC) | Monthly check once GSC is connected |

rankme.fast is a self-hosted app. The other three are free Claude Code skills that run on any URL. Equivalent tools are already available in our Claude Code setup without installing anything: `searchfit-seo` (seo-audit, on-page-seo, schema-markup, content-brief, ai-visibility), the cannibalization detector, and the Semrush connector.

### 6.2 Suggested workflow for content changes

1. **Plan:** `content-strategy` / `/seo cluster` to pick the keyword per application page.
2. **Write:** `copywriting`, then `/seo content` for E-E-A-T and thin-content checks.
3. **Make it citable:** `/geo citability` on the draft; rewrite weak blocks into 134–167-word answers with facts.
4. **Edit the code:** page copy lives in `src/pages/**`; titles and descriptions in `src/components/shared/SEO.tsx` (one list for the whole site).
5. **Verify:** `npm run build && npm run verify:seo`, then `/seo page <url>` after deploy.

---

## 7. Deployment notes

- **Build:** `npm run build` now runs an extra step: `vite build --ssr src/entry-server.tsx` then `generate-seo-pages.mjs` prerenders every route. Upload the whole `dist/` folder **including `dist/.htaccess`** (it comes from `public/.htaccess`).
- **Adding a page:** add the route in `src/app/routes.ts` and its title/description in `SEO.tsx`. The prerender, sitemap and `verify:seo` pick it up automatically.
- After deploy, check:
  - `curl -I http://netsunlimited.com/` → 301 to `https://netsunlimited.com/`
  - `curl -I https://www.netsunlimited.com/about/` → 301 to `https://netsunlimited.com/about/`
  - `curl -I https://netsunlimited.com/about` → 301 to `/about/` (was 410)
  - `curl -I https://netsunlimited.com/applications/` → 301 to `/services/` (was 403)
  - `curl -I https://netsunlimited.com/bridges` → 410, and the body is the styled 410 page
  - `curl -I https://netsunlimited.com/nope` → 404, styled 404 page
  - `curl -I https://netsunlimited.com/` shows `Strict-Transport-Security`, `X-Frame-Options`, `Permissions-Policy`
  - `curl -s https://netsunlimited.com/applications/zoo/ | grep -c "New Construction"` → 1 or more (content is in the raw HTML)
  - [Rich Results Test](https://search.google.com/test/rich-results) on the homepage (FAQ, LocalBusiness) and one application page (Service, Breadcrumb)
- **If the HTTPS redirect loops** (only possible if a proxy in front of Apache sends neither `HTTPS=on` nor `X-Forwarded-Proto`): remove the two `RewriteCond`/`RewriteRule` lines under "One canonical host" and set the redirect in the hosting panel instead.
- Then resubmit `sitemap.xml` in Google Search Console and request indexing for the homepage and the 8 application pages.
