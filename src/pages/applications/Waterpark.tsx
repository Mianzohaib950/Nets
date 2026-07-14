import ApplicationPage from "./ApplicationPage";
import waterparkNewConstructionResort from "../../imports/waterpark-new-construction-resort.png";
import waterparkRedesignRedecoratePlayEnhanced from "../../imports/waterpark-redesign-redecorate-play-enhanced.png";
import waterparkDryPlayEnhanced from "../../imports/waterpark-dry-play-enhanced.png";

export default function Waterpark() {
  return (
    <ApplicationPage
      pageTitle="We Waterpark"
      heroImage="https://images.unsplash.com/photo-1642717841683-c0323214617c?w=900&h=700&fit=crop&auto=format"
      heroIntro="Nets Unlimited has worked with waterparks and theme parks across the country to help with new construction, refurbish existing attractions, secure elements and guest areas, or even create additional dry play areas to increase guest time on site and overall visitor satisfaction."
      subsections={[
        {
          title: "New Construction",
          body: "Water and theme parks have seen explosive growth over the past 10 years, but as a result, are facing more competition than ever. In an effort to increase guest engagement, frequency of visits, and an increase in season passes, parks are now building more engaging guest experiences that have children begging their parents for return visits. Nets Unlimited, Inc. has extensive experience in creating safe and secure experiences for your families. Whether you have fully executed drawings or just an idea, we are here to help.",
          image: waterparkNewConstructionResort,
        },
        {
          title: "Redesign & Redecorate",
          body: "With new waterparks opening all the time, and theme parks now adding waterpark attractions, there is not always the budget or space for something completely new, but perhaps there is room for something newly refreshed. Over time existing nets and ropes require maintenance and replacing. Nets Unlimited is able to help you in redesigning your existing guest areas, older attractions, and play elements to create a more modern and engaging guest experience. We can also replace that old rope and net with our signature NU-Line rope giving you years longer service life than traditional manila or other synthetic options.",
          image: waterparkRedesignRedecoratePlayEnhanced,
        },
        {
          title: "Dry Play",
          body: "Nets Unlimited, Inc. creates and builds many types of interactive children's play and obstacle course elements. Children's play elements are essential to additional time-on-site and guest satisfaction. With efforts to increase guest engagement in dry children's play areas, Nets Unlimited can help you to build dry play elements that appeal to children of all ages. These elements allow for a break from water play, perhaps while some of the family enjoy a bite to eat or rest in the shade. This option allows the kids to keep on playing, giving the adults a much needed break from water time fun.",
          image: waterparkDryPlayEnhanced,
        },
      ]}
      ctaText="Waterpark Gallery"
      ctaTo="/gallery/waterparks"
      relatedApps={[
        { title: "We Zoo", to: "/applications/zoo", image: "https://images.unsplash.com/photo-1714466614031-b128463b8767?w=600&h=400&fit=crop&auto=format" },
        { title: "We Play", to: "/applications/play", image: "https://images.unsplash.com/photo-1777626760240-08320afdad30?w=600&h=400&fit=crop&auto=format" },
        { title: "We Bridge", to: "/applications/bridge", image: "https://images.unsplash.com/photo-1554992985-8ab04fbe59b8?w=600&h=400&fit=crop&auto=format" },
      ]}
    />
  );
}
