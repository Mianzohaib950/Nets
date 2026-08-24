import { useRef, useEffect, useState } from "react";
import { Link } from "react-router";
import { ArrowRight } from "lucide-react";
import { AnimateIn } from "../components/shared/AnimateIn";
import bridgeTunnelNetting from "../imports/bridge-tunnel-netting.webp";
import golfNetsSunsetBanner from "../imports/golf-nets-sunset-banner.webp";

const HERO_IMAGES = [
  {
    src: "/images/home-heroes/themed-play.webp",
    alt: "Themed rope and net play structure",
  },
  {
    src: "/images/home-heroes/zoo.webp",
    alt: "Zoo net enclosure",
  },
  {
    src: "/images/home-heroes/waterpark.webp",
    alt: "Waterpark rope netting barrier",
  },
  {
    src: "/images/home-heroes/play.webp",
    alt: "Children's rope bridge play structure",
  },
  {
    src: "/images/home-heroes/bridge.webp",
    alt: "Bridge with netted handrails",
  },
  {
    src: "/images/home-heroes/protection.webp",
    alt: "Secondary protection netting corridor",
  },
];

const heroWords = ["Imagine", "the", "Alter'NET'ives"];

const stats = [
  { number: 20, suffix: "+", label: "Years in business" },
  { number: 75, suffix: "+", label: "Combined years of experience" },
  { number: 100, suffix: "s", label: "Projects completed" },
];

const statText = { value: "AZ ROC", label: "#236070 — Licensed & Bonded" };

const faqs = [
  { question: "What types of custom netting does Nets Unlimited provide?", answer: "We fabricate and install zoo enclosures, waterpark barriers, rope bridges, play elements, handrails, sports containment systems and fall or debris protection netting." },
  { question: "Does Nets Unlimited work outside Arizona?", answer: "Yes. Our Phoenix-based team supports commercial, recreational and zoological projects throughout the United States." },
  { question: "Can you help before a project has final drawings?", answer: "Yes. We provide planning and consultation from early concepts through custom fabrication, installation, inspection and maintenance." },
];

function CountUp({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    const duration = 1800;
    const steps = 60;
    const increment = target / steps;
    let current = 0;
    let step = 0;
    let timer: ReturnType<typeof setInterval> | undefined;
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting || timer) return;
      observer.disconnect();
      timer = setInterval(() => {
        step++;
        current = Math.min(Math.round(increment * step), target);
        setCount(current);
        if (current >= target && timer) clearInterval(timer);
      }, duration / steps);
    });
    observer.observe(element);
    return () => {
      observer.disconnect();
      if (timer) clearInterval(timer);
    };
  }, [target]);

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
    image: "/images/home-cards/zoos.webp",
    to: "/applications/zoo",
  },
  {
    title: "Waterparks & Themeparks",
    sub: "New Construction & Dry Play",
    desc: "Barriers, queue lines, handrails, slide covers, wave pool barriers, and dry play attractions that keep guests safe and engaged.",
    image: "/images/home-cards/waterparks.webp",
    to: "/applications/waterpark",
  },
  {
    title: "Children's Play",
    sub: "Tunnels, Climbs & Spiderweb Nets",
    desc: "Interactive play elements that develop motor skills, coordination, and promote lifelong learning — all while increasing guest satisfaction and time on site.",
    image: "/images/home-cards/play.webp",
    to: "/applications/play",
  },
  {
    title: "Handrails",
    sub: "Synthetic & Stainless Steel",
    desc: "Beautiful, decorative handrails that meet OSHA requirements — hand-woven stainless steel, machine knotted netting, or rope handrails in any configuration.",
    image: "/images/home-cards/handrails.webp",
    to: "/applications/handrail",
  },
  {
    title: "Secondary Protection",
    sub: "Fall, Debris & Blast Protection",
    desc: "Safety netting systems for construction, public areas, and high-threat settings. Customized to lower insurance costs and protect guests and workers.",
    image: "/images/home-cards/protection.webp",
    to: "/applications/protect",
  },
  {
    title: "Bridges & Tunnels",
    sub: "Stationary, Suspension & V Bridges",
    desc: "Hundreds of bridges built for zoos, theme parks, golf courses, and more. Beautiful, fun, and functional in any configuration.",
    image: "/images/home-cards/bridges.webp",
    to: "/applications/bridge",
  },
  {
    title: "Rope, Cable & Hardware",
    sub: "Supporting Materials",
    desc: "Our signature NU-Line rope, stainless steel cable, and supporting hardware — available in any material the customer requires, all fabricated to the highest standards.",
    image: "/images/home-cards/hardware.webp",
    to: "/applications/zoo",
  },
  {
    title: "Theming & Decor",
    sub: "Design Elements",
    desc: "Rope and netting as an architectural element. Stainless steel for modern aesthetics; rope for jungle, desert, or nautical themes.",
    image: "/images/home-cards/decor.webp",
    to: "/applications/decorate",
  },
];

