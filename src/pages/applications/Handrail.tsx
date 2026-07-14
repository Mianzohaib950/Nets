import ApplicationPage from "./ApplicationPage";
import handrailHeroWalkway from "../../imports/handrail-hero-walkway.png";
import handrailCableRopeRails from "../../imports/handrail-cable-rope-rails.webp";

export default function Handrail() {
  return (
    <ApplicationPage
      pageTitle="We Handrail"
      heroImage={handrailHeroWalkway}
      heroIntro="One of the most common netting applications Nets Unlimited supplies is handrail nets. Handrails are an OSHA requirement for any drop of more than 8 inches, and also necessary to help keep people on the right path. We build beautiful, decorative handrails that offer an aesthetic component to a critical safety feature."
      subsections={[
        {
          title: "Hand Woven Stainless Steel Netting",
          body: "Stainless steel handrail nets offer an architectural element to help create the illusion of open space, while simultaneously being one of the most enduring netting products on the market. Their longevity is unrivaled by synthetic products; often lasting 15 years or more both indoors and out. Stainless steel nets also have the advantage of being vandal and pest resistant. These nets are handwoven to custom fit any design application required.",
          image: "https://images.unsplash.com/photo-1780608775906-f7315afc979e?w=800&h=600&fit=crop&auto=format",
        },
        {
          title: "Machine Knotted Netting / Themed Handrails",
          body: "Machine knotted netting is a perfect solution for long runs of handrails. These options help to carry or continue the aesthetic of areas in a jungle, tropical, or nautical theme past where handwoven rope handrails are employed for high visual impact. The machine knotted netting is a more budget-friendly choice than a hand-woven net.",
          image: "https://images.unsplash.com/photo-1706149855185-528284ee6eeb?w=800&h=600&fit=crop&auto=format",
        },
        {
          title: "Handwoven Rope Handrails",
          body: "When an individualized high-impact design is needed for a project such as a gateway, restaurant, lobby, or guest entrance area, handwoven rope handrails are an excellent choice. These handrails are custom made to order in any configuration required, and ultimately lead to a beautiful and memorable design element for your property.",
          image: "https://images.unsplash.com/photo-1554992985-8ab04fbe59b8?w=800&h=600&fit=crop&auto=format",
        },
        {
          title: "Cable and Rope Rails",
          body: "Whether you need to provide a gentle reminder to guests about where they should not be, or you just need to organize a line of patrons, simple rope and cable can provide another excellent option for handrails, queue line management, and kick rails.",
          image: handrailCableRopeRails,
        },
      ]}
      ctaText="See our Handrail Gallery"
      ctaTo="/gallery/handrails"
      relatedApps={[
        { title: "We Bridge", to: "/applications/bridge", image: "https://images.unsplash.com/photo-1554992985-8ab04fbe59b8?w=600&h=400&fit=crop&auto=format" },
        { title: "We Protect", to: "/applications/protect", image: "https://images.unsplash.com/photo-1778941120800-6ecd662bbc36?w=600&h=400&fit=crop&auto=format" },
        { title: "We Decorate", to: "/applications/decorate", image: "https://images.unsplash.com/photo-1779612547670-6b9eb9cf61ca?w=600&h=400&fit=crop&auto=format" },
      ]}
    />
  );
}
