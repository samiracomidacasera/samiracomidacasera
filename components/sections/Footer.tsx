"use client";

import { MapPin, Phone, Clock, ExternalLink } from "lucide-react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import {
  PHONE_PRIMARY,
  PHONE_SECONDARY,
  PHONE_PRIMARY_RAW,
  PHONE_SECONDARY_RAW,
  WHATSAPP_URL,
  UBER_EATS_URL,
  GOOGLE_MAPS_URL,
} from "@/lib/utils";

const socials = [
  {
    name: "WhatsApp",
    href: WHATSAPP_URL,
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
    ),
    hoverColor: "hover:text-[#25D366] hover:border-[#25D366]/20",
  },
  {
    name: "Uber Eats",
    href: UBER_EATS_URL,
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z" />
      </svg>
    ),
    hoverColor: "hover:text-[#06C167] hover:border-[#06C167]/20",
  },
];

import { usePathname, useRouter } from "next/navigation";

export default function Footer() {
  const { language, t } = useLanguage();
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

  const handleLinkClick = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    if (href.startsWith("#")) {
      const el = document.getElementById(href.slice(1));
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
        return;
      }
    }
    router.push(href);
  };

  return (
    <footer className="bg-[#080f0a] text-white">
      {/* Ornate Gold border divider */}
      <div className="h-[1px] bg-gradient-to-r from-brand-green via-brand-gold/60 to-brand-terra" />

      {/* Main Container */}
      <div className="container-custom py-12 md:py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8.5">
          {/* Logo brand info column */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="relative w-10 h-10 rounded-full overflow-hidden ring-2 ring-brand-gold/25 shrink-0">
                <Image src="/logo.png" alt="Samira Logo" fill className="object-cover" />
              </div>
              <div className="leading-tight">
                <div className="font-serif font-bold text-[1.15rem] text-white">Samira</div>
                <div className="font-sans text-[8.5px] text-brand-gold tracking-[0.18em] uppercase font-bold">Comida Para Llevar</div>
              </div>
            </div>
            <p className="text-white/75 font-sans text-[0.8rem] leading-relaxed mb-5.5 font-medium">
              {t("foot_desc")}
            </p>
            <div className="flex gap-2">
              {socials.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.name}
                  className={`w-8 h-8 rounded-lg bg-white/10 border border-white/15 flex items-center justify-center text-white/70 ${s.hoverColor} transition-all duration-200 cursor-pointer`}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick links list column */}
          <div>
            <h4 className="font-serif font-bold text-[1.05rem] text-white mb-4">
              {t("foot_col_links")}
            </h4>
            <div className="space-y-2">
              {navLinks.map((l) => (
                <a
                  key={l.id}
                  href={l.href}
                  onClick={(e) => handleLinkClick(e, l.href)}
                  className="flex items-center gap-2 text-white/70 hover:text-brand-gold font-sans text-[0.8rem] transition-colors group cursor-pointer font-medium"
                >
                  <span className="w-1 h-1 rounded-full bg-brand-gold/50 group-hover:bg-brand-gold transition-colors shrink-0" />
                  {l.label}
                </a>
              ))}
            </div>
          </div>

          {/* Contact Details Column */}
          <div>
            <h4 className="font-serif font-bold text-[1.05rem] text-white mb-4">
              {t("foot_col_contact")}
            </h4>
            <div className="space-y-4">
              <div className="flex items-start gap-2.5">
                <MapPin size={14} className="text-brand-gold mt-0.5 shrink-0" />
                <div className="leading-tight font-medium">
                  <p className="text-white/75 font-sans text-[0.78rem] leading-relaxed">
                    C. Río Aranda, 11, Local 2<br />29620 Torremolinos, Málaga
                  </p>
                  <a
                    href={GOOGLE_MAPS_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 mt-1.5 text-brand-gold hover:text-brand-gold-light text-[10.5px] font-sans transition-colors font-bold"
                  >
                    <ExternalLink size={10} /> {t("map_address_link")}
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <Phone size={14} className="text-brand-gold mt-0.5 shrink-0" />
                <div className="space-y-1 font-sans text-[0.78rem] font-medium">
                  <a href={`tel:${PHONE_PRIMARY_RAW}`} className="block text-white/70 hover:text-white transition-colors">{PHONE_PRIMARY}</a>
                  <a href={`tel:${PHONE_SECONDARY_RAW}`} className="block text-white/70 hover:text-white transition-colors">{PHONE_SECONDARY}</a>
                </div>
              </div>
            </div>
          </div>

          {/* Opening hours status column */}
          <div>
            <h4 className="font-serif font-bold text-[1.05rem] text-white mb-4">
              {t("foot_col_hours")}
            </h4>
            <div className="flex items-start gap-2.5 mb-4">
              <Clock size={14} className="text-brand-gold mt-0.5 shrink-0" />
              <div className="leading-tight">
                <p className="text-white/90 font-sans text-[0.8rem] font-bold">{t("map_hours_days")}</p>
                <p className="text-white/70 font-sans text-[0.78rem] mt-1 font-medium">10:00 AM – 11:30 PM</p>
              </div>
            </div>
            <div className="p-3.5 bg-brand-green/20 rounded-xl border border-brand-gold/15">
              <div className="flex items-center gap-2 mb-1.5">
                <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse shrink-0" />
                <span className="text-green-450 font-sans text-[10.5px] font-bold uppercase tracking-wider">{t("foot_hours_open")}</span>
              </div>
              <p className="text-white/70 font-sans text-[10.5px] leading-relaxed font-medium">
                {t("foot_hours_desc")}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Legal Section */}
      <div className="border-t border-white/10 bg-[#050a06]">
        <div className="container-custom py-4.5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/55 font-sans text-[10.5px] text-center sm:text-left font-medium">
            © {new Date().getFullYear()} Samira Comida Para Llevar. {t("foot_rights")}
          </p>
          <div className="flex items-center gap-1.5 text-white/55 font-sans text-[10.5px] font-medium">
            <span>Hecho con</span>
            <span className="text-brand-gold font-bold">♥</span>
            <span>{t("foot_made_in")}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
