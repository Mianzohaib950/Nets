import ApplicationPage from "./ApplicationPage";

export default function Bridge() {
  return (
    <ApplicationPage
      pageTitle="We Bridge"
      heroImage="https://images.unsplash.com/photo-1554992985-8ab04fbe59b8?w=900&h=700&fit=crop&auto=format"
      heroIntro="Nets Unlimited has built hundreds of bridges over the years. We have worked with zoos, theme parks, golf courses, children's museums, and many other types of businesses to help create beautiful, fun, playful, and functional bridges."
      subsections={[
        {
          title: "Stationary / Solid Surface Bridges",
          body: "Stationary/Solid surface bridges are bridges that do not move. Generally, the walking surface is flat or stationary. Sometimes these can even be just simple walking paths that are dressed up to look like a bridge for aesthetic purposes.",
          image: "https://images.unsplash.com/photo-1587493513878-d68611233b03?w=800&h=600&fit=crop&auto=format",
        },
        {
          title: "Suspension / Moving Bridges",
          body: "A suspension bridge is where the deck/walking surface of the bridge is hung below suspension cables on vertical suspenders. A moving bridge often looks like a suspension bridge, where the walking path moves or clatters, but is not truly supported only by suspension cables. Either option provides high impact and loads of fun.",
          image: "https://images.unsplash.com/photo-1706149855185-528284ee6eeb?w=800&h=600&fit=crop&auto=format",
        },
        {
          title: "One-Way / V Bridge",
          body: "One-Way and V Bridges are generally made rope/netting over a cable framework. Sometimes they will have a wood walking surface as well. These bridges are usually one-directional as they are not wide enough for two-way traffic.",
          image: "https://images.unsplash.com/photo-1563300467-5a9220d63233?w=800&h=600&fit=crop&auto=format",
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
