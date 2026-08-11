import { useCallback, useEffect, useMemo, useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import {
  X,
  ChevronLeft,
  ChevronRight,
  LayoutGrid,
  PawPrint,
  Waves,
  Landmark,
  Fence,
  Route,
  Flag,
  Shield,
  Sparkles,
  type LucideIcon,
} from "lucide-react";
import { AnimateIn } from "../../components/shared/AnimateIn";
import { useSearchParams } from "react-router";
import galleryImageDimensions from "../../data/gallery-image-dimensions.json";
import { galleryCategories } from "../../data/galleryData";

const categoryIcons: Record<string, LucideIcon> = {
  zoos: PawPrint,
  waterparks: Waves,
  bridges: Landmark,
  handrails: Fence,
  "play-elements": Route,
  "golf-and-sport": Flag,
  "protection-netting": Shield,
  "we-decorate": Sparkles,
};

const filters = [
  { slug: "All", navLabel: "All", icon: LayoutGrid },
  ...galleryCategories.map((cat) => ({ slug: cat.slug, navLabel: cat.navLabel, icon: categoryIcons[cat.slug] })),
];

const allItems = galleryCategories.flatMap((cat) =>
  cat.items.map((item) => ({
    key: `${cat.slug}-${item.id}`,
    src: item.src,
    alt: item.alt,
    category: cat.slug,
    categoryTitle: cat.title,
  }))
);

export default function GalleryIndex() {
  const [searchParams, setSearchParams] = useSearchParams();
  const requestedFilter = searchParams.get("category");
  const activeFilter = filters.some((filter) => filter.slug === requestedFilter) ? requestedFilter! : "All";
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const items = useMemo(
    () => (activeFilter === "All" ? allItems : allItems.filter((item) => item.category === activeFilter)),
    [activeFilter]
  );
  const openLightbox = (i: number) => setLightboxIndex(i);
  const closeLightbox = () => setLightboxIndex(null);

  const selectFilter = (slug: string) => {
    setSearchParams(slug === "All" ? {} : { category: slug });
  };

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
            <h1 className="font-serif text-5xl md:text-6xl font-light text-primary-foreground tracking-[-0.02em] leading-[1.05] mb-5">
              All Galleries
            </h1>
            <p className="text-primary-foreground/70 text-lg leading-[1.7] max-w-2xl">
              Explore our complete collection of custom netting solutions across zoos, waterparks, bridges, play
              areas, and more.
            </p>
          </AnimateIn>
        </div>
      </div>

      <section className="bg-background py-16 md:py-20">
        <div className="max-w-[1280px] mx-auto px-6">
          {/* Category filter pills */}
          <div className="flex items-center gap-2 mb-10 flex-wrap xl:flex-nowrap">
            {filters.map((f) => {
              const Icon = f.icon;
              return (
                <button
                  key={f.slug}
                  onClick={() => selectFilter(f.slug)}
                  className={`inline-flex shrink-0 items-center gap-1.5 px-3 py-2 text-xs rounded-[2px] border transition-colors ${
                    activeFilter === f.slug
                      ? "bg-primary text-primary-foreground border-primary"
                      : "border-border text-muted-foreground hover:text-foreground hover:border-foreground/20"
                  }`}
                >
                  <Icon size={14} /> {f.navLabel}
                </button>
              );
            })}
            <span className="ml-auto shrink-0 pl-2 text-xs text-muted-foreground">{items.length} photos</span>
          </div>

          {items.length === 0 ? (
            <div className="text-center py-24">
              <p className="text-muted-foreground">No photos available yet. Check back soon.</p>
            </div>
          ) : (
            <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
                    {items.map((item, i) => {
                      const dimensions = galleryImageDimensions[item.src as keyof typeof galleryImageDimensions];
                      return (
                        <button
                          type="button"
                          key={item.key}
                          className="block w-full break-inside-avoid overflow-hidden rounded-[4px] border border-border cursor-pointer group"
                          onClick={() => openLightbox(i)}
                        >
                          <img
                            src={item.src}
                            alt={`${item.categoryTitle} custom netting project`}
                            width={dimensions?.width}
                            height={dimensions?.height}
                            loading="lazy"
                            decoding="async"
                            className="w-full object-cover transition-transform duration-[600ms] ease-out group-hover:scale-[1.03]"
                          />
                        </button>
                      );
                    })}
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
              {lightboxIndex !== null ? `${items[lightboxIndex].categoryTitle} custom netting project` : "Gallery image"}
            </Dialog.Title>
            {lightboxIndex !== null && (
              <div className="relative max-w-5xl max-h-[90vh] flex flex-col items-center">
                <div className="absolute top-6 right-16 text-sm font-medium text-primary-foreground bg-forest-900/50 backdrop-blur-sm px-3 py-1 rounded-[2px] z-10">
                  {lightboxIndex + 1} / {items.length}
                </div>
                <img
                  src={items[lightboxIndex].src}
                  alt={`${items[lightboxIndex].categoryTitle} custom netting project`}
                  width={galleryImageDimensions[items[lightboxIndex].src as keyof typeof galleryImageDimensions]?.width}
                  height={galleryImageDimensions[items[lightboxIndex].src as keyof typeof galleryImageDimensions]?.height}
                  decoding="async"
                  className="max-h-[80vh] max-w-full object-contain rounded-[4px]"
                />
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
