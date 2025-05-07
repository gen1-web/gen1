"use client"

import { useEffect, useRef } from "react"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function ServicesSection() {
  const sectionRef = useRef(null)

  // Add smooth animation to the section
  useEffect(() => {
    const isInViewport = (element) => {
      const rect = element.getBoundingClientRect()
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      )
    }

    const handleScroll = () => {
      const section = sectionRef.current
      if (section && isInViewport(section)) {
        // Add animation class to section
        section.classList.add("animate-services")
        section.style.overflow = "hidden" // Prevent scroll bar appearance
        // Remove scroll listener after animation is triggered
        window.removeEventListener("scroll", handleScroll)
      }
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll()

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <section ref={sectionRef} className="container mx-auto py-16 md:py-24 px-4 services-section">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="md:col-span-1">
          <h2 className="text-4xl md:text-5xl font-bold mb-2 text-red-600">Services</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-white">We Offer</h3>
        </div>

        <div className="md:col-span-3 grid grid-cols-1 md:grid-cols-4 gap-4">
          {/* Graphic Design Card */}
          <div className="service-card bg-red-600 rounded-3xl p-6 flex flex-col justify-between h-80">
            <div className="bg-white text-red-600 rounded-full px-4 py-2 inline-block font-semibold w-fit">
              Graphic Design
            </div>
            <div>
              <p className="text-white text-lg mt-auto mb-8">
                Let us create creative customizable designs to elevate your brand
              </p>
              <Link
                href="/services/graphic-design"
                className="text-white/80 hover:text-white flex items-center gap-1 text-sm"
              >
                learn more <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* Video Card */}
          <div className="service-card bg-zinc-900 rounded-3xl p-6 flex flex-col justify-between h-80">
            <div className="bg-zinc-800 text-white rounded-full px-4 py-2 inline-block font-semibold w-fit">Video</div>
            <div>
              <p className="text-white text-lg mt-auto mb-8">
                Let us create creative customizable designs to elevate your brand
              </p>
              <Link href="/services/video" className="text-white/80 hover:text-white flex items-center gap-1 text-sm">
                learn more <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* Web Development Card */}
          <div className="service-card bg-zinc-900 rounded-3xl p-6 flex flex-col justify-between h-80">
            <div className="bg-zinc-800 text-white rounded-full px-4 py-2 inline-block font-semibold w-fit">
              Web Development
            </div>
            <div>
              <p className="text-white text-lg mt-auto mb-8">
                Let us create creative customizable designs to elevate your brand
              </p>
              <Link
                href="/services/web-development"
                className="text-white/80 hover:text-white flex items-center gap-1 text-sm"
              >
                learn more <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* Marketing Card */}
          <div className="service-card bg-zinc-900 rounded-3xl p-6 flex flex-col justify-between h-80">
            <div className="bg-zinc-800 text-white rounded-full px-4 py-2 inline-block font-semibold w-fit">
              Marketing
            </div>
            <div>
              <p className="text-white text-lg mt-auto mb-8">
                Let us create creative customizable designs to elevate your brand
              </p>
              <Link
                href="/services/marketing"
                className="text-white/80 hover:text-white flex items-center gap-1 text-sm"
              >
                learn more <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
