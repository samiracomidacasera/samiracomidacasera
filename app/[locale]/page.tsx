import Navigation from "@/components/Navigation";
import FloatingButtons from "@/components/FloatingButtons";
import Hero from "@/components/sections/Hero";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import FeaturedDishes from "@/components/sections/FeaturedDishes";
import MenuSection from "@/components/sections/MenuSection";
import Gallery from "@/components/sections/Gallery";
import About from "@/components/sections/About";
import Reviews from "@/components/sections/Reviews";
import ReservationSection from "@/components/sections/ReservationSection";
import OrderSection from "@/components/sections/OrderSection";
import MapSection from "@/components/sections/MapSection";
import Footer from "@/components/sections/Footer";

export default function LocalePage() {
  return (
    <>
      <Navigation />
      <FloatingButtons />
      <main>
        <Hero />
        <WhyChooseUs />
        <FeaturedDishes />
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
