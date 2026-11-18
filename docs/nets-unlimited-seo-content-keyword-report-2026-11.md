# Nets Unlimited: Content & Keyword Fix Report and Blog Launch

**Site:** netsunlimited.com · **Date:** 18 November 2026 · **Standard:** Novatore SEO Playbook v1.4
**Scope:** content, keywords, on-page SEO, blog module · **Status:** built and verified locally, not yet deployed

| H1s rewritten to buyer keywords | New FAQs | Gallery images given real alt text | New blog guides |
|---|---|---|---|
| **20** (home, services, about, 8 application, 9 gallery) | **28** (8 application pages + services) | **184** | **4** plus a `/blogs/` hub |

> **Before deploying:** the playbook requires a named Nets Unlimited expert to fact-check and approve every blog post (rule 9, "AI drafts, humans decide"). See section 6.

---

## 1. Summary

The site's technical base is solid: every page is prerendered, has a unique title and description, a self canonical and valid JSON-LD. The gaps were in **content and keywords**:

- The H1s on the home page and all eight application pages were brand slogans ("We Zoo", "Imagine the Alter'NET'ives") instead of the words buyers search. Services, About and the nine gallery pages had generic one-word H1s ("Services", "About Us", "Handrails").
- Application pages were thin (59 to 350 words) with no answers to buyer questions. Gallery pages had 31 to 64 words and no link to their application page.
- Most gallery photos had file names as alt text ("zoo12", "rs=w_2560 (5)").
- There was no content answering the questions buyers ask just before they request a quote.

We fixed all of these without changing the look of the site. The brand slogans stay visible and the keyword now sits in the H1. We also built a blog module in the same design, added **Blogs** to the main navigation (right after About), the mobile menu and the footer, and wrote four guides that each support a money page.

---

## 2. How we checked

| Playbook step | What we ran | Result |
|---|---|---|
| Phase 4 technical gate / Phase 5 on-page (`/seo audit`, `/seo page`) | Crawl of all 31 prerendered pages: titles, descriptions, H1/H2 structure, word counts, image alt text, canonicals, robots, JSON-LD, sitemap. Plus the project's `npm run verify:seo`. | All pages pass after fixes. 0 failures. |
| Phase 2 keyword research (`/seo cluster`, Semrush) | Semrush keyword and organic reports were called, but the account has **no API units left**, so no volumes or difficulty scores were available. We used live Google results for the target topics to check intent and who ranks. | Intent confirmed. Volumes still missing (see section 6). |
| Phase 1 competitor / AI answer check | Searches for zoo enclosure mesh, aviary mesh size, play net inspection, handrail infill and golf barrier netting. | Results are mostly supplier product pages and manuals, with few specialist contractor guides, so there is room for ours. |
| Loop A content standard (`/seo content`) | Each post checked against the 17-part post standard and the pre-publish checklist. | Passes, except a named author (pending). |

---

## 3. Content and keyword issues found and fixed

