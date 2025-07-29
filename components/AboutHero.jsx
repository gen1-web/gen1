"use client";
import Image from "next/image";

const AboutHero = () => {
  return (
    <section className="bg-black flex flex-col justify-center px-4 py-8 sm:py-12 md:py-16 relative">
      <div className="container mx-auto">
        {/* Main Heading - Centered */}
        <div className="text-center mb-12 sm:mb-16 md:mb-20">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold leading-tight mb-2 sm:mb-4">
            From Idea To Reality
          </h1>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold leading-tight text-red-600">
            Your Vision, Our Theme.
          </h2>
        </div>
      </div>
      {/* Our Story Section - Full width */}
      <div className="w-full flex flex-col md:flex-row items-center justify-center gap-6 md:gap-10 px-4 md:px-12 mt-6">
        {/* Left: Text */}
        <div className="flex-1 max-w-2xl text-white md:pl-12">
          <h3 className="text-4xl md:text-5xl font-bold mb-6">
            Our <span className="text-red-600">Story</span>
          </h3>
          
            <p className="text-2xl italic">
              "At Gen1 Solutions, we don't just deliver services—we deliver excellence. Every project reflects our dedication to quality, creativity, and client success."
            </p>
            <p className="text-2xl ">
              — Abdul Aleem, CEO & Founder, Gen1 Solutions Ltd.
            </p>
            <p>
              Contact: +92 305 4559888
            </p>
        </div>
        {/* Right: Image */}
        <div className="flex-shrink-0 md:pr-12 flex justify-center md:justify-end">
          <Image src={"/abdul.jpg"}
            alt="Our Story"
            width={700}
            height={700}
            className="w-1/2 border-2 border-secondary rounded-full shadow-lg object-cover"
            />
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
