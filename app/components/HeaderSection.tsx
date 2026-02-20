"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function HeaderSection() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
       <header className="flex items-center bg-white justify-between px-4 sm:px-6 py-4 md:py-5 md:px-24">
          {/* Logo - White circle with line through it */}
          <Link href={"/"} className="flex items-center ml-0 md:ml-20">
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

          {/* Hamburger Menu - Mobile Only */}
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

          {/* Nav Links - Desktop Only */}
          <nav className="hidden gap-6 md:text-[16px] font-semibold uppercase tracking-wide text-black md:flex lg:gap-8">
            <a className="hover:opacity-80 transition-opacity" href="#">
              ABOUT
            </a>
            <a className="hover:opacity-80 transition-opacity" href="#">
              Stories{" "}
            </a>
            <a className="hover:opacity-80 transition-opacity" href="#">
              STORE{" "}
            </a>
            <a className="hover:opacity-80 transition-opacity" href="#">
              Contact Us{" "}
            </a>
            <a className="hover:opacity-80 transition-opacity" href="#">
              Download{" "}
            </a>
          </nav>
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
            className={`absolute top-0 right-0 h-full w-full max-w-[280px] bg-white shadow-xl flex flex-col pt-20 px-6 transition-transform duration-200 ease-out ${
              mobileMenuOpen ? "translate-x-0" : "translate-x-full"
            }`}
          >
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
