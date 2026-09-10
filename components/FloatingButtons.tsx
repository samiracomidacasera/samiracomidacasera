"use client";

import { motion } from "framer-motion";
import { Phone } from "lucide-react";
import { WHATSAPP_URL, UBER_EATS_URL, PHONE_PRIMARY_RAW } from "@/lib/utils";
import { useLanguage } from "@/context/LanguageContext";

export default function FloatingButtons() {
  const { t } = useLanguage();

  return (
    <div className="fixed right-3 bottom-6 md:right-5 md:bottom-8 z-40 flex flex-col gap-2.5 md:gap-3">
      {/* WhatsApp */}
      <motion.a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.8, type: "spring", stiffness: 220 }}
        whileHover={{ scale: 1.12 }}
        whileTap={{ scale: 0.95 }}
        className="w-11 h-11 md:w-13 md:h-13 rounded-full bg-[#25D366] flex items-center justify-center shadow-lg shadow-[#25D366]/25 group relative cursor-pointer"
        aria-label="WhatsApp"
      >
        <svg viewBox="0 0 24 24" fill="white" className="w-5.5 h-5.5 md:w-6.5 md:h-6.5">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
        {/* Tooltip */}
        <span className="absolute right-14 md:right-16 bg-gray-900 text-white text-[11px] font-medium px-2.5 py-1.5 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none shadow-md font-sans">
          WhatsApp
        </span>
        {/* Pulse ring */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-15" />
      </motion.a>

      {/* Phone Call */}
      <motion.a
        href={`tel:${PHONE_PRIMARY_RAW}`}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.9, type: "spring", stiffness: 220 }}
        whileHover={{ scale: 1.12 }}
        whileTap={{ scale: 0.95 }}
        className="w-11 h-11 md:w-13 md:h-13 rounded-full bg-brand-green flex items-center justify-center shadow-lg shadow-brand-green/25 group relative cursor-pointer"
        aria-label="Llamar"
      >
        <Phone size={18} className="text-white md:w-[22px] md:h-[22px]" />
        {/* Tooltip */}
        <span className="absolute right-14 md:right-16 bg-gray-900 text-white text-[11px] font-medium px-2.5 py-1.5 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none shadow-md font-sans">
          {t("hero_btn_call")}
        </span>
      </motion.a>

      {/* Uber Eats */}
      <motion.a
        href={UBER_EATS_URL}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, type: "spring", stiffness: 220 }}
        whileHover={{ scale: 1.12 }}
        whileTap={{ scale: 0.95 }}
        className="w-11 h-11 md:w-13 md:h-13 rounded-full bg-[#06C167] flex items-center justify-center shadow-lg shadow-[#06C167]/25 group relative cursor-pointer"
        aria-label="Uber Eats"
      >
        <svg viewBox="0 0 24 24" fill="white" className="w-5.5 h-5.5 md:w-6.5 md:h-6.5">
          <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2zm-1 5v10h2V7h-2zm-3 2v6h2V9H8zm8 0v6h2V9h-2z" />
        </svg>
        {/* Tooltip */}
        <span className="absolute right-14 md:right-16 bg-gray-900 text-white text-[11px] font-medium px-2.5 py-1.5 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none shadow-md font-sans">
          Uber Eats
        </span>
      </motion.a>
    </div>
  );
}
