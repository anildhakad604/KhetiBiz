import type { StaticImageData } from "next/image";

import cropSlope from "@/assets/images/crop-slope.jpg";
import farmerPlanting from "@/assets/images/farmer-planting.jpg";
import marketGreens from "@/assets/images/market-greens.jpg";
import soilTrowel from "@/assets/images/soil-trowel.jpg";

import { site } from "./site";

export type MediaItem = {
  title: string;
  series: string;
  format: "Video" | "Podcast";
  duration: string;
  date: string;
  image: StaticImageData;
  href: string;
};

// Placeholder episodes — point `href` at the real video / podcast URLs.
const channel = site.social.find((s) => s.icon === "youtube")!.href;

export const mediaItems: MediaItem[] = [
  {
    title: "Soybean steady, onion slips, tomato arrivals climb",
    series: "Mandi Bulletin",
    format: "Video",
    duration: "6 min",
    date: "2026-10-02",
    image: marketGreens,
    href: channel,
  },
  {
    title: "What a weak monsoon finish means for rabi sowing",
    series: "The KhetiBiz Podcast",
    format: "Podcast",
    duration: "24 min",
    date: "2026-09-30",
    image: cropSlope,
    href: channel,
  },
  {
    title: "Inside a women-led FPO’s vegetable business",
    series: "Field Report",
    format: "Video",
    duration: "9 min",
    date: "2026-09-27",
    image: farmerPlanting,
    href: channel,
  },
  {
    title: "The economics of soil testing at scale",
    series: "Soil to Shelf",
    format: "Podcast",
    duration: "18 min",
    date: "2026-09-24",
    image: soilTrowel,
    href: channel,
  },
];

/** Headlines for the breaking-news ticker. */
export const breaking: { label: string; href: string }[] = [
  { label: "Digital mandis: our October cover investigation is live", href: "/stories/the-new-mandi" },
  { label: "Drone spraying services expand across the paddy belt", href: "/stories/drone-spraying-punjab-paddy" },
  { label: "Rabi outlook: early heat remains the key risk for wheat", href: "/stories/rabi-wheat-procurement-outlook" },
  { label: "Maize prices firm as ethanol demand reshapes kharif sowing", href: "/stories/maize-ethanol-kharif" },
  { label: "Registrations open for the KhetiBiz Agri Leaders Summit, 14 Nov", href: "/#events" },
];
