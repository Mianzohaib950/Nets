import { Link } from "react-router";
import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import { AnimateIn } from "../components/shared/AnimateIn";

const services = [
  {
    title: "Planning & Consultation",
    body: "Nets Unlimited, Inc. knows that comprehensive consulting is the key to any successful project. During the design phase, changing directions while the plan is still just lines on paper can make a huge difference in the overall reach of your budget. Pre-construction consulting with a netting expert will save you from time delays and costly change orders during building. Also, if you are thinking about re-purposing what you already have, talking with an expert on the possible limitations of your vision should be a top priority. So, whether you need support in the conceptualization phase, or already have drawings but have hit a snag, or just want to make that old exhibit new again, our design team is here to help you through all phases of your project.",
    image: "https://images.unsplash.com/photo-1706149855185-528284ee6eeb?w=900&h=700&fit=crop&auto=format",
    badge: "Phase 01",
  },
  {
    title: "Inspections & Maintenance",
    body: "We offer inspection and quality control services for existing net structures. A competent and thorough inspection is one of the most important elements in achieving the longevity of your nets and structures. Proper inspections require not only technical expertise and knowledge of the materials and procedures but also sound judgment. Our team comes with over 75 combined years of experience. With our onsite inspections, we are able to verify that your structure was built using industry standards, that the net is intact and not showing signs of wear, and provide a written report to be submitted to your insurance company. If any netting requires repairs we can repair it, during the inspection or through one of our maintenance plans.",
    image: "https://images.unsplash.com/photo-1779612547670-6b9eb9cf61ca?w=900&h=700&fit=crop&auto=format",
    badge: "Phase 02",
  },
  {
    title: "Fabrication",
    body: "Fabrication is the cornerstone of Nets Unlimited's business. Our crew of highly skilled craftsmen fabricates everything from simple rope lanyards to handrail nets, to full-scale animal exhibits. Whether you need a net made from twine, rope, or stainless steel cable, rest assured Nets Unlimited will produce the highest quality products in the industry. We make rope nets out of any material the customer requires, but we pride ourselves on nets made from our signature NU-Line rope. Additionally, all of the hand-woven stainless steel nets are made to order, in whatever custom size works for your project.",
    image: "https://images.unsplash.com/photo-1563300467-5a9220d63233?w=900&h=700&fit=crop&auto=format",
    badge: "Phase 03",
  },
  {
    title: "Installation",
    body: "Since our inception Nets Unlimited has set the benchmark for quality netting and rope installations. Our team of professional installers are licensed, bonded, and insured. Supervisors are OSHA 30 trained and all installers are OSHA 10 certified at a minimum. In addition to safety conscientiousness, we aim to deliver the best customer service, regardless of how simple or complicated a project may be. Our experience ensures a professional installation with unparalleled workmanship which will keep your project looking beautiful for years to come. Having Nets Unlimited perform your installations means you know that things were done right and to the highest standards in the industry — ours.",
    image: "https://images.unsplash.com/photo-1778941120800-6ecd662bbc36?w=900&h=700&fit=crop&auto=format",
    badge: "Phase 04",
  },
];

export default function Services() {
  return (
    <>
      {/* Page header */}
      <div className="bg-forest-900 pt-32 pb-20">
        <div className="max-w-[1280px] mx-auto px-6">
          <AnimateIn>
            <p className="text-xs font-medium tracking-widest uppercase text-clay mb-4">What we offer</p>
            <h1 className="font-serif text-5xl md:text-6xl font-light text-primary-foreground tracking-[-0.02em] leading-[1.05]">
              Services
            </h1>
          </AnimateIn>
        </div>
      </div>

      {/* Alternating service rows */}
      {services.map((svc, i) => (
        <div
          key={svc.title}
          className={`flex flex-col ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} min-h-[520px]`}
        >
          {/* Image */}
          <div className="w-full md:w-1/2 relative overflow-hidden bg-secondary min-h-[300px] md:min-h-0">
            <img
              src={svc.image}
              alt={svc.title}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-[600ms] ease-out hover:scale-[1.03]"
            />
            <div className="absolute top-6 left-6">
              <span className="text-xs font-medium tracking-widest uppercase text-primary-foreground/70 bg-forest-900/70 backdrop-blur-sm px-3 py-1.5 rounded-[2px]">
                {svc.badge}
              </span>
            </div>
          </div>
          {/* Text */}
          <div
            className={`w-full md:w-1/2 flex items-center px-10 md:px-16 lg:px-20 py-16 ${
              i % 2 === 0 ? "bg-background" : "bg-secondary"
            }`}
          >
            <AnimateIn variant={i % 2 === 0 ? "fadeRight" : "fadeLeft"}>
              <h2 className="font-serif text-3xl md:text-4xl font-light text-forest-900 tracking-[-0.02em] mb-6">
                {svc.title}
              </h2>
              <p className="text-foreground/75 leading-[1.8] max-w-lg">{svc.body}</p>
            </AnimateIn>
          </div>
        </div>
      ))}

      {/* CTA */}
      <section className="bg-forest-900 py-20">
        <div className="max-w-[1280px] mx-auto px-6 text-center">
          <AnimateIn>
            <h2 className="font-serif text-3xl md:text-4xl font-light text-primary-foreground tracking-[-0.02em] mb-6">
              Let's talk about your project
            </h2>
            <p className="text-primary-foreground/60 mb-8 max-w-xl mx-auto">
              Whether you're in the planning phase or ready to build, our team is here to help.
            </p>
            <Link
              to="/contact"
              className="relative group inline-flex items-center gap-2 bg-clay text-primary-foreground px-8 py-3.5 rounded-[2px] text-sm font-medium overflow-hidden"
            >
              <motion.span
                className="absolute inset-0 bg-white/10"
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%" }}
                transition={{ duration: 0.45, ease: "easeInOut" }}
              />
              <span className="relative flex items-center gap-2">
                Get in Touch <ArrowRight size={14} />
              </span>
            </Link>
          </AnimateIn>
        </div>
      </section>
    </>
  );
}
