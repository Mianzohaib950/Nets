import { Link } from "react-router";
import { ArrowRight, Phone } from "lucide-react";
import { motion } from "motion/react";
import type { ReactNode } from "react";
import { AnimateIn } from "../../components/shared/AnimateIn";
import { galleryImageSources } from "../../components/shared/GalleryImage";
import galleryImageDimensions from "../../data/gallery-image-dimensions.json";

// Building blocks for the individual /services/... pages. Each page composes
// these in the order its brief calls for, so every service page shares the
// same design as the rest of the site.

export interface Card {
  title: string;
  body: ReactNode;
  image?: string;
  imageAlt?: string;
  icon?: ReactNode;
}

export interface LinkItem {
  label: string;
  to: string;
}

export interface Faq {
  question: string;
  answer: string;
  /** Optional phrase inside `answer` rendered as a link (the schema keeps plain text). */
  link?: { text: string; to: string };
}

const eyebrowClass = "text-xs font-medium tracking-widest uppercase text-clay mb-4";
const headingClass = "font-serif text-3xl md:text-4xl font-light text-forest-900 tracking-[-0.02em]";

function PrimaryButton({ to, children }: { to: string; children: ReactNode }) {
  return (
    <Link
      to={to}
      className="relative group inline-flex items-center gap-2 bg-clay text-primary-foreground px-8 py-3.5 rounded-[2px] text-sm font-medium"
    >
      <span className="relative">
        {children}
        <span className="absolute left-0 bottom-0 w-0 h-px bg-primary-foreground group-hover:w-full transition-all duration-300" />
      </span>
      <ArrowRight size={14} />
    </Link>
  );
}

// Inline text link used inside body copy.
export function InlineLink({ to, children }: { to: string; children: ReactNode }) {
  return (
    <Link to={to} className="text-clay underline underline-offset-4 decoration-clay/40 hover:decoration-clay">
      {children}
    </Link>
  );
}

