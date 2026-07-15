import { useState, useEffect, useCallback } from "react";
import { useParams, Link } from "react-router";
import { X, ChevronLeft, ChevronRight, ArrowLeft, Plus } from "lucide-react";
import * as Dialog from "@radix-ui/react-dialog";
import { AnimateIn } from "../../components/shared/AnimateIn";

interface GalleryItem {
  id: number;
  src: string;
  alt: string;
  w?: number;
  h?: number;
}

const categoryData: Record<string, { title: string; items: GalleryItem[] }> = {
  zoos: {
    title: "Zoos & Aquariums",
    items: [
      { id: 1, src: "/images/zoos/zoo1.webp", alt: "zoo1" },
      { id: 2, src: "/images/zoos/zoo2.webp", alt: "zoo2" },
      { id: 3, src: "/images/zoos/zoo3.webp", alt: "zoo3" },
      { id: 4, src: "/images/zoos/zoo4.webp", alt: "zoo4" },
      { id: 5, src: "/images/zoos/zoo5.webp", alt: "zoo5" },
      { id: 6, src: "/images/zoos/zoo6.webp", alt: "zoo6" },
      { id: 7, src: "/images/zoos/zoo7.webp", alt: "zoo7" },
      { id: 8, src: "/images/zoos/zoo8.webp", alt: "zoo8" },
      { id: 9, src: "/images/zoos/zoo9.webp", alt: "zoo9" },
      { id: 10, src: "/images/zoos/zoo10.webp", alt: "zoo10" },
      { id: 11, src: "/images/zoos/zoo11.webp", alt: "zoo11" },
      { id: 12, src: "/images/zoos/zoo12.webp", alt: "zoo12" },
      { id: 13, src: "/images/zoos/zoo13.webp", alt: "zoo13" },
      { id: 14, src: "/images/zoos/zoo14.webp", alt: "zoo14" },
      { id: 15, src: "/images/zoos/zoo15.webp", alt: "zoo15" },
      { id: 16, src: "/images/zoos/zoo16.webp", alt: "zoo16" },
      { id: 17, src: "/images/zoos/zoo17.webp", alt: "zoo17" },
      { id: 18, src: "/images/zoos/zoo18.webp", alt: "zoo18" },
      { id: 19, src: "/images/zoos/zoo19.webp", alt: "zoo19" },
      { id: 20, src: "/images/zoos/zoo20.webp", alt: "zoo20" },
      { id: 21, src: "/images/zoos/zoo21.webp", alt: "zoo21" },
      { id: 22, src: "/images/zoos/zoo22.webp", alt: "zoo22" },
      { id: 23, src: "/images/zoos/zoo23.webp", alt: "zoo23" },
      { id: 24, src: "/images/zoos/zoo24.webp", alt: "zoo24" },
      { id: 25, src: "/images/zoos/zoo25.webp", alt: "zoo25" },
      { id: 26, src: "/images/zoos/zoo26.webp", alt: "zoo26" },
      { id: 27, src: "/images/zoos/zoo27.webp", alt: "zoo27" },
      { id: 28, src: "/images/zoos/zoo28.webp", alt: "zoo28" },
      { id: 29, src: "/images/zoos/zoo29.webp", alt: "zoo29" },
      { id: 30, src: "/images/zoos/zoo30.webp", alt: "zoo30" },
      { id: 31, src: "/images/zoos/zoo31.webp", alt: "zoo31" },
      { id: 32, src: "/images/zoos/zoo32.webp", alt: "zoo32" },
      { id: 33, src: "/images/zoos/zoo33.webp", alt: "zoo33" },
      { id: 34, src: "/images/zoos/zoo34.webp", alt: "zoo34" },
      { id: 35, src: "/images/zoos/zoo35.webp", alt: "zoo35" },
      { id: 36, src: "/images/zoos/zoo36.webp", alt: "zoo36" },
      { id: 37, src: "/images/zoos/zoo37.webp", alt: "zoo37" },
      { id: 38, src: "/images/zoos/zoo38.webp", alt: "zoo38" },
      { id: 39, src: "/images/zoos/zoo39.webp", alt: "zoo39" },
      { id: 40, src: "/images/zoos/zoo40.webp", alt: "zoo40" },
      { id: 41, src: "/images/zoos/zoo41.webp", alt: "zoo41" },
      { id: 42, src: "/images/zoos/zoo42.webp", alt: "zoo42" },
      { id: 43, src: "/images/zoos/zoo43.webp", alt: "zoo43" },
      { id: 44, src: "/images/zoos/zoo44.webp", alt: "zoo44" },
      { id: 45, src: "/images/zoos/zoo45.webp", alt: "zoo45" },
    ],
  },
  waterparks: {
    title: "Waterparks & Themeparks",
    items: [
      { id: 1, src: "/images/waterparks/rs=w_2560 (8).webp", alt: "rs=w_2560 (8)" },
      { id: 2, src: "/images/waterparks/rs=w_2560 (9).webp", alt: "rs=w_2560 (9)" },
      { id: 3, src: "/images/waterparks/rs=w_2560,h_1699.webp", alt: "rs=w_2560,h_1699" },
      { id: 4, src: "/images/waterparks/rs=w_2560,h_1714.webp", alt: "rs=w_2560,h_1714" },
      { id: 5, src: "/images/waterparks/rs=w_2560 (1).webp", alt: "rs=w_2560 (1)" },
      { id: 6, src: "/images/waterparks/rs=w_2560 (2).webp", alt: "rs=w_2560 (2)" },
      { id: 7, src: "/images/waterparks/rs=w_2560 (3).webp", alt: "rs=w_2560 (3)" },
      { id: 8, src: "/images/waterparks/rs=w_2560 (4).webp", alt: "rs=w_2560 (4)" },
      { id: 9, src: "/images/waterparks/rs=w_2560 (5).webp", alt: "rs=w_2560 (5)" },
      { id: 10, src: "/images/waterparks/rs=w_2560 (6).webp", alt: "rs=w_2560 (6)" },
      { id: 11, src: "/images/waterparks/rs=w_2560 (7).webp", alt: "rs=w_2560 (7)" },
      { id: 12, src: "/images/waterparks/rs=w_2560 (10).webp", alt: "rs=w_2560 (10)" },
      { id: 13, src: "/images/waterparks/rs=w_2560 (11).webp", alt: "rs=w_2560 (11)" },
      { id: 14, src: "/images/waterparks/rs=w_2560 (12).webp", alt: "rs=w_2560 (12)" },
      { id: 15, src: "/images/waterparks/rs=w_2560 (13).webp", alt: "rs=w_2560 (13)" },
      { id: 16, src: "/images/waterparks/rs=w_2560 (14).webp", alt: "rs=w_2560 (14)" },
      { id: 17, src: "/images/waterparks/rs=w_2560 (15).webp", alt: "rs=w_2560 (15)" },
      { id: 18, src: "/images/waterparks/rs=w_2560 (16).webp", alt: "rs=w_2560 (16)" },
      { id: 19, src: "/images/waterparks/rs=w_2560 (17).webp", alt: "rs=w_2560 (17)" },
      { id: 20, src: "/images/waterparks/rs=w_2560,h_1440.webp", alt: "rs=w_2560,h_1440" },
      { id: 21, src: "/images/waterparks/rs=w_2560,h_1440 (1).webp", alt: "rs=w_2560,h_1440 (1)" },
      { id: 22, src: "/images/waterparks/rs=w_2560,h_1440 (2).webp", alt: "rs=w_2560,h_1440 (2)" },
      { id: 23, src: "/images/waterparks/rs=w_2560,h_2560.webp", alt: "rs=w_2560,h_2560" },
      { id: 24, src: "/images/waterparks/rs=w_2560,h_2560 (1).webp", alt: "rs=w_2560,h_2560 (1)" },
      { id: 25, src: "/images/waterparks/rs=w_2560.webp", alt: "rs=w_2560" },
    ],
  },
  bridges: {
    title: "Bridges & Tunnels",
    items: [
      { id: 1, src: "/images/bridges/rs=w_2560 (1).webp", alt: "rs=w_2560 (1)" },
      { id: 2, src: "/images/bridges/rs=w_2560 (2).webp", alt: "rs=w_2560 (2)" },
      { id: 3, src: "/images/bridges/rs=w_2560 (3).webp", alt: "rs=w_2560 (3)" },
      { id: 4, src: "/images/bridges/rs=w_2560 (4).webp", alt: "rs=w_2560 (4)" },
      { id: 5, src: "/images/bridges/rs=w_2560 (5).webp", alt: "rs=w_2560 (5)" },
      { id: 6, src: "/images/bridges/rs=w_2560 (6).webp", alt: "rs=w_2560 (6)" },
      { id: 7, src: "/images/bridges/rs=w_2560 (7).webp", alt: "rs=w_2560 (7)" },
      { id: 8, src: "/images/bridges/rs=w_2560 (8).webp", alt: "rs=w_2560 (8)" },
      { id: 9, src: "/images/bridges/rs=w_2560 (9).webp", alt: "rs=w_2560 (9)" },
      { id: 10, src: "/images/bridges/rs=w_2560 (10).webp", alt: "rs=w_2560 (10)" },
      { id: 11, src: "/images/bridges/rs=w_2560 (11).webp", alt: "rs=w_2560 (11)" },
      { id: 12, src: "/images/bridges/rs=w_2560 (12).webp", alt: "rs=w_2560 (12)" },
      { id: 13, src: "/images/bridges/rs=w_2560 (13).webp", alt: "rs=w_2560 (13)" },
      { id: 14, src: "/images/bridges/rs=w_2560 (18).webp", alt: "rs=w_2560 (18)" },
      { id: 15, src: "/images/bridges/rs=w_2560,h_1672.webp", alt: "rs=w_2560,h_1672" },
      { id: 16, src: "/images/bridges/rs=w_2560,h_1702.webp", alt: "rs=w_2560,h_1702" },
      { id: 17, src: "/images/bridges/rs=w_2560,h_1707.webp", alt: "rs=w_2560,h_1707" },
      { id: 18, src: "/images/bridges/rs=w_2560,h_1714.webp", alt: "rs=w_2560,h_1714" },
      { id: 19, src: "/images/bridges/rs=w_2560,h_1714 (1).webp", alt: "rs=w_2560,h_1714 (1)" },
      { id: 20, src: "/images/bridges/rs=w_2560,h_1714 (2).webp", alt: "rs=w_2560,h_1714 (2)" },
      { id: 21, src: "/images/bridges/rs=w_2560,h_3413.webp", alt: "rs=w_2560,h_3413" },
      { id: 22, src: "/images/bridges/rs=w_2560.webp", alt: "rs=w_2560" },
    ],
  },
  handrails: {
    title: "Handrails",
    items: [
      { id: 1, src: "/images/handrails/rs=w_2560 (1).webp", alt: "rs=w_2560 (1)" },
      { id: 2, src: "/images/handrails/rs=w_2560 (2).webp", alt: "rs=w_2560 (2)" },
      { id: 3, src: "/images/handrails/rs=w_2560 (3).webp", alt: "rs=w_2560 (3)" },
      { id: 4, src: "/images/handrails/rs=w_2560 (4).webp", alt: "rs=w_2560 (4)" },
      { id: 5, src: "/images/handrails/rs=w_2560 (5).webp", alt: "rs=w_2560 (5)" },
      { id: 6, src: "/images/handrails/rs=w_2560 (6).webp", alt: "rs=w_2560 (6)" },
      { id: 7, src: "/images/handrails/rs=w_2560 (7).webp", alt: "rs=w_2560 (7)" },
      { id: 8, src: "/images/handrails/rs=w_2560 (8).webp", alt: "rs=w_2560 (8)" },
      { id: 9, src: "/images/handrails/rs=w_2560 (9).webp", alt: "rs=w_2560 (9)" },
      { id: 10, src: "/images/handrails/rs=w_2560 (10).webp", alt: "rs=w_2560 (10)" },
      { id: 11, src: "/images/handrails/rs=w_2560 (11).webp", alt: "rs=w_2560 (11)" },
      { id: 12, src: "/images/handrails/rs=w_2560 (12).webp", alt: "rs=w_2560 (12)" },
      { id: 13, src: "/images/handrails/rs=w_2560 (13).webp", alt: "rs=w_2560 (13)" },
      { id: 14, src: "/images/handrails/rs=w_2560 (14).webp", alt: "rs=w_2560 (14)" },
      { id: 15, src: "/images/handrails/rs=w_2560 (15).webp", alt: "rs=w_2560 (15)" },
      { id: 16, src: "/images/handrails/rs=w_2560 (16).webp", alt: "rs=w_2560 (16)" },
      { id: 17, src: "/images/handrails/rs=w_2560 (17).webp", alt: "rs=w_2560 (17)" },
      { id: 18, src: "/images/handrails/rs=w_2560 (18).webp", alt: "rs=w_2560 (18)" },
      { id: 19, src: "/images/handrails/rs=w_2560 (19).webp", alt: "rs=w_2560 (19)" },
      { id: 20, src: "/images/handrails/rs=w_2560 (20).webp", alt: "rs=w_2560 (20)" },
      { id: 21, src: "/images/handrails/rs=w_2560 (21).webp", alt: "rs=w_2560 (21)" },
      { id: 22, src: "/images/handrails/rs=w_2560 (22).webp", alt: "rs=w_2560 (22)" },
      { id: 23, src: "/images/handrails/rs=w_2560 (23).webp", alt: "rs=w_2560 (23)" },
      { id: 24, src: "/images/handrails/rs=w_2560 (24).webp", alt: "rs=w_2560 (24)" },
      { id: 25, src: "/images/handrails/rs=w_2560 (25).webp", alt: "rs=w_2560 (25)" },
      { id: 26, src: "/images/handrails/rs=w_2560 (26).webp", alt: "rs=w_2560 (26)" },
      { id: 27, src: "/images/handrails/rs=w_2560 (27).webp", alt: "rs=w_2560 (27)" },
      { id: 28, src: "/images/handrails/rs=w_2560 (28).webp", alt: "rs=w_2560 (28)" },
      { id: 29, src: "/images/handrails/rs=w_2560 (29).webp", alt: "rs=w_2560 (29)" },
      { id: 30, src: "/images/handrails/rs=w_2560 (30).webp", alt: "rs=w_2560 (30)" },
      { id: 31, src: "/images/handrails/rs=w_2560 (31).webp", alt: "rs=w_2560 (31)" },
      { id: 32, src: "/images/handrails/rs=w_2560 (32).webp", alt: "rs=w_2560 (32)" },
      { id: 33, src: "/images/handrails/rs=w_2560 (33).webp", alt: "rs=w_2560 (33)" },
      { id: 34, src: "/images/handrails/rs=w_2560,h_708.webp", alt: "rs=w_2560,h_708" },
      { id: 35, src: "/images/handrails/rs=w_2560.webp", alt: "rs=w_2560" },
    ],
  },
  "play-elements": {
    title: "Play Elements",
    items: [
      { id: 1, src: "/images/play-elements/play1.webp", alt: "play1" },
      { id: 2, src: "/images/play-elements/play2.webp", alt: "play2" },
      { id: 3, src: "/images/play-elements/play3.webp", alt: "play3" },
      { id: 4, src: "/images/play-elements/play4.webp", alt: "play4" },
      { id: 5, src: "/images/play-elements/play5.webp", alt: "play5" },
      { id: 6, src: "/images/play-elements/play6.webp", alt: "play6" },
      { id: 7, src: "/images/play-elements/play7.webp", alt: "play7" },
      { id: 8, src: "/images/play-elements/play8.webp", alt: "play8" },
      { id: 9, src: "/images/play-elements/play9.webp", alt: "play9" },
      { id: 10, src: "/images/play-elements/play10.webp", alt: "play10" },
      { id: 11, src: "/images/play-elements/play11.webp", alt: "play11" },
      { id: 12, src: "/images/play-elements/play12.webp", alt: "play12" },
      { id: 13, src: "/images/play-elements/play13.webp", alt: "play13" },
      { id: 14, src: "/images/play-elements/play14.webp", alt: "play14" },
      { id: 15, src: "/images/play-elements/play15.webp", alt: "play15" },
      { id: 16, src: "/images/play-elements/play16.webp", alt: "play16" },
      { id: 17, src: "/images/play-elements/play17.webp", alt: "play17" },
      { id: 18, src: "/images/play-elements/play18.webp", alt: "play18" },
      { id: 19, src: "/images/play-elements/play19.webp", alt: "play19" },
      { id: 20, src: "/images/play-elements/play20.webp", alt: "play20" },
      { id: 21, src: "/images/play-elements/play21.webp", alt: "play21" },
      { id: 22, src: "/images/play-elements/play22.webp", alt: "play22" },
      { id: 23, src: "/images/play-elements/play23.webp", alt: "play23" },
      { id: 24, src: "/images/play-elements/play24.webp", alt: "play24" },
      { id: 25, src: "/images/play-elements/play25.webp", alt: "play25" },
      { id: 26, src: "/images/play-elements/play26.webp", alt: "play26" },
      { id: 27, src: "/images/play-elements/play27.webp", alt: "play27" },
      { id: 28, src: "/images/play-elements/play28.webp", alt: "play28" },
      { id: 29, src: "/images/play-elements/play29.webp", alt: "play29" },
      { id: 30, src: "/images/play-elements/play30.webp", alt: "play30" },
      { id: 31, src: "/images/play-elements/play31.webp", alt: "play31" },
      { id: 32, src: "/images/play-elements/play32.webp", alt: "play32" },
      { id: 33, src: "/images/play-elements/play33.webp", alt: "play33" },
      { id: 34, src: "/images/play-elements/play34.webp", alt: "play34" },
      { id: 35, src: "/images/play-elements/play35.webp", alt: "play35" },
      { id: 36, src: "/images/play-elements/play36.webp", alt: "play36" },
      { id: 37, src: "/images/play-elements/play37.webp", alt: "play37" },
      { id: 38, src: "/images/play-elements/play38.webp", alt: "play38" },
    ],
  },
  "golf-and-sport": {
    title: "Golf & Sport",
    items: [
      { id: 1, src: "/images/golf-and-sport/golf1.webp", alt: "golf1" },
      { id: 2, src: "/images/golf-and-sport/golf2.webp", alt: "golf2" },
      { id: 3, src: "/images/golf-and-sport/golf3.webp", alt: "golf3" },
      { id: 4, src: "/images/golf-and-sport/golf4.webp", alt: "golf4" },
      { id: 5, src: "/images/golf-and-sport/golf5.webp", alt: "golf5" },
      { id: 6, src: "/images/golf-and-sport/golf6.webp", alt: "golf6" },
      { id: 7, src: "/images/golf-and-sport/golf7.webp", alt: "golf7" },
      { id: 8, src: "/images/golf-and-sport/golf8.webp", alt: "golf8" },
      { id: 9, src: "/images/golf-and-sport/golf9.webp", alt: "golf9" },
      { id: 10, src: "/images/golf-and-sport/golf10.webp", alt: "golf10" },
      { id: 11, src: "/images/golf-and-sport/golf11.webp", alt: "golf11" },
      { id: 12, src: "/images/golf-and-sport/golf12.webp", alt: "golf12" },
      { id: 13, src: "/images/golf-and-sport/golf13.webp", alt: "golf13" },
      { id: 14, src: "/images/golf-and-sport/golf14.webp", alt: "golf14" },
      { id: 15, src: "/images/golf-and-sport/golf15.webp", alt: "golf15" },
      { id: 16, src: "/images/golf-and-sport/golf16.webp", alt: "golf16" },
      { id: 17, src: "/images/golf-and-sport/golf17.webp", alt: "golf17" },
    ],
  },
  "protection-netting": {
    title: "Protection Netting",
    items: [
      { id: 1, src: "/images/protection-netting/protection1.webp", alt: "protection1" },
      { id: 2, src: "/images/protection-netting/protection2.webp", alt: "protection2" },
      { id: 3, src: "/images/protection-netting/protection3.webp", alt: "protection3" },
      { id: 4, src: "/images/protection-netting/protection4.webp", alt: "protection4" },
      { id: 5, src: "/images/protection-netting/protection5.webp", alt: "protection5" },
      { id: 6, src: "/images/protection-netting/protection6.webp", alt: "protection6" },
      { id: 7, src: "/images/protection-netting/protection7.webp", alt: "protection7" },
      { id: 8, src: "/images/protection-netting/protection8.webp", alt: "protection8" },
      { id: 9, src: "/images/protection-netting/protection9.webp", alt: "protection9" },
      { id: 10, src: "/images/protection-netting/protection10.webp", alt: "protection10" },
      { id: 11, src: "/images/protection-netting/protection11.webp", alt: "protection11" },
      { id: 12, src: "/images/protection-netting/protection12.webp", alt: "protection12" },
      { id: 13, src: "/images/protection-netting/protection13.webp", alt: "protection13" },
      { id: 14, src: "/images/protection-netting/protection14.webp", alt: "protection14" },
      { id: 15, src: "/images/protection-netting/protection15.webp", alt: "protection15" },
      { id: 16, src: "/images/protection-netting/protection16.webp", alt: "protection16" },
      { id: 17, src: "/images/protection-netting/protection17.webp", alt: "protection17" },
      { id: 18, src: "/images/protection-netting/protection18.webp", alt: "protection18" },
      { id: 19, src: "/images/protection-netting/protection19.webp", alt: "protection19" },
      { id: 20, src: "/images/protection-netting/protection20.webp", alt: "protection20" },
      { id: 21, src: "/images/protection-netting/protection21.webp", alt: "protection21" },
      { id: 22, src: "/images/protection-netting/protection22.webp", alt: "protection22" },
      { id: 23, src: "/images/protection-netting/protection23.webp", alt: "protection23" },
    ],
  },
};

