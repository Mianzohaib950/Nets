import { useEffect } from "react";
import { useLocation } from "react-router";

const SITE_URL = "https://netsunlimited.com";
const DEFAULT_IMAGE = `${SITE_URL}/og-image.webp`;

type PageSEO = { title: string; description: string; noindex?: boolean };

function completeDescription(description: string) {
  if (description.length >= 120) return description;
  if (description.length >= 105) return `${description} Request a project consultation.`;
  if (description.length >= 90) return `${description} Contact our team for a project consultation.`;
  return `${description} View projects and contact our team to plan a custom installation.`;
}

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
};

const galleryNames: Record<string, string> = {
  zoos: "Zoo & Aquarium Netting",
  waterparks: "Waterpark & Theme Park Netting",
  bridges: "Rope Bridges & Tunnels",
  handrails: "Rope & Cable Handrails",
  "play-elements": "Rope Play Elements",
  "golf-and-sport": "Golf & Sports Netting",
  "protection-netting": "Protection Netting",
  "we-decorate": "Architectural Rope & Net Decor",
};

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
    const normalizedPath = pathname === "/" ? "/" : pathname.replace(/\/+$/, "");
    const gallerySlug = normalizedPath.startsWith("/gallery/") ? normalizedPath.split("/")[2] : "";
    const galleryName = galleryNames[gallerySlug];
    const page = pages[normalizedPath] ?? (galleryName ? {
      title: `${galleryName} Gallery | Nets Unlimited`,
      description: `View completed ${galleryName.toLowerCase()} projects designed, fabricated and installed by Nets Unlimited.`,
    } : { title: "Page Not Found | Nets Unlimited", description: "The requested page could not be found.", noindex: true });
    page.description = completeDescription(page.description);
    const canonicalPath = normalizedPath === "/" ? "/" : `${normalizedPath}/`;
    const canonical = `${SITE_URL}${canonicalPath}`;
    const robots = page.noindex ? "noindex, follow" : "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1";

    document.title = page.title;
    setMeta('meta[name="description"]', "name", "description", page.description);
    setMeta('meta[name="robots"]', "name", "robots", robots);
    setMeta('meta[property="og:title"]', "property", "og:title", page.title);
    setMeta('meta[property="og:description"]', "property", "og:description", page.description);
    setMeta('meta[property="og:url"]', "property", "og:url", canonical);
    setMeta('meta[property="og:image"]', "property", "og:image", DEFAULT_IMAGE);
    setMeta('meta[property="og:image:width"]', "property", "og:image:width", "1200");
    setMeta('meta[property="og:image:height"]', "property", "og:image:height", "630");
    setMeta('meta[property="og:image:alt"]', "property", "og:image:alt", "Nets Unlimited custom rope and netting solutions");
    setMeta('meta[name="twitter:title"]', "name", "twitter:title", page.title);
    setMeta('meta[name="twitter:description"]', "name", "twitter:description", page.description);
    setMeta('meta[name="twitter:image"]', "name", "twitter:image", DEFAULT_IMAGE);
    setMeta('meta[name="twitter:image:alt"]', "name", "twitter:image:alt", "Nets Unlimited custom rope and netting solutions");

    let canonicalLink = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement("link");
      canonicalLink.rel = "canonical";
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.href = canonical;

    document.querySelectorAll('script[data-seo-schema="true"], script[data-static-schema="true"]').forEach((node) => node.remove());
    const schemas: object[] = [
      {
        "@context": "https://schema.org", "@type": ["LocalBusiness", "Organization"],
        "@id": `${SITE_URL}/#organization`, name: "Nets Unlimited, Inc.", url: SITE_URL,
        logo: `${SITE_URL}/favicon.png`, image: DEFAULT_IMAGE, telephone: "+1-480-515-1300",
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
      { "@context": "https://schema.org", "@type": normalizedPath === "/contact" ? "ContactPage" : normalizedPath === "/about" ? "AboutPage" : "WebPage", "@id": `${canonical}#webpage`, url: canonical, name: page.title, description: page.description, isPartOf: { "@id": `${SITE_URL}/#website` }, about: { "@id": `${SITE_URL}/#organization` }, inLanguage: "en-US" },
      { "@context": "https://schema.org", "@type": "WebSite", "@id": `${SITE_URL}/#website`, url: SITE_URL, name: "Nets Unlimited", publisher: { "@id": `${SITE_URL}/#organization` } },
    ];
    if (normalizedPath !== "/") {
      const segments = normalizedPath.split("/").filter(Boolean);
      const items = [{ "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` }];
      if (segments.length > 1) items.push({ "@type": "ListItem", position: 2, name: segments[0] === "applications" ? "Applications" : "Gallery", item: segments[0] === "gallery" ? `${SITE_URL}/gallery/` : `${SITE_URL}/#applications` });
      items.push({ "@type": "ListItem", position: items.length + 1, name: page.title.split(" | ")[0], item: canonical });
      schemas.push({
      "@context": "https://schema.org", "@type": "BreadcrumbList",
      itemListElement: items,
      });
    }
    if (serviceNames[normalizedPath]) schemas.push({
      "@context": "https://schema.org", "@type": "Service", "@id": `${canonical}#service`,
      name: serviceNames[normalizedPath], description: page.description, url: canonical,
      provider: { "@id": `${SITE_URL}/#organization` }, areaServed: { "@type": "Country", name: "United States" },
      serviceType: serviceNames[normalizedPath],
    });
    schemas.forEach((schema) => {
      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.dataset.seoSchema = "true";
      script.textContent = JSON.stringify(schema);
      document.head.appendChild(script);
    });
  }, [pathname]);

  return null;
}
