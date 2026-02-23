import HeaderSection from "../components/HeaderSection";
import FooterSection from "../components/FooterSection";

function ContactIcon({ type }: { type: "location" | "phone" | "mail" }) {
  if (type === "location")
    return (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5 text-[#BF822E] shrink-0 mt-0.5" aria-hidden>
        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    );
  if (type === "phone")
    return (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5 text-[#BF822E] shrink-0 mt-0.5" aria-hidden>
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
    );
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5 text-[#BF822E] shrink-0 mt-0.5" aria-hidden>
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

export default function ContactUsPage() {
  return (
    <div className="min-h-screen bg-[#F5F2ED]">
      <HeaderSection />
      <div className="mx-auto max-w-4xl px-6 pt-[90px] md:pt-[100px] pb-16 md:pb-24 md:px-8">
        {/* Section 1 - Hero */}
        <section className="relative text-center md:text-left mb-16 md:mb-20 overflow-hidden">
          <span className="absolute bottom-0 right-0 w-56 h-56 rounded-full bg-[#BF822E]/5 translate-y-1/2 translate-x-1/2" aria-hidden />
          <h1 className="font-clash text-3xl md:text-4xl lg:text-5xl font-medium text-[#1B1B1B] mb-4 relative">
            Contact Us
          </h1>
          <p className="text-[#5A5A5A] text-lg leading-relaxed max-w-2xl relative">
            Questions, feedback, or want to bring your community to Circle Society? We&apos;d love to hear from you.
          </p>
        </section>

        {/* Section 2 - Get in Touch */}
        <section className="rounded-2xl bg-white border border-[#E8E5E0] shadow-sm overflow-hidden">
          <div className="p-8 md:p-10">
            <h2 className="font-clash text-xl md:text-2xl font-medium text-[#1B1B1B] mb-6 border-b border-[#BF822E]/30 pb-3">
              Get in Touch
            </h2>
            <ul className="space-y-5 text-[#5A5A5A]">
              <li className="flex gap-3">
                <ContactIcon type="location" />
                <span>Address line here, City, Country</span>
              </li>
              <li className="flex gap-3">
                <ContactIcon type="phone" />
                <a href="tel:+971561234567" className="hover:text-[#BF822E] transition-colors">+971 56 123 4567</a>
              </li>
              <li className="flex gap-3">
                <ContactIcon type="mail" />
                <a href="mailto:hello@findyourcircle.com" className="hover:text-[#BF822E] transition-colors">hello@findyourcircle.com</a>
              </li>
            </ul>
            <p className="mt-6 text-sm text-[#5A5A5A]">
              We typically respond within 24–48 hours.
            </p>
          </div>
        </section>
      </div>
      <FooterSection />
    </div>
  );
}
