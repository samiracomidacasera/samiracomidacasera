"use client";

import { motion } from "framer-motion";
import { Calendar, MapPin, Sparkles, Trophy } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function AboutMilestones() {
  const { t } = useLanguage();

  const steps = [
    {
      year: t("about_t1_year"),
      title: t("about_t1_title"),
      desc: t("about_t1_desc"),
      icon: Calendar,
    },
    {
      year: t("about_t2_year"),
      title: t("about_t2_title"),
      desc: t("about_t2_desc"),
      icon: MapPin,
    },
    {
      year: t("about_t3_year"),
      title: t("about_t3_title"),
      desc: t("about_t3_desc"),
      icon: Sparkles,
    },
    {
      year: t("about_t4_year"),
      title: t("about_t4_title"),
      desc: t("about_t4_desc"),
      icon: Trophy,
    },
  ];

  return (
    <section className="section-padding bg-white relative overflow-hidden">
      <div className="container-custom relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-green/10 text-brand-green text-xs font-sans font-bold uppercase tracking-wider mb-3">
            {t("about_timeline_badge")}
          </span>
          <h2 className="font-serif font-bold text-3xl sm:text-4xl md:text-4.5xl text-gray-900 leading-tight mb-4">
            {t("about_timeline_title")}
          </h2>
          <div className="gold-divider mx-auto" />
        </div>

        {/* Timeline Desktop & Mobile */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Center Line */}
          <div className="absolute left-4 md:left-1/2 top-4 bottom-4 w-0.5 bg-gradient-to-b from-brand-gold via-brand-green to-brand-gold -translate-x-1/2 hidden sm:block" />

          <div className="space-y-10 sm:space-y-12">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              const isEven = idx % 2 === 0;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.12 }}
                  className={`relative flex flex-col sm:flex-row items-start sm:items-center ${
                    isEven ? "sm:flex-row-reverse" : ""
                  }`}
                >
                  {/* Content card */}
                  <div className={`w-full sm:w-[calc(50%-40px)] ${isEven ? "sm:text-left" : "sm:text-right"}`}>
                    <div className="bg-brand-cream/80 hover:bg-white p-6 rounded-3xl border border-brand-gold/15 shadow-sm hover:shadow-lg transition-all duration-300">
                      <span className="inline-block px-3 py-1 rounded-full bg-brand-green text-brand-gold font-serif font-bold text-sm mb-2 shadow-sm">
                        {step.year}
                      </span>
                      <h3 className="font-serif font-bold text-xl text-gray-900 mb-2">
                        {step.title}
                      </h3>
                      <p className="font-sans text-sm text-gray-600 leading-relaxed font-medium">
                        {step.desc}
                      </p>
                    </div>
                  </div>

                  {/* Icon Node in center */}
                  <div className="hidden sm:flex absolute left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-white border-2 border-brand-gold shadow-md items-center justify-center text-brand-green z-10">
                    <Icon size={18} className="text-brand-gold" />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
