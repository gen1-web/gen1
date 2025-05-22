"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";
import gsap from "gsap";

const Gallery = () => {
  const wrapperRef = useRef(null);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return;

    const posterWidth = 350 + 36; // 350px + 2.25rem (gap-9)

    const slide = () => {
      gsap.to(wrapper, {
        x: `-=${posterWidth}`,
        duration: 0.5,
        ease: "power2.inOut",
        onComplete: () => {
          const firstPoster = wrapper.children[0];
          wrapper.appendChild(firstPoster);
          gsap.set(wrapper, { x: 0 });
        },
      });
    };

    const interval = setInterval(slide, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative">
      {/* Hero Text */}
      <div className="container mx-auto text-center px-4">
        <h1 className="text-5xl md:text-7xl font-bold leading-tight tracking-tight mb-4 text-white">
          First in <span className="text-red-600">Creativity</span>, First in{" "}
          <span className="text-red-600">Results</span>.
        </h1>
        <p className="text-lg text-zinc-100 max-w-3xl mx-auto">
          Crafting impactful content for visionary Islamic brands
        </p>
      </div>

      {/* Gallery */}
      <div className="relative w-full overflow-hidden">
        {/* Red Glow */}
        <div className="absolute inset-0 bg-gradient-radial from-red-600/30 via-red-900/20 to-transparent" />

        <div className="relative h-full w-full bg-[radial-gradient(ellipse_at_50%_50%,_#cc0000_0%,_#000000_80%)]">
          <div className="curved-gallery-container relative z-10 py-6 px-4 overflow-hidden">
            <div className="poster-wrapper flex gap-9 w-max" ref={wrapperRef}>
              {[
                { src: "/poster1.png", alt: "The Court Flush" },
                { src: "/football.jpg", alt: "Soulful Ties" },
                { src: "/poster1.png", alt: "The Problem with Consent" },
                { src: "/night.jpg", alt: "The Revival" },
                { src: "/poster1.png", alt: "Turn the Page" },
                { src: "/poster1.png", alt: "The Court Flush" },
                { src: "/football.jpg", alt: "Soulful Ties" },
                { src: "/poster1.png", alt: "The Problem with Consent" },
                { src: "/night.jpg", alt: "The Revival" },
                { src: "/poster1.png", alt: "Turn the Page" },
                { src: "/poster1.png", alt: "The Court Flush" },
                { src: "/football.jpg", alt: "Soulful Ties" },
                { src: "/poster1.png", alt: "The Problem with Consent" },
                { src: "/night.jpg", alt: "The Revival" },
                { src: "/poster1.png", alt: "Turn the Page" },
              ].map((poster, index) => (
                <div className="poster-item flex-shrink-0" key={index}>
                  <Image
                    src={poster.src}
                    alt={poster.alt}
                    width={350}
                    height={500}
                    className="rounded-lg object-cover shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="container mx-auto text-center py-8 md:py-12 px-4">
        <Button
          variant="outline"
          className="rounded-full bg-white text-black hover:bg-[#CC0000] border-0 flex items-center gap-2 px-6 py-6 text-lg mx-auto"
        >
          <Calendar className="h-5 w-5" />
          <span>Book a FREE Consultation</span>
        </Button>
      </div>
    </section>
  );
};

export default Gallery;
