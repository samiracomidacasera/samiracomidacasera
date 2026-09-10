"use client";

import { motion } from "framer-motion";
import { MapPin, Train, Bus, Car, ExternalLink, Clock } from "lucide-react";
import {
  GOOGLE_MAPS_URL,
  GOOGLE_MAPS_EMBED,
  RESTAURANT_ADDRESS,
} from "@/lib/utils";
import { useLanguage } from "@/context/LanguageContext";

export default function LocationDetails() {
  const { t } = useLanguage();

  const accessOptions = [
    {
      icon: Train,
      title: t("contact_loc_train_title"),
      desc: t("contact_loc_train_desc"),
    },
    {
      icon: Bus,
      title: t("contact_loc_bus_title"),
      desc: t("contact_loc_bus_desc"),
    },
    {
      icon: Car,
      title: t("contact_loc_car_title"),
      desc: t("contact_loc_car_desc"),
    },
  ];

  return (
    <section className="section-padding bg-brand-cream relative overflow-hidden moroccan-pattern">
      <div className="container-custom relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-green/10 text-brand-green text-xs font-sans font-bold uppercase tracking-wider mb-3">
            <MapPin size={12} />
            {t("contact_loc_badge")}
          </span>
          <h2 className="font-serif font-bold text-3xl sm:text-4xl text-gray-900 leading-tight mb-3">
            {t("contact_loc_title")}
          </h2>
          <div className="gold-divider mx-auto mb-4" />
          <p className="font-sans text-sm sm:text-base text-gray-650 leading-relaxed font-medium">
            {RESTAURANT_ADDRESS}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Map Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <div className="rounded-3xl overflow-hidden shadow-xl border border-brand-gold/25 h-[340px] sm:h-[420px] lg:h-[480px]">
              <iframe
                src={GOOGLE_MAPS_EMBED}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Samira Ubicación Torremolinos"
              />
            </div>

            <div className="mt-4 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-2 text-xs font-sans text-gray-600 font-medium">
                <Clock size={14} className="text-brand-gold-dark shrink-0" />
                <span>Abierto todos los días: 10:00 – 23:30</span>
              </div>

              <a
                href={GOOGLE_MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary py-2.5 px-5 text-xs"
              >
                <ExternalLink size={13} />
                {t("map_btn_google")}
              </a>
            </div>
          </motion.div>

          {/* Access & Details Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-5 space-y-4"
          >
            {/* Address Banner Card */}
            <div className="bg-white rounded-3xl p-6 border border-brand-gold/20 shadow-md">
              <div className="flex items-start gap-3.5">
                <div className="w-11 h-11 rounded-2xl bg-brand-green text-white flex items-center justify-center shrink-0 shadow-md">
                  <MapPin size={20} />
                </div>
                <div>
                  <h3 className="font-serif font-bold text-lg text-gray-900 mb-1">
                    Dirección en Torremolinos
                  </h3>
                  <p className="font-sans text-sm text-gray-650 leading-relaxed font-medium">
                    Calle Río Aranda, 11, Local 2<br />
                    29620 Torremolinos, Málaga, España
                  </p>
                </div>
              </div>
            </div>

            {/* Transport & Access cards */}
            {accessOptions.map((opt, idx) => {
              const Icon = opt.icon;
              return (
                <div
                  key={idx}
                  className="bg-white/85 hover:bg-white rounded-2xl p-5 border border-brand-gold/15 shadow-sm hover:shadow-md transition-all duration-200 flex items-start gap-4"
                >
                  <div className="w-10 h-10 rounded-xl bg-brand-gold/15 text-brand-gold-dark flex items-center justify-center shrink-0">
                    <Icon size={18} />
                  </div>
                  <div>
                    <h4 className="font-serif font-bold text-base text-gray-900 mb-1">
                      {opt.title}
                    </h4>
                    <p className="font-sans text-xs text-gray-600 leading-relaxed font-medium">
                      {opt.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
