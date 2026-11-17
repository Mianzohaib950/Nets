import { BadgeCheck, HardHat, ShieldCheck } from "lucide-react";
import {
  DarkBand,
  FaqSection,
  FinalCta,
  InlineLink,
  IntroSection,
  LinksSection,
  ProcessSection,
  ProjectGallerySection,
  ReasonsSection,
  ServiceHero,
} from "./ServiceDetailPage";
import { nettingInstallationFaqs } from "../../data/serviceFaqs";
import installationNettingSite from "../../imports/installation-netting-site.webp";

export default function NettingInstallation() {
  return (
    <>
      <ServiceHero
        title="Professional Netting Installation"
        subheading="Licensed, bonded and insured crews, installing rope, netting and cable systems the right way."
        cta="Get an Installation Quote"
        image={installationNettingSite}
        imageAlt="Installers fitting safety netting on site"
        imageSize={[1400, 700]}
      />

      <IntroSection
        lead="A great net only works if it is installed properly."
        paragraphs={[
          "Since the beginning, Nets Unlimited has set the standard for netting and rope installation. Our professional installers handle projects of every size, from a single handrail to a full animal exhibit.",
          <>We install the <InlineLink to="/services/custom-net-fabrication/">nets we fabricate</InlineLink>, and we can also install systems designed by others.</>,
        ]}
      />

      <DarkBand
        eyebrow="Safety"
        heading="Safety Comes First"
        badges={[
          { title: "Licensed", body: "Licensed, bonded and insured contractor (AZ ROC #236070).", icon: <ShieldCheck size={26} strokeWidth={1.5} /> },
          { title: "OSHA 30 supervisors", body: "Our supervisors are OSHA 30 trained.", icon: <HardHat size={26} strokeWidth={1.5} /> },
          { title: "OSHA 10 installers", body: "Every installer is OSHA 10 certified at a minimum.", icon: <BadgeCheck size={26} strokeWidth={1.5} /> },
        ]}
        note="That training matters on busy sites like zoos, waterparks and commercial buildings, where work has to be done safely around the public, animals and other trades."
      />

      <LinksSection
        heading="What We Install"
        items={[
          { label: "Zoo and aviary enclosures", to: "/applications/zoo/" },
          { label: "Waterpark and theme park barriers, slide covers and dry-play nets", to: "/applications/waterpark/" },
          { label: "Rope bridges and tunnels", to: "/applications/bridge/" },
          { label: "Rope, cable and stainless steel handrails", to: "/applications/handrail/" },
          { label: "Climbing nets and play elements", to: "/applications/play/" },
          { label: "Golf, baseball and sport court containment netting", to: "/applications/sport/" },
          { label: "Fall, debris and secondary barrier netting", to: "/applications/protect/" },
          { label: "Architectural and decorative rope and net features", to: "/applications/decorate/" },
        ]}
      />

      <ProcessSection
        heading="Our Installation Process"
        steps={[
          { title: "Site check", body: "We check access, anchor points and site conditions." },
          { title: "Scheduling", body: "We agree a schedule that works around your other trades and opening hours." },
          { title: "Installation", body: "Our crew installs, tensions and secures every net." },
          { title: "Final walk-through", body: "We walk the finished work with you and hand it over." },
        ]}
      />

      <ReasonsSection
        tone="muted"
        heading="Why Choose Our Installation Team"
        intro="We aim to give the best customer service on every job, simple or complex. Our experience means a professional installation and workmanship that keeps your project looking good for years. When Nets Unlimited installs your netting, you know it was done right and to the highest standards in the industry."
        items={[
          {
            title: "One team",
            body: <>Same team <InlineLink to="/services/netting-design-consultation/">designs</InlineLink>, <InlineLink to="/services/custom-net-fabrication/">fabricates</InlineLink> and installs, so nothing is lost between stages.</>,
          },
          { title: "Nationwide", body: "Based in Phoenix, Arizona, installing across the United States." },
        ]}
      />

      <ProjectGallerySection
        tone="light"
        heading="Installations Across the Country"
        intro="From aviary canopies hung by lift to netting on hillsides and stairwells, our crews install safely around the public, animals and other trades."
        photos={[
          { src: "/images/zoos/zoo49.webp", alt: "Crew on a lift installing an aviary mesh canopy", label: "Aviary canopy install", to: "/gallery/zoos/" },
          { src: "/images/zoos/zoo50.webp", alt: "Lift raising stainless mesh over a large zoo enclosure", label: "Zoo enclosure install", to: "/gallery/zoos/" },
          { src: "/images/protection-netting/protection26.webp", alt: "Fall protection netting installed below a hillside building", label: "Fall protection", to: "/gallery/protection-netting/" },
          { src: "/images/protection-netting/protection11.webp", alt: "Safety netting installed in a multi-story exterior stairwell", label: "Stairwell netting", to: "/gallery/protection-netting/" },
          { src: "/images/handrails/rs=w_2560 (5).webp", alt: "Rope netting handrail installed on a waterpark walkway", label: "Waterpark handrail", to: "/gallery/handrails/" },
          { src: "/images/play-elements/play27.webp", alt: "Outdoor rope play structure installed among trees", label: "Rope play structure", to: "/gallery/play-elements/" },
        ]}
      />

      <FaqSection tone="muted" heading="Netting Installation FAQs" items={nettingInstallationFaqs} />

      <FinalCta heading="Ready to Install?" body="Tell us about your site and timeline and we will prepare an installation quote." />
    </>
  );
}
