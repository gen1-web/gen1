"use client"
import { useEffect, useRef } from "react"

const RangeOfServices = () => {
  const containerRef = useRef(null)
  const servicesRef = useRef([])

  // Service items with their positions
  const services = [
    { name: "Marketing", x: "10%", y: "20%" },
    { name: "Web Development", x: "70%", y: "15%" },
    { name: "Graphic Design", x: "80%", y: "60%" },
    { name: "Video", x: "15%", y: "70%" },
  ]

  useEffect(() => {
    // Add floating animation to service labels
    servicesRef.current.forEach((service, index) => {
      if (service) {
        const delay = index * 0.5
        service.style.animationDelay = `${delay}s`
        service.classList.add("floating-service")
      }
    })
  }, [])

  // Clear refs array
  servicesRef.current = []

  // Add to refs function
  const addToRefs = (el) => {
    if (el && !servicesRef.current.includes(el)) {
      servicesRef.current.push(el)
    }
  }

  return (
    <section className="bg-zinc-900 py-20 px-4 relative overflow-hidden">
      <div className="container mx-auto text-center relative">
        {/* Floating Service Labels */}
        <div ref={containerRef} className="absolute inset-0 pointer-events-none">
          {services.map((service, index) => (
            <div
              key={service.name}
              ref={addToRefs}
              className="absolute text-zinc-600 text-lg font-medium opacity-70"
              style={{
                left: service.x,
                top: service.y,
                transform: "translate(-50%, -50%)",
              }}
            >
              {service.name}
            </div>
          ))}
        </div>

        {/* Main Content */}
        <div className="relative z-10 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Range of <span className="text-red-600">Services</span>
          </h2>
          <p className="text-zinc-300 text-lg leading-relaxed">
            Eye-catching video content, stunning graphic designs, custom web development, targeted social media ads, and
            full-scale marketing strategies to boost your presence.
          </p>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translate(-50%, -50%) translateY(0px);
          }
          50% {
            transform: translate(-50%, -50%) translateY(-10px);
          }
        }

        .floating-service {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  )
}

export default RangeOfServices
