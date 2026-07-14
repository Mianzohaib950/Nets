import { useRef, useEffect, useState } from "react";
import { Link } from "react-router";
import { ArrowRight } from "lucide-react";
import { motion, useInView, AnimatePresence } from "motion/react";
import { AnimateIn } from "../components/shared/AnimateIn";

const HERO_IMAGES = [
  {
    src: "https://images.unsplash.com/photo-1780608775906-f7315afc979e?w=1400&h=900&fit=crop&auto=format",
    alt: "Geodesic rope netting structure",
  },
  {
    src: "https://images.unsplash.com/photo-1554992985-8ab04fbe59b8?w=1400&h=900&fit=crop&auto=format",
    alt: "Rope footbridge in forest",
  },
  {
    src: "https://images.unsplash.com/photo-1714466614031-b128463b8767?w=1400&h=900&fit=crop&auto=format",
    alt: "Zoo animal exhibit",
  },
  {
    src: "https://images.unsplash.com/photo-1642717841683-c0323214617c?w=1400&h=900&fit=crop&auto=format",
    alt: "Waterpark slides",
  },
  {
    src: "https://images.unsplash.com/photo-1779881259467-ee4b804f8c6a?w=1400&h=900&fit=crop&auto=format",
    alt: "Child climbing rope net",
  },
  {
    src: "https://images.unsplash.com/photo-1778941120800-6ecd662bbc36?w=1400&h=900&fit=crop&auto=format",
    alt: "Construction safety netting",
  },
];

const heroWords = ["Imagine", "the", "Alter'NET'ives"];

const stats = [
  { number: 20, suffix: "+", label: "Years in business" },
  { number: 75, suffix: "+", label: "Combined years of experience" },
  { number: 100, suffix: "s", label: "Projects completed" },
];

const statText = { value: "AZ ROC", label: "#236070 — Licensed & Bonded" };

function CountUp({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref as React.RefObject<Element>, { once: true });

  useEffect(() => {
    if (!inView) return;
    const duration = 1800;
    const steps = 60;
    const increment = target / steps;
    let current = 0;
    let step = 0;
    const timer = setInterval(() => {
      step++;
      current = Math.min(Math.round(increment * step), target);
      setCount(current);
      if (current >= target) clearInterval(timer);
    }, duration / steps);
    return () => clearInterval(timer);
  }, [inView, target]);

  return (
    <span ref={ref} className="font-serif text-4xl font-light text-forest-900 tabular-nums">
      {count}
      {suffix}
    </span>
  );
}

const whatWeDo = [
  {
    title: "Zoos & Aquariums",
    sub: "Animal Exhibits & Enrichment",
    desc: "Custom netting solutions for immersive animal exhibits that are visually unobtrusive, safe, and secure. From new construction to refurbishment and enrichment elements.",
    image:
      "https://images.unsplash.com/photo-1714466614031-b128463b8767?w=800&h=600&fit=crop&auto=format",
    to: "/applications/zoo",
  },
  {
    title: "Waterparks & Themeparks",
    sub: "New Construction & Dry Play",
    desc: "Barriers, queue lines, handrails, slide covers, wave pool barriers, and dry play attractions that keep guests safe and engaged.",
    image:
      "https://images.unsplash.com/photo-1642717841683-c0323214617c?w=800&h=600&fit=crop&auto=format",
    to: "/applications/waterpark",
  },
  {
    title: "Children's Play",
    sub: "Tunnels, Climbs & Spiderweb Nets",
    desc: "Interactive play elements that develop motor skills, coordination, and promote lifelong learning — all while increasing guest satisfaction and time on site.",
    image:
      "https://images.unsplash.com/photo-1779881259467-ee4b804f8c6a?w=800&h=600&fit=crop&auto=format",
    to: "/applications/play",
  },
  {
    title: "Handrails",
    sub: "Synthetic & Stainless Steel",
    desc: "Beautiful, decorative handrails that meet OSHA requirements — hand-woven stainless steel, machine knotted netting, or rope handrails in any configuration.",
    image:
      "https://images.unsplash.com/photo-1563300467-5a9220d63233?w=800&h=600&fit=crop&auto=format",
    to: "/applications/handrail",
  },
  {
    title: "Secondary Protection",
    sub: "Fall, Debris & Blast Protection",
    desc: "Safety netting systems for construction, public areas, and high-threat settings. Customized to lower insurance costs and protect guests and workers.",
    image:
      "https://images.unsplash.com/photo-1778941120800-6ecd662bbc36?w=800&h=600&fit=crop&auto=format",
    to: "/applications/protect",
  },
  {
    title: "Bridges & Tunnels",
    sub: "Stationary, Suspension & V Bridges",
    desc: "Hundreds of bridges built for zoos, theme parks, golf courses, and more. Beautiful, fun, and functional in any configuration.",
    image:
      "https://images.unsplash.com/photo-1554992985-8ab04fbe59b8?w=800&h=600&fit=crop&auto=format",
    to: "/applications/bridge",
  },
  {
    title: "Rope, Cable & Hardware",
    sub: "Supporting Materials",
    desc: "Our signature NU-Line rope, stainless steel cable, and supporting hardware — available in any material the customer requires, all fabricated to the highest standards.",
    image:
      "https://images.unsplash.com/photo-1706149855185-528284ee6eeb?w=800&h=600&fit=crop&auto=format",
    to: "/applications/zoo",
  },
  {
    title: "Theming & Decor",
    sub: "Design Elements",
    desc: "Rope and netting as an architectural element. Stainless steel for modern aesthetics; rope for jungle, desert, or nautical themes.",
    image:
      "https://images.unsplash.com/photo-1779612547670-6b9eb9cf61ca?w=800&h=600&fit=crop&auto=format",
    to: "/applications/decorate",
  },
];

