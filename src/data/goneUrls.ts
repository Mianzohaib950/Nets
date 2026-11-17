// Legacy top-level URLs from the old website that have been permanently removed.
// The server answers these with 410 Gone (see public/.htaccess and vercel.json:
// keep all three lists in sync). The app uses this list to show the "removed"
// wording instead of "not found" on those URLs.
export const goneSlugs = [
  "about-&-contact",
  "bridges",
  "golf-and-sport",
  "handrails",
  "hoa",
  "other-nets",
  "play-elements",
  "protection-netting",
  "waterparks",
  "we-bridge-1",
  "we-decorate",
  "we-handrail",
  "we-play",
  "we-protect",
  "we-sport-1",
  "we-waterpark",
  "we-zoo",
  "zoos",
];

export function isGonePath(pathname: string) {
  let slug = pathname.replace(/^\/+|\/+$/g, "");
  try {
    slug = decodeURIComponent(slug);
  } catch {
    // Keep the raw value if it is not valid percent-encoding.
  }
  return goneSlugs.includes(slug.toLowerCase());
}
