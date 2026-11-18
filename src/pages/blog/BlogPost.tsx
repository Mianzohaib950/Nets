import { Link, useParams } from "react-router";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { AnimateIn } from "../../components/shared/AnimateIn";
import { blogPostMap, blogPosts } from "../../data/blogPosts";
import { FaqSection } from "../services/ServiceDetailPage";
import NotFound from "../NotFound";
import { formatDate, postImageProps } from "./BlogIndex";

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPostMap[slug ?? ""];
  if (!post) return <NotFound />;

  const others = blogPosts.filter((other) => other.slug !== post.slug).slice(0, 3);

  return (
    <>
      {/* Header */}
      <div className="bg-forest-900 pt-32 pb-16 md:pb-20">
        <div className="max-w-[880px] mx-auto px-6">
          <AnimateIn>
            <Link
              to="/blogs/"
              className="inline-flex items-center gap-2 text-primary-foreground/60 hover:text-primary-foreground text-sm mb-8 transition-colors"
            >
              <ArrowLeft size={14} /> All guides
            </Link>
            <p className="text-xs font-medium tracking-widest uppercase text-clay mb-4">{post.category}</p>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light text-primary-foreground tracking-[-0.02em] leading-[1.08] mb-6">
              {post.title}
            </h1>
            <p className="text-sm text-primary-foreground/70">
              By <Link to="/about/" className="text-primary-foreground underline underline-offset-4 decoration-clay/60">the Nets Unlimited team</Link>
              {" · "}Published <time dateTime={post.published}>{formatDate(post.published)}</time>
              {post.updated && <> · Updated <time dateTime={post.updated}>{formatDate(post.updated)}</time></>}
              {" · "}{post.readMinutes} min read
            </p>
          </AnimateIn>
        </div>
      </div>

      <article className="bg-background pb-8">
        {/* Hero image */}
        <div className="max-w-[1080px] mx-auto px-6 -mt-2 md:-mt-0 pt-10">
          <div className="relative overflow-hidden rounded-[4px] border border-border aspect-[16/9] bg-secondary">
            <img
              {...postImageProps(post, "(min-width: 1080px) 1030px, 100vw")}
              alt={post.image.alt}
              width={post.image.width}
              height={post.image.height}
              {...{ fetchpriority: "high" }}
              decoding="async"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="max-w-[760px] mx-auto px-6 pt-12 md:pt-16">
          {/* Answer-first intro */}
          <p className="font-serif text-xl md:text-2xl font-light text-forest-900 leading-[1.5] mb-10">{post.intro}</p>

          {/* Key takeaways */}
          <aside aria-labelledby="takeaways" className="bg-secondary border-l-2 border-clay rounded-r-[4px] p-6 md:p-8 mb-10">
            <h2 id="takeaways" className="text-xs font-medium tracking-widest uppercase text-clay mb-4">Key takeaways</h2>
            <ul className="list-disc pl-5 space-y-2 text-foreground/80 leading-relaxed">
              {post.takeaways.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </aside>

          {/* Table of contents */}
          <nav aria-label="In this guide" className="mb-12 border-y border-border py-6">
            <p className="text-xs font-medium tracking-widest uppercase text-foreground/60 mb-3">In this guide</p>
            <ol className="space-y-2">
              {post.sections.map((section, i) => (
                <li key={section.id}>
                  <a href={`#${section.id}`} className="group inline-flex gap-3 text-forest-900 hover:text-clay transition-colors">
                    <span className="text-clay tabular-nums">{String(i + 1).padStart(2, "0")}</span>
                    {section.heading}
                  </a>
                </li>
              ))}
            </ol>
          </nav>

          {/* Body */}
          <div className="text-foreground/80 text-lg leading-[1.8]">
            {post.sections.map((section) => (
              <section key={section.id} id={section.id} className="mb-12 scroll-mt-28">
                <h2 className="font-serif text-3xl font-light text-forest-900 tracking-[-0.02em] leading-[1.2] mb-5">{section.heading}</h2>
                {section.body}
              </section>
            ))}
          </div>

          {/* Sources */}
          <div className="border-t border-border pt-8 mb-10">
            <h2 className="text-xs font-medium tracking-widest uppercase text-foreground/60 mb-3">Sources</h2>
            <ul className="space-y-2 text-sm">
              {post.sources.map((source) => (
                <li key={source.url}>
                  <a href={source.url} target="_blank" rel="noopener" className="text-forest-900 underline underline-offset-4 decoration-clay/40 hover:decoration-clay">
                    {source.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Author box */}
          <div className="flex flex-col sm:flex-row gap-5 bg-secondary rounded-[4px] p-6 md:p-8 mb-6">
            <div className="shrink-0 w-14 h-14 rounded-full bg-forest-900 text-clay flex items-center justify-center font-serif text-xl" aria-hidden="true">NU</div>
            <div>
              <p className="font-medium text-forest-900 mb-1">The Nets Unlimited team</p>
              <p className="text-sm text-foreground/75 leading-relaxed">
                Nets Unlimited designs, fabricates, installs and inspects custom rope, netting and cable systems from Phoenix,
                Arizona, for projects across the United States. Licensed, bonded and insured (AZ ROC #236070).{" "}
                <Link to="/about/" className="text-clay underline underline-offset-4 decoration-clay/40">About us</Link>
              </p>
            </div>
          </div>
          <p className="text-xs text-foreground/55 mb-4">
            Written by the Nets Unlimited team with AI drafting assistance. Facts are linked to their sources.
          </p>
        </div>
      </article>

      <FaqSection heading="Frequently asked questions" items={post.faqs} />

      {/* CTA */}
      <section className="bg-forest-900 py-20">
        <div className="max-w-[1280px] mx-auto px-6 text-center">
          <AnimateIn>
            <h2 className="font-serif text-3xl md:text-4xl font-light text-primary-foreground tracking-[-0.02em] mb-6">{post.cta.heading}</h2>
            <p className="text-primary-foreground/60 mb-8 max-w-xl mx-auto">{post.cta.body}</p>
            <Link
              to={post.cta.to}
              className="relative group inline-flex items-center gap-2 bg-clay text-primary-foreground px-8 py-3.5 rounded-[2px] text-sm font-medium"
            >
              <span className="relative">
                {post.cta.label}
                <span className="absolute left-0 bottom-0 w-0 h-px bg-primary-foreground group-hover:w-full transition-all duration-300" />
              </span>
              <ArrowRight size={14} />
            </Link>
          </AnimateIn>
        </div>
      </section>

      {/* More guides */}
      <section className="bg-background py-20 md:py-28">
        <div className="max-w-[1280px] mx-auto px-6">
          <h2 className="font-serif text-3xl font-light text-forest-900 tracking-[-0.02em] mb-12">More guides</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {others.map((other) => (
              <Link key={other.slug} to={`/blogs/${other.slug}/`} className="group block border border-border rounded-[4px] overflow-hidden">
                <div className="relative overflow-hidden h-48 bg-secondary">
                  <img
                    {...postImageProps(other, "(min-width: 1024px) 405px, (min-width: 640px) 50vw, 100vw")}
                    alt={other.image.alt}
                    width={other.image.width}
                    height={other.image.height}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover transition-transform duration-[600ms] ease-out group-hover:scale-[1.03]"
                  />
                </div>
                <div className="px-6 py-5 flex items-center justify-between gap-4">
                  <span className="font-medium text-forest-900">{other.title}</span>
                  <ArrowRight size={14} className="shrink-0 text-clay group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
