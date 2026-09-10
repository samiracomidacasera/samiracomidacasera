"use client";

import { motion } from "framer-motion";
import { MessageCircle, Phone, Bike, ExternalLink } from "lucide-react";
import {
  PHONE_PRIMARY,
  PHONE_SECONDARY,
  PHONE_PRIMARY_RAW,
  PHONE_SECONDARY_RAW,
  WHATSAPP_URL,
  UBER_EATS_URL,
} from "@/lib/utils";
import { useLanguage } from "@/context/LanguageContext";

export default function ContactCards() {
  const { t } = useLanguage();

  const cards = [
    {
      badge: t("contact_card_wsp_badge"),
      badgeColor: "bg-emerald-100 text-emerald-800 border-emerald-300",
      title: t("contact_card_wsp_title"),
      desc: t("contact_card_wsp_desc"),
      icon: MessageCircle,
      iconBg: "bg-[#25D366] text-white",
      buttonText: t("contact_card_wsp_btn"),
      href: WHATSAPP_URL,
      isExternal: true,
      buttonClass:
        "bg-[#25D366] hover:bg-[#1EBE5D] text-white shadow-md shadow-[#25D366]/20",
    },
    {
      badge: t("contact_card_call_badge"),
      badgeColor: "bg-amber-100 text-amber-800 border-amber-300",
      title: t("contact_card_call_title"),
      desc: t("contact_card_call_desc"),
      icon: Phone,
      iconBg: "bg-brand-green text-white",
      phone1: { label: PHONE_PRIMARY, raw: PHONE_PRIMARY_RAW },
      phone2: { label: PHONE_SECONDARY, raw: PHONE_SECONDARY_RAW },
      isDualPhone: true,
    },
    {
      badge: t("contact_card_uber_badge"),
      badgeColor: "bg-green-100 text-green-800 border-green-300",
      title: t("contact_card_uber_title"),
      desc: t("contact_card_uber_desc"),
      icon: Bike,
      iconBg: "bg-[#06C167] text-white",
      buttonText: t("contact_card_uber_btn"),
      href: UBER_EATS_URL,
      isExternal: true,
      buttonClass:
        "bg-[#06C167] hover:bg-[#05a357] text-white shadow-md shadow-[#06C167]/20",
    },
  ];

  return (
    <section className="py-12 md:py-16 bg-brand-cream/60 -mt-10 relative z-20">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((c, i) => {
            const Icon = c.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white rounded-3xl p-7 shadow-lg border border-brand-gold/15 flex flex-col justify-between hover:border-brand-gold/40 transition-all duration-300"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div
                      className={`w-13 h-13 rounded-2xl ${c.iconBg} flex items-center justify-center shadow-md`}
                    >
                      <Icon size={24} />
                    </div>
                    <span
                      className={`text-[11px] font-sans font-bold uppercase tracking-wider px-3 py-1 rounded-full border ${c.badgeColor}`}
                    >
                      {c.badge}
                    </span>
                  </div>

                  <h3 className="font-serif font-bold text-xl text-gray-900 mb-2">
                    {c.title}
                  </h3>

                  <p className="font-sans text-sm text-gray-600 leading-relaxed font-medium mb-6">
                    {c.desc}
                  </p>
                </div>

                <div>
                  {c.isDualPhone ? (
                    <div className="grid grid-cols-1 gap-2.5">
                      <a
                        href={`tel:${c.phone1?.raw}`}
                        className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-brand-green hover:bg-brand-green-dark text-white font-sans text-xs sm:text-sm font-bold uppercase tracking-wider transition-colors shadow-md shadow-brand-green/15"
                      >
                        <Phone size={15} />
                        {c.phone1?.label}
                      </a>
                      <a
                        href={`tel:${c.phone2?.raw}`}
                        className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-brand-cream hover:bg-brand-cream-mid border border-brand-gold/20 text-gray-800 font-sans text-xs sm:text-sm font-bold uppercase tracking-wider transition-colors"
                      >
                        <Phone size={14} className="text-brand-gold-dark" />
                        {c.phone2?.label}
                      </a>
                    </div>
                  ) : (
                    <a
                      href={c.href}
                      target={c.isExternal ? "_blank" : undefined}
                      rel={c.isExternal ? "noopener noreferrer" : undefined}
                      className={`w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-sans text-xs sm:text-sm font-bold uppercase tracking-wider transition-all ${c.buttonClass}`}
                    >
                      <span>{c.buttonText}</span>
                      <ExternalLink size={14} />
                    </a>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
