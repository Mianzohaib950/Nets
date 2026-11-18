import type { ReactNode } from "react";
import { InlineLink } from "../pages/services/ServiceDetailPage";
import type { Faq } from "../pages/services/ServiceDetailPage";
import handrailStainless from "../imports/handrail-hand-woven-stainless-steel.seo.webp";
import golfHero from "../imports/sport-hero-golf-containment-netting.seo.webp";

// Blog posts. Each post supports one money page (linked in its first half) and
// follows the Novatore SEO Playbook post standard: answer-first intro, key
// takeaways, question-led H2s, first-hand material from Nets Unlimited's own
// work, sourced external facts, FAQs and one CTA.
//
// Publishing rule (playbook section 3): a named Nets Unlimited expert must
// fact-check and approve each post before it goes live.

export interface BlogSection {
  id: string;
  heading: string;
  body: ReactNode;
}

export interface BlogPost {
  slug: string;
  title: string;
  metaTitle: string;
  description: string;
  category: string;
  published: string; // ISO date
  updated?: string;
  readMinutes: number;
  /** Either an imported asset or an existing gallery image path. */
  image: { src: string; alt: string; gallery?: boolean; width: number; height: number };
  excerpt: string;
  intro: ReactNode;
  takeaways: string[];
  sections: BlogSection[];
  faqs: Faq[];
  sources: { label: string; url: string }[];
  cta: { heading: string; body: string; label: string; to: string };
}

const p = "mb-5";

