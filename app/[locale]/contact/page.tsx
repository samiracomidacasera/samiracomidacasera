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

const metaByLocale: Record<string, { title: string; description: string; localeCode: string; breadcrumb: string }> = {
  es: {
    title: "Contacto & Pedidos | Samira Comida Casera Torremolinos",
    description:
      "Contacta con Samira Comida Casera en Torremolinos. Teléfono, WhatsApp, pedidos Comida Casera, reservas de mesa, encargos especiales y catering marroquí.",
    localeCode: "es_ES",
    breadcrumb: "Contacto",
  },
  en: {
    title: "Contact & Orders | Samira Comida Casera Torremolinos",
    description:
      "Get in touch with Samira Comida Casera in Torremolinos. Phone, WhatsApp, table reservations, take away orders, special events, and Moroccan catering.",
    localeCode: "en_GB",
    breadcrumb: "Contact",
  },
  fr: {
    title: "Contact & Commandes | Samira Comida Casera Torremolinos",
    description:
      "Contactez Samira Comida Casera à Torremolinos. Téléphone, WhatsApp, réservations de table, commandes à emporter, événements spéciaux et service traiteur.",
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

