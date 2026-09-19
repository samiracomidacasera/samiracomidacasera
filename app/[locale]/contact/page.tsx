import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import FloatingButtons from "@/components/FloatingButtons";
import Footer from "@/components/sections/Footer";
import ContactHero from "@/components/sections/contact-page/ContactHero";
import ContactCards from "@/components/sections/contact-page/ContactCards";
import ReservationSection from "@/components/sections/ReservationSection";
import ContactForm from "@/components/sections/contact-page/ContactForm";
import LocationDetails from "@/components/sections/contact-page/LocationDetails";
import ContactFAQ from "@/components/sections/contact-page/ContactFAQ";

const baseUrl = "https://www.samiracomidacasera.es";

const metaByLocale: Record<
  string,
  {
    title: string;
    description: string;
    keywords: string[];
    localeCode: string;
    breadcrumb: string;
  }
> = {
  es: {
    title: "Restaurante Marroquí en Torremolinos | Contacto & Reservas Samira",
    description:
      "¿Buscas el mejor restaurante marroquí cerca de ti en Torremolinos? Contacta con Samira Comida Casera. Reservas de mesa, pedidos para llevar, 100% Halal y WhatsApp.",
    keywords: [
      "restaurante marroqui cerca de mi",
      "restaurantes marroquies cerca de mi",
      "restaurante marroqui torremolinos",
      "restaurante marroqui malaga",
      "restaurante arabe marroqui halal",
      "mejor restaurante marroqui torremolinos",
      "reserva restaurante marroqui",
      "comida marroqui para llevar torremolinos",
      "samira comida casera contacto",
    ],
    localeCode: "es_ES",
    breadcrumb: "Contacto",
  },
  en: {
    title: "Moroccan Restaurant in Torremolinos | Contact & Table Booking Samira",
    description:
      "Looking for the best Moroccan restaurant near you in Torremolinos? Book a table, order takeaway or contact Samira Comida Casera. 100% Halal, phone & WhatsApp.",
    keywords: [
      "moroccan restaurant near me",
      "moroccan restaurant torremolinos",
      "best moroccan restaurant malaga",
      "halal moroccan restaurant torremolinos",
      "book a table moroccan food",
      "take away moroccan torremolinos",
      "samira moroccan restaurant contact",
    ],
    localeCode: "en_GB",
    breadcrumb: "Contact",
  },
  fr: {
    title: "Restaurant Marocain à Torremolinos | Contact & Réservations Samira",
    description:
      "Vous cherchez le meilleur restaurant marocain près de chez vous à Torremolinos ? Réservez une table, commandez à emporter chez Samira. 100% Halal, tél & WhatsApp.",
    keywords: [
      "restaurant marocain pres de moi",
      "restaurant marocain torremolinos",
      "meilleur restaurant marocain malaga",
      "restaurant halal torremolinos",
      "reservation restaurant marocain",
      "plats a emporter torremolinos",
      "samira restaurant marocain contact",
    ],
    localeCode: "fr_FR",
    breadcrumb: "Contact",
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
    keywords: meta.keywords,
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
      canonical: `${baseUrl}/${lang}/contact`,
      languages: {
        es: `${baseUrl}/es/contact`,
        en: `${baseUrl}/en/contact`,
        fr: `${baseUrl}/fr/contact`,
        "x-default": `${baseUrl}/es/contact`,
      },
    },
    openGraph: {
      type: "website",
      locale: meta.localeCode,
      url: `${baseUrl}/${lang}/contact`,
      siteName: "Samira comida casera",
      title: meta.title,
      description: meta.description,
      images: [
        {
          url: `${baseUrl}/hero.webp`,
          width: 1200,
          height: 630,
          alt: "Samira Restaurant - Contacto",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: meta.title,
      description: meta.description,
      images: [`${baseUrl}/hero.webp`],
    },
  };
}

export default async function ContactPage({
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
        item: `${baseUrl}/${lang}/contact`,
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
        <ContactHero />
        <ContactCards />
        <ReservationSection />
        <ContactForm />
        <LocationDetails />
        <ContactFAQ />
      </main>
      <Footer />
    </>
  );
}

