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
      <div className="flex h-14 w-14 items-center justify-center rounded-full border border-gold/70 bg-ink/75 text-gold shadow-xl backdrop-blur-md sm:h-16 sm:w-16">
        <Icon
          className="h-7 w-7 sm:h-8 sm:w-8"
          strokeWidth={1.5}
        />
      </div>
      <span className="mt-4 font-display text-lg text-gold sm:text-xl">
        0{index + 1}
        <span className="mx-2 text-white/40">/</span>
        <span className="text-white/60">0{total}</span>
      </span>
      <h3 className="mt-2 text-3xl font-extrabold leading-tight tracking-tight text-white drop-shadow-[0_4px_20px_rgba(0,0,0,0.9)] sm:text-4xl lg:text-5xl">
        {feature.title}
      </h3>
      <p className="mt-3 text-sm leading-relaxed text-white/90 drop-shadow-[0_2px_12px_rgba(0,0,0,0.95)] sm:mt-4 sm:text-base max-w-md">
        {feature.description}
      </p>
      <span aria-hidden className="mt-5 block h-[2px] w-16 bg-gold" />
    </div>
  );
}
