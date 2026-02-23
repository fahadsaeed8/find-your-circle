import HeaderSection from "../components/HeaderSection";
import FooterSection from "../components/FooterSection";

export default function StorePage() {
  return (
    <div className="min-h-screen bg-[#F5F2ED]">
      <HeaderSection />
      <div className="mx-auto max-w-6xl px-6 pt-[40px] md:pt-[60px] pb-16 md:pb-24 md:px-8">
        {/* Section 1 - Hero */}
        <section className="text-center md:text-center mb-16 md:mb-20">
          <h1 className="font-clash text-3xl md:text-4xl lg:text-7xl font-medium text-[#BF822E] mb-4">
            Store
          </h1>
          <p className="text-[#5A5A5A] text-lg leading-relaxed max-w-2xl mx-auto text-center">
            Explore merchandise and more from Circle Society.
          </p>
        </section>

        {/* Section 2 - Content placeholder */}
        <section className="rounded-2xl bg-white/60 border border-[#E8E5E0] p-8 md:p-10">
          <h2 className="font-clash text-xl md:text-2xl font-medium text-[#1B1B1B] mb-4 border-b border-[#BF822E]/30 pb-2">
            Shop
          </h2>
          <p className="text-[#5A5A5A] leading-relaxed">
            Content coming soon.
          </p>
        </section>
      </div>
      <FooterSection />
    </div>
  );
}
