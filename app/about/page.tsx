import { headers } from "next/headers";
import Image from "next/image";
import Link from "next/link";
import HeaderSection from "../components/HeaderSection";
import FooterSection from "../components/FooterSection";
import { getTranslation, type Locale } from "../../lib/translations";

export default async function AboutPage() {
  const headersList = await headers();
  const locale = (headersList.get("x-next-locale") || "en") as Locale;
  const t = (key: string) => getTranslation(locale, key);

  return (
    <div className="min-h-screen bg-[#F5F2ED]">
      <HeaderSection />

      {/* Section 1 – About Us Hero: background image with text overlay */}
      <section className="relative min-h-[70vh] md:min-h-[85vh] flex items-center justify-center mb-20 md:mb-28">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=1200&q=85"
            alt=""
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
          <div
            className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/75"
            aria-hidden
          />
        </div>
        <div className="relative z-10 w-full max-w-4xl mx-auto px-6 md:px-10 text-center">
          <p className="text-[#D99F4F] font-semibold text-sm uppercase tracking-[0.2em] mb-4">
            {t("about.title")}
          </p>
          <h1 className="font-clash text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-medium text-white mb-5 leading-tight drop-shadow-lg">
            {t("about.heroHeading")}
          </h1>
          <span
            className="inline-block w-24 h-1 rounded-full mb-6 bg-gradient-to-r from-[#D99F4F] to-[#BF822E]"
            aria-hidden
          />
          <p className="text-white/95 text-lg md:text-xl lg:text-2xl leading-relaxed max-w-2xl mx-auto drop-shadow-md">
            {t("about.heroDesc")}
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-6 pb-16 md:pb-24 md:px-8">

        {/* Section 2 – Who We Are, Mission & Vision, What We Offer */}
        <section className="mb-20 md:mb-28">
          <div className="space-y-12 md:space-y-16">
            {/* Who We Are block */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl ring-2 ring-[#BF822E]/10 order-2 lg:order-1">
                <Image
                  src="https://images.unsplash.com/photo-1543269865-cbf427effbad?w=800&q=80"
                  alt="Community and belonging"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div className="order-1 lg:order-2">
                <h2 className="font-clash text-2xl md:text-3xl font-medium text-[#1B1B1B] mb-5">
                  {t("about.whoWeAreTitle")}
                </h2>
                <p className="text-[#5A5A5A] text-base md:text-lg leading-relaxed mb-5">
                  {t("about.whoWeAreDesc")}
                </p>
                <p className="text-[#5A5A5A] text-base leading-relaxed">
                  {t("about.whoWeAreDesc2")}
                </p>
              </div>
            </div>

            {/* Mission & Vision cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              <div className="bg-white rounded-2xl p-7 md:p-8 shadow-lg border border-[#E8E5E0] hover:shadow-xl transition-shadow">
                <div className="w-11 h-11 rounded-xl mb-5 flex items-center justify-center" style={{ background: "linear-gradient(135deg, #D99F4F, #BF822E)" }} aria-hidden>
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                </div>
                <h3 className="font-clash text-xl font-medium text-[#1B1B1B] mb-3">
                  {t("about.missionTitle")}
                </h3>
                <p className="text-[#5A5A5A] text-base leading-relaxed">
                  {t("about.missionDesc")}
                </p>
              </div>
              <div className="bg-white rounded-2xl p-7 md:p-8 shadow-lg border border-[#E8E5E0] hover:shadow-xl transition-shadow">
                <div className="w-11 h-11 rounded-xl mb-5 flex items-center justify-center" style={{ background: "linear-gradient(135deg, #73542A, #5A4222)" }} aria-hidden>
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
                </div>
                <h3 className="font-clash text-xl font-medium text-[#1B1B1B] mb-3">
                  {t("about.visionTitle")}
                </h3>
                <p className="text-[#5A5A5A] text-base leading-relaxed">
                  {t("about.visionDesc")}
                </p>
              </div>
            </div>

            {/* What We Offer */}
            <div>
              <h2 className="font-clash text-2xl md:text-3xl font-medium text-[#1B1B1B] mb-6">
                {t("about.whatWeOfferTitle")}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6">
                {[
                  { key: "about.whatWeOffer1", icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" },
                  { key: "about.whatWeOffer2", icon: "M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" },
                  { key: "about.whatWeOffer3", icon: "M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" },
                ].map(({ key, icon }, i) => {
                  const text = t(key);
                  const parts = text.split(" — ");
                  const title = parts[0] ?? text;
                  const desc = parts[1];
                  return (
                    <div key={i} className="bg-white rounded-xl p-5 md:p-6 shadow-md border border-[#E8E5E0] hover:shadow-lg transition-shadow">
                      <div className="w-10 h-10 rounded-lg mb-4 flex items-center justify-center bg-[#BF822E]/15" aria-hidden>
                        <svg className="w-5 h-5 text-[#BF822E]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={icon} /></svg>
                      </div>
                      <h3 className="font-semibold text-[#1B1B1B] mb-1 text-base">{title}</h3>
                      <p className="text-[#5A5A5A] text-sm leading-relaxed">{desc || ""}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Section 3 – Join the Circle CTA */}
        <section className="rounded-3xl overflow-hidden shadow-2xl" style={{ background: "linear-gradient(135deg, #73542A 0%, #BF822E 50%, #D99F4F 100%)" }}>
          <div className="px-8 py-16 md:px-16 md:py-20 text-center">
            <h2 className="font-clash text-3xl md:text-4xl lg:text-5xl font-medium text-white mb-4">
              {t("about.joinCircleTitle")}
            </h2>
            <p className="text-white/95 text-lg md:text-xl max-w-xl mx-auto mb-10 leading-relaxed">
              {t("about.joinCircleDesc")}
            </p>
            <Link
              href="/#download"
              className="inline-flex items-center gap-2 bg-white text-[#73542A] font-semibold px-8 py-4 rounded-xl hover:bg-[#F5F2ED] transition-colors shadow-lg"
            >
              {t("about.joinCircleCta")}
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </Link>
          </div>
        </section>
      </div>

      <FooterSection />
    </div>
  );
}
