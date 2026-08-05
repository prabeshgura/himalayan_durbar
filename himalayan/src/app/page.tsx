import Hero from "./components/home/Hero";
import EventsSection from "./components/home/EventsSection";
import FeaturesSection from "./components/home/FeaturesSection";
import ChainsSection from "./components/home/ChainsSection";
import MenuSection from "./components/home/MenuSection";
import ContactSection from "./components/home/ContactSection";
import Footer from "./components/layout/Footer";

export default function Home() {
  return (
    <main className="relative">
      <div className="sticky top-0 z-0 h-screen">
        <Hero />
      </div>
      <EventsSection />
      <FeaturesSection />
      <ChainsSection />
      <MenuSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
