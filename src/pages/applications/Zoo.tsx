import ApplicationPage from "./ApplicationPage";
import zooHeroOrangutanEnrichment from "../../imports/zoo-hero-orangutan-enrichment.png";
import zooNewConstructionNetting from "../../imports/zoo-new-construction-netting.webp";
import zooRefurbishmentNetEnclosure from "../../imports/zoo-refurbishment-net-enclosure.webp";
import zooAnimalEnrichmentHabitat from "../../imports/zoo-animal-enrichment-habitat.webp";

export default function Zoo() {
  return (
    <ApplicationPage
      pageTitle="We Zoo"
      heroImage={zooHeroOrangutanEnrichment}
      heroIntro="Nets Unlimited has worked with zoos across the country to help bring to life new exhibits, refurbish or re-purpose older exhibits, reface exhibits, or even just create enrichment for your animals' mental health. No matter what stage you are in we are here to help."
      subsections={[
        {
          title: "New Construction",
          body: "Zoos, aquariums, and nature centers are entering a new era of the visitor experience, working to create far more immersive, memorable, and engaging animal exhibits that help promote an important conservation message. Nets Unlimited, Inc. has extensive experience in creating beautiful exhibits that are visually unobtrusive while providing a safe and secure experience for the animals that inhabit them. Whether you have fully executed drawings, or just an idea, we are here to help make your plans become reality.",
          image: zooNewConstructionNetting,
        },
        {
          title: "Refurbishment",
          body: "There has been a metamorphosis in recent years for zoos, as they strive to go from animal exhibitors to natural habitat and conservation sanctuaries. As this change has taken place the visitor experience has also exponentially grown, increasing membership, single visit guests, and time on site. However, at times, there is not the budget, or the room, for a complete new build. That's where Nets Unlimited comes in. We are able to help you in redesigning your older exhibits to better align with your conservation and habitat goals. All you have to do is Imagine the Alter-NET-ives.",
          image: zooRefurbishmentNetEnclosure,
        },
        {
          title: "Animal Enrichment",
          body: "Animal enrichment is an incredibly important aspect of any zoo. In an effort to make sure the animals are as well cared for as possible, enrichment helps to increase their options to utilize their natural behaviors and instincts. Increasing the animal's ability to explore, play, and employ their natural instincts, helps to lower anxiety and abnormal behavior, while increasing overall contentment. Physical activity and the overall survival rate of the animals often improves with different enrichment techniques. Whether you are looking to create chutes, training windows, or animal play elements, Nets Unlimited can help you find the best solution for your zoo.",
          image: zooAnimalEnrichmentHabitat,
        },
      ]}
      ctaText="See our Zoo Gallery"
      ctaTo="/gallery/zoos"
      relatedApps={[
        { title: "We Waterpark", to: "/applications/waterpark", image: "https://images.unsplash.com/photo-1642717841683-c0323214617c?w=600&h=400&fit=crop&auto=format" },
        { title: "We Play", to: "/applications/play", image: "https://images.unsplash.com/photo-1779881259467-ee4b804f8c6a?w=600&h=400&fit=crop&auto=format" },
        { title: "We Protect", to: "/applications/protect", image: "https://images.unsplash.com/photo-1778941120800-6ecd662bbc36?w=600&h=400&fit=crop&auto=format" },
      ]}
    />
  );
}
