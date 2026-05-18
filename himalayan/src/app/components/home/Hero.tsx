"use client";

import { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useTypewriter } from "@/utils/useTypewriter";

const BANQUET_NAME = "Himalayan Durbar";
const VIDEO_SRC = "/Hero.mov";

export default function Hero() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const videoWrapRef = useRef<HTMLDivElement | null>(null);
  const overlayRef = useRef<HTMLDivElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [videoReady, setVideoReady] = useState(false);

  const { typed, done } = useTypewriter({
    text: BANQUET_NAME,
    speedMs: 130,
    startDelayMs: 600,
    enabled: videoReady,
  });

  useGSAP(
    () => {
      if (!videoReady) return;
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.fromTo(
        videoWrapRef.current,
        { yPercent: -110, autoAlpha: 0 },
        { yPercent: 0, autoAlpha: 1, duration: 1.4 }
      ).to(
        overlayRef.current,
        { autoAlpha: 0.55, duration: 0.6 },
        "-=0.4"
      );
    },
    { scope: sectionRef, dependencies: [videoReady] }
  );

  return (
    <section
      ref={sectionRef}
      className="relative isolate flex h-screen w-full items-end overflow-hidden bg-gold-secondary"
    >
      <div
        ref={videoWrapRef}
        className="absolute inset-0 -z-10 opacity-0 will-change-transform"
      >
        <video
          ref={videoRef}
          className="h-full w-full object-cover"
          src={VIDEO_SRC}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          onCanPlay={() => setVideoReady(true)}
          onLoadedData={() => setVideoReady(true)}
        />
        <div
          ref={overlayRef}
          className="pointer-events-none absolute inset-0 bg-ink/0"
        />
      </div>

      {!videoReady && (
        <div className="pointer-events-none absolute inset-0 -z-10 bg-gold-secondary" />
      )}

      <div className="relative z-10 flex w-full max-w-7xl flex-col items-start px-8 pb-12 text-left sm:px-16 sm:pb-16 lg:px-24 lg:pb-24">
        <p className="mb-4 text-xs uppercase tracking-[0.42em] text-white/85 sm:text-sm">
          Welcome to
        </p>
        <h1
          className="font-display text-gold drop-shadow-[0_6px_24px_rgba(0,0,0,0.45)]"
          style={{ fontSize: "clamp(3rem, 10vw, 8.5rem)", lineHeight: 1.05 }}
        >
          <span className={done ? "" : "caret-blink"}>{typed}</span>
        </h1>
        <span
          aria-hidden
          className="mt-6 block h-[2px] w-24 bg-gold"
        />
        <p className="mt-5 max-w-md text-sm text-white/85 sm:text-base">
          Where tradition meets timeless celebration.
        </p>
      </div>
    </section>
  );
}
