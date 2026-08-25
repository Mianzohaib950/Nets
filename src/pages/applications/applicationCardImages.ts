import zooHeroLemurs from "../../imports/zoo-hero-lemurs.webp";
import waterparkHeroWaterslidePool from "../../imports/waterpark-hero-waterslide-pool.webp";
import bridgeHeroTropicalRopeBridge from "../../imports/bridge-hero-tropical-rope-bridge.seo.webp";
import sportHeroGolfContainmentNetting from "../../imports/sport-hero-golf-containment-netting.seo.webp";
import protectJumpPreventionBarrier from "../../imports/protect-jump-prevention-barrier.seo.webp";
import handrailHeroWalkway from "../../imports/handrail-hero-walkway.webp";
import playHeroIndoorRopeCourse from "../../imports/play-hero-indoor-rope-course.webp";
import decorate1 from "../../imports/decorate/decorate-1.webp";

// Keep every related-application card in sync with the first (hero) image
// shown on that application's own page.
export const applicationCardImages: Record<string, string> = {
  "/applications/zoo/": zooHeroLemurs,
  "/applications/waterpark/": waterparkHeroWaterslidePool,
  "/applications/bridge/": bridgeHeroTropicalRopeBridge,
  "/applications/handrail/": handrailHeroWalkway,
  "/applications/play/": playHeroIndoorRopeCourse,
  "/applications/sport/": sportHeroGolfContainmentNetting,
  "/applications/protect/": protectJumpPreventionBarrier,
  "/applications/decorate/": decorate1,
};
