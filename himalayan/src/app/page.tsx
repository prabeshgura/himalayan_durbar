import Hero from "./components/home/Hero";
import EventsSection from "./components/home/EventsSection";
import FeaturesSection from "./components/home/FeaturesSection";
import ChainsSection from "./components/home/ChainsSection";

export default function Home() {
  return (
    <main className="relative">
      <div className="sticky top-0 z-0 h-screen">
        <Hero />
      </div>
      <EventsSection />
      <div className="relative -mt-[50vh] sm:-mt-[70vh]">
        <FeaturesSection />
      </div>
      <ChainsSection />
    </main>
  );
}
