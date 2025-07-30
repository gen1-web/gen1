"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";

export default function PartnerClients() {
  const [isMobile, setIsMobile] = useState(false);
  const wrapperRef = useRef(null);

  const partners = [
    { id: 1, name: "Quranic Media", image: "/Artboard 8.png" },
    { id: 2, name: "Client 2", image: "/Artboard 2.png" },
    { id: 3, name: "Client 3", image: "/Artboard 11.png" },
    { id: 4, name: "Client 4", image: "/Artboard 4.png" },
    { id: 5, name: "Client 5", image: "/Artboard 10.png" },
    { id: 6, name: "Client 6", image: "/Artboard 6.png" },
    { id: 7, name: "Quranic Media", image: "/Artboard 19.png" },
    { id: 8, name: "Quranic Media", image: "/Artboard 18.png" },
    { id: 9, name: "Quranic Media", image: "/Artboard 17.png" },
    { id: 10, name: "Quranic Media", image: "/Artboard 13.png" },
    { id: 11, name: "Quranic Media", image: "/Artboard 9.png" },
    { id: 12, name: "Quranic Media", image: "/Artboard 1.png" },
    {id: 13, name: "Quranic Media", image: "/Artboard 3.png" },
    {id:14, name: "Quranic Media", image: "/Artboard 5.png" },
    {id: 15, name: "Quranic Media", image: "/Artboard 7.png" },
    {id: 16, name: "Quranic Media", image: "/Artboard 12.png" },
    {id: 17, name: "Quranic Media", image: "/Artboard 14.png" },
  ];

  useEffect(() => {
    const updateIsMobile = () => setIsMobile(window.innerWidth < 768);
    updateIsMobile();
    window.addEventListener("resize", updateIsMobile);
    return () => window.removeEventListener("resize", updateIsMobile);
  }, []);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return;

    const totalWidth = wrapper.scrollWidth / 2; // because we duplicate the partners
    gsap.set(wrapper, { x: 0 });

    const tl = gsap.to(wrapper, {
      x: `-=${totalWidth}`,
      duration: 40,
      ease: "none",
      repeat: -1,
    });

    return () => tl.kill();
  }, []);

  const displayPartners = [...partners, ...partners]; // duplicate for seamless scroll

  return (
    <section className="py-16 px-4 ml-8 overflow-hidden">
      <div className="container mx-auto">
        <h2 className="text-white text-5xl font-bold mb-16 text-center">
          Partner & Clients
        </h2>

        {/* Animated partners display */}
        <div className="relative w-full overflow-hidden">
          <div
            className="flex w-max gap-6"
            ref={wrapperRef}
          >
            {displayPartners.map((partner, index) => (
              <div
                key={`${partner.id}-${index}`}
                className="w-[100px] h-[100px] rounded-full border-2 border-secondary overflow-hidden relative flex-shrink-0"
              >
                <Image
                  src={partner.image}
                  alt={partner.name}
                  layout="fill"
                  className="object-cover bg-gray-100"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
