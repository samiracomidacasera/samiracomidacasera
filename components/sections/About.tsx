"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  CheckCircle,
  Utensils,
  ShoppingBag,
  Bike,
  Star,
  ChefHat,
  Users,
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function About() {
  const { t } = useLanguage();

  const story = [
    t("about_p1"),
    t("about_p2"),
    t("about_p3"),
  ];

  const values = [
    t("about_v1"),
    t("about_v2"),
    t("about_v3"),
    t("about_v4"),
    t("about_v5"),
    t("about_v6"),
  ];

  const services = [
    { name: t("service_dine"), icon: Utensils, bg: "bg-brand-green-dark" },
    { name: t("service_take"), icon: ShoppingBag, bg: "bg-brand-gold" },
    { name: t("service_uber"), icon: Bike, bg: "bg-[#06C167]" },
    { name: t("service_special"), icon: Star, bg: "bg-brand-terra" },
    { name: t("service_catering"), icon: ChefHat, bg: "bg-brand-green-light" },
    { name: t("service_family"), icon: Users, bg: "bg-brand-gold-dark" },
  ];

  return (
    <section
      id="about"
      className="section-padding bg-brand-green moroccan-pattern-dark relative overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="pointer-events-none absolute top-0 right-0 w-80 h-80 bg-brand-gold/8 rounded-full translate-x-1/3 -translate-y-1/3" />
      <div className="pointer-events-none absolute bottom-0 left-0 w-60 h-60 bg-white/4 rounded-full -translate-x-1/3 translate-y-1/3" />

      <div className="container-custom relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 xl:gap-20 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.75 }}
            className="relative w-full max-w-md lg:max-w-none mx-auto"
          >
            <div
              className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[16/10] sm:aspect-[4/3] lg:aspect-[4/5]"
            >
              <Image
                src="/about-story.webp"
                alt="Auténtica comida marroquí tradicional - Tajines y Cuscús casero en Samira"
                fill
                className="object-cover object-center"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 45vw"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
            </div>
            
            {/* Embedded Floating Detail */}
            <div className="absolute -bottom-6 -right-4 bg-white p-4.5 rounded-2xl shadow-xl border border-brand-gold/15 hidden sm:flex items-center gap-3.5 max-w-[240px]">
              <div className="w-10 h-10 rounded-xl bg-brand-gold flex items-center justify-center shrink-0">
                <span className="font-serif font-bold text-white text-lg">10+</span>
              </div>
              <div className="leading-tight">
                <div className="font-serif font-black text-gray-900 text-sm">Años de Amor</div>
                <div className="font-sans text-[10.5px] text-gray-655 font-bold uppercase tracking-wider">Tradición Familiar</div>
              </div>
            </div>
          </motion.div>

          {/* Text Side */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-white"
          >
            <span className="section-label-gold mb-3.5 block font-bold">{t("about_badge")}</span>
            <h2 className="font-serif font-bold text-3.5xl md:text-4.5xl text-white mb-2.5 leading-tight">
              {t("about_title")}{" "}
              <span className="text-brand-gold font-medium italic block sm:inline">
                {t("about_title_accent")}
              </span>{" "}
              {t("about_title_loc")}
            </h2>
            <div className="w-16 h-[2px] bg-brand-gold mb-7" />

            <div className="space-y-4 mb-7 text-white/90 font-sans text-base md:text-[1.02rem] leading-relaxed font-medium">
              {story.map((p, index) => (
                <p key={index}>{p}</p>
              ))}
            </div>

            {/* Core Values checkmarks */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-9">
              {values.map((v) => (
                <div
                  key={v}
                  className="flex items-start gap-2.5"
                >
                  <CheckCircle size={16} className="text-brand-gold shrink-0 mt-0.5" fill="rgba(229,195,84,0.12)" />
                  <span className="text-white/95 font-sans text-[0.92rem] leading-snug font-semibold">{v}</span>
                </div>
              ))}
            </div>

            {/* Services with flexible tags list */}
            <div>
              <p className="text-white/60 font-sans text-[10.5px] uppercase tracking-[0.2em] font-bold mb-4">
                {t("about_services")}
              </p>
              <div className="flex flex-wrap gap-2.5">
                {services.map((s) => {
                  const Icon = s.icon;
                  return (
                    <div
                      key={s.name}
                      className="flex items-center gap-2.5 bg-white/12 border border-white/10 rounded-full pl-2 pr-4.5 py-1.5 hover:bg-white/20 transition-all shadow-sm hover:scale-102 duration-300"
                    >
                      <div className={`w-7 h-7 rounded-full ${s.bg} flex items-center justify-center shrink-0 shadow-md`}>
                        <Icon size={12.5} color="white" />
                      </div>
                      <span className="text-white font-sans text-[0.82rem] font-bold tracking-wide">{s.name}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
