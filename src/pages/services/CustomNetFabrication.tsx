import ServiceDetailPage, { InlineLink } from "./ServiceDetailPage";
import { customNetFabricationFaqs } from "../../data/serviceFaqs";
import fabricationLargeNet from "../../imports/fabrication-large-net.webp";
import ropeNetting from "../../imports/fabrication-rope-netting-800.webp";
import stainlessMesh from "../../imports/fabrication-stainless-mesh-800.webp";
import knottedNetting from "../../imports/fabrication-knotted-netting-800.webp";
import ropeCableRigging from "../../imports/fabrication-rope-cable-rigging-800.webp";

export default function CustomNetFabrication() {
  return (
    <ServiceDetailPage
      title="Custom Net & Rope Fabrication"
      subheading="Rope, netting and stainless steel mesh made to order, in any size your project needs."
      heroCta="Request a Quote"
      heroImage={fabricationLargeNet}
      heroImageAlt="Crew hand-weaving a large custom rope net"
      heroImageSize={[1200, 600]}
      intro={{
        lead: "Fabrication is at the heart of what we do.",
        paragraphs: [
          "Our crew of skilled craftsmen makes everything from simple rope lanyards to handrail nets and full-scale animal exhibits. Every net is made to order for the project it is going into.",
          "Whether you need a net made from twine, rope or stainless steel cable, we build it to the size, mesh and strength your design calls for.",
        ],
      }}
      offerings={{
        eyebrow: "Products",
        heading: "What We Fabricate",
        items: [
          {
            title: "Custom Rope Netting",
            body: "Hand-tied and knotted rope nets for play structures, bridges, handrails and theming. We can make nets from any rope the customer requires, and we are proud of nets made from our own NU-Line rope.",
            image: ropeNetting,
            imageAlt: "Custom rope netting on a themed play structure",
          },
          {
            title: "Hand-Woven Stainless Steel Netting",
            body: "Stainless steel cable mesh, woven by hand and made to order in any custom size. Ideal for zoo and aviary enclosures, handrail infill and areas that need a strong, long-lasting barrier with good visibility.",
            image: stainlessMesh,
            imageAlt: "Hand-woven stainless steel cable mesh handrail infill",
          },
          {
            title: "Machine-Knotted and Themed Netting",
            body: "Knotted netting for barriers, sports containment and decorative or nautical theming.",
            image: knottedNetting,
            imageAlt: "Machine-knotted themed netting on a handrail",
          },
          {
            title: "Rope, Cable and Rigging Components",
            body: "Lanyards, rope handrails, cable rails and the rigging needed to install them.",
            image: ropeCableRigging,
            imageAlt: "Rope and cable handrails with rigging hardware",
          },
        ],
      }}
      feature={{
        eyebrow: "Materials",
        heading: "Choosing the Right Material",
        items: [
          { title: "Rope (including NU-Line)", body: "Flexible, warm to the touch and good for play, bridges and theming." },
          { title: "Stainless steel mesh", body: "Strong, durable and low-maintenance; the usual choice for animal enclosures and safety barriers." },
          { title: "Knotted twine netting", body: "Lightweight and cost-effective for containment and sports netting." },
        ],
        note: <>Not sure which one fits? Our <InlineLink to="/services/netting-design-consultation/">design team</InlineLink> can help you choose before fabrication starts.</>,
      }}
      process={{
        heading: "From Drawing to Finished Net",
        steps: [
          { title: "Specification", body: "We confirm sizes, mesh and attachment details from your drawings or our design." },
          { title: "Fabrication", body: "Our craftsmen build the net in our Phoenix workshop." },
          { title: "Quality check", body: "Every net is checked for size, tension points and finish before it leaves." },
          { title: "Delivery or installation", body: "We ship anywhere, or our own crew installs it for you." },
        ],
      }}
      projects={{
        heading: "Where Our Nets Are Used",
        items: [
          { label: "Zoo and aquarium enclosures", to: "/applications/zoo/" },
          { label: "Aviaries", to: "/applications/zoo/" },
          { label: "Waterpark and theme park barriers", to: "/applications/waterpark/" },
          { label: "Rope bridges and tunnels", to: "/applications/bridge/" },
          { label: "Handrails", to: "/applications/handrail/" },
          { label: "Climbing nets and play elements", to: "/applications/play/" },
          { label: "Golf and sports netting", to: "/applications/sport/" },
          { label: "Architectural decor", to: "/applications/decorate/" },
        ],
      }}
      reasons={{
        heading: "Why Choose Nets Unlimited for Fabrication",
        items: [
          { title: "Made to order", body: "Every net is built for its project, not pulled from stock." },
          { title: "NU-Line rope", body: "Our own rope line, used across many of our projects." },
          { title: "In-house from start to finish", body: <>The same team <InlineLink to="/services/netting-design-consultation/">designs</InlineLink>, fabricates and installs.</> },
          { title: "Licensed contractor", body: "Licensed, bonded and insured (AZ ROC #236070)." },
        ],
      }}
      faqs={{ heading: "Net Fabrication FAQs", items: customNetFabricationFaqs }}
      cta={{
        heading: "Need a Custom Net Made?",
        body: "Send us your drawings or measurements and we will put together a quote.",
      }}
    />
  );
}
