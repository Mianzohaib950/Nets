import responsiveImages from "../../data/gallery-responsive-images.json";

type ResponsiveEntry = {
  width?: number;
  height?: number;
  w480?: string;
  w960?: string;
};

// Some legacy file names contain commas, which srcset treats as separators.
const srcSetUrl = (url: string) => url.replaceAll(",", "%2C");

export function galleryImageSources(src: string) {
  const entry = (responsiveImages as Record<string, ResponsiveEntry>)[src];
  return {
    src: entry?.w960 ?? src,
    srcSet: [entry?.w480 && `${srcSetUrl(entry.w480)} 480w`, entry?.w960 && `${srcSetUrl(entry.w960)} 960w`, `${srcSetUrl(src)} ${entry?.width ?? 1600}w`]
      .filter(Boolean)
      .join(", "),
  };
}
