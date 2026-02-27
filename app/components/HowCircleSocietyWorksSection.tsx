"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useShouldAnimate } from "../hooks/useShouldAnimate";
import { useTranslations } from "../hooks/useTranslations";

gsap.registerPlugin(ScrollTrigger);

export default function HowCircleSocietyWorksSection() {
  const { t } = useTranslations();
  const backgroundRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const stepsRef = useRef<HTMLDivElement>(null);
  const image1Ref = useRef<HTMLDivElement>(null);
  const image2Ref = useRef<HTMLDivElement>(null);
  const image3Ref = useRef<HTMLDivElement>(null);
  const shouldAnimate = useShouldAnimate();

  useEffect(() => {
    if (!backgroundRef.current || !shouldAnimate) return;

    const tl = gsap.timeline({ repeat: -1, ease: "power1.inOut" });
    tl.to(backgroundRef.current, { opacity: 0.6, duration: 3 })
      .to(backgroundRef.current, { opacity: 1, duration: 3 });
    return () => { tl.kill(); };
  }, [shouldAnimate]);

  useEffect(() => {
    if (!sectionRef.current || !headingRef.current || !stepsRef.current) return;

    const stepItems = stepsRef.current.querySelectorAll(".step-item");
    const images = [image1Ref.current, image2Ref.current, image3Ref.current].filter(Boolean);

    if (!shouldAnimate) {
      gsap.set(headingRef.current, { opacity: 1, y: 0 });
      gsap.set(stepItems, { opacity: 1, y: 0 });
      gsap.set(images, { opacity: 1, scale: 1, rotation: 0 });
      return;
    }

    gsap.set(headingRef.current, { opacity: 0, y: -30 });
    gsap.set(stepItems, { opacity: 0, y: 30 });
    if (image1Ref.current) gsap.set(image1Ref.current, { opacity: 0, scale: 0.7, rotation: -15 });
    if (image2Ref.current) gsap.set(image2Ref.current, { opacity: 0, scale: 0.7, rotation: 0 });
    if (image3Ref.current) gsap.set(image3Ref.current, { opacity: 0, scale: 0.7, rotation: 15 });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
        end: "top 50%",
        toggleActions: "play none none none",
      },
    });

    tl.to(headingRef.current, { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" })
      .to(stepItems, { opacity: 1, y: 0, duration: 0.5, ease: "power2.out", stagger: 0.1 }, "-=0.3")
      .to(image1Ref.current, { opacity: 1, scale: 1, rotation: -5, duration: 0.55, ease: "power2.out" }, "-=0.35")
      .to(image2Ref.current, { opacity: 1, scale: 1, rotation: 0, duration: 0.55, ease: "power2.out" }, "-=0.4")
      .to(image3Ref.current, { opacity: 1, scale: 1, rotation: 5, duration: 0.55, ease: "power2.out" }, "-=0.4");

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.vars.trigger === sectionRef.current) trigger.kill();
      });
    };
  }, [shouldAnimate]);

  return (
    <section
      ref={sectionRef}
      className="py-12 px-4 sm:py-16 sm:px-6 bg-[#F5F2ED] md:py-24 md:px-12 relative overflow-hidden"
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

      <div className="mx-auto max-w-7xl relative z-10">
        {/* Main Heading */}
        <h2
          ref={headingRef}
          className="mb-12 sm:mb-40 text-center font-clash text-3xl sm:text-4xl font-medium text-[#1B1B1B] md:text-5xl lg:text-6xl"
        >
          {t("howItWorks.title")}
        </h2>

        {/* Steps Grid */}
        <div
          ref={stepsRef}
          className="grid gap-8 sm:gap-10 md:grid-cols-3 md:gap-6 lg:gap-8"
        >
          {/* Step 1: Discover Activities */}
          <div className="text-center bg-white w-[340px] min-[400px]:w-full p-4 sm:p-5 mb-20 md:mb-0 rounded-2xl step-item">
            <div className="relative mb-4 sm:mb-5 flex items-start justify-center h-[220px] md:h-[280px] overflow-visible">
              {/* Golden Number */}
              <div className="absolute -left-2 sm:-left-4 md:-left-6 lg:-left-25 md:-top-22 z-10">
                <Image
                  src="/1.svg"
                  alt="1"
                  width={180}
                  height={180}
                  className="w-16 h-16 sm:w-20 sm:h-20 md:w-32 -mt-10 md:-mt-0 md:h-32 lg:w-[200px] lg:h-34 drop-shadow-lg"
                />
              </div>

              {/* iPhone Mockup - Left turn */}
              <div
                ref={image1Ref}
                className="relative mt-8 sm:mt-10 md:-mt-30 ml-8 sm:ml-12 md:ml-16 lg:ml-0 transform rotate-[0deg] sm:rotate-[0deg]"
              >
                <div className="overflow-hidden w-[350px] h-[350px] -mt-28 md:-mt-0 ml-0 md:ml-10 md:w-[500px] md:h-[500px]">
                  <Image
                    src="/iPhone-13-Pro-Front.svg"
                    alt="Discover Activities"
                    width={973.6595458984375}
                    height={975.7525634765625}
                    className="w-full h-full md:drop-shadow-2xl"
                  />
                </div>
              </div>
            </div>

            <h3 className="mb-2 sm:mb-3 font-clash text-2xl md:text-3xl font-medium text-[#1B1B1B]">
              {t("howItWorks.discoverActivities")}
            </h3>
            <p className="text-md leading-relaxed text-[#5A5A5A] md:text-base max-w-md mx-auto">
              {t("howItWorks.discoverActivitiesDesc")}
            </p>
          </div>

          {/* Step 2: Join a Community or Event */}
          <div className="text-center bg-white w-[340px] min-[400px]:w-full p-4 sm:p-5 mb-20 md:mb-0 rounded-2xl step-item">
            <div className="relative mb-4 sm:mb-5 flex items-start justify-center h-[220px] md:h-[280px] md:h-[280px] overflow-visible">
              {/* Golden Number */}
              <div className="absolute -left-2 sm:-left-4 md:-left-6 lg:-left-20 md:-top-22 z-10">
                <Image
                  src="/2.svg"
                  alt="2"
                  width={180}
                  height={180}
                  className="w-16 h-16 sm:w-20 sm:h-20 md:w-32 -mt-10 md:-mt-0 md:h-32 lg:w-[200px] lg:h-34 drop-shadow-lg"
                />
              </div>

              {/* iPhone Mockup - Center, slight right turn */}
              <div
                ref={image2Ref}
                className="relative mt-8 sm:mt-10 md:-mt-30 ml-8 sm:ml-12 md:ml-16 lg:ml-20 transform rotate-[0deg] sm:rotate-[0deg]"
              >
                <div className="overflow-hidden w-[350px] h-[350px] -mt-28 md:-mt-0 ml-0 md:-ml-0 md:w-[500px] md:h-[500px]">
                  <Image
                    src="/iPhone-13-Pro-Front-new.svg"
                    alt="Join a Community or Event"
                    width={973.6595458984375}
                    height={975.7525634765625}
                    className="w-full h-full md:drop-shadow-2xl"
                  />
                </div>
              </div>
            </div>

            <h3 className="mb-2 sm:mb-3 font-clash text-2xl md:text-[27px] font-medium text-[#1B1B1B]">
              {t("howItWorks.joinCommunity")}
            </h3>
            <p className="text-md leading-relaxed text-[#5A5A5A] md:text-base max-w-md mx-auto">
              {t("howItWorks.joinCommunityDesc")}
            </p>
          </div>

          {/* Step 3: Build Real Connections */}
          <div className="text-center bg-white w-[340px] min-[400px]:w-full p-4 sm:p-5 rounded-2xl step-item">
            <div className="relative mb-4 sm:mb-5 flex items-start justify-center h-[220px] md:h-[280px] md:h-[280px] overflow-visible">
              {/* Golden Number */}
              <div className="absolute -left-2 sm:-left-4 md:-left-6 lg:-left-20 md:-top-22 z-10">
                <Image
                  src="/3.svg"
                  alt="3"
                  width={180}
                  height={180}
                  className="w-16 h-16 sm:w-20 sm:h-20 md:w-32 -mt-10 md:-mt-0 md:h-32 lg:w-[200px] lg:h-34 drop-shadow-lg"
                />
              </div>

              {/* iPhone Mockup - Right turn */}
              <div
                ref={image3Ref}
                className="relative mt-8 sm:mt-10 md:-mt-30 ml-8 sm:ml-12 md:ml-16 lg:ml-20 transform rotate-[0deg] sm:rotate-[30deg]"
              >
                <div className="overflow-hidden w-[260px] h-[340px] -mt-28 md:-mt-0 ml-0 md:-ml-0 md:w-[400px] md:h-[500px]">
                  <Image
                    src="/iPhone-13-Pro-Front-latest.png"
                    alt="Build Real Connections"
                    width={973.6595458984375}
                    height={975.7525634765625}
                    className="w-full h-full  md:drop-shadow-2xl"
                  />
                </div>
              </div>
            </div>

            <h3 className="mb-2 sm:mb-3 font-clash text-2xl md:text-3xl font-medium text-[#1B1B1B]">
              {t("howItWorks.buildConnections")}
            </h3>
            <p className="text-md leading-relaxed text-[#5A5A5A] md:text-base max-w-md mx-auto">
              {t("howItWorks.buildConnectionsDesc")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
