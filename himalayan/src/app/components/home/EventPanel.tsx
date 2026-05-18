"use client";

import type { BanquetEvent } from "@/data/events";

type Props = {
  event: BanquetEvent;
  index: number;
  total: number;
};

export default function EventPanel({ event, index, total }: Props) {
  return (
    <article
      className="flex h-full w-screen shrink-0 flex-col items-center justify-center gap-4 px-4 pt-24 pb-8 text-center sm:w-xl sm:gap-8 sm:px-12 sm:pt-32 sm:pb-12 lg:gap-10 lg:px-16 lg:pt-36"
      aria-label={`${event.title} (${index + 1} of ${total})`}
    >
      <div
        className="overflow-hidden rounded-2xl border border-gold/50 shadow-[0_24px_60px_rgba(26,26,26,0.18)] ring-1 ring-gold-secondary/20"
        style={{
          width: "min(84vw, 480px)",
          height: "min(34vh, 300px)",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={event.image}
          alt={event.title}
          className="h-full w-full object-cover"
        />
      </div>

      <div className="max-w-md">
        <span className="font-display text-lg text-gold-secondary sm:text-xl">
          0{index + 1}
          <span className="mx-2 text-ink/30">/</span>
          <span className="text-ink/50">0{total}</span>
        </span>
        <h3 className="mt-1 font-display text-2xl leading-tight text-ink sm:text-4xl lg:text-5xl">
          {event.title}
        </h3>
        <p className="mx-auto mt-2 max-w-sm text-sm leading-relaxed text-ink/75 sm:text-base">
          {event.description}
        </p>
      </div>
    </article>
  );
}
