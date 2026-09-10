"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Clock, Sparkles } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function AboutSignatureDishes() {
  const { language, t } = useLanguage();

  const specialties = [
    {
      name: "Tajine de Cordero con Ciruelas",
      subtitle: "Lamb Tajine with Sweet Prunes",
      desc: "Cocinado a fuego muy lento en barro con almendras tostadas, canela y sésamo.",
      image: "/dish-lamb-tajine.webp",
      time: "3-4h Cocción lenta",
      badge: "Estrella",
    },
    {
      name: "Pastela Tradicional de Pollo",
      subtitle: "Artisanal Chicken Pastilla",
      desc: "Masa filo crujiente rellena de pollo especiado, almendras dulces, canela y azúcar glas.",
      image: "/dish-pastilla.webp",
      time: "Elaboración artesanal",
      badge: "Favorito",
    },
    {
      name: "Cuscús Royal con Tfaya",
      subtitle: "Royal Steamed Couscous",
      desc: "Sémola fina al vapor tres veces con verduras de la huerta, garbanzos y cebolla caramelizada.",
      image: "/dish-couscous.webp",
      time: "Sémola al vapor",
      badge: "Tradicional",
    },
    {
      name: "Sopa Harira Casera",
      subtitle: "Traditional Homemade Harira",
      desc: "Rica sopa de tomate fresco, garbanzos, lentejas, apio y cilantro aromatizada con jengibre.",
      image: "/dish-harira.webp",
      time: "Receta de familia",
      badge: "Auténtica",
    },
  ];

  return (
    <section className="section-padding bg-brand-cream-mid/40 relative overflow-hidden moroccan-pattern">
      <div className="container-custom relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-gold/20 text-brand-gold-dark text-xs font-sans font-bold uppercase tracking-wider mb-3">
              <Sparkles size={12} />
              Nuestras Especialidades
            </span>
            <h2 className="font-serif font-bold text-3xl sm:text-4xl md:text-4.5xl text-gray-900 leading-tight">
              Joyas de Nuestra Cocina
            </h2>
          </div>

          <Link
            href={`/${language}#menu`}
            className="inline-flex items-center gap-2 text-brand-green font-sans font-bold text-sm uppercase tracking-wider hover:text-brand-green-dark transition-colors"
          >
            {t("feat_btn")}
            <ArrowRight size={16} />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {specialties.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white rounded-3xl overflow-hidden border border-brand-gold/15 shadow-md hover:shadow-xl transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  <div className="absolute top-3 right-3 bg-brand-green text-white text-[10px] font-sans font-bold uppercase tracking-wider px-2.5 py-1 rounded-full shadow-md">
                    {item.badge}
                  </div>
                </div>

                <div className="p-5">
                  <div className="flex items-center gap-1.5 text-xs text-brand-gold-dark font-sans font-semibold mb-1.5">
                    <Clock size={12} />
                    <span>{item.time}</span>
                  </div>

                  <h3 className="font-serif font-bold text-lg text-gray-900 mb-1 leading-snug group-hover:text-brand-green transition-colors">
                    {item.name}
                  </h3>

                  <p className="font-sans text-xs text-gray-500 italic mb-3">
                    {item.subtitle}
                  </p>

                  <p className="font-sans text-xs text-gray-600 leading-relaxed font-medium">
                    {item.desc}
                  </p>
                </div>
              </div>

              <div className="p-5 pt-0">
                <Link
                  href={`/${language}#menu`}
                  className="block w-full text-center py-2.5 rounded-xl bg-brand-cream hover:bg-brand-green hover:text-white text-gray-700 font-sans text-xs font-bold uppercase tracking-wider transition-colors duration-200"
                >
                  Ver en Carta
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
