import { Link, useLocation } from "react-router";
import { ArrowRight } from "lucide-react";
import { isGonePath } from "../data/goneUrls";

const helpfulLinks = [
  { label: "Services", to: "/services/" },
  { label: "Project Gallery", to: "/gallery/" },
  { label: "About", to: "/about/" },
  { label: "Contact", to: "/contact/" },
];

// Shared by the 404 page and the 410 page for permanently removed URLs.
export default function NotFound() {
  const { pathname } = useLocation();
  const gone = isGonePath(pathname);

  return (
    // Kept compact so the footer starts within the first screen on laptops.
    <section className="relative overflow-hidden bg-secondary pt-32 pb-16 md:pb-20">
      {/* Soft brand glow, same accents as the home page CTA band */}
      <div
        aria-hidden="true"
        className="absolute w-[520px] h-[520px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(181,116,74,0.10) 0%, transparent 70%)", top: "-15%", left: "-8%" }}
      />
      <div
        aria-hidden="true"
        className="absolute w-[420px] h-[420px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(61,122,84,0.12) 0%, transparent 70%)", bottom: "-20%", right: "-6%" }}
      />

      <div className="relative w-full max-w-[720px] mx-auto px-6 text-center">
        <p className="text-xs font-medium tracking-widest uppercase text-clay mb-5">
          {gone ? "410 Page Removed" : "404 Not Found"}
        </p>
        <h1 className="font-serif text-5xl md:text-6xl font-light text-forest-900 tracking-[-0.02em] leading-[1.05] mb-6">
          {gone ? "This Page Has Moved On" : "Oops! Page Not Found"}
        </h1>
        <p className="text-foreground/70 text-lg leading-[1.7] max-w-md mx-auto mb-8">
          {gone
            ? "This page was part of our old website and has been permanently removed. Click the button below to go to the homepage."
            : "The page you are looking for doesn't exist. Click the button below to go to the homepage."}
        </p>

        <Link
          to="/"
          className="relative group inline-flex items-center gap-2 bg-clay text-primary-foreground px-8 py-3.5 rounded-[2px] text-sm font-medium"
        >
          <span className="relative">
            Back to Homepage
            <span className="absolute left-0 bottom-0 w-0 h-px bg-primary-foreground group-hover:w-full transition-all duration-300" />
          </span>
          <ArrowRight size={14} />
        </Link>

        <nav aria-label="Popular pages" className="mt-10 pt-6 border-t border-forest-900/10">
          <p className="text-sm text-foreground/60 mb-4">Or try one of these pages</p>
          <ul className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
            {helpfulLinks.map((link) => (
              <li key={link.to}>
                <Link to={link.to} className="group inline-flex items-center gap-1.5 text-sm font-medium text-forest-900 hover:text-clay transition-colors">
                  {link.label}
                  <ArrowRight size={12} className="text-clay group-hover:translate-x-0.5 transition-transform" />
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </section>
  );
}
