import { useEffect } from "react";
import { useLocation } from "react-router";
import { homeFaqs } from "../../data/homeFaqs";

const SITE_URL = "https://netsunlimited.com";
const DEFAULT_IMAGE = `${SITE_URL}/og-image.webp`;
const IMAGE_ALT = "Nets Unlimited custom rope and netting solutions";
const INDEX_ROBOTS = "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1";

type PageSEO = { title: string; description: string; noindex?: boolean };

function completeDescription(description: string) {
  if (description.length >= 120) return description;
  if (description.length >= 105) return `${description} Request a project consultation.`;
  if (description.length >= 90) return `${description} Contact our team for a project consultation.`;
  return `${description} View projects and contact our team to plan a custom installation.`;
}

// Single source for page metadata. The build script reads it through the
// server bundle, so the static HTML and the client-side updates always match.
const pages: Record<string, PageSEO> = {
  "/": { title: "Custom Rope & Safety Netting | Nets Unlimited", description: "Custom rope, safety netting, animal enclosures, handrails, bridges and play systems for zoos, waterparks and commercial projects since 2004." },
  "/services": { title: "Custom Netting Services | Nets Unlimited", description: "Planning, custom fabrication, installation, inspection and maintenance services for commercial rope and netting systems." },
  "/about": { title: "About Our Netting Experts | Nets Unlimited", description: "Meet the licensed, bonded and insured Phoenix team delivering custom rope and netting solutions nationwide since 2004." },
  "/contact": { title: "Contact Nets Unlimited | Request a Quote", description: "Request a quote for a custom rope, safety netting, enclosure, handrail, bridge or play-system project." },
  "/privacy": { title: "Privacy Policy | Nets Unlimited", description: "Read how Nets Unlimited handles contact-form information, third-party website services and privacy requests when you use our website." },
  "/applications/zoo": { title: "Zoo & Aquarium Netting Solutions | Nets Unlimited", description: "Custom zoo and aquarium net enclosures, exhibit refurbishment and animal enrichment systems designed for safety and visibility." },
  "/applications/waterpark": { title: "Waterpark & Theme Park Netting | Nets Unlimited", description: "Custom barriers, handrails, slide covers and dry-play rope systems for waterparks, resorts and theme parks." },
  "/applications/bridge": { title: "Custom Rope Bridges & Tunnels | Nets Unlimited", description: "Stationary, suspension, V-bridge and tunnel systems custom-built for zoos, parks, resorts and play environments." },
  "/applications/handrail": { title: "Rope & Cable Handrail Systems | Nets Unlimited", description: "Decorative and protective handrails made from rope, knotted netting, cable and hand-woven stainless steel." },
  "/applications/play": { title: "Custom Rope Play Systems | Nets Unlimited", description: "Interactive climbing nets, tunnels, spiderwebs and rope play elements custom-built for engaging play environments." },
  "/applications/sport": { title: "Golf & Sports Barrier Netting | Nets Unlimited", description: "Custom golf, court and sports containment netting engineered for facilities, communities and public spaces." },
  "/applications/protect": { title: "Safety & Fall Protection Netting | Nets Unlimited", description: "Custom fall, debris, secondary-barrier and risk-mitigation netting for commercial and public environments." },
  "/applications/decorate": { title: "Architectural Rope & Net Decor | Nets Unlimited", description: "Custom rope, cable and netting installations that add distinctive architectural theming and decor." },
  "/gallery": { title: "Custom Netting Project Gallery | Nets Unlimited", description: "Explore completed zoo, waterpark, bridge, handrail, play, sports and protection-netting projects." },
  "/gallery/zoos": { title: "Zoo & Aquarium Netting Gallery | Nets Unlimited", description: "View completed zoo and aquarium enclosure and enrichment projects by Nets Unlimited." },
  "/gallery/waterparks": { title: "Waterpark Netting Gallery | Nets Unlimited", description: "View custom barriers, handrails and rope systems completed for waterparks and theme parks." },
  "/gallery/bridges": { title: "Rope Bridges & Tunnels Gallery | Nets Unlimited", description: "View custom rope bridge and tunnel projects for zoos, parks, resorts and play environments." },
  "/gallery/handrails": { title: "Rope & Cable Handrails Gallery | Nets Unlimited", description: "View decorative rope, cable, netting and stainless-steel handrail projects." },
  "/gallery/play-elements": { title: "Rope Play Elements Gallery | Nets Unlimited", description: "View custom climbing nets, rope tunnels, spiderwebs and interactive play systems." },
  "/gallery/golf-and-sport": { title: "Golf & Sports Netting Gallery | Nets Unlimited", description: "View golf, court and sports containment netting projects by Nets Unlimited." },
  "/gallery/protection-netting": { title: "Protection Netting Gallery | Nets Unlimited", description: "View fall, debris and secondary protection netting projects by Nets Unlimited." },
  "/gallery/we-decorate": { title: "Architectural Rope & Net Decor Gallery | Nets Unlimited", description: "View custom rope, cable, mesh and netting installations created for architectural theming and decor." },
};

const notFound: PageSEO = { title: "Page Not Found | Nets Unlimited", description: "The requested page could not be found.", noindex: true };

const serviceNames: Record<string, string> = {
  "/services": "Custom netting design, fabrication, installation and maintenance",
  "/applications/zoo": "Zoo and aquarium netting",
  "/applications/waterpark": "Waterpark and theme park netting",
  "/applications/bridge": "Custom rope bridges and tunnels",
  "/applications/handrail": "Rope and cable handrail systems",
  "/applications/play": "Custom rope play systems",
  "/applications/sport": "Golf and sports barrier netting",
  "/applications/protect": "Safety and fall protection netting",
  "/applications/decorate": "Architectural rope and net decor",
};

