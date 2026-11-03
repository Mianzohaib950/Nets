import type { ComponentType } from "react";
import type { RouteObject } from "react-router";
import Root from "../components/layout/Root";
import Home from "../pages/Home";

// Route-level `lazy` lets the router finish loading the matched page before the
// first render, so a prerendered page is replaced by identical markup instead of
// flashing a Suspense fallback.
function page(load: () => Promise<{ default: ComponentType }>) {
  return async () => ({ Component: (await load()).default });
}

export const routes: RouteObject[] = [
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "services", lazy: page(() => import("../pages/Services")) },
      { path: "about", lazy: page(() => import("../pages/About")) },
      { path: "contact", lazy: page(() => import("../pages/Contact")) },
      { path: "privacy", lazy: page(() => import("../pages/Privacy")) },
      { path: "applications/zoo", lazy: page(() => import("../pages/applications/Zoo")) },
      { path: "applications/waterpark", lazy: page(() => import("../pages/applications/Waterpark")) },
      { path: "applications/bridge", lazy: page(() => import("../pages/applications/Bridge")) },
      { path: "applications/handrail", lazy: page(() => import("../pages/applications/Handrail")) },
      { path: "applications/play", lazy: page(() => import("../pages/applications/Play")) },
      { path: "applications/sport", lazy: page(() => import("../pages/applications/Sport")) },
      { path: "applications/protect", lazy: page(() => import("../pages/applications/Protect")) },
      { path: "applications/decorate", lazy: page(() => import("../pages/applications/Decorate")) },
      { path: "gallery", lazy: page(() => import("../pages/gallery/GalleryIndex")) },
      { path: "gallery/:category", lazy: page(() => import("../pages/gallery/GalleryCategory")) },
      { path: "*", lazy: page(() => import("../pages/NotFound")) },
    ],
  },
];
