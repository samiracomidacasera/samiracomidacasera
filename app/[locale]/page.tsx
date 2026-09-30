import Navigation from "@/components/Navigation";
import FloatingButtons from "@/components/FloatingButtons";
import Hero from "@/components/sections/Hero";
import HouseSpecialties from "@/components/sections/HouseSpecialties";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import MenuSection from "@/components/sections/MenuSection";
import Gallery from "@/components/sections/Gallery";
import About from "@/components/sections/About";
import Reviews from "@/components/sections/Reviews";
import ReservationSection from "@/components/sections/ReservationSection";
import OrderSection from "@/components/sections/OrderSection";
import MapSection from "@/components/sections/MapSection";
import Footer from "@/components/sections/Footer";

const webSiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Samira comida casera",
  url: "https://www.samiracomidacasera.es",
  inLanguage: ["es", "en", "fr"],
  description:
    "Auténtica comida marroquí tradicional y casera en Torremolinos, Málaga. Para llevar, a domicilio y catering.",
};

export default function LocalePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteJsonLd) }}
      />
      <Navigation />
      <FloatingButtons />
      <main>
        <Hero />
        <WhyChooseUs />
        <HouseSpecialties />
        <MenuSection />
        <Gallery />
        <About />
        <Reviews />
        <ReservationSection />
        <OrderSection />
        <MapSection />
      </main>
      <Footer />
    </>
  );
}
