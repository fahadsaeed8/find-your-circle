import { headers } from "next/headers";
import HeaderSection from "../components/HeaderSection";
import FooterSection from "../components/FooterSection";
import { getTranslation, type Locale } from "../../lib/translations";

export default async function RefundCancellationPolicyPage() {
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
          {t("refund.title")}
        </h1>
        <p className={`text-sm mb-10 text-black font-bold ${locale === "ar" ? "text-right" : "text-center md:text-start"}`}>{t("terms.lastUpdated")}<span className="font-medium text-[#5A5A5A]"> {t("terms.feb2026")}</span> </p>

        <div className="prose-policy space-y-8 text-[#1B1B1B]">
          <section>
            <h2 className="font-clash text-xl md:text-2xl font-medium text-[#1B1B1B] mb-3 border-b border-[#BF822E]/30 pb-2">
              {t("refund.section1")}
            </h2>
            <ul className={`list-disc list-inside space-y-2 text-[#5A5A5A] marker:text-[#BF822E] ${locale === "ar" ? "pr-2" : "pl-2"}`}>
              <li>{t("refund.s1p1")} <span className="text-black font-bold">{t("refund.nonRefundable")}</span> {t("refund.s1p1b")}</li>
              <li>{t("refund.s1p2")}
                <ul className={`list-[circle] list-inside mt-2 space-y-1 text-[#5A5A5A] marker:text-[#BF822E] ${locale === "ar" ? "mr-4" : "ml-4"}`}>
                  <li>{t("refund.s1li1")}</li>
                  <li>{t("refund.s1li2")}</li>
                </ul>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="font-clash text-xl md:text-2xl font-medium text-[#1B1B1B] mb-3 border-b border-[#BF822E]/30 pb-2">
              {t("refund.section2")}
            </h2>
            <ul className={`list-disc list-inside space-y-2 text-[#5A5A5A] marker:text-[#BF822E] ${locale === "ar" ? "pr-2" : "pl-2"}`}>
              <li>{t("refund.s2li1")} <span className="text-black font-bold"> {t("refund.s2li1b")}</span> {t("refund.s2li1c")}</li>
              <li>{t("refund.s2li2")} <span className="text-black font-bold"> {t("refund.s2li2b")}</span> {t("refund.s2li2c")}</li>
            </ul>
          </section>

          <section>
            <h2 className="font-clash text-xl md:text-2xl font-medium text-[#1B1B1B] mb-3 border-b border-[#BF822E]/30 pb-2">
              {t("refund.section3")}
            </h2>
            <p className="leading-relaxed text-[#5A5A5A]">
              {t("refund.s3p")}
            </p>
          </section>

          <section>
            <h2 className="font-clash text-xl md:text-2xl font-medium text-[#1B1B1B] mb-3 border-b border-[#BF822E]/30 pb-2">
              {t("refund.section4")}
            </h2>
            <p className="leading-relaxed text-[#5A5A5A]">
              {t("refund.s4p")}
            </p>
          </section>

          <section>
            <h2 className="font-clash text-xl md:text-2xl font-medium text-[#1B1B1B] mb-3 border-b border-[#BF822E]/30 pb-2">
              {t("refund.section5")}
            </h2>
            <p className="leading-relaxed text-[#5A5A5A]">
              {t("refund.s5p")}
            </p>
          </section>
        </div>
      </div>
      <FooterSection />
    </div>
  );
}
