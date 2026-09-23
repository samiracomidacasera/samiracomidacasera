"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

type SpecialtyItem = {
  id: string;
  name: Record<"es" | "en" | "fr", string>;
  description: Record<"es" | "en" | "fr", string>;
  price: string;
  image: string;
  tag?: Record<"es" | "en" | "fr", string>;
};

const specialtiesData: SpecialtyItem[] = [
  {
    id: "cuscus-pollo",
    name: {
      es: "Cous Cous de Pollo",
      en: "Chicken Couscous",
      fr: "Couscous au Poulet",
    },
    description: {
      es: "Sémola fina al vapor con verduras frescas, garbanzos y cebolla caramelizada con pasas (Tfaya)",
      en: "Fluffy steamed semolina with garden vegetables, chickpeas and sweet caramelized onion with raisins",
      fr: "Semoule fine à la vapeur avec légumes frais, pois chiches et oignons caramélisés aux raisins (Tfaya)",
    },
    price: "15,00€",
    image: "/dishes/cuscus-pollo.webp",
    tag: {
      es: "Especial Viernes",
      en: "Friday Special",
      fr: "Spécial Vendredi",
    },
  },
  {
    id: "pastela-pollo",
    name: {
      es: "Pastela de Pollo",
      en: "Chicken Pastilla",
      fr: "Pastilla au Poulet",
    },
    description: {
      es: "Hojaldre crujiente artesanal relleno de pollo especiado, almendras tostadas, canela y azúcar glas",
      en: "Crispy handmade warqa pastry filled with spiced chicken, roasted almonds, cinnamon and sugar",
      fr: "Feuilleté croustillant artisanal au poulet épicé, amandes grillées, cannelle et sucre glace",
    },
    price: "10,00€",
    image: "/dishes/pastela-pollo.webp",
    tag: {
      es: "Artesanal",
      en: "Handmade",
      fr: "Artisanal",
    },
  },
  {
    id: "tajine-pollo",
    name: {
      es: "Tajine de Pollo",
      en: "Chicken Tajine",
      fr: "Tajine de Poulet",
    },
    description: {
      es: "Cocer a fuego lento en barro tradicional con limones confitados, aceitunas y salsa de azafrán",
      en: "Slow-cooked in traditional clay pot with preserved lemons, green olives and saffron sauce",
      fr: "Mijoté à feu doux en plat de terre cuite avec citrons confits, olives et sauce au safran",
    },
    price: "15,00€",
    image: "/dishes/tajine-pollo.webp",
    tag: {
      es: "Best Seller",
      en: "Best Seller",
      fr: "Best Seller",
    },
  },
  {
    id: "harira",
    name: {
      es: "Harira Tradicional",
      en: "Traditional Harira",
      fr: "Harira Traditionnelle",
    },
    description: {
      es: "Sopa nutritiva con tomate maduro, garbanzos, lentejas, ternera y cilantro fresco recién picado",
      en: "Rich Moroccan tomato soup with chickpeas, lentils, tender meat and fresh garden herbs",
      fr: "Soupe nutritive à la tomate mûre, pois chiches, lentilles, viande tendre et coriandre fraîche",
    },
    price: "6,00€",
    image: "/dishes/harira.webp",
    tag: {
      es: "Casera",
      en: "Homemade",
      fr: "Fait Maison",
    },
  },
  {
    id: "tajine-cordero",
    name: {
      es: "Tajine de Cordero",
      en: "Lamb Tajine",
      fr: "Tajine d'Agneau",
    },
    description: {
      es: "Cordero tierno guisado despacio con ciruelas dulces caramelizadas, almendras tostadas y sésamo",
      en: "Tender lamb shoulder braised with sweet caramelized prunes, toasted almonds and sesame seeds",
      fr: "Agneau fondant mijoté avec pruneaux caramélisés, amandes grillées et graines de sésame",
    },
    price: "17,00€",
    image: "/dishes/tajine-cordero.webp",
    tag: {
      es: "Recomendado",
      en: "Chef's Choice",
      fr: "Recommandé",
    },
  },
  {
    id: "tajine-ternera",
    name: {
      es: "Tajine de Ternera",
      en: "Beef Tajine",
      fr: "Tajine de Bœuf",
    },
    description: {
      es: "Ternera melosa cocinada a fuego suave con verduras de temporada y especias aromáticas del Atlas",
      en: "Tender beef braised with seasonal market vegetables and aromatic Atlas mountain spices",
      fr: "Bœuf fondant cuit à feu doux avec légumes de saison et épices aromatiques de l'Atlas",
    },
    price: "15,00€",
    image: "/dishes/tajine-ternera.webp",
    tag: {
      es: "100% Halal",
      en: "100% Halal",
      fr: "100% Halal",
    },
  },
];