| Issue | Priority | Where | Fix | Status |
|---|---|---|---|---|
| H1 is a slogan, not a keyword | High | All 8 application pages ("We Zoo", "We Bridge", "We Golf & Sport"...) | H1 is now the buyer keyword, e.g. "Zoo & Aquarium Netting". The slogan stays visible as the eyebrow above it. | Fixed |
| Home H1 has no keyword | High | Home page ("Imagine the Alter'NET'ives") | The small line above the slogan is now the H1: "Custom Rope & Safety Netting · Phoenix, Arizona · Est. 2003". The slogan looks exactly the same. | Fixed |
| Thin pages, no buyer questions answered | High | Application pages, 59 to 350 words; Decorate only 59 | 3 FAQs per page (24 total), written only from facts already on the site, with FAQPage schema. Pages now run 163 to 475 words. | Fixed |
| File names used as alt text | Medium | 184 gallery photos | Descriptive alt by category, e.g. "Zoo and aquarium netting project by Nets Unlimited, photo 12". Existing good alts kept. | Fixed |
| Hero image alt was the slogan | Low | Application page hero images | Alt now describes the page, e.g. "Zoo & Aquarium Netting by Nets Unlimited". | Fixed |
| Generic H1, no answer-first intro, no FAQs | High | Services hub ("Services") | H1 is now "Custom Netting Services", with a 2-sentence answer-first intro (what we do, for whom, where, licence) and 4 FAQs with FAQPage schema. Page grew from 496 to 670 words. Service image alts made descriptive. | Fixed |
| Generic H1, trust facts missing | Medium | About ("About Us") | H1 is now "About Nets Unlimited", with an intro stating location, services, nationwide coverage, AZ ROC #236070 and 75+ years of combined experience. Image alt with an em dash rewritten. | Fixed |
| Thin gallery pages, generic H1, no link to money page | Medium | 8 gallery category pages (31 to 64 words) and the gallery hub ("All Galleries") | Each gallery has a keyword H1 (e.g. "Zoo & Aquarium Netting Projects"), a one-line intro and a link to its application page. Gallery hub H1 is now "Custom Netting Project Gallery". | Fixed |
| No content for pre-purchase questions | High | Site-wide | Blog module and 4 guides (section 4), each linked from its money page and linking back to it. | Fixed |
| Founding year is inconsistent | Medium | Page text said 2003 (home, about); schema, meta descriptions, llms.txt and the social share image said 2004 | Client confirmed **2003**. Schema foundingDate, home and about meta descriptions, llms.txt and the share image (og-image.webp) now all say 2003 (brand entity consistency, playbook section 8). | Fixed |
| Em dash in home copy | Low | Home hero subheading "and more — crafted..." | House style says no em dashes. Left for copy approval. | Optional |

### Keyword map for the updated pages

| Page | New H1 (primary topic) | Questions now answered |
|---|---|---|
| `/applications/zoo/` | Zoo & Aquarium Netting | Project types, refurbishment, starting without drawings |
| `/applications/waterpark/` | Waterpark & Theme Park Netting | What we supply, replacing worn rope, dry play |
| `/applications/bridge/` | Custom Rope Bridges & Tunnels | Bridge types, suspension vs moving, who we build for |
| `/applications/handrail/` | Rope & Cable Handrail Systems | Materials, stainless lifespan, budget option |
| `/applications/play/` | Custom Rope Play Systems | Elements, small spaces, inspection and repair |
| `/applications/sport/` | Golf & Sports Barrier Netting | What we install, batting cages, course looks |
| `/applications/protect/` | Safety & Fall Protection Netting | Fall/debris netting, secondary barriers, GSA blast netting |
| `/applications/decorate/` | Architectural Rope & Net Decor | Materials, where it is used, decor as handrail |

### Page-by-page check against the playbook on-page checklist (section 10)

Checked on every indexable page, starting from the home page: unique title, unique meta description (120 to 160 characters), one H1 in buyer language, question-led H2s or FAQs, answer-first opening, internal links to related pages, descriptive image alt text, schema matching the page, a clear CTA, indexable and in the sitemap.

