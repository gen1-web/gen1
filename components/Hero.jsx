import React from "react";
import Gallery from "./Gallery";
import Services from "./Services";
import CTA from "./CTA";

const Hero = () => {
  return (
    <main className="flex-1 flex flex-col">
      <div className="bg-[#282828]">
        <Gallery />
      </div>
      <div className="bg-[#141414]">
        <CTA />
      </div>
      <div className="bg-[#282828]">
        <Services />
      </div>
    </main>
  );
};

export default Hero;
