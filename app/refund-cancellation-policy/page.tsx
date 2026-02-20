import Link from "next/link";
import HeaderSection from "../components/HeaderSection";
import FooterSection from "../components/FooterSection";

export const metadata = {
  title: "Refund & Cancellation Policy | Circle Society",
  description: "Refund and Cancellation Policy for Circle Society platform.",
};

export default function RefundCancellationPolicyPage() {
  return (
    <div className="min-h-screen bg-[#F5F2ED]">
      <HeaderSection />
      <div className="mx-auto max-w-3xl px-6 py-10 md:py-16 md:px-8">
        {/* <Link
          href="/"
          className="inline-flex items-center gap-2 text-[#BF822E] hover:text-black transition-colors text-sm font-medium mb-8"
        >
          ← Back to Home
        </Link> */}

        <h1 className="font-clash text-3xl text-center md:text-start md:text-4xl lg:text-5xl font-medium text-[#BF822E] mb-2">
          Refund & Cancellation Policy
        </h1>
        <p className=" text-sm text-center md:text-start mb-10 text-black font-bold">Last Updated:<span className="font-medium text-[#5A5A5A]">  February 2025</span> </p>

        <div className="prose-policy space-y-8 text-[#1B1B1B]">
          <section>
            <h2 className="font-clash text-xl md:text-2xl font-medium text-[#1B1B1B] mb-3 border-b border-[#BF822E]/30 pb-2">
              1. Event & Activity Payments
            </h2>
            <ul className="list-disc list-inside space-y-2 text-[#5A5A5A] pl-2 marker:text-[#BF822E]">
              <li>Payments made for events, memberships, or activities are generally <span className="text-black font-bold">non-refundable</span>  unless otherwise stated.</li>
              <li>Refunds may be considered only if:
                <ul className="list-[circle] list-inside mt-2 ml-4 space-y-1 text-[#5A5A5A] marker:text-[#BF822E]">
                  <li>An event is cancelled by the organizer</li>
                  <li>A technical error results in duplicate payment</li>
                </ul>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="font-clash text-xl md:text-2xl font-medium text-[#1B1B1B] mb-3 border-b border-[#BF822E]/30 pb-2">
              2. Refund Requests
            </h2>
            <ul className="list-disc list-inside space-y-2 text-[#5A5A5A] pl-2 marker:text-[#BF822E]">
              <li>Refund requests must be submitted within <span className="text-black font-bold">  7 days</span>  of payment.</li>
              <li>Approved refunds will be processed to the original payment method within <span className="text-black font-bold"> 7–14 business days,</span>  subject to bank processing times.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-clash text-xl md:text-2xl font-medium text-[#1B1B1B] mb-3 border-b border-[#BF822E]/30 pb-2">
              3. Event Cancellations
            </h2>
            <p className="leading-relaxed text-[#5A5A5A]">
              If an event is cancelled by the organizer, eligible users may receive a refund or credit at Circle Society&apos;s discretion.
            </p>
          </section>

          <section>
            <h2 className="font-clash text-xl md:text-2xl font-medium text-[#1B1B1B] mb-3 border-b border-[#BF822E]/30 pb-2">
              4. No-Show Policy
            </h2>
            <p className="leading-relaxed text-[#5A5A5A]">
              Failure to attend an event without prior cancellation does not qualify for a refund.
            </p>
          </section>

          <section>
            <h2 className="font-clash text-xl md:text-2xl font-medium text-[#1B1B1B] mb-3 border-b border-[#BF822E]/30 pb-2">
              5. Platform Rights
            </h2>
            <p className="leading-relaxed text-[#5A5A5A]">
              Circle Society reserves the right to deny refund requests that do not meet the policy criteria.
            </p>
          </section>
        </div>
      </div>
      <FooterSection />
    </div>
  );
}
