import ApplicationPage from "./ApplicationPage";

export default function Protect() {
  return (
    <ApplicationPage
      pageTitle="We Mitigate Risk"
      heroImage="https://images.unsplash.com/photo-1778941120800-6ecd662bbc36?w=900&h=700&fit=crop&auto=format"
      heroIntro="There are a multitude of applications that safety netting can be utilized for including construction, animal containment, people barriers, safety netting for entertainment and sporting venues, and much more. Customized safety systems can lower insurance costs, positively impact public image, and create better worker morale."
      subsections={[
        {
          title: "Fall & Debris Protection",
          body: "Fall Protection safety netting systems offer passive protection from people or debris falling, without requiring anyone's active involvement. Our safety netting provides strength, impact resistance, durability, and confidence. These safety systems can be designed to catch people, debris or both, and are available for indoor or outdoor use. Our netting systems are custom made to meet your specific requirements.",
          image: "https://images.unsplash.com/photo-1778941120800-6ecd662bbc36?w=800&h=600&fit=crop&auto=format",
        },
        {
          title: "Secondary Barrier",
          body: "Often times in public areas there is an existing barrier — it may be a queue line, a handrail, possibly a Plexiglass barrier, or something similar. However, in today's world that is not always enough. Secondary barriers allow for an additional layer of protection beyond the handrail, to ensure that the public can enjoy your zoo, theme park, or building while mitigating the potential risk created by someone who deliberately or inadvertently circumvents the primary barrier.",
          image: "https://images.unsplash.com/photo-1780608775906-f7315afc979e?w=800&h=600&fit=crop&auto=format",
        },
        {
          title: "Blast Force Containment",
          body: "Blast force injuries are traumas that can occur from direct or indirect exposure to an explosion. Nets Unlimited's blast force protection netting is GSA approved to help absorb the blast force in an effort to reduce human traumas suffered as a result of explosions. This includes solutions for potential high-threat settings including materials storage facilities, production facilities, testing labs, material and equipment service centers, and other potential blast sites.",
          image: "https://images.unsplash.com/photo-1706149855185-528284ee6eeb?w=800&h=600&fit=crop&auto=format",
        },
        {
          title: "Jump Prevention Nets",
          body: "Research shows that jump prevention nets can act as an effective deterrent. If your building or bridge can benefit from a prevention net, we are available to go through the specifications and best options for your situation.",
          image: "https://images.unsplash.com/photo-1563300467-5a9220d63233?w=800&h=600&fit=crop&auto=format",
        },
      ]}
      ctaText="Safety Netting Gallery"
      ctaTo="/gallery/protection-netting"
      relatedApps={[
        { title: "We Zoo", to: "/applications/zoo", image: "https://images.unsplash.com/photo-1714466614031-b128463b8767?w=600&h=400&fit=crop&auto=format" },
        { title: "We Sport", to: "/applications/sport", image: "https://images.unsplash.com/photo-1632946269126-0f8edbe8b068?w=600&h=400&fit=crop&auto=format" },
        { title: "We Handrail", to: "/applications/handrail", image: "https://images.unsplash.com/photo-1563300467-5a9220d63233?w=600&h=400&fit=crop&auto=format" },
      ]}
    />
  );
}
