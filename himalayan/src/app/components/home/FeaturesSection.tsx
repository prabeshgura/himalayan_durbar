"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { FEATURES } from "@/data/features";
import FeatureItem from "./FeatureItem";

gsap.registerPlugin(ScrollTrigger);

const FEAT_BG = "/Feat.png";

export default function FeaturesSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const pinRef = useRef<HTMLDivElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      const pin = pinRef.current;
      const track = trackRef.current;
      if (!pin || !track) return;

      const getDistance = () => {
        const trackHeight = track.scrollHeight;
        const windowHeight = window.innerHeight;
        return Math.max(0, trackHeight - windowHeight + 160);
      };

      gsap.to(track, {
        y: () => -getDistance(),
        ease: "none",
        scrollTrigger: {
          trigger: pin,
          start: "top top",
          end: () => `+=${getDistance() + 500}`,
          pin: true,
          scrub: 1,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });
    },
    { scope: sectionRef }
  );

  return (
    <section
      id="features"
      ref={sectionRef}
      className="relative z-20 w-full bg-ink text-white"
    >
      <div
        ref={pinRef}
        className="relative h-screen w-full overflow-hidden"
      >
        {/* Background Image */}
        <div
          aria-hidden
          className="absolute inset-0 z-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${FEAT_BG})` }}
        />
        {/* Gradient Overlay */}
        <div
          aria-hidden
          className="absolute inset-0 z-0 bg-gradient-to-t from-ink/95 via-ink/75 to-ink/85 md:bg-gradient-to-l md:from-ink/95 md:via-ink/70 md:to-ink/40"
        />

        {/* Content Layout */}
        <div className="absolute inset-0 z-10 flex flex-col md:flex-row">
          {/* Left Title Area */}
          <div className="flex flex-col justify-center px-6 pt-10 sm:px-12 md:w-1/2 md:p-16 lg:p-24">
            <p className="text-[11px] uppercase tracking-[0.42em] text-gold font-semibold sm:text-xs">
              Why Himalayan Durbar
            </p>
            <h2 className="mt-3 font-display text-4xl leading-[1.3] text-white drop-shadow-[0_6px_24px_rgba(0,0,0,0.7)] sm:text-6xl md:mt-4 md:text-7xl lg:text-[5.5rem]">
              The Finest{" "}
              <span className="block italic text-gold mt-1">Touches</span>
            </h2>
            <span
              aria-hidden
              className="mt-5 block h-[3px] w-20 bg-gold md:mt-7 md:w-28"
            />
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/85 sm:text-base hidden sm:block">
              Every detail tuned to a single standard — quiet, considered, and
              unmistakably ours.
            </p>
          </div>

          {/* Right Feature Items Container */}
          <div className="relative flex-1 overflow-hidden md:w-1/2 flex items-start justify-center md:justify-end">
            <div
              ref={trackRef}
              className="flex flex-col items-center gap-28 px-6 py-28 md:items-end md:px-14 lg:px-20 md:py-36 will-change-transform"
            >
              {FEATURES.map((f, i) => (
                <div key={f.id} className="w-full flex justify-center md:justify-end shrink-0">
                  <FeatureItem feature={f} index={i} total={FEATURES.length} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
