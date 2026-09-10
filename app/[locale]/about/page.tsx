import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import FloatingButtons from "@/components/FloatingButtons";
import Footer from "@/components/sections/Footer";
import AboutHero from "@/components/sections/about-page/AboutHero";
import AboutFounder from "@/components/sections/about-page/AboutFounder";
import CulinaryPillars from "@/components/sections/about-page/CulinaryPillars";
import AboutSignatureDishes from "@/components/sections/about-page/AboutSignatureDishes";
import AboutMilestones from "@/components/sections/about-page/AboutMilestones";
import CateringShowcase from "@/components/sections/about-page/CateringShowcase";
import AboutCTA from "@/components/sections/about-page/AboutCTA";

const metaByLocale: Record<string, { title: string; description: string }> = {
  es: {
    title: "Sobre Nosotros & Nuestra Historia | Samira Comida Para Llevar Torremolinos",
    description:
      "Conoce la historia de Samira y nuestra pasión por la auténtica cocina casera marroquí en Torremolinos. Tajines, Cuscús, 100% Halal y recetas tradicionales.",
  },
  en: {
    title: "About Us & Our Story | Samira Comida Para Llevar Torremolinos",
    description:
      "Discover the story of Samira and our passion for authentic Moroccan homemade food in Torremolinos. Tajines, Couscous, 100% Halal, and generational recipes.",
  },
  fr: {
    title: "À Propos & Notre Histoire | Samira Comida Para Llevar Torremolinos",
    description:
      "Découvrez l'histoire de Samira et notre passion pour l'authentique cuisine marocaine traditionnelle à Torremolinos. Tajines, Couscous, 100% Halal et fait maison.",
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const meta = metaByLocale[locale] || metaByLocale["es"];

  return {
    title: meta.title,
    description: meta.description,
    openGraph: {
      title: meta.title,
      description: meta.description,
      images: [{ url: "/about-restaurant.webp", width: 1200, height: 630, alt: "Samira Restaurant" }],
    },
  };
}

export default function AboutPage() {
  return (
    <>
      <Navigation />
      <FloatingButtons />
      <main>
        <AboutHero />
        <AboutFounder />
        <CulinaryPillars />
        <AboutSignatureDishes />
        <AboutMilestones />
        <CateringShowcase />
        <AboutCTA />
      </main>
      <Footer />
    </>
  );
}
