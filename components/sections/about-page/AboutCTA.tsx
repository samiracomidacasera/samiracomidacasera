"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Utensils, MessageCircle } from "lucide-react";
import { WHATSAPP_URL } from "@/lib/utils";
import { useLanguage } from "@/context/LanguageContext";

export default function AboutCTA() {
  const { language, t } = useLanguage();

  return (
    <section className="py-20 bg-brand-cream relative overflow-hidden moroccan-pattern border-t border-brand-gold/15">
      <div className="container-custom relative z-10 text-center max-w-3xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-serif font-bold text-3xl sm:text-4xl md:text-5xl text-gray-900 leading-tight mb-4"
        >
          {t("about_cta_title")}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-sans text-base sm:text-lg text-gray-600 leading-relaxed font-medium mb-8"
        >
          {t("about_cta_desc")}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <Link
            href={`/${language}#menu`}
            className="btn-primary"
          >
            <Utensils size={16} />
            {t("about_cta_btn_menu")}
          </Link>

          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-sans text-xs sm:text-sm font-bold uppercase tracking-wider transition-all duration-300 shadow-md"
          >
            <MessageCircle size={16} />
            {t("about_cta_btn_contact")}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
