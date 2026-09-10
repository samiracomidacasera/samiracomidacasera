"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { MapPin, Phone, ChevronDown, Star, Clock, Store, UtensilsCrossed, ShieldCheck } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import {
  UBER_EATS_URL,
  PHONE_PRIMARY_RAW,
  GOOGLE_MAPS_URL,
} from "@/lib/utils";

const RESTAURANT_IMAGES = [
  {
    id: "vitrina",
    src: "/restaurant/vitrina.webp",
    labelEs: "Vitrina de Comida Fresca",
    labelEn: "Fresh Food Display",
    labelFr: "Vitrine de Plats Frais",
    tag: "A Diario",
  },
  {
    id: "facade",
    src: "/restaurant/facade.webp",
    labelEs: "Fachada del Restaurante",
    labelEn: "Restaurant Storefront",
    labelFr: "Façade du Restaurant",
    tag: "Torremolinos",
  },
  {
    id: "interior",
    src: "/restaurant/interior.webp",
    labelEs: "Interior y Salón",
    labelEn: "Restaurant Interior",
    labelFr: "Intérieur & Salle",
    tag: "Acogedor",
  },
  {
    id: "counter",
    src: "/restaurant/counter-tagines.webp",
    labelEs: "Tajines y Dulces Árabes",
    labelEn: "Tajines & Sweets Display",
    labelFr: "Tajines et Délices",
    tag: "Tradicional",
  },
];

