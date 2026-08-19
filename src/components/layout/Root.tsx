import { useLocation, Outlet, ScrollRestoration } from "react-router";
import Header from "./Header";
import Footer from "./Footer";
import { ScrollProgress } from "../shared/ScrollProgress";
import { SEO } from "../shared/SEO";
import { Breadcrumbs } from "../shared/Breadcrumbs";

export default function Root() {
  const location = useLocation();

  return (
    <div className="min-h-screen flex flex-col font-sans bg-background text-foreground">
      <SEO />
      <ScrollRestoration />
      <ScrollProgress />
      <Header />
      <Breadcrumbs />
      <main className="flex-1">
        <div key={location.pathname}>
          <Outlet />
        </div>
      </main>
      <Footer />
    </div>
  );
}
