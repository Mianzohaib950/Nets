import { createElement, lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router";
import Root from "../components/layout/Root";

const Home = lazy(() => import("../pages/Home"));
const Services = lazy(() => import("../pages/Services"));
const About = lazy(() => import("../pages/About"));
const Contact = lazy(() => import("../pages/Contact"));
const Privacy = lazy(() => import("../pages/Privacy"));
const NotFound = lazy(() => import("../pages/NotFound"));
const Zoo = lazy(() => import("../pages/applications/Zoo"));
const Waterpark = lazy(() => import("../pages/applications/Waterpark"));
const Bridge = lazy(() => import("../pages/applications/Bridge"));
const Handrail = lazy(() => import("../pages/applications/Handrail"));
const Play = lazy(() => import("../pages/applications/Play"));
const Sport = lazy(() => import("../pages/applications/Sport"));
const Protect = lazy(() => import("../pages/applications/Protect"));
const Decorate = lazy(() => import("../pages/applications/Decorate"));
const GalleryIndex = lazy(() => import("../pages/gallery/GalleryIndex"));
const GalleryCategory = lazy(() => import("../pages/gallery/GalleryCategory"));

function deferred(Component: React.LazyExoticComponent<React.ComponentType>) {
  return createElement(Suspense, { fallback: null }, createElement(Component));
}

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, element: deferred(Home) },
      { path: "services", element: deferred(Services) },
      { path: "about", element: deferred(About) },
      { path: "contact", element: deferred(Contact) },
      { path: "privacy", element: deferred(Privacy) },
      { path: "applications/zoo", element: deferred(Zoo) },
      { path: "applications/waterpark", element: deferred(Waterpark) },
      { path: "applications/bridge", element: deferred(Bridge) },
      { path: "applications/handrail", element: deferred(Handrail) },
      { path: "applications/play", element: deferred(Play) },
      { path: "applications/sport", element: deferred(Sport) },
      { path: "applications/protect", element: deferred(Protect) },
      { path: "applications/decorate", element: deferred(Decorate) },
      { path: "gallery", element: deferred(GalleryIndex) },
      { path: "gallery/:category", element: deferred(GalleryCategory) },
      { path: "*", element: deferred(NotFound) },
    ],
  },
]);