export default function Hero() {
  const [activePhoto, setActivePhoto] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const { language, t } = useLanguage();

  // Auto-rotate photos every 5 seconds unless user manually interacts
  useEffect(() => {
    if (!isAutoPlaying) return;
    const timer = setInterval(() => {
      setActivePhoto((prev) => (prev + 1) % RESTAURANT_IMAGES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [isAutoPlaying]);

  const scrollToMenu = () => {
    document.getElementById("menu")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToNext = () => {
    document.getElementById("why-us")?.scrollIntoView({ behavior: "smooth" });
  };

  const currentImg = RESTAURANT_IMAGES[activePhoto];
  const photoLabel =
    language === "fr"
      ? currentImg.labelFr
      : language === "en"
      ? currentImg.labelEn
      : currentImg.labelEs;

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#072118] pt-24 pb-12 lg:py-0"
    >
      {/* Clean luxury background with Moroccan subtle pattern & ambient glows */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Soft Radial glows for warmth and depth */}
        <div className="absolute top-1/4 left-10 w-[600px] h-[500px] bg-gradient-to-br from-brand-gold/15 to-transparent blur-3xl opacity-50" />
        <div className="absolute bottom-10 right-10 w-[600px] h-[500px] bg-emerald-600/10 blur-3xl opacity-40" />

        {/* Moroccan geometric zellige tiling overlay */}
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M40 8l6 14 14 6-14 6-6 14-6-14-14-6 14-6z' fill='%23C9A227' fill-opacity='0.6'/%3E%3C/svg%3E")`,
          }}
        />
        {/* Deep ambient vignette */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60" />
      </div>

      {/* Main Content: 2-Column Grid on Desktop */}
      <div className="relative z-10 max-w-[1400px] mx-auto w-full px-4 sm:px-6 lg:px-8 py-8 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 xl:gap-16 items-center">
          
          {/* ========================================================
              COLUMN 1: Text, Information & Actions (Left Side)
              ======================================================== */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.75 }}
            className="lg:col-span-5 flex flex-col items-center lg:items-start text-center lg:text-left"
          >
            {/* Quality Rating Pill */}
            <div className="inline-flex items-center gap-2 bg-brand-gold/15 backdrop-blur-md border border-brand-gold/40 rounded-full px-4 py-1.5 mb-5">
              <Star size={11} className="text-brand-gold fill-brand-gold" />
              <span className="text-brand-gold text-[11px] font-bold tracking-[0.2em] uppercase font-sans">
                {t("hero_badge")}
              </span>
              <Star size={11} className="text-brand-gold fill-brand-gold" />
            </div>

            {/* Main Heading */}
            <h1
              className="font-serif font-bold text-white tracking-wide mb-4 leading-[1.12]"
              style={{ fontSize: "clamp(2.1rem, 3.8vw, 3.5rem)" }}
            >
              {t("hero_title_1")}{" "}
              <span className="text-gradient-gold block sm:inline">{t("hero_title_2")}</span>{" "}
              <span className="font-light italic text-[0.88em] opacity-95 block sm:inline">
                {t("hero_title_3")}
              </span>
            </h1>

            {/* Moroccan Star Divider */}
            <div className="flex items-center gap-3.5 mb-5 mx-auto lg:mx-0">
              <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-brand-gold" />
              <span className="text-brand-gold text-sm">✦</span>
              <div className="h-[1px] w-16 bg-gradient-to-l from-transparent to-brand-gold" />
            </div>

            {/* Subtitle Description */}
            <p
              className="text-white/85 font-sans font-light max-w-xl mb-6 leading-relaxed"
              style={{ fontSize: "clamp(0.95rem, 1.3vw, 1.08rem)" }}
            >
              {t("hero_desc")}
            </p>

            {/* Opening Hours & Address Pills */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-2.5 mb-8">
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md rounded-full px-4 py-2 border border-white/12">
                <Clock size={13} className="text-brand-gold shrink-0" />
                <span className="text-white/95 text-xs font-sans font-medium">
                  {t("hero_hours")}
                </span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md rounded-full px-4 py-2 border border-white/12">
                <MapPin size={13} className="text-brand-gold shrink-0" />
                <span className="text-white/95 text-xs font-sans font-medium">
                  {t("hero_address")}
                </span>
              </div>
            </div>

            {/* CTA Action Buttons */}
            <div className="flex flex-wrap justify-center lg:justify-start items-center gap-3 w-full sm:w-auto">
              <button
                onClick={scrollToMenu}
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-brand-gold text-white text-xs sm:text-[0.82rem] font-bold font-sans uppercase tracking-wider hover:bg-brand-gold-dark transition-all duration-300 hover:-translate-y-0.5 shadow-lg shadow-brand-gold/25 cursor-pointer"
              >
                <UtensilsCrossed size={15} />
                {t("hero_btn_menu")}
              </button>

              <a
                href={`tel:${PHONE_PRIMARY_RAW}`}
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl border-2 border-white/70 text-white text-xs sm:text-[0.82rem] font-bold font-sans uppercase tracking-wider hover:bg-white/10 hover:border-white transition-all duration-300 hover:-translate-y-0.5"
              >
                <Phone size={14} />
                {t("hero_btn_call")}
              </a>

              <a
                href={UBER_EATS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#06C167] text-white text-xs sm:text-[0.82rem] font-bold font-sans uppercase tracking-wider hover:bg-[#04a355] transition-all duration-300 hover:-translate-y-0.5 shadow-lg shadow-[#06C167]/25"
              >
                <svg viewBox="0 0 24 24" fill="white" className="w-4 h-4">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z" />
                </svg>
                {t("hero_btn_uber")}
              </a>

              <a
                href={GOOGLE_MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl border-2 border-white/70 text-white text-xs sm:text-[0.82rem] font-bold font-sans uppercase tracking-wider hover:bg-white/10 hover:border-white transition-all duration-300 hover:-translate-y-0.5"
              >
                <MapPin size={14} />
                {t("hero_btn_map")}
              </a>
            </div>

            {/* Micro guarantee badge */}
            <div className="mt-6 flex items-center gap-2 text-white/60 text-xs font-sans">
              <ShieldCheck size={14} className="text-brand-gold" />
              <span>Comida casera auténtica • 100% Halal • Elaboración diaria</span>
            </div>
          </motion.div>

          {/* ========================================================
              COLUMN 2: Restaurant Visual Showcase (Right Side - Enlarged)
              ======================================================== */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.75, delay: 0.15 }}
            className="lg:col-span-7 w-full flex flex-col items-center"
          >
            {/* Main Interactive Photo Frame - Enlarged to 500-540px on desktop */}
            <div className="relative w-full h-80 sm:h-96 md:h-[460px] lg:h-[500px] xl:h-[540px] rounded-2xl sm:rounded-3xl overflow-hidden border-2 border-brand-gold/35 shadow-2xl shadow-black/70 group bg-black/40">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentImg.id}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.6 }}
                  className="absolute inset-0"
                >
                  <Image
                    src={currentImg.src}
                    alt={photoLabel}
                    fill
                    priority
                    quality={92}
                    className="object-cover transition-transform duration-700 group-hover:scale-103"
                    style={{
                      objectPosition: currentImg.id === "facade" ? "center 15%" : "center",
                    }}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 60vw, 750px"
                  />
                  {/* Elegant Gradient overlays */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/15 to-black/35" />
                </motion.div>
              </AnimatePresence>

              {/* Floating Badge Top-Left: Address */}
              <div className="absolute top-4 left-4 sm:top-5 sm:left-5 z-10 flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/65 backdrop-blur-md border border-white/15 text-white text-xs font-sans font-medium shadow-md">
                <MapPin size={12} className="text-brand-gold shrink-0" />
                <span>C. Río Aranda, 11 • Torremolinos</span>
              </div>

              {/* Floating Badge Top-Right: Google Rating */}
              <div className="absolute top-4 right-4 sm:top-5 sm:right-5 z-10 flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-black/65 backdrop-blur-md border border-brand-gold/40 text-white text-xs font-sans font-bold shadow-md">
                <Star size={12} className="text-brand-gold fill-brand-gold shrink-0" />
                <span className="text-brand-gold">4.6</span>
                <span className="text-white/80 font-normal">(337+ Reseñas)</span>
              </div>

              {/* Bottom Caption Overlay */}
              <div className="absolute bottom-4 left-4 right-4 sm:bottom-5 sm:left-5 sm:right-5 z-10 flex items-end justify-between gap-3">
                <div>
                  <span className="inline-block px-2.5 py-0.5 mb-1.5 rounded text-[10px] font-bold uppercase tracking-wider bg-brand-gold text-[#072118]">
                    {currentImg.tag}
                  </span>
                  <h3 className="font-serif text-white font-bold text-lg sm:text-2xl leading-tight drop-shadow-md">
                    {photoLabel}
                  </h3>
                </div>

                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/12 backdrop-blur-md border border-white/15 text-white text-xs font-sans font-medium">
                  <Store size={13} className="text-brand-gold" />
                  <span>Local Samira</span>
                </div>
              </div>
            </div>

            {/* Quick Switcher Thumbnails / Buttons below the photo */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3 w-full mt-4">
              {RESTAURANT_IMAGES.map((img, idx) => {
                const active = idx === activePhoto;
                return (
                  <button
                    key={img.id}
                    onClick={() => {
                      setActivePhoto(idx);
                      setIsAutoPlaying(false);
                    }}
                    className={`flex items-center gap-2.5 p-2.5 rounded-xl border text-left transition-all duration-300 cursor-pointer ${
                      active
                        ? "bg-brand-gold/20 text-white border-brand-gold shadow-md shadow-brand-gold/20 scale-102"
                        : "bg-white/5 text-white/75 border-white/10 hover:bg-white/12 hover:text-white"
                    }`}
                  >
                    <div className="relative w-8 h-8 sm:w-9 sm:h-9 rounded-lg overflow-hidden shrink-0 border border-white/20">
                      <Image src={img.src} alt="" fill className="object-cover" />
                    </div>
                    <div className="min-w-0 flex-1 leading-snug">
                      <span className={`block text-xs font-sans font-semibold truncate ${active ? "text-brand-gold" : "text-white/85"}`}>
                        {language === "fr" ? img.labelFr : language === "en" ? img.labelEn : img.labelEs}
                      </span>
                      <span className="block text-[10px] text-white/50 font-sans">
                        {img.tag}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>
          </motion.div>

        </div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.button
        onClick={scrollToNext}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-3 left-1/2 -translate-x-1/2 flex flex-col items-center gap-0.5 text-white/40 hover:text-white/80 transition-colors cursor-pointer"
        aria-label="Scroll down"
      >
        <span className="text-[8.5px] font-sans tracking-[0.25em] uppercase font-bold">Scroll</span>
        <motion.div
          animate={{ y: [0, 4, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown size={14} />
        </motion.div>
      </motion.button>
    </section>
  );
}
