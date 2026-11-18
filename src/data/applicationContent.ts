import type { Faq } from "../pages/services/ServiceDetailPage";

// Keyword-led H1s and FAQs for the /applications/... pages. The brand line
// ("We Zoo", "We Bridge") stays visible as the eyebrow above the H1. FAQ answers
// only restate what the page and the rest of the site already say; they are
// reused for each page's FAQPage schema.
export interface ApplicationContent {
  heading: string;
  faqs: Faq[];
  /** Blog guide linked from the page's FAQ section. */
  guide?: { title: string; to: string };
}

export const applicationContent: Record<string, ApplicationContent> = {
  "/applications/zoo": {
    heading: "Zoo & Aquarium Netting",
    guide: { title: "How to choose mesh size for a zoo aviary or animal enclosure", to: "/blogs/zoo-aviary-mesh-size-guide/" },
    faqs: [
      { question: "What kinds of zoo netting projects does Nets Unlimited work on?", answer: "We build new animal exhibits, refurbish and refit older exhibits, and design animal enrichment elements such as chutes, training windows and play structures for zoos, aquariums and nature centers." },
      { question: "Can you renovate an older exhibit instead of building a new one?", answer: "Yes. When the budget or space for a full new build is not there, we work with you to renovate an existing exhibit so it better reflects your conservation mission and habitat goals." },
      { question: "Do we need finished drawings before we contact you?", answer: "No. Whether you have fully executed drawings or just an idea, our team can help plan the netting for your exhibit." },
    ],
  },
  "/applications/waterpark": {
    heading: "Waterpark & Theme Park Netting",
    faqs: [
      { question: "What netting does Nets Unlimited supply for waterparks?", answer: "We help with new attractions, refurbish existing ones, secure guest areas and elements, and build dry play areas such as rope climbs and obstacle courses." },
      { question: "Can you replace worn rope and netting on existing attractions?", answer: "Yes. Nets and ropes need maintenance and replacement over time. We can redesign older guest areas and replace old rope and net with our NU-Line rope." },
      { question: "What is a dry play area?", answer: "A dry play area is a set of rope and net play elements away from the water, so children can keep playing while the rest of the family takes a break from water time." },
    ],
  },
  "/applications/bridge": {
    heading: "Custom Rope Bridges & Tunnels",
    faqs: [
      { question: "What types of rope bridges do you build?", answer: "We build stationary or solid surface bridges, suspension and moving bridges, and one-way or V-bridges made by attaching rope or netting to a cable framework." },
      { question: "What is the difference between a suspension bridge and a moving bridge?", answer: "On a suspension bridge the deck hangs below suspension cables on vertical suspenders. A moving bridge looks similar and its walking path moves, but it is not supported only by suspension cables." },
      { question: "Who do you build rope bridges for?", answer: "We have built bridges for zoos, theme parks, golf courses, children's museums and many other businesses across the United States." },
    ],
  },
  "/applications/handrail": {
    heading: "Rope & Cable Handrail Systems",
    guide: { title: "Rope netting vs stainless steel mesh for handrail infill", to: "/blogs/rope-netting-vs-stainless-steel-mesh-handrails/" },
    faqs: [
      { question: "Which handrail netting materials do you offer?", answer: "We offer hand-woven stainless steel netting, handwoven rope handrails, machine-knotted and themed netting, and simple cable and rope rails." },
      { question: "How long does stainless steel handrail netting last?", answer: "Stainless steel handrail nets often last 15 years or more indoors and out, and they resist vandalism and pests better than synthetic products." },
      { question: "What is the most budget-friendly option for long handrail runs?", answer: "Machine-knotted netting is a more budget-friendly choice than a hand-woven net and works well for long runs, often carrying a jungle, tropical or nautical theme." },
    ],
  },
  "/applications/play": {
    heading: "Custom Rope Play Systems",
    guide: { title: "How often should commercial play nets be inspected?", to: "/blogs/how-often-inspect-commercial-play-nets/" },
    faqs: [
      { question: "What rope play elements do you build?", answer: "We build rope tunnels, climbing nets, spiderweb nets and complete obstacle courses for zoos, parks, waterparks and family fun centers." },
      { question: "Which play element works best in a small space?", answer: "A spiderweb net is a good choice where space is limited, because it offers the climbing and sensory benefits of larger elements in a compact footprint." },
      { question: "Can play nets be inspected and repaired after installation?", answer: "Yes. We offer onsite inspections with a written report, and we can repair netting during the inspection or through a maintenance plan." },
    ],
  },
  "/applications/sport": {
    heading: "Golf & Sports Barrier Netting",
    guide: { title: "Planning golf barrier netting: height, mesh and poles", to: "/blogs/golf-barrier-netting-planning-guide/" },
    faqs: [
      { question: "What sports netting does Nets Unlimited install?", answer: "We build golf course and driving range barriers, baseball batting cages and ballpark barrier netting, and sport court containment netting." },
      { question: "Can you replace damaged batting cage nets?", answer: "Yes. We can build new batting cages or replace existing damaged or worn-out nets, from a single indoor cage to multiple cages for an entertainment center." },
      { question: "Will golf barrier netting spoil the look of the course?", answer: "We design golf barriers to protect golfers, homes, roads and structures while staying as unobtrusive as possible, so they do not take away from the look of the course." },
    ],
  },
  "/applications/protect": {
    heading: "Safety & Fall Protection Netting",
    faqs: [
      { question: "What is fall and debris protection netting?", answer: "It is a passive safety system that catches people, debris or both without anyone needing to monitor it. We custom make these systems for indoor and outdoor use." },
      { question: "What is a secondary barrier?", answer: "A secondary barrier adds a layer of protection behind an existing barrier such as a handrail, queue line or glass panel, in case someone gets past the primary barrier." },
      { question: "Is your blast force netting approved?", answer: "Yes. Our blast force protection netting is GSA approved and is used in high-threat settings such as storage and production facilities and testing labs." },
    ],
  },
  "/applications/decorate": {
    heading: "Architectural Rope & Net Decor",
    faqs: [
      { question: "What materials can be used for decorative netting?", answer: "Stainless steel and coil mesh give a modern look, while rope can add a jungle, desert or nautical theme to a space." },
      { question: "Where is decorative rope and netting used?", answer: "We have installed decorative rope and netting in lobbies, restaurants, guest entrances, waterparks and play areas, as shown in our decor gallery." },
      { question: "Can decorative netting also work as a handrail or barrier?", answer: "Yes. Many of our decorative pieces are also handrails or barriers, such as hand-woven rope handrails that add a high-impact design element." },
    ],
  },
};
