"use client";

import type { BanquetFeature } from "@/data/features";

type Props = {
  feature: BanquetFeature;
  index: number;
  total: number;
};

export default function FeatureItem({ feature, index, total }: Props) {
  const Icon = feature.icon;
  return (
    <div className="flex max-w-md flex-col items-center text-center text-white sm:max-w-lg md:items-end md:text-right">
      <div className="flex h-12 w-12 items-center justify-center rounded-full border border-gold/60 bg-ink/40 text-gold backdrop-blur-sm sm:h-14 sm:w-14 lg:h-16 lg:w-16">
        <Icon
          className="h-6 w-6 sm:h-7 sm:w-7 lg:h-8 lg:w-8"
          strokeWidth={1.5}
        />
      </div>
      <span className="mt-4 font-display text-base text-gold sm:text-lg">
        0{index + 1}
        <span className="mx-2 text-white/40">/</span>
        <span className="text-white/60">0{total}</span>
      </span>
      <h3 className="mt-1 text-2xl font-semibold leading-tight tracking-tight text-white drop-shadow-[0_4px_18px_rgba(0,0,0,0.55)] sm:text-3xl lg:text-5xl">
        {feature.title}
      </h3>
      <p className="mt-3 text-sm leading-relaxed text-white/90 drop-shadow-[0_2px_10px_rgba(0,0,0,0.6)] sm:mt-4 sm:text-base">
        {feature.description}
      </p>
      <span aria-hidden className="mt-4 block h-[2px] w-14 bg-gold sm:mt-5 sm:w-16" />
    </div>
  );
}
