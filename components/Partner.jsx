"use client"
import { useRef, useEffect } from "react"
import Image from "next/image"
import { gsap } from "gsap"

export default function PartnerClients() {
  const containerRef = useRef(null)
  const imagesRef = useRef([])

  // Reset refs on each render
  imagesRef.current = []

  const addToRefs = (el) => {
    if (el && !imagesRef.current.includes(el)) {
      imagesRef.current.push(el)
    }
  }

  const partners = [
    { id: 1, name: "Quranic Media", image: "/aliE.jpg" },
    { id: 2, name: "Client 2",       image: "/mugheera.png" },
    { id: 3, name: "Client 3",       image: "/aliE.jpg" },
    { id: 4, name: "Client 4",       image: "/aliE.jpg" },
    { id: 5, name: "Client 5",       image: "/aliE.jpg" },
    { id: 6, name: "Client 6",       image: "/aliE.jpg" },
  ]

  useEffect(() => {
    const container = containerRef.current
    const images = imagesRef.current
    const imgSize = 96; // Tailwind h-24 & w-24 = 96px
    const overlap = imgSize / 3; // Adjusted overlap for better spacing
    const gap = 30; // Increased gap for a more relaxed layout
    const initialSpacing = imgSize - overlap + gap; // Calculates spacing preserving overlap and gap

    // Start the animation with adjusted spacing
    gsap.set(images, {
      x: (i) => i * initialSpacing, // Use calculated spacing for better alignment
      opacity: 1,
      scale: 1,
    });

    // Adjusted hover animation for slower and smoother effect
    const enterAnimation = () => {
      gsap.to(images, {
        x: (i) => i * 200, // Spread out in a line
        duration: 1, // Slower animation
        ease: "power2.out",
        stagger: 0.10, // Slight delay between each image
      });
    };

    // Adjusted leave animation for slower and smoother effect
    const leaveAnimation = () => {
      gsap.to(images, {
        x: (i) => i * -10, // Return to reduced overlap
        duration: 1, // Slower animation
        ease: "power2.in",
        stagger: 0.05, // Slight delay between each image
      });
    };

    container.addEventListener("mouseenter", enterAnimation)
    container.addEventListener("mouseleave", leaveAnimation)
    return () => {
      container.removeEventListener("mouseenter", enterAnimation)
      container.removeEventListener("mouseleave", leaveAnimation)
    }
  }, [])

  return (
    <section className="py-16 px-4">
      <div className="container mx-auto">
        <h2 className="text-white text-5xl font-bold mb-16">
          Partner & Clients
        </h2>
        <div
          ref={containerRef}
          className="relative h-24 flex items-center cursor-pointer overflow-visible"
        >
          {partners.map((p) => (
            <div
              key={p.id}
              ref={addToRefs}
              className="absolute h-20 w-20 rounded-full overflow-hidden ml-10 border-2 border-white/10"
              style={{ left: 0 }}
            >
              <Image
                src={p.image}
                alt={p.name}
                fill
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
