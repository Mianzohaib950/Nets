import { createBrowserRouter } from "react-router";
import Root from "../components/layout/Root";
import Home from "../pages/Home";
import Services from "../pages/Services";
import About from "../pages/About";
import Contact from "../pages/Contact";
import NotFound from "../pages/NotFound";
import Zoo from "../pages/applications/Zoo";
import Waterpark from "../pages/applications/Waterpark";
import Bridge from "../pages/applications/Bridge";
import Handrail from "../pages/applications/Handrail";
import Play from "../pages/applications/Play";
import Sport from "../pages/applications/Sport";
import Protect from "../pages/applications/Protect";
import Decorate from "../pages/applications/Decorate";
import GalleryIndex from "../pages/gallery/GalleryIndex";
import GalleryCategory from "../pages/gallery/GalleryCategory";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "services", Component: Services },
      { path: "about", Component: About },
      { path: "contact", Component: Contact },
      { path: "applications/zoo", Component: Zoo },
      { path: "applications/waterpark", Component: Waterpark },
      { path: "applications/bridge", Component: Bridge },
      { path: "applications/handrail", Component: Handrail },
      { path: "applications/play", Component: Play },
      { path: "applications/sport", Component: Sport },
      { path: "applications/protect", Component: Protect },
      { path: "applications/decorate", Component: Decorate },
      { path: "gallery", Component: GalleryIndex },
      { path: "gallery/:category", Component: GalleryCategory },
      { path: "*", Component: NotFound },
    ],
  },
]);
