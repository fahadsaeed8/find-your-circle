import { headers } from "next/headers";
import HeaderSection from "../components/HeaderSection";
import FooterSection from "../components/FooterSection";
import ContactForm from "../components/ContactForm";
import { getTranslation, type Locale } from "../../lib/translations";

export default async function ContactUsPage() {
  const headersList = await headers();
  const locale = (headersList.get("x-next-locale") || "en") as Locale;
  const t = (key: string) => getTranslation(locale, key);

  return (
    <div className="min-h-screen bg-[#F5F2ED]">
      <HeaderSection />
      <div className="mx-auto max-w-5xl px-6 pt-[40px] md:pt-[60px] pb-16 md:pb-24 md:px-8">
        <section className="relative mb-12 md:mb-16 overflow-hidden text-center" dir={locale === "ar" ? "rtl" : undefined}>
          <h1 className="font-clash text-4xl md:text-4xl lg:text-7xl font-medium text-[#BF822E] mb-4 relative">
            {t("contact.title")}
          </h1>
          <p className="text-[#5A5A5A] text-lg leading-relaxed max-w-2xl mx-auto">
            {t("contact.subtitle")}
          </p>
        </section>

        <section className={locale === "ar" ? "text-right" : ""} dir={locale === "ar" ? "rtl" : undefined}>
          <div className="rounded-2xl bg-white border border-[#E8E5E0] shadow-sm p-8 md:p-10">
            <h2 className="font-clash text-xl md:text-2xl font-medium text-[#1B1B1B] mb-2">
              {t("contact.sendMessageTitle")}
            </h2>
            <p className="text-[#5A5A5A] text-sm mb-6">
              {t("contact.sendMessageDesc")}
            </p>
            <ContactForm />
          </div>
        </section>
      </div>
      <FooterSection />
    </div>
  );
}
