"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, MessageCircle, CheckCircle2, AlertCircle, Sparkles } from "lucide-react";
import { WHATSAPP_NUMBER } from "@/lib/utils";
import { useLanguage } from "@/context/LanguageContext";

export default function ContactForm() {
  const { t } = useLanguage();

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [inquiryType, setInquiryType] = useState("takeaway");
  const [message, setMessage] = useState("");

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const inquiryOptions = [
    { value: "takeaway", label: t("contact_form_type_take") },
    { value: "special", label: t("contact_form_type_special") },
    { value: "catering", label: t("contact_form_type_catering") },
    { value: "other", label: t("contact_form_type_other") },
  ];

  const getInquiryLabel = (val: string) => {
    const found = inquiryOptions.find((o) => o.value === val);
    return found ? found.label : val;
  };

  const validate = () => {
    if (!name.trim()) {
      setErrorMessage("Por favor, introduce tu nombre.");
      return false;
    }
    if (!phone.trim()) {
      setErrorMessage("Por favor, introduce un número de teléfono o WhatsApp.");
      return false;
    }
    if (!message.trim()) {
      setErrorMessage("Por favor, escribe los detalles de tu consulta o pedido.");
      return false;
    }
    setErrorMessage("");
    return true;
  };

  // Form submit simulation with success modal
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 600);
  };

  // Direct WhatsApp send button
  const handleSendViaWhatsApp = () => {
    if (!validate()) return;

    const formattedText = `*Nuevo Mensaje desde la Web Samira*\n\n` +
      `👤 *Nombre:* ${name}\n` +
      `📞 *Teléfono:* ${phone}\n` +
      (email ? `✉️ *Email:* ${email}\n` : "") +
      `📋 *Tipo de Solicitud:* ${getInquiryLabel(inquiryType)}\n\n` +
      `💬 *Mensaje / Detalles:*\n${message}`;

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(formattedText)}`;
    window.open(url, "_blank");
  };

  const handleReset = () => {
    setName("");
    setPhone("");
    setEmail("");
    setMessage("");
    setIsSuccess(false);
    setErrorMessage("");
  };

  return (
    <section className="section-padding bg-white relative overflow-hidden">
      <div className="container-custom relative z-10">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-green/10 text-brand-green text-xs font-sans font-bold uppercase tracking-wider mb-3">
              <Sparkles size={12} />
              {t("contact_form_badge")}
            </span>
            <h2 className="font-serif font-bold text-3xl sm:text-4xl text-gray-900 leading-tight mb-3">
              {t("contact_form_title")}
            </h2>
            <div className="gold-divider mx-auto mb-4" />
            <p className="font-sans text-sm sm:text-base text-gray-650 leading-relaxed font-medium">
              {t("contact_form_desc")}
            </p>
          </div>

          <div className="bg-brand-cream/80 border border-brand-gold/20 rounded-3xl p-6 sm:p-10 shadow-xl relative">
            <AnimatePresence mode="wait">
              {isSuccess ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="py-10 text-center space-y-4"
                >
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-inner">
                    <CheckCircle2 size={36} />
                  </div>
                  <h3 className="font-serif font-bold text-2xl text-gray-900">
                    {t("contact_form_success")}
                  </h3>
                  <p className="font-sans text-sm text-gray-600 max-w-md mx-auto leading-relaxed">
                    Hemos recibido tus datos correctamente. Si necesitas confirmación urgente, puedes contactarnos directamente por WhatsApp.
                  </p>
                  <div className="pt-4 flex justify-center gap-3">
                    <button
                      onClick={handleReset}
                      className="px-6 py-2.5 rounded-xl bg-brand-green text-white font-sans text-xs font-bold uppercase tracking-wider hover:bg-brand-green-dark transition-colors"
                    >
                      Enviar otro mensaje
                    </button>
                  </div>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  className="space-y-6"
                >
                  {errorMessage && (
                    <div className="p-4 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-xs sm:text-sm font-sans flex items-center gap-2">
                      <AlertCircle size={18} className="shrink-0" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Name */}
                    <div>
                      <label className="block font-sans text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">
                        {t("contact_form_name")} *
                      </label>
                      <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder={t("contact_form_name_ph")}
                        className="w-full px-4 py-3 rounded-xl bg-white border border-brand-gold/25 focus:border-brand-green focus:ring-2 focus:ring-brand-green/20 outline-none text-sm font-sans transition-all"
                        required
                      />
                    </div>

                    {/* Phone */}
                    <div>
                      <label className="block font-sans text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">
                        {t("contact_form_phone")} *
                      </label>
                      <input
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder={t("contact_form_phone_ph")}
                        className="w-full px-4 py-3 rounded-xl bg-white border border-brand-gold/25 focus:border-brand-green focus:ring-2 focus:ring-brand-green/20 outline-none text-sm font-sans transition-all"
                        required
                      />
                    </div>
                  </div>

                  {/* Email & Inquiry Type */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block font-sans text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">
                        {t("contact_form_email")}
                      </label>
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder={t("contact_form_email_ph")}
                        className="w-full px-4 py-3 rounded-xl bg-white border border-brand-gold/25 focus:border-brand-green focus:ring-2 focus:ring-brand-green/20 outline-none text-sm font-sans transition-all"
                      />
                    </div>

                    <div>
                      <label className="block font-sans text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">
                        {t("contact_form_type")}
                      </label>
                      <select
                        value={inquiryType}
                        onChange={(e) => setInquiryType(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl bg-white border border-brand-gold/25 focus:border-brand-green focus:ring-2 focus:ring-brand-green/20 outline-none text-sm font-sans transition-all cursor-pointer"
                      >
                        {inquiryOptions.map((opt) => (
                          <option key={opt.value} value={opt.value}>
                            {opt.label}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block font-sans text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">
                      {t("contact_form_message")} *
                    </label>
                    <textarea
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      rows={4}
                      placeholder={t("contact_form_message_ph")}
                      className="w-full px-4 py-3 rounded-xl bg-white border border-brand-gold/25 focus:border-brand-green focus:ring-2 focus:ring-brand-green/20 outline-none text-sm font-sans transition-all resize-none"
                      required
                    />
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row items-center gap-3.5 pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full sm:flex-1 flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-brand-green hover:bg-brand-green-dark text-white font-sans text-xs sm:text-sm font-bold uppercase tracking-wider transition-colors shadow-md shadow-brand-green/15 cursor-pointer disabled:opacity-70"
                    >
                      {isSubmitting ? (
                        <span className="inline-block w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      ) : (
                        <Send size={15} />
                      )}
                      <span>{t("contact_form_btn_submit")}</span>
                    </button>

                    <button
                      type="button"
                      onClick={handleSendViaWhatsApp}
                      className="w-full sm:flex-1 flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-[#25D366] hover:bg-[#1EBE5D] text-white font-sans text-xs sm:text-sm font-bold uppercase tracking-wider transition-colors shadow-md shadow-[#25D366]/20 cursor-pointer"
                    >
                      <MessageCircle size={16} />
                      <span>{t("contact_form_btn_wsp")}</span>
                    </button>
                  </div>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
