import { CHAIN_IMAGES, CHAINS } from "@/data/chains";
import PhotoChain from "./PhotoChain";

export default function ChainsSection() {
  return (
    <section
      id="gallery"
      className="relative z-30 w-full bg-cream py-16 text-ink sm:py-24"
    >
      <header className="mx-auto mb-10 max-w-7xl px-6 text-center sm:mb-14 sm:px-12 lg:px-20">
        <p className="text-[11px] uppercase tracking-[0.42em] text-gold-secondary sm:text-xs">
          A Glimpse Within
        </p>
        <h2 className="mt-2 font-display text-4xl text-ink sm:text-5xl lg:text-6xl">
          Moments in Motion
        </h2>
      </header>

      <div className="flex flex-col gap-3 sm:gap-4 lg:gap-5">
        {CHAINS.map((c) => (
          <PhotoChain
            key={c.id}
            images={CHAIN_IMAGES}
            direction={c.direction}
            duration={c.duration}
          />
        ))}
      </div>
    </section>
  );
}
