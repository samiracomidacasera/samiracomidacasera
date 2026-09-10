"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Quote, Sparkles, Heart } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function AboutFounder() {
  const { t } = useLanguage();

  return (
    <section className="section-padding bg-brand-cream relative overflow-hidden moroccan-pattern">
      <div className="container-custom relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Image & floating badge */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-2 border-brand-gold/20 aspect-[4/5] max-w-md mx-auto lg:max-w-none">
              <Image
                src="/about-story.webp"
                alt="Auténtica comida marroquí tradicional - Samira Comida Para Llevar"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 40vw"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

              <div className="absolute bottom-6 left-6 right-6 text-white">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-green text-[11px] font-sans font-bold uppercase tracking-wider text-white mb-2 shadow-md">
                  <Heart size={11} className="text-brand-gold fill-brand-gold" />
                  Torremolinos, España
                </span>
                <p className="font-serif font-bold text-xl text-white">
                  Samira Comida Para Llevar
                </p>
                <p className="font-sans text-xs text-white/80 font-medium">
                  C. Río Aranda, 11
                </p>
              </div>
            </div>

            {/* Decorative floating card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="absolute -bottom-6 -right-3 md:-right-6 bg-white rounded-2xl p-4 md:p-5 shadow-2xl border border-brand-gold/25 hidden sm:flex items-center gap-3.5 max-w-[260px]"
            >
              <div className="w-12 h-12 rounded-xl bg-brand-green flex items-center justify-center text-white shrink-0 shadow-lg">
                <Sparkles size={22} className="text-brand-gold" />
              </div>
              <div>
                <p className="font-serif font-bold text-gray-900 text-sm leading-snug">
                  100% Recetas Caseras
                </p>
                <p className="font-sans text-[11px] text-gray-500 font-medium">
                  Herencia familiar auténtica
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Story & Philosophy */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-green/10 text-brand-green text-xs font-sans font-bold uppercase tracking-wider mb-3">
              {t("about_founder_badge")}
            </div>

            <h2 className="font-serif font-bold text-3xl sm:text-4xl md:text-4.5xl text-gray-900 leading-tight mb-4">
              {t("about_founder_title")}
            </h2>

            <div className="w-20 h-1 bg-brand-gold rounded-full mb-6" />

            <div className="space-y-4 font-sans text-base md:text-[1.05rem] text-gray-700 leading-relaxed font-normal mb-8">
              <p>{t("about_founder_p1")}</p>
              <p>{t("about_founder_p2")}</p>
            </div>

            {/* Signature Quote Card */}
            <div className="relative bg-white rounded-2xl p-6 sm:p-7 shadow-md border-l-4 border-l-brand-gold border-y border-r border-brand-gold/15">
              <Quote
                size={36}
                className="text-brand-gold/30 absolute top-4 right-4"
              />
              <p className="font-serif italic text-lg sm:text-xl text-gray-800 leading-relaxed mb-4">
                &ldquo;{t("about_founder_quote")}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-brand-green text-brand-gold font-serif font-bold text-sm flex items-center justify-center">
                  S
                </div>
                <div>
                  <p className="font-serif font-bold text-gray-900 text-sm">
                    Samira
                  </p>
                  <p className="font-sans text-xs text-brand-green font-semibold">
                    Fundadora & Jefa de Cocina
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
