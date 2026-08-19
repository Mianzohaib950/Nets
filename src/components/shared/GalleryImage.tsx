import responsiveImages from "../../data/gallery-responsive-images.json";

type ResponsiveEntry = {
  width?: number;
  height?: number;
  w480?: string;
  w960?: string;
};

export function galleryImageSources(src: string) {
  const entry = (responsiveImages as Record<string, ResponsiveEntry>)[src];
  return {
    src: entry?.w960 ?? src,
    srcSet: [entry?.w480 && `${entry.w480} 480w`, entry?.w960 && `${entry.w960} 960w`, `${src} ${entry?.width ?? 1600}w`]
      .filter(Boolean)
      .join(", "),
  };
}
