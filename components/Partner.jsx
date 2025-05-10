"use client"
import { useRef, useEffect } from "react"
import Image from "next/image"
import { gsap } from "gsap"

export default function PartnerClients() {

  const partners = [
    { id: 1, name: "Quranic Media", image: "/aliE.jpg" },
    { id: 2, name: "Client 2",       image: "/mugheera.png" },
    { id: 3, name: "Client 3",       image: "/aliE.jpg" },
    { id: 4, name: "Client 4",       image: "/aliE.jpg" },
    { id: 5, name: "Client 5",       image: "/aliE.jpg" },
    { id: 6, name: "Client 6",       image: "/aliE.jpg" },
  ]

  return (
    <section className="py-16 px-4">
      <div className="container mx-auto">
        <h2 className="text-white text-5xl font-bold mb-16">
          Partner & Clients
        </h2>
        <div className="flex items-center gap-2">
          <div className="flex -space-x-9 overflow-hidden hover:space-x-9 transition-all duration-300">
            {partners.map((i) => (
              <div
                key={i.id}
                className="w-[100px] h-[100px] rounded-full border-2 border-secondary overflow-hidden transition-all duration-700 ease-out hover:scale-105"
              >
                <Image
                  src={i.image}
                  alt={i.name}
                  width={100}
                  height={100}
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
