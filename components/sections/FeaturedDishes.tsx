"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { featuredDishes } from "@/lib/menu-data";
import { useLanguage } from "@/context/LanguageContext";
import { menuTranslations } from "@/lib/translations";

const tagColors: Record<string, string> = {
  "Best Seller": "bg-brand-green",
  "Chef's Favourite": "bg-brand-gold",
  Vegetarian: "bg-emerald-600",
  Traditional: "bg-brand-terra",
  "Must Try": "bg-red-655",
  Popular: "bg-blue-655",
  Authentic: "bg-purple-755",
};

export default function FeaturedDishes() {
  const [hovered, setHovered] = useState<number | null>(null);
  const { language, t } = useLanguage();

  return (
    <section id="featured" className="section-padding bg-white">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12.5"
        >
          <span className="section-label mb-3 block font-bold">{t("feat_badge")}</span>
          <h2 className="font-serif font-bold text-3xl md:text-4xl text-gray-900 mb-4">
            {t("feat_title")}{" "}
            <span className="text-brand-green">{t("feat_title_accent")}</span>
          </h2>
          <div className="gold-divider mx-auto mb-4" />
          <p className="text-gray-700 font-sans text-sm md:text-base max-w-xl mx-auto leading-relaxed font-medium">
            {t("feat_desc")}
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {featuredDishes.map((dish, i) => {
            // Get translation lookup safely
            const key = dish.name.toLowerCase();
            const trans = menuTranslations[language]?.[key] || {
              name: dish.name,
              desc: dish.description,
            };
            
            return (
              <motion.div
                key={dish.name}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-20px" }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
                className="group relative bg-white rounded-2xl overflow-hidden border border-brand-gold/10 shadow-sm hover:shadow-xl hover:border-brand-gold/25 transition-all duration-300 cursor-pointer"
              >
                {/* Image box */}
                <div className="relative aspect-dish overflow-hidden">
                  <Image
                    src={dish.image}
                    alt={trans.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/15 to-transparent opacity-85" />

                  {/* Tag label */}
                  {dish.tag && (
                    <div className="absolute top-3 left-3">
                      <span
                        className={`px-2.5 py-1 rounded-full text-[9px] font-bold font-sans tracking-wide uppercase text-white shadow-sm ${
                          tagColors[dish.tag] ?? "bg-gray-700"
                        }`}
                      >
                        {dish.tag}
                      </span>
                    </div>
                  )}

                  {/* Category label */}
                  <div className="absolute top-3 right-3">
                    <span className="px-2 py-0.5 bg-black/45 backdrop-blur-md rounded-full text-[9.5px] text-white/90 font-sans tracking-wider uppercase font-bold">
                      {dish.category}
                    </span>
                  </div>

                  {/* Hover zoom overlay */}
                  {hovered === i && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="absolute inset-0 bg-brand-green/20 flex items-center justify-center pointer-events-none"
                    >
                      <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm border border-white/40 flex items-center justify-center">
                        <svg
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="white"
                          strokeWidth={2.5}
                          className="w-4 h-4"
                        >
                          <path d="M12 5v14M5 12h14" />
                        </svg>
                      </div>
                    </motion.div>
                  )}
                </div>

                {/* Card info */}
                <div className="p-5">
                  <h3 className="font-serif font-bold text-xl text-gray-900 mb-1.5 group-hover:text-brand-green transition-colors">
                    {trans.name}
                  </h3>
                  <p className="text-gray-700 font-sans text-[0.92rem] sm:text-[0.96rem] leading-relaxed line-clamp-2 font-medium">
                    {trans.desc}
                  </p>
                  <div className="mt-4 h-[1px] bg-gradient-to-r from-brand-green to-brand-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Action button */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center mt-10"
        >
          <a
            href="#menu"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById("menu")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="btn-primary"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2.5}
              className="w-4 h-4"
            >
              <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
            </svg>
            {t("feat_btn")}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