const sectionTexts = {
  es: {
    title: "Especialidades de la Casa",
    subtitle:
      "Los favoritos de nuestros clientes en Torremolinos. Platos tradicionales marroquíes preparados con recetas auténticas y productos halal.",
    cta: "Ver Nuestra Carta →",
  },
  en: {
    title: "House Specialties",
    subtitle:
      "Our guests' favorites in Torremolinos. Traditional Moroccan dishes prepared with authentic recipes and 100% Halal certified products.",
    cta: "View Our Menu →",
  },
  fr: {
    title: "Spécialités de la Maison",
    subtitle:
      "Les favoris de nos clients à Torremolinos. Plats traditionnels marocains préparés avec des recettes authentiques et des produits 100% Halal.",
    cta: "Voir Notre Carte →",
  },
};

export default function HouseSpecialties() {
  const { language } = useLanguage();
  const langKey = (["es", "en", "fr"].includes(language) ? language : "es") as "es" | "en" | "fr";
  const texts = sectionTexts[langKey];

  const handleMenuClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const menuEl = document.getElementById("menu");
    if (menuEl) {
      menuEl.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="especialidades"
      className="section-padding bg-brand-white relative overflow-hidden"
    >
      <div className="container-custom relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-12 sm:mb-14 md:mb-16"
        >
          {/* Subtle gold badge above title */}
          <span className="section-label mb-3 block font-bold text-center">
            Torremolinos 100% Halal
          </span>

          {/* Main Title - H2 for strict SEO hierarchy */}
          <h2 className="font-serif font-bold text-3xl sm:text-4xl md:text-5xl text-gray-900 tracking-tight leading-tight mb-4 drop-shadow-sm">
            {texts.title}
          </h2>

          <div className="gold-divider mx-auto mb-4" />

          {/* Subtitle */}
          <p className="font-sans text-gray-700 text-sm sm:text-base md:text-[1.02rem] leading-relaxed font-medium">
            {texts.subtitle}
          </p>
        </motion.div>

        {/* 3-Column Specialties Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 md:gap-8">
          {specialtiesData.map((dish, idx) => {
            const name = dish.name[langKey];
            const desc = dish.description[langKey];
            const tag = dish.tag?.[langKey];

            return (
              <motion.article
                key={dish.id}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.5, delay: idx * 0.07 }}
                className="group relative bg-white rounded-2xl overflow-hidden border border-brand-gold/15 hover:border-brand-gold/45 shadow-sm hover:shadow-xl hover:shadow-brand-green/5 transition-all duration-300 flex flex-col hover:-translate-y-1.5"
              >
                {/* Photo container */}
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-gray-100">
                  <Image
                    src={dish.image}
                    alt={name}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-106"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  {/* Bottom shadow overlay for smooth transition */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60" />

                  {/* Badge tag */}
                  {tag && (
                    <div className="absolute top-3.5 left-3.5 z-10">
                      <span className="inline-block px-3 py-1 rounded-full text-[10.5px] font-sans font-bold uppercase tracking-wider bg-brand-green text-white shadow-sm">
                        {tag}
                      </span>
                    </div>
                  )}
                </div>

                {/* Content body */}
                <div className="p-5 sm:p-6 flex flex-col flex-1">
                  {/* Dish Title - H3 for SEO compliance */}
                  <h3 className="font-serif font-bold text-xl sm:text-2xl text-gray-900 group-hover:text-brand-green transition-colors mb-2.5 leading-snug">
                    {name}
                  </h3>

                  {/* Description */}
                  <p className="font-sans text-gray-600 text-xs sm:text-[0.88rem] leading-relaxed mb-6 line-clamp-2 flex-1 font-normal">
                    {desc}
                  </p>

                  {/* Bottom bar: Price & Link */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100 mt-auto">
                    <span className="font-serif font-bold text-brand-green text-lg sm:text-xl tracking-tight">
                      {dish.price}
                    </span>

                    <a
                      href="#menu"
                      onClick={handleMenuClick}
                      className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-sans font-semibold text-brand-gold-dark hover:text-brand-green transition-colors cursor-pointer group-hover:translate-x-1 duration-200"
                    >
                      {texts.cta}
                    </a>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
