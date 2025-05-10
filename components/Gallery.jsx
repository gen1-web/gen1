import React from "react";
import Image from "next/image";
import CTA from "./CTA";
import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";

const Gallery = () => {
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
      {/* Red Glow Background for Gallery */}
      <div className="relative w-full overflow-hidden">
        {/* Red Glow Gradient */}
        <div className="absolute inset-0 bg-gradient-radial from-red-600/30 via-red-900/20 to-transparent"></div>

        {/* 3D Curved Gallery */}
        <div className="relative h-full w-full bg-[radial-gradient(ellipse_at_50%_50%,_#cc0000_0%,_#000000_80%)]">
          <div className="curved-gallery-container relative z-10 justify-around bg-transparent py-6 px-4">
            <div className="poster-wrapper flex justify-around gap-9">
              <div
                className="poster-item"
                style={{ transform: "rotateY(30deg)" }}
              >
                <Image
                  src="/poster1.png"
                  alt="The Court Flush"
                  width={350}
                  height={500}
                  className="rounded-lg object-cover shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                />
              </div>
              <div
                className="poster-item"
                style={{ transform: "rotateY(15deg)" }}
              >
                <Image
                  src="/poster1.png"
                  alt="Soulful Ties"
                  width={350}
                  height={500}
                  className="rounded-lg object-cover shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                />
              </div>
              <div
                className="poster-item"
                style={{ transform: "rotateY(0deg)" }}
              >
                <Image
                  src="/poster1.png"
                  alt="The Problem with Consent"
                  width={350}
                  height={500}
                  className="rounded-lg object-cover shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                />
              </div>
              <div
                className="poster-item"
                style={{ transform: "rotateY(-15deg)" }}
              >
                <Image
                  src="/poster1.png"
                  alt="The Revival"
                  width={350}
                  height={500}
                  className="rounded-lg object-cover shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                />
              </div>
              <div
                className="poster-item"
                style={{ transform: "rotateY(-30deg)" }}
              >
                <Image
                  src="/poster1.png"
                  alt="Turn the Page"
                  width={350}
                  height={500}
                  className="rounded-lg object-cover shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
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
