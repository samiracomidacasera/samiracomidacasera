"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { PHONE_PRIMARY_RAW } from "@/lib/utils";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { usePathname, useRouter } from "next/navigation";

const langData = {
  es: { flag: "🇪🇸", label: "ESPAN" },
  en: { flag: "🇬🇧", label: "ENG" },
  fr: { flag: "🇫🇷", label: "FRA" },
};

const SECTION_IDS = ["home", "menu", "gallery", "about", "reviews", "contact"] as const;

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  
  const { language, setLanguage, t } = useLanguage();
  const pathname = usePathname();
  const router = useRouter();

  const isHomePage =
    pathname === `/${language}` ||
    pathname === `/${language}/` ||
    pathname === "/" ||
    pathname === "";

  const navLinks = [
    { id: "home", href: isHomePage ? "#home" : `/${language}`, label: t("nav_home") },
    { id: "menu", href: isHomePage ? "#menu" : `/${language}#menu`, label: t("nav_menu") },
    { id: "gallery", href: isHomePage ? "#gallery" : `/${language}#gallery`, label: t("nav_gallery") },
    { id: "about", href: `/${language}/about`, label: t("nav_about") },
    { id: "reviews", href: isHomePage ? "#reviews" : `/${language}#reviews`, label: t("nav_reviews") },
    { id: "contact", href: `/${language}/contact`, label: t("nav_contact") },
  ];

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);

      if (isHomePage) {
        for (const id of [...SECTION_IDS].reverse()) {
          const el = document.getElementById(id);
          if (el && window.scrollY >= el.offsetTop - 110) {
            setActive(id);
            break;
          }
        }
      }
    };

    if (pathname?.includes("/about")) {
      setActive("about");
    } else if (pathname?.includes("/contact")) {
      setActive("contact");
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [pathname, isHomePage]);

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setLangDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleNavClick = useCallback(
    (e: React.MouseEvent, link: { id: string; href: string }) => {
      e.preventDefault();
      setIsOpen(false);

      if (link.href.startsWith("#")) {
        const el = document.getElementById(link.href.slice(1));
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
          return;
        }
      }
      router.push(link.href);
    },
    [router]
  );

  return (
    <>
      <motion.nav
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.55, ease: "easeOut" }}
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-400 ${
          scrolled
            ? "bg-white/96 backdrop-blur-xl shadow-sm border-b border-brand-gold/10"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-[1400px] mx-auto w-full px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-[72px]">
            {/* Logo */}
            <a
              href={`/${language}`}
              onClick={(e) => {
                e.preventDefault();
                if (isHomePage) {
                  window.scrollTo({ top: 0, behavior: "smooth" });
                } else {
                  router.push(`/${language}`);
                }
              }}
              className="flex items-center gap-3 group"
            >
              <div className="relative w-9 h-9 rounded-full overflow-hidden ring-2 ring-brand-gold/20 shrink-0">
                <Image src="/logo.png" alt="Samira Logo" fill className="object-cover" />
              </div>
              <div className="leading-tight">
                <div className={`font-serif font-bold text-[1.25rem] tracking-wide leading-none transition-colors ${scrolled ? "text-brand-green" : "text-white"}`}>
                  Samira
                </div>
                <div className="text-brand-gold font-sans text-[8.5px] tracking-[0.2em] uppercase leading-none mt-1 font-semibold">
                  Comida Casera
                </div>
              </div>
            </a>

            {/* Desktop links */}
            <div className="hidden lg:flex items-center gap-7">
              {navLinks.map((l) => (
                <a
                  key={l.id}
                  href={l.href}
                  onClick={(e) => handleNavClick(e, l)}
                  className={`animated-underline font-sans text-[0.8rem] font-bold tracking-wider uppercase transition-colors duration-200 ${
                    active === l.id
                      ? scrolled ? "text-brand-green font-semibold" : "text-brand-gold font-semibold"
                      : scrolled ? "text-gray-700 hover:text-brand-green" : "text-white/80 hover:text-white"
                  }`}
                >
                  {l.label}
                </a>
              ))}
            </div>

            {/* Language Selector + CTA Buttons */}
            <div className="hidden lg:flex items-center gap-4.5">
              {/* Language Selector Dropdown */}
              <div className="relative" ref={dropdownRef}>
                <button
                  onClick={() => setLangDropdownOpen(!langDropdownOpen)}
                  className={`flex items-center gap-1.5 px-3 py-2 rounded-xl border border-brand-gold/15 bg-white/5 backdrop-blur-md text-[0.8rem] font-bold uppercase font-sans transition-all cursor-pointer ${
                    scrolled 
                      ? "text-gray-700 border-gray-200 hover:bg-brand-cream/50 bg-brand-cream/15" 
                      : "text-white hover:bg-white/10"
                  }`}
                >
                  <span>{langData[language].flag}</span>
                  <span>{langData[language].label}</span>
                  <ChevronDown size={12} className={`transition-transform duration-250 ${langDropdownOpen ? "rotate-180" : ""}`} />
                </button>

                <AnimatePresence>
                  {langDropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.15 }}
                      className="absolute right-0 mt-2 w-36 bg-white rounded-xl shadow-xl border border-brand-gold/10 py-1.5 z-50 overflow-hidden"
                    >
                      {(["es", "en", "fr"] as const).map((lang) => {
                        if (lang === language) return null;
                        return (
                          <button
                            key={lang}
                            onClick={() => {
                              setLanguage(lang);
                              setLangDropdownOpen(false);
                            }}
                            className="w-full text-left px-4 py-2 text-[0.8rem] font-sans font-bold text-gray-700 hover:bg-brand-cream-mid/45 hover:text-brand-green flex items-center gap-2 transition-colors cursor-pointer"
                          >
                            <span>{langData[lang].flag}</span>
                            <span>{langData[lang].label}</span>
                          </button>
                        );
                      })}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Call CTA */}
              <a
                href={`tel:${PHONE_PRIMARY_RAW}`}
                className="flex items-center gap-2 px-4.5 py-2.5 rounded-xl bg-brand-green text-white text-[0.78rem] font-semibold font-sans uppercase tracking-wider hover:bg-brand-green-dark transition-all duration-250 shadow-md shadow-brand-green/20"
              >
                <Phone size={13} />
                {t("nav_call")}
              </a>
            </div>

            {/* Mobile Burger and Language buttons */}
            <div className="lg:hidden flex items-center gap-3">
              {/* Simple inline language indicator to save mobile screen space */}
              <button
                onClick={() => setIsOpen(true)}
                className={`flex items-center gap-1 px-2.5 py-1.5 rounded-lg border border-brand-gold/15 text-[0.7rem] font-bold font-sans uppercase ${
                  scrolled ? "text-gray-750 border-gray-200" : "text-white"
                }`}
              >
                <span>{langData[language].flag}</span>
                <span>{language.toUpperCase()}</span>
              </button>

              <button
                onClick={() => setIsOpen(!isOpen)}
                className={`p-2 rounded-xl transition-colors ${
                  scrolled ? "text-gray-850 hover:bg-brand-cream-mid/50" : "text-white hover:bg-white/10"
                }`}
                aria-label="Toggle menu"
              >
                {isOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-45 lg:hidden"
              onClick={() => setIsOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 280 }}
              className="fixed right-0 top-0 bottom-0 w-64 bg-white z-50 shadow-2xl lg:hidden flex flex-col"
            >
              {/* Header */}
              <div className="flex items-center justify-between px-5 py-[18px] border-b border-brand-cream-mid">
                <div className="leading-tight">
                  <span className="font-serif font-bold text-[1.3rem] text-brand-green leading-none block">Samira</span>
                  <span className="text-brand-gold font-sans text-[8px] tracking-[0.2em] uppercase font-bold">Comida Casera</span>
                </div>
                <button onClick={() => setIsOpen(false)} className="p-1.5 rounded-xl text-gray-400 hover:bg-brand-cream-mid hover:text-gray-700">
                  <X size={18} />
                </button>
              </div>

              {/* Links */}
              <div className="flex-1 py-4 px-4 space-y-1 overflow-y-auto">
                {navLinks.map((l, i) => (
                  <motion.a
                    key={l.id}
                    href={l.href}
                    onClick={(e) => handleNavClick(e, l)}
                    initial={{ opacity: 0, x: 12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.04 }}
                    className={`block py-3 px-4 rounded-xl font-sans text-[0.85rem] font-bold uppercase tracking-wider transition-colors ${
                      active === l.id
                        ? "bg-brand-green/8 text-brand-green font-semibold"
                        : "text-gray-600 hover:bg-brand-cream/40 hover:text-brand-green"
                    }`}
                  >
                    {l.label}
                  </motion.a>
                ))}
              </div>

              {/* Footer with Language switch keys + Call CTA */}
              <div className="px-5 pb-8 pt-4 border-t border-brand-cream-mid space-y-4">
                {/* Language Switch Row */}
                <div>
                  <p className="text-[10px] font-sans font-bold uppercase tracking-wider text-gray-400 mb-2">
                    {language === "es" ? "Idioma" : language === "en" ? "Language" : "Langue"}
                  </p>
                  <div className="grid grid-cols-3 gap-2">
                    {(["es", "en", "fr"] as const).map((lang) => {
                      const isActive = lang === language;
                      return (
                        <button
                          key={lang}
                          onClick={() => setLanguage(lang)}
                          className={`py-2 rounded-xl text-[0.75rem] font-sans font-bold border flex flex-col items-center justify-center gap-1 cursor-pointer transition-all ${
                            isActive
                              ? "bg-brand-green/8 border-brand-green text-brand-green"
                              : "bg-gray-50 border-gray-150 text-gray-600 hover:bg-gray-100"
                          }`}
                        >
                          <span className="text-base leading-none">{langData[lang].flag}</span>
                          <span className="text-[9.5px]">{langData[lang].label}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Call button */}
                <div className="space-y-2.5">
                  <a
                    href={`tel:${PHONE_PRIMARY_RAW}`}
                    className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-brand-green text-white text-sm font-semibold font-sans tracking-wide hover:bg-brand-green-dark transition-colors shadow-md shadow-brand-green/10"
                  >
                    <Phone size={14} />
                    {t("nav_call")}
                  </a>
                  <p className="text-center text-gray-400 text-[10.5px] font-sans tracking-wide">
                    {t("hero_hours")}
                  </p>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
