"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";
import gsap from "gsap";
import Link from "next/link";

const posterData = [
  { src: "/poster1.png", alt: "The Court Flush" },
  { src: "/poster2.jpg", alt: "Soulful Ties" },
  { src: "/night.jpg", alt: "The Problem with Consent" },
  { src: "/poster4.jpg", alt: "The Court Flush" },
  { src: "/poster5.jpg", alt: "Soulful Ties" },
  { src: "/poster6.jpg", alt: "The Problem with Consent" },
  { src: "/poster7.jpg", alt: "The Court Flush" },
  { src: "/poster8.jpg", alt: "Soulful Ties" },
  { src: "/football.jpg", alt: "The Problem with Consent" },
  { src: "/poster11.jpg", alt: "The Problem with Consent" },
  { src: "/poster12.jpg", alt: "The Court Flush" },
  { src: "/poster13.jpg", alt: "Soulful Ties" },
  { src: "/poster14.jpg", alt: "The Problem with Consent" },
  { src: "/poster15.jpg", alt: "The Court Flush" },
  { src: "/poster16.jpg", alt: "Soulful Ties" },
];

const Gallery = () => {
  const wrapperRef = useRef(null);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return;

    const totalWidth = wrapper.scrollWidth / 2; // because we duplicate the posters
    gsap.set(wrapper, { x: 0 });

    const tl = gsap.to(wrapper, {
      x: `-=${totalWidth}`,
      duration: 60,
      ease: "none",
      repeat: -1,
    });

    return () => tl.kill();
  }, []);

  const displayPosters = [...posterData, ...posterData]; // duplicate for seamless scroll

  return (
    <section className="relative">
      {/* Hero Text */}
      <div className="container mx-auto text-center px-4 mb-16">
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
        <div className="absolute inset-0 bg-gradient-radial from-red-600/30 via-red-900/20 to-transparent" />

        <div className="relative h-full w-full bg-[radial-gradient(ellipse_at_50%_50%,_#cc0000_0%,_#000000_80%)]">
          <div className="relative z-10 py-6 overflow-hidden">
            <div
              className="flex w-max gap-9"
              ref={wrapperRef}
            >
              {displayPosters.map((poster, index) => (
                <div className="flex-shrink-0" key={`${poster.alt}-${index}`}>
                  <Image
                    src={poster.src}
                    alt={poster.alt}
                    width={350}
                    height={500}
                    className="rounded-lg object-cover shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                    priority={index < 5}
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
          <Link href="/form">Book a FREE Consultation</Link>
        </Button>
      </div>
    </section>
  );
};

export default Gallery;
