"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { EVENTS } from "@/data/events";
import EventPanel from "./EventPanel";

gsap.registerPlugin(ScrollTrigger);

export default function EventsSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const pinRef = useRef<HTMLDivElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      const track = trackRef.current;
      const pin = pinRef.current;
      if (!track || !pin) return;

      const getDistance = () =>
        Math.max(0, track.scrollWidth - window.innerWidth);

      gsap.to(track, {
        x: () => -getDistance(),
        ease: "none",
        scrollTrigger: {
          trigger: pin,
          start: "top top",
          end: () => `+=${getDistance()}`,
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
      id="events"
      ref={sectionRef}
      className="relative z-30 w-full bg-cream text-ink"
    >
      <div
        ref={pinRef}
        className="relative h-screen w-full overflow-hidden"
      >
        <header className="pointer-events-none absolute inset-x-0 top-0 z-20 px-4 pt-6 sm:px-12 sm:pt-12 lg:px-20">
          <p className="text-[10px] uppercase tracking-[0.36em] text-gold-secondary sm:tracking-[0.42em] sm:text-xs">
            Our Signature Events
          </p>
          <h2 className="mt-1 font-display text-2xl text-ink sm:text-4xl lg:text-5xl">
            Moments to Remember
          </h2>
        </header>

        <div className="pointer-events-none absolute bottom-6 right-6 z-20 text-[10px] uppercase tracking-[0.32em] text-ink/60 sm:bottom-10 sm:right-10 sm:text-xs">
          Scroll →
        </div>

        <div
          ref={trackRef}
          className="flex h-full w-max will-change-transform"
        >
          {EVENTS.map((ev, i) => (
            <EventPanel
              key={ev.id}
              event={ev}
              index={i}
              total={EVENTS.length}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
