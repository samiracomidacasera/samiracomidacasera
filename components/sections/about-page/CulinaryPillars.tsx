"use client";

import { motion } from "framer-motion";
import { Flame, Sparkles, ShieldCheck, HeartHandshake } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function CulinaryPillars() {
  const { t } = useLanguage();

  const pillars = [
    {
      icon: Flame,
      title: t("about_pillar1_title"),
      desc: t("about_pillar1_desc"),
      accent: "from-amber-500 to-brand-terra",
      badge: "Tradición",
    },
    {
      icon: Sparkles,
      title: t("about_pillar2_title"),
      desc: t("about_pillar2_desc"),
      accent: "from-brand-gold to-amber-600",
      badge: "Calidad",
    },
    {
      icon: ShieldCheck,
      title: t("about_pillar3_title"),
      desc: t("about_pillar3_desc"),
      accent: "from-brand-green to-emerald-700",
      badge: "100% Halal",
    },
    {
      icon: HeartHandshake,
      title: t("about_pillar4_title"),
      desc: t("about_pillar4_desc"),
      accent: "from-rose-600 to-brand-terra",
      badge: "Hospitalidad",
    },
  ];

  return (
    <section className="section-padding bg-white relative overflow-hidden">
      <div className="container-custom relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-gold/15 text-brand-gold-dark text-xs font-sans font-bold uppercase tracking-wider mb-3"
          >
            {t("about_pillars_badge")}
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-serif font-bold text-3xl sm:text-4xl md:text-4.5xl text-gray-900 leading-tight mb-4"
          >
            {t("about_pillars_title")}
          </motion.h2>

          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="gold-divider mx-auto"
          />
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 xl:gap-8">
          {pillars.map((p, index) => {
            const Icon = p.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative bg-brand-cream/60 hover:bg-white rounded-3xl p-7 border border-brand-gold/15 hover:border-brand-gold/40 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Icon & Badge */}
                  <div className="flex items-center justify-between mb-6">
                    <div
                      className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${p.accent} text-white flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform`}
                    >
                      <Icon size={26} />
                    </div>
                    <span className="text-[11px] font-sans font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-white border border-brand-gold/20 text-gray-600">
                      {p.badge}
                    </span>
                  </div>

                  <h3 className="font-serif font-bold text-xl text-gray-900 mb-3 group-hover:text-brand-green transition-colors">
                    {p.title}
                  </h3>

                  <p className="font-sans text-sm text-gray-600 leading-relaxed font-medium">
                    {p.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-brand-gold/10 flex items-center text-xs font-sans font-bold text-brand-green uppercase tracking-wider">
                  <span>Samira Garantía</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
