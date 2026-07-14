ROLE
You are a senior full-stack engineer and product designer building a
production-grade marketing website. Ship working code, not a mockup.
Every page must run, every link must resolve, every form must validate
and submit.

PROJECT
Nets Unlimited, Inc. — custom rope and netting fabrication company,
Phoenix, Arizona. Founded January 2004. Licensed, bonded, insured
contractor (AZ ROC #236070). This is a REDESIGN of an existing site —
same business, same pages, same content below. Only the execution
quality changes. Do not invent a different business, do not remove
pages, do not skip pages, do not add filler copy — every section below
has real content, use it as-is with light readability edits only.

COMPANY FACTS (use in header/footer/contact — do not invent alternates)
- Address: 20625 North 29th Place, Phoenix, Arizona 85050, United States
- Phone: (480) 515-1300
- Email: info@netsunlimited.com
- Hours: Mon–Fri 7:00 AM – 4:00 PM, closed Sat/Sun
- Tagline: "Imagine the Alter'NET'ives"
- Social: Facebook, Instagram (@netsunlimitedinc), LinkedIn, Pinterest,
  Twitter (@nets_unlimited), Houzz, Yelp

────────────────────────────────────
STACK — do not substitute
────────────────────────────────────
- Next.js 14, App Router, TypeScript (strict mode)
- Tailwind CSS with custom config (tokens below), no inline hex values
  in components — everything references the Tailwind theme
- Framer Motion for all animation
- React Hook Form + Zod for the contact form, client + server validation
- Resend (or nodemailer if no API key available) for /api/contact
- next/image for all imagery, no raw <img> tags
- Deploy target: Replit's built-in web server, port 3000, dev script
  wired in package.json so "Run" works immediately

FILE STRUCTURE (create exactly this, then fill it)
/app
  /page.tsx                     → Home
  /applications
    /page.tsx                   → Applications index
    /zoo/page.tsx
    /waterpark/page.tsx
    /bridge/page.tsx
    /handrail/page.tsx
    /play/page.tsx
    /sport/page.tsx
    /protect/page.tsx
    /decorate/page.tsx
  /services/page.tsx
  /about/page.tsx
  /contact/page.tsx
  /gallery
    /page.tsx                   → Gallery index
    /[category]/page.tsx        → dynamic gallery per category
  /api/contact/route.ts
/components
  /layout (Header, Footer, MobileNav)
  /ui (Button, Card, Input, Select, Accordion, Modal, Toast, Badge,
       StatBlock, Pagination)
  /sections (Hero, AlternatingRow, CTASection, TestimonialBlock,
       GalleryGrid, FilterBar)
/lib (validation schemas, constants, types)
/public/images (organized by category, descriptive filenames, e.g.
       /images/zoo/enclosure-netting-01.jpg)

────────────────────────────────────
DESIGN TOKENS — exact, wire into tailwind.config.ts
────────────────────────────────────
colors:
  forest-900: #0F2A1D   (headers, dark sections)
  forest-700: #1F4A32   (primary CTA, links)
  forest-500: #3D7A54   (hover states)
  warm-white: #FAF8F3   (default page background)
  stone-100:  #F0EDE4   (alternate section background)
  charcoal:   #1A1A18   (body text)
  clay:       #B5744A   (single accent — badges/small highlights only)

typography:
  display: "Fraunces", serif — H1/H2 only, 64-96px desktop / 36-44px
    mobile, tracking -0.02em, allowed to wrap 2-3 lines
  body: "Inter", sans — 16px base, 1.6 line-height, weights 400/500 only

spacing: 8pt grid. Section padding 120px desktop / 64px tablet / 48px
  mobile. Max content width 1280px. Alternate warm-white/stone-100
  between adjacent sections, never repeat.

components:
  buttons: 2px radius (not pill), solid forest-700 primary, underline-
    slide hover animation, not a color swap
  cards: 4px radius max, 1px border rgba(0,0,0,0.08), no drop shadow,
    image scale(1.03) on hover over 600ms ease
  motion: fade + 24px translateY on scroll-into-view at 20% visibility,
    0.6s ease-out, 80ms stagger on children. cubic-bezier(0.16,1,0.3,1)
    everywhere else. No bounce, no elastic.

────────────────────────────────────
LAYOUT RULES (breaks the generic-template look — follow exactly)
────────────────────────────────────
- Hero sections: asymmetric 55/45 split, never centered-text-over-photo.
  Text block one side, full-bleed image/video other side.
- Services/features: alternating image-left / image-right full-width
  rows, not 3-column icon-card grids.
- Sticky header: transparent over hero, becomes warm-white with 1px
  bottom border after 80px scroll.
- Gallery modal: custom lightbox, dark scrim rgba(15,42,29,0.92), not a
  default library skin.

────────────────────────────────────
GLOBAL NAVIGATION (wire every link, every page)
────────────────────────────────────
Home | Applications ▾ (We Zoo, We Waterpark, We Bridge, We Handrail,
We Play, We Sport, We Protect, We Decorate) | Services | About & Contact
| Galleries ▾ (Zoos, Waterparks, Bridges, Handrails, Play Elements,
Golf and Sport, Protection Netting)

════════════════════════════════════
PAGE 1 — HOME (/app/page.tsx)
════════════════════════════════════
HERO
Headline: "Imagine the Alter'NET'ives"
Full-bleed hero image of an installed net (zoo/aquatic exhibit context).

SECTION — Who We Are
Heading: "Who we are"
Subheading: "Welcome"
Body: "Since our beginning in 2004, Nets Unlimited has endeavored to
become the world's leading provider of the highest quality rope and
netting products. We invite you to explore our site to discover how
Nets Unlimited, Inc. serves a wide range of industries by combining
expert craftsmanship and customized service to deliver outstanding
functional solutions that never sacrifice beauty, efficiency, or
quality. There's much to see here. So, take your time, look around,
and learn all there is to know about us. We hope you enjoy our site
and take a moment to drop us a line. Let us help you Imagine the
Alter'NET'ives."

SECTION — What We Do
Heading: "What we do"
Build as an alternating image/text row list, one row per application,
each linking to its Application page:
  1. Zoos/Aquariums → /applications/zoo — "Animal Exhibits" /
     "Animal Enrichment"
  2. Waterparks & Themeparks → /applications/waterpark
  3. Children's Play → /applications/play
  4. Synthetic Handrails / Stainless Steel Handrails →
     /applications/handrail
  5. Secondary Protection → /applications/protect
  6. Bridges & Tunnels → /applications/bridge
  7. Rope / Cable & Hardware — supporting material callout
  8. Theming & Decor → /applications/decorate

FOOTER
Company name, tagline "Imagine the Alter'NET'ives", address, phone,
email, hours, social links (Facebook, Instagram, LinkedIn, Pinterest,
Twitter, Houzz, Yelp), sitemap columns (Applications, Services,
Galleries, About & Contact), copyright line "© [current year] Nets
Unlimited, Inc. All Rights Reserved."

════════════════════════════════════
PAGE 2 — SERVICES (/app/services/page.tsx)
════════════════════════════════════
Heading: "Services"
Build as 4 alternating full-width image/text rows, in this order:

1. Planning & Consultation
"Nets Unlimited, Inc. knows that comprehensive consulting is the key
to any successful project. During the design phase, changing
directions while the plan is still just lines on paper can make a
huge difference in the overall reach of your budget. Pre-construction
consulting with a netting expert will save you from time delays and
costly change orders during building. Also, if you are thinking about
re-purposing what you already have, talking with an expert on the
possible limitations of your vision should be a top priority. So,
whether you need support in the conceptualization phase, or already
have drawings but have hit a snag, or just want to make that old
exhibit new again, our design team is here to help you through all
phases of your project."

2. Inspections & Maintenance
"We offer inspection and quality control services for existing net
structures. A competent and thorough inspection is one of the most
important elements in achieving the longevity of your nets and
structures. Proper inspections require not only technical expertise
and knowledge of the materials and procedures but also sound
judgment. Our team comes with over 75 combined years of experience.
With our onsite inspections, we are able to verify that your
structure was built using industry standards, that the net is intact
and not showing signs of wear, and provide a written report to be
submitted to your insurance company. If any netting requires repairs
we can repair it, during the inspection or through one of our
maintenance plans."

3. Fabrication
"Fabrication is the cornerstone of Nets Unlimited's business. Our
crew of highly skilled craftsmen fabricates everything from simple
rope lanyards to handrail nets, to full-scale animal exhibits.
Whether you need a net made from twine, rope, or stainless steel
cable, rest assured Nets Unlimited will produce the highest quality
products in the industry. We make rope nets out of any material the
customer requires, but we pride ourselves on nets made from our
signature NU-Line rope. Additionally, all of the hand-woven stainless
steel nets are made to order, in whatever custom size works for your
project."

4. Installation
"Since our inception Nets Unlimited has set the benchmark for quality
netting and rope installations. Our team of professional installers
are licensed, bonded, and insured. Supervisors are OSHA 30 trained
and all installers are OSHA 10 certified at a minimum. In addition to
safety conscientiousness, we aim to deliver the best customer service,
regardless of how simple or complicated a project may be. Our
experience ensures a professional installation with unparalleled
workmanship which will keep your project looking beautiful for years
to come. Having Nets Unlimited perform your installations means you
know that things were done right and to the highest standards in the
industry — ours."

End with a CTA section linking to /contact.

════════════════════════════════════
PAGE 3 — ABOUT & CONTACT (/app/about/page.tsx and /app/contact/page.tsx
— split the original combined page into two clean pages, cross-link them)
════════════════════════════════════

ABOUT PAGE
Heading: "About Us"

Subsection: "Net Experts"
"NETS Unlimited, Inc. opened its doors for business in January 2004,
providing rope and netting products to a multitude of different
industries and for a variety of applications. Our mission was to
become the industry leader by consistently providing superior
products and services that exceed our clients' expectations. Through
our unwavering commitment to combine quality, excellence, value,
integrity, and global awareness we hope that we can help you with
your rope and netting needs, while also fostering a sense of
conservation and community connection."

Subsection: "Our Approach"
"Our services include comprehensive consulting to help identify the
specific needs of our clients, as we know that each situation calls
for unique and custom-tailored solutions. Our individual
professionally developed plans are grounded in our ideals that
quality craftsmanship and customized service are the best way to
bring your ideas and dreams to life."

Subsection: "Industry Wide Success"
"We work with a large number of clients from various industries,
including:"
- Zoos/Aquariums
- Waterparks/Themeparks
- FEC's/Restaurants/Resorts
- Golf Courses/HOA's
- Governments — International, Federal, State, and local
- Residential Home Owners/Builders
Closing line: "Our net experts are ready to assist you in
implementing solutions that support your project's success from
inception to completion. All you have to do is Imagine the
Alter'NET'ives."

CONTACT PAGE
Heading: "Contact Us"
Company block: "Nets Unlimited, Inc." / "Our Office:" 20625 North 29th
Place, Phoenix, Arizona 85050, United States / (480) 515-1300 /
info@netsunlimited.com
Hours block: "Open today: 07:00 AM – 04:00 PM" (full week table,
Mon–Fri 7–4, Sat–Sun Closed)
Embedded Google Map centered on the address above.
"Get directions" button linking to Google Maps.

Contact form — fields: Name, Company, Email (required), Phone,
Subject (select: General Inquiry, Request a Quote, Inspection/
Maintenance, Fabrication, Installation, Other), Message. Submit
button labeled "Send." Zod validation, inline field errors, disabled
submit while pending, success toast ("Thanks — we'll be in touch
shortly.") and error toast on failure. Real POST to /api/contact.
Include reCAPTCHA note per Google Privacy Policy / Terms of Service
below the form, matching the existing site's disclosure.

════════════════════════════════════
PAGE 4-11 — APPLICATIONS (8 pages, /app/applications/[slug]/page.tsx)
════════════════════════════════════
Each page: asymmetric hero (headline + intro paragraph left, full-
bleed image right), followed by 2-4 alternating image/text
subsections, then a CTA linking to the matching gallery page, then
"Related Applications" (3 other application cards), then footer.

--- 4. WE ZOO (/applications/zoo) ---
Intro: "Nets Unlimited has worked with zoos across the country to
help bring to life new exhibits, refurbish or re-purposing older
exhibits, refacing exhibits, or even just creating enrichment for
your animals' mental health. No matter what stage you are in we are
here to help."

Subsection — New Construction:
"Zoos, aquariums, and nature centers are entering a new era of the
visitor experience, working to create far more immersive, memorable,
and engaging animal exhibits that help promote an important
conservation message. Nets Unlimited, Inc. has extensive experience
in creating beautiful exhibits that are visually unobtrusive while
providing a safe and secure experience for the animals that inhabit
them. Whether you have fully executed drawings, or just an idea, we
are here to help make your plans become reality."

Subsection — Refurbishment:
"There has been a metamorphosis in recent years for zoos, as they
strive to go from animal exhibitors to natural habitat and
conservation sanctuaries. As this change has taken place the visitor
experience has also exponentially grown, increasing membership,
single visit guests, and time on site. However, at times, there is
not the budget, or the room, for a complete new build. That's where
Nets Unlimited comes in. We are able to help you in redesigning your
older exhibits to better align with your conservation and habitat
goals. All you have to do is Imagine the Alter-NET-ives."

Subsection — Animal Enrichment:
"Animal enrichment is an incredibly important aspect of any zoo. In
an effort to make sure the animals are as well cared for as possible,
enrichment helps to increase their options to utilize their natural
behaviors and instincts. Increasing the animal's ability to explore,
play, and employ their natural instincts, helps to lower anxiety and
abnormal behavior, while increasing overall contentment. Physical
activity and the overall survival rate of the animals often improves
with different enrichment techniques. Whether you are looking to
create chutes, training windows, or animal play elements, Nets
Unlimited can help you to find the best solution for your zoo."

CTA: "See our Zoo Gallery" → /gallery/zoos

--- 5. WE WATERPARK (/applications/waterpark) ---
Intro: "Nets Unlimited has worked with waterparks and theme parks
across the country to help with new construction, refurbish existing
attractions, secure elements and guest areas, or even creating
additional dry play areas to increase guest time on site and overall
visitor satisfaction. Whether you need barriers, queue lines,
handrails, division of age areas, slide covers, wave pool barriers,
or new dry play attractions, we are here to help."

Subsection — New Construction:
"Water and theme parks have seen explosive growth over the past 10
years, but as a result, are facing more competition than ever. In an
effort to increase guest engagement, frequency of visits, and an
increase in season passes, parks are now building more engaging guest
experiences that have children begging their parents for return
visits. Nets Unlimited, Inc. has extensive experience in creating
safe and secure experiences for your families. Whether you have fully
executed drawings or just an idea, we are here to help."

Subsection — Redesign & Redecorate:
"With new waterparks opening all the time, and theme parks now adding
waterpark attractions, there is not always the budget or space for
something completely new, but perhaps there is room for something
newly refreshed. Over time existing nets and ropes require
maintenance and replacing. Nets Unlimited is able to help you in
redesigning your existing guest areas, older attractions, and play
elements to create a more modern and engaging guest experience. We
can also replace that old rope and net with our signature NU-Line
rope giving you years longer service life than traditional manila or
other synthetic options."

Subsection — Dry Play:
"Nets Unlimited, Inc. creates and builds many types of interactive
children's play and obstacle course elements. Children's play
elements are essential to additional time-on-site and guest
satisfaction. With efforts to increase guest engagement in dry
children's play areas, Nets Unlimited can help you to build dry play
elements that appeal to children of all ages. These elements allow
for a break from water play, perhaps while some of the family enjoy a
bite to eat or rest in the shade. This option allows the kids to keep
on playing, giving the adults a much needed break from water time
fun."

CTA: "Waterpark Gallery" → /gallery/waterparks

--- 6. WE BRIDGE (/applications/bridge) ---
Intro: "Nets Unlimited has built hundreds of bridges over the years.
We have worked with zoos, theme parks, golf courses, children's
museums, and many other types of businesses to help create beautiful,
fun, playful, and functional bridges."

Subsection — Stationary/Solid Surface Bridges:
"Stationary/Solid surface bridges are bridges that do not move.
Generally, the walking surface is flat or stationary. Sometimes these
can even be just simple walking paths that are dressed up to look
like a bridge for aesthetic purposes."

Subsection — Suspension/Moving Bridges:
"A suspension bridge is where the deck/walking surface of the bridge
is hung below suspension cables on vertical suspenders. A moving
bridge often looks like a suspension bridge, where the walking path
moves or clatters, but is not truly supported only by suspension
cables. Either option provides high impact and loads of fun."

Subsection — One-Way/V Bridge:
"One-Way and V Bridges are generally made rope/netting over a cable
framework. Sometimes they will have a wood walking surface as well.
These bridges are usually one-directional as they are not wide enough
for two-way traffic."

CTA: "See our Bridges Gallery" → /gallery/bridges

--- 7. WE HANDRAIL (/applications/handrail) ---
Intro: "One of the most common netting applications Nets Unlimited
supplies is handrail nets. Handrails are an OSHA requirement for any
drop of more than 8 inches, and also necessary to help keep people on
the right path and off the landscaping or other areas not meant for
guests. We are here to help you build beautiful and decorative
handrails that offer an aesthetic component to a critical safety
feature."

Subsection — Hand Woven Stainless Steel Netting:
"Stainless steel handrail nets offer an architectural element to help
create the illusion of open space, while simultaneously being one of
the most enduring netting products on the market. Their longevity is
unrivaled by synthetic products; often lasting 15 years or more both
indoors and out. Stainless steel nets also have the advantage of
being vandal and pest resistant. These nets are handwoven to custom
fit any design application required."

Subsection — Machine Knotted Netting/Themed Handrails:
"Machine knotted netting is a perfect solution for long runs of
handrails. These options help to carry or continue the aesthetic of
areas in a jungle, tropical, or nautical theme past where handwoven
rope handrails are employed for high visual impact. The machine
knotted netting is a more budget-friendly choice than a hand-woven
net."

Subsection — Handwoven Rope Handrails:
"When an individualized high-impact design is needed for a project
such as a gateway, restaurant, lobby, or guest entrance area,
handwoven rope handrails are an excellent choice. These handrails are
custom made to order in any configuration required, and ultimately
lead to a beautiful and memorable design element for your property."

Subsection — Cable and Rope Rails:
"Whether you need to provide a gentle reminder to guests about where
they should not be, or you just need to organize a line of patrons,
simple rope and cable can provide another excellent option for
handrails, queue line management, and kick rails."

CTA: "See our Handrail Gallery" → /gallery/handrails

--- 8. WE PLAY (/applications/play) ---
Intro: "Nets Unlimited, Inc. creates and builds many types of
interactive children's play and obstacle course elements. Children's
play elements are critical to youth development. Through play,
children learn and develop lifelong skills that support growth and
development far past childhood. The basis of interactive play
supports physical, emotional, social, cognitive, creative, and
communication skill-building; all while increasing both guest
satisfaction and the duration guests stay on-site."

Subsection — Tunnels:
"Tunnels provide children the opportunity to crawl and scoot, this in
turn develops the gross motor skills and increases coordination of
arms and legs. Children's play tunnels can be their own obstacle
element, a bridge between elements, or even multiple tunnels together
to create obstacle courses."

Subsection — Climbs:
"Children's climbs add an interactive element for your guests to
enjoy for many reasons. Climbing increases muscle tone and strength,
sharpens visual perception, promotes motor skills, balance, and also
helps children gain agility, flexibility, and coordination.
Additionally, having a variety of interactive options within a zoo,
park, water park, or family fun center improves guest perception of
their overall value for the price of admission."

Subsection — Spiderweb Nets:
"Spiderweb nets offer all of the sensory and cognitive development
benefits of our climbs and tunnels and they provide a great learning
opportunity about the world around us as well. However, they're also
a great addition when space is limited to a single play element."

CTA: "See Our Interactive Play Gallery" → /gallery/play-elements

--- 9. WE SPORT (/applications/sport) ---
Heading: "We Golf & Sport"
Intro: "Nets Unlimited, Inc. has built a variety of driving ranges and
sport court containment systems. We provide a wide array of options
to meet the challenge of creating aesthetically pleasing solutions
that also protect against property damage and/or injury from stray
balls. For our sport court elements, the primary focus is on
maintenance-free containment."

Subsection — Golf:
"We understand the importance of maintaining a beautiful course and
driving range, while also protecting the golfers, nearby homeowners,
roads, and other structures. Nets Unlimited will work with you to
build protection solutions that are unobtrusive and effective while
making sure that these barriers do not take away from the overall
aesthetics of the course."

Subsection — Baseball Netting:
"Whether you need a single batting cage for an indoor experience or
multiple cages for an entertainment center we can help you build what
you need or replace existing damaged or worn out nets. Nets Unlimited
also provides barrier netting for ballparks and park departments
around sport complexes."

Subsection — Sport Court Containment/Barrier Netting:
"Do you have a sports court that needs barriers so the balls stay in
the court? Nets Unlimited can customize containment netting to keep
those balls in play and provide years of service with little to no
maintenance."

CTA: "Golf and Sport Netting Gallery" → /gallery/golf-and-sport

--- 10. WE PROTECT (/applications/protect) ---
Heading: "We Mitigate Risk"
Intro: "There are a multitude of applications that safety netting can
be utilized for including construction, animal containment, people
barriers, safety netting for entertainment and sporting venues, and
much more. Keeping your guests and workers safe while protecting them
from harm is not only the primary function of a safety netting
system. These customized safety systems can lower insurance costs,
positively impact public image, deliver improved safety ratings, and
create better worker morale."

Subsection — Fall & Debris Protection:
"Fall Protection safety netting systems offer passive protection from
people or debris falling, without requiring anyone's active
involvement. Our safety netting provides strength, impact resistance,
durability, and confidence. These safety systems can be designed to
catch people, debris or both, and are available for indoor or outdoor
use. Our netting systems are custom made to meet your specific
requirements."

Subsection — Secondary Barrier:
"Often times in public areas there is an existing barrier, it may be
a queue line, a handrail, possibly a Plexiglass barrier, or something
similar. However, in today's world that is not always enough.
Secondary barriers allow for an additional layer of protection beyond
the handrail, to ensure that the public can enjoy your zoo, theme
park, or building while mitigating the potential risk created by
someone who deliberately or inadvertently circumvents the primary
barrier."

Subsection — Blast Force Containment:
"Blast force injuries are traumas that can occur from direct or
indirect exposure to an explosion. Nets Unlimited's blast force
protection netting is GSA approved to help absorb the blast force in
an effort to reduce human traumas suffered as a result of explosions.
This includes solutions for potential high-threat settings including
materials storage facilities, production facilities, testing labs,
material and equipment service centers, and other potential blast
sites."

Subsection — Jump Prevention Nets:
"Research shows that jump prevention nets can act as an effective
deterrent. If your building or bridge can benefit from a prevention
net, we are available to go through the specifications and best
options for your situation."
(Note: keep this section brief and factual, matching tone of the rest
of the page — no dramatization.)

CTA: "Safety Netting Gallery" → /gallery/protection-netting

--- 11. WE DECORATE (/applications/decorate) ---
Intro: "Rope and netting can be an excellent design element to many
applications. Stainless Steel and coil mesh products lend a more
modern aesthetic, where rope can add an air of jungle, desert, or
nautical theme to any space. Look through some of our work to
envision your space."
This page is gallery-forward — lead with a large image grid (16
images minimum) since the source page is primarily visual with
minimal body copy. Add a short intro paragraph above the grid using
the text above.

════════════════════════════════════
PAGE 12 — GALLERY INDEX + 7 CATEGORY PAGES
════════════════════════════════════
Categories, each its own /app/gallery/[category]/page.tsx:
  zoos, waterparks, bridges, handrails, play-elements, golf-and-sport,
  protection-netting

Each category page: masonry grid, functional category filter bar
(client-side), pagination or load-more (implement fully), click-image
modal with next/prev + keyboard arrow navigation, loading/empty states
built. Since NO actual image assets are provided, use next/image with
descriptive placeholder paths per the /public/images structure above
(e.g. /images/zoos/exhibit-01.jpg) so the page is ready to receive real
photography without further refactor — do not use lorem-picsum or
external stock placeholders, structure it so real files can just be
dropped in.

════════════════════════════════════
BUILD ORDER
════════════════════════════════════
1. Scaffold file structure + design tokens, confirm dev server runs
   with a styled blank shell (header/footer/font/colors visible).
2. Build Home.
3. Build Services, About, Contact (with working form endpoint).
4. Build all 8 Applications pages using the content above.
5. Build Gallery index + all 7 category pages.
6. Final pass: responsive QA at 375/768/1024/1440, broken-link check,
   accessibility check, Lighthouse check.

Build it now, starting with the scaffold.