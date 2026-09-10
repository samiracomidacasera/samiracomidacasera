"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function ContactFAQ() {
  const { t } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    { q: t("contact_faq_q1"), a: t("contact_faq_a1") },
    { q: t("contact_faq_q2"), a: t("contact_faq_a2") },
    { q: t("contact_faq_q3"), a: t("contact_faq_a3") },
    { q: t("contact_faq_q4"), a: t("contact_faq_a4") },
    { q: t("contact_faq_q5"), a: t("contact_faq_a5") },
  ];

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="section-padding bg-white relative overflow-hidden">
      <div className="container-custom max-w-3xl relative z-10">
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-gold/20 text-brand-gold-dark text-xs font-sans font-bold uppercase tracking-wider mb-3">
            <HelpCircle size={12} />
            {t("contact_faq_badge")}
          </span>
          <h2 className="font-serif font-bold text-3xl sm:text-4xl text-gray-900 leading-tight mb-3">
            {t("contact_faq_title")}
          </h2>
          <div className="gold-divider mx-auto" />
        </div>

        <div className="space-y-3.5">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-brand-cream/60 hover:bg-brand-cream border border-brand-gold/15 rounded-2xl overflow-hidden transition-colors"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="font-serif font-bold text-base sm:text-lg text-gray-900">
                    {faq.q}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full bg-white border border-brand-gold/20 flex items-center justify-center shrink-0 text-brand-green transition-transform duration-300 ${
                      isOpen ? "rotate-180 bg-brand-green text-white border-brand-green" : ""
                    }`}
                  >
                    <ChevronDown size={16} />
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 sm:px-6 pb-6 pt-1 text-sm sm:text-[0.95rem] font-sans text-gray-650 leading-relaxed font-normal border-t border-brand-gold/10">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
