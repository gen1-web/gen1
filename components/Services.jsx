"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import AnimatedTextSection from "./AnimatedTextSection";

export default function ServicesSection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const isInViewport = (element) => {
      const rect = element.getBoundingClientRect();
      return (
        rect.top < (window.innerHeight || document.documentElement.clientHeight) &&
        rect.bottom >= 0
      );
    };

    const handleScroll = () => {
      const section = sectionRef.current;
      if (section && isInViewport(section)) {
        section.classList.add("animate-services");
        section.style.overflow = "hidden";
        window.removeEventListener("scroll", handleScroll);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const services = [
    { title: "Graphic Design", href: "/services/graphic-design" },
    { title: "Video", href: "/services/video" },
    { title: "Web Development", href: "/services/web-development" },
    { title: "Marketing", href: "/services/marketing" },
  ];

  const cardText =
    "Let us create creative customizable designs to elevate your brand.";

  return (
    <>
      <AnimatedTextSection />
      <section
        ref={sectionRef}
        className="container mx-auto py-6 md:py-24 px-4 services-section overflow-hidden"
      >
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Heading Section */}
          <div className="md:col-span-1">
            <h2 className="text-4xl md:text-5xl font-bold mb-2 text-red-600">
              Services
            </h2>
            <h3 className="text-4xl md:text-5xl font-bold text-white">We Offer</h3>
          </div>

          {/* Cards Section */}
          <div className="md:col-span-3 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-3 md:gap-4">
            {services.map((service, idx) => (
              <div
                key={idx}
                className="group relative service-card bg-zinc-700 rounded-3xl p-6 pb-4 flex flex-col justify-between h-80 transition-colors duration-500 ease-in-out overflow-hidden hover:bg-[#CC0000]"
              >
                <div className="relative z-10 flex flex-col justify-between h-full">
                  <div className="TITLE-DIV bg-zinc-800 text-white rounded-full px-4 py-2 inline-block font-semibold w-fit transition-all duration-300 group-hover:bg-white group-hover:text-red-600 text-lg sm:text-base whitespace-nowrap">
                    {service.title}
                  </div>
                  <div>
                    <p className="text-white text-2xl mt-auto mb-4 scale-y-150 md:scale-y-100">{cardText}</p>
                  </div>
                  <div>
                    <Link
                      href={service.href}
                      className="text-white/80 hover:text-white flex items-center gap-1 text-sm"
                    >
                      learn more <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
