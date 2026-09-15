"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { MapPin, Clock, Phone, ExternalLink } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import {
  PHONE_PRIMARY,
  PHONE_SECONDARY,
  PHONE_PRIMARY_RAW,
  PHONE_SECONDARY_RAW,
  GOOGLE_MAPS_URL,
  GOOGLE_MAPS_EMBED,
  isRestaurantOpenNow,
} from "@/lib/utils";

export default function MapSection() {
  const { t, language } = useLanguage();
  const [isOpenNow, setIsOpenNow] = useState(false);

  useEffect(() => {
    setIsOpenNow(isRestaurantOpenNow());
  }, []);

  return (
    <section id="contact" className="section-padding bg-brand-cream moroccan-pattern">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12.5"
        >
          <span className="section-label mb-3 block font-bold">{t("map_badge")}</span>
          <h2 className="font-serif font-bold text-3xl md:text-4xl text-gray-900 mb-4">
            {t("map_title")} <span className="text-brand-green">{t("map_title_accent")}</span>
          </h2>
          <div className="gold-divider mx-auto mb-4" />
          <p className="text-gray-755 font-sans text-sm md:text-base max-w-xl mx-auto leading-relaxed font-medium">
            {t("map_desc")}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 xl:gap-8 items-start">
          {/* Info cards list */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 space-y-4 w-full max-w-md lg:max-w-none mx-auto"
          >
            {/* Address info card */}
            <div className="bg-white rounded-2xl p-5 shadow-sm border border-brand-gold/10">
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-brand-green flex items-center justify-center shrink-0 shadow-md">
                  <MapPin size={18} color="white" />
                </div>
                <div className="leading-tight">
                  <h3 className="font-serif font-bold text-lg text-gray-900 mb-1.5">
                    {t("map_address_title")}
                  </h3>
                  <p className="text-gray-700 font-sans text-[0.82rem] leading-relaxed font-medium">
                    C. Río Aranda, 11, Local 2<br />
                    29620 Torremolinos<br />
                    Málaga, España
                  </p>
                  <a
                    href={GOOGLE_MAPS_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 mt-2.5 text-brand-green hover:text-brand-green-dark font-sans text-[11px] font-bold uppercase tracking-wider transition-colors"
                  >
                    <ExternalLink size={10} /> {t("map_address_link")}
                  </a>
                </div>
              </div>
            </div>

            {/* Hours info card */}
            <div className="bg-white rounded-2xl p-5 shadow-sm border border-brand-gold/10">
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-brand-gold flex items-center justify-center shrink-0 shadow-md">
                  <Clock size={18} color="white" />
                </div>
                <div className="flex-1 leading-tight">
                  <h3 className="font-serif font-bold text-lg text-gray-900 mb-2">
                    {t("map_hours_title")}
                  </h3>
                  <div className="flex items-center justify-between gap-4 font-sans text-[0.82rem]">
                    <span className="text-gray-655 font-bold">{t("map_hours_days")}</span>
                    <span className="text-gray-900 font-black">{language === "en" ? "10:00 AM – 9:00 PM" : "10:00 – 21:00"}</span>
                  </div>
                  <div className="flex items-center gap-1.5 mt-3">
                    <div
                      className={`w-1.5 h-1.5 rounded-full shrink-0 ${
                        isOpenNow ? "bg-green-500 animate-pulse" : "bg-red-500"
                      }`}
                    />
                    <span
                      className={`font-sans text-[11px] font-bold uppercase tracking-wider ${
                        isOpenNow ? "text-green-700" : "text-red-600"
                      }`}
                    >
                      {isOpenNow ? t("map_hours_open") : t("map_hours_closed")}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Phone info card */}
            <div className="bg-white rounded-2xl p-5 shadow-sm border border-brand-gold/10">
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-brand-terra flex items-center justify-center shrink-0 shadow-md">
                  <Phone size={18} color="white" />
                </div>
                <div className="leading-tight">
                  <h3 className="font-serif font-bold text-lg text-gray-900 mb-2.5">
                    {t("map_phones_title")}
                  </h3>
                  <div className="space-y-2">
                    <a
                      href={`tel:${PHONE_PRIMARY_RAW}`}
                      className="flex items-center gap-2 text-brand-green hover:text-brand-green-dark font-sans text-sm font-bold transition-colors"
                    >
                      <Phone size={13} /> {PHONE_PRIMARY}
                    </a>
                    <a
                      href={`tel:${PHONE_SECONDARY_RAW}`}
                      className="flex items-center gap-2 text-brand-green hover:text-brand-green-dark font-sans text-sm font-bold transition-colors"
                    >
                      <Phone size={13} /> {PHONE_SECONDARY}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Services info panel */}
            <div className="bg-brand-green rounded-2xl p-5 shadow-sm border border-brand-gold/10">
              <h3 className="font-serif font-bold text-lg text-white mb-3">
                {t("map_services_title")}
              </h3>
              <div className="flex flex-wrap gap-2">
                {[
                  t("service_dine"),
                  t("service_take"),
                  t("service_uber"),
                  t("service_special"),
                  t("service_catering"),
                  t("service_family"),
                ].map((s) => (
                  <span
                    key={s}
                    className="px-2.5 py-1 bg-white/15 rounded-full text-white font-sans text-[10.5px] font-bold border border-white/10"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Map display block */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-3 w-full"
          >
            <div className="rounded-2xl overflow-hidden shadow-md border border-brand-gold/15 h-[320px] md:h-[420px] lg:h-[500px]">
              <iframe
                src={GOOGLE_MAPS_EMBED}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Samira Ubicacion"
              />
            </div>
            <div className="mt-3.5 flex justify-end">
              <a
                href={GOOGLE_MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                <MapPin size={14} /> {t("map_btn_google")}
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
