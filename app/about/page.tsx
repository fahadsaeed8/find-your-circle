import Image from "next/image";
import HeaderSection from "../components/HeaderSection";
import FooterSection from "../components/FooterSection";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#F5F2ED]">
      <HeaderSection />

      <div className="mx-auto max-w-6xl px-6 pt-[40px] md:pt-[60px] pb-16 md:pb-24 md:px-8">
        {/* Section 1 - Hero with image */}
        <section className="mb-20 md:mb-28">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div>
              <h1 className="font-clash text-3xl md:text-4xl lg:text-7xl font-medium text-[#BF822E] mb-4">
                About Us
              </h1>
              <span
                className="inline-block w-16 h-1 rounded-full mb-6"
                style={{ background: "linear-gradient(to right, #D99F4F, #BF822E)" }}
                aria-hidden
              />
              <p className="text-[#5A5A5A] text-lg md:text-xl leading-relaxed">
                Circle Society is where your social life comes together — discover events, join communities, and connect with people around you through shared experiences.
              </p>
            </div>
            <div className="relative aspect-[4/3] lg:aspect-square rounded-2xl overflow-hidden shadow-xl border border-[#E8E5E0]">
              <Image
                src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&q=80"
                alt="People connecting and community"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            </div>
          </div>
        </section>

        {/* Section 2 - Who We Are (image left, content right) */}
        <section className="mb-20 md:mb-28">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl border border-[#E8E5E0] order-2 lg:order-1">
              <Image
                src="https://images.unsplash.com/photo-1543269865-cbf427effbad?w=800&q=80"
                alt="Community and belonging"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="font-clash text-2xl md:text-3xl font-medium text-[#1B1B1B] mb-6">
                Who We Are
              </h2>
              <p className="text-[#5A5A5A] text-base md:text-lg leading-relaxed mb-6">
                We believe everyone deserves a place to belong. Circle Society brings events, faith communities, and local groups into one app so you can find your people and show up — in person — for what matters.
              </p>
              <p className="text-[#5A5A5A] text-base leading-relaxed">
                We’re building a home for real connections: discover what’s happening near you, join circles that share your values, and create moments that matter.
              </p>
            </div>
          </div>
        </section>

        {/* Section 3 - What We Offer (content left, image right) */}
        <section>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div>
              <h2 className="font-clash text-2xl md:text-3xl font-medium text-[#1B1B1B] mb-6">
                What We Offer
              </h2>
              <ul className="space-y-5 text-[#5A5A5A] text-base md:text-lg">
                <li className="flex items-start gap-4">
                  <span className="w-3 h-3 rounded-full bg-[#BF822E] shrink-0 mt-1.5" aria-hidden />
                  <span><strong className="text-[#1B1B1B]">Events & meetups</strong> — Find and join events near you, from workshops to social gatherings.</span>
                </li>
                <li className="flex items-start gap-4">
                  <span className="w-3 h-3 rounded-full bg-[#BF822E] shrink-0 mt-1.5" aria-hidden />
                  <span><strong className="text-[#1B1B1B]">Communities & circles</strong> — Connect with groups that share your interests and values.</span>
                </li>
                <li className="flex items-start gap-4">
                  <span className="w-3 h-3 rounded-full bg-[#BF822E] shrink-0 mt-1.5" aria-hidden />
                  <span><strong className="text-[#1B1B1B]">Your social life, one app</strong> — Safe, easy discovery so you can focus on showing up.</span>
                </li>
              </ul>
            </div>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl border border-[#E8E5E0]">
              <Image
                src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&q=80"
                alt="Events and experiences"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </section>
      </div>

      <FooterSection />
    </div>
  );
}
