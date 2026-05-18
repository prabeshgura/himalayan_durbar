"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

type Props = {
  images: string[];
  direction: "left" | "right";
  duration?: number;
  tilesPerLoop?: number;
};

export default function PhotoChain({
  images,
  direction,
  duration = 70,
  tilesPerLoop = 14,
}: Props) {
  const trackRef = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      const track = trackRef.current;
      if (!track) return;
      const start = direction === "left" ? 0 : -50;
      const end = direction === "left" ? -50 : 0;
      gsap.set(track, { xPercent: start });
      const tween = gsap.to(track, {
        xPercent: end,
        duration,
        ease: "none",
        repeat: -1,
      });
      return () => {
        tween.kill();
      };
    },
    { dependencies: [direction, duration] }
  );

  const strip = Array.from(
    { length: tilesPerLoop },
    (_, i) => images[i % images.length]
  );
  const doubled = [...strip, ...strip];

  return (
    <div className="overflow-hidden">
      <div
        ref={trackRef}
        className="flex w-max gap-3 will-change-transform sm:gap-4 lg:gap-5"
      >
        {doubled.map((src, i) => (
          <div
            key={`${src}-${i}`}
            className="h-28 w-44 shrink-0 overflow-hidden rounded-xl border border-gold-secondary/25 shadow-[0_10px_24px_rgba(26,26,26,0.12)] sm:h-36 sm:w-56 lg:h-44 lg:w-72"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={src}
              alt=""
              aria-hidden
              className="h-full w-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
