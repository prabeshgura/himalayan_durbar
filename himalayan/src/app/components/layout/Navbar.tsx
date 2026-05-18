"use client";

import { useEffect, useState } from "react";

const NAV_LINKS = ["Events", "Gallery", "Menu", "Contact"];

export default function Navbar() {
  const [atTop, setAtTop] = useState(true);

  useEffect(() => {
    const onScroll = () => setAtTop(window.scrollY < 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      aria-hidden={!atTop}
      className={`pointer-events-none fixed inset-x-0 top-0 z-50 bg-transparent transition-all duration-500 ${
        atTop
          ? "translate-y-0 opacity-100"
          : "-translate-y-full opacity-0"
      }`}
    >
      <nav className="mx-auto flex w-full max-w-7xl items-center justify-between px-5 py-4 sm:px-10 sm:py-5 lg:px-16">
        <span
          className="font-display text-xl leading-none text-white sm:text-2xl lg:text-3xl"
          aria-label="Himalayan Durbar"
        >
          Himalayan Durbar
        </span>

        <ul className="hidden items-center gap-8 md:flex lg:gap-10">
          {NAV_LINKS.map((label) => (
            <li
              key={label}
              className="cursor-default text-xs uppercase tracking-[0.28em] text-white/80 sm:text-sm"
            >
              {label}
            </li>
          ))}
        </ul>

        <span
          aria-hidden
          className="flex h-9 w-9 items-center justify-center rounded-full border border-white/30 text-white md:hidden"
        >
          <span className="relative block h-3.5 w-4.5">
            <span className="absolute left-0 top-0 h-[2px] w-full bg-current" />
            <span className="absolute left-0 top-[6px] h-[2px] w-full bg-current" />
            <span className="absolute left-0 top-[12px] h-[2px] w-full bg-current" />
          </span>
        </span>
      </nav>
    </header>
  );
}