export const blogPosts: BlogPost[] = [
  {
    slug: "how-often-inspect-commercial-play-nets",
    title: "How Often Should Commercial Play Nets Be Inspected?",
    metaTitle: "How Often Should Play Nets Be Inspected? | Nets Unlimited",
    description: "An inspection schedule for commercial climbing nets, rope tunnels and spiderweb nets: daily or weekly checks plus detailed quarterly or semi-annual inspections.",
    category: "Inspection & Maintenance",
    published: "2026-11-18",
    readMinutes: 6,
    image: { src: "/images/play-elements/play18.webp", alt: "Children playing on a rope spiderweb net at a commercial play area", gallery: true, width: 1600, height: 1200 },
    excerpt: "Quick visual checks every day or week, plus a detailed inspection every quarter or six months. Here is what to check on rope play nets and when to call a specialist.",
    intro: (
      <>
        Commercial play nets need two kinds of inspection: a quick visual check that staff do daily or weekly, and a
        detailed hands-on inspection that is usually done quarterly or semi-annually. Busy, outdoor or vandalism-prone sites
        sit at the more frequent end. This guide is for operators of zoos, waterparks, parks and family fun centers with
        rope climbs, tunnels and spiderweb nets.
      </>
    ),
    takeaways: [
      "Use a two-tier schedule: high-frequency visual checks (daily or weekly) and low-frequency detailed inspections (quarterly or semi-annually).",
      "Use, age, materials, weather and vandalism decide where your site sits in that range.",
      "Check the net, the connections and anchors, the tension and the area around the net, not just the rope.",
      "Write every inspection and repair down. Your insurer and your next budget both depend on that record.",
    ],
    sections: [
      {
        id: "two-tier-schedule",
        heading: "What inspection schedule do play nets need?",
        body: (
          <>
            <p className={p}>
              Playground maker PlayCore splits playground inspections into two tiers. High-frequency inspections are
              "often performed daily or weekly" and look for conditions that change with use and weather. Low-frequency
              inspections are "often performed quarterly or semi-annually" and look in depth at wear on the equipment
              itself. PlayCore adds that the right frequency depends on "equipment age, use, and materials."
            </p>
            <p>
              Rope and net elements fit this model well. A quick daily or weekly walk-around catches the obvious problems
              early. A detailed quarterly or semi-annual inspection catches slow wear that a walk-around misses.
            </p>
          </>
        ),
      },
      {
        id: "what-changes-frequency",
        heading: "What makes a site need more frequent checks?",
        body: (
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Heavy use.</strong> A spiderweb net at a busy waterpark takes far more load in a season than one at a quiet nature center.</li>
            <li><strong>Outdoor exposure.</strong> Sun, heat and water all age synthetic rope and fittings.</li>
            <li><strong>Vandalism.</strong> Cut strands and loosened hardware need to be caught the same day.</li>
            <li><strong>Age and material.</strong> Older nets and lighter materials need closer watching than new nets and stainless steel.</li>
            <li><strong>The manufacturer's instructions.</strong> Always follow the documentation for your specific equipment, which may set its own intervals.</li>
          </ul>
        ),
      },
      {
        id: "what-to-check",
        heading: "What should a play net inspection cover?",
        body: (
          <>
            <p className={p}>
              When our team inspects a net structure, we work through the same five areas every time. You can use them
              for your own checks too:
            </p>
            <ol className="list-decimal pl-6 space-y-2 mb-5">
              <li><strong>Construction:</strong> was the structure built to industry standards?</li>
              <li><strong>Net condition:</strong> is the net intact, or showing signs of wear, abrasion or UV damage?</li>
              <li><strong>Connections and anchors:</strong> are knots, terminations, fittings and anchor points secure?</li>
              <li><strong>Tension:</strong> are tension and sag within safe limits?</li>
              <li><strong>Safety risks:</strong> is there anything that could put people at risk?</li>
            </ol>
            <p>
              Staff doing daily or weekly checks can focus on the obvious items: broken or frayed strands, loose
              hardware, debris and anything that has changed since yesterday. The detailed inspection is where tension,
              anchors and slow wear get measured properly. See our <InlineLink to="/applications/play/">rope play systems</InlineLink> for
              the kinds of nets this covers.
            </p>
          </>
        ),
      },
      {
        id: "keep-records",
        heading: "Why do inspection records matter?",
        body: (
          <p>
            PlayCore says reports detailing inspections, maintenance and repairs "need to be completed for all types of
            inspections and maintenance," and filed somewhere they can be found. Those records show your insurer that the
            equipment is looked after, and they tell you when a net is close to the end of its life so you can budget for
            it. After every onsite inspection, Nets Unlimited provides a written report that records what we checked, what
            we found and what we recommend, which you can submit to your insurance company.
          </p>
        ),
      },
      {
        id: "when-to-call",
        heading: "When should you call a netting specialist?",
        body: (
          <>
            <p className={p}>
              Call a specialist when a daily check finds damage you cannot judge, when a net has not had a detailed
              inspection in the last six months, or before your insurance renewal. PlayCore also recommends an audit by a
              Certified Playground Safety Inspector (CPSI) for new equipment or a new safety program.
            </p>
            <p>
              Our inspection team brings over 75 years of combined experience. If a net needs repair, we can often fix it
              during the inspection, or set up a maintenance plan that keeps inspections and repairs on a set schedule.
              Learn more about our <InlineLink to="/services/">inspection and maintenance services</InlineLink>.
            </p>
          </>
        ),
      },
    ],
    faqs: [
      { question: "Is a monthly check enough for a busy play net?", answer: "Usually not on its own. Busy sites should add quick daily or weekly visual checks, with a detailed inspection every quarter or six months." },
      { question: "Can you inspect play nets installed by another company?", answer: "Yes. We inspect existing net structures whoever installed them, and provide a written report after every onsite inspection." },
      { question: "Can damaged netting be repaired during the inspection?", answer: "In many cases, yes. Small repairs can often be done during the inspection; bigger work is scheduled separately or covered by a maintenance plan." },
    ],
    sources: [
      { label: "PlayCore: Playground maintenance, the process and when to perform inspections", url: "https://www.playcore.com/news/playground-maintenance-the-process-and-when-to-perform-inspections" },
    ],
    cta: { heading: "Book a play net inspection", body: "Get a clear, written picture of the condition of your nets.", label: "Book an Inspection", to: "/contact/" },
  },
  {
    slug: "rope-netting-vs-stainless-steel-mesh-handrails",
    title: "Rope Netting vs Stainless Steel Mesh for Handrail Infill",
    metaTitle: "Rope Netting vs Stainless Mesh Handrails | Nets Unlimited",
    description: "How hand-woven stainless steel mesh, handwoven rope and machine-knotted netting compare for handrail infill: lifespan, look, maintenance and budget.",
    category: "Handrails",
    published: "2026-11-18",
    readMinutes: 5,
    image: { src: handrailStainless, alt: "Hand-woven stainless steel mesh handrail infill on a walkway", width: 1600, height: 1200 },
    excerpt: "Stainless steel mesh lasts longest and keeps views open. Rope brings warmth and theming. Machine-knotted netting stretches the budget on long runs. Here is how to choose.",
    intro: (
      <>
        Choose hand-woven stainless steel mesh when you need the longest life, low maintenance and open views. Choose
        handwoven rope when the handrail is a design feature and you want warmth or a theme. Choose machine-knotted netting
        for long runs on a tighter budget. Many projects use more than one. This guide is for designers, facility managers
        and park operators planning handrails, walkways or overlooks.
      </>
    ),
    takeaways: [
      "Stainless steel handrail nets often last 15 years or more indoors and out, and resist vandalism and pests.",
      "Handwoven rope is the high-impact design choice for entrances, lobbies and themed areas.",
      "Machine-knotted netting is more budget-friendly than hand-woven net for long runs.",
      "Near pools, misting or coastal air, ask about grade 316 stainless steel.",
    ],
    sections: [
      {
        id: "stainless",
        heading: "When is stainless steel mesh the right choice?",
        body: (
          <>
            <p className={p}>
              Hand-woven stainless steel mesh is the most durable infill we make. In our experience stainless handrail
              nets often last 15 years or more, both indoors and outdoors, and they stand up to vandalism and pests far
              better than synthetic products. Because the mesh is thin and open, it also keeps sightlines clear, which
              helps a walkway or overlook feel more open.
            </p>
            <p>
              Grade matters near water. For the chimpanzee enclosure at Taronga Zoo, the project team chose blackened grade
              316 stainless mesh, and the architect noted that stainless steel "will have a longer life in the aggressive
              south-facing coastal environment." If your handrail is near a pool, misting system or the coast, ask your
              supplier about grade 316.
            </p>
          </>
        ),
      },
      {
        id: "rope",
        heading: "When does handwoven rope make more sense?",
        body: (
          <p>
            When the handrail is meant to be seen, such as at a gateway, restaurant, lobby or guest entrance, handwoven rope
            is an excellent choice. Each net is made to order in whatever configuration the space needs, and rope is warm
            to the touch, which suits play areas and bridges. We can make nets from any rope a project requires, including
            our own NU-Line rope. Explore our <InlineLink to="/applications/handrail/">rope and cable handrail systems</InlineLink> to
            see the options side by side.
          </p>
        ),
      },
      {
        id: "knotted",
        heading: "What about machine-knotted netting?",
        body: (
          <p>
            Machine-knotted netting is the budget-friendly option for long runs of handrail. It is often used to carry a
            jungle, tropical or nautical theme past the point where hand-woven rope handrails provide the high-impact look.
            A common layout is hand-woven rope at the entrance, then machine-knotted netting along the rest of the path.
          </p>
        ),
      },
      {
        id: "compare",
        heading: "How do the three options compare?",
        body: (
          <div className="overflow-x-auto border border-border rounded-[4px]">
            <table className="w-full min-w-[560px] text-sm text-left">
              <thead className="bg-secondary text-forest-900">
                <tr>
                  <th className="p-3 font-medium">Infill</th>
                  <th className="p-3 font-medium">Best for</th>
                  <th className="p-3 font-medium">Look</th>
                  <th className="p-3 font-medium">Durability</th>
                  <th className="p-3 font-medium">Budget</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr><td className="p-3">Hand-woven stainless steel</td><td className="p-3">Overlooks, zoo exhibits, high-traffic paths</td><td className="p-3">Modern, open views</td><td className="p-3">Often 15+ years, vandal and pest resistant</td><td className="p-3">Higher</td></tr>
                <tr><td className="p-3">Handwoven rope</td><td className="p-3">Entrances, lobbies, themed areas, bridges</td><td className="p-3">Warm, high visual impact</td><td className="p-3">Depends on rope; NU-Line is built for long service life</td><td className="p-3">Mid to higher</td></tr>
                <tr><td className="p-3">Machine-knotted netting</td><td className="p-3">Long runs, themed paths</td><td className="p-3">Jungle, tropical, nautical</td><td className="p-3">Good with regular inspection</td><td className="p-3">Lower</td></tr>
              </tbody>
            </table>
          </div>
        ),
      },
      {
        id: "code",
        heading: "What should you check before ordering?",
        body: (
          <p>
            Every handrail is a safety feature first. Before ordering, confirm the guard and handrail requirements for your
            site with your local building code and your engineer, including opening sizes and load requirements. Then
            share your drawings, lengths and post layout with your netting supplier so the infill is made to fit.
          </p>
        ),
      },
    ],
    faqs: [
      { question: "Can you match a new handrail to an existing theme?", answer: "Yes. Rope and machine-knotted netting can carry a jungle, tropical or nautical theme, and every net is made to order for the space." },
      { question: "Do you install handrails outside Arizona?", answer: "Yes. We are based in Phoenix and fabricate and install handrail systems across the United States." },
      { question: "Is stainless steel mesh more expensive than rope?", answer: "Usually, yes, but it often lasts 15 years or more with little maintenance, so the cost over its life can be lower." },
    ],
    sources: [
      { label: "ASSDA: Taronga Zoo chimpanzee sanctuary stainless steel mesh", url: "https://assda.asn.au/blog/249-chimpanzee-sanctuary" },
    ],
    cta: { heading: "Planning a handrail project?", body: "Send us your drawings or measurements and we will recommend the right infill.", label: "Request a Quote", to: "/contact/" },
  },
  {
    slug: "zoo-aviary-mesh-size-guide",
    title: "How to Choose Mesh Size for a Zoo Aviary or Animal Enclosure",
    metaTitle: "Zoo Aviary & Enclosure Mesh Size Guide | Nets Unlimited",
    description: "How to choose mesh size, material and finish for zoo aviaries and animal enclosures: size to the smallest animal, pick the stainless grade, plan for visibility.",
    category: "Zoos & Aviaries",
    published: "2026-11-18",
    readMinutes: 6,
    image: { src: "/images/zoos/zoo17.webp", alt: "Large walk-through aviary with a stainless steel mesh canopy", gallery: true, width: 1600, height: 1200 },
    excerpt: "Size the mesh to the smallest animal, choose stainless steel for long life, and consider a blackened finish for visibility. A practical guide for zoo planners.",
    intro: (
      <>
        Size the mesh opening to the smallest animal that will live in the enclosure, not the average one. Then choose the
        material and wire size for the strength and lifespan you need, and the finish for how well visitors can see
        through it. This guide is for zoo planners, curators and architects working on aviaries and mesh enclosures.
      </>
    ),
    takeaways: [
      "The smallest animal sets the mesh opening. Include juveniles and any species that may share the space later.",
      "Stainless steel cable mesh gives a strong, long-lasting barrier with good visibility.",
      "Near pools, misting systems or the coast, ask about grade 316 stainless steel.",
      "A blackened finish makes mesh harder to see, which improves the visitor view.",
      "Confirm the final spec with your veterinary and animal care team.",
    ],
    sections: [
      {
        id: "smallest-animal",
        heading: "What decides the mesh size?",
        body: (
          <>
            <p className={p}>
              The mesh opening must stop the smallest animal in the enclosure from squeezing through or getting its head
              stuck. For a mixed aviary that means the smallest bird, including chicks. For a primate exhibit it means
              the smallest juvenile, and the reach of hands and feet through the mesh.
            </p>
            <p>
              Mesh sizes quoted online vary a lot from supplier to supplier, so treat any single number with caution. The
              right opening for your species should come from your animal care team and the standards that apply to your
              facility, then be built into the drawings before fabrication starts.
            </p>
          </>
        ),
      },
      {
        id: "material",
        heading: "Which material should you use?",
        body: (
          <>
            <p className={p}>
              For most aviaries and primate or carnivore exhibits, hand-woven stainless steel cable mesh is the usual
              choice. It is strong, durable and low-maintenance, and the thin cables keep the enclosure visually
              unobtrusive. We weave our stainless steel netting by hand and make it to order in any custom size, so it can
              follow rockwork, trees and curved frames.
            </p>
            <p>
              Grade matters in wet or coastal settings. The chimpanzee enclosure at Taronga Zoo used 770 m² of 3 mm
              blackened grade 316 stainless steel mesh, and the architect said the stainless steel "will have a longer life
              in the aggressive south-facing coastal environment." See our <InlineLink to="/applications/zoo/">zoo and aquarium netting</InlineLink> work
              for examples.
            </p>
          </>
        ),
      },
      {
        id: "visibility",
        heading: "How do you keep the view clear for visitors?",
        body: (
          <p>
            Visitors should notice the animals, not the mesh. At Taronga, the stainless steel mesh "was blackened using an
            electrolytic process to increase transparency of the enclosure." A darker finish, a thinner cable where the
            loads allow, and careful placement of frames and attachment points all help the mesh disappear from the
            visitor's view.
          </p>
        ),
      },
      {
        id: "structure",
        heading: "What else needs planning besides the mesh?",
        body: (
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Loads and anchoring:</strong> snow, wind, falling branches and animals climbing on the mesh all add load.</li>
            <li><strong>Attachment points:</strong> where the mesh meets frames, rockwork and doors is where gaps and wear start.</li>
            <li><strong>Keeper access:</strong> doors, shift areas and training windows need to be planned with the mesh, not added later.</li>
            <li><strong>Enrichment:</strong> climbing nets, chutes and play elements can be built into the same system.</li>
            <li><strong>Inspection:</strong> plan how the mesh will be inspected and repaired once animals are in.</li>
          </ul>
        ),
      },
      {
        id: "plan-early",
        heading: "When should a netting specialist get involved?",
        body: (
          <p>
            As early as possible. Changing a mesh spec while it is still on paper costs very little; changing it after the
            steel is up can mean delays and change orders. Nets Unlimited works with zoos from the first sketch through
            fabrication and installation, and can also help refurbish an older exhibit when a full new build is not
            realistic.
          </p>
        ),
      },
    ],
    faqs: [
      { question: "Can one mesh size work for every bird in a mixed aviary?", answer: "Only if it is sized for the smallest bird. If species of very different sizes share the space, size the mesh for the smallest one or separate the areas." },
      { question: "Can you replace mesh on an existing exhibit?", answer: "Yes. We can assess what you already have and advise on repair, reuse or replacement before you commit to a new build." },
      { question: "Do you work with zoos outside Arizona?", answer: "Yes. We are based in Phoenix and work with zoos and aquariums across the United States." },
    ],
    sources: [
      { label: "ASSDA: Taronga Zoo chimpanzee sanctuary stainless steel mesh", url: "https://assda.asn.au/blog/249-chimpanzee-sanctuary" },
    ],
    cta: { heading: "Planning an aviary or enclosure?", body: "Talk to our team while your project is still on paper, when changes cost the least.", label: "Request a Consultation", to: "/contact/" },
  },
  {
    slug: "golf-barrier-netting-planning-guide",
    title: "Planning Golf Barrier Netting: Height, Mesh and Poles",
    metaTitle: "Golf Barrier Netting Planning Guide | Nets Unlimited",
    description: "How to plan golf course and driving range barrier netting: what sets the height, choosing mesh, pole spacing and soil, and keeping the barrier unobtrusive.",
    category: "Golf & Sport",
    published: "2026-11-18",
    readMinutes: 5,
    image: { src: golfHero, alt: "Golf containment barrier netting along a course", width: 1600, height: 1200 },
    excerpt: "Height comes from where stray balls land, mesh from the ball size, and poles from the site's soil and wind. A planning guide for courses and driving ranges.",
    intro: (
      <>
        Golf barrier netting is planned in three steps: find where stray balls actually go to set the height and length,
        choose a UV-stabilized mesh small enough to stop a golf ball, then design poles and footings for the site's soil and
        wind. This guide is for golf course managers, driving range owners and HOAs dealing with balls leaving the course.
      </>
    ),
    takeaways: [
      "Height and length come from where stray balls land, not from a standard number.",
      "Heights vary widely by site; one public bid called for 40 ft along the sides and 60 ft at the front.",
      "Use UV-stabilized mesh sized to stop golf balls, with rope-reinforced borders.",
      "Poles and footings depend on soil and wind, so ask for soil reports early.",
    ],
    sections: [
      {
        id: "height",
        heading: "How tall does golf barrier netting need to be?",
        body: (
          <>
            <p className={p}>
              There is no single right height. It depends on where balls leave the course, how far they are travelling,
              and what is on the other side: homes, a road or a parking lot. Start by mapping where stray balls actually
              land and how high they are when they cross the boundary.
            </p>
            <p>
              Real projects show how much heights vary. A public bid for barrier netting at the Grey Rock Golf Course
              driving range in Texas called for netting 40 feet high along two sides and 60 feet high in front of the
              maintenance area. Your site may need more or less.
            </p>
          </>
        ),
      },
      {
        id: "mesh",
        heading: "Which mesh stops a golf ball?",
        body: (
          <p>
            The mesh opening has to be smaller than a golf ball, and the material has to survive years of sun. Sport
            Systems Canada, for example, lists its golf barrier netting as black polyester with a 1.06 inch square mesh and
            2.1 mm twine, UV stabilized, with all four borders sewn with rope. Whatever you choose, ask for UV-stabilized
            twine and reinforced borders, since the edges take the most load.
          </p>
        ),
      },
      {
        id: "poles",
        heading: "How are the poles and footings designed?",
        body: (
          <p>
            A tall net acts like a sail, so wind load drives the pole and footing design. For general outdoor netting,
            Sport Systems Canada says it uses Class A poles between 35 and 45 feet tall, typically spaced 45 to 50 feet on
            center, and asks whether soil reports are available for the area. For a golf barrier, have the pole sizes,
            spacing and footings engineered for your height, wind and soil before anything is ordered.
          </p>
        ),
      },
      {
        id: "looks",
        heading: "How do you keep the barrier from spoiling the course?",
        body: (
          <p>
            A good barrier protects golfers, homeowners, roads and structures without dominating the view. Dark netting,
            well-placed poles and a barrier that only goes where balls actually leave the course all help it blend in. Nets
            Unlimited designs and installs <InlineLink to="/applications/sport/">golf and sports barrier netting</InlineLink> with
            the look of the course in mind.
          </p>
        ),
      },
      {
        id: "maintenance",
        heading: "What maintenance does golf netting need?",
        body: (
          <p>
            Check the netting after storms and at least once a year for tears, worn borders, loose attachment points and
            pole condition. Small tears grow quickly in wind, so fix them early. Our team can inspect and repair existing
            barriers, including ones installed by other companies.
          </p>
        ),
      },
    ],
    faqs: [
      { question: "Do you install golf netting near homes?", answer: "Yes. We build barriers that protect golfers, nearby homeowners, roads and other structures while staying as unobtrusive as possible." },
      { question: "Can you replace netting on existing poles?", answer: "Often, yes, if the poles are sound and suit the new netting. We check the poles and attachments before recommending reuse." },
      { question: "Do you build batting cages and court netting too?", answer: "Yes. We also build baseball batting cages, ballpark barrier netting and sport court containment netting." },
    ],
    sources: [
      { label: "BidNet Direct: Barrier netting at Grey Rock Golf Course driving range (public bid)", url: "https://www.bidnetdirect.com/texas/solicitations/open-bids/statewide/Barrier-netting-at-Grey-Rock-Golf-course-driving-range/906870854" },
      { label: "Sport Systems Canada: The ultimate guide to custom netting barriers", url: "https://www.sportsystemscanada.com/netting-guide/" },
    ],
    cta: { heading: "Stray balls leaving your course?", body: "Tell us about your site and we will plan a barrier that works and blends in.", label: "Request a Quote", to: "/contact/" },
  },
];

export const blogPostMap: Record<string, BlogPost> = Object.fromEntries(blogPosts.map((post) => [post.slug, post]));