const wordDelay = [0.15, 0.28, 0.42];

export default function Home() {
  const [heroIndex, setHeroIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setHeroIndex((i) => (i + 1) % HERO_IMAGES.length);
    }, 4500);
    return () => clearInterval(id);
  }, []);

  return (
    <>
      {/* HERO */}
      <section className="relative h-screen min-h-[600px] overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-[55fr_45fr] h-full">
          {/* Text side */}
          <div className="relative z-10 flex flex-col justify-center px-10 md:px-16 lg:px-20 bg-forest-900 py-24 lg:py-0">
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
              className="text-xs font-medium tracking-widest uppercase text-clay mb-6"
            >
              Phoenix, Arizona · Est. 2004
            </motion.p>

            <h1 className="font-serif text-5xl md:text-6xl xl:text-7xl font-light text-primary-foreground leading-[1.05] tracking-[-0.02em] mb-8 flex flex-wrap gap-x-4 gap-y-1">
              {heroWords.map((word, i) => (
                <motion.span
                  key={word}
                  initial={{ opacity: 0, y: 40, rotateX: -20 }}
                  animate={{ opacity: 1, y: 0, rotateX: 0 }}
                  transition={{
                    duration: 0.7,
                    delay: wordDelay[i],
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  style={{ display: "inline-block" }}
                  className={word === "Alter'NET'ives" ? "text-primary-foreground" : ""}
                >
                  {word === "Alter'NET'ives" ? (
                    <>
                      Alter<span className="text-clay">'NET'</span>ives
                    </>
                  ) : (
                    word
                  )}
                </motion.span>
              ))}
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="text-primary-foreground/70 text-xl md:text-2xl leading-relaxed mb-10 max-w-lg font-normal"
            >
              Custom rope and netting solutions for zoos, waterparks, play areas, handrails,
              bridges, and more — crafted with expert precision since 2004.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.75, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link
                to="/contact"
                className="relative group inline-flex items-center gap-2 bg-clay text-primary-foreground px-8 py-3.5 rounded-[2px] text-sm font-medium overflow-hidden"
              >
                <motion.span
                  className="absolute inset-0 bg-white/10"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                />
                <span className="relative flex items-center gap-2">
                  Get a Quote <ArrowRight size={14} />
                </span>
              </Link>
              <Link
                to="/gallery"
                className="inline-flex items-center gap-2 text-primary-foreground/70 hover:text-primary-foreground text-sm font-medium py-3.5 transition-colors"
              >
                View Our Work <ArrowRight size={14} />
              </Link>
            </motion.div>
          </div>

          {/* Image side — clips in on load, then cycles */}
          <div className="hidden lg:block relative overflow-hidden bg-forest-900">
            {/* Intro clip-path reveal (runs once) */}
            <motion.div
              className="absolute inset-0 z-10 pointer-events-none"
              initial={{ clipPath: "inset(0 0% 0 0)" }}
              animate={{ clipPath: "inset(0 100% 0 0)" }}
              transition={{ duration: 1.1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              style={{ background: "var(--forest-900)" }}
            />

            {/* Cycling images */}
            <AnimatePresence mode="sync">
              <motion.div
                key={heroIndex}
                className="absolute inset-0"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1.2, ease: "easeInOut" }}
              >
                <motion.img
                  src={HERO_IMAGES[heroIndex].src}
                  alt={HERO_IMAGES[heroIndex].alt}
                  className="absolute inset-0 w-full h-full object-cover"
                  initial={{ scale: 1.06 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 5, ease: "linear" }}
                />
              </motion.div>
            </AnimatePresence>

            <div className="absolute inset-0 bg-forest-900/25 z-[5]" />

            {/* Dot indicators */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-20">
              {HERO_IMAGES.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setHeroIndex(i)}
                  className="w-1.5 h-1.5 rounded-full transition-all duration-300"
                  style={{
                    background: i === heroIndex ? "rgba(255,255,255,0.9)" : "rgba(255,255,255,0.3)",
                    transform: i === heroIndex ? "scale(1.4)" : "scale(1)",
                  }}
                  aria-label={`Slide ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Mobile background — cycles too */}
        <div className="lg:hidden absolute inset-0 -z-10 overflow-hidden">
          <AnimatePresence mode="sync">
            <motion.div
              key={`mob-${heroIndex}`}
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${HERO_IMAGES[heroIndex].src})` }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
            />
          </AnimatePresence>
          <div className="absolute inset-0 bg-forest-900/85" />
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-primary-foreground/40"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.6 }}
        >
          <motion.div
            className="w-px h-10 bg-primary-foreground/30"
            animate={{ scaleY: [0, 1, 0], originY: 0 }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut", repeatDelay: 0.4 }}
          />
        </motion.div>
      </section>

      {/* WHO WE ARE */}
      <section className="bg-background py-24 md:py-32">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <AnimateIn variant="fadeLeft">
              <p className="text-xs font-medium tracking-widest uppercase text-clay mb-4">Welcome</p>
              <h2 className="font-serif text-4xl md:text-5xl font-light text-forest-900 tracking-[-0.02em] leading-[1.1]">
                Who we are
              </h2>
            </AnimateIn>
            <AnimateIn variant="fadeRight" delay={0.1}>
              <p className="text-foreground/80 text-lg leading-[1.7]">
                Since our beginning in 2004, Nets Unlimited has endeavored to become the world's
                leading provider of the highest quality rope and netting products. We invite you to
                explore our site to discover how Nets Unlimited, Inc. serves a wide range of
                industries by combining expert craftsmanship and customized service to deliver
                outstanding functional solutions that never sacrifice beauty, efficiency, or quality.
              </p>
              <p className="text-foreground/80 text-lg leading-[1.7] mt-5">
                There's much to see here. Take your time, look around, and learn all there is to
                know about us. We hope you enjoy our site and take a moment to drop us a line. Let
                us help you Imagine the Alter'NET'ives.
              </p>
              <Link
                to="/about"
                className="relative group inline-flex items-center gap-2 mt-8 text-primary text-sm font-medium"
              >
                <span className="relative">
                  Learn more about us
                  <span className="absolute left-0 bottom-0 w-0 h-px bg-primary group-hover:w-full transition-all duration-300" />
                </span>
                <ArrowRight size={14} />
              </Link>
            </AnimateIn>
          </div>

          {/* Animated stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 pt-16 border-t border-border">
            {stats.map((stat, i) => (
              <AnimateIn key={stat.label} delay={i * 0.1} variant="scale">
                <CountUp target={stat.number} suffix={stat.suffix} />
                <p className="text-sm text-muted-foreground leading-snug mt-2">{stat.label}</p>
              </AnimateIn>
            ))}
            <AnimateIn delay={0.3} variant="scale">
              <span className="font-serif text-4xl font-light text-forest-900">{statText.value}</span>
              <p className="text-sm text-muted-foreground leading-snug mt-2">{statText.label}</p>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* WHAT WE DO */}
      <section className="bg-secondary">
        <div className="max-w-[1280px] mx-auto px-6 py-24 md:py-32">
          <AnimateIn variant="blur">
            <p className="text-xs font-medium tracking-widest uppercase text-clay mb-4">Our Applications</p>
            <h2 className="font-serif text-4xl md:text-5xl font-light text-forest-900 tracking-[-0.02em] leading-[1.1] mb-0">
              What we do
            </h2>
          </AnimateIn>
        </div>

        {whatWeDo.map((item, i) => (
          <div
            key={item.title}
            className={`flex flex-col ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} min-h-[400px]`}
          >
            {/* Image */}
            <div className="w-full md:w-1/2 relative overflow-hidden bg-secondary min-h-[280px] md:min-h-0">
              <AnimateIn variant="scale" className="absolute inset-0">
                <img
                  src={item.image}
                  alt={item.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-[700ms] ease-out hover:scale-[1.04]"
                />
              </AnimateIn>
            </div>

            {/* Text */}
            <div
              className={`w-full md:w-1/2 flex items-center px-10 md:px-16 lg:px-20 py-16 ${
                i % 2 === 0 ? "bg-background" : "bg-secondary"
              }`}
            >
              <AnimateIn variant={i % 2 === 0 ? "fadeRight" : "fadeLeft"}>
                <p className="text-xs font-medium tracking-widest uppercase text-clay mb-3">{item.sub}</p>
                <h3 className="font-serif text-3xl md:text-4xl font-light text-forest-900 tracking-[-0.02em] mb-5">
                  {item.title}
                </h3>
                <p className="text-foreground/75 leading-[1.7] mb-8 max-w-md">{item.desc}</p>
                <Link
                  to={item.to}
                  className="relative group inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-2.5 rounded-[2px] text-sm font-medium overflow-hidden"
                >
                  <motion.span
                    className="absolute inset-0 bg-white/10"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.45, ease: "easeInOut" }}
                  />
                  <span className="relative flex items-center gap-2">
                    Learn More <ArrowRight size={14} />
                  </span>
                </Link>
              </AnimateIn>
            </div>
          </div>
        ))}
      </section>

      {/* CTA BAND */}
      <section className="py-28 overflow-hidden relative">
        {/* Background image with deep gradient overlay */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1554992985-8ab04fbe59b8?w=1600&h=600&fit=crop&auto=format"
            alt=""
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(15,42,29,0.97) 0%, rgba(31,74,50,0.92) 50%, rgba(15,42,29,0.97) 100%)" }} />
        </div>

        {/* Glowing orbs */}
        <motion.div
          className="absolute w-[500px] h-[500px] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(181,116,74,0.12) 0%, transparent 70%)", top: "-20%", left: "5%" }}
          animate={{ scale: [1, 1.15, 1], opacity: [0.7, 1, 0.7] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute w-[400px] h-[400px] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(61,122,84,0.15) 0%, transparent 70%)", bottom: "-10%", right: "10%" }}
          animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.9, 0.5] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
        />

        {/* Animated diagonal accent line */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            className="absolute top-0 bottom-0 w-[1px] opacity-20"
            style={{ background: "linear-gradient(to bottom, transparent, #B5744A, transparent)", left: "30%" }}
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
          />
          <motion.div
            className="absolute top-0 bottom-0 w-[1px] opacity-10"
            style={{ background: "linear-gradient(to bottom, transparent, #fff, transparent)", left: "70%" }}
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.4, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          />
        </div>

        <div className="max-w-[1280px] mx-auto px-6 text-center relative z-10">
          <AnimateIn variant="blur">
            {/* Clay pill label */}
            <div className="inline-flex items-center gap-2 mb-6">
              <span className="w-8 h-px bg-clay/70" />
              <span className="text-xs font-medium tracking-widest uppercase text-clay">Get Started</span>
              <span className="w-8 h-px bg-clay/70" />
            </div>

            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light text-primary-foreground tracking-[-0.02em] mb-6 leading-[1.05]">
              Ready to start<br className="hidden md:block" /> your project?
            </h2>
            <p className="text-primary-foreground/60 mb-10 max-w-lg mx-auto text-lg font-light">
              Our team of experts is ready to help you from concept to completion. Get in touch today.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/contact"
                className="relative group inline-flex items-center gap-2 bg-clay text-primary-foreground px-9 py-4 rounded-[2px] text-sm font-medium overflow-hidden"
              >
                <motion.span
                  className="absolute inset-0 bg-white/10"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.45, ease: "easeInOut" }}
                />
                <span className="relative flex items-center gap-2">
                  Contact Us <ArrowRight size={14} />
                </span>
              </Link>
              <a
                href="tel:4805151300"
                className="inline-flex items-center gap-2 text-primary-foreground/70 hover:text-primary-foreground text-sm font-medium transition-colors border border-primary-foreground/20 hover:border-primary-foreground/50 px-9 py-4 rounded-[2px]"
              >
                (480) 515-1300
              </a>
            </div>
          </AnimateIn>
        </div>
      </section>
    </>
  );
}
