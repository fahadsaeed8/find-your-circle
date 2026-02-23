import HeaderSection from "../components/HeaderSection";
import FooterSection from "../components/FooterSection";
import ContactForm from "../components/ContactForm";

export default function ContactUsPage() {
  return (
    <div className="min-h-screen bg-[#F5F2ED]">
      <HeaderSection />
      <div className="mx-auto max-w-5xl px-6 pt-[40px] md:pt-[60px] pb-16 md:pb-24 md:px-8">
        {/* Hero */}
        <section className="relative mb-12 md:mb-16 overflow-hidden text-center">
          <h1 className="font-clash text-3xl md:text-4xl lg:text-7xl font-medium text-[#BF822E] mb-4 relative">
            Contact Us
          </h1>
          <p className="text-[#5A5A5A] text-lg leading-relaxed max-w-2xl mx-auto text-center">
            Questions, feedback, or want to bring your community to Circle Society? We&apos;d love to hear from you.
          </p>
        </section>

        {/* Contact form */}
        <section>
          <div className="rounded-2xl bg-white border border-[#E8E5E0] shadow-sm p-8 md:p-10">
            <h2 className="font-clash text-xl md:text-2xl font-medium text-[#1B1B1B] mb-2">
              Send a message
            </h2>
            <p className="text-[#5A5A5A] text-sm mb-6">
              Fill out the form below and we&apos;ll get back to you within 24–48 hours.
            </p>
            <ContactForm />
          </div>
        </section>
      </div>
      <FooterSection />
    </div>
  );
}
