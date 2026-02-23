import Link from "next/link";
import HeaderSection from "../components/HeaderSection";
import FooterSection from "../components/FooterSection";

export default function PrivacyPolicyPage() {
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
          Privacy Policy
        </h1>
        <p className=" text-sm text-center md:text-start mb-10 text-black font-bold">Last Updated:<span className="font-medium text-[#5A5A5A]">  February 2026</span> </p>

        <div className="prose-policy space-y-8 text-[#1B1B1B]">
          <p className="leading-relaxed text-[#5A5A5A]">
            Circle Society values your privacy and is committed to protecting your personal data.
          </p>

          <section>
            <h2 className="font-clash text-xl md:text-2xl font-medium text-[#1B1B1B] mb-3 border-b border-[#BF822E]/30 pb-2">
              1. Information We Collect
            </h2>
            <ul className="list-disc list-inside space-y-2 text-[#5A5A5A] pl-2 marker:text-[#BF822E]">
              <li>Personal details such as name, email, phone number</li>
              <li>Profile information</li>
              <li>Payment transaction references (no card details)</li>
              <li>Device and usage data</li>
            </ul>
          </section>

          <section>
            <h2 className="font-clash text-xl md:text-2xl font-medium text-[#1B1B1B] mb-3 border-b border-[#BF822E]/30 pb-2">
              2. How We Use Information
            </h2>
            <ul className="list-disc list-inside space-y-2 text-[#5A5A5A] pl-2 marker:text-[#BF822E]">
              <li>To provide and improve platform services</li>
              <li>To process payments and bookings</li>
              <li>To communicate updates, notifications, and support</li>
              <li>To ensure platform security and compliance</li>
            </ul>
          </section>

          <section>
            <h2 className="font-clash text-xl md:text-2xl font-medium text-[#1B1B1B] mb-3 border-b border-[#BF822E]/30 pb-2">
              3. Data Protection
            </h2>
            <ul className="list-disc list-inside space-y-2 text-[#5A5A5A] pl-2 marker:text-[#BF822E]">
              <li>All data is stored securely.</li>
              <li>Access is limited to authorized personnel only.</li>
              <li>Industry-standard security measures are implemented.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-clash text-xl md:text-2xl font-medium text-[#1B1B1B] mb-3 border-b border-[#BF822E]/30 pb-2">
              4. Third-Party Services
            </h2>
            <p className="leading-relaxed text-[#5A5A5A] mb-3">
              We may share limited information with:
            </p>
            <ul className="list-disc list-inside space-y-2 text-[#5A5A5A] pl-2 marker:text-[#BF822E]">
              <li>Payment gateways</li>
              <li>Analytics services</li>
              <li>Cloud hosting providers</li>
            </ul>
            <p className="leading-relaxed text-[#5A5A5A] mt-3">
              Only for operational purposes.
            </p>
          </section>

          <section>
            <h2 className="font-clash text-xl md:text-2xl font-medium text-[#1B1B1B] mb-3 border-b border-[#BF822E]/30 pb-2">
              5. User Rights
            </h2>
            <p className="leading-relaxed text-[#5A5A5A]">
              Users may request access, correction, or deletion of their personal data by contacting support.
            </p>
          </section>

          <section>
            <h2 className="font-clash text-xl md:text-2xl font-medium text-[#1B1B1B] mb-3 border-b border-[#BF822E]/30 pb-2">
              6. Contact
            </h2>
            <p className="leading-relaxed text-[#5A5A5A]">
              📧 support@circlesociety.ae
            </p>
          </section>
        </div>
      </div>
      <FooterSection />
    </div>
  );
}
