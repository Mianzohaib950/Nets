import ServiceDetailPage, { InlineLink } from "./ServiceDetailPage";
import { nettingDesignFaqs } from "../../data/serviceFaqs";
import planningConsultationBlueprint from "../../imports/planning-consultation-blueprint.webp";

export default function NettingDesignConsultation() {
  return (
    <ServiceDetailPage
      title="Netting Design & Consultation"
      subheading="Get expert input while your project is still on paper, when changes cost the least."
      heroCta="Request a Consultation"
      heroImage={planningConsultationBlueprint}
      heroImageAlt="Netting enclosure blueprint during project planning"
      heroImageSize={[1400, 929]}
      intro={{
        lead: "The best time to get netting right is before anything is built.",
        paragraphs: [
          "Nets Unlimited works with architects, designers, zoo planners and facility owners from the first sketch, so the netting, rope and cable parts of your project fit the space, the budget and the people or animals using it.",
          "Whether you are starting from scratch, already have drawings and have hit a problem, or want to bring an old exhibit back to life, our design team can help at any stage of the project.",
        ],
      }}
      offerings={{
        eyebrow: "Scope",
        heading: "What Our Netting Design Consultation Covers",
        items: [
          { title: "Site and needs review", body: "We review the site, the purpose of the netting and any limits such as loads, access and existing structures." },
          { title: "Material selection", body: "We recommend the right material for the job: rope, knotted netting, hand-woven stainless steel mesh or cable." },
          { title: "Mesh and layout", body: "Mesh size, attachment points and anchoring are planned around safety, visibility and long-term wear." },
          { title: "Drawing review", body: "We check your drawings for netting details that often cause delays or change orders later." },
          { title: "Refurbishment planning", body: "We look at what can be reused or upgraded in an existing structure before you replace it." },
          { title: "Budget guidance", body: "We help you understand the cost drivers so the design matches the budget early." },
        ],
      }}
      feature={{
        eyebrow: "Plan early",
        heading: "Why Early Netting Planning Saves Time and Money",
        body: "Changing direction while a plan is still lines on paper costs very little. Changing it after steel is up or a crew is on site can mean delays, extra materials and costly change orders. A short pre-construction consultation with a netting specialist helps you avoid those surprises and keeps the project on schedule.",
      }}
      process={{
        heading: "How Our Design Process Works",
        steps: [
          { title: "Initial call", body: "Tell us about the project, the site and your timeline." },
          { title: "Review", body: "We review drawings, photos or a site visit to understand the space." },
          { title: "Recommendations", body: "We propose materials, layout and attachment details." },
          { title: "Proposal and pricing", body: <>You receive a clear proposal you can take into <InlineLink to="/services/custom-net-fabrication/">fabrication</InlineLink>.</> },
        ],
      }}
      projects={{
        heading: "Projects We Design For",
        items: [
          { label: "Zoo and aquarium enclosures", to: "/applications/zoo/" },
          { label: "Waterparks and theme parks", to: "/applications/waterpark/" },
          { label: "Rope bridges and tunnels", to: "/applications/bridge/" },
          { label: "Handrails", to: "/applications/handrail/" },
          { label: "Play structures and climbing nets", to: "/applications/play/" },
          { label: "Golf and sports barriers", to: "/applications/sport/" },
          { label: "Fall and debris protection", to: "/applications/protect/" },
          { label: "Architectural rope and net decor", to: "/applications/decorate/" },
        ],
      }}
      reasons={{
        heading: "Why Work With Nets Unlimited",
        items: [
          { title: "One team from design to install", body: <>We design, <InlineLink to="/services/custom-net-fabrication/">fabricate</InlineLink> and <InlineLink to="/services/netting-installation/">install</InlineLink>, so the design is always buildable.</> },
          { title: "Licensed contractor", body: "Licensed, bonded and insured (AZ ROC #236070)." },
          { title: "Nationwide", body: "Based in Phoenix, Arizona, working on projects across the United States." },
        ],
      }}
      faqs={{ heading: "Netting Design FAQs", items: nettingDesignFaqs }}
      cta={{
        heading: "Planning a Netting Project?",
        body: "Talk to our design team before you build. It is the easiest way to avoid delays and keep your budget on track.",
      }}
    />
  );
}
