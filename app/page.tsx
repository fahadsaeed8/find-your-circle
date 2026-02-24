"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HeroSection from "./components/HeroSection";

gsap.registerPlugin(ScrollTrigger);
ScrollTrigger.config({ limitCallbacks: true });
gsap.config({ force3D: true });
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
    if (typeof window === "undefined") return;
    const hash = window.location.hash;
    if (hash === "#download") {
      const el = document.getElementById("download");
      if (el) {
        const t = setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 100);
        return () => clearTimeout(t);
      }
    }
    window.scrollTo({ top: 0, behavior: "instant" });
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const onHashChange = () => {
      if (window.location.hash === "#download") {
        const el = document.getElementById("download");
        el?.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    };
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
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
