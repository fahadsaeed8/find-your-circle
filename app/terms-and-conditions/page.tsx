import { headers } from "next/headers";
import HeaderSection from "../components/HeaderSection";
import FooterSection from "../components/FooterSection";
import { getTranslation, type Locale } from "../../lib/translations";

export default async function TermsAndConditionsPage() {
  const headersList = await headers();
  const locale = (headersList.get("x-next-locale") || "en") as Locale;
  const t = (key: string) => getTranslation(locale, key);

  return (
    <div className="min-h-screen bg-[#F5F2ED]">
      <HeaderSection />
      <div
        className={`mx-auto max-w-6xl px-6 py-10 md:py-16 md:px-8 ${locale === "ar" ? "text-right" : ""}`}
        dir={locale === "ar" ? "rtl" : undefined}
      >
        <h1 className={`font-clash text-3xl md:text-4xl lg:text-5xl font-medium text-[#BF822E] mb-2 ${locale === "ar" ? "text-right" : "text-center md:text-start"}`}>
          {t("terms.title")}
        </h1>
        <p className={`text-sm mb-10 text-black font-bold ${locale === "ar" ? "text-right" : "text-center md:text-start"}`}>{t("terms.lastUpdated")}<span className="font-medium text-[#5A5A5A]"> {t("terms.feb2026")}</span> </p>

        <div className="prose-policy space-y-8 text-[#1B1B1B]">
          <p className="leading-relaxed text-[#5A5A5A]">
            {t("terms.welcome")} <span className="font-bold text-black">{t("brand.name")}.</span> {t("terms.welcomeDesc")}
          </p>

          <section>
            <h2 className="font-clash text-xl md:text-2xl font-medium text-[#1B1B1B] mb-3 border-b border-[#BF822E]/30 pb-2">
              {t("terms.platformOverview")}
            </h2>
            <p className="leading-relaxed text-[#5A5A5A]">
              {t("terms.platformOverviewDesc")}
            </p>
          </section>

          <section>
            <h2 className="font-clash text-xl md:text-2xl font-medium text-[#1B1B1B] mb-3 border-b border-[#BF822E]/30 pb-2">
              {t("terms.userEligibility")}
            </h2>
            <ul className={`list-disc list-inside space-y-2 text-[#5A5A5A] marker:text-[#BF822E] ${locale === "ar" ? "pr-2" : "pl-2"}`}>
              <li>{t("terms.userEligibility1")}</li>
              <li>{t("terms.userEligibility2")}</li>
              <li>{t("terms.userEligibility3")}</li>
            </ul>
          </section>

          <section>
            <h2 className="font-clash text-xl md:text-2xl font-medium text-[#1B1B1B] mb-3 border-b border-[#BF822E]/30 pb-2">
              {t("terms.userResponsibilities")}
            </h2>
            <ul className={`list-disc list-inside space-y-2 text-[#5A5A5A] marker:text-[#BF822E] ${locale === "ar" ? "pr-2" : "pl-2"}`}>
              <li>{t("terms.userResp1")}</li>
              <li>{t("terms.userResp2")}</li>
              <li>{t("terms.userResp3")}</li>
            </ul>
          </section>

          <section>
            <h2 className="font-clash text-xl md:text-2xl font-medium text-[#1B1B1B] mb-3 border-b border-[#BF822E]/30 pb-2">
              {t("terms.payments")}
            </h2>
            <ul className={`list-disc list-inside space-y-2 text-[#5A5A5A] marker:text-[#BF822E] ${locale === "ar" ? "pr-2" : "pl-2"}`}>
              <li>{t("terms.payments1")}</li>
              <li>{t("terms.payments2")}</li>
              <li>{t("terms.payments3")}</li>
            </ul>
          </section>

          <section>
            <h2 className="font-clash text-xl md:text-2xl font-medium text-[#1B1B1B] mb-3 border-b border-[#BF822E]/30 pb-2">
              {t("terms.events")}
            </h2>
            <ul className={`list-disc list-inside space-y-2 text-[#5A5A5A] marker:text-[#BF822E] ${locale === "ar" ? "pr-2" : "pl-2"}`}>
              <li>{t("terms.events1")}</li>
              <li>{t("terms.events2")}</li>
            </ul>
          </section>

          <section>
            <h2 className="font-clash text-xl md:text-2xl font-medium text-[#1B1B1B] mb-3 border-b border-[#BF822E]/30 pb-2">
              {t("terms.ip")}
            </h2>
            <p className="leading-relaxed text-[#5A5A5A]">
              {t("terms.ipDesc")}
            </p>
          </section>

          <section>
            <h2 className="font-clash text-xl md:text-2xl font-medium text-[#1B1B1B] mb-3 border-b border-[#BF822E]/30 pb-2">
              {t("terms.liability")}
            </h2>
            <p className="leading-relaxed text-[#5A5A5A]">
              {t("terms.liabilityDesc")}
            </p>
          </section>

          <section>
            <h2 className="font-clash text-xl md:text-2xl font-medium text-[#1B1B1B] mb-3 border-b border-[#BF822E]/30 pb-2">
              {t("terms.governingLaw")}
            </h2>
            <p className="leading-relaxed text-[#5A5A5A]">
              {t("terms.governingLawDesc")}
            </p>
          </section>

          <section className="pt-4 mt-8 text-sm text-center md:text-start text-[#5A5A5A]">
            <p className="font-medium mb-1">{t("terms.companyInfo")}</p>
            <p className="font-medium">{t("brand.name")}</p>
            <p>{t("terms.address")}</p>
            <p>{t("contact.emailLabel")}: <a href={`mailto:${t("contact.supportEmail")}`} className="text-[#BF822E] hover:underline">{t("contact.supportEmail")}</a></p>
          </section>
        </div>
      </div>
      <FooterSection />
    </div>
  );
}
