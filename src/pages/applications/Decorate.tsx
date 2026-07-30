import { AnimateIn } from "../../components/shared/AnimateIn";
import { Link } from "react-router";
import { ArrowRight } from "lucide-react";
import decorate1 from "../../imports/decorate/decorate-1.webp";
import decorate2 from "../../imports/decorate/decorate-2.webp";
import decorate3 from "../../imports/decorate/decorate-3.webp";
import decorate4 from "../../imports/decorate/decorate-4.webp";
import decorate5 from "../../imports/decorate/decorate-5.webp";
import decorate6 from "../../imports/decorate/decorate-6.webp";
import decorate7 from "../../imports/decorate/decorate-7.webp";
import decorate8 from "../../imports/decorate/decorate-8.webp";
import decorate9 from "../../imports/decorate/decorate-9.webp";
import decorate10 from "../../imports/decorate/decorate-10.webp";
import decorate11 from "../../imports/decorate/decorate-11.webp";
import decorate12 from "../../imports/decorate/decorate-12.webp";
import decorate13 from "../../imports/decorate/decorate-13.webp";
import decorate14 from "../../imports/decorate/decorate-14.webp";
import decorate15 from "../../imports/decorate/decorate-15.webp";
import decorate16 from "../../imports/decorate/decorate-16.webp";
import decorate17 from "../../imports/decorate/decorate-17.webp";
import decorate18 from "../../imports/decorate/decorate-18.webp";

const images = [
  { src: decorate1, alt: "Decorative gallery image 1" },
  { src: decorate2, alt: "Decorative gallery image 2" },
  { src: decorate3, alt: "Decorative gallery image 3" },
  { src: decorate4, alt: "Decorative gallery image 4" },
  { src: decorate5, alt: "Decorative gallery image 5" },
  { src: decorate6, alt: "Decorative gallery image 6" },
  { src: decorate7, alt: "Decorative gallery image 7" },
  { src: decorate8, alt: "Decorative gallery image 8" },
  { src: decorate9, alt: "Decorative gallery image 9" },
  { src: decorate10, alt: "Decorative gallery image 10" },
  { src: decorate11, alt: "Decorative gallery image 11" },
  { src: decorate12, alt: "Decorative gallery image 12" },
  { src: decorate13, alt: "Decorative gallery image 13" },
  { src: decorate14, alt: "Decorative gallery image 14" },
  { src: decorate15, alt: "Decorative gallery image 15" },
  { src: decorate16, alt: "Decorative gallery image 16" },
  { src: decorate17, alt: "Decorative rope-wrapped posts" },
  { src: decorate18, alt: "Decorative hockey net structure" },
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {images.map((img, i) => (
              <AnimateIn
                key={i}
                delay={i * 0.04}
                className={i === images.length - 2 ? "xl:col-start-2" : undefined}
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
