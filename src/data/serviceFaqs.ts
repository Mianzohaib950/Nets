import type { Faq } from "../pages/services/ServiceDetailPage";

// FAQs rendered on the individual /services/... pages and reused for their FAQPage schema.
export const nettingInstallationFaqs: Faq[] = [
  { question: "Do you install outside Arizona?", answer: "Yes. We are based in Phoenix and install across the United States." },
  { question: "Can you install a net that you did not make?", answer: "Yes. We can install systems from other suppliers after checking the materials and design." },
  { question: "Are your installers certified?", answer: "All installers are OSHA 10 certified at a minimum and our supervisors are OSHA 30 trained. We are licensed, bonded and insured." },
  { question: "Can you work around a site that is open to the public?", answer: "Yes. We plan schedules and safety zones around opening hours, animals and other trades." },
  { question: "Do you offer inspections after installation?", answer: "Yes. We offer inspections and maintenance plans to keep your netting in good condition.", link: { text: "inspections and maintenance plans", to: "/services/net-inspection-maintenance/" } },
];

export const netInspectionFaqs: Faq[] = [
  { question: "How often should nets be inspected?", answer: "It depends on the use, the material and the conditions. High-use and outdoor nets need checking more often. We can recommend a schedule as part of your inspection." },
  { question: "Can you inspect nets installed by another company?", answer: "Yes. We inspect existing net structures whoever installed them." },
  { question: "Will I get a report for my insurance company?", answer: "Yes. Every onsite inspection includes a written report that you can submit to your insurer." },
  { question: "Can you repair the netting at the same time?", answer: "In many cases, yes. Small repairs can often be done during the inspection; bigger work is scheduled separately." },
  { question: "Do you offer ongoing maintenance?", answer: "Yes. Our maintenance plans cover regular inspections and repairs on a set schedule." },
];

export const nettingDesignFaqs: Faq[] = [
  { question: "Can you help if we do not have final drawings yet?", answer: "Yes. We often get involved at the concept stage and can help shape the netting details before drawings are finalized." },
  { question: "Can you review drawings from another designer?", answer: "Yes. We regularly review architect and engineer drawings and point out netting details that may cause problems during fabrication or installation." },
  { question: "Do you only work in Arizona?", answer: "No. We are based in Phoenix but work on projects across the United States." },
  { question: "Can you help update an older exhibit or structure?", answer: "Yes. We can assess what you already have and advise on repair, reuse or replacement before you commit to a new build." },
  { question: "What do you need from us to get started?", answer: "A short description of the project, the location, any drawings or photos you have, and your target timeline." },
];

export const customNetFabricationFaqs: Faq[] = [
  { question: "Can you make a net to our exact size?", answer: "Yes. All of our nets are made to order, so we work from your measurements or drawings." },
  { question: "What materials can you work with?", answer: "Twine, rope, knotted netting and stainless steel cable. We can also use a specific rope your project requires." },
  { question: "Do you only fabricate, or install as well?", answer: "Both. We can ship nets anywhere, or our crew can handle the installation.", link: { text: "our crew can handle the installation", to: "/services/netting-installation/" } },
  { question: "Can you replace a net that was made by another company?", answer: "Yes. Send us photos and measurements and we can fabricate a replacement." },
  { question: "How long does fabrication take?", answer: "It depends on the size and material. We will give you a timeline with your quote." },
];