export function ServiceHero(p: {
  title: string;
  subheading: string;
  cta: string;
  image: string;
  imageAlt: string;
  imageSize: [number, number];
}) {
  return (
    <section className="min-h-[520px] flex flex-col lg:flex-row">
      <div className="w-full lg:w-[55%] bg-forest-900 flex items-center px-10 md:px-16 lg:px-20 py-32 lg:py-24 pt-36 lg:pt-32">
        <AnimateIn variant="fadeLeft">
          <p className="text-xs font-medium tracking-widest uppercase text-clay mb-5">Services</p>
          <h1 className="font-serif text-5xl md:text-6xl font-light text-primary-foreground tracking-[-0.02em] leading-[1.05] mb-7">
            {p.title}
          </h1>
          <p className="text-primary-foreground/70 text-lg leading-[1.7] max-w-lg mb-9">{p.subheading}</p>
          <PrimaryButton to="/contact/">{p.cta}</PrimaryButton>
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
            src={p.image}
            alt={p.imageAlt}
            width={p.imageSize[0]}
            height={p.imageSize[1]}
            {...{ fetchpriority: "high" }}
            decoding="async"
            className="absolute inset-0 w-full h-full object-cover"
            initial={{ scale: 1.07 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          />
        </motion.div>
      </div>
    </section>
  );
}

export function IntroSection({ lead, paragraphs }: { lead: string; paragraphs: ReactNode[] }) {
  return (
    <section className="bg-background py-20 md:py-28">
      <div className="max-w-[960px] mx-auto px-6">
        <AnimateIn>
          <p className="font-serif text-2xl md:text-3xl font-light text-forest-900 leading-[1.4] tracking-[-0.01em] mb-8">{lead}</p>
          {paragraphs.map((para, i) => (
            <p key={i} className="text-foreground/75 leading-[1.8] mb-5 last:mb-0">{para}</p>
          ))}
        </AnimateIn>
      </div>
    </section>
  );
}

export function TextSection({ eyebrow, heading, paragraphs, tone = "light" }: { eyebrow: string; heading: string; paragraphs: ReactNode[]; tone?: "light" | "muted" }) {
  return (
    <section className={`${tone === "light" ? "bg-background" : "bg-secondary"} py-20 md:py-28`}>
      <div className="max-w-[960px] mx-auto px-6">
        <AnimateIn>
          <p className={eyebrowClass}>{eyebrow}</p>
          <h2 className={`${headingClass} mb-8`}>{heading}</h2>
          {paragraphs.map((para, i) => (
            <p key={i} className="text-foreground/75 text-lg leading-[1.8] mb-5 last:mb-0">{para}</p>
          ))}
        </AnimateIn>
      </div>
    </section>
  );
}

export function CardsSection({ eyebrow, heading, items }: { eyebrow: string; heading: string; items: Card[] }) {
  const gridCols = items.length === 4 ? "lg:grid-cols-4" : "lg:grid-cols-3";
  return (
    <section className="bg-secondary py-20 md:py-28">
      <div className="max-w-[1280px] mx-auto px-6">
        <AnimateIn>
          <p className={eyebrowClass}>{eyebrow}</p>
          <h2 className={`${headingClass} mb-12 max-w-2xl`}>{heading}</h2>
        </AnimateIn>
        <div className={`grid grid-cols-1 sm:grid-cols-2 ${gridCols} gap-6`}>
          {items.map((item, i) => (
            <AnimateIn key={item.title} delay={i * 0.06}>
              <article className="h-full bg-background border border-border rounded-[4px] overflow-hidden">
                {item.image && (
                  <div className="relative overflow-hidden h-48 bg-secondary">
                    <img
                      src={item.image}
                      alt={item.imageAlt ?? item.title}
                      width={800}
                      height={600}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover transition-transform duration-[600ms] ease-out hover:scale-[1.03]"
                    />
                  </div>
                )}
                <div className="p-8">
                  {!item.image && (
                    <span className="block text-xs font-medium tracking-widest text-clay mb-4">{String(i + 1).padStart(2, "0")}</span>
                  )}
                  <h3 className="font-serif text-2xl font-light text-forest-900 mb-3">{item.title}</h3>
                  <p className="text-foreground/75 leading-relaxed">{item.body}</p>
                </div>
              </article>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}

/** Dark band: a paragraph, a list of rows, or a row of badges, with an optional closing note. */
export function DarkBand(p: {
  eyebrow: string;
  heading: string;
  body?: ReactNode;
  items?: Card[];
  badges?: Card[];
  note?: ReactNode;
}) {
  return (
    <section className="bg-forest-900 py-20 md:py-28">
      <div className={`${p.badges ? "max-w-[1280px]" : "max-w-[960px]"} mx-auto px-6`}>
        <AnimateIn>
          <p className={eyebrowClass}>{p.eyebrow}</p>
          <h2 className="font-serif text-3xl md:text-4xl font-light text-primary-foreground tracking-[-0.02em] mb-8">{p.heading}</h2>
          {p.body && <p className="text-primary-foreground/70 text-lg leading-[1.8]">{p.body}</p>}
          {p.items && (
            <ul className="divide-y divide-primary-foreground/15 border-y border-primary-foreground/15">
              {p.items.map((item) => (
                <li key={item.title} className="py-6 md:grid md:grid-cols-[260px_1fr] md:gap-8">
                  <h3 className="font-serif text-2xl font-light text-primary-foreground mb-2 md:mb-0">{item.title}</h3>
                  <p className="text-primary-foreground/70 leading-relaxed">{item.body}</p>
                </li>
              ))}
            </ul>
          )}
          {p.badges && (
            <ul className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {p.badges.map((badge) => (
                <li key={badge.title} className="flex items-start gap-5 border border-primary-foreground/15 rounded-[4px] p-7">
                  {badge.icon && (
                    <span className="shrink-0 flex items-center justify-center w-14 h-14 rounded-full border border-clay/60 text-clay">
                      {badge.icon}
                    </span>
                  )}
                  <div>
                    <h3 className="font-serif text-2xl font-light text-primary-foreground mb-2">{badge.title}</h3>
                    <p className="text-primary-foreground/70 leading-relaxed">{badge.body}</p>
                  </div>
                </li>
              ))}
            </ul>
          )}
          {p.note && <p className="text-primary-foreground/70 leading-[1.8] mt-8 max-w-3xl">{p.note}</p>}
        </AnimateIn>
      </div>
    </section>
  );
}

export function ProcessSection({ heading, steps, tone = "light" }: { heading: string; steps: Card[]; tone?: "light" | "muted" }) {
  return (
    <section className={`${tone === "light" ? "bg-background" : "bg-secondary"} py-20 md:py-28`}>
      <div className="max-w-[1280px] mx-auto px-6">
        <AnimateIn>
          <p className={eyebrowClass}>Process</p>
          <h2 className={`${headingClass} mb-12`}>{heading}</h2>
        </AnimateIn>
        <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <AnimateIn key={step.title} delay={i * 0.08}>
              <li className="border-t-2 border-clay pt-6">
                <span className="block text-xs font-medium tracking-widest uppercase text-clay mb-3">Step {i + 1}</span>
                <h3 className="font-serif text-2xl font-light text-forest-900 mb-3">{step.title}</h3>
                <p className="text-foreground/75 leading-relaxed">{step.body}</p>
              </li>
            </AnimateIn>
          ))}
        </ol>
      </div>
    </section>
  );
}

export function LinksSection({ heading, items, tone = "muted" }: { heading: string; items: LinkItem[]; tone?: "light" | "muted" }) {
  return (
    <section className={`${tone === "light" ? "bg-background" : "bg-secondary"} py-20 md:py-28`}>
      <div className="max-w-[1280px] mx-auto px-6">
        <AnimateIn>
          <p className={eyebrowClass}>Applications</p>
          <h2 className={`${headingClass} mb-12`}>{heading}</h2>
        </AnimateIn>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {items.map((item, i) => (
            <AnimateIn key={item.label} delay={i * 0.04}>
              <Link
                to={item.to}
                className={`group h-full flex items-center justify-between gap-4 ${tone === "light" ? "bg-secondary" : "bg-background"} border border-border rounded-[4px] px-6 py-5 hover:border-clay transition-colors`}
              >
                <span className="font-medium text-forest-900">{item.label}</span>
                <ArrowRight size={14} className="shrink-0 text-clay group-hover:translate-x-1 transition-transform" />
              </Link>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ReasonsSection({ heading, intro, items, tone = "light" }: { heading: string; intro?: ReactNode; items: Card[]; tone?: "light" | "muted" }) {
  const cols = items.length === 4 ? "lg:grid-cols-4" : items.length === 2 ? "" : "lg:grid-cols-3";
  return (
    <section className={`${tone === "light" ? "bg-background" : "bg-secondary"} py-20 md:py-28`}>
      <div className="max-w-[1280px] mx-auto px-6">
        <AnimateIn>
          <p className={eyebrowClass}>Why us</p>
          <h2 className={`${headingClass} ${intro ? "mb-6" : "mb-12"}`}>{heading}</h2>
          {intro && <p className="text-foreground/75 leading-[1.8] max-w-3xl mb-12">{intro}</p>}
        </AnimateIn>
        <div className={`grid grid-cols-1 md:grid-cols-2 ${cols} gap-10`}>
          {items.map((r, i) => (
            <AnimateIn key={r.title} delay={i * 0.08}>
              <div className="border-l-2 border-clay pl-6">
                <h3 className="font-serif text-2xl font-light text-forest-900 mb-3">{r.title}</h3>
                <p className="text-foreground/75 leading-relaxed">{r.body}</p>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}

export interface ProjectPhoto {
  /** Path of an existing gallery image, e.g. "/images/zoos/zoo17.webp". */
  src: string;
  alt: string;
  /** Short caption shown on the tile. */
  label: string;
  /** Gallery category page the tile links to. */
  to: string;
}

/** Photos of completed projects, reusing the gallery's responsive images and tile style. */
export function ProjectGallerySection({ heading, intro, photos, tone = "muted" }: { heading: string; intro?: string; photos: ProjectPhoto[]; tone?: "light" | "muted" }) {
  return (
    <section className={`${tone === "light" ? "bg-background" : "bg-secondary"} py-20 md:py-28`}>
      <div className="max-w-[1280px] mx-auto px-6">
        <AnimateIn>
          <div className="flex flex-wrap items-end justify-between gap-6 mb-12">
            <div>
              <p className={eyebrowClass}>Our work</p>
              <h2 className={headingClass}>{heading}</h2>
              {intro && <p className="text-foreground/75 leading-[1.8] max-w-2xl mt-5">{intro}</p>}
            </div>
            <Link to="/gallery/" className="group inline-flex items-center gap-2 text-sm font-medium text-clay">
              <span className="relative">
                View the full project gallery
                <span className="absolute left-0 bottom-0 w-0 h-px bg-clay group-hover:w-full transition-all duration-300" />
              </span>
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </AnimateIn>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {photos.map((photo, i) => {
            const dimensions = galleryImageDimensions[photo.src as keyof typeof galleryImageDimensions];
            return (
              <AnimateIn key={photo.src} delay={i * 0.05}>
                <Link
                  to={photo.to}
                  className="relative block aspect-[4/3] w-full overflow-hidden rounded-[4px] border border-border group"
                >
                  <img
                    {...galleryImageSources(photo.src)}
                    sizes="(min-width: 1024px) 405px, (min-width: 640px) 50vw, 100vw"
                    alt={photo.alt}
                    width={dimensions?.width}
                    height={dimensions?.height}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover transition-transform duration-[600ms] ease-out group-hover:scale-[1.03]"
                  />
                  <span className="absolute bottom-3 left-3 inline-flex items-center gap-1.5 rounded-[2px] bg-forest-900/70 px-3 py-1.5 text-xs font-medium tracking-wide text-primary-foreground backdrop-blur-sm">
                    {photo.label} <ArrowRight size={12} className="text-clay" />
                  </span>
                </Link>
              </AnimateIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function FaqAnswer({ faq }: { faq: Faq }) {
  const at = faq.link ? faq.answer.indexOf(faq.link.text) : -1;
  if (!faq.link || at < 0) return <>{faq.answer}</>;
  return (
    <>
      {faq.answer.slice(0, at)}
      <InlineLink to={faq.link.to}>{faq.link.text}</InlineLink>
      {faq.answer.slice(at + faq.link.text.length)}
    </>
  );
}

export function FaqSection({ heading, items, tone = "muted" }: { heading: string; items: Faq[]; tone?: "light" | "muted" }) {
  return (
    <section className={`${tone === "light" ? "bg-background" : "bg-secondary"} py-20 md:py-28`} aria-labelledby="faq-heading">
      <div className="max-w-[960px] mx-auto px-6">
        <AnimateIn>
          <p className={eyebrowClass}>Frequently Asked Questions</p>
          <h2 id="faq-heading" className="font-serif text-4xl md:text-5xl font-light text-forest-900 tracking-[-0.02em] mb-10">
            {heading}
          </h2>
        </AnimateIn>
        <div className="divide-y divide-border border-y border-border">
          {items.map((faq, index) => (
            <AnimateIn key={faq.question} delay={index * 0.06}>
              <article className="py-7">
                <h3 className="font-serif text-2xl font-light text-forest-900 mb-3">{faq.question}</h3>
                <p className="text-foreground/75 leading-relaxed"><FaqAnswer faq={faq} /></p>
              </article>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}

export function FinalCta({ heading, body }: { heading: string; body: string }) {
  return (
    <section className="bg-forest-900 py-20">
      <div className="max-w-[1280px] mx-auto px-6 text-center">
        <AnimateIn>
          <h2 className="font-serif text-3xl md:text-4xl font-light text-primary-foreground tracking-[-0.02em] mb-6">{heading}</h2>
          <p className="text-primary-foreground/60 mb-8 max-w-xl mx-auto">{body}</p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <PrimaryButton to="/contact/">Request a Project Consultation</PrimaryButton>
            <a
              href="tel:+14805151300"
              className="inline-flex items-center gap-2 border border-primary-foreground/30 text-primary-foreground px-8 py-3.5 rounded-[2px] text-sm font-medium hover:border-primary-foreground transition-colors"
            >
              <Phone size={14} /> (480) 515-1300
            </a>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}

interface Props {
  title: string;
  subheading: string;
  heroCta: string;
  heroImage: string;
  heroImageAlt: string;
  heroImageSize: [number, number];
  intro: { lead: string; paragraphs: ReactNode[] };
  offerings: { eyebrow: string; heading: string; items: Card[] };
  feature: { eyebrow: string; heading: string; body?: ReactNode; items?: Card[]; note?: ReactNode };
  process: { heading: string; steps: Card[] };
  projects: { heading: string; items: LinkItem[] };
  reasons: { heading: string; items: Card[] };
  gallery: { heading: string; intro?: string; photos: ProjectPhoto[] };
  faqs: { heading: string; items: Faq[] };
  cta: { heading: string; body: string };
}

/** Default section order: hero, intro, cards, dark band, process, applications, why us, project photos, FAQs, CTA. */
export default function ServiceDetailPage(p: Props) {
  return (
    <>
      <ServiceHero title={p.title} subheading={p.subheading} cta={p.heroCta} image={p.heroImage} imageAlt={p.heroImageAlt} imageSize={p.heroImageSize} />
      <IntroSection {...p.intro} />
      <CardsSection {...p.offerings} />
      <DarkBand {...p.feature} />
      <ProcessSection {...p.process} />
      <LinksSection {...p.projects} />
      <ReasonsSection {...p.reasons} />
      <ProjectGallerySection {...p.gallery} tone="muted" />
      <FaqSection {...p.faqs} tone="light" />
      <FinalCta {...p.cta} />
    </>
  );
}
