"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useShouldAnimate } from "../hooks/useShouldAnimate";
import { useTranslations } from "../hooks/useTranslations";

gsap.registerPlugin(ScrollTrigger);

export default function EasyAndSafeFeaturesSection() {
  const { t, locale } = useTranslations();
  const isAr = locale === "ar";
  const backgroundRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const h2Ref1 = useRef<HTMLHeadingElement>(null);
  const h2Ref2 = useRef<HTMLHeadingElement>(null);
  const featureCardsRef = useRef<HTMLDivElement>(null);
  const shouldAnimate = useShouldAnimate();

  useEffect(() => {
    if (!backgroundRef.current || !shouldAnimate) return;

    const tl = gsap.timeline({ repeat: -1, ease: "power1.inOut" });
    tl.to(backgroundRef.current, { opacity: 0.6, duration: 3 })
      .to(backgroundRef.current, { opacity: 1, duration: 3 });
    return () => { tl.kill(); };
  }, [shouldAnimate]);

  useEffect(() => {
    if (
      !sectionRef.current ||
      !h2Ref1.current ||
      !h2Ref2.current ||
      !featureCardsRef.current
    )
      return;

    const featureItems = featureCardsRef.current.querySelectorAll(".feature-item");

    if (!shouldAnimate) {
      gsap.set([h2Ref1.current, h2Ref2.current], { opacity: 1, y: 0 });
      gsap.set(featureItems, { opacity: 1, y: 0 });
      return;
    }

    gsap.set([h2Ref1.current, h2Ref2.current], { opacity: 0, y: -30 });
    gsap.set(featureItems, { opacity: 0, y: -30 });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
        end: "top 50%",
        toggleActions: "play none none none",
      },
    });

    tl.to(h2Ref1.current, { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" })
      .to(h2Ref2.current, { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" }, "-=0.3")
      .to(featureItems, { opacity: 1, y: 0, duration: 0.5, ease: "power2.out", stagger: 0.1 }, "-=0.3");

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.vars.trigger === sectionRef.current) trigger.kill();
      });
    };
  }, [shouldAnimate]);

  return (
    <section
      ref={sectionRef}
      className="py-12 px-4 sm:py-16 -mt-1 md:-mt-0 sm:px-6 bg-[#F4EDE2] md:py-24 md:px-12 relative overflow-hidden"
    >
      {/* Background Image */}
      <div
        ref={backgroundRef}
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('/Background-grey.svg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      ></div>
      <div className="mx-auto max-w-6xl relative z-10">
        <h2
          ref={h2Ref1}
          className="mb-2 sm:mb-4 text-center font-clash text-3xl min-[400px]:text-4xl font-medium text-[#1B1B1B] md:text-5xl"
        >
          {t("features.whatYouCanDo")}
        </h2>
        <h2
          ref={h2Ref2}
          className="mb-6 sm:mb-4 text-center font-clash text-3xl min-[400px]:text-4xl font-medium text-[#1B1B1B] md:text-5xl md:mb-4"
        >
          {t("features.theCircleSociety")}{" "}
        </h2>

        {/* Feature Cards - Arabic: all centered */}
        <div
          ref={featureCardsRef}
          className="grid gap-6 sm:gap-8 md:grid-cols-3 md:gap-6 md:mt-20 lg:gap-8"
          dir={isAr ? "rtl" : undefined}
        >
          {/* Feature 1: Community Groups */}
          <div className={`feature-item ${isAr ? "text-center" : "text-center md:text-start"}`}>
            <div className={`mb-4 sm:mb-6 flex justify-center ${isAr ? "" : "md:justify-start"}`}>
              <div className="w-full max-w-[280px] sm:max-w-[320px] md:max-w-[340px]">
                <Image
                  src="/community groups.jpg.jpeg"
                  alt="Community Groups"
                  width={340}
                  height={340}
                  className="w-full h-auto"
                />
              </div>
            </div>
            <h4 className={`mb-2 sm:mb-3 font-clash text-2xl md:text-3xl font-medium text-[#1B1B1B] ${isAr ? "text-center" : "text-center md:text-start"}`}>
              {t("features.joinCommunities")}{" "}
            </h4>
            <p className={`text-lg leading-relaxed w-[60%] sm:w-[80%] text-[#5A5A5A] md:text-[22px] ${isAr ? "text-center mx-auto" : "text-center md:text-start mx-auto md:mx-0"}`}>
              {t("features.joinCommunitiesDesc")}
            </p>
          </div>

          {/* Feature 2: Events You'll Love */}
          <div className={`feature-item ${isAr ? "text-center" : "text-center md:text-start"}`}>
            <div className={`mb-4 sm:mb-6 flex justify-center ${isAr ? "" : "md:justify-start"}`}>
              <div className="w-full max-w-[280px] sm:max-w-[320px] md:max-w-[340px]">
                <Image
                  src="/events.jpg.jpeg"
                  alt="Events You'll Love"
                  width={340}
                  height={340}
                  className="w-full h-auto"
                />
              </div>
            </div>
            <h4 className={`mb-2 sm:mb-3 font-clash text-2xl md:text-3xl font-medium text-[#1B1B1B] ${isAr ? "text-center" : "text-center md:text-start"}`}>
              {t("features.attendEvents")}{" "}
            </h4>
            <p className={`text-lg leading-relaxed w-[60%] sm:w-[80%] text-[#5A5A5A] md:text-[22px] ${isAr ? "text-center mx-auto" : "text-center md:text-start mx-auto md:mx-0"}`}>
              {t("features.attendEventsDesc")}{" "}
            </p>
          </div>

          {/* Feature 3: Match & Connect */}
          <div className={`feature-item ${isAr ? "text-center" : "text-center md:text-start"}`}>
            <div className={`mb-4 sm:mb-6 flex justify-center ${isAr ? "" : "md:justify-start"}`}>
              <div className="w-full max-w-[280px] sm:max-w-[320px] md:max-w-[340px]">
                <Image
                  src="/match & connect.jpg.jpeg"
                  alt="Match & Connect"
                  width={340}
                  height={340}
                  className="w-full h-auto"
                />
              </div>
            </div>
            <h4 className={`mb-2 sm:mb-3 font-clash text-2xl md:text-3xl font-medium text-[#1B1B1B] ${isAr ? "text-center" : "text-center md:text-start"}`}>
              {t("features.meetNaturally")}{" "}
            </h4>
            <p className={`text-lg leading-relaxed w-[60%] sm:w-[80%] text-[#5A5A5A] md:text-[22px] ${isAr ? "text-center mx-auto" : "text-center md:text-start mx-auto md:mx-0"}`}>
              {t("features.meetNaturallyDesc")}{" "}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
