import Image from "next/image";
import HeaderSection from "../components/HeaderSection";
import FooterSection from "../components/FooterSection";

export default function StoriesPage() {
  return (
    <div className="min-h-screen bg-[#F5F2ED]">
      <HeaderSection />

      <div className="mx-auto max-w-6xl px-6 pt-[90px] md:pt-[100px] pb-20 md:pb-28 md:px-8">
        {/* Section 1 - Hero: Love Stories - button wala brown */}
        <section className="mb-20 md:mb-24 rounded-2xl overflow-hidden p-8 md:p-12" style={{ background: "linear-gradient(135deg, #D99F4F 0%, #BF822E 0%)" }}>
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-12 items-center">
            <div className="lg:col-span-3">
              <h1 className="font-clash text-3xl md:text-4xl lg:text-5xl font-medium text-white mb-4">
                Love Stories
              </h1>
              <span
                className="inline-block w-12 h-0.5 rounded-full mb-6 bg-white/80"
                aria-hidden
              />
              <p className="text-white/90 text-lg md:text-xl leading-relaxed">
                Real moments from couples who found their person — first dates, relationships, and connections that turned into something special.
              </p>
            </div>
            <div className="lg:col-span-2 relative aspect-[4/3] lg:aspect-square rounded-2xl overflow-hidden bg-white/10">
              <Image
                src="https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=600&q=80"
                alt="Couple together"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 40vw"
                priority
              />
            </div>
          </div>
        </section>

        {/* Section 2 - Real Couples: image + text */}
        <section className="mb-20 md:mb-24">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-12 items-center">
            <div className="lg:col-span-2 relative aspect-[4/3] min-h-[220px] rounded-2xl overflow-hidden bg-[#E8E5E0]/40 order-2 lg:order-1">
              <Image
                src="https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?w=700&q=85"
                alt="Real couple in love"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
            </div>
            <div className="lg:col-span-3 order-1 lg:order-2">
              <h2 className="font-clash text-2xl md:text-3xl font-medium text-[#1B1B1B] mb-5">
                Real Couples, Real Love
              </h2>
              <p className="text-[#5A5A5A] leading-relaxed mb-5">
                Every match has a story. Here we share how people met their person on Circle Society — from the first message to the first date, and the moments that made them choose each other.
              </p>
              <p className="text-[#5A5A5A] leading-relaxed">
                Whether you&apos;re looking for something serious or taking it slow, these stories show what&apos;s possible when you put yourself out there and find your circle.
              </p>
            </div>
          </div>
        </section>

        {/* Section 3 - Coming soon: text + smaller image */}
        <section className="rounded-2xl bg-white border border-[#E8E5E0] p-8 md:p-10">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-10 items-center">
            <div className="lg:col-span-3">
              <p className="font-clash text-lg font-medium text-[#BF822E] mb-3">
                More love stories coming soon
              </p>
              <p className="text-[#5A5A5A] text-sm md:text-base leading-relaxed">
                We&apos;re gathering stories from couples who met on Circle Society. If you found your person here — whether it&apos;s a new spark or a lasting relationship — we&apos;d love to hear from you. Check back soon or join the app to share your story.
              </p>
            </div>
            <div className="lg:col-span-2 relative aspect-[16/10] rounded-xl overflow-hidden bg-[#E8E5E0]/40">
              <Image
                src="https://images.unsplash.com/photo-1537633552985-df8429e8048b?w=500&q=80"
                alt="Couple sharing a moment"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 35vw"
              />
            </div>
          </div>
        </section>
      </div>

      <FooterSection />
    </div>
  );
}
