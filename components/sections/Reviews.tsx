"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { reviews } from "@/lib/data";
import { useLanguage } from "@/context/LanguageContext";

function Stars({ n }: { n: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={12}
          className={i < n ? "text-brand-gold fill-brand-gold" : "text-gray-200 fill-gray-200"}
        />
      ))}
    </div>
  );
}

const GoogleLogo = () => (
  <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 shrink-0">
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
  </svg>
);

export default function Reviews() {
  const { t } = useLanguage();

  return (
    <section id="reviews" className="section-padding bg-brand-cream moroccan-pattern">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12.5"
        >
          <span className="section-label mb-3 block font-bold">{t("rev_badge")}</span>
          <h2 className="font-serif font-bold text-3xl md:text-4xl text-gray-900 mb-4">
            {t("rev_title")} <span className="text-brand-green">{t("rev_title_accent")}</span>
          </h2>
          <div className="gold-divider mx-auto mb-8" />

          {/* Aggregate Rating Card */}
          <div className="inline-flex flex-col items-center bg-white rounded-3xl px-8 py-5.5 md:px-11 md:py-6.5 shadow-sm border border-brand-gold/10">
            <p className="font-serif font-bold text-5xl md:text-6xl text-brand-green leading-none mb-2">
              4.6
            </p>
            <div className="flex gap-1 mb-2">
              {[1, 2, 3, 4].map(i => (
                <Star key={i} size={18} className="text-brand-gold fill-brand-gold" />
              ))}
              <Star size={18} className="text-brand-gold" style={{ fill: 'rgba(201,162,39,0.5)' }} />
            </div>
            <div className="flex items-center gap-1.5 font-sans text-xs md:text-sm">
              <span className="text-gray-600 font-medium">Basado en</span>
              <span className="text-brand-green font-bold">{t("rev_based_on")}</span>
            </div>
            <div className="flex items-center gap-1.5 mt-2 text-gray-500 text-[11px] font-bold font-sans">
              <GoogleLogo />
              Google Reviews
            </div>
          </div>
        </motion.div>

        {/* Reviews Cards List */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
          {reviews.map((r, i) => (
            <motion.div
              key={r.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-15px" }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="luxury-card p-5.5 md:p-6 relative flex flex-col justify-between"
            >
              <div className="absolute top-4 right-4 opacity-5 pointer-events-none">
                <Quote size={24} className="text-brand-green" />
              </div>

              <div>
                {/* Author Info */}
                <div className="flex items-start gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-brand-green to-brand-green-light flex items-center justify-center shrink-0 shadow-sm">
                    <span className="font-serif font-bold text-white text-base">
                      {r.avatar}
                    </span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2">
                      <p className="font-sans font-bold text-gray-900 text-xs md:text-sm truncate">{r.name}</p>
                      <GoogleLogo />
                    </div>
                    <div className="flex items-center gap-2 mt-0.5">
                      <Stars n={r.rating} />
                      <span className="text-gray-550 text-[10px] font-sans font-bold">· {r.date}</span>
                    </div>
                  </div>
                </div>

                <p className="text-gray-755 font-sans text-[0.8rem] leading-relaxed font-medium">
                  &ldquo;{r.text}&rdquo;
                </p>
              </div>

              <div className="mt-5 pt-4 border-t border-brand-cream-mid flex items-center gap-1.5">
                <div className="w-1.5 h-1.5 rounded-full bg-brand-gold" />
                <span className="text-gray-500 text-[10px] font-sans tracking-wide uppercase font-bold">{t("rev_verified")}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Action Button */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center mt-10"
        >
          <a
            href="https://search.google.com/local/writereview?placeid=ChIJN1t_tDeuEmsRUsdiY1GaDfs"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            <Star size={14} />
            {t("rev_write")}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
