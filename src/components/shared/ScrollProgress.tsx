import { useScroll, motion } from "motion/react";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[2px] bg-clay z-[200] origin-left pointer-events-none"
      style={{ scaleX: scrollYProgress }}
    />
  );
}
