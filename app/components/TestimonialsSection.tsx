"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useShouldAnimate } from "../hooks/useShouldAnimate";

gsap.registerPlugin(ScrollTrigger);

export default function TestimonialsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);
  const shouldAnimate = useShouldAnimate();

  useEffect(() => {
    if (!sectionRef.current || !headingRef.current) return;

    const cards = cardsRef.current.filter(Boolean);

    if (!shouldAnimate) {
      gsap.set(headingRef.current, { opacity: 1, y: 0 });
      gsap.set(cards, { opacity: 1, y: 0 });
      return;
    }

    gsap.set(headingRef.current, { opacity: 0, y: -30 });
    gsap.set(cards, { opacity: 0, y: 40 });

    gsap
      .timeline({
        scrollTrigger: { trigger: sectionRef.current, start: "top 75%", toggleActions: "play none none none" },
      })
      .to(headingRef.current, { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" })
      .to(cards, { opacity: 1, y: 0, duration: 0.5, stagger: 0.1, ease: "power2.out" }, "-=0.3");

    return () => {
      ScrollTrigger.getAll().forEach((t) => {
        if (t.vars.trigger === sectionRef.current) t.kill();
      });
    };
  }, [shouldAnimate]);

  const testimonials = [
    {
      name: "Adeel",
      location: "Dubai",
      role: "Joined a Fitness & Community Group",
      quote:
        "I didn't want another social app. I wanted people who actually show up. Circle Society helped me find a local community that meets weekly. It feels real, not fanced.",
      image: "/Rectangle 40869.png",
    },
    {
      name: "Noura",
      location: "Abu Dhabi",
      role: "Community Member",
      quote: "It feels safe because you meet through shared interests.",
      image: "/Rectangle 40870.png",
    },
    {
      name: "Mark,",
      location: "London",
      role: "Event Host",
      quote:
        "The events are what make this different. From art meetups to group dinners, everything is built around real activities. You meet people naturally.",
      image: "/Rectangle 40871.png",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="bg-[#F5F2ED] -mt-5 md:mt-0 py-20 px-4 sm:px-8 lg:px-24"
    >
      {/* Heading */}
      <div className="text-center mb-12 md:mb-20">
        <p className="text-lg tracking-wide font-medium text-[#5A5A5A] mb-2">
          Testimonials
        </p>
        <h2
          ref={headingRef}
          className="font-clash font-medium text-4xl md:text-5xl lg:text-6xl text-[#1B1B1B]"
        >
          Real Stories From Real People
        </h2>
      </div>
 
      {/* Mobile View - Single Column Testimonials */}
      <div className="md:hidden space-y-8 max-w-2xl mx-auto">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            ref={(el) => {
              if (el) cardsRef.current[index] = el;
            }}
            className="flex flex-col items-center text-center"
          >
            {/* Image */}
            <div className="overflow-hidden rounded-2xl mb-4 w-full max-w-[380px] [&>span]:block [&>span]:w-full [&>span]:h-full [&>span>img]:block">
              <Image
                src={testimonial.image}
                alt={testimonial.name}
                width={280}
                height={280}
                className="w-full h-auto object-cover"
                style={{
                  border: "none",
                  outline: "none",
                  display: "block",
                }}
              />
            </div>
            {/* Name and Location */}
            <h3 className="font-semibold text-lg text-[#1B1B1B] mb-1">
              {testimonial.name}, {testimonial.location}
            </h3>
            {/* Role */}
            <p className="text-sm text-[#1B1B1B] mb-3">{testimonial.role}</p>
            {/* Quote */}
            <p className="text-base text-[#1B1B1B] leading-relaxed">
              {testimonial.quote}
            </p>
          </div>
        ))}
      </div>

      {/* Desktop View - Hidden on Mobile */}
      <div className="hidden md:block">
        <div className="max-w-7xl flex mx-auto">
          <div className="max-w-md text-left text-black">
            <p className="text-gray-600 text-lg leading-relaxed font-normal">
              I didn’t want another social app. I wanted
              <br />
              people who actually show up.
              <br />
              <br />
              Circle Society helped me find a local
              <br />
              community that meets weekly. It feels real,
              <br />
              not forced.
            </p>

            <div className="mt-6">
              <p className="font-semibold text-gray-800 text-lg">
                Adeel, Dubai
              </p>
              <p className="text-gray-500 text-sm">
                Joined a Fitness & Community Group
              </p>
            </div>
          </div>

          <Image
            src={"/Layer 99.svg"}
            alt={"Frame"}
            width={300}
            height={300}
            className="w-full -ml-10 h-auto rounded-xl max-w-[100px] md:max-w-[100px]"
          />
          <Image
            src={"/iPhone-13-Pro-new (3).svg"}
            alt={"Frame"}
            width={300}
            height={300}
            className="w-full ml-5 h-auto rounded-xl max-w-[300] md:max-w-[300]"
          />
  
          <div className="max-w-md text-left ml-10 mt-40">
            <p className="text-gray-600 text-lg leading-relaxed font-normal">
              The events are what make this different. <br />
              <br />
              From art meetups to group dinners,
              <br />
              everything is built around real activities. You
              <br />
              meet people naturally.
            </p>

            <div className="mt-6">
              <p className="font-semibold text-gray-800 text-lg">
                Mark, London{" "}
              </p>
              <p className="text-gray-500 text-sm">Event Host</p>
            </div>
          </div>
        </div>
        {/* next */}
        <div className="max-w-7xl flex mx-auto">
   
          <div className="max-w-md mt-60 text-left">
            <p className="text-gray-600 text-lg leading-relaxed font-normal">
              It feels safe because you
              <br />
              meet through shared
              <br />
              interests.
            </p>

            <div className="mt-6">
              <p className="font-semibold text-gray-800 text-lg">Noura, UAE</p>
              <p className="text-gray-500 text-sm">Community Member</p>
            </div>
          </div>

          <Image
            src={"/Layer 101.svg"}
            alt={"Frame"}
            width={300}
            height={300}
            className="w-full -ml-20 -mt-30 h-auto rounded-xl max-w-[100px] md:max-w-[100px]"
          />
          <Image
            src={"/iPhone-13-Pro-new (4).svg"}
            alt={"Frame"}
            width={900}
            height={900}
            className="w-full ml-5 -mt-65 h-auto max-w-[350px] md:max-w-[350px]"
          />
          <Image
            src={"/iPhone-13-Pro-new (5).svg"}
            alt={"Frame"}
            width={300}
            height={300}
            className="w-full h-auto ml-10 -mt-10 rounded-xl max-w-[400px] md:max-w-[400px]"
          />
          <Image
            src={"/Layer 100.svg"}
            alt={"Frame"}
            width={300}
            height={300}
            className="w-full -ml-5 -mt-160 h-auto rounded-xl max-w-[100px] md:max-w-[100px]"
          />
        </div>
      </div>
    </section>
  );
}
