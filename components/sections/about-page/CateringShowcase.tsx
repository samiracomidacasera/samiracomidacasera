"use client";

import { motion } from "framer-motion";
import { Users, Phone, CalendarCheck, UtensilsCrossed } from "lucide-react";
import { WHATSAPP_URL, PHONE_PRIMARY_RAW } from "@/lib/utils";
import { useLanguage } from "@/context/LanguageContext";

export default function CateringShowcase() {
  const { t } = useLanguage();

  const cateringDishes = [
    {
      title: "Pastela Gigante Familiar",
      desc: "Hasta 10-12 raciones de crujiente hojaldre relleno de pollo y almendras dulces.",
      badge: "Banquetes",
    },
    {
      title: "Pierna o Paletilla de Cordero",
      desc: "Asado a fuego lento al horno tradicional marroquí hasta quedar tierno y jugoso.",
      badge: "Celebración",
    },
    {
      title: "Cuscús para Grupos & Familias",
      desc: "Gran bandeja de cuscús tradicional con carnes selectas y abundantes verduras.",
      badge: "Para Compartir",
    },
    {
      title: "Rfissa & Seffa Festivas",
      desc: "Platos tradicionales de fiesta elaborados con ingredientes de fiesta marroquí.",
      badge: "Especial",
    },
  ];

  return (
    <section className="section-padding bg-brand-green moroccan-pattern-dark text-white relative overflow-hidden">
      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Text & CTAs */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6"
          >
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-brand-gold text-xs font-sans font-bold uppercase tracking-wider mb-3">
              <Users size={12} />
              {t("about_catering_badge")}
            </span>

            <h2 className="font-serif font-bold text-3xl sm:text-4xl md:text-4.5xl text-white leading-tight mb-4">
              {t("about_catering_title")}
            </h2>

            <div className="w-20 h-1 bg-brand-gold rounded-full mb-6" />

            <p className="font-sans text-base sm:text-lg text-white/90 leading-relaxed font-normal mb-8">
              {t("about_catering_desc")}
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                <CalendarCheck size={16} />
                {t("about_catering_cta")}
              </a>

              <a
                href={`tel:${PHONE_PRIMARY_RAW}`}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white/15 hover:bg-white/25 border border-white/20 text-white font-sans text-xs sm:text-sm font-bold uppercase tracking-wider transition-all duration-300"
              >
                <Phone size={15} />
                {t("nav_call")}
              </a>
            </div>
          </motion.div>

          {/* Dishes feature cards */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {cateringDishes.map((dish, i) => (
              <div
                key={i}
                className="bg-white/8 backdrop-blur-md rounded-2xl p-5 border border-white/12 hover:bg-white/15 hover:border-brand-gold/40 transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="w-8 h-8 rounded-lg bg-brand-gold/20 flex items-center justify-center text-brand-gold">
                    <UtensilsCrossed size={16} />
                  </div>
                  <span className="text-[10px] font-sans font-bold uppercase tracking-wider text-brand-gold px-2 py-0.5 rounded-full bg-brand-gold/15">
                    {dish.badge}
                  </span>
                </div>
                <h3 className="font-serif font-bold text-base text-white mb-1.5">
                  {dish.title}
                </h3>
                <p className="font-sans text-xs text-white/75 leading-relaxed">
                  {dish.desc}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