| Page | H1 after fixes | Words | Answer-first intro | FAQs + schema | Internal links | Alt text | Status |
|---|---|---|---|---|---|---|---|
| `/` Home | Custom Rope & Safety Netting · Phoenix, Arizona · Est. 2003 | 531 | Yes | 3 FAQs, FAQPage | Applications, services, contact | OK | Pass |
| `/services/` | Custom Netting Services | 670 | Yes (new) | 4 FAQs, FAQPage + Service (new) | Contact | OK (new) | Pass |
| `/about/` | About Nets Unlimited | 284 | Yes (new) | None needed | Contact | OK (new) | Pass |
| `/contact/` | Contact Us | 91 | Contact details first | None needed | Nav and footer | No images | Pass |
| `/privacy/` | Privacy Policy | 314 | Yes | None needed | Contact | No images | Pass |
| `/applications/zoo/` | Zoo & Aquarium Netting | 475 | Yes | 3 FAQs (new) | Gallery, 3 related pages, blog guide | OK | Pass |
| `/applications/waterpark/` | Waterpark & Theme Park Netting | 474 | Yes | 3 FAQs (new) | Gallery, 3 related pages | OK | Pass |
| `/applications/bridge/` | Custom Rope Bridges & Tunnels | 311 | Yes | 3 FAQs (new) | Gallery, 3 related pages | OK | Pass |
| `/applications/handrail/` | Rope & Cable Handrail Systems | 419 | Yes | 3 FAQs (new) | Gallery, 3 related pages, blog guide | OK | Pass |
| `/applications/play/` | Custom Rope Play Systems | 330 | Yes | 3 FAQs (new) | Gallery, 3 related pages, blog guide | OK | Pass |
| `/applications/sport/` | Golf & Sports Barrier Netting | 354 | Yes | 3 FAQs (new) | Gallery, 3 related pages, blog guide | OK | Pass |
| `/applications/protect/` | Safety & Fall Protection Netting | 449 | Yes | 3 FAQs (new) | Gallery, 3 related pages | OK | Pass |
| `/applications/decorate/` | Architectural Rope & Net Decor | 163 | Yes | 3 FAQs (new) | Contact | OK | Pass (mostly a photo page) |
| `/gallery/` | Custom Netting Project Gallery | 285 | Yes | None needed | All gallery categories | OK (new) | Pass |
| 8 gallery category pages | e.g. Zoo & Aquarium Netting Projects | 62 to 95 | Yes (new) | None needed | Application page (new), gallery hub | OK (new) | Pass (photo pages, light text by design) |
| `/blogs/` and 4 guides | Netting Guides & Blog; guide titles | 254 to 933 | Yes | 3 FAQs each, BlogPosting | Money page, other guides, contact | OK | Pass (expert sign-off pending) |
| 4 unlisted service pages | Built from the client's content docs | 523 to 660 | Yes | 5 FAQs each | Each other, applications | OK | Pass (kept out of sitemap and menus on purpose) |

All 31 pages pass `npm run verify:seo` with 0 failures.

---

## 4. Blog module and the four guides

**Blog hub:** `/blogs/` ("Netting Guides & Blog"), in the same design as the Services page. **Blogs** sits in the desktop navigation right after About, and in the mobile menu and footer. Each card opens its guide.

**Every guide follows the playbook post standard:** answer-first intro, key takeaways, table of contents, H2s phrased as buyer questions, first-hand material from Nets Unlimited's own work and photos, every outside fact linked to its source, 3 FAQs, one CTA, author box, AI-assistance disclosure, visible publish date, and BlogPosting + FAQPage + BreadcrumbList schema. No em dashes, no invented numbers, quotes or credentials.

| Guide and URL | Target question | Supports money page | Outside sources |
|---|---|---|---|
| How Often Should Commercial Play Nets Be Inspected?<br>`/blogs/how-often-inspect-commercial-play-nets/` | how often should playground climbing nets be inspected | `/applications/play/`, `/services/` | PlayCore inspection guidance (checked) |
| Rope Netting vs Stainless Steel Mesh for Handrail Infill<br>`/blogs/rope-netting-vs-stainless-steel-mesh-handrails/` | rope netting vs stainless steel mesh handrail | `/applications/handrail/` | ASSDA Taronga Zoo case (checked) |
| How to Choose Mesh Size for a Zoo Aviary or Animal Enclosure<br>`/blogs/zoo-aviary-mesh-size-guide/` | aviary / zoo enclosure mesh size | `/applications/zoo/` | ASSDA Taronga Zoo case (checked) |
| Planning Golf Barrier Netting: Height, Mesh and Poles<br>`/blogs/golf-barrier-netting-planning-guide/` | golf barrier netting height / installation | `/applications/sport/` | Sport Systems Canada guide (checked); Texas public bid (from search listing) |

> Numbers we could not verify at the source (for example vendor claims of typical driving range heights and service-life figures) were left out on purpose. The only lifespan figure used is Nets Unlimited's own claim already on the handrail page (15+ years for stainless).

### Internal linking

