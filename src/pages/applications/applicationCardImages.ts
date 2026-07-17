import zooHeroJaguar from "../../imports/zoo-hero-jaguar.webp";
import waterparkHeroWaterslidePool from "../../imports/waterpark-hero-waterslide-pool.webp";
import bridgeHeroTropicalRopeBridge from "../../imports/bridge-hero-tropical-rope-bridge.webp";
import sportHeroGolfContainmentNetting from "../../imports/sport-hero-golf-containment-netting.webp";
import protectHeroRiskMitigationNetting from "../../imports/protect-hero-risk-mitigation-netting.webp";
import handrailHeroWalkway from "../../imports/handrail-hero-walkway.png";
import playSpiderwebNet from "../../imports/play-spiderweb-net.png";
import decorate1 from "../../imports/decorate/decorate-1.png";

// Keep every related-application card in sync with the first (hero) image
// shown on that application's own page.
export const applicationCardImages: Record<string, string> = {
  "/applications/zoo": zooHeroJaguar,
  "/applications/waterpark": waterparkHeroWaterslidePool,
  "/applications/bridge": bridgeHeroTropicalRopeBridge,
  "/applications/handrail": handrailHeroWalkway,
  "/applications/play": playSpiderwebNet,
  "/applications/sport": sportHeroGolfContainmentNetting,
  "/applications/protect": protectHeroRiskMitigationNetting,
  "/applications/decorate": decorate1,
};
