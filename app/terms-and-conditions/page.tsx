import Link from "next/link";
import HeaderSection from "../components/HeaderSection";
import FooterSection from "../components/FooterSection";

export const metadata = {
  title: "Terms & Conditions | Circle Society",
  description: "Terms and Conditions for Circle Society platform.",
};

export default function TermsAndConditionsPage() {
  return (
    <div className="min-h-screen bg-[#F5F2ED]">
      <HeaderSection />
      <div className="mx-auto max-w-6xl px-6 py-10 md:py-16 md:px-8">
        {/* <Link
          href="/"
          className="inline-flex items-center gap-2 text-[#BF822E] hover:text-black transition-colors text-sm font-medium mb-8"
        >
          ← Back to Home
        </Link> */}

        <h1 className="font-clash text-center md:text-start text-3xl md:text-4xl lg:text-5xl font-medium text-[#BF822E] mb-2">
          Terms & Conditions
        </h1>
        <p className=" text-sm text-center md:text-start mb-10 text-black font-bold">Last Updated:<span className="font-medium text-[#5A5A5A]">  February 2026</span> </p>

        <div className="prose-policy space-y-8 text-[#1B1B1B]">
          <p className="leading-relaxed text-[#5A5A5A]">
            Welcome to <span className="font-bold text-black">Circle Society.</span>  By accessing or using our website and mobile application, you agree to be bound by the following Terms & Conditions. If you do not agree, please refrain from using our services.
          </p>

          <section>
            <h2 className="font-clash text-xl md:text-2xl font-medium text-[#1B1B1B] mb-3 border-b border-[#BF822E]/30 pb-2">
              1. Platform Overview
            </h2>
            <p className="leading-relaxed text-[#5A5A5A]">
              Circle Society is a community-based platform that allows users to create profiles, join communities, participate in events, and engage in paid and free activities. Some services offered on the platform may require payment.
            </p>
          </section>

          <section>
            <h2 className="font-clash text-xl md:text-2xl font-medium text-[#1B1B1B] mb-3 border-b border-[#BF822E]/30 pb-2">
              2. User Eligibility
            </h2>
            <ul className="list-disc list-inside space-y-2 text-[#5A5A5A] pl-2 marker:text-[#BF822E]">
              <li>Users must be at least 18 years old.</li>
              <li>Users are responsible for ensuring the accuracy of the information provided during registration.</li>
              <li>Circle Society reserves the right to approve, suspend, or terminate accounts at its discretion.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-clash text-xl md:text-2xl font-medium text-[#1B1B1B] mb-3 border-b border-[#BF822E]/30 pb-2">
              3. User Responsibilities
            </h2>
            <ul className="list-disc list-inside space-y-2 text-[#5A5A5A] pl-2 marker:text-[#BF822E]">
              <li>Users must not engage in illegal, abusive, or harmful activities.</li>
              <li>Events, profiles, and content are subject to admin review and approval.</li>
              <li>Misuse of the platform may result in account suspension or termination.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-clash text-xl md:text-2xl font-medium text-[#1B1B1B] mb-3 border-b border-[#BF822E]/30 pb-2">
              4. Payments & Transactions
            </h2>
            <ul className="list-disc list-inside space-y-2 text-[#5A5A5A] pl-2 marker:text-[#BF822E]">
              <li>Payments for events, memberships, or activities are processed through secure third-party payment gateways.</li>
              <li>Circle Society does not store card or banking details.</li>
              <li>All prices are displayed in AED unless otherwise stated.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-clash text-xl md:text-2xl font-medium text-[#1B1B1B] mb-3 border-b border-[#BF822E]/30 pb-2">
              5. Events & Communities
            </h2>
            <ul className="list-disc list-inside space-y-2 text-[#5A5A5A] pl-2 marker:text-[#BF822E]">
              <li>Event organizers are responsible for the accuracy of event information.</li>
              <li>Circle Society is not responsible for event cancellations, changes, or user disputes but may assist in resolution where possible.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-clash text-xl md:text-2xl font-medium text-[#1B1B1B] mb-3 border-b border-[#BF822E]/30 pb-2">
              6. Intellectual Property
            </h2>
            <p className="leading-relaxed text-[#5A5A5A]">
              All content, branding, and platform functionality belong to Circle Society and may not be copied or reused without written permission.
            </p>
          </section>

          <section>
            <h2 className="font-clash text-xl md:text-2xl font-medium text-[#1B1B1B] mb-3 border-b border-[#BF822E]/30 pb-2">
              7. Limitation of Liability
            </h2>
            <p className="leading-relaxed text-[#5A5A5A]">
              Circle Society shall not be liable for any indirect, incidental, or consequential damages arising from platform usage.
            </p>
          </section>

          <section>
            <h2 className="font-clash text-xl md:text-2xl font-medium text-[#1B1B1B] mb-3 border-b border-[#BF822E]/30 pb-2">
              8. Governing Law
            </h2>
            <p className="leading-relaxed text-[#5A5A5A]">
              These Terms are governed by the laws of the United Arab Emirates.
            </p>
          </section>

          <section className="pt-4 mt-8 text-sm text-center md:text-start text-[#5A5A5A]">
            <p className="font-medium mb-1">Company Information</p>
            <p className="font-medium">Circle Society</p>
            <p>339, Building B, Jarn Yafour, Al Mafraq Industrial, Abu Dhabi</p>
            <p>Email: support@circlesociety.ae</p>
          </section>
        </div>
      </div>
      <FooterSection />
    </div>
  );
}
