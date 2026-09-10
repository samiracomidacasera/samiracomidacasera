"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ChevronRight, Award, ShieldCheck, Utensils, Star } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function AboutHero() {
  const { language, t } = useLanguage();

  const stats = [
    {
      value: t("about_stat_exp"),
      label: t("about_stat_exp_sub"),
      icon: Award,
    },
    {
      value: t("about_stat_halal"),
      label: t("about_stat_halal_sub"),
      icon: ShieldCheck,
    },
    {
      value: t("about_stat_recipes"),
      label: t("about_stat_recipes_sub"),
      icon: Utensils,
    },
    {
      value: t("about_stat_love"),
      label: t("about_stat_love_sub"),
      icon: Star,
    },
  ];

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-[#073D27] text-white overflow-hidden moroccan-pattern-dark">
      {/* Decorative ambient orbs */}
      <div className="pointer-events-none absolute -top-24 -right-24 w-96 h-96 rounded-full bg-brand-gold/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-brand-green-light/20 blur-3xl" />

      <div className="container-custom relative z-10">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-6">
          <ol className="flex items-center gap-2 text-xs md:text-sm font-sans text-white/70 font-medium">
            <li>
              <Link
                href={`/${language}`}
                className="hover:text-brand-gold transition-colors"
              >
                {t("breadcrumb_home")}
              </Link>
            </li>
            <li>
              <ChevronRight size={13} className="text-white/40" />
            </li>
            <li className="text-brand-gold font-semibold" aria-current="page">
              {t("breadcrumb_about")}
            </li>
          </ol>
        </nav>

        {/* Title & Badge */}
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-gold/15 border border-brand-gold/30 text-brand-gold text-xs md:text-sm font-sans font-bold uppercase tracking-wider mb-5"
          >
            <span className="w-2 h-2 rounded-full bg-brand-gold animate-pulse" />
            {t("about_hero_badge")}
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-serif font-bold text-4xl sm:text-5xl md:text-6xl text-white tracking-tight leading-[1.1] mb-6"
          >
            {t("about_hero_title")}
          </motion.h1>

          <motion.div
            initial={{ width: 0 }}
            animate={{ width: 80 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="h-1 bg-gradient-to-r from-brand-gold to-brand-gold-light rounded-full mb-6"
          />

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="font-sans text-base sm:text-lg md:text-xl text-white/85 leading-relaxed font-normal"
          >
            {t("about_hero_subtitle")}
          </motion.p>
        </div>

        {/* Key stats grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mt-14"
        >
          {stats.map((s, idx) => {
            const Icon = s.icon;
            return (
              <div
                key={idx}
                className="bg-white/6 backdrop-blur-md border border-white/10 rounded-2xl p-5 md:p-6 hover:bg-white/10 hover:border-brand-gold/30 transition-all duration-300 group"
              >
                <div className="w-10 h-10 rounded-xl bg-brand-gold/20 flex items-center justify-center text-brand-gold mb-3 group-hover:scale-110 transition-transform">
                  <Icon size={20} />
                </div>
                <div className="font-serif font-bold text-2xl md:text-3xl text-white tracking-tight mb-1">
                  {s.value}
                </div>
                <div className="font-sans text-xs md:text-sm text-white/70 font-medium">
                  {s.label}
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