export default function Home() {
  const [heroIndex, setHeroIndex] = useState(0);

  useEffect(() => {
    const desktop = window.matchMedia("(min-width: 1024px)");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const engagementEvents = ["pointerdown", "keydown", "touchstart", "scroll"] as const;
    let intervalId: ReturnType<typeof setInterval> | undefined;
    let engaged = false;

    const stopCarousel = () => {
      if (intervalId) clearInterval(intervalId);
      intervalId = undefined;
    };
    const updateCarousel = () => {
      stopCarousel();
      if (!engaged || !desktop.matches || reducedMotion.matches || document.hidden) return;
      intervalId = setInterval(() => {
        setHeroIndex((i) => (i + 1) % HERO_IMAGES.length);
      }, 4500);
    };
    const onVisibilityChange = () => updateCarousel();
    const onEngagement = () => {
      if (engaged) return;
      engaged = true;
      engagementEvents.forEach((event) => window.removeEventListener(event, onEngagement));
      updateCarousel();
    };

    // Only engaged desktop visitors start the visual carousel. This preserves
    // the interaction while keeping five hidden slides off the critical path.
    engagementEvents.forEach((event) => window.addEventListener(event, onEngagement, { passive: true }));
    desktop.addEventListener("change", updateCarousel);
    reducedMotion.addEventListener("change", updateCarousel);
    document.addEventListener("visibilitychange", onVisibilityChange);
    return () => {
      desktop.removeEventListener("change", updateCarousel);
      reducedMotion.removeEventListener("change", updateCarousel);
      document.removeEventListener("visibilitychange", onVisibilityChange);
      engagementEvents.forEach((event) => window.removeEventListener(event, onEngagement));
      stopCarousel();
    };
  }, []);

  return (
    <>
      {/* HERO */}
      <section className="relative h-screen min-h-[600px] overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-[55fr_45fr] h-full">
          {/* Text side */}
          <div className="relative z-10 flex flex-col justify-center px-10 md:px-16 lg:px-20 bg-forest-900 py-24 lg:py-0">
            <p className="text-xs font-medium tracking-widest uppercase text-clay mb-6">
              Phoenix, Arizona · Est. 2003
            </p>

            <h1 className="font-serif text-5xl md:text-6xl xl:text-7xl font-light text-primary-foreground leading-[1.05] tracking-[-0.02em] mb-8 flex flex-wrap gap-x-4 gap-y-1">
              {heroWords.map((word) => (
                <span
                  key={word}
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
                </span>
              ))}
            </h1>

            <p className="text-primary-foreground/70 text-xl md:text-2xl leading-relaxed mb-10 max-w-lg font-normal">
              Custom rope and netting solutions for zoos, waterparks, play areas, handrails,
              bridges, and more — crafted with expert precision since 2003.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="relative group inline-flex items-center gap-2 bg-clay text-primary-foreground px-8 py-3.5 rounded-[2px] text-sm font-medium overflow-hidden"
              >
                <span className="absolute inset-0 -translate-x-full bg-white/10 transition-transform duration-500 group-hover:translate-x-full" />
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
            </div>
          </div>

          {/* Image side — clips in on load, then cycles */}
          <div className="hidden lg:block relative overflow-hidden bg-forest-900">
            {/* Cycling images */}
              <div
                key={heroIndex}
                className="hero-slide-enter absolute inset-0"
              >
                <img
                  src={HERO_IMAGES[heroIndex].src}
                  alt={HERO_IMAGES[heroIndex].alt}
                  fetchPriority={heroIndex === 0 ? "high" : "auto"}
                  loading={heroIndex === 0 ? "eager" : "lazy"}
                  width="960"
                  height="1080"
                  decoding="async"
                  className="hero-slide-image absolute inset-0 w-full h-full object-cover"
                />
              </div>

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

        {/* Scroll indicator */}
        <div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-primary-foreground/40"
        >
          <div
            className="w-px h-10 bg-primary-foreground/30"
          />
        </div>
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
                Since our beginning in 2003, Nets Unlimited has endeavored to become the world's
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

      {/* GOLF NETS UNLIMITED */}
      <section className="bg-background pb-20 md:pb-28" aria-labelledby="golf-nets-heading">
        <div className="w-full px-6 md:px-16 lg:px-[145px]">
          <AnimateIn variant="scale">
            <a
              href="https://golfnetsunlimited.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative grid min-h-[320px] overflow-hidden rounded-[22px] border border-border/70 bg-secondary transition-transform duration-500 hover:-translate-y-1 md:grid-cols-[52fr_48fr]"
              aria-label="Visit the Golf Nets Unlimited website (opens in a new tab)"
            >
              <div className="relative z-10 flex items-center px-8 py-11 sm:px-12 md:py-10 lg:px-12 xl:px-14">
                <div className="w-full max-w-[680px]">
                    <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-clay sm:text-sm">
                      Explore our dedicated website
                    </p>
                    <h2 id="golf-nets-heading" className="font-serif text-4xl font-light leading-none tracking-[-0.025em] text-forest-900 sm:text-5xl lg:text-6xl">
                      Golf Nets Unlimited
                    </h2>
                    <p className="mt-5 max-w-[560px] text-base leading-relaxed text-foreground/75 sm:text-lg lg:text-xl">
                      Discover our complete range of golf netting products and solutions tailored to your needs.
                    </p>
                    <span className="mt-7 inline-flex items-center gap-4 text-base font-semibold text-primary sm:text-lg">
                      <span className="border-b-2 border-clay pb-1 transition-colors group-hover:text-clay">
                        Visit Golf Nets Unlimited
                      </span>
                      <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1.5" aria-hidden="true" />
                    </span>
                </div>
              </div>

              <div className="relative min-h-[280px] overflow-hidden md:-ml-24 md:min-h-full md:[clip-path:polygon(13%_0,100%_0,100%_100%,0_100%)]">
                <img
                  src={golfNetsSunsetBanner}
                  alt="Golf course barrier netting at sunset"
                  loading="lazy"
                  decoding="async"
                  width="1920"
                  height="853"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.035]"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-forest-900/10 to-transparent" />
              </div>

            </a>
          </AnimateIn>
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
                  loading="lazy"
                  fetchPriority="low"
                  decoding="async"
                  width="720"
                  height="540"
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
                  <span className="absolute inset-0 -translate-x-full bg-white/10 transition-transform duration-500 group-hover:translate-x-full" />
                  <span className="relative flex items-center gap-2">
                    Learn More <ArrowRight size={14} />
                  </span>
                </Link>
              </AnimateIn>
            </div>
          </div>
        ))}
      </section>

      <section className="bg-background py-20 md:py-28" aria-labelledby="faq-heading">
        <div className="max-w-[960px] mx-auto px-6">
          <AnimateIn>
            <p className="text-xs font-medium tracking-widest uppercase text-clay mb-4">Frequently Asked Questions</p>
            <h2 id="faq-heading" className="font-serif text-4xl md:text-5xl font-light text-forest-900 tracking-[-0.02em] mb-10">Custom netting questions</h2>
          </AnimateIn>
          <div className="divide-y divide-border border-y border-border">
            {faqs.map((faq, index) => (
              <AnimateIn key={faq.question} delay={index * 0.06}>
                <article className="py-7">
                  <h3 className="font-serif text-2xl font-light text-forest-900 mb-3">{faq.question}</h3>
                  <p className="text-foreground/75 leading-relaxed">{faq.answer}</p>
                </article>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA BAND */}
      <section className="py-28 overflow-hidden relative">
        {/* Background image with deep gradient overlay */}
        <div className="absolute inset-0">
          <img
            src={bridgeTunnelNetting}
            alt=""
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(15,42,29,0.97) 0%, rgba(31,74,50,0.92) 50%, rgba(15,42,29,0.97) 100%)" }} />
        </div>

        {/* Glowing orbs */}
        <div
          className="absolute w-[500px] h-[500px] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(181,116,74,0.12) 0%, transparent 70%)", top: "-20%", left: "5%" }}
        />
        <div
          className="absolute w-[400px] h-[400px] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(61,122,84,0.15) 0%, transparent 70%)", bottom: "-10%", right: "10%" }}
        />

        {/* Animated diagonal accent line */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div
            className="absolute top-0 bottom-0 w-[1px] opacity-20"
            style={{ background: "linear-gradient(to bottom, transparent, #B5744A, transparent)", left: "30%" }}
          />
          <div
            className="absolute top-0 bottom-0 w-[1px] opacity-10"
            style={{ background: "linear-gradient(to bottom, transparent, #fff, transparent)", left: "70%" }}
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
                <span className="absolute inset-0 -translate-x-full bg-white/10 transition-transform duration-500 group-hover:translate-x-full" />
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
