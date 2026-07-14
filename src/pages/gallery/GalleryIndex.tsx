import { Link } from "react-router";
import { ArrowRight } from "lucide-react";
import { AnimateIn } from "../../components/shared/AnimateIn";

const categories = [
  {
    title: "Zoos",
    slug: "zoos",
    desc: "Animal exhibits, aquariums, and nature centers",
    image: "https://images.unsplash.com/photo-1714466614031-b128463b8767?w=800&h=600&fit=crop&auto=format",
    count: 24,
  },
  {
    title: "Waterparks",
    slug: "waterparks",
    desc: "Water attractions, dry play, and theming elements",
    image: "https://images.unsplash.com/photo-1642717841683-c0323214617c?w=800&h=600&fit=crop&auto=format",
    count: 18,
  },
  {
    title: "Bridges",
    slug: "bridges",
    desc: "Suspension, stationary, and V bridges of all kinds",
    image: "https://images.unsplash.com/photo-1554992985-8ab04fbe59b8?w=800&h=600&fit=crop&auto=format",
    count: 32,
  },
  {
    title: "Handrails",
    slug: "handrails",
    desc: "Stainless steel, rope, and cable handrail systems",
    image: "https://images.unsplash.com/photo-1563300467-5a9220d63233?w=800&h=600&fit=crop&auto=format",
    count: 28,
  },
  {
    title: "Play Elements",
    slug: "play-elements",
    desc: "Tunnels, climbs, spiderweb nets, and obstacle courses",
    image: "https://images.unsplash.com/photo-1779881259467-ee4b804f8c6a?w=800&h=600&fit=crop&auto=format",
    count: 20,
  },
  {
    title: "Golf & Sport",
    slug: "golf-and-sport",
    desc: "Driving ranges, batting cages, and sport court containment",
    image: "https://images.unsplash.com/photo-1632946269126-0f8edbe8b068?w=800&h=600&fit=crop&auto=format",
    count: 15,
  },
  {
    title: "Protection Netting",
    slug: "protection-netting",
    desc: "Fall protection, debris containment, and safety systems",
    image: "https://images.unsplash.com/photo-1778941120800-6ecd662bbc36?w=800&h=600&fit=crop&auto=format",
    count: 22,
  },
];

export default function GalleryIndex() {
  return (
    <>
      <div className="bg-forest-900 pt-32 pb-20">
        <div className="max-w-[1280px] mx-auto px-6">
          <AnimateIn>
            <p className="text-xs font-medium tracking-widest uppercase text-clay mb-4">Our Work</p>
            <h1 className="font-serif text-5xl md:text-6xl font-light text-primary-foreground tracking-[-0.02em] leading-[1.05]">
              Galleries
            </h1>
          </AnimateIn>
        </div>
      </div>

      <section className="bg-background py-20 md:py-28">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((cat, i) => (
              <AnimateIn key={cat.slug} delay={i * 0.07}>
                <Link
                  to={`/gallery/${cat.slug}`}
                  className="group block border border-border rounded-[4px] overflow-hidden"
                >
                  <div className="relative overflow-hidden h-56 bg-secondary">
                    <img
                      src={cat.image}
                      alt={cat.title}
                      className="w-full h-full object-cover transition-transform duration-[600ms] ease-out group-hover:scale-[1.03]"
                    />
                    <div className="absolute inset-0 bg-forest-900/30 group-hover:bg-forest-900/10 transition-colors duration-300" />
                    <span className="absolute top-4 right-4 text-xs font-medium text-primary-foreground/80 bg-forest-900/60 backdrop-blur-sm px-2.5 py-1 rounded-[2px]">
                      {cat.count} photos
                    </span>
                  </div>
                  <div className="px-6 py-5">
                    <div className="flex items-center justify-between mb-2">
                      <h2 className="font-serif text-xl font-light text-forest-900">{cat.title}</h2>
                      <ArrowRight size={14} className="text-clay group-hover:translate-x-1 transition-transform" />
                    </div>
                    <p className="text-sm text-muted-foreground">{cat.desc}</p>
                  </div>
                </Link>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
