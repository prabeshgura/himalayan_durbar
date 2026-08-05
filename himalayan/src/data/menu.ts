export type MenuItem = {
  id: string;
  name: string;
  category: "starters" | "mains" | "desserts" | "drinks";
  description: string;
  price?: string;
  tag?: string;
};

export const MENU_CATEGORIES = [
  { id: "all", label: "All Offerings" },
  { id: "starters", label: "Starters & Canapés" },
  { id: "mains", label: "Royal Entrees" },
  { id: "desserts", label: "Desserts & Sweets" },
  { id: "drinks", label: "Bar & Beverages" },
] as const;

export const MENU_ITEMS: MenuItem[] = [
  {
    id: "m1",
    name: "Durbar Sekuwa Platter",
    category: "starters",
    description: "Marinated mutton & chicken grilled in woodfire oven with traditional Himalayan spices and house chutneys.",
    tag: "Chef Special",
  },
  {
    id: "m2",
    name: "Steamed & Pan-Fried Momos",
    category: "starters",
    description: "Handcrafted dumplings filled with spiced minced meats or farm-fresh vegetables, served with tangy tomato sesame achar.",
    tag: "Popular",
  },
  {
    id: "m3",
    name: "Royal Nepalese Thali Feast",
    category: "mains",
    description: "A majestic platter featuring local aromatic rice, black lentils, wild mountain herbs, choice of curry, and freshly fried papad.",
    tag: "Signature",
  },
  {
    id: "m4",
    name: "Slow-Cooked Himalayan Lamb Curry",
    category: "mains",
    description: "Tender lamb simmered for 8 hours with green cardamom, roasted mustard, and garlic cloves.",
  },
  {
    id: "m5",
    name: "Paneer Butter Masala & Naan",
    category: "mains",
    description: "Cottage cheese cubes bathed in rich creamy tomato gravy, served with freshly baked butter garlic naan.",
  },
  {
    id: "m6",
    name: "Saffron Kheer & Gud Jamun",
    category: "desserts",
    description: "Rich cardamom-infused rice pudding topped with pistachios, silver leaf, alongside hot gulab jamun.",
    tag: "House Special",
  },
  {
    id: "m7",
    name: "Himalayan Herbal Infusion Flight",
    category: "drinks",
    description: "Freshly brewed high-altitude tea blends infused with lemongrass, ginger, and wild mountain honey.",
  },
  {
    id: "m8",
    name: "Durbar Royal Elixir Cocktail",
    category: "drinks",
    description: "Signature mix of spiced rum, fresh citrus, passionfruit syrup, and aromatic bitters served in crystal glass.",
    tag: "Signature Cocktail",
  },
];
