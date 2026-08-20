import { mkdir, readFile, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";

const root = new URL("../", import.meta.url).pathname.replace(/^\/(.:)/, "$1");
const dist = join(root, "dist");
const shell = await readFile(join(dist, "index.html"), "utf8");
const baseUrl = "https://netsunlimited.com";

const pages = [
  ["services", "Custom Netting Services | Nets Unlimited", "Planning, custom fabrication, installation, inspection and maintenance services for commercial rope and netting systems."],
  ["about", "About Our Netting Experts | Nets Unlimited", "Meet the licensed, bonded and insured Phoenix team delivering custom rope and netting solutions nationwide since 2004."],
  ["contact", "Contact Nets Unlimited | Request a Quote", "Request a quote for a custom rope, safety netting, enclosure, handrail, bridge or play-system project."],
  ["privacy", "Privacy Policy | Nets Unlimited", "Read how Nets Unlimited handles contact-form information, third-party website services and privacy requests when you use our website."],
  ["applications/zoo", "Zoo & Aquarium Netting Solutions | Nets Unlimited", "Custom zoo and aquarium net enclosures, exhibit refurbishment and animal enrichment systems designed for safety and visibility."],
  ["applications/waterpark", "Waterpark & Theme Park Netting | Nets Unlimited", "Custom barriers, handrails, slide covers and dry-play rope systems for waterparks, resorts and theme parks."],
  ["applications/bridge", "Custom Rope Bridges & Tunnels | Nets Unlimited", "Stationary, suspension, V-bridge and tunnel systems custom-built for zoos, parks, resorts and play environments."],
  ["applications/handrail", "Rope & Cable Handrail Systems | Nets Unlimited", "Decorative and protective handrails made from rope, knotted netting, cable and hand-woven stainless steel."],
  ["applications/play", "Custom Rope Play Systems | Nets Unlimited", "Interactive climbing nets, tunnels, spiderwebs and rope play elements custom-built for engaging play environments."],
  ["applications/sport", "Golf & Sports Barrier Netting | Nets Unlimited", "Custom golf, court and sports containment netting engineered for facilities, communities and public spaces."],
  ["applications/protect", "Safety & Fall Protection Netting | Nets Unlimited", "Custom fall, debris, secondary-barrier and risk-mitigation netting for commercial and public environments."],
  ["applications/decorate", "Architectural Rope & Net Decor | Nets Unlimited", "Custom rope, cable and netting installations that add distinctive architectural theming and decor."],
  ["gallery", "Custom Netting Project Gallery | Nets Unlimited", "Explore completed zoo, waterpark, bridge, handrail, play, sports and protection-netting projects."],
  ["gallery/zoos", "Zoo & Aquarium Netting Gallery | Nets Unlimited", "View completed zoo and aquarium enclosure and enrichment projects by Nets Unlimited."],
  ["gallery/waterparks", "Waterpark Netting Gallery | Nets Unlimited", "View custom barriers, handrails and rope systems completed for waterparks and theme parks."],
  ["gallery/bridges", "Rope Bridges & Tunnels Gallery | Nets Unlimited", "View custom rope bridge and tunnel projects for zoos, parks, resorts and play environments."],
  ["gallery/handrails", "Rope & Cable Handrails Gallery | Nets Unlimited", "View decorative rope, cable, netting and stainless-steel handrail projects."],
  ["gallery/play-elements", "Rope Play Elements Gallery | Nets Unlimited", "View custom climbing nets, rope tunnels, spiderwebs and interactive play systems."],
  ["gallery/golf-and-sport", "Golf & Sports Netting Gallery | Nets Unlimited", "View golf, court and sports containment netting projects by Nets Unlimited."],
  ["gallery/protection-netting", "Protection Netting Gallery | Nets Unlimited", "View fall, debris and secondary protection netting projects by Nets Unlimited."],
  ["gallery/we-decorate", "Architectural Rope & Net Decor Gallery | Nets Unlimited", "View custom rope, cable, mesh and netting installations created for architectural theming and decor."],
];

function completeDescription(description) {
  if (description.length >= 120) return description;
  if (description.length >= 105) return `${description} Request a project consultation.`;
  if (description.length >= 90) return `${description} Contact our team for a project consultation.`;
  return `${description} View projects and contact our team to plan a custom installation.`;
}

const serviceNames = {
  services: "Custom netting design, fabrication, installation and maintenance",
  "applications/zoo": "Zoo and aquarium netting",
  "applications/waterpark": "Waterpark and theme park netting",
  "applications/bridge": "Custom rope bridges and tunnels",
  "applications/handrail": "Rope and cable handrail systems",
  "applications/play": "Custom rope play systems",
  "applications/sport": "Golf and sports barrier netting",
  "applications/protect": "Safety and fall protection netting",
  "applications/decorate": "Architectural rope and net decor",
};

function escape(value) {
  return value.replaceAll("&", "&amp;").replaceAll('"', "&quot;").replaceAll("<", "&lt;").replaceAll(">", "&gt;");
}

function schemaFor(route, title, description, canonical) {
  const organization = {
    "@type": ["LocalBusiness", "Organization"],
    "@id": `${baseUrl}/#organization`,
    name: "Nets Unlimited, Inc.", url: `${baseUrl}/`,
    logo: { "@type": "ImageObject", url: `${baseUrl}/favicon.png` },
    image: `${baseUrl}/og-image.webp`, telephone: "+1-480-515-1300",
    email: "info@netsunlimited.com", foundingDate: "2004",
    contactPoint: { "@type": "ContactPoint", telephone: "+1-480-515-1300", email: "info@netsunlimited.com", contactType: "customer service", availableLanguage: "English" },
    address: { "@type": "PostalAddress", streetAddress: "20625 North 29th Place", addressLocality: "Phoenix", addressRegion: "AZ", postalCode: "85050", addressCountry: "US" },
    openingHoursSpecification: [{ "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], opens: "07:00", closes: "16:00" }],
    areaServed: { "@type": "Country", name: "United States" },
    hasMap: "https://maps.app.goo.gl/Ka7icMBxsSZ5ZPRz8",
    sameAs: [
      "https://www.facebook.com/NetsUnlimited/",
      "https://www.houzz.com/pro/webuser-536029029/__public",
      "https://www.instagram.com/netsunlimitedinc/",
      "https://www.linkedin.com/company/nets-unlimited-inc",
      "https://www.pinterest.com/NetsUnlimitedInc/",
      "https://x.com/nets_unlimited",
      "https://www.yelp.com/biz/nets-unlimited-phoenix-2",
    ],
  };
  const graph = [
    organization,
    { "@type": "WebSite", "@id": `${baseUrl}/#website`, url: `${baseUrl}/`, name: "Nets Unlimited", publisher: { "@id": `${baseUrl}/#organization` }, inLanguage: "en-US" },
    { "@type": route === "contact" ? "ContactPage" : route === "about" ? "AboutPage" : "WebPage", "@id": `${canonical}#webpage`, url: canonical, name: title, description, isPartOf: { "@id": `${baseUrl}/#website` }, about: { "@id": `${baseUrl}/#organization` }, inLanguage: "en-US" },
  ];
  if (route) {
    const segments = route.split("/");
    const items = [{ "@type": "ListItem", position: 1, name: "Home", item: `${baseUrl}/` }];
    if (segments.length > 1) items.push({ "@type": "ListItem", position: 2, name: segments[0] === "gallery" ? "Project Gallery" : "Services", item: segments[0] === "gallery" ? `${baseUrl}/gallery/` : `${baseUrl}/services/` });
    items.push({ "@type": "ListItem", position: items.length + 1, name: title.split(" | ")[0], item: canonical });
    graph.push({ "@type": "BreadcrumbList", "@id": `${canonical}#breadcrumb`, itemListElement: items });
  }
  if (serviceNames[route]) graph.push({
    "@type": "Service", "@id": `${canonical}#service`, name: serviceNames[route],
    description, url: canonical, provider: { "@id": `${baseUrl}/#organization` },
    areaServed: { "@type": "Country", name: "United States" }, serviceType: serviceNames[route],
  });
  return JSON.stringify({ "@context": "https://schema.org", "@graph": graph }).replaceAll("<", "\\u003c");
}

function fallbackContent(route, title, description) {
  const heading = title.split(" | ")[0];
  if (!route) return `<div data-first-paint="true">
    <style>
      [data-first-paint]{min-height:100vh;background:#102a1d;color:#fff;font-family:Inter,ui-sans-serif,system-ui,-apple-system,"Segoe UI",sans-serif}
      .fp-header{position:absolute;z-index:2;inset:0 0 auto;height:80px;padding:0 5vw;display:flex;align-items:center;justify-content:space-between}.fp-logo{width:149px;height:auto;filter:brightness(0) invert(1)}
      .fp-nav{display:flex;gap:26px;align-items:center}.fp-nav a{color:#fff;text-decoration:none;font-size:14px}.fp-contact{background:#1f4a32;padding:10px 20px}
      .fp-hero{min-height:100vh;display:grid;grid-template-columns:55fr 45fr}.fp-copy{padding:120px 7vw 80px;display:flex;flex-direction:column;justify-content:center}
      .fp-kicker{margin:0 0 24px;color:#c98254;font-size:12px;font-weight:600;letter-spacing:.13em;text-transform:uppercase}.fp-title{max-width:680px;margin:0 0 28px;font-family:Georgia,"Times New Roman",serif;font-size:clamp(48px,5vw,72px);font-weight:400;line-height:1.05;letter-spacing:-.02em}.fp-accent{color:#c98254}
      .fp-description{max-width:540px;margin:0 0 36px;color:rgba(255,255,255,.72);font-size:clamp(18px,1.7vw,24px);line-height:1.6}.fp-actions{display:flex;gap:28px;align-items:center}.fp-actions a{color:#fff;text-decoration:none;font-size:14px}.fp-quote{background:#b5744a;padding:14px 32px}
      .fp-image{background:url('/images/home-heroes/themed-play.webp') center/cover no-repeat;position:relative}.fp-image:after{content:"";position:absolute;inset:0;background:rgba(16,42,29,.25)}
      @media(max-width:1023px){.fp-header{height:56px;padding:0 40px}.fp-logo{width:96px}.fp-nav{display:none}.fp-hero{display:block}.fp-copy{box-sizing:border-box;min-height:100vh;padding:96px 40px 64px}.fp-title{font-size:48px}.fp-description{font-size:20px}.fp-image{display:none}}
      @media(max-width:420px){.fp-header{padding:0 24px}.fp-title{font-size:46px}.fp-description{font-size:18px}}
    </style>
    <header class="fp-header"><a href="/" aria-label="Nets Unlimited home"><img class="fp-logo" src="/nets-unlimited-logo-160.webp" width="160" height="68" alt="Nets Unlimited, Inc."></a><nav class="fp-nav" aria-label="Primary"><a href="/">Home</a><a href="/services/">Services</a><a href="/about/">About</a><a href="/gallery/">Galleries</a><a class="fp-contact" href="/contact/">Contact Us</a></nav></header>
    <main class="fp-hero"><div class="fp-copy"><p class="fp-kicker">Phoenix, Arizona &middot; Est. 2003</p><h1 class="fp-title">Imagine the Alter<span class="fp-accent">'NET'</span>ives</h1><p class="fp-description">Custom rope and netting solutions for zoos, waterparks, play areas, handrails, bridges, and more &mdash; crafted with expert precision since 2003.</p><div class="fp-actions"><a class="fp-quote" href="/contact/">Get a Quote</a><a href="/gallery/">View Our Work</a></div></div><div class="fp-image" role="img" aria-label="Themed rope and net play structure"></div></main>
  </div>`;
  return `<div data-seo-fallback="true" hidden><header><a href="/" aria-label="Nets Unlimited home">Nets Unlimited</a><nav aria-label="Primary"><a href="/services/">Services</a> <a href="/gallery/">Project Gallery</a> <a href="/about/">About</a> <a href="/contact/">Contact</a></nav></header><main><h1>${escape(heading)}</h1><p>${escape(description)}</p><p>Nets Unlimited designs, fabricates, installs, inspects and maintains custom rope and netting systems for commercial projects across the United States.</p><a href="/contact/">Request a custom netting project consultation</a></main></div>`;
}

const allPages = [["", "Custom Rope & Safety Netting | Nets Unlimited", "Custom rope, safety netting, animal enclosures, handrails, bridges and play systems for zoos, waterparks and commercial projects since 2004."], ...pages];

for (const [route, title, rawDescription] of allPages) {
  const description = completeDescription(rawDescription);
  const canonical = route ? `${baseUrl}/${route}/` : `${baseUrl}/`;
  const html = shell
    .replace(/<title>.*?<\/title>/, `<title>${escape(title)}</title>`)
    .replace(/<meta name="description" content="[^"]*" \/>/, `<meta name="description" content="${escape(description)}" />`)
    .replace(/<link rel="canonical" href="[^"]*" \/>/, `<link rel="canonical" href="${canonical}" />`)
    .replace(/<meta property="og:title" content="[^"]*" \/>/, `<meta property="og:title" content="${escape(title)}" />`)
    .replace(/<meta property="og:description" content="[^"]*" \/>/, `<meta property="og:description" content="${escape(description)}" />`)
    .replace(/<meta property="og:url" content="[^"]*" \/>/, `<meta property="og:url" content="${canonical}" />`)
    .replace(/<meta name="twitter:title" content="[^"]*" \/>/, `<meta name="twitter:title" content="${escape(title)}" />`)
    .replace(/<meta name="twitter:description" content="[^"]*" \/>/, `<meta name="twitter:description" content="${escape(description)}" />`)
    .replace("</head>", `  <script type="application/ld+json" data-static-schema="true">${schemaFor(route, title, description, canonical)}</script>\n    </head>`)
    .replace('<div id="root"></div>', `<div id="root">${fallbackContent(route, title, description)}</div>`);
  const output = route ? join(dist, route, "index.html") : join(dist, "index.html");
  await mkdir(dirname(output), { recursive: true });
  await writeFile(output, html);
}

console.log(`Generated ${allPages.length} crawlable route entry points with initial HTML and JSON-LD.`);
