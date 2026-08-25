import { useState, useEffect, useCallback } from "react";
import { useParams, Link } from "react-router";
import { X, ChevronLeft, ChevronRight, ArrowLeft } from "lucide-react";
import * as Dialog from "@radix-ui/react-dialog";
import { AnimateIn } from "../../components/shared/AnimateIn";
import galleryImageDimensions from "../../data/gallery-image-dimensions.json";
import { galleryCategories, galleryCategoryMap } from "../../data/galleryData";
import { galleryImageSources } from "../../components/shared/GalleryImage";

const getLightboxWidth = (src: string) => {
  const dimensions = galleryImageDimensions[src as keyof typeof galleryImageDimensions];
  return dimensions
    ? `min(100%, ${dimensions.width}px, calc(80vh * ${dimensions.width} / ${dimensions.height}))`
    : "100%";
};

export default function GalleryCategory() {
  const { category } = useParams<{ category: string }>();
  const data = galleryCategoryMap[category ?? ""] ?? { title: "Gallery", items: [] };

  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const items = data.items;
  const categoryIndex = galleryCategories.findIndex((gallery) => gallery.slug === category);
  const categoryStartNumber = galleryCategories
    .slice(0, Math.max(0, categoryIndex))
    .reduce((total, gallery) => total + gallery.items.length, 0) + 1;

  const formatImageNumber = (number: number) => `IMG-${String(number).padStart(3, "0")}`;

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
              to={`/gallery/?category=${category ?? ""}`}
              className="inline-flex items-center gap-2 text-primary-foreground/60 hover:text-primary-foreground text-sm mb-6 transition-colors"
            >
              <ArrowLeft size={14} /> View All Gallery Images
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
            <span className="text-sm text-muted-foreground">{items.length} photos</span>
            <Link
              to={`/gallery/?category=${category ?? ""}`}
              className="ml-auto px-4 py-2 text-sm rounded-[2px] border transition-colors bg-primary text-primary-foreground border-primary hover:bg-primary/90"
            >
              View All Gallery Images
            </Link>
          </div>

          {items.length === 0 ? (
            <div className="text-center py-24">
              <p className="text-muted-foreground">No photos available yet. Check back soon.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {items.map((item, itemIndex) => {
                      const dimensions = galleryImageDimensions[item.src as keyof typeof galleryImageDimensions];
                      return (
                        <button
                          type="button"
                          key={item.id}
                          className="relative block aspect-[4/3] w-full overflow-hidden rounded-[4px] border border-border cursor-pointer group"
                          onClick={() => openLightbox(itemIndex)}
                        >
                          <img
                            {...galleryImageSources(item.src)}
                            sizes="(min-width: 1024px) 405px, (min-width: 640px) 50vw, 100vw"
                            alt={item.alt || `${data.title} custom netting project ${itemIndex + 1}`}
                            width={dimensions?.width}
                            height={dimensions?.height}
                            loading="lazy"
                            decoding="async"
                            className="h-full w-full object-cover transition-transform duration-[600ms] ease-out group-hover:scale-[1.03]"
                          />
                          <span className="absolute top-3 right-3 rounded-[2px] bg-forest-900/65 px-2.5 py-1 text-[11px] font-medium tracking-wider text-white/90 backdrop-blur-sm">
                            {formatImageNumber(categoryStartNumber + itemIndex)}
                          </span>
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
              {lightboxIndex !== null ? `${data.title} custom netting project ${lightboxIndex + 1}` : "Gallery image"}
            </Dialog.Title>
            {lightboxIndex !== null && (
              <div className="relative flex w-full max-w-5xl max-h-[90vh] flex-col items-center">
                <div className="relative" style={{ width: getLightboxWidth(items[lightboxIndex].src) }}>
                  <div className="absolute top-3 right-3 text-sm font-medium text-primary-foreground bg-forest-900/50 backdrop-blur-sm px-3 py-1 rounded-[2px] z-10">
                    {formatImageNumber(categoryStartNumber + lightboxIndex)}
                  </div>
                  <img
                    {...galleryImageSources(items[lightboxIndex].src)}
                    sizes="(min-width: 1024px) 960px, 100vw"
                    alt={items[lightboxIndex].alt || `${data.title} custom netting project ${lightboxIndex + 1}`}
                    width={galleryImageDimensions[items[lightboxIndex].src as keyof typeof galleryImageDimensions]?.width}
                    height={galleryImageDimensions[items[lightboxIndex].src as keyof typeof galleryImageDimensions]?.height}
                    decoding="async"
                    className="block h-auto w-full rounded-[4px]"
                  />
                </div>
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
