"use client";

import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { Leaf, Users, Truck, ChefHat } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const card: Variants = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

export default function WhyChooseUs() {
  const { language, t } = useLanguage();

  const features = [
    {
      icon: ChefHat,
      title: t("why_f1_title"),
      description: t("why_f1_desc"),
      iconBg: "bg-brand-green",
      borderHover: "hover:border-brand-green/20",
      barColor: "bg-brand-green",
    },
    {
      icon: Leaf,
      title: t("why_f2_title"),
      description: t("why_f2_desc"),
      iconBg: "bg-brand-gold",
      borderHover: "hover:border-brand-gold/30",
      barColor: "bg-brand-gold",
    },
    {
      icon: Users,
      title: t("why_f3_title"),
      description: t("why_f3_desc"),
      iconBg: "bg-brand-terra",
      borderHover: "hover:border-brand-terra/20",
      barColor: "bg-brand-terra",
    },
    {
      icon: Truck,
      title: t("why_f4_title"),
      description: t("why_f4_desc"),
      iconBg: "bg-brand-green-light",
      borderHover: "hover:border-brand-green-light/20",
      barColor: "bg-brand-green-light",
    },
  ];

  const stats = [
    { value: "4.6★", label: t("why_stat_rating"), color: "text-brand-gold" },
    { value: "337+", label: t("why_stat_reviews"), color: "text-brand-green" },
    { value: "10+", label: t("why_stat_tradition"), color: "text-brand-terra" },
    { value: "50+", label: t("why_stat_specs"), color: "text-brand-green" },
  ];

  return (
    <section
      id="why-us"
      className="section-padding bg-brand-cream moroccan-pattern relative overflow-hidden"
    >
      {/* Decorative details */}
      <div className="pointer-events-none absolute -top-24 -left-24 w-72 h-72 rounded-full bg-brand-green/3" />
      <div className="pointer-events-none absolute -bottom-24 -right-24 w-80 h-80 rounded-full bg-brand-gold/5" />

      <div className="container-custom relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12.5"
        >
          <span className="section-label mb-3 block font-bold">{t("why_badge")}</span>
          <h2 className="font-serif font-bold text-3xl md:text-4xl text-brand-green mb-4">
            {t("why_title")}{" "}
            <span className="text-gradient-gold italic">{t("why_title_accent")}</span>
          </h2>
          <div className="gold-divider mx-auto mb-4" />
          <p className="text-gray-700 font-sans text-sm md:text-base max-w-xl mx-auto leading-relaxed font-medium">
            {t("why_desc")}
          </p>
        </motion.div>

        {/* Feature Cards Grid */}
        <motion.div
          key={language}
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {features.map((f) => {
            const Icon = f.icon;
            return (
              <motion.div
                key={f.title}
                variants={card}
                className="group relative bg-white rounded-2xl p-6.5 border border-brand-gold/10 hover:shadow-xl hover:border-brand-gold/25 transition-all duration-300 overflow-hidden cursor-default"
              >
                {/* Icon wrapper */}
                <div
                  className={`w-11 h-11 rounded-xl ${f.iconBg} flex items-center justify-center mb-5.5 shadow-md group-hover:scale-105 transition-transform duration-300`}
                >
                  <Icon size={20} color="white" />
                </div>

                <h3 className="font-serif font-bold text-xl text-gray-900 mb-2 group-hover:text-brand-green transition-colors">
                  {f.title}
                </h3>
                <p className="text-gray-700 font-sans text-[0.92rem] sm:text-[0.96rem] leading-relaxed font-medium">
                  {f.description}
                </p>

                {/* Left side accent bar */}
                <div
                  className={`absolute bottom-0 left-0 right-0 h-0.5 ${f.barColor} scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left`}
                />
              </motion.div>
            );
          })}
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {stats.map((s) => (
            <div
              key={s.label}
              className="text-center py-5 px-3.5 bg-white rounded-2xl border border-brand-gold/15 shadow-sm"
            >
              <div className={`font-serif font-bold text-2xl md:text-3xl ${s.color} mb-1`}>
                {s.value}
              </div>
              <div className="text-gray-655 font-sans text-[0.84rem] md:text-[0.88rem] font-bold uppercase tracking-wider">
                {s.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
