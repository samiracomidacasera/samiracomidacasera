import type { Metadata } from "next";
import { Playfair_Display, Outfit } from "next/font/google";
import "../globals.css";
import { LanguageProvider } from "@/context/LanguageContext";
import { notFound } from "next/navigation";

const LOCALES = ["es", "en", "fr"] as const;
type Locale = (typeof LOCALES)[number];

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-serif",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-sans",
  display: "swap",
});

const baseUrl = "https://samiracomidaparallevar.com";

const metaByLocale: Record<Locale, { title: string; description: string; locale: string }> = {
  es: {
    title: "Mejor Restaurante Marroquí en Torremolinos | Samira Comida Para Llevar",
    description:
      "Disfruta de auténtica cocina marroquí casera en Torremolinos. Tajines, Cuscús, Pastilla, Harira. Para llevar, Uber Eats y Catering. Abierto todos los días 10:00–23:30.",
    locale: "es_ES",
  },
  en: {
    title: "Best Moroccan Restaurant in Torremolinos | Samira Comida Para Llevar",
    description:
      "Enjoy authentic homemade Moroccan cuisine in Torremolinos. Tajines, Couscous, Pastilla, Harira. Take Away, Uber Eats & Catering. Open every day 10:00–23:30.",
    locale: "en_GB",
  },
  fr: {
    title: "Meilleur Restaurant Marocain à Torremolinos | Samira Comida Para Llevar",
    description:
      "Savourez une authentique cuisine marocaine maison à Torremolinos. Tajines, Couscous, Pastilla, Harira. À emporter, Uber Eats et Traiteur. Ouvert tous les jours 10h–23h30.",
    locale: "fr_FR",
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!LOCALES.includes(locale as Locale)) return {};
  const lang = locale as Locale;
  const meta = metaByLocale[lang];

  return {
    metadataBase: new URL(baseUrl),
    title: meta.title,
    description: meta.description,
    keywords: [
      "Moroccan Restaurant Torremolinos",
      "Restaurante Marroquí Málaga",
      "Tajine", "Couscous", "Pastilla", "Harira",
      "Halal Restaurant", "Take Away Torremolinos",
      "Uber Eats Torremolinos", "Samira Comida Para Llevar",
      "Comida Marroquí Torremolinos", "Catering Marroquí",
    ],
    authors: [{ name: "Samira Comida Para Llevar" }],
    robots: { index: true, follow: true },
    openGraph: {
      type: "website",
      locale: meta.locale,
      url: `${baseUrl}/${lang}`,
      siteName: "Samira Comida Para Llevar",
      title: meta.title,
      description: meta.description,
      images: [
        {
          url: "/hero.webp",
          width: 1200,
          height: 630,
          alt: "Samira Comida Para Llevar - Authentic Moroccan Restaurant in Torremolinos",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Samira Comida Para Llevar | Moroccan Restaurant Torremolinos",
      description: meta.description,
      images: ["/hero.webp"],
    },
    alternates: {
      canonical: `${baseUrl}/${lang}`,
      languages: {
        "es": `${baseUrl}/es`,
        "en": `${baseUrl}/en`,
        "fr": `${baseUrl}/fr`,
        "x-default": `${baseUrl}/es`,
      },
    },
    icons: {
      icon: [
        { url: "/favicon.ico", sizes: "any" },
        { url: "/icon.png", type: "image/png", sizes: "256x256" },
      ],
      apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
    },
  };
}

export function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}

// JSON-LD Structured Data
const restaurantJsonLd = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  name: "Samira Comida Para Llevar",
  description: "Authentic homemade Moroccan cuisine in Torremolinos.",
  url: baseUrl,
  image: `${baseUrl}/hero.webp`,
  logo: `${baseUrl}/logo.png`,
  telephone: ["+34631615120", "+34722237487"],
  servesCuisine: ["Moroccan", "North African", "Halal", "Mediterranean"],
  priceRange: "€€",
  address: {
    "@type": "PostalAddress",
    streetAddress: "C. Río Aranda, 11, Local 2",
    addressLocality: "Torremolinos",
    addressRegion: "Málaga",
    postalCode: "29620",
    addressCountry: "ES",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 36.6211,
    longitude: -4.4986,
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.6",
    bestRating: "5",
    worstRating: "1",
    reviewCount: "337",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
      opens: "10:00",
      closes: "23:30",
    },
  ],
  hasMap: "https://www.google.com/maps/place/C.+R%C3%ADo+Aranda,+11,+Local+2,+29620+Torremolinos,+M%C3%A1laga",
  hasMenu: `${baseUrl}/es#menu`,
  sameAs: [
    "https://www.ubereats.com/es/store/samira-comida-casera-marroqui/DO4fAewQUH-pb_L20dvrZw",
  ],
};

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!LOCALES.includes(locale as Locale)) {
    notFound();
  }

  return (
    <html lang={locale} className={`${playfair.variable} ${outfit.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* hreflang for SEO */}
        <link rel="alternate" hrefLang="es" href={`${baseUrl}/es`} />
        <link rel="alternate" hrefLang="en" href={`${baseUrl}/en`} />
        <link rel="alternate" hrefLang="fr" href={`${baseUrl}/fr`} />
        <link rel="alternate" hrefLang="x-default" href={`${baseUrl}/es`} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(restaurantJsonLd) }}
        />
      </head>
      <body className={`${outfit.className} antialiased`}>
        <LanguageProvider initialLocale={locale as Locale}>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
