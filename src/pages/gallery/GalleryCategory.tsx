import { useState, useEffect, useCallback } from "react";
import { useParams, Link } from "react-router";
import { X, ChevronLeft, ChevronRight, ArrowLeft } from "lucide-react";
import * as Dialog from "@radix-ui/react-dialog";
import { AnimateIn } from "../../components/shared/AnimateIn";

interface GalleryItem {
  id: number;
  src: string;
  alt: string;
  w?: number;
  h?: number;
}

const categoryData: Record<string, { title: string; items: GalleryItem[] }> = {
  zoos: {
    title: "Zoos & Aquariums",
    items: [
      { id: 1, src: "https://images.unsplash.com/photo-1714466614031-b128463b8767?w=800&h=600&fit=crop&auto=format", alt: "Giraffe in zoo exhibit", w: 800, h: 600 },
      { id: 2, src: "https://images.unsplash.com/photo-1779612547670-6b9eb9cf61ca?w=700&h=900&fit=crop&auto=format", alt: "Polar bears by water", w: 700, h: 900 },
      { id: 3, src: "https://images.unsplash.com/photo-1691328431608-58fa2e5d9592?w=800&h=600&fit=crop&auto=format", alt: "Zebras in natural habitat", w: 800, h: 600 },
      { id: 4, src: "https://images.unsplash.com/photo-1780608775906-f7315afc979e?w=800&h=500&fit=crop&auto=format", alt: "Geodesic netting structure", w: 800, h: 500 },
      { id: 5, src: "https://images.unsplash.com/photo-1554992985-8ab04fbe59b8?w=600&h=800&fit=crop&auto=format", alt: "Rope enclosure bridge", w: 600, h: 800 },
      { id: 6, src: "https://images.unsplash.com/photo-1563300467-5a9220d63233?w=800&h=600&fit=crop&auto=format", alt: "Animal exhibit netting", w: 800, h: 600 },
      { id: 7, src: "https://images.unsplash.com/photo-1714466614031-b128463b8767?w=700&h=900&fit=crop&auto=format", alt: "Zoo exhibit fencing", w: 700, h: 900 },
      { id: 8, src: "https://images.unsplash.com/photo-1779612547670-6b9eb9cf61ca?w=800&h=600&fit=crop&auto=format", alt: "Aquatic exhibit", w: 800, h: 600 },
    ],
  },
  waterparks: {
    title: "Waterparks & Themeparks",
    items: [
      { id: 1, src: "https://images.unsplash.com/photo-1642717841683-c0323214617c?w=800&h=600&fit=crop&auto=format", alt: "Water park slides", w: 800, h: 600 },
      { id: 2, src: "https://images.unsplash.com/photo-1629834598512-77a443808b73?w=600&h=800&fit=crop&auto=format", alt: "Theme park guests", w: 600, h: 800 },
      { id: 3, src: "https://images.unsplash.com/photo-1779881259467-ee4b804f8c6a?w=800&h=600&fit=crop&auto=format", alt: "Dry play rope net", w: 800, h: 600 },
      { id: 4, src: "https://images.unsplash.com/photo-1777626760240-08320afdad30?w=800&h=500&fit=crop&auto=format", alt: "Climbing net structure", w: 800, h: 500 },
      { id: 5, src: "https://images.unsplash.com/photo-1780608775906-f7315afc979e?w=600&h=800&fit=crop&auto=format", alt: "Dome netting element", w: 600, h: 800 },
      { id: 6, src: "https://images.unsplash.com/photo-1642717841683-c0323214617c?w=800&h=600&fit=crop&auto=format", alt: "Waterpark attraction", w: 800, h: 600 },
    ],
  },
  bridges: {
    title: "Bridges & Tunnels",
    items: [
      { id: 1, src: "https://images.unsplash.com/photo-1554992985-8ab04fbe59b8?w=600&h=900&fit=crop&auto=format", alt: "Rope footbridge in forest", w: 600, h: 900 },
      { id: 2, src: "https://images.unsplash.com/photo-1706149855185-528284ee6eeb?w=700&h=1000&fit=crop&auto=format", alt: "Forest suspension bridge", w: 700, h: 1000 },
      { id: 3, src: "https://images.unsplash.com/photo-1587493513878-d68611233b03?w=800&h=500&fit=crop&auto=format", alt: "Wooden forest bridge", w: 800, h: 500 },
      { id: 4, src: "https://images.unsplash.com/photo-1563300467-5a9220d63233?w=800&h=600&fit=crop&auto=format", alt: "Brown rope bridge", w: 800, h: 600 },
      { id: 5, src: "https://images.unsplash.com/photo-1554992985-8ab04fbe59b8?w=800&h=600&fit=crop&auto=format", alt: "Hanging bridge path", w: 800, h: 600 },
      { id: 6, src: "https://images.unsplash.com/photo-1706149855185-528284ee6eeb?w=800&h=600&fit=crop&auto=format", alt: "Suspension bridge", w: 800, h: 600 },
      { id: 7, src: "https://images.unsplash.com/photo-1587493513878-d68611233b03?w=600&h=800&fit=crop&auto=format", alt: "Forest path bridge", w: 600, h: 800 },
    ],
  },
  handrails: {
    title: "Handrails",
    items: [
      { id: 1, src: "https://images.unsplash.com/photo-1563300467-5a9220d63233?w=800&h=600&fit=crop&auto=format", alt: "Rope handrail", w: 800, h: 600 },
      { id: 2, src: "https://images.unsplash.com/photo-1780608775906-f7315afc979e?w=800&h=500&fit=crop&auto=format", alt: "Steel mesh handrail", w: 800, h: 500 },
      { id: 3, src: "https://images.unsplash.com/photo-1758055660529-fed15bb902c1?w=800&h=600&fit=crop&auto=format", alt: "Woven fence netting", w: 800, h: 600 },
      { id: 4, src: "https://images.unsplash.com/photo-1554992985-8ab04fbe59b8?w=600&h=800&fit=crop&auto=format", alt: "Bridge rope handrail", w: 600, h: 800 },
      { id: 5, src: "https://images.unsplash.com/photo-1563300467-5a9220d63233?w=700&h=900&fit=crop&auto=format", alt: "Cable rail system", w: 700, h: 900 },
      { id: 6, src: "https://images.unsplash.com/photo-1706149855185-528284ee6eeb?w=800&h=600&fit=crop&auto=format", alt: "Rope queue line", w: 800, h: 600 },
    ],
  },
  "play-elements": {
    title: "Play Elements",
    items: [
      { id: 1, src: "https://images.unsplash.com/photo-1779881259467-ee4b804f8c6a?w=700&h=1000&fit=crop&auto=format", alt: "Child climbing rope net", w: 700, h: 1000 },
      { id: 2, src: "https://images.unsplash.com/photo-1777626760240-08320afdad30?w=700&h=1000&fit=crop&auto=format", alt: "Playground climbing net", w: 700, h: 1000 },
      { id: 3, src: "https://images.unsplash.com/photo-1630637991997-1cd9c8b41ce1?w=700&h=1000&fit=crop&auto=format", alt: "Child on playground fence", w: 700, h: 1000 },
      { id: 4, src: "https://images.unsplash.com/photo-1780608775906-f7315afc979e?w=800&h=600&fit=crop&auto=format", alt: "Spiderweb net structure", w: 800, h: 600 },
      { id: 5, src: "https://images.unsplash.com/photo-1779881259467-ee4b804f8c6a?w=800&h=600&fit=crop&auto=format", alt: "Interactive climb", w: 800, h: 600 },
      { id: 6, src: "https://images.unsplash.com/photo-1777626760240-08320afdad30?w=800&h=600&fit=crop&auto=format", alt: "Net tunnel element", w: 800, h: 600 },
    ],
  },
  "golf-and-sport": {
    title: "Golf & Sport",
    items: [
      { id: 1, src: "https://images.unsplash.com/photo-1632946269126-0f8edbe8b068?w=800&h=600&fit=crop&auto=format", alt: "Golf course netting", w: 800, h: 600 },
      { id: 2, src: "https://images.unsplash.com/photo-1576220258822-153014832245?w=800&h=600&fit=crop&auto=format", alt: "Golf driving range", w: 800, h: 600 },
      { id: 3, src: "https://images.unsplash.com/photo-1778941120800-6ecd662bbc36?w=800&h=600&fit=crop&auto=format", alt: "Sport containment netting", w: 800, h: 600 },
      { id: 4, src: "https://images.unsplash.com/photo-1780608775906-f7315afc979e?w=600&h=800&fit=crop&auto=format", alt: "Batting cage netting", w: 600, h: 800 },
      { id: 5, src: "https://images.unsplash.com/photo-1632946269126-0f8edbe8b068?w=700&h=900&fit=crop&auto=format", alt: "Golf barrier system", w: 700, h: 900 },
    ],
  },
  "protection-netting": {
    title: "Protection Netting",
    items: [
      { id: 1, src: "https://images.unsplash.com/photo-1778941120800-6ecd662bbc36?w=800&h=600&fit=crop&auto=format", alt: "Construction safety netting", w: 800, h: 600 },
      { id: 2, src: "https://images.unsplash.com/photo-1758055660529-fed15bb902c1?w=800&h=600&fit=crop&auto=format", alt: "Chain-link safety fence", w: 800, h: 600 },
      { id: 3, src: "https://images.unsplash.com/photo-1780608775906-f7315afc979e?w=600&h=800&fit=crop&auto=format", alt: "Protective netting dome", w: 600, h: 800 },
      { id: 4, src: "https://images.unsplash.com/photo-1778941120800-6ecd662bbc36?w=700&h=900&fit=crop&auto=format", alt: "Fall protection system", w: 700, h: 900 },
      { id: 5, src: "https://images.unsplash.com/photo-1706149855185-528284ee6eeb?w=800&h=600&fit=crop&auto=format", alt: "Secondary barrier netting", w: 800, h: 600 },
      { id: 6, src: "https://images.unsplash.com/photo-1563300467-5a9220d63233?w=800&h=600&fit=crop&auto=format", alt: "Bridge protection net", w: 800, h: 600 },
    ],
  },
};

