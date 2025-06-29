"use client";
import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import { gsap } from "gsap";

export default function PartnerClients() {
  const mobileRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  const partners = [
    { id: 1, name: "Quranic Media", image: "/Artboard 8.png" },
    { id: 2, name: "Client 2", image: "/Artboard 2.png" },
    { id: 3, name: "Client 3", image: "/Artboard 11.png" },
    { id: 4, name: "Client 4", image: "/Artboard 4.png" },
    { id: 5, name: "Client 5", image: "/Artboard 10.png" },
    { id: 6, name: "Client 6", image: "/Artboard 6.png" },
    { id: 7, name: "Quranic Media", image: "/Artboard 19.png" },
    { id: 8, name: "Quranic Media", image: "/Artboard 18.png" }
  ];

  const allPartners = [...partners, ...partners];

  useEffect(() => {
    const updateIsMobile = () => setIsMobile(window.innerWidth < 768);
    updateIsMobile();
    window.addEventListener("resize", updateIsMobile);
    return () => window.removeEventListener("resize", updateIsMobile);
  }, []);

  useEffect(() => {
    const el = mobileRef.current;
    if (!isMobile || !el) return;

    gsap.set(el, { x: 0 });

    const itemWidth = 120;
    const tl = gsap.timeline({ repeat: -1, defaults: { ease: "none" } });
    tl.to(el, {
      x: `-=${itemWidth * partners.length}`,
      duration: 20,
    });

    return () => {
      tl.kill();
    };
  }, [isMobile]);

  return (
    <section className="py-16 px-4 ml-8 overflow-hidden">
      <div className="container mx-auto">
        <h2 className="text-white text-5xl font-bold mb-16">
          Partner & Clients
        </h2>

        {/* Desktop View */}
        {!isMobile && (
          <div className="flex items-center gap-2">
            <div className="flex -space-x-13 overflow-hidden hover:space-x-20 transition-all duration-300">
              {partners.map((i) => (
                <div
                  key={i.id}
                  className="w-[100px] h-[100px] rounded-full border-2 border-secondary overflow-hidden relative transition-all duration-700 ease-out "
                >
                  <Image
                    src={i.image}
                    alt={i.name}
                    layout="fill"
                    className="object-cover bg-gray-100"
                  />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Mobile View with Scrolling Animation */}
        {isMobile && (
          <div className="w-full overflow-hidden">
            <div
              ref={mobileRef}
              className="flex gap-6 w-max"
            >
              {allPartners.map((i, index) => (
                <div
                  key={`${i.id}-${index}`}
                  className="w-[100px] h-[100px] rounded-full border-2 border-secondary overflow-hidden relative flex-shrink-0"
                >
                  <Image
                    src={i.image}
                    alt={i.name}
                    layout="fill"
                    className="object-cover bg-gray-100"
                  />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
