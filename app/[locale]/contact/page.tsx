import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import FloatingButtons from "@/components/FloatingButtons";
import Footer from "@/components/sections/Footer";
import ContactHero from "@/components/sections/contact-page/ContactHero";
import ContactCards from "@/components/sections/contact-page/ContactCards";
import ContactForm from "@/components/sections/contact-page/ContactForm";
import LocationDetails from "@/components/sections/contact-page/LocationDetails";
import ContactFAQ from "@/components/sections/contact-page/ContactFAQ";

const metaByLocale: Record<string, { title: string; description: string }> = {
  es: {
    title: "Contacto & Pedidos | Samira Comida Casera Torremolinos",
    description:
      "Contacta con Samira Comida Casera en Torremolinos. Teléfono, WhatsApp, pedidos Comida Casera, encargos especiales y catering marroquí.",
  },
  en: {
    title: "Contact & Orders | Samira Comida Casera Torremolinos",
    description:
      "Get in touch with Samira Comida Casera in Torremolinos. Phone, WhatsApp, take away orders, special events, and Moroccan catering.",
  },
  fr: {
    title: "Contact & Commandes | Samira Comida Casera Torremolinos",
    description:
      "Contactez Samira Comida Casera à Torremolinos. Téléphone, WhatsApp, commandes à emporter, événements spéciaux et service traiteur.",
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
      images: [{ url: "/hero.webp", width: 1200, height: 630, alt: "Samira Restaurant Contact" }],
    },
  };
}

export default function ContactPage() {
  return (
    <>
      <Navigation />
      <FloatingButtons />
      <main>
        <ContactHero />
        <ContactCards />
        <ContactForm />
        <LocationDetails />
        <ContactFAQ />
      </main>
      <Footer />
    </>
  );
}
