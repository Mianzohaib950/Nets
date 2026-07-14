import ApplicationPage from "./ApplicationPage";

export default function Play() {
  return (
    <ApplicationPage
      pageTitle="We Play"
      heroImage="https://images.unsplash.com/photo-1779881259467-ee4b804f8c6a?w=900&h=700&fit=crop&auto=format"
      heroIntro="Nets Unlimited, Inc. creates and builds many types of interactive children's play and obstacle course elements. Children's play elements are critical to youth development — through play, children learn and develop lifelong skills that support growth far past childhood."
      subsections={[
        {
          title: "Tunnels",
          body: "Tunnels provide children the opportunity to crawl and scoot, this in turn develops the gross motor skills and increases coordination of arms and legs. Children's play tunnels can be their own obstacle element, a bridge between elements, or even multiple tunnels together to create obstacle courses.",
          image: "https://images.unsplash.com/photo-1777626760240-08320afdad30?w=800&h=600&fit=crop&auto=format",
        },
        {
          title: "Climbs",
          body: "Children's climbs add an interactive element for your guests to enjoy for many reasons. Climbing increases muscle tone and strength, sharpens visual perception, promotes motor skills, balance, and also helps children gain agility, flexibility, and coordination. Additionally, having a variety of interactive options within a zoo, park, water park, or family fun center improves guest perception of their overall value for the price of admission.",
          image: "https://images.unsplash.com/photo-1779881259467-ee4b804f8c6a?w=800&h=600&fit=crop&auto=format",
        },
        {
          title: "Spiderweb Nets",
          body: "Spiderweb nets offer all of the sensory and cognitive development benefits of our climbs and tunnels and they provide a great learning opportunity about the world around us as well. However, they're also a great addition when space is limited to a single play element.",
          image: "https://images.unsplash.com/photo-1780608775906-f7315afc979e?w=800&h=600&fit=crop&auto=format",
        },
      ]}
      ctaText="See Our Interactive Play Gallery"
      ctaTo="/gallery/play-elements"
      relatedApps={[
        { title: "We Zoo", to: "/applications/zoo", image: "https://images.unsplash.com/photo-1714466614031-b128463b8767?w=600&h=400&fit=crop&auto=format" },
        { title: "We Waterpark", to: "/applications/waterpark", image: "https://images.unsplash.com/photo-1642717841683-c0323214617c?w=600&h=400&fit=crop&auto=format" },
        { title: "We Bridge", to: "/applications/bridge", image: "https://images.unsplash.com/photo-1554992985-8ab04fbe59b8?w=600&h=400&fit=crop&auto=format" },
      ]}
    />
  );
}
