import { headers } from "next/headers";
import HeaderSection from "../components/HeaderSection";
import FooterSection from "../components/FooterSection";
import { getTranslation, type Locale } from "../../lib/translations";

export default async function PrivacyPolicyPage() {
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
          {t("privacy.title")}
        </h1>
        <p className={`text-sm mb-10 text-black font-bold ${locale === "ar" ? "text-right" : "text-center md:text-start"}`}>{t("terms.lastUpdated")}<span className="font-medium text-[#5A5A5A]"> {t("terms.feb2026")}</span> </p>

        <div className="prose-policy space-y-8 text-[#1B1B1B]">
          <p className="leading-relaxed text-[#5A5A5A]">
            {t("privacy.intro")}
          </p>

          <section>
            <h2 className="font-clash text-xl md:text-2xl font-medium text-[#1B1B1B] mb-3 border-b border-[#BF822E]/30 pb-2">
              {t("privacy.collect")}
            </h2>
            <ul className={`list-disc list-inside space-y-2 text-[#5A5A5A] marker:text-[#BF822E] ${locale === "ar" ? "pr-2" : "pl-2"}`}>
              <li>{t("privacy.collect1")}</li>
              <li>{t("privacy.collect2")}</li>
              <li>{t("privacy.collect3")}</li>
              <li>{t("privacy.collect4")}</li>
            </ul>
          </section>

          <section>
            <h2 className="font-clash text-xl md:text-2xl font-medium text-[#1B1B1B] mb-3 border-b border-[#BF822E]/30 pb-2">
              {t("privacy.use")}
            </h2>
            <ul className={`list-disc list-inside space-y-2 text-[#5A5A5A] marker:text-[#BF822E] ${locale === "ar" ? "pr-2" : "pl-2"}`}>
              <li>{t("privacy.use1")}</li>
              <li>{t("privacy.use2")}</li>
              <li>{t("privacy.use3")}</li>
              <li>{t("privacy.use4")}</li>
            </ul>
          </section>

          <section>
            <h2 className="font-clash text-xl md:text-2xl font-medium text-[#1B1B1B] mb-3 border-b border-[#BF822E]/30 pb-2">
              {t("privacy.protection")}
            </h2>
            <ul className={`list-disc list-inside space-y-2 text-[#5A5A5A] marker:text-[#BF822E] ${locale === "ar" ? "pr-2" : "pl-2"}`}>
              <li>{t("privacy.protection1")}</li>
              <li>{t("privacy.protection2")}</li>
              <li>{t("privacy.protection3")}</li>
            </ul>
          </section>

          <section>
            <h2 className="font-clash text-xl md:text-2xl font-medium text-[#1B1B1B] mb-3 border-b border-[#BF822E]/30 pb-2">
              {t("privacy.thirdParty")}
            </h2>
            <p className="leading-relaxed text-[#5A5A5A] mb-3">
              {t("privacy.thirdPartyIntro")}
            </p>
            <ul className={`list-disc list-inside space-y-2 text-[#5A5A5A] marker:text-[#BF822E] ${locale === "ar" ? "pr-2" : "pl-2"}`}>
              <li>{t("privacy.thirdParty1")}</li>
              <li>{t("privacy.thirdParty2")}</li>
              <li>{t("privacy.thirdParty3")}</li>
            </ul>
            <p className="leading-relaxed text-[#5A5A5A] mt-3">
              {t("privacy.thirdPartyOutro")}
            </p>
          </section>

          <section>
            <h2 className="font-clash text-xl md:text-2xl font-medium text-[#1B1B1B] mb-3 border-b border-[#BF822E]/30 pb-2">
              {t("privacy.userRights")}
            </h2>
            <p className="leading-relaxed text-[#5A5A5A]">
              {t("privacy.userRightsDesc")}
            </p>
          </section>

          <section>
            <h2 className="font-clash text-xl md:text-2xl font-medium text-[#1B1B1B] mb-3 border-b border-[#BF822E]/30 pb-2">
              {t("privacy.contact")}
            </h2>
            <p className="leading-relaxed text-[#5A5A5A]">
              {t("contact.emailLabel")}: <a href={`mailto:${t("contact.supportEmail")}`} className="text-[#BF822E] hover:underline">{t("contact.supportEmail")}</a>
            </p>
          </section>
        </div>
      </div>
      <FooterSection />
    </div>
  );
}