- Each guide links to its money page in the first half of the post and ends with a CTA to `/contact/`.
- The zoo, handrail, play and sport pages now link to their guide ("Further reading") under the FAQs.
- Each guide links to the other three ("More guides").
- Guides do **not** link to the four unlisted service detail pages, as instructed earlier.

---

## 5. Verification

| Check | Result |
|---|---|
| Build and prerender | 31 routes prerendered with full HTML, metadata and JSON-LD |
| `npm run verify:seo` | 0 page failures, no duplicate titles or descriptions, sitemap matches built pages |
| Sitemap | 22 URLs. `/blogs/` and the 4 guides are built and linked on the site but **kept out of the sitemap for now** (listed in `src/data/unlistedPages.json`); add them once the posts are approved. Unlisted service pages also excluded. |
| Titles / descriptions | All guides within 60 / 160 characters |
| Schema | BlogPosting, FAQPage and BreadcrumbList on each guide; FAQPage on each application page |
| Redirects | `/blogs` and `/blogs/<slug>` without a slash 301 to the slash version (`.htaccess` and `vercel.json`) |
| Navigation | Home → Services → About → **Blogs** → Applications → Galleries → Contact Us |
| Visual check | Screenshots of the blog hub, a guide, the home hero and an application page match the site design |

---

## 6. Open items before and after go-live

| Item | Why | Owner |
|---|---|---|
| **Named expert fact-checks and approves each guide** | Playbook rules 7 and 9 and Google's October 2026 AI content guidance. Posts are authored by "the Nets Unlimited team" until a real person signs them; then add a real author page with photo and LinkedIn. | Nets Unlimited expert + account lead |
| Keyword volumes and difficulty | Semrush API units are used up. Top up units (or use Ahrefs / Keyword Planner) to add volumes to the keyword map and prioritise the next guides. | SEO team |
| Add blogs to sitemap, then submit | After expert approval: remove the blog paths from `src/data/unlistedPages.json`, rebuild, deploy, then submit the sitemap in Search Console and Bing and inspect `/blogs/` and the 4 guides (playbook Phase 6). | SEO team |
| Track results | Review the guides at 30, 90 and 180 days in Search Console; add a GA4 event on the guide CTAs. | Analyst |
| Next guides | Waterpark rope replacement, rope bridge types, fall/debris netting, net repair vs replacement. | Content lead |

---

## 7. Files changed

- **New:** `src/data/blogPosts.tsx`, `src/pages/blog/BlogIndex.tsx`, `src/pages/blog/BlogPost.tsx`, `src/data/applicationContent.ts`
- **Updated:** `src/app/routes.ts`, `src/components/shared/SEO.tsx`, `src/components/shared/Breadcrumbs.tsx`, `src/components/layout/Header.tsx`, `src/components/layout/Footer.tsx`, `src/pages/Home.tsx`, `src/pages/applications/ApplicationPage.tsx`, `src/pages/applications/Decorate.tsx`, `src/pages/Services.tsx`, `src/pages/About.tsx`, `src/pages/gallery/GalleryIndex.tsx`, `src/pages/gallery/GalleryCategory.tsx`, `src/data/serviceFaqs.ts`, `src/data/galleryData.ts`
- **Config:** `public/.htaccess`, `vercel.json`, `public/llms.txt`, `public/sitemap.xml`

---

### Sources used in the guides

- [PlayCore: Playground maintenance, the process and when to perform inspections](https://www.playcore.com/news/playground-maintenance-the-process-and-when-to-perform-inspections)
- [ASSDA: Taronga Zoo chimpanzee sanctuary stainless steel mesh](https://assda.asn.au/blog/249-chimpanzee-sanctuary)
- [Sport Systems Canada: The ultimate guide to custom netting barriers](https://www.sportsystemscanada.com/netting-guide/)
- [BidNet Direct: Barrier netting at Grey Rock Golf Course driving range (public bid)](https://www.bidnetdirect.com/texas/solicitations/open-bids/statewide/Barrier-netting-at-Grey-Rock-Golf-course-driving-range/906870854)

*Prepared with Claude Code following the Novatore SEO Playbook v1.4. All AI-drafted content is marked for human review before publishing.*
