"use client";

import { createContext, useContext, type ReactNode } from "react";
import type { Locale } from "../../lib/translations";

const LocaleContext = createContext<Locale | null>(null);

export function LocaleProvider({
  locale,
  children,
}: {
  locale: Locale;
  children: ReactNode;
}) {
  return (
    <LocaleContext.Provider value={locale}>{children}</LocaleContext.Provider>
  );
}

export function useLocaleFromContext(): Locale | null {
  return useContext(LocaleContext);
}
