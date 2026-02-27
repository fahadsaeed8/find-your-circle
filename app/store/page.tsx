import { headers } from "next/headers";
import HeaderSection from "../components/HeaderSection";
import FooterSection from "../components/FooterSection";
import { getTranslation, type Locale } from "../../lib/translations";

export default async function StorePage() {
  const headersList = await headers();
  const locale = (headersList.get("x-next-locale") || "en") as Locale;
  const t = (key: string) => getTranslation(locale, key);

  return (
    <div className="min-h-screen bg-[#F5F2ED]">
      <HeaderSection />
      <div className="mx-auto max-w-6xl px-6 pt-[40px] md:pt-[60px] pb-16 md:pb-24 md:px-8">
        <section className="text-center md:text-center mb-16 md:mb-20">
          <h1 className="font-clash text-4xl md:text-4xl lg:text-7xl font-medium text-[#BF822E] mb-4">
            {t("store.title")}
          </h1>
          <p className="text-[#5A5A5A] text-lg leading-relaxed max-w-2xl mx-auto text-center">
            {t("store.subtitle")}
          </p>
        </section>

        <section
          className={`rounded-2xl bg-white/60 border border-[#E8E5E0] p-8 md:p-10 ${locale === "ar" ? "text-right" : ""}`}
          dir={locale === "ar" ? "rtl" : undefined}
        >
          <h2 className="font-clash text-xl md:text-2xl font-medium text-[#1B1B1B] mb-4 border-b border-[#BF822E]/30 pb-2">
            {t("store.shop")}
          </h2>
          <p className="text-[#5A5A5A] leading-relaxed">
            {t("store.comingSoon")}
          </p>
        </section>
      </div>
      <FooterSection />
    </div>
  );
}
