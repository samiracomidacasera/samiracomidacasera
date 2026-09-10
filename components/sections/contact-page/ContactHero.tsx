"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ChevronRight, Clock } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function ContactHero() {
  const { language, t } = useLanguage();
  const [isOpenNow, setIsOpenNow] = useState(true);

  useEffect(() => {
    // Check current time in Spain timezone (Europe/Madrid)
    try {
      const now = new Date();
      const spainTimeStr = now.toLocaleTimeString("en-US", {
        timeZone: "Europe/Madrid",
        hour12: false,
        hour: "numeric",
        minute: "numeric",
      });
      const [hour, minute] = spainTimeStr.split(":").map(Number);
      const decimalTime = hour + minute / 60;
      // 10:00 to 23:30
      setIsOpenNow(decimalTime >= 10 && decimalTime < 23.5);
    } catch {
      setIsOpenNow(true);
    }
  }, []);

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-[#073D27] text-white overflow-hidden moroccan-pattern-dark">
      {/* Ambient background glows */}
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
              {t("breadcrumb_contact")}
            </li>
          </ol>
        </nav>

        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-gold/15 border border-brand-gold/30 text-brand-gold text-xs md:text-sm font-sans font-bold uppercase tracking-wider mb-5"
            >
              <span className="w-2 h-2 rounded-full bg-brand-gold animate-pulse" />
              {t("contact_hero_badge")}
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-serif font-bold text-4xl sm:text-5xl md:text-6xl text-white tracking-tight leading-[1.1] mb-6"
            >
              {t("contact_hero_title")}
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
              {t("contact_hero_subtitle")}
            </motion.p>
          </div>

          {/* Real-time Business Hours Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="bg-white/8 backdrop-blur-md border border-white/15 rounded-2xl p-5 sm:p-6 lg:max-w-xs shrink-0"
          >
            <div className="flex items-center gap-2.5 mb-2.5">
              <span
                className={`w-3 h-3 rounded-full ${
                  isOpenNow ? "bg-emerald-400 animate-pulse" : "bg-amber-400"
                }`}
              />
              <span className="font-sans text-xs sm:text-sm font-bold uppercase tracking-wider text-white">
                {isOpenNow
                  ? t("contact_hours_status_open")
                  : t("contact_hours_status_closed")}
              </span>
            </div>
            <div className="flex items-center gap-2 text-white/80 text-xs sm:text-sm font-sans mb-1">
              <Clock size={15} className="text-brand-gold shrink-0" />
              <span className="font-semibold">10:00 – 23:30</span>
            </div>
            <p className="font-sans text-[11px] text-white/65 leading-snug">
              {t("contact_hours_detail")}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
