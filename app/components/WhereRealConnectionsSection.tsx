"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const images = [
  "/Rectangle 40860.png",
  "/Rectangle 40861.png",
  "/Rectangle 40862.png",
  "/Rectangle 40864.png",
  "/Rectangle 40865.png",
  "/Rectangle 40866.png",
  "/Rectangle 40867.png",
  "/Rectangle 40868.png",
];

export default function WhereRealConnectionsSection() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 1800);

    return () => clearInterval(interval);
  }, [current]);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const getPosition = (index: number) => {
    const diff = index - current;

    if (diff === 0) return "center";
    if (diff === -1 || diff === images.length - 1) return "left";
    if (diff === 1 || diff === -images.length + 1) return "right";

    return "hidden";
  };

  return (
    <section className="relative  py-0 md:py-20 min-h-screen bg-black flex items-center justify-center px-4 overflow-hidden">
      <h2 className="absolute top-10 left-1/2 -translate-x-1/2 text-white text-3xl md:text-5xl font-clash text-center">
        Where real <span className="text-[#BF822E]">connections</span> come to
        life
      </h2>

      <div className="relative w-full mt-30 min-[400px]:mt-20 min-[420px]:mt-0 md:mt-40 max-w-6xl md:h-[500px] flex items-center justify-center">
        {images.map((src, index) => {
          const position = getPosition(index);

          return (
            <div
              key={index}
              onClick={() =>
                position === "left"
                  ? prevSlide()
                  : position === "right"
                    ? nextSlide()
                    : null
              }
              className={`
                absolute transition-all duration-700 ease-in-out
                ${position === "center" && "z-30 scale-100 translate-x-0 opacity-100"}
                ${position === "left" && "-translate-x-[360px] scale-90 opacity-70 z-20 cursor-pointer"}
                ${position === "right" && "translate-x-[360px] scale-90 opacity-70 z-20 cursor-pointer"}
                ${position === "hidden" && "opacity-0 scale-50 z-0"}
              `}
            >
              {/* 👇 Height difference applied here */}
              <div
                className={`
                  relative transition-all duration-700
                  ${
                    position === "center"
                      ? "min-[400px]:w-[350px] w-[300px] h-[350px] min-[400px]:h-[450px] md:w-[350px] md:h-[500px]"
                      : "min-[400px]:w-[320px] w-[300px] h-[350px] min-[400px]:h-[400px] md:w-[320px] md:h-[380px]"
                  }
                `}
              >
                <Image
                  src={src}
                  alt="carousel"
                  fill
                  className="object-cover rounded-2xl shadow-2xl"
                />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
