"use client";

import { useSyncExternalStore } from "react";
import { getTranslation, type Locale } from "../../lib/translations";

function getLocale(): Locale {
  if (typeof document === "undefined") return "en";
  const lang = document.documentElement.getAttribute("lang");
  return lang === "ar" ? "ar" : "en";
}

function subscribe(callback: () => void) {
  // Re-run when lang might have changed (e.g. after router.refresh)
  const observer = new MutationObserver(callback);
  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ["lang"],
  });
  return () => observer.disconnect();
}

function getSnapshot() {
  return getLocale();
}

function getServerSnapshot() {
  return "en" as Locale;
}

export function useTranslations() {
  const locale = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  const t = (key: string) => getTranslation(locale, key);

  return { locale, t };
}
