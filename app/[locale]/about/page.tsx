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

const baseUrl = "https://www.samiracomidacasera.es";

const metaByLocale: Record<string, { title: string; description: string; localeCode: string; breadcrumb: string }> = {
  es: {
    title: "Sobre Nosotros & Nuestra Historia | Samira Comida Para Llevar Torremolinos",
    description:
      "Conoce la historia de Samira y nuestra pasión por la auténtica cocina casera marroquí en Torremolinos. Tajines, Cuscús, 100% Halal y recetas tradicionales.",
    localeCode: "es_ES",
    breadcrumb: "Nosotros",
  },
  en: {
    title: "About Us & Our Story | Samira Comida Para Llevar Torremolinos",
    description:
      "Discover the story of Samira and our passion for authentic Moroccan homemade food in Torremolinos. Tajines, Couscous, 100% Halal, and generational recipes.",
    localeCode: "en_GB",
    breadcrumb: "About Us",
  },
  fr: {
    title: "À Propos & Notre Histoire | Samira Comida Para Llevar Torremolinos",
    description:
      "Découvrez l'histoire de Samira et notre passion pour l'authentique cuisine marocaine traditionnelle à Torremolinos. Tajines, Couscous, 100% Halal et fait maison.",
    localeCode: "fr_FR",
    breadcrumb: "À Propos",
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const lang = metaByLocale[locale] ? locale : "es";
  const meta = metaByLocale[lang];

  return {
    title: meta.title,
    description: meta.description,
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    alternates: {
      canonical: `${baseUrl}/${lang}/about`,
      languages: {
        es: `${baseUrl}/es/about`,
        en: `${baseUrl}/en/about`,
        fr: `${baseUrl}/fr/about`,
        "x-default": `${baseUrl}/es/about`,
      },
    },
    openGraph: {
      type: "website",
      locale: meta.localeCode,
      url: `${baseUrl}/${lang}/about`,
      siteName: "Samira comida casera",
      title: meta.title,
      description: meta.description,
      images: [
        {
          url: `${baseUrl}/about-restaurant.webp`,
          width: 1200,
          height: 630,
          alt: "Samira Restaurant - Sobre Nosotros",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: meta.title,
      description: meta.description,
      images: [`${baseUrl}/about-restaurant.webp`],
    },
  };
}

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const lang = metaByLocale[locale] ? locale : "es";
  const meta = metaByLocale[lang];

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: lang === "en" ? "Home" : lang === "fr" ? "Accueil" : "Inicio",
        item: `${baseUrl}/${lang}`,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: meta.breadcrumb,
        item: `${baseUrl}/${lang}/about`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
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

