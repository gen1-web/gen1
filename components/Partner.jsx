"use client"
import { useRef, useEffect } from "react"
import Image from "next/image"
import { gsap } from "gsap"

const PartnerClients = () => {
  const containerRef = useRef(null)
  const imagesRef = useRef([])

  // Clear the refs array on each render
  imagesRef.current = []

  // Add to refs function
  const addToRefs = (el) => {
    if (el && !imagesRef.current.includes(el)) {
      imagesRef.current.push(el)
    }
  }

  // Partner/client data
  const partners = [
    { id: 1, name: "Quranic Media", image: "/placeholder.svg?height=120&width=120" },
    { id: 2, name: "Client 2", image: "/placeholder.svg?height=120&width=120" },
    { id: 3, name: "Client 3", image: "/placeholder.svg?height=120&width=120" },
    { id: 4, name: "Client 4", image: "/placeholder.svg?height=120&width=120" },
    { id: 5, name: "Client 5", image: "/placeholder.svg?height=120&width=120" },
    { id: 6, name: "Quranic Media", image: "/placeholder.svg?height=120&width=120" },
  ]

  useEffect(() => {
    const container = containerRef.current
    const images = imagesRef.current

    // Set initial positions (overlapping)
    gsap.set(images, {
      x: (i) => i * -40, // Overlapping effect
      opacity: 1,
      scale: 1,
    })

    // Create hover animation
    const enterAnimation = () => {
      gsap.to(images, {
        x: (i) => i * 130, // Spread out in a line
        duration: 0.5,
        ease: "power2.out",
        stagger: 0.02,
      })
    }

    // Create leave animation
    const leaveAnimation = () => {
      gsap.to(images, {
        x: (i) => i * -40, // Return to overlapping
        duration: 0.5,
        ease: "power2.in",
        stagger: 0.02,
      })
    }

    // Add event listeners
    if (container) {
      container.addEventListener("mouseenter", enterAnimation)
      container.addEventListener("mouseleave", leaveAnimation)
    }

    // Cleanup
    return () => {
      if (container) {
        container.removeEventListener("mouseenter", enterAnimation)
        container.removeEventListener("mouseleave", leaveAnimation)
      }
    }
  }, [])

  return (
    <section className="bg-black py-16 px-4">
      <div className="container mx-auto">
        <h2 className="text-white text-5xl font-bold mb-16">Partner, Clients</h2>

        <div ref={containerRef} className="relative h-32 flex items-center cursor-pointer overflow-hidden">
          {partners.map((partner, index) => (
            <div
              key={partner.id}
              ref={addToRefs}
              className="absolute rounded-full overflow-hidden border-2 border-white/10 h-24 w-24 flex-shrink-0"
              style={{ left: "0" }} // Initial position, will be controlled by GSAP
            >
              <Image src={partner.image || "/placeholder.svg"} alt={partner.name} fill className="object-cover" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default PartnerClients
