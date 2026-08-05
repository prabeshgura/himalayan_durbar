"use client";

import { ArrowUp, Heart } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative z-30 w-full bg-ink text-white border-t border-white/10 py-12">
      <div className="mx-auto max-w-7xl px-5 sm:px-10 lg:px-16">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand & Copyright */}
          <div>
            <h3 className="font-display text-3xl text-gold">Himalayan Durbar</h3>
            <p className="mt-2 text-xs text-white/60">
              © {new Date().getFullYear()} Himalayan Durbar Banquet & Events. All rights reserved.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex items-center gap-6 text-xs uppercase tracking-widest text-white/70">
            <button
              onClick={() => document.getElementById("events")?.scrollIntoView({ behavior: "smooth" })}
              className="hover:text-gold transition-colors cursor-pointer"
            >
              Events
            </button>
            <button
              onClick={() => document.getElementById("gallery")?.scrollIntoView({ behavior: "smooth" })}
              className="hover:text-gold transition-colors cursor-pointer"
            >
              Gallery
            </button>
            <button
              onClick={() => document.getElementById("menu")?.scrollIntoView({ behavior: "smooth" })}
              className="hover:text-gold transition-colors cursor-pointer"
            >
              Menu
            </button>
            <button
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              className="hover:text-gold transition-colors cursor-pointer"
            >
              Contact
            </button>
          </div>

          {/* Back to Top */}
          <button
            onClick={scrollToTop}
            className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border border-gold/40 bg-gold/10 text-gold hover:bg-gold hover:text-ink transition-all duration-300 shadow-md"
            aria-label="Scroll to top"
          >
            <ArrowUp className="h-5 w-5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
