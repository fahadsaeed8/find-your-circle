"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

function LocationIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden>
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}
function PhoneIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden>
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}
function MailIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden>
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

export default function FooterSection() {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setEmail("");
    }
  };

  return (
    <footer className="bg-[#F5F2ED]">
      {/* Main footer - 3 column layout */}
      <div className="px-6 py-10 md:py-12 lg:px-24">
        <div className="mx-auto max-w-7xl w-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-12 place-items-center lg:place-items-start">
            {/* Column 1 - Logo + description + CTA */}
            <div className="flex flex-col items-center text-center lg:items-start lg:text-left w-full">
              <Link href="/" className="inline-block mb-3">
                <div
                  className="animate-rotate"
                  style={{
                    animation: "rotate 10s linear infinite",
                    display: "inline-block",
                    transformOrigin: "center center",
                  }}
                >
                  <Image
                    src="/LOGO CS-01.png"
                    width={72}
                    height={72}
                    alt="Find Your Circle"
                    className="w-20 h-20 md:w-20 md:h-20"
                  />
                </div>
              </Link>
              <p className="text-black/80 text-sm leading-relaxed mb-4 max-w-sm">
                Your social life, all in one app. Discover events, communities, and people around you.
              </p>
              <Link
                href="#"
                className="inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-semibold text-white transition hover:opacity-95 active:scale-[0.98] mb-4"
                style={{ background: "linear-gradient(to bottom, #D99F4F, #BF822E)" }}
              >
                Contact Us
              </Link>
              <div className="flex flex-row gap-2">
                <a href="#" className="p-2 rounded-lg bg-black/5 hover:bg-black/10 transition" aria-label="TikTok">
                  <Image src="/Vector (17).svg" alt="" width={18} height={18} className="w-4 h-4 md:w-5 md:h-5" />
                </a>
                <a href="#" className="p-2 rounded-lg bg-black/5 hover:bg-black/10 transition" aria-label="Instagram">
                  <Image src="/Vector (18).svg" alt="" width={18} height={18} className="w-4 h-4 md:w-5 md:h-5" />
                </a>
                <a href="#" className="p-2 rounded-lg bg-black/5 hover:bg-black/10 transition" aria-label="Facebook">
                  <Image src="/Vector (19).svg" alt="" width={18} height={18} className="w-4 h-4 md:w-5 md:h-5" />
                </a>
              </div>
            </div>

            {/* Column 2 - Quick Link */}
            <div className="flex flex-col items-center lg:items-start w-full">
              <h3 className="text-black font-semibold uppercase tracking-wide text-sm mb-3">Quick Link</h3>
              <nav className="flex flex-col gap-2 text-sm">
                <Link href="/" className="text-black/80 hover:text-[#BF822E] transition-colors font-medium">Home</Link>
                <Link href="#" className="text-black/80 hover:text-[#BF822E] transition-colors font-medium">About</Link>
                <Link href="#" className="text-black/80 hover:text-[#BF822E] transition-colors font-medium">Stories</Link>
                <Link href="#" className="text-black/80 hover:text-[#BF822E] transition-colors font-medium">Store</Link>
                <Link href="#" className="text-black/80 hover:text-[#BF822E] transition-colors font-medium">Contact Us</Link>
                <Link href="#" className="text-black/80 hover:text-[#BF822E] transition-colors font-medium">Download</Link>
              </nav>
            </div>

            {/* Column 3 - Contact Us + Subscribe */}
            <div className="flex flex-col items-center lg:items-start text-center lg:text-left w-full">
              <h3 className="text-black font-semibold uppercase tracking-wide text-sm mb-3">Contact Us</h3>
              <ul className="space-y-2 text-sm text-black/80 mb-4 w-full">
                <li className="flex items-start gap-2 justify-center lg:justify-start">
                  <LocationIcon className="w-4 h-4 mt-0.5 flex-shrink-0 text-[#BF822E]" />
                  <span>Address line here, City, Country</span>
                </li>
                <li className="flex items-center gap-2 justify-center lg:justify-start">
                  <PhoneIcon className="w-4 h-4 flex-shrink-0 text-[#BF822E]" />
                  <a href="tel:+971561234567" className="hover:text-[#BF822E] transition-colors">+971 56 123 4567</a>
                </li>
                <li className="flex items-center gap-2 justify-center lg:justify-start">
                  <MailIcon className="w-4 h-4 flex-shrink-0 text-[#BF822E]" />
                  <a href="mailto:hello@findyourcircle.com" className="hover:text-[#BF822E] transition-colors">hello@findyourcircle.com</a>
                </li>
              </ul>
              <p className="text-black/70 text-xs uppercase tracking-wide mb-2">Subscribe</p>
              <form onSubmit={handleSubscribe} className="flex gap-2 w-full max-w-[280px] mx-auto lg:mx-0">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email Address"
                  className="flex-1 min-w-0 rounded-full bg-white border border-[#E8E5E0] px-3 py-2.5 text-sm placeholder:text-black/50 focus:outline-none focus:ring-2 focus:ring-[#BF822E]/40"
                  aria-label="Email address"
                />
                <button
                  type="submit"
                  className="w-10 h-10 rounded-full flex items-center justify-center text-white flex-shrink-0 transition hover:opacity-95 active:scale-95"
                  style={{ background: "linear-gradient(to bottom, #D99F4F, #BF822E)" }}
                  aria-label="Subscribe"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                    <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
                  </svg>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom strip */}
      <div className="border-t border-[#E8E5E0] px-6 py-4 lg:pl-24">
        <div className="mx-auto max-w-7xl flex flex-col sm:flex-row items-center justify-center sm:justify-between gap-3 text-sm text-black/70">
          <p>© All rights reserved {new Date().getFullYear()} Find Your Circle</p>
          <nav className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1">
            <Link
              href="/terms-and-conditions"
              className="group text-black hover:text-[#BF822E] transition-colors flex items-center gap-1 font-medium text-sm"
            >
              <span className="text-black group-hover:text-[#BF822E] transition-colors" aria-hidden>•</span>
              Terms &amp; Conditions
            </Link>
            <span className="text-black/50" aria-hidden>|</span>
            <Link
              href="/privacy-policy"
              className="group text-black hover:text-[#BF822E] transition-colors flex items-center gap-1 font-medium text-sm"
            >
              <span className="text-black group-hover:text-[#BF822E] transition-colors" aria-hidden>•</span>
              Privacy Policy
            </Link>
            <span className="text-black/50" aria-hidden>|</span>
            <Link
              href="/refund-cancellation-policy"
              className="group text-black hover:text-[#BF822E] transition-colors flex items-center gap-1 font-medium text-sm"
            >
              <span className="text-black group-hover:text-[#BF822E] transition-colors" aria-hidden>•</span>
              Refund &amp; Cancellation Policy
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
