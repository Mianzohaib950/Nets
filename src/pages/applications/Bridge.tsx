import ApplicationPage from "./ApplicationPage";
import bridgeHeroTropicalRopeBridge from "../../imports/bridge-hero-tropical-rope-bridge.webp";
import bridgeStationarySolidSurface from "../../imports/bridge-stationary-solid-surface.webp";
import bridgeSuspensionMovingCreek from "../../imports/bridge-suspension-moving-creek.webp";
import bridgeOneWayVBridge from "../../imports/bridge-one-way-v-bridge.webp";

export default function Bridge() {
  return (
    <ApplicationPage
      pageTitle="We Bridge"
      heroImage={bridgeHeroTropicalRopeBridge}
      heroIntro="Nets Unlimited has built hundreds of bridges over the years. We have worked with zoos, theme parks, golf courses, children's museums, and many other types of businesses to help create beautiful, fun, playful, and functional bridges."
      subsections={[
        {
          title: "Stationary / Solid Surface Bridges",
          body: "Stationary/Solid surface bridges are bridges that do not move. Generally, the walking surface is flat or stationary. Sometimes these can even be just simple walking paths that are dressed up to look like a bridge for aesthetic purposes.",
          image: bridgeStationarySolidSurface,
        },
        {
          title: "Suspension / Moving Bridges",
          body: "A suspension bridge is where the deck/walking surface of the bridge is hung below suspension cables on vertical suspenders. A moving bridge often looks like a suspension bridge, where the walking path moves or clatters, but is not truly supported only by suspension cables. Either option provides high impact and loads of fun.",
          image: bridgeSuspensionMovingCreek,
        },
        {
          title: "One-Way / V Bridge",
          body: "One-Way and V Bridges are generally made rope/netting over a cable framework. Sometimes they will have a wood walking surface as well. These bridges are usually one-directional as they are not wide enough for two-way traffic.",
          image: bridgeOneWayVBridge,
        },
      ]}
      ctaText="See our Bridges Gallery"
      ctaTo="/gallery/bridges"
      relatedApps={[
        { title: "We Zoo", to: "/applications/zoo", image: "https://images.unsplash.com/photo-1714466614031-b128463b8767?w=600&h=400&fit=crop&auto=format" },
        { title: "We Handrail", to: "/applications/handrail", image: "https://images.unsplash.com/photo-1563300467-5a9220d63233?w=600&h=400&fit=crop&auto=format" },
        { title: "We Waterpark", to: "/applications/waterpark", image: "https://images.unsplash.com/photo-1642717841683-c0323214617c?w=600&h=400&fit=crop&auto=format" },
      ]}
    />
  );
}
