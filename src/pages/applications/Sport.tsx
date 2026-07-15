import ApplicationPage from "./ApplicationPage";
import sportBaseballNetting from "../../imports/sport-baseball-netting.png";
import sportCourtContainment from "../../imports/sport-court-containment.png";
import sportGolfNetting from "../../imports/sport-golf-netting.png";

export default function Sport() {
  return (
    <ApplicationPage
      pageTitle="We Golf & Sport"
      heroImage="https://images.unsplash.com/photo-1632946269126-0f8edbe8b068?w=900&h=700&fit=crop&auto=format"
      heroIntro="Nets Unlimited, Inc. has built a variety of driving ranges and sport court containment systems. We provide a wide array of options to meet the challenge of creating aesthetically pleasing solutions that protect against property damage and injury from stray balls."
      subsections={[
        {
          title: "Golf",
          body: "We understand the importance of maintaining a beautiful course and driving range, while also protecting the golfers, nearby homeowners, roads, and other structures. Nets Unlimited will work with you to build protection solutions that are unobtrusive and effective while making sure that these barriers do not take away from the overall aesthetics of the course.",
          image: sportGolfNetting,
        },
        {
          title: "Baseball Netting",
          body: "Whether you need a single batting cage for an indoor experience or multiple cages for an entertainment center we can help you build what you need or replace existing damaged or worn out nets. Nets Unlimited also provides barrier netting for ballparks and park departments around sport complexes.",
          image: sportBaseballNetting,
        },
        {
          title: "Sport Court Containment / Barrier Netting",
          body: "Do you have a sports court that needs barriers so the balls stay in the court? Nets Unlimited can customize containment netting to keep those balls in play and provide years of service with little to no maintenance.",
          image: sportCourtContainment,
        },
      ]}
      ctaText="Golf and Sport Netting Gallery"
      ctaTo="/gallery/golf-and-sport"
      relatedApps={[
        { title: "We Protect", to: "/applications/protect", image: "https://images.unsplash.com/photo-1778941120800-6ecd662bbc36?w=600&h=400&fit=crop&auto=format" },
        { title: "We Handrail", to: "/applications/handrail", image: "https://images.unsplash.com/photo-1563300467-5a9220d63233?w=600&h=400&fit=crop&auto=format" },
        { title: "We Bridge", to: "/applications/bridge", image: "https://images.unsplash.com/photo-1554992985-8ab04fbe59b8?w=600&h=400&fit=crop&auto=format" },
      ]}
    />
  );
}
