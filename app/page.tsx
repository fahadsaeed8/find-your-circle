"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HeroSection from "./components/HeroSection";

gsap.registerPlugin(ScrollTrigger);
// Reduces scroll jank on mobile: callbacks only when trigger state toggles, not every scroll tick.
ScrollTrigger.config({ limitCallbacks: true });
import WhoWeAreSection from "./components/WhoWeAreSection";
import EasyAndSafeFeaturesSection from "./components/EasyAndSafeFeaturesSection";
import WhereRealConnectionsSection from "./components/WhereRealConnectionsSection";
import StatisticsSection from "./components/StatisticsSection";
import DownloadAppSection from "./components/DownloadAppSection";
import FooterSection from "./components/FooterSection";
import VideoSection from "./components/VideoSection";
import HowCircleSocietyWorksSection from "./components/HowCircleSocietyWorksSection";
import FaithCommunitiesSection from "./components/FaithCommunitiesSection";
import FindYourPeopleSection from "./components/FindYourPeopleSection";
import TestimonialsSection from "./components/TestimonialsSection";
import Image from "next/image";

export default function Home() {

  useEffect(() => {

    window.scrollTo({ top: 0, behavior: "instant" });

    if (
      typeof window !== "undefined" &&
      "scrollRestoration" in window.history
    ) {
      window.history.scrollRestoration = "manual";
    }
  }, []);

  useEffect(() => {

    const timer = setTimeout(() => {
      if (typeof window !== "undefined") {
        ScrollTrigger.refresh();
      }
    }, 100);

    let refreshTicking = false;
    const handleResize = () => {
      if (refreshTicking) return;
      refreshTicking = true;
      requestAnimationFrame(() => {
        ScrollTrigger.refresh();
        refreshTicking = false;
      });
    };

    window.addEventListener("resize", handleResize);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <main className="w-full overflow-x-hidden max-w-full">
      <HeroSection />
      <StatisticsSection />
      <WhoWeAreSection />
      <EasyAndSafeFeaturesSection />
      <FaithCommunitiesSection />
      <HowCircleSocietyWorksSection />
      {/* <VideoSection /> */}
      <TestimonialsSection />
      <FindYourPeopleSection />
      <WhereRealConnectionsSection />
      <DownloadAppSection />
      <FooterSection />
    </main>
  );
}
