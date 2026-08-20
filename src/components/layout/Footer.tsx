import { Link } from "react-router";
import {
  Asterisk,
  ArrowUpRight,
  CircleParking,
  Clock,
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  PanelsTopLeft,
  Phone,
  Twitter,
} from "lucide-react";
import logoImg from "@/imports/nets-unlimited-logo-160.webp";

const appLinks = [
  { label: "We Zoo", to: "/applications/zoo" },
  { label: "We Waterpark", to: "/applications/waterpark" },
  { label: "We Bridge", to: "/applications/bridge" },
  { label: "We Handrail", to: "/applications/handrail" },
  { label: "We Play", to: "/applications/play" },
  { label: "We Sport", to: "/applications/sport" },
  { label: "We Protect", to: "/applications/protect" },
  { label: "We Decorate", to: "/applications/decorate" },
];

const galleryLinks = [
  { label: "Zoos", to: "/gallery/zoos" },
  { label: "Waterparks", to: "/gallery/waterparks" },
  { label: "Bridges", to: "/gallery/bridges" },
  { label: "Handrails", to: "/gallery/handrails" },
  { label: "Play Elements", to: "/gallery/play-elements" },
  { label: "Golf & Sport", to: "/gallery/golf-and-sport" },
  { label: "Protection Netting", to: "/gallery/protection-netting" },
  { label: "Decorative Elements", to: "/gallery/we-decorate" },
];

const socialLinks = [
  { icon: Facebook, href: "https://www.facebook.com/NetsUnlimited/", label: "Facebook" },
  { icon: PanelsTopLeft, href: "https://www.houzz.com/pro/webuser-536029029/__public", label: "Houzz" },
  { icon: Instagram, href: "https://www.instagram.com/netsunlimitedinc/", label: "Instagram" },
  { icon: Linkedin, href: "https://www.linkedin.com/company/nets-unlimited-inc", label: "LinkedIn" },
  { icon: CircleParking, href: "https://www.pinterest.com/NetsUnlimitedInc/", label: "Pinterest" },
  { icon: Twitter, href: "https://x.com/nets_unlimited", label: "X / Twitter" },
  { icon: Asterisk, href: "https://www.yelp.com/biz/nets-unlimited-phoenix-2", label: "Yelp" },
];

export default function Footer() {
  return (
    <footer className="bg-forest-900 text-primary-foreground">
      <div className="max-w-[1280px] mx-auto px-6 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-10">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <Link to="/" className="block mb-4">
              <img
                src={logoImg}
                alt="Nets Unlimited, Inc."
                width="256"
                height="108"
                loading="lazy"
                decoding="async"
                className="h-20 w-auto object-contain brightness-0 invert"
              />
            </Link>
            <p className="text-sm text-primary-foreground/60 italic mb-6 font-serif">
              "Imagine the Alter'NET'ives"
            </p>
            <div className="space-y-3 text-sm text-primary-foreground/70">
              <div className="flex gap-3">
                <MapPin size={14} className="mt-0.5 shrink-0 text-clay" />
                <span>20625 North 29th Place<br />Phoenix, Arizona 85050</span>
              </div>
              <div className="flex gap-3 items-center">
                <Phone size={14} className="shrink-0 text-clay" />
                <a href="tel:4805151300" className="hover:text-primary-foreground transition-colors">
                  (480) 515-1300
                </a>
              </div>
              <div className="flex gap-3 items-center">
                <Mail size={14} className="shrink-0 text-clay" />
                <a href="mailto:info@netsunlimited.com" className="hover:text-primary-foreground transition-colors">
                  info@netsunlimited.com
                </a>
              </div>
              <div className="flex gap-3 items-start">
                <Clock size={14} className="mt-0.5 shrink-0 text-clay" />
                <span>Mon–Fri 7:00 AM – 4:00 PM<br />Closed Sat &amp; Sun</span>
              </div>
            </div>
          </div>

          {/* Applications */}
          <div>
            <h4 className="text-xs font-medium tracking-widest uppercase text-clay mb-5">Applications</h4>
            <ul className="space-y-2">
              {appLinks.map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    className="text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Galleries */}
          <div>
            <h4 className="text-xs font-medium tracking-widest uppercase text-clay mb-5">Galleries</h4>
            <ul className="space-y-2">
              {galleryLinks.map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    className="text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs font-medium tracking-widest uppercase text-clay mb-5">Company</h4>
            <ul className="space-y-2">
              {[
                { label: "Services", to: "/services" },
                { label: "About Us", to: "/about" },
                { label: "Contact", to: "/contact" },
                { label: "Gallery Index", to: "/gallery" },
              ].map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    className="text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-8 pt-8 border-t border-primary-foreground/10">
              <p className="text-xs text-primary-foreground/40">
                AZ ROC #236070<br />
                Licensed · Bonded · Insured
              </p>
            </div>
          </div>
        </div>

        <div className="mb-16 grid grid-cols-1 items-end gap-8 lg:grid-cols-4">
          <div>
            <p className="mb-3 text-xs font-medium uppercase tracking-widest text-clay">Follow Us</p>
            <div className="flex flex-nowrap items-center gap-4">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={`Follow Nets Unlimited on ${label}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={label}
                  className="group inline-flex items-center justify-center text-primary-foreground/60 transition-colors hover:text-primary-foreground"
                >
                  <Icon size={18} strokeWidth={1.8} className="shrink-0 text-clay/90 group-hover:text-clay" />
                </a>
              ))}
            </div>
          </div>
          <div className="lg:col-start-4">
            <a
              href="https://golfnetsunlimited.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-[2px] border border-clay bg-clay px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-clay/90"
            >
              Visit Golf Nets Unlimited
              <ArrowUpRight size={15} />
            </a>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-primary-foreground/40">
            © {new Date().getFullYear()} Nets Unlimited, Inc. All Rights Reserved.
          </p>
          <Link to="/privacy/" className="text-xs text-primary-foreground/50 hover:text-primary-foreground underline underline-offset-2">
            Privacy Policy
          </Link>
          <p className="text-xs text-primary-foreground/40">
           Developed by{" "}
            <a href="https://novatoresols.com/" target="_blank" rel="noopener noreferrer" className="hover:text-primary-foreground/70 transition-colors underline underline-offset-2">
              Novatore Solutions
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
