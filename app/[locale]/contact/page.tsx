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
    title: "Contacto & Pedidos | Samira Comida Para Llevar Torremolinos",
    description:
      "Contacta con Samira Comida Para Llevar en Torremolinos. Teléfono, WhatsApp, pedidos para llevar, encargos especiales y catering marroquí.",
  },
  en: {
    title: "Contact & Orders | Samira Comida Para Llevar Torremolinos",
    description:
      "Get in touch with Samira Comida Para Llevar in Torremolinos. Phone, WhatsApp, take away orders, special events, and Moroccan catering.",
  },
  fr: {
    title: "Contact & Commandes | Samira Comida Para Llevar Torremolinos",
    description:
      "Contactez Samira Comida Para Llevar à Torremolinos. Téléphone, WhatsApp, commandes à emporter, événements spéciaux et service traiteur.",
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