function normalize(pathname: string) {
  return pathname === "/" ? "/" : pathname.replace(/\/+$/, "") || "/";
}

export const indexablePaths = Object.keys(pages);

export function pageSeo(pathname: string) {
  const path = normalize(pathname);
  const page = pages[path] ?? notFound;
  const canonical = path === "/" ? `${SITE_URL}/` : `${SITE_URL}${path}/`;
  return {
    path,
    title: page.title,
    description: completeDescription(page.description),
    canonical,
    robots: page.noindex ? "noindex, follow" : INDEX_ROBOTS,
    noindex: Boolean(page.noindex),
  };
}

export function schemaGraph(pathname: string) {
  const { path, title, description, canonical } = pageSeo(pathname);
  const graph: object[] = [
    {
      "@type": ["LocalBusiness", "Organization"],
      "@id": `${SITE_URL}/#organization`, name: "Nets Unlimited, Inc.", url: `${SITE_URL}/`,
      logo: { "@type": "ImageObject", url: `${SITE_URL}/apple-touch-icon.png`, width: 180, height: 180 },
      image: DEFAULT_IMAGE, telephone: "+1-480-515-1300",
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
      knowsAbout: ["Custom netting", "Rope fabrication", "Animal enclosures", "Safety netting", "Rope bridges", "Commercial handrails"],
    },
    { "@type": "WebSite", "@id": `${SITE_URL}/#website`, url: `${SITE_URL}/`, name: "Nets Unlimited", publisher: { "@id": `${SITE_URL}/#organization` }, inLanguage: "en-US" },
    {
      "@type": path === "/contact" ? "ContactPage" : path === "/about" ? "AboutPage" : path.startsWith("/gallery") ? "CollectionPage" : "WebPage",
      "@id": `${canonical}#webpage`, url: canonical, name: title, description,
      isPartOf: { "@id": `${SITE_URL}/#website` }, about: { "@id": `${SITE_URL}/#organization` },
      primaryImageOfPage: { "@type": "ImageObject", url: DEFAULT_IMAGE }, inLanguage: "en-US",
      ...(path === "/" ? {} : { breadcrumb: { "@id": `${canonical}#breadcrumb` } }),
    },
  ];
  if (path !== "/") {
    // Mirrors the visible <Breadcrumbs /> trail.
    const segments = path.split("/").filter(Boolean);
    const items = [{ "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` }];
    if (segments.length > 1) items.push(segments[0] === "gallery"
      ? { "@type": "ListItem", position: 2, name: "Project Gallery", item: `${SITE_URL}/gallery/` }
      : { "@type": "ListItem", position: 2, name: "Services", item: `${SITE_URL}/services/` });
    items.push({ "@type": "ListItem", position: items.length + 1, name: title.split(" | ")[0], item: canonical });
    graph.push({ "@type": "BreadcrumbList", "@id": `${canonical}#breadcrumb`, itemListElement: items });
  }
  if (serviceNames[path]) graph.push({
    "@type": "Service", "@id": `${canonical}#service`, name: serviceNames[path],
    description, url: canonical, provider: { "@id": `${SITE_URL}/#organization` },
    areaServed: { "@type": "Country", name: "United States" }, serviceType: serviceNames[path],
  });
  if (path === "/") graph.push({
    "@type": "FAQPage", "@id": `${canonical}#faq`,
    mainEntity: homeFaqs.map((faq) => ({ "@type": "Question", name: faq.question, acceptedAnswer: { "@type": "Answer", text: faq.answer } })),
  });
  return { "@context": "https://schema.org", "@graph": graph };
}

function setMeta(selector: string, attribute: "name" | "property", key: string, content: string) {
  let element = document.head.querySelector<HTMLMetaElement>(selector);
  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attribute, key);
    document.head.appendChild(element);
  }
  element.content = content;
}

export function SEO() {
  const { pathname } = useLocation();

  useEffect(() => {
    const page = pageSeo(pathname);

    document.title = page.title;
    setMeta('meta[name="description"]', "name", "description", page.description);
    setMeta('meta[name="robots"]', "name", "robots", page.robots);
    setMeta('meta[property="og:title"]', "property", "og:title", page.title);
    setMeta('meta[property="og:description"]', "property", "og:description", page.description);
    setMeta('meta[property="og:url"]', "property", "og:url", page.canonical);
    setMeta('meta[property="og:image"]', "property", "og:image", DEFAULT_IMAGE);
    setMeta('meta[property="og:image:width"]', "property", "og:image:width", "1200");
    setMeta('meta[property="og:image:height"]', "property", "og:image:height", "630");
    setMeta('meta[property="og:image:alt"]', "property", "og:image:alt", IMAGE_ALT);
    setMeta('meta[name="twitter:title"]', "name", "twitter:title", page.title);
    setMeta('meta[name="twitter:description"]', "name", "twitter:description", page.description);
    setMeta('meta[name="twitter:image"]', "name", "twitter:image", DEFAULT_IMAGE);
    setMeta('meta[name="twitter:image:alt"]', "name", "twitter:image:alt", IMAGE_ALT);

    let canonicalLink = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement("link");
      canonicalLink.rel = "canonical";
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.href = page.canonical;

    document.querySelectorAll('script[data-seo-schema="true"], script[data-static-schema="true"]').forEach((node) => node.remove());
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.dataset.seoSchema = "true";
    script.textContent = JSON.stringify(schemaGraph(pathname));
    document.head.appendChild(script);
  }, [pathname]);

  return null;
}
