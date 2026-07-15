import zooHeroOrangutanEnrichment from "../../imports/zoo-hero-orangutan-enrichment.png";
import handrailHeroWalkway from "../../imports/handrail-hero-walkway.png";
import playSpiderwebNet from "../../imports/play-spiderweb-net.png";
import decorate1 from "../../imports/decorate/decorate-1.png";

// Keep every related-application card in sync with the first (hero) image
// shown on that application's own page.
export const applicationCardImages: Record<string, string> = {
  "/applications/zoo": zooHeroOrangutanEnrichment,
  "/applications/waterpark":
    "https://images.unsplash.com/photo-1642717841683-c0323214617c?w=900&h=700&fit=crop&auto=format",
  "/applications/bridge":
    "https://images.unsplash.com/photo-1554992985-8ab04fbe59b8?w=900&h=700&fit=crop&auto=format",
  "/applications/handrail": handrailHeroWalkway,
  "/applications/play": playSpiderwebNet,
  "/applications/sport":
    "https://images.unsplash.com/photo-1632946269126-0f8edbe8b068?w=900&h=700&fit=crop&auto=format",
  "/applications/protect":
    "https://images.unsplash.com/photo-1778941120800-6ecd662bbc36?w=900&h=700&fit=crop&auto=format",
  "/applications/decorate": decorate1,
};
