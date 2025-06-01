"use client";
import Image from "next/image";

const WhatSetsUsApart = () => {
  return (
    <section className="relative bg-red-600 pt-12 pb-10 md:pt-16 md:pb-14 px-4 overflow-hidden mt-5">
      {/* Top Black Bar */}
      <div className="absolute top-0 left-0 w-full h-10 md:h-12 bg-black z-0" />

      {/* Image for Larger Screens */}
      <div className="hidden md:block absolute right-0 bottom-[-1]">
        <Image
          src="/chess.png"
          alt="Strategic planning with chess pieces and wooden blocks"
          width={400}
          height={300}
          className="object-contain"
          priority
        />
      </div>

      {/* Centered Image for Mobile */}
      <div className="md:hidden flex justify-center mb-6">
        <Image
          src="/chess.png"
          alt="Strategic planning with chess pieces and wooden blocks"
          width={300}
          height={225}
          className="object-contain"
          priority
        />
      </div>

      {/* Text Content */}
      <div className="container mx-auto relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="pt-10 md:pt-28 text-center lg:text-left">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              What sets us apart?
            </h2>
            <p className="text-white/95 text-base md:text-lg leading-relaxed">
              We're especially passionate about helping Islamic brands—those amazing businesses that often struggle to
              find quality marketing support. We offer affordable, high-quality solutions tailored just for them. It's
              been an exciting journey, and we're thrilled to be building something meaningful!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatSetsUsApart;
