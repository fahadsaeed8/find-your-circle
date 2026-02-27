"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useShouldAnimate } from "../hooks/useShouldAnimate";
import { useTranslations } from "../hooks/useTranslations";

gsap.registerPlugin(ScrollTrigger);

export default function WhoWeAreSection() {
  const { t } = useTranslations();
  const sectionRef = useRef<HTMLElement>(null);
  const h2Ref = useRef<HTMLHeadingElement>(null);
  const h3Ref = useRef<HTMLHeadingElement>(null);
  const pRef = useRef<HTMLParagraphElement>(null);
  const shouldAnimate = useShouldAnimate();

  useEffect(() => {
    if (
      !sectionRef.current ||
      !h2Ref.current ||
      !h3Ref.current ||
      !pRef.current
    )
      return;

    const elts = [h2Ref.current, h3Ref.current, pRef.current];

    if (!shouldAnimate) {
      gsap.set(elts, { opacity: 1, y: 0 });
      return;
    }

    gsap.set(elts, { opacity: 0, y: -30 });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
        end: "top 50%",
        toggleActions: "play none none none",
      },
    });

    tl.to(h2Ref.current, {
      opacity: 1,
      y: 0,
      duration: 0.55,
      ease: "power2.out",
    })
      .to(h3Ref.current, { opacity: 1, y: 0, duration: 0.55, ease: "power2.out" }, "-=0.35")
      .to(pRef.current, { opacity: 1, y: 0, duration: 0.55, ease: "power2.out" }, "-=0.35");

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.vars.trigger === sectionRef.current) {
          trigger.kill();
        }
      });
    };
  }, [shouldAnimate]);

  return (
    <section
      ref={sectionRef}
      className="bg-[#f5f5f0] py-12 sm:py-14 md:py-18 px-4 sm:px-6 md:px-12"
    >
      <div className="mx-auto max-w-4xl text-center">
        <h2
          ref={h2Ref}
          className="mb-3 sm:mb-4 text-xl sm:text-2xl font-medium text-[#2F5D50] md:text-3xl"
        >
          {t("whoWeAre.heading")}
        </h2>
        <h3
          ref={h3Ref}
          className="mb-4 sm:mb-6 font-clash text-4xl font-medium text-[#1B1B1B] md:text-4xl lg:text-5xl"
        >
          {t("whoWeAre.title")}{" "}
        </h3>
        <p
          ref={pRef}
          className="text-md leading-relaxed text-[#5A5A5A] md:text-xl px-2 sm:px-0"
        >
          Circle Society helps people discover communities, attend local events,
          and build meaningful social connections. Whether you’re new to a city,
          exploring interests, or looking for real-world activities — this is
          where social life begins.
        </p>
      </div>
    </section>
  );
}
