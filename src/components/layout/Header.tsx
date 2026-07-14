import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router";
import { ChevronDown, Menu, X } from "lucide-react";
import logoImg from "@/imports/qt_q_95__1_.png";

const applicationLinks = [
  { label: "We Zoo", to: "/applications/zoo" },
  { label: "We Waterpark", to: "/applications/waterpark" },
  { label: "We Bridge", to: "/applications/bridge" },
  { label: "We Handrail", to: "/applications/handrail" },
  { label: "We Play", to: "/applications/play" },
  { label: "We Golf & Sport", to: "/applications/sport" },
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
];

function DropdownMenu({ label, links }: { label: string; links: { label: string; to: string }[] }) {
  return (
    <div className="group relative">
      <button className="flex items-center gap-1 text-sm font-medium py-2 px-1 hover:text-primary transition-colors">
        {label}
        <ChevronDown size={14} className="transition-transform duration-200 group-hover:rotate-180" />
      </button>
      <div className="invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-200 absolute top-full left-0 mt-1 w-52 bg-background border border-border shadow-sm z-50 rounded-[2px]">
        {links.map((l) => (
          <Link
            key={l.to}
            to={l.to}
            className="block px-4 py-2.5 text-sm text-foreground hover:bg-secondary hover:text-primary transition-colors border-b border-border last:border-0"
          >
            {l.label}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileAppsOpen, setMobileAppsOpen] = useState(false);
  const [mobileGalOpen, setMobileGalOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setMobileAppsOpen(false);
    setMobileGalOpen(false);
  }, [location.pathname]);

  const isHero = location.pathname === "/";
  const transparent = isHero && !scrolled;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        transparent
          ? "bg-transparent border-b border-transparent"
          : "bg-background border-b border-border"
      }`}
    >
      <div className="w-full px-10 md:px-16 lg:px-20 h-14 sm:h-16 lg:h-20 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center shrink-0">
          <img
            src={logoImg}
            alt="Nets Unlimited, Inc."
            className={`h-9 sm:h-11 lg:h-14 w-auto object-contain transition-all duration-300 ${
              transparent ? "brightness-0 invert" : ""
            }`}
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-6">
          {["Home", "Services", "About"].map((item) => {
            const to = item === "Home" ? "/" : `/${item.toLowerCase()}`;
            return (
              <Link
                key={item}
                to={to}
                className={`text-sm font-medium py-2 px-1 hover:text-primary transition-colors ${
                  transparent ? "text-primary-foreground/90 hover:text-primary-foreground" : "text-foreground"
                }`}
              >
                {item}
              </Link>
            );
          })}
          <div className={transparent ? "text-primary-foreground/90" : "text-foreground"}>
            <DropdownMenu label="Applications" links={applicationLinks} />
          </div>
          <div className={transparent ? "text-primary-foreground/90" : "text-foreground"}>
            <DropdownMenu label="Galleries" links={galleryLinks} />
          </div>
          <Link
            to="/contact"
            className="ml-2 text-sm font-medium bg-primary text-primary-foreground px-5 py-2 rounded-[2px] relative overflow-hidden group"
          >
            <span className="relative">
              Contact Us
              <span className="absolute left-0 bottom-0 w-0 h-px bg-primary-foreground group-hover:w-full transition-all duration-300" />
            </span>
          </Link>
        </nav>

        {/* Mobile toggle */}
        <button
          className={`lg:hidden p-2 transition-colors ${transparent ? "text-primary-foreground" : "text-foreground"}`}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-background border-t border-border max-h-[80vh] overflow-y-auto">
          <div className="px-6 py-4 space-y-1">
            {[
              { label: "Home", to: "/" },
              { label: "Services", to: "/services" },
              { label: "About", to: "/about" },
              { label: "Contact", to: "/contact" },
            ].map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="block py-3 text-sm font-medium text-foreground border-b border-border"
              >
                {l.label}
              </Link>
            ))}

            {/* Applications accordion */}
            <div>
              <button
                onClick={() => setMobileAppsOpen(!mobileAppsOpen)}
                className="w-full flex items-center justify-between py-3 text-sm font-medium text-foreground border-b border-border"
              >
                Applications
                <ChevronDown size={14} className={`transition-transform ${mobileAppsOpen ? "rotate-180" : ""}`} />
              </button>
              {mobileAppsOpen && (
                <div className="pl-4 py-1">
                  {applicationLinks.map((l) => (
                    <Link
                      key={l.to}
                      to={l.to}
                      className="block py-2.5 text-sm text-muted-foreground hover:text-primary"
                    >
                      {l.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Galleries accordion */}
            <div>
              <button
                onClick={() => setMobileGalOpen(!mobileGalOpen)}
                className="w-full flex items-center justify-between py-3 text-sm font-medium text-foreground border-b border-border"
              >
                Galleries
                <ChevronDown size={14} className={`transition-transform ${mobileGalOpen ? "rotate-180" : ""}`} />
              </button>
              {mobileGalOpen && (
                <div className="pl-4 py-1">
                  {galleryLinks.map((l) => (
                    <Link
                      key={l.to}
                      to={l.to}
                      className="block py-2.5 text-sm text-muted-foreground hover:text-primary"
                    >
                      {l.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