export default function GalleryCategory() {
  const { category } = useParams<{ category: string }>();
  const data = categoryData[category ?? ""] ?? { title: "Gallery", items: [] };

  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [filter, setFilter] = useState("All");

  const items = data.items;

  const openLightbox = (i: number) => setLightboxIndex(i);
  const closeLightbox = () => setLightboxIndex(null);

  const prev = useCallback(() => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex - 1 + items.length) % items.length);
  }, [lightboxIndex, items.length]);

  const next = useCallback(() => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex + 1) % items.length);
  }, [lightboxIndex, items.length]);

  useEffect(() => {
    if (lightboxIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
      if (e.key === "Escape") closeLightbox();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightboxIndex, prev, next]);

  return (
    <>
      <div className="bg-forest-900 pt-32 pb-20">
        <div className="max-w-[1280px] mx-auto px-6">
          <AnimateIn>
            <Link
              to="/gallery"
              className="inline-flex items-center gap-2 text-primary-foreground/60 hover:text-primary-foreground text-sm mb-6 transition-colors"
            >
              <ArrowLeft size={14} /> All Galleries
            </Link>
            <p className="text-xs font-medium tracking-widest uppercase text-clay mb-4">Gallery</p>
            <h1 className="font-serif text-5xl md:text-6xl font-light text-primary-foreground tracking-[-0.02em] leading-[1.05]">
              {data.title}
            </h1>
          </AnimateIn>
        </div>
      </div>

      <section className="bg-background py-16 md:py-20">
        <div className="max-w-[1280px] mx-auto px-6">
          {/* Filter bar */}
          <div className="flex items-center gap-3 mb-10 flex-wrap">
            {["All"].map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-4 py-2 text-sm rounded-[2px] border transition-colors ${
                  filter === f
                    ? "bg-primary text-primary-foreground border-primary"
                    : "border-border text-muted-foreground hover:text-foreground hover:border-foreground/20"
                }`}
              >
                {f}
              </button>
            ))}
            <span className="ml-auto text-sm text-muted-foreground">{items.length} photos</span>
          </div>

          {items.length === 0 ? (
            <div className="text-center py-24">
              <p className="text-muted-foreground">No photos available yet. Check back soon.</p>
            </div>
          ) : (
            <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
              {items.map((item, i) => (
                <div
                  key={item.id}
                  className="break-inside-avoid overflow-hidden rounded-[4px] border border-border cursor-pointer group"
                  onClick={() => openLightbox(i)}
                >
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="w-full object-cover transition-transform duration-[600ms] ease-out group-hover:scale-[1.03]"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Lightbox */}
      <Dialog.Root open={lightboxIndex !== null} onOpenChange={(open) => !open && closeLightbox()}>
        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 z-50" style={{ backgroundColor: "rgba(15,42,29,0.92)" }} />
          <Dialog.Content
            className="fixed inset-0 z-50 flex items-center justify-center p-4 outline-none"
            aria-describedby={undefined}
          >
            <Dialog.Title className="sr-only">
              {lightboxIndex !== null ? items[lightboxIndex]?.alt : "Gallery image"}
            </Dialog.Title>
            {lightboxIndex !== null && (
              <div className="relative max-w-5xl max-h-[90vh] flex flex-col items-center">
                <img
                  src={items[lightboxIndex].src.replace(/w=\d+&h=\d+/, "w=1400&h=900")}
                  alt={items[lightboxIndex].alt}
                  className="max-h-[80vh] max-w-full object-contain rounded-[4px]"
                />
                <p className="mt-4 text-sm text-primary-foreground/60">{items[lightboxIndex].alt}</p>
                <div className="absolute top-1/2 -translate-y-1/2 left-0 -translate-x-14">
                  <button
                    onClick={prev}
                    className="w-10 h-10 flex items-center justify-center text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                    aria-label="Previous image"
                  >
                    <ChevronLeft size={24} />
                  </button>
                </div>
                <div className="absolute top-1/2 -translate-y-1/2 right-0 translate-x-14">
                  <button
                    onClick={next}
                    className="w-10 h-10 flex items-center justify-center text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                    aria-label="Next image"
                  >
                    <ChevronRight size={24} />
                  </button>
                </div>
              </div>
            )}
            <Dialog.Close
              className="absolute top-6 right-6 w-10 h-10 flex items-center justify-center text-primary-foreground/70 hover:text-primary-foreground transition-colors"
              aria-label="Close"
            >
              <X size={20} />
            </Dialog.Close>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </>
  );
}
