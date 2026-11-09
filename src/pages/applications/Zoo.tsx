import ApplicationPage from "./ApplicationPage";
import zooHeroLemurs from "../../imports/zoo-hero-lemurs.webp";
import zooNewConstructionInstallation from "../../imports/zoo-new-construction-installation.webp";
import zooRefurbishmentNetEnclosure from "../../imports/zoo-refurbishment-net-enclosure.webp";
import zooAnimalEnrichmentHabitat from "../../imports/zoo-animal-enrichment-habitat.seo.webp";

export default function Zoo() {
  return (
    <ApplicationPage
      pageTitle="We Zoo"
      heroImage={zooHeroLemurs}
      heroIntro="NETS Unlimited partners with zoos nationwide at every stage of an exhibit’s life, from building brand-new habitats to renovating, repurposing or refacing older ones. We also design enrichment structures that keep your animals active, curious and engaged. Wherever you are in the process, we’re ready to help."
      subsections={[
        {
          title: "New Construction",
          body: "Zoos, aquariums, and nature centers are entering a new era of the visitor experience, working to create far more immersive, memorable, and engaging animal exhibits that help promote an important conservation message. Nets Unlimited has extensive experience in creating beautiful exhibits that are visually unobtrusive while providing a safe and secure experience for the animals that inhabit them. Whether you have fully executed drawings or just an idea, we are here to help make your plans become reality.",
          image: zooNewConstructionInstallation,
        },
        {
          title: "Refurbishment",
          body: "There has been a metamorphosis in recent years for zoos, as they strive to go from animal exhibitors to natural habitat and conservation sanctuaries. As this change has taken place, the visitor experience has also exponentially grown, increasing membership, single visit guests, and time on site. However, a complete new build isn’t always realistic. The budget or the space may not be there. That’s where NETS Unlimited can help. We work with you to renovate older exhibits so they better reflect your conservation mission and habitat goals.",
          image: zooRefurbishmentNetEnclosure,
        },
        {
          title: "Animal Enrichment",
          body: "Animal enrichment is an incredibly important aspect of any zoo. In an effort to make sure the animals are as well cared for as possible, enrichment helps to increase their options to exercise their natural behaviors and instincts. Increasing the animal's ability to explore, play, and employ their natural instincts helps to lower anxiety and abnormal behavior, while increasing overall contentment. Physical activity and the overall survival rate of the animals often improves with different enrichment techniques. Whether you are looking to create chutes, training windows, or animal play elements, Nets Unlimited can help you create the best solution for your zoo.",
          image: zooAnimalEnrichmentHabitat,
        },
      ]}
      ctaText="See our Zoo Gallery"
      ctaTo="/gallery/zoos/"
      relatedApps={[
        { title: "We Waterpark", to: "/applications/waterpark/", image: "https://images.unsplash.com/photo-1642717841683-c0323214617c?w=600&h=400&fit=crop&auto=format" },
        { title: "We Play", to: "/applications/play/", image: "https://images.unsplash.com/photo-1779881259467-ee4b804f8c6a?w=600&h=400&fit=crop&auto=format" },
        { title: "We Protect", to: "/applications/protect/", image: "https://images.unsplash.com/photo-1778941120800-6ecd662bbc36?w=600&h=400&fit=crop&auto=format" },
      ]}
    />
  );
}
