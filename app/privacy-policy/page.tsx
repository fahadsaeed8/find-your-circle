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
      <div className="mx-auto max-w-6xl px-6 py-10 md:py-16 md:px-8">
        <h1 className="font-clash text-center md:text-start text-3xl md:text-4xl lg:text-5xl font-medium text-[#BF822E] mb-2">
          {t("privacy.title")}
        </h1>
        <p className=" text-sm text-center md:text-start mb-10 text-black font-bold">{t("terms.lastUpdated")}<span className="font-medium text-[#5A5A5A]"> {t("terms.feb2026")}</span> </p>

        <div className="prose-policy space-y-8 text-[#1B1B1B]">
          <p className="leading-relaxed text-[#5A5A5A]">
            {t("privacy.intro")}
          </p>

          <section>
            <h2 className="font-clash text-xl md:text-2xl font-medium text-[#1B1B1B] mb-3 border-b border-[#BF822E]/30 pb-2">
              {t("privacy.collect")}
            </h2>
            <ul className="list-disc list-inside space-y-2 text-[#5A5A5A] pl-2 marker:text-[#BF822E]">
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
            <ul className="list-disc list-inside space-y-2 text-[#5A5A5A] pl-2 marker:text-[#BF822E]">
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
            <ul className="list-disc list-inside space-y-2 text-[#5A5A5A] pl-2 marker:text-[#BF822E]">
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
            <ul className="list-disc list-inside space-y-2 text-[#5A5A5A] pl-2 marker:text-[#BF822E]">
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
              📧 support@circlesociety.ae
            </p>
          </section>
        </div>
      </div>
      <FooterSection />
    </div>
  );
}
