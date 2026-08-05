"use client";

import { useState } from "react";
import { MENU_CATEGORIES, MENU_ITEMS } from "@/data/menu";
import { Utensils, Sparkles, Download } from "lucide-react";

export default function MenuSection() {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const filteredItems =
    activeCategory === "all"
      ? MENU_ITEMS
      : MENU_ITEMS.filter((item) => item.category === activeCategory);

  return (
    <section
      id="menu"
      className="relative z-30 w-full bg-ink py-20 text-white sm:py-28 lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-10 lg:px-16">
        <header className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-4 py-1.5 text-[11px] uppercase tracking-[0.35em] text-gold">
            <Utensils className="h-3.5 w-3.5 text-gold" />
            <span>Culinary Masterpieces</span>
          </div>
          <h2 className="mt-4 font-display text-4xl leading-tight text-white sm:text-5xl lg:text-6xl">
            Royal Flavors & <span className="italic text-gold">Bespoke Dining</span>
          </h2>
          <p className="mt-4 text-sm text-white/70 sm:text-base leading-relaxed">
            From regal Nepalese feasts to contemporary banqueting delights, every dish is crafted with raw passion, authentic mountain spices, and unmatched elegance.
          </p>

          {/* Download PDF Button */}
          <div className="mt-6">
            <a
              href="/Himalayan_Durbar_Menu.pdf"
              download="Himalayan_Durbar_Menu.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 rounded-full border border-gold/40 bg-gold/15 px-6 py-2.5 text-xs font-semibold uppercase tracking-widest text-gold transition-all duration-300 hover:bg-gold hover:text-ink hover:shadow-[0_0_25px_rgba(255,195,0,0.4)]"
            >
              <Download className="h-4 w-4" />
              <span>Download Full Menu (PDF)</span>
            </a>
          </div>
        </header>

        {/* Category Tabs */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
          {MENU_CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`cursor-pointer rounded-full px-5 py-2 text-xs uppercase tracking-wider transition-all duration-300 sm:text-sm ${
                  isActive
                    ? "bg-gold text-ink font-semibold shadow-[0_0_20px_rgba(255,195,0,0.3)] scale-105"
                    : "bg-white/5 text-white/75 hover:bg-white/10 hover:text-white border border-white/10"
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Menu Cards Grid */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="group relative flex flex-col justify-between rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md transition-all duration-300 hover:-translate-y-1.5 hover:border-gold/50 hover:bg-white/10 hover:shadow-[0_12px_30px_rgba(0,0,0,0.5)]"
            >
              <div>
                <div className="flex items-start justify-between gap-3">
                  <h3 className="font-display text-2xl text-white group-hover:text-gold transition-colors">
                    {item.name}
                  </h3>
                  {item.tag && (
                    <span className="shrink-0 rounded-full border border-gold/40 bg-gold/15 px-2.5 py-0.5 text-[10px] font-medium uppercase tracking-wider text-gold flex items-center gap-1">
                      <Sparkles className="h-2.5 w-2.5" />
                      {item.tag}
                    </span>
                  )}
                </div>
                <p className="mt-3 text-xs leading-relaxed text-white/70 sm:text-sm">
                  {item.description}
                </p>
              </div>

              <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-4 text-xs tracking-wider text-gold/80 uppercase">
                <span>Himalayan Signature</span>
                <span className="text-white/40">✦</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
