import { Link } from "react-router";
import { ArrowRight } from "lucide-react";
import { AnimateIn } from "../components/shared/AnimateIn";

const industries = [
  "Zoos & Aquariums",
  "Waterparks & Themeparks",
  "FEC's / Restaurants / Resorts",
  "Golf Courses & HOA's",
  "Government — International, Federal, State & Local",
  "Residential Home Owners & Builders",
];

export default function About() {
  return (
    <>
      {/* Header */}
      <div className="bg-forest-900 pt-32 pb-20">
        <div className="max-w-[1280px] mx-auto px-6">
          <AnimateIn>
            <p className="text-xs font-medium tracking-widest uppercase text-clay mb-4">Est. January 2004</p>
            <h1 className="font-serif text-5xl md:text-6xl font-light text-primary-foreground tracking-[-0.02em] leading-[1.05]">
              About Us
            </h1>
          </AnimateIn>
        </div>
      </div>

      {/* Net Experts */}
      <section className="bg-background py-24 md:py-32">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-16 items-start">
            <AnimateIn>
              <p className="text-xs font-medium tracking-widest uppercase text-clay mb-4">Our Story</p>
              <h2 className="font-serif text-4xl md:text-5xl font-light text-forest-900 tracking-[-0.02em] leading-[1.1]">
                Net Experts
              </h2>
            </AnimateIn>
            <AnimateIn delay={0.1}>
              <p className="text-foreground/80 text-lg leading-[1.7]">
                NETS Unlimited, Inc. opened its doors for business in January 2004, providing rope and
                netting products to a multitude of different industries and for a variety of applications.
                Our mission was to become the industry leader by consistently providing superior products
                and services that exceed our clients' expectations.
              </p>
              <p className="text-foreground/80 text-lg leading-[1.7] mt-5">
                Through our unwavering commitment to combine quality, excellence, value, integrity, and
                global awareness we hope that we can help you with your rope and netting needs, while
                also fostering a sense of conservation and community connection.
              </p>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="bg-secondary py-24 md:py-32">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimateIn>
              <div className="relative overflow-hidden rounded-[4px] bg-secondary min-h-[400px]">
                <img
                  src="https://images.unsplash.com/photo-1554992985-8ab04fbe59b8?w=800&h=600&fit=crop&auto=format"
                  alt="Rope bridge — craftsmanship in action"
                  className="w-full h-full object-cover min-h-[400px]"
                />
              </div>
            </AnimateIn>
            <AnimateIn delay={0.15}>
              <p className="text-xs font-medium tracking-widest uppercase text-clay mb-4">How We Work</p>
              <h2 className="font-serif text-4xl font-light text-forest-900 tracking-[-0.02em] leading-[1.1] mb-6">
                Our Approach
              </h2>
              <p className="text-foreground/80 leading-[1.7] text-lg">
                Our services include comprehensive consulting to help identify the specific needs of our
                clients, as we know that each situation calls for unique and custom-tailored solutions.
                Our individual professionally developed plans are grounded in our ideals that quality
                craftsmanship and customized service are the best way to bring your ideas and dreams
                to life.
              </p>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* Industry Wide Success */}
      <section className="bg-background py-24 md:py-32">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-16">
            <AnimateIn>
              <p className="text-xs font-medium tracking-widest uppercase text-clay mb-4">Our Clients</p>
              <h2 className="font-serif text-4xl font-light text-forest-900 tracking-[-0.02em] leading-[1.1]">
                Industry Wide Success
              </h2>
            </AnimateIn>
            <AnimateIn delay={0.1}>
              <p className="text-foreground/80 text-lg leading-[1.7] mb-8">
                We work with a large number of clients from various industries, including:
              </p>
              <ul className="space-y-3 mb-8">
                {industries.map((industry, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-clay shrink-0" />
                    <span className="text-foreground/80">{industry}</span>
                  </li>
                ))}
              </ul>
              <p className="text-foreground/80 text-lg leading-[1.7] mb-8 font-serif italic">
                "Our net experts are ready to assist you in implementing solutions that support your
                project's success from inception to completion. All you have to do is Imagine the
                Alter'NET'ives."
              </p>
              <Link
                to="/contact"
                className="relative group inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3.5 rounded-[2px] text-sm font-medium"
              >
                <span className="relative">
                  Work With Us
                  <span className="absolute left-0 bottom-0 w-0 h-px bg-primary-foreground group-hover:w-full transition-all duration-300" />
                </span>
                <ArrowRight size={14} />
              </Link>
            </AnimateIn>
          </div>
        </div>
      </section>
    </>
  );
}
