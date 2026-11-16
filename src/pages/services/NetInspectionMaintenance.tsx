import {
  CardsSection,
  DarkBand,
  FaqSection,
  FinalCta,
  InlineLink,
  IntroSection,
  LinksSection,
  ProcessSection,
  ServiceHero,
  TextSection,
} from "./ServiceDetailPage";
import { netInspectionFaqs } from "../../data/serviceFaqs";
import inspectionMaintenanceSiteCheck from "../../imports/inspection-maintenance-site-check.webp";

export default function NetInspectionMaintenance() {
  return (
    <>
      <ServiceHero
        title="Net Inspection, Repair & Maintenance"
        subheading="Keep your nets safe, compliant and looking good, with a written report you can send to your insurer."
        cta="Book an Inspection"
        image={inspectionMaintenanceSiteCheck}
        imageAlt="Technician inspecting an installed net structure"
        imageSize={[1200, 600]}
      />

      <IntroSection
        lead="A careful inspection is one of the most important steps in making your nets and structures last."
        paragraphs={[
          <>Nets Unlimited offers inspection and quality control services for existing net structures, <InlineLink to="/services/netting-installation/">whether we built them or not</InlineLink>.</>,
          "Proper inspections need technical knowledge of the materials and methods, and sound judgment. Our team brings over 75 years of combined experience to every inspection.",
        ]}
      />

      <CardsSection
        eyebrow="Checklist"
        heading="What Our Net Inspections Cover"
        items={[
          { title: "Construction", body: "Was the structure built to industry standards?" },
          { title: "Net condition", body: "Is the net intact, or showing signs of wear, abrasion or UV damage?" },
          { title: "Connections and anchors", body: "Are knots, terminations, fittings and anchor points secure?" },
          { title: "Tension", body: "Are tension and sag within safe limits?" },
          { title: "Safety risks", body: "Is there anything that could put people or animals at risk?" },
        ]}
      />

      <DarkBand
        eyebrow="Reporting"
        heading="A Written Report for Your Insurer"
        body="After every onsite inspection you receive a written report. It records what we checked, what we found and what we recommend, and it can be submitted to your insurance company."
      />

      <TextSection
        eyebrow="Maintenance"
        heading="Repairs and Maintenance Plans"
        paragraphs={[
          <>If any netting needs <InlineLink to="/services/custom-net-fabrication/">repair</InlineLink>, we can fix it during the inspection or schedule the work separately. For sites that need regular checks, such as zoos, waterparks and play areas, our maintenance plans keep inspections and repairs on a set schedule so nothing is missed.</>,
        ]}
      />

      <LinksSection
        heading="Who We Inspect For"
        items={[
          { label: "Zoos and aquariums", to: "/applications/zoo/" },
          { label: "Waterparks and theme parks", to: "/applications/waterpark/" },
          { label: "Playgrounds, schools and play centers", to: "/applications/play/" },
          { label: "Golf courses and sports facilities", to: "/applications/sport/" },
          { label: "Commercial buildings with safety or debris netting", to: "/applications/protect/" },
        ]}
      />

      <ProcessSection
        heading="How an Inspection Works"
        steps={[
          { title: "Book", body: "Tell us what you have and when it was installed." },
          { title: "Onsite inspection", body: "Our team inspects every net, connection and anchor." },
          { title: "Report", body: "You receive a written report with findings and recommendations." },
          { title: "Repair or plan", body: "We carry out any repairs or set up a maintenance plan." },
        ]}
      />

      <FaqSection heading="Net Inspection FAQs" items={netInspectionFaqs} />

      <FinalCta heading="Is It Time for an Inspection?" body="Book an inspection and get a clear, written picture of the condition of your nets." />
    </>
  );
}
