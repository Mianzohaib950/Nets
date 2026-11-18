import { Link } from "react-router";
import { ArrowRight } from "lucide-react";
import { AnimateIn } from "../../components/shared/AnimateIn";
import { galleryImageSources } from "../../components/shared/GalleryImage";
import { blogPosts, type BlogPost } from "../../data/blogPosts";

export function formatDate(iso: string) {
  return new Date(`${iso}T12:00:00Z`).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric", timeZone: "UTC" });
}

export function postImageProps(post: BlogPost, sizes: string) {
  return post.image.gallery
    ? { ...galleryImageSources(post.image.src), sizes }
    : { src: post.image.src };
}

export default function BlogIndex() {
  return (
    <>
      {/* Page header, same as the Services page */}
      <div className="bg-forest-900 pt-32 pb-20">
        <div className="max-w-[1280px] mx-auto px-6">
          <AnimateIn>
            <p className="text-xs font-medium tracking-widest uppercase text-clay mb-4">Guides &amp; insights</p>
            <h1 className="font-serif text-5xl md:text-6xl font-light text-primary-foreground tracking-[-0.02em] leading-[1.05] mb-6">
              Netting Guides &amp; Blog
            </h1>
            <p className="text-primary-foreground/70 text-lg leading-[1.7] max-w-2xl">
              Practical advice from the Nets Unlimited team on planning, choosing and looking after rope, netting and cable
              systems for zoos, waterparks, play areas and sports facilities.
            </p>
          </AnimateIn>
        </div>
      </div>

      <section className="bg-background py-20 md:py-28">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {blogPosts.map((post, i) => (
              <AnimateIn key={post.slug} delay={i * 0.06}>
                <Link
                  to={`/blogs/${post.slug}/`}
                  className="group h-full flex flex-col border border-border rounded-[4px] overflow-hidden bg-background hover:border-clay transition-colors"
                >
                  <div className="relative overflow-hidden aspect-[16/10] bg-secondary">
                    <img
                      {...postImageProps(post, "(min-width: 768px) 620px, 100vw")}
                      alt={post.image.alt}
                      width={post.image.width}
                      height={post.image.height}
                      loading={i < 2 ? "eager" : "lazy"}
                      decoding="async"
                      className="w-full h-full object-cover transition-transform duration-[600ms] ease-out group-hover:scale-[1.03]"
                    />
                    <span className="absolute top-4 left-4 text-xs font-medium tracking-widest uppercase text-primary-foreground/90 bg-forest-900/70 backdrop-blur-sm px-3 py-1.5 rounded-[2px]">
                      {post.category}
                    </span>
                  </div>
                  <div className="flex flex-col flex-1 p-8">
                    <p className="text-xs font-medium tracking-wide text-foreground/60 mb-3">
                      <time dateTime={post.published}>{formatDate(post.published)}</time> · {post.readMinutes} min read
                    </p>
                    <h2 className="font-serif text-2xl md:text-3xl font-light text-forest-900 tracking-[-0.01em] leading-[1.2] mb-4">
                      {post.title}
                    </h2>
                    <p className="text-foreground/75 leading-relaxed mb-6">{post.excerpt}</p>
                    <span className="mt-auto inline-flex items-center gap-2 text-sm font-medium text-clay">
                      Read the guide <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </Link>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-forest-900 py-20">
        <div className="max-w-[1280px] mx-auto px-6 text-center">
          <AnimateIn>
            <h2 className="font-serif text-3xl md:text-4xl font-light text-primary-foreground tracking-[-0.02em] mb-6">
              Have a question about your project?
            </h2>
            <p className="text-primary-foreground/60 mb-8 max-w-xl mx-auto">
              Our team designs, fabricates, installs and inspects netting across the United States.
            </p>
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
