import { Link, useLocation } from "react-router";
import { pageSeo } from "./SEO";

const labels: Record<string, string> = {
  services: "Services", about: "About", contact: "Contact", privacy: "Privacy Policy", gallery: "Galleries",
  zoo: "Zoo & Aquarium Netting", waterpark: "Waterpark Netting", bridge: "Rope Bridges",
  handrail: "Handrail Systems", play: "Rope Play", sport: "Sports Netting",
  protect: "Protection Netting", decorate: "Architectural Decor", zoos: "Zoos & Aquariums",
  waterparks: "Waterparks", bridges: "Bridges & Tunnels", handrails: "Handrails",
  "play-elements": "Play Elements", "golf-and-sport": "Golf & Sports",
  "protection-netting": "Protection Netting",
  "we-decorate": "We Decorate",
  "netting-design-consultation": "Netting Design & Consultation",
  "custom-net-fabrication": "Custom Net & Rope Fabrication",
  "netting-installation": "Netting Installation",
  "net-inspection-maintenance": "Net Inspection & Maintenance",
};

export function Breadcrumbs() {
  const { pathname } = useLocation();
  const segments = pathname.split("/").filter(Boolean);
  // No trail on the home page or on 404/410 pages.
  if (!segments.length || pageSeo(pathname).noindex) return null;

  const crumbs = [{ label: "Home", to: "/" }];
  if (segments[0] === "applications" || (segments[0] === "services" && segments.length > 1)) crumbs.push({ label: "Services", to: "/services/" });
  else if (segments[0] === "gallery" && segments.length > 1) crumbs.push({ label: "Project Gallery", to: "/gallery/" });
  const leaf = segments.at(-1)!;
  crumbs.push({ label: labels[leaf] ?? leaf.replaceAll("-", " "), to: pathname });

  return (
    <nav aria-label="Breadcrumb" className="border-b border-forest-900/10 bg-white px-6 py-3 text-sm text-forest-700">
      <ol className="mx-auto flex max-w-7xl flex-wrap items-center gap-2">
        {crumbs.map((crumb, index) => (
          <li key={`${crumb.to}-${index}`} className="flex items-center gap-2">
            {index > 0 && <span aria-hidden="true">/</span>}
            {index === crumbs.length - 1 ? <span aria-current="page">{crumb.label}</span> : <Link className="hover:underline" to={crumb.to}>{crumb.label}</Link>}
          </li>
        ))}
      </ol>
    </nav>
  );
}
