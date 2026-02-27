"use client";

import { useSyncExternalStore } from "react";
import { getTranslation, type Locale } from "../../lib/translations";
import { useLocaleFromContext } from "../components/LocaleProvider";

function getLocaleFromDocument(): Locale {
  if (typeof document === "undefined") return "en";
  const lang = document.documentElement.getAttribute("lang");
  return lang === "ar" ? "ar" : "en";
}

function subscribe(callback: () => void) {
  const observer = new MutationObserver(callback);
  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ["lang"],
  });
  return () => observer.disconnect();
}

export function useTranslations() {
  const serverLocale = useLocaleFromContext();

  const clientLocale = useSyncExternalStore(
    subscribe,
    getLocaleFromDocument,
    () => serverLocale ?? "en"
  );

  const locale = serverLocale ?? clientLocale;

  const t = (key: string) => getTranslation(locale, key);

  return { locale, t };
}
