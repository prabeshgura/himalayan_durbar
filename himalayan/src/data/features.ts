import {
  UtensilsCrossed,
  Crown,
  Sparkles,
  Music,
  ConciergeBell,
  type LucideIcon,
} from "lucide-react";

export type BanquetFeature = {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
};

export const FEATURES: BanquetFeature[] = [
  {
    id: "menu",
    title: "Curated Menu",
    description:
      "A chef-led journey through heritage dishes, modern plates, and bespoke tasting flights.",
    icon: UtensilsCrossed,
  },
  {
    id: "halls",
    title: "Luxurious Halls",
    description:
      "Pillarless ballrooms with hand-finished interiors, chandeliers, and seating for 1,000.",
    icon: Crown,
  },
  {
    id: "decor",
    title: "Signature Decor",
    description:
      "In-house florists and stylists crafting themes from royal traditions to modern minimalism.",
    icon: Sparkles,
  },
  {
    id: "dj",
    title: "DJ & Live Acts",
    description:
      "Professional sound, intelligent lighting, and curated artists for every kind of celebration.",
    icon: Music,
  },
  {
    id: "service",
    title: "White-Glove Service",
    description:
      "A dedicated event manager and trained staff ensuring every detail is flawless.",
    icon: ConciergeBell,
  },
];
