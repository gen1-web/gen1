"use client";
import { useRef, useEffect } from "react";
import Image from "next/image";
import { gsap } from "gsap";

export default function PartnerClients() {
  const partners = [
    { id: 1, name: "Quranic Media", image: "/1.png" },
    { id: 2, name: "Client 2", image: "/2.png" },
    { id: 3, name: "Client 3", image: "/3.png" },
    { id: 4, name: "Client 4", image: "/4.png" },
    { id: 5, name: "Client 5", image: "/5.png" },
    { id: 6, name: "Client 6", image: "/6.png" },
    { id: 7, name: "Quranic Media", image: "/7.png" },
  ];

  return (
    <section className="py-16 px-4 ml-8">
      <div className="container mx-auto">
        <h2 className="text-white text-5xl font-bold mb-16">
          Partner & Clients
        </h2>
        <div className="flex items-center gap-2">
          <div className="flex -space-x-13 overflow-hidden hover:space-x-20 transition-all duration-300">
            {partners.map((i) => (
              <div
                key={i.id}
                className="w-[100px] h-[100px] rounded-full border-2 border-secondary overflow-hidden relative transition-all duration-700 ease-out hover:scale-105"
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
      </div>
    </section>
  );
}
