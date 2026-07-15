import { Link } from "react-router";
import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import { AnimateIn } from "../../components/shared/AnimateIn";
import { applicationCardImages } from "./applicationCardImages";

export interface Subsection {
  title: string;
  body: string;
  image: string;
}

export interface RelatedApp {
  title: string;
  to: string;
  image: string;
}

interface Props {
  pageTitle: string;
  heroImage: string;
  heroIntro: string;
  subsections: Subsection[];
  ctaText: string;
  ctaTo: string;
  relatedApps: RelatedApp[];
}

export default function ApplicationPage({
  pageTitle,
  heroImage,
  heroIntro,
  subsections,
  ctaText,
  ctaTo,
  relatedApps,
}: Props) {
  return (
    <>
      {/* Asymmetric hero */}
      <section className="min-h-[520px] flex flex-col lg:flex-row">
        <div className="w-full lg:w-[55%] bg-forest-900 flex items-center px-10 md:px-16 lg:px-20 py-32 lg:py-24 pt-36 lg:pt-32">
          <AnimateIn variant="fadeLeft">
            <p className="text-xs font-medium tracking-widest uppercase text-clay mb-5">Applications</p>
            <h1 className="font-serif text-5xl md:text-6xl font-light text-primary-foreground tracking-[-0.02em] leading-[1.05] mb-7">
              {pageTitle}
            </h1>
            <p className="text-primary-foreground/70 text-lg leading-[1.7] max-w-lg">{heroIntro}</p>
          </AnimateIn>
        </div>
        <div className="w-full lg:w-[45%] relative min-h-[360px] overflow-hidden bg-secondary">
          <motion.div
            className="absolute inset-0"
            initial={{ clipPath: "inset(0 100% 0 0)" }}
            animate={{ clipPath: "inset(0 0% 0 0)" }}
            transition={{ duration: 1.0, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          >
            <motion.img
              src={heroImage}
              alt={pageTitle}
              className="absolute inset-0 w-full h-full object-cover"
              initial={{ scale: 1.07 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            />
          </motion.div>
        </div>
      </section>

      {/* Alternating subsections */}
      {subsections.map((sub, i) => (
        <div
          key={sub.title}
          className={`flex flex-col ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} min-h-[440px]`}
        >
          <div className="w-full md:w-1/2 relative overflow-hidden bg-secondary min-h-[280px] md:min-h-0">
            <img
              src={sub.image}
              alt={sub.title}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-[600ms] ease-out hover:scale-[1.03]"
            />
          </div>
          <div
            className={`w-full md:w-1/2 flex items-center px-10 md:px-16 lg:px-20 py-16 ${
              i % 2 === 0 ? "bg-background" : "bg-secondary"
            }`}
          >
            <AnimateIn variant={i % 2 === 0 ? "fadeRight" : "fadeLeft"}>
              <h2 className="font-serif text-3xl md:text-4xl font-light text-forest-900 tracking-[-0.02em] mb-6">
                {sub.title}
              </h2>
              <p className="text-foreground/75 leading-[1.8] max-w-lg">{sub.body}</p>
            </AnimateIn>
          </div>
        </div>
      ))}

      {/* Gallery CTA */}
      <section className="bg-forest-900 py-20">
        <div className="max-w-[1280px] mx-auto px-6 text-center">
          <AnimateIn>
            <Link
              to={ctaTo}
              className="relative group inline-flex items-center gap-2 bg-clay text-primary-foreground px-8 py-3.5 rounded-[2px] text-sm font-medium"
            >
              <span className="relative">
                {ctaText}
                <span className="absolute left-0 bottom-0 w-0 h-px bg-primary-foreground group-hover:w-full transition-all duration-300" />
              </span>
              <ArrowRight size={14} />
            </Link>
          </AnimateIn>
        </div>
      </section>

      {/* Related Applications */}
      {relatedApps.length > 0 && (
        <section className="bg-background py-20 md:py-28">
          <div className="max-w-[1280px] mx-auto px-6">
            <AnimateIn>
              <h2 className="font-serif text-3xl font-light text-forest-900 tracking-[-0.02em] mb-12">
                Related Applications
              </h2>
            </AnimateIn>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedApps.map((app, i) => (
                <AnimateIn key={app.to} delay={i * 0.08}>
                  <Link
                    to={app.to}
                    preventScrollReset={false}
                    className="group block border border-border rounded-[4px] overflow-hidden"
                  >
                    <div className="relative overflow-hidden h-48 bg-secondary">
                      <img
                        src={applicationCardImages[app.to] ?? app.image}
                        alt={app.title}
                        className="w-full h-full object-cover transition-transform duration-[600ms] ease-out group-hover:scale-[1.03]"
                      />
                    </div>
                    <div className="px-6 py-5 flex items-center justify-between">
                      <span className="font-medium text-forest-900">{app.title}</span>
                      <ArrowRight size={14} className="text-clay group-hover:translate-x-1 transition-transform" />
                    </div>
                  </Link>
                </AnimateIn>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
