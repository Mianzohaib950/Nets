import { ArrowRight } from "lucide-react";
import { AnimateIn } from "./AnimateIn";
import golfNetsSunsetBanner from "../../imports/golf-nets-sunset-banner.webp";

interface GolfNetsPromoProps {
  className?: string;
}

export function GolfNetsPromo({ className = "pb-20 md:pb-28" }: GolfNetsPromoProps) {
  return (
    <section className={`bg-background ${className}`} aria-labelledby="golf-nets-heading">
      <div className="w-full px-10 md:px-16 lg:px-20">
        <AnimateIn variant="scale">
          <a
            href="https://golfnetsunlimited.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative grid min-h-[320px] overflow-hidden rounded-[22px] border border-border/70 bg-secondary transition-transform duration-500 hover:-translate-y-1 md:grid-cols-[52fr_48fr]"
            aria-label="Visit the Golf Nets Unlimited website (opens in a new tab)"
          >
            <div className="relative z-10 flex items-center px-10 py-12 md:px-12 lg:px-16">
              <div className="w-full max-w-[680px]">
                <p className="mb-4 text-xs font-medium uppercase tracking-widest text-clay">
                  Explore our dedicated website
                </p>
                <h2 id="golf-nets-heading" className="font-serif text-3xl font-light leading-[1.1] tracking-[-0.02em] text-forest-900 md:text-4xl">
                  Golf Nets Unlimited
                </h2>
                <p className="mt-5 max-w-lg text-base leading-[1.8] text-foreground/75">
                  Discover our complete range of golf netting products and solutions tailored to your needs.
                </p>
                <span className="mt-7 inline-flex items-center gap-3 text-sm font-medium text-primary">
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
  );
}
