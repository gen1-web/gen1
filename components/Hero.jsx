import React from "react";
import Gallery from "./Gallery";
import Services from "./Services";
import AnimatedTextSection from "./AnimatedTextSection";
import PortfolioSection from "./Portfolio";
import Testimonial from "./Testimonial";
import PartnerClients from "./Partner";
import Footer from "./Footer";

const Hero = () => {
  return (
    <main className="flex-1 flex flex-col overflow-hidden">
      <div className="bg-[gradient-to-b from-[#202020] to-[#1a1a1a]] mt-5 md:mt-1 sm:mt-1">
        <Gallery />
      </div>
      <div className="bg-[#141414]">
        <Services />
      </div>
      <div className="bg-[#141414]">
        <PortfolioSection/>
      </div>
      <div className="bg-[#202020]">
        <Testimonial/>
      </div>
      <div className="bg-[#141414]">
        <Footer/>
      </div>
    </main>
  );
};

export default Hero;
