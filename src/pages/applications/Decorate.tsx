import { AnimateIn } from "../../components/shared/AnimateIn";
import { Link } from "react-router";
import { ArrowRight } from "lucide-react";
import { decorateGalleryImages } from "../../data/decorateGalleryData";

export default function Decorate() {
  return (
    <>
      <div className="bg-forest-900 pt-32 pb-20">
        <div className="max-w-[1280px] mx-auto px-6">
          <AnimateIn>
            <p className="text-xs font-medium tracking-widest uppercase text-clay mb-4">Applications</p>
            <h1 className="font-serif text-5xl md:text-6xl font-light text-primary-foreground tracking-[-0.02em] leading-[1.05]">
              We Decorate
            </h1>
          </AnimateIn>
        </div>
      </div>

      <section className="bg-background py-16 md:py-20">
        <div className="max-w-[1280px] mx-auto px-6">
          <AnimateIn>
            <p className="text-lg text-foreground/80 leading-[1.7] max-w-2xl mb-16">
              Rope and netting can be an excellent design element to many applications. Stainless Steel
              and coil mesh products lend a more modern aesthetic, where rope can add an air of jungle,
              desert, or nautical theme to any space. Look through some of our work to envision your
              space.
            </p>
          </AnimateIn>

          {/* Gallery grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {decorateGalleryImages.map((img, i) => (
              <AnimateIn
                key={i}
                delay={i * 0.04}
                className={i === decorateGalleryImages.length - 2 ? "xl:col-start-2" : undefined}
              >
                <div className="aspect-video overflow-hidden rounded-[4px] border border-border">
                  <img
                    src={img.src}
                    alt={img.alt}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover transition-transform duration-[600ms] ease-out hover:scale-[1.03]"
                  />
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-forest-900 py-20">
        <div className="max-w-[1280px] mx-auto px-6 text-center">
          <AnimateIn>
            <h2 className="font-serif text-3xl font-light text-primary-foreground tracking-[-0.02em] mb-6">
              Ready to transform your space?
            </h2>
            <Link
              to="/contact/"
              className="relative group inline-flex items-center gap-2 bg-clay text-primary-foreground px-8 py-3.5 rounded-[2px] text-sm font-medium"
            >
              <span className="relative">
                Get in Touch
                <span className="absolute left-0 bottom-0 w-0 h-px bg-primary-foreground group-hover:w-full transition-all duration-300" />
              </span>
              <ArrowRight size={14} />
            </Link>
          </AnimateIn>
        </div>
      </section>
    </>
  );
}
