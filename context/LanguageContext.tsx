"use client";

import React, { createContext, useContext, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { translations, UIKeys } from "@/lib/translations";

type Language = "es" | "en" | "fr";

type LanguageContextType = {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: UIKeys) => string;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({
  children,
  initialLocale,
}: {
  children: React.ReactNode;
  initialLocale?: Language;
}) {
  const router = useRouter();
  const pathname = usePathname();

  // Extract locale from URL path (e.g. /fr/... → "fr")
  const localeFromPath = pathname?.split("/")[1] as Language;
  const validLocales: Language[] = ["es", "en", "fr"];
  const resolvedLocale: Language =
    validLocales.includes(localeFromPath) ? localeFromPath : initialLocale ?? "es";

  const [language, setLanguageState] = useState<Language>(resolvedLocale);

  // Sync state if URL changes (e.g. browser back/forward) without triggering cascading renders
  const [prevPath, setPrevPath] = useState(pathname);
  if (pathname !== prevPath) {
    setPrevPath(pathname);
    if (validLocales.includes(localeFromPath) && localeFromPath !== language) {
      setLanguageState(localeFromPath);
    }
  }

  const setLanguage = (lang: Language) => {
    // Save to cookie so middleware can read it for redirects
    document.cookie = `samira-lang=${lang};path=/;max-age=31536000;SameSite=Lax`;
    // Save to localStorage as additional fallback
    localStorage.setItem("samira-lang", lang);
    // Update html lang attribute immediately
    document.documentElement.lang = lang;
    // Navigate to the new locale URL, preserving subpath and hash
    const subpath = pathname?.replace(/^\/(es|en|fr)/, "") ?? "";
    const hash = window.location.hash ?? "";
    router.push(`/${lang}${subpath}${hash}`);
    setLanguageState(lang);
  };

  const t = (key: UIKeys): string => {
    return translations[language][key] || translations["es"][key] || String(key);
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
