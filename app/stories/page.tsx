import HeaderSection from "../components/HeaderSection";
import FooterSection from "../components/FooterSection";

export const metadata = {
  title: "Stories | Circle Society",
  description: "Stories from the Circle Society community.",
};

export default function StoriesPage() {
  return (
    <div className="min-h-screen bg-[#F5F2ED]">
      <HeaderSection />
      <div className="mx-auto max-w-4xl px-6 pt-[90px] md:pt-[100px] pb-16 md:pb-24 md:px-8">
        {/* Section 1 - Hero */}
        <section className="relative text-center md:text-left mb-16 md:mb-20 overflow-hidden">
          <span className="absolute top-0 left-1/2 w-72 h-72 rounded-full bg-[#BF822E]/5 -translate-x-1/2 -translate-y-1/2" aria-hidden />
          <h1 className="font-clash text-3xl md:text-4xl lg:text-5xl font-medium text-[#1B1B1B] mb-4 relative">
            Stories
          </h1>
          <p className="text-[#5A5A5A] text-lg leading-relaxed max-w-2xl relative">
            Real moments from people who found their circle — events, communities, and connections that matter.
          </p>
        </section>

        {/* Section 2 - Coming Soon */}
        <section className="rounded-2xl bg-white border border-[#E8E5E0] shadow-sm p-10 md:p-14 text-center relative overflow-hidden">
          <span className="absolute inset-0 flex items-center justify-center pointer-events-none" aria-hidden>
            <span className="w-96 h-96 rounded-full border border-[#E8E5E0]/80" />
          </span>
          <div className="relative">
            <p className="font-clash text-2xl md:text-3xl font-medium text-[#BF822E]">
              Coming Soon
            </p>
            <p className="text-[#5A5A5A] mt-3 text-sm md:text-base max-w-sm mx-auto">
              We&apos;re gathering stories from our community. Check back soon for real experiences and connections made through Circle Society.
            </p>
          </div>
        </section>
      </div>
      <FooterSection />
    </div>
  );
}
