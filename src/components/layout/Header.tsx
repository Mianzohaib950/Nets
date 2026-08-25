import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router";
import { ChevronDown, Menu, X } from "lucide-react";
import logoImg from "@/imports/nets-unlimited-logo-160.webp";

const applicationLinks = [
  { label: "We Zoo", to: "/applications/zoo/" },
  { label: "We Waterpark", to: "/applications/waterpark/" },
  { label: "We Bridge", to: "/applications/bridge/" },
  { label: "We Handrail", to: "/applications/handrail/" },
  { label: "We Play", to: "/applications/play/" },
  { label: "We Golf & Sport", to: "/applications/sport/" },
  { label: "We Protect", to: "/applications/protect/" },
  { label: "We Decorate", to: "/applications/decorate/" },
];

const galleryLinks = [
  { label: "Zoos", to: "/gallery/zoos/" },
  { label: "Waterparks", to: "/gallery/waterparks/" },
  { label: "Bridges", to: "/gallery/bridges/" },
  { label: "Handrails", to: "/gallery/handrails/" },
  { label: "Play Elements", to: "/gallery/play-elements/" },
  { label: "Golf & Sport", to: "/gallery/golf-and-sport/" },
  { label: "Protection Netting", to: "/gallery/protection-netting/" },
  { label: "Decorative Elements", to: "/gallery/we-decorate/" },
];

function DropdownMenu({ label, links }: { label: string; links: { label: string; to: string }[] }) {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setOpen(false);
  }, [location.pathname, location.search]);

  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      onFocusCapture={() => setOpen(true)}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget as Node | null)) setOpen(false);
      }}
    >
      <button
        type="button"
        aria-haspopup="true"
        aria-expanded={open}
        onClick={() => setOpen((current) => !current)}
        className="flex min-h-12 items-center gap-1 text-sm font-medium py-2 px-1 hover:text-primary transition-colors"
      >
        {label}
        <ChevronDown size={14} className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`} />
      </button>
      <div
        className={`${open ? "visible opacity-100" : "invisible opacity-0"} transition-all duration-200 absolute top-full left-0 mt-1 w-52 bg-background border border-border shadow-sm z-50 rounded-[2px]`}
      >
        {links.map((l) => (
          <Link
            key={l.to}
            to={l.to}
            onClick={() => setOpen(false)}
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

  const closeMobileNavigation = () => {
    setMobileOpen(false);
    setMobileAppsOpen(false);
    setMobileGalOpen(false);
  };

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
            width="160"
            height="68"
            decoding="async"
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
            to="/contact/"
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
          className={`lg:hidden min-h-12 min-w-12 p-2 transition-colors ${transparent ? "text-primary-foreground" : "text-foreground"}`}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
          aria-controls="mobile-navigation"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div id="mobile-navigation" className="lg:hidden bg-background border-t border-border max-h-[80vh] overflow-y-auto">
          <div className="px-6 py-4 space-y-1">
            {[
              { label: "Home", to: "/" },
              { label: "Services", to: "/services/" },
              { label: "About", to: "/about/" },
              { label: "Contact", to: "/contact/" },
            ].map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={closeMobileNavigation}
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
                aria-expanded={mobileAppsOpen}
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
                      onClick={closeMobileNavigation}
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
                aria-expanded={mobileGalOpen}
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
                      onClick={closeMobileNavigation}
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
