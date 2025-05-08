import React from "react";
import Gallery from "./Gallery";
import Services from "./Services";
import AnimatedTextSection from "./AnimatedTextSection";

const Hero = () => {
  return (
    <main className="flex-1 flex flex-col">
      <div className="bg-[gradient-to-b from-[#202020] to-[#1a1a1a]] mt-5">
        <Gallery />
      </div>
      <div className="bg-[#141414]">
        <Services />
      </div>
    </main>
  );
};

export default Hero;
