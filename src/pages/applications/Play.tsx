import ApplicationPage from "./ApplicationPage";
import playClimbsIndoorNetTower from "../../imports/play-climbs-indoor-net-tower.webp";
import playSpiderwebKids from "../../imports/play-spiderweb-kids.webp";
import playHeroIndoorRopeCourse from "../../imports/play-hero-indoor-rope-course.webp";
import playTunnelsNightNetBridge from "../../imports/play-tunnels-night-net-bridge.webp";

export default function Play() {
  return (
    <ApplicationPage
      pageTitle="We Play"
      heroImage={playHeroIndoorRopeCourse}
      heroIntro="Nets Unlimited creates and builds many types of interactive children's play and obstacle course elements that ignite the imagination. Children's play elements are critical to youth development — through play, children learn and develop lifelong skills that support growth far past childhood."
      subsections={[
        {
          title: "Tunnels",
          body: "Tunnels provide children the opportunity to crawl and scoot, this in turn develops the gross motor skills and increases coordination of arms and legs. Children's play tunnels can be their own obstacle element, a bridge between elements, or even multiple tunnels together to create obstacle courses.",
          image: playTunnelsNightNetBridge,
        },
        {
          title: "Climbs",
          body: "Children's climbs add an interactive element for your guests to enjoy. Climbing increases muscle tone and strength, sharpens visual perception, promotes motor skills, balance, and also helps children gain agility, flexibility, and coordination. Having a variety of interactive options within a zoo, park, water park, or family fun center improves guest perception of their overall value for the price of admission.",
          image: playClimbsIndoorNetTower,
        },
        {
          title: "Spiderweb Nets",
          body: "Spiderweb nets offer all of the sensory and cognitive development benefits of our climbs and tunnels while providing an additional learning opportunity regarding the world around us. Where space may be limited, a spiderweb net checks many boxes for an added play/learning element.",
          image: playSpiderwebKids,
        },
      ]}
      ctaText="See Our Interactive Play Gallery"
      ctaTo="/gallery/play-elements/"
      relatedApps={[
        { title: "We Zoo", to: "/applications/zoo/", image: "https://images.unsplash.com/photo-1714466614031-b128463b8767?w=600&h=400&fit=crop&auto=format" },
        { title: "We Waterpark", to: "/applications/waterpark/", image: "https://images.unsplash.com/photo-1642717841683-c0323214617c?w=600&h=400&fit=crop&auto=format" },
        { title: "We Bridge", to: "/applications/bridge/", image: "https://images.unsplash.com/photo-1554992985-8ab04fbe59b8?w=600&h=400&fit=crop&auto=format" },
      ]}
    />
  );
}
