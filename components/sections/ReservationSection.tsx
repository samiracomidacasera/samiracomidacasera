"use client";

import { useState, useId } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  Calendar,
  Clock,
  Users,
  UtensilsCrossed,
  Phone,
  CheckCircle2,
  AlertCircle,
  Sparkles,
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import {
  WHATSAPP_NUMBER,
  PHONE_PRIMARY,
  PHONE_PRIMARY_RAW,
} from "@/lib/utils";

const guestOptions = [1, 2, 3, 4, 5, 6, "7+"];

const timeSlots = [
  "11:00",
  "11:30",
  "12:00",
  "12:30",
  "13:00",
  "13:30",
  "14:00",
  "14:30",
  "15:00",
  "15:30",
  "16:00",
  "16:30",
  "17:00",
  "17:30",
  "18:00",
  "18:30",
  "19:00",
  "19:30",
  "20:00",
  "20:30",
];

export default function ReservationSection() {
  const { language, t } = useLanguage();

  const nameId = useId();
  const phoneId = useId();
  const dateId = useId();
  const timeId = useId();
  const notesId = useId();

  // Get today's date formatted as YYYY-MM-DD
  const todayStr = new Date().toISOString().split("T")[0];

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [guests, setGuests] = useState<number | string>(2);
  const [date, setDate] = useState(todayStr);
  const [time, setTime] = useState("14:00");
  const [notes, setNotes] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!name.trim()) {
      setError(
        language === "es"
          ? "Por favor, introduce tu nombre para la reserva."
          : language === "fr"
            ? "Veuillez entrer votre nom pour la réservation."
            : "Please enter your name for the reservation."
      );
      return;
    }

    if (!phone.trim()) {
      setError(
        language === "es"
          ? "Por favor, introduce tu número de teléfono o WhatsApp."
          : language === "fr"
            ? "Veuillez entrer votre numéro de téléphone ou WhatsApp."
            : "Please enter your phone or WhatsApp number."
      );
      return;
    }

    setError("");

    const guestsText = `${guests} ${t("res_form_guests_unit")}`;
    const text =
      `*🍽️ Nueva Reserva de Mesa - Samira Comida Casera*\n\n` +
      `👤 *Nombre:* ${name.trim()}\n` +
      `📞 *Teléfono:* ${phone.trim()}\n` +
      `👥 *Comensales:* ${guestsText}\n` +
      `📅 *Fecha:* ${date || "Hoy"}\n` +
      `⏰ *Hora:* ${time}\n` +
      (notes.trim() ? `📝 *Notas / Platos:* ${notes.trim()}\n\n` : `\n`) +
      `¡Hola! Me gustaría reservar una mesa para comer en vuestro restaurante. ¿Tenéis disponibilidad? ¡Muchas gracias!`;

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
  };

  return (
    <section
      id="reserva"
      className="section-padding text-white relative overflow-hidden bg-[#073D27]"
      style={{
        backgroundColor: "#073D27",
        background: "linear-gradient(180deg, #052216 0%, #073D27 50%, #041B11 100%)",
      }}
    >
      {/* Decorative ambient glows */}
      <div className="pointer-events-none absolute -top-24 -right-24 w-[500px] h-[500px] rounded-full bg-brand-gold/15 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -left-24 w-[500px] h-[500px] rounded-full bg-emerald-500/15 blur-3xl" />

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-12 md:mb-14"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-gold/15 border border-brand-gold/30 text-brand-gold text-xs font-bold font-sans uppercase tracking-wider mb-3.5 shadow-sm">
            <UtensilsCrossed size={14} className="text-brand-gold" />
            {t("res_badge")}
          </span>
          <h2 className="font-serif font-bold text-3xl md:text-4xl lg:text-5xl text-white mb-4">
            {t("res_title")}{" "}
            <span className="text-gradient-gold">{t("res_title_accent")}</span>
          </h2>
          <p className="text-white/80 font-sans text-sm md:text-base leading-relaxed">
            {t("res_desc")}
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          {/* Left Column: Visual & Trust Features */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-6"
          >
            {/* Restaurant Ambiance Card */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-2 border-brand-gold/30 aspect-[4/3] group">
              <Image
                src="/about-family-table.webp"
                alt="Comer en el restaurante Samira Torremolinos"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#073D27]/90 via-[#073D27]/40 to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 text-white">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-gold/90 text-[#073D27] text-xs font-bold font-sans uppercase tracking-wider mb-2 shadow-sm">
                  <Sparkles size={12} />
                  Torremolinos
                </div>
                <h3 className="font-serif font-bold text-xl text-white drop-shadow-sm">
                  Samira Comida Casera
                </h3>
                <p className="font-sans text-xs text-white/85 mt-0.5">
                  C. Río Aranda, 11 · Torremolinos, Málaga
                </p>
              </div>
            </div>

            {/* Feature Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              <div className="p-3.5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 shadow-sm flex items-center gap-3 text-white hover:border-brand-gold/40 transition-colors">
                <div className="w-9 h-9 rounded-xl bg-[#25D366]/20 text-[#25D366] flex items-center justify-center shrink-0">
                  <CheckCircle2 size={18} />
                </div>
                <span className="font-sans text-xs font-bold text-white/95 leading-snug">
                  {t("res_feat_confirm")}
                </span>
              </div>

              <div className="p-3.5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 shadow-sm flex items-center gap-3 text-white hover:border-brand-gold/40 transition-colors">
                <div className="w-9 h-9 rounded-xl bg-brand-gold/25 text-brand-gold-light flex items-center justify-center shrink-0">
                  <UtensilsCrossed size={18} />
                </div>
                <span className="font-sans text-xs font-bold text-white/95 leading-snug">
                  {t("res_feat_fresh")}
                </span>
              </div>

              <div className="p-3.5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 shadow-sm flex items-center gap-3 text-white hover:border-brand-gold/40 transition-colors">
                <div className="w-9 h-9 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                  <Sparkles size={18} />
                </div>
                <span className="font-sans text-xs font-bold text-white/95 leading-snug">
                  {t("res_feat_halal")}
                </span>
              </div>

              <div className="p-3.5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 shadow-sm flex items-center gap-3 text-white hover:border-brand-gold/40 transition-colors">
                <div className="w-9 h-9 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0">
                  <Clock size={18} />
                </div>
                <span className="font-sans text-xs font-bold text-white/95 leading-snug">
                  {t("res_feat_hours")}
                </span>
              </div>
            </div>

            {/* Quick Call Box */}
            <div className="p-5 rounded-2xl bg-gradient-to-r from-brand-gold/25 to-brand-gold/10 border border-brand-gold/35 text-white shadow-xl backdrop-blur-md flex items-center justify-between gap-4">
              <div className="leading-tight">
                <p className="font-sans text-xs text-white/80 font-medium">
                  {language === "es"
                    ? "¿Prefieres reservar por teléfono?"
                    : language === "fr"
                      ? "Vous préférez réserver par téléphone ?"
                      : "Prefer to book over the phone?"}
                </p>
                <p className="font-serif font-bold text-lg text-white mt-1">
                  {PHONE_PRIMARY}
                </p>
              </div>
              <a
                href={`tel:${PHONE_PRIMARY_RAW}`}
                className="btn-gold py-2.5 px-4 text-xs font-bold shrink-0 inline-flex items-center gap-1.5 shadow-md"
              >
                <Phone size={13} />
                {t("res_btn_call")}
              </a>
            </div>
          </motion.div>

          {/* Right Column: Reservation Form Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 md:p-9 shadow-2xl border-2 border-brand-gold/30 relative text-gray-900"
          >
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Row 1: Name and Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor={nameId}
                    className="block text-xs font-sans font-bold text-gray-800 mb-1.5 uppercase tracking-wider"
                  >
                    {t("res_form_name")} <span className="text-red-500">*</span>
                  </label>
                  <input
                    id={nameId}
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder={t("res_form_name_ph")}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/20 outline-none text-sm font-sans transition-all text-gray-800 bg-gray-50/50 focus:bg-white"
                  />
                </div>

                <div>
                  <label
                    htmlFor={phoneId}
                    className="block text-xs font-sans font-bold text-gray-800 mb-1.5 uppercase tracking-wider"
                  >
                    {t("res_form_phone")} <span className="text-red-500">*</span>
                  </label>
                  <input
                    id={phoneId}
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder={t("res_form_phone_ph")}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/20 outline-none text-sm font-sans transition-all text-gray-800 bg-gray-50/50 focus:bg-white"
                  />
                </div>
              </div>

              {/* Row 2: Guests Selector */}
              <div>
                <label className="block text-xs font-sans font-bold text-gray-800 mb-2 uppercase tracking-wider flex items-center gap-1.5">
                  <Users size={14} className="text-brand-gold" />
                  {t("res_form_guests")}
                </label>
                <div className="grid grid-cols-7 gap-1.5 sm:gap-2">
                  {guestOptions.map((opt) => {
                    const isSelected = guests === opt;
                    return (
                      <button
                        type="button"
                        key={opt}
                        onClick={() => setGuests(opt)}
                        className={`py-2.5 rounded-xl text-xs sm:text-sm font-sans font-bold transition-all border ${
                          isSelected
                            ? "bg-brand-green text-white border-brand-green shadow-md shadow-brand-green/20 scale-105"
                            : "bg-gray-50 text-gray-700 border-gray-200 hover:border-brand-gold/50 hover:bg-white"
                        }`}
                      >
                        {opt}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Row 3: Date and Time */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor={dateId}
                    className="block text-xs font-sans font-bold text-gray-800 mb-1.5 uppercase tracking-wider flex items-center gap-1.5"
                  >
                    <Calendar size={14} className="text-brand-gold" />
                    {t("res_form_date")}
                  </label>
                  <input
                    id={dateId}
                    type="date"
                    min={todayStr}
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/20 outline-none text-sm font-sans transition-all text-gray-800 bg-gray-50/50 focus:bg-white"
                  />
                </div>

                <div>
                  <label
                    htmlFor={timeId}
                    className="block text-xs font-sans font-bold text-gray-800 mb-1.5 uppercase tracking-wider flex items-center gap-1.5"
                  >
                    <Clock size={14} className="text-brand-gold" />
                    {t("res_form_time")}
                  </label>
                  <select
                    id={timeId}
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/20 outline-none text-sm font-sans transition-all text-gray-800 bg-gray-50/50 focus:bg-white cursor-pointer"
                  >
                    {timeSlots.map((slot) => (
                      <option key={slot} value={slot}>
                        {slot}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Row 4: Notes / Pre-order dishes */}
              <div>
                <label
                  htmlFor={notesId}
                  className="block text-xs font-sans font-bold text-gray-800 mb-1.5 uppercase tracking-wider"
                >
                  {t("res_form_notes")}
                </label>
                <textarea
                  id={notesId}
                  rows={2}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder={t("res_form_notes_ph")}
                  className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/20 outline-none text-sm font-sans transition-all text-gray-800 bg-gray-50/50 focus:bg-white resize-none"
                />
              </div>

              {/* Error Alert */}
              {error && (
                <div className="p-3 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs font-sans flex items-center gap-2">
                  <AlertCircle size={15} className="shrink-0 text-red-500" />
                  <span>{error}</span>
                </div>
              )}

              {/* Submit CTA Button */}
              <div>
                <button
                  type="submit"
                  className="w-full py-3.5 px-6 rounded-xl bg-[#25D366] hover:bg-[#1ebe58] text-white font-sans font-bold text-sm sm:text-base shadow-lg shadow-[#25D366]/25 transition-all flex items-center justify-center gap-2.5 active:scale-[0.99] cursor-pointer"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 shrink-0">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  <span>{t("res_btn_wsp")}</span>
                </button>
                <p className="text-center text-gray-450 font-sans text-[11px] mt-2">
                  {language === "es"
                    ? "Se abrirá WhatsApp con los detalles de tu mesa listos para enviar."
                    : language === "fr"
                      ? "WhatsApp s'ouvrira avec les détails de votre table prêts à être envoyés."
                      : "WhatsApp will open with your table details ready to send."}
                </p>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
