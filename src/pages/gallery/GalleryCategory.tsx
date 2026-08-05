import { useState, useEffect, useCallback } from "react";
import { useParams, Link } from "react-router";
import { X, ChevronLeft, ChevronRight, ArrowLeft, Plus } from "lucide-react";
import * as Dialog from "@radix-ui/react-dialog";
import { AnimateIn } from "../../components/shared/AnimateIn";
import galleryImageDimensions from "../../data/gallery-image-dimensions.json";
import { galleryCategoryMap } from "../../data/galleryData";

export default function GalleryCategory() {
  const { category } = useParams<{ category: string }>();
  const data = galleryCategoryMap[category ?? ""] ?? { title: "Gallery", items: [] };

  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const initialDisplayCount = 9;
  const [displayCount, setDisplayCount] = useState(initialDisplayCount);

  const items = data.items;
  const displayedItems = items.slice(0, displayCount);
  const hasMoreItems = displayCount < items.length;

  const openLightbox = (i: number) => setLightboxIndex(i);
  const closeLightbox = () => setLightboxIndex(null);

  // Reset displayed count when category changes
  useEffect(() => {
    setDisplayCount(initialDisplayCount);
  }, [category]);

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
              to="/gallery"
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
            <>
              <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
                {displayedItems.map((item, i) => (
                  (() => {
                    const dimensions = galleryImageDimensions[item.src as keyof typeof galleryImageDimensions];
                    return (
                  <button
                    type="button"
                    key={item.id}
                    className="block w-full break-inside-avoid overflow-hidden rounded-[4px] border border-border cursor-pointer group"
                    onClick={() => openLightbox(i)}
                  >
                    <img
                      src={item.src}
                      alt={`${data.title} custom netting project ${i + 1}`}
                      width={dimensions?.width}
                      height={dimensions?.height}
                      loading="lazy"
                      decoding="async"
                      className="w-full object-cover transition-transform duration-[600ms] ease-out group-hover:scale-[1.03]"
                    />
                  </button>
                    );
                  })()
                ))}
              </div>
              
              {hasMoreItems && (
                <div className="flex justify-center mt-12">
                  <button
                    onClick={() => setDisplayCount((c) => Math.min(c + initialDisplayCount, items.length))}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-[4px] border border-primary hover:bg-primary/90 transition-colors text-sm font-medium"
                  >
                    <Plus size={16} /> Show More
                  </button>
                </div>
              )}
            </>
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
              <div className="relative max-w-5xl max-h-[90vh] flex flex-col items-center">
                <div className="absolute top-6 right-16 text-sm font-medium text-primary-foreground bg-forest-900/50 backdrop-blur-sm px-3 py-1 rounded-[2px] z-10">
                  {lightboxIndex + 1} / {items.length}
                </div>
                <img
                  src={items[lightboxIndex].src}
                  alt={`${data.title} custom netting project ${lightboxIndex + 1}`}
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
