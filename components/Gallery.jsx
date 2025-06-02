"use client";

import React, { useEffect, useRef, useState } from "react"; // Added useState
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
  { src: "/poster1.png", alt: "Soulful Ties" }, // Note: duplicate src, ensure alt is unique or key is handled
  { src: "/poster11.jpg", alt: "The Problem with Consent" },
  { src: "/poster12.jpg", alt: "The Court Flush" },
  { src: "/poster13.jpg", alt: "Soulful Ties" },
  { src: "/poster14.jpg", alt: "The Problem with Consent" },
  { src: "/poster15.jpg", alt: "The Court Flush" },
  { src: "/poster16.jpg", alt: "Soulful Ties" },
];

const Gallery = () => {
  const wrapperRef = useRef(null);
  const [isMobileView, setIsMobileView] = useState(false);

  // Effect for setting initial isMobileView and attaching resize listener
  useEffect(() => {
    const checkMobile = () => window.innerWidth < 768;
    setIsMobileView(checkMobile()); // Set initial value

    const handleResize = () => {
      setIsMobileView(checkMobile());
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Effect for GSAP animation, re-runs when isMobileView changes
  useEffect(() => {
    const wrapper = wrapperRef.current;
    // Ensure wrapper and children exist, and that we have enough children for the animation logic
    // (at least one item to move, though more are expected due to duplication)
    if (!wrapper || wrapper.children.length === 0) {
      return;
    }

    // Kill previous timeline if it exists
    if (wrapper.gsapTimeline) {
      wrapper.gsapTimeline.kill();
    }
    gsap.set(wrapper, { x: 0 }); // Reset position before new animation

    const actualPosterWidth = isMobileView ? 200 : 350;
    const gapWidth = isMobileView ? 16 : 36; // Tailwind gap-4 is 1rem (16px), gap-9 is 2.25rem (36px)
    const totalWidthPerItem = actualPosterWidth + gapWidth;

    const duration = isMobileView ? 2.5 : 1.5;
    const repeatDelay = isMobileView ? 2.5 : 4.5;

    const tl = gsap.timeline({
      repeat: -1,
      repeatDelay,
      defaults: { ease: "power2.inOut" }
    });

    tl.to(wrapper, {
      x: `-=${totalWidthPerItem}`,
      duration,
      ease: "power2.inOut",
      onComplete: () => {
        wrapper.appendChild(wrapper.children[0]);
        gsap.set(wrapper, { x: 0 });
      },
    });

    wrapper.gsapTimeline = tl; // Store timeline for cleanup

    return () => {
      if (wrapper.gsapTimeline) {
        wrapper.gsapTimeline.kill();
        delete wrapper.gsapTimeline; // Clean up property
      }
    };
  }, [isMobileView]); // Re-run when isMobileView changes

  // Duplicate posters for seamless loop
  const displayPosters = [...posterData, ...posterData];

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
          <div 
            className={`curved-gallery-container relative z-10 py-6 overflow-hidden ${isMobileView ? 'w-[200px] mx-auto' : 'px-4 w-full'}`}
          >
            <div
              className={`poster-wrapper flex w-max ${isMobileView ? 'gap-4' : 'gap-9'}`}
              ref={wrapperRef}
            >
              {displayPosters.map((poster, index) => (
                <div className="poster-item flex-shrink-0" key={`${poster.alt}-${index}`}> {/* Ensure unique key */}
                  <Image
                    src={poster.src}
                    alt={poster.alt}
                    width={isMobileView ? 200 : 350}
                    height={isMobileView ? 300 : 500}
                    className="rounded-lg object-cover shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                    priority={index < 5} // Prioritize loading for initial images
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
