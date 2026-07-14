import { useLocation, Outlet, ScrollRestoration } from "react-router";
import { AnimatePresence, motion } from "motion/react";
import Header from "./Header";
import Footer from "./Footer";
import { ScrollProgress } from "../shared/ScrollProgress";

export default function Root() {
  const location = useLocation();

  return (
    <div className="min-h-screen flex flex-col font-sans bg-background text-foreground">
      <ScrollRestoration />
      <ScrollProgress />
      <Header />
      <main className="flex-1">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <Outlet />
          </motion.div>
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  );
}
