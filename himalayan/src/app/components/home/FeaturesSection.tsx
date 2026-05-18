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
  const listRef = useRef<HTMLDivElement | null>(null);
  const itemRefs = useRef<Array<HTMLDivElement | null>>([]);

  useGSAP(
    () => {
      const list = listRef.current;
      const items = itemRefs.current.filter(
        (n): n is HTMLDivElement => n !== null
      );
      if (!list || items.length === 0) return;

      ScrollTrigger.scrollerProxy(list, {
        scrollTop(value) {
          if (arguments.length && value !== undefined) {
            list.scrollTop = value;
          }
          return list.scrollTop;
        },
        getBoundingClientRect() {
          return list.getBoundingClientRect();
        },
      });

      list.addEventListener("scroll", ScrollTrigger.update);

      items.forEach((item) => {
        gsap.fromTo(
          item,
          { autoAlpha: 0, y: 40 },
          {
            autoAlpha: 1,
            y: 0,
            ease: "power2.out",
            scrollTrigger: {
              scroller: list,
              trigger: item,
              start: "top bottom",
              end: "top 65%",
              scrub: 0.3,
              invalidateOnRefresh: true,
            },
          }
        );
        gsap.to(item, {
          autoAlpha: 0,
          y: -40,
          ease: "power2.in",
          scrollTrigger: {
            scroller: list,
            trigger: item,
            start: "bottom 35%",
            end: "bottom top",
            scrub: 0.3,
            invalidateOnRefresh: true,
          },
        });
      });

      ScrollTrigger.refresh();

      return () => {
        list.removeEventListener("scroll", ScrollTrigger.update);
      };
    },
    { scope: sectionRef }
  );

  return (
    <section
      id="features"
      ref={sectionRef}
      className="relative z-20 w-full bg-ink text-white"
      style={{ height: "200vh" }}
    >
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        <div
          aria-hidden
          className="absolute inset-0 z-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${FEAT_BG})` }}
        />
        <div
          aria-hidden
          className="absolute inset-0 z-0 bg-gradient-to-b from-ink/70 via-ink/55 to-ink/85 md:bg-gradient-to-l md:from-ink/85 md:via-ink/45 md:to-transparent"
        />

        {/* Layout wrapper — column on mobile, absolute split on md+ */}
        <div className="absolute inset-0 z-10 flex flex-col md:block">
          <div className="px-5 pt-6 sm:px-8 sm:pt-10 md:absolute md:inset-y-0 md:left-0 md:flex md:max-w-xl md:flex-col md:justify-start md:p-12 lg:p-16">
            <p className="text-[10px] uppercase tracking-[0.36em] text-gold sm:tracking-[0.42em] sm:text-xs">
              Why Himalayan Durbar
            </p>
            <h2 className="mt-2 font-display text-4xl leading-[1.05] text-white drop-shadow-[0_6px_24px_rgba(0,0,0,0.55)] sm:text-6xl md:mt-3 md:text-7xl lg:text-[5.5rem]">
              The Finest{" "}
              <span className="italic text-gold">Touches</span>
            </h2>
            <span
              aria-hidden
              className="mt-4 block h-[3px] w-20 bg-gold md:mt-6 md:w-28"
            />
            <p className="mt-3 hidden max-w-sm text-sm leading-relaxed text-white/80 md:block md:mt-6 md:text-base">
              Every detail tuned to a single standard — quiet, considered, and
              unmistakably ours.
            </p>
          </div>

          <div
            ref={listRef}
            data-lenis-prevent
            className="features-scroll flex-1 overflow-y-auto overflow-x-hidden md:absolute md:inset-y-0 md:right-0 md:h-full md:w-1/2 md:flex-none lg:w-[44%]"
          >
            <div aria-hidden className="h-[12vh] md:h-[30vh]" />
            {FEATURES.map((f, i) => (
              <div
                key={f.id}
                ref={(el) => {
                  itemRefs.current[i] = el;
                }}
                className="flex min-h-[38vh] items-center justify-center px-5 py-4 sm:min-h-[40vh] sm:px-8 sm:py-6 md:justify-end md:px-10 lg:px-14"
              >
                <FeatureItem feature={f} index={i} total={FEATURES.length} />
              </div>
            ))}
            <div aria-hidden className="h-[12vh] md:h-[30vh]" />
          </div>
        </div>
      </div>
    </section>
  );
}
