"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const NAV_ITEMS = [
  { label: "Events", targetId: "events" },
  { label: "Gallery", targetId: "gallery" },
  { label: "Menu", targetId: "menu" },
  { label: "Contact", targetId: "contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (targetId: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-ink/85 backdrop-blur-md border-b border-gold/20 shadow-2xl py-3"
            : "bg-gradient-to-b from-black/80 via-black/40 to-transparent py-5"
        }`}
      >
        <nav className="mx-auto flex w-full max-w-7xl items-center justify-between px-5 sm:px-10 lg:px-16">
          {/* Brand Logo / Title */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="cursor-pointer font-display text-2xl text-white hover:text-gold transition-colors sm:text-3xl lg:text-4xl text-left"
            aria-label="Himalayan Durbar Home"
          >
            Himalayan Durbar
          </button>

          {/* Desktop Navigation Links */}
          <ul className="hidden items-center gap-8 md:flex lg:gap-10">
            {NAV_ITEMS.map((item) => (
              <li key={item.targetId}>
                <button
                  onClick={() => handleNavClick(item.targetId)}
                  className="group relative cursor-pointer text-xs uppercase tracking-[0.28em] text-white/85 transition-colors hover:text-gold sm:text-sm font-medium"
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-gold transition-all duration-300 group-hover:w-full" />
                </button>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-white/30 text-white hover:border-gold hover:text-gold transition-colors md:hidden"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </nav>
      </header>

      {/* Mobile Drawer Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 flex flex-col bg-ink/95 backdrop-blur-xl pt-24 px-8 md:hidden transition-all duration-300">
          <ul className="flex flex-col gap-6 text-center">
            {NAV_ITEMS.map((item) => (
              <li key={item.targetId}>
                <button
                  onClick={() => handleNavClick(item.targetId)}
                  className="w-full cursor-pointer py-3 text-lg uppercase tracking-[0.3em] text-white hover:text-gold transition-colors border-b border-white/10"
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
}
