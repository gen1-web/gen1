import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar } from "lucide-react";
import Gallery from "./Gallery";
import AnimatedTextSection from "./AnimatedTextSection";
import Services from "./Services";
import CTA from "./CTA";

const Hero = () => {
  return (
    <main className="flex-1 flex flex-col">
      <div className="bg-black">
        <Gallery />
      </div>
      <div className="bg-gray-900">
        <CTA />
      </div>
      <div className="bg-gray-800">
        <Services />
      </div>
    </main>
  );
};

export default Hero;
