import { AnimateIn } from "../../components/shared/AnimateIn";
import { Link } from "react-router";
import { ArrowRight } from "lucide-react";

const images = [
  { src: "https://images.unsplash.com/photo-1780608775906-f7315afc979e?w=600&h=500&fit=crop&auto=format", alt: "Geodesic rope dome structure" },
  { src: "https://images.unsplash.com/photo-1554992985-8ab04fbe59b8?w=600&h=400&fit=crop&auto=format", alt: "Hanging rope footbridge" },
  { src: "https://images.unsplash.com/photo-1563300467-5a9220d63233?w=600&h=500&fit=crop&auto=format", alt: "Brown rope hanging bridge" },
  { src: "https://images.unsplash.com/photo-1706149855185-528284ee6eeb?w=600&h=400&fit=crop&auto=format", alt: "Forest suspension bridge" },
  { src: "https://images.unsplash.com/photo-1779881259467-ee4b804f8c6a?w=600&h=500&fit=crop&auto=format", alt: "Rope net climbing element" },
  { src: "https://images.unsplash.com/photo-1777626760240-08320afdad30?w=600&h=400&fit=crop&auto=format", alt: "Playground climbing net" },
  { src: "https://images.unsplash.com/photo-1714466614031-b128463b8767?w=600&h=500&fit=crop&auto=format", alt: "Zoo netting exhibit" },
  { src: "https://images.unsplash.com/photo-1779612547670-6b9eb9cf61ca?w=600&h=400&fit=crop&auto=format", alt: "Aquatic exhibit netting" },
  { src: "https://images.unsplash.com/photo-1642717841683-c0323214617c?w=600&h=500&fit=crop&auto=format", alt: "Waterpark rope elements" },
  { src: "https://images.unsplash.com/photo-1778941120800-6ecd662bbc36?w=600&h=400&fit=crop&auto=format", alt: "Decorative netting pattern" },
  { src: "https://images.unsplash.com/photo-1632946269126-0f8edbe8b068?w=600&h=500&fit=crop&auto=format", alt: "Themed golf course netting" },
  { src: "https://images.unsplash.com/photo-1587493513878-d68611233b03?w=600&h=400&fit=crop&auto=format", alt: "Wooden bridge design" },
  { src: "https://images.unsplash.com/photo-1629834598512-77a443808b73?w=600&h=500&fit=crop&auto=format", alt: "Themed park rope elements" },
  { src: "https://images.unsplash.com/photo-1758055660529-fed15bb902c1?w=600&h=400&fit=crop&auto=format", alt: "Fence netting pattern" },
  { src: "https://images.unsplash.com/photo-1554992985-8ab04fbe59b8?w=600&h=500&fit=crop&auto=format", alt: "Suspension rope bridge" },
  { src: "https://images.unsplash.com/photo-1691328431608-58fa2e5d9592?w=600&h=400&fit=crop&auto=format", alt: "Natural habitat exhibit" },
];

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
          <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4">
            {images.map((img, i) => (
              <AnimateIn key={i} delay={i * 0.04}>
                <div className="break-inside-avoid overflow-hidden rounded-[4px] border border-border">
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full object-cover transition-transform duration-[600ms] ease-out hover:scale-[1.03]"
                    loading="lazy"
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
              to="/contact"
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
