"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

function GlobeIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      <path d="M2 12h20" />
    </svg>
  );
}

export default function HeaderSection() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [lang, setLang] = useState<"eng" | "arb">("eng");

  return (
    <>
      <header className="flex items-center justify-between gap-4 bg-white px-4 sm:px-6 py-4 md:py-5 md:px-24 border-b border-[#E8E5E0]">
        {/* Logo - Left */}
        <Link href={"/"} className="flex items-center flex-shrink-0 md:ml-4">
          <div
            className="animate-rotate"
            style={{
              animation: "rotate 10s linear infinite",
              display: "inline-block",
              transformOrigin: "center center",
            }}
          >
            <Image
              src={"/LOGO CS-01.png"}
              width={70}
              height={70}
              alt="logo"
              className="md:w-[70px] md:h-[70px]"
            />
          </div>
        </Link>

        {/* Nav Links - Desktop Only, Centered */}
        <nav className="hidden md:flex flex-1 justify-center gap-6 lg:gap-8 text-[16px] font-semibold uppercase tracking-wide text-black">
          <a className="hover:opacity-80 transition-opacity" href="#">
            ABOUT
          </a>
          <a className="hover:opacity-80 transition-opacity" href="#">
            Stories
          </a>
          <a className="hover:opacity-80 transition-opacity" href="#">
            STORE
          </a>
          <a className="hover:opacity-80 transition-opacity" href="#">
            Contact Us
          </a>
          <a className="hover:opacity-80 transition-opacity" href="#">
            Download
          </a>
        </nav>

        {/* Right: Language (desktop only) + Hamburger (mobile only) */}
        <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
          {/* Language selector - desktop only; on mobile it shows inside menu drawer */}
          <div
            className="hidden md:flex items-center gap-2 rounded-full bg-[#F5F2ED] px-3 py-2 border border-[#E8E5E0]"
            role="group"
            aria-label="Language"
          >
            <GlobeIcon className="w-4 h-4 text-[#5A5A5A] flex-shrink-0" />
            <button
              type="button"
              onClick={() => setLang("eng")}
              className={`text-sm font-semibold uppercase tracking-wide px-2 py-0.5 rounded transition-colors ${
                lang === "eng"
                  ? "text-white bg-[#D4A14E]"
                  : "text-[#5A5A5A] hover:text-[#2d2d2d]"
              }`}
            >
              Eng
            </button>
            <span className="text-[#C4C0B8]">|</span>
            <button
              type="button"
              onClick={() => setLang("arb")}
              className={`text-sm font-semibold uppercase tracking-wide px-2 py-0.5 rounded transition-colors ${
                lang === "arb"
                  ? "text-white bg-[#D4A14E]"
                  : "text-[#5A5A5A] hover:text-[#2d2d2d]"
              }`}
            >
              Arabic
            </button>
          </div>

          <button
            type="button"
            className="md:hidden flex flex-col gap-1.5 w-8 h-8 justify-center items-center z-50 relative"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
          >
            <span
              className={`w-full h-0.5 bg-black block transition-all duration-200 origin-center ${
                mobileMenuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`w-full h-0.5 bg-black block transition-all duration-200 ${
                mobileMenuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`w-full h-0.5 bg-black block transition-all duration-200 origin-center ${
                mobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay & Panel */}
        <div
          className={`md:hidden fixed inset-0 z-40 transition-opacity duration-200 ${
            mobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
          }`}
          aria-hidden={!mobileMenuOpen}
        >
          <button
            type="button"
            className="absolute inset-0 bg-black/40"
            onClick={() => setMobileMenuOpen(false)}
            aria-label="Close menu"
          />
          <div
            className={`absolute top-0 right-0 h-full w-full max-w-[280px] bg-white shadow-xl flex flex-col pt-20 px-6 pb-6 transition-transform duration-200 ease-out ${
              mobileMenuOpen ? "translate-x-0" : "translate-x-full"
            }`}
          >
            {/* Language - mobile: top of menu, above ABOUT */}
            <div className="mb-6 pb-6 border-b border-[#E8E5E0]">
              <div
                className="flex items-center gap-3 rounded-full bg-[#F5F1EC] border border-[#E8E5E0] w-full py-3 px-4 min-h-[52px]"
                role="group"
                aria-label="Language"
              >
                <GlobeIcon className="w-5 h-5 text-[#5A5A5A] flex-shrink-0" />
                <span className="flex-1 flex items-center gap-0 rounded-full bg-white/50 p-0.5" aria-hidden>
                  <button
                    type="button"
                    onClick={() => setLang("eng")}
                    className={`flex-1 min-h-[40px] text-sm font-semibold uppercase tracking-wide rounded-full transition-all duration-200 active:scale-[0.98] ${
                      lang === "eng"
                        ? "text-white bg-[#D4A14E] shadow-sm"
                        : "text-[#5A5A5A] hover:bg-black/5"
                    }`}
                  >
                    Eng
                  </button>
                  <span className="w-px h-5 bg-[#E0DDD8] flex-shrink-0" aria-hidden />
                  <button
                    type="button"
                    onClick={() => setLang("arb")}
                    className={`flex-1 min-h-[40px] text-sm font-semibold uppercase tracking-wide rounded-full transition-all duration-200 active:scale-[0.98] ${
                      lang === "arb"
                        ? "text-white bg-[#D4A14E] shadow-sm"
                        : "text-[#5A5A5A] hover:bg-black/5"
                    }`}
                  >
                    Arabic
                  </button>
                </span>
              </div>
            </div>

            <nav className="flex flex-col gap-6 font-semibold uppercase tracking-wide text-black text-[16px]">
              <a
                className="hover:opacity-80 transition-opacity py-2"
                href="#"
                onClick={() => setMobileMenuOpen(false)}
              >
                ABOUT
              </a>
              <a
                className="hover:opacity-80 transition-opacity py-2"
                href="#"
                onClick={() => setMobileMenuOpen(false)}
              >
                Stories
              </a>
              <a
                className="hover:opacity-80 transition-opacity py-2"
                href="#"
                onClick={() => setMobileMenuOpen(false)}
              >
                STORE
              </a>
              <a
                className="hover:opacity-80 transition-opacity py-2"
                href="#"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact Us
              </a>
              <a
                className="hover:opacity-80 transition-opacity py-2"
                href="#"
                onClick={() => setMobileMenuOpen(false)}
              >
                Download
              </a>
            </nav>
          </div>
        </div>
    </>
  );
}
