"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function PartnerClients() {
  const [isMobile, setIsMobile] = useState(false);

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
  ];

  useEffect(() => {
    const updateIsMobile = () => setIsMobile(window.innerWidth < 768);
    updateIsMobile();
    window.addEventListener("resize", updateIsMobile);
    return () => window.removeEventListener("resize", updateIsMobile);
  }, []);

  return (
    <section className="py-16 px-4 ml-8 overflow-hidden">
      <div className="container mx-auto">
        <h2 className="text-white text-5xl font-bold mb-16">
          Partner & Clients
        </h2>

        {/* Display all partners in a single line */}
        <div className="flex flex-wrap justify-start gap-6">
          {partners.map((i) => (
            <div
              key={i.id}
              className="w-[100px] h-[100px] rounded-full border-2 border-secondary overflow-hidden relative"
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
    </section>
  );
}
