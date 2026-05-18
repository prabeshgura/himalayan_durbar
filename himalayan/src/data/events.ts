export type BanquetEvent = {
  id: string;
  title: string;
  description: string;
  image: string;
};

const IMAGES = ["/Event1.png", "/Event2.png", "/Event3.png"];

const RAW = [
  {
    id: "weddings",
    title: "Royal Weddings",
    description:
      "Heritage-inspired mandaps, candlelit aisles, and bespoke rituals tailored to every tradition.",
  },
  {
    id: "corporate",
    title: "Corporate Galas",
    description:
      "Elegant settings for product launches and award nights backed by state-of-the-art AV.",
  },
  {
    id: "birthdays",
    title: "Birthdays & Anniversaries",
    description:
      "Intimate dinners or themed nights, plated by chefs and styled by our in-house florists.",
  },
  {
    id: "cultural",
    title: "Cultural Soirees",
    description:
      "Classical music, dance, and regional cuisine — staged in a regal banquet setting.",
  },
  {
    id: "receptions",
    title: "Grand Receptions",
    description:
      "Halls hosting up to 1,000 guests with curated lighting, florals, and signature service.",
  },
];

export const EVENTS: BanquetEvent[] = RAW.map((e, i) => ({
  ...e,
  image: IMAGES[i % IMAGES.length],
}));