export default function GalleryCategory() {
  const { category } = useParams<{ category: string }>();
  const data = categoryData[category ?? ""] ?? { title: "Gallery", items: [] };

  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [filter, setFilter] = useState("All");
  const initialDisplayCount = 8;
  const [displayCount, setDisplayCount] = useState(initialDisplayCount);

  const items = data.items;
  const displayedItems = items.slice(0, displayCount);
  const hasMoreItems = displayCount < items.length;

  const openLightbox = (i: number) => setLightboxIndex(i);
  const closeLightbox = () => setLightboxIndex(null);

  // Reset displayed count when category changes
  useEffect(() => {
    setDisplayCount(initialDisplayCount);
  }, [category]);

  const prev = useCallback(() => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex - 1 + items.length) % items.length);
  }, [lightboxIndex, items.length]);

  const next = useCallback(() => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex + 1) % items.length);
  }, [lightboxIndex, items.length]);

  useEffect(() => {
    if (lightboxIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
      if (e.key === "Escape") closeLightbox();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightboxIndex, prev, next]);

  return (
    <>
      <div className="bg-forest-900 pt-32 pb-20">
        <div className="max-w-[1280px] mx-auto px-6">
          <AnimateIn>
            <Link
              to="/gallery"
              className="inline-flex items-center gap-2 text-primary-foreground/60 hover:text-primary-foreground text-sm mb-6 transition-colors"
            >
              <ArrowLeft size={14} /> All Galleries
            </Link>
            <p className="text-xs font-medium tracking-widest uppercase text-clay mb-4">Gallery</p>
            <h1 className="font-serif text-5xl md:text-6xl font-light text-primary-foreground tracking-[-0.02em] leading-[1.05]">
              {data.title}
            </h1>
          </AnimateIn>
        </div>
      </div>

      <section className="bg-background py-16 md:py-20">
        <div className="max-w-[1280px] mx-auto px-6">
          {/* Filter bar */}
          <div className="flex items-center gap-3 mb-10 flex-wrap">
            {["All"].map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-4 py-2 text-sm rounded-[2px] border transition-colors ${
                  filter === f
                    ? "bg-primary text-primary-foreground border-primary"
                    : "border-border text-muted-foreground hover:text-foreground hover:border-foreground/20"
                }`}
              >
                {f}
              </button>
            ))}
            <span className="ml-auto text-sm text-muted-foreground">{items.length} photos</span>
          </div>

          {items.length === 0 ? (
            <div className="text-center py-24">
              <p className="text-muted-foreground">No photos available yet. Check back soon.</p>
            </div>
          ) : (
            <>
              <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
                {displayedItems.map((item, i) => (
                  <div
                    key={item.id}
                    className="break-inside-avoid overflow-hidden rounded-[4px] border border-border cursor-pointer group"
                    onClick={() => openLightbox(i)}
                  >
                    <img
                      src={item.src}
                      alt=""
                      className="w-full object-cover transition-transform duration-[600ms] ease-out group-hover:scale-[1.03]"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
              
              {hasMoreItems && (
                <div className="flex justify-center mt-12">
                  <button
                    onClick={() => setDisplayCount((c) => Math.min(c + initialDisplayCount, items.length))}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-[4px] border border-primary hover:bg-primary/90 transition-colors text-sm font-medium"
                  >
                    <Plus size={16} /> Show More
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </section>

      {/* Lightbox */}
      <Dialog.Root open={lightboxIndex !== null} onOpenChange={(open) => !open && closeLightbox()}>
        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 z-50" style={{ backgroundColor: "rgba(15,42,29,0.92)" }} />
          <Dialog.Content
            className="fixed inset-0 z-50 flex items-center justify-center p-4 outline-none"
            aria-describedby={undefined}
          >
            <Dialog.Title className="sr-only">
              {lightboxIndex !== null ? items[lightboxIndex]?.alt : "Gallery image"}
            </Dialog.Title>
            {lightboxIndex !== null && (
              <div className="relative max-w-5xl max-h-[90vh] flex flex-col items-center">
                <div className="absolute top-6 right-16 text-sm font-medium text-primary-foreground bg-forest-900/50 backdrop-blur-sm px-3 py-1 rounded-[2px] z-10">
                  {lightboxIndex + 1} / {items.length}
                </div>
                <img
                  src={items[lightboxIndex].src}
                  alt={items[lightboxIndex].alt}
                  className="max-h-[80vh] max-w-full object-contain rounded-[4px]"
                />
                <div className="absolute top-1/2 -translate-y-1/2 left-0 -translate-x-14">
                  <button
                    onClick={prev}
                    className="w-10 h-10 flex items-center justify-center text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                    aria-label="Previous image"
                  >
                    <ChevronLeft size={24} />
                  </button>
                </div>
                <div className="absolute top-1/2 -translate-y-1/2 right-0 translate-x-14">
                  <button
                    onClick={next}
                    className="w-10 h-10 flex items-center justify-center text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                    aria-label="Next image"
                  >
                    <ChevronRight size={24} />
                  </button>
                </div>
              </div>
            )}
            <Dialog.Close
              className="absolute top-6 right-6 w-10 h-10 flex items-center justify-center text-primary-foreground/70 hover:text-primary-foreground transition-colors"
              aria-label="Close"
            >
              <X size={20} />
            </Dialog.Close>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </>
  );
}
