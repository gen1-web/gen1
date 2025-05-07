import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { ArrowRight, Calendar } from "lucide-react"


const Hero = () => {
  return (
    <main className="flex-1 flex flex-col">
        {/* Hero Section with Poster Gallery */}
        <section className="relative">
          {/* Hero Text */}
          <div className="container mx-auto text-center py-16 md:py-20 px-4">
            <h1 className="text-5xl md:text-7xl font-bold leading-tight tracking-tight mb-4 text-white">
              First in <span className="text-red-600">Creativity</span>, First in{" "}
              <span className="text-red-600">Results</span>.
            </h1>
            <p className="text-lg text-zinc-400 max-w-3xl mx-auto mb-16">
              Crafting impactful content for visionary Islamic brands
            </p>
          </div>

          {/* Red Glow Background for Gallery */}
          <div className="relative w-full pb-32 pt-8 overflow-hidden">
            {/* Red Glow Gradient */}
            <div className="absolute inset-0 bg-gradient-radial from-red-600/30 via-red-900/20 to-transparent"></div>

            {/* 3D Curved Gallery */}
            <div className="curved-gallery-container relative z-10">
              <div className="poster-wrapper">
                <div className="poster-item" style={{ transform: "rotateY(30deg)" }}>
                  <Image
                    src="/placeholder.svg?height=500&width=350"
                    alt="The Court Flush"
                    width={350}
                    height={500}
                    className="rounded-lg object-cover shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                  />
                </div>
                <div className="poster-item" style={{ transform: "rotateY(15deg)" }}>
                  <Image
                    src="/placeholder.svg?height=500&width=350"
                    alt="Soulful Ties"
                    width={350}
                    height={500}
                    className="rounded-lg object-cover shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                  />
                </div>
                <div className="poster-item" style={{ transform: "rotateY(0deg)" }}>
                  <Image
                    src="/placeholder.svg?height=500&width=350"
                    alt="The Problem with Consent"
                    width={350}
                    height={500}
                    className="rounded-lg object-cover shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                  />
                </div>
                <div className="poster-item" style={{ transform: "rotateY(-15deg)" }}>
                  <Image
                    src="/placeholder.svg?height=500&width=350"
                    alt="The Revival"
                    width={350}
                    height={500}
                    className="rounded-lg object-cover shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                  />
                </div>
                <div className="poster-item" style={{ transform: "rotateY(-30deg)" }}>
                  <Image
                    src="/placeholder.svg?height=500&width=350"
                    alt="Turn the Page"
                    width={350}
                    height={500}
                    className="rounded-lg object-cover shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section with Animated Text */}
        <section className="container mx-auto py-16 md:py-24 px-4">
          <div className="max-w-5xl mx-auto">
            <p className="text-xl md:text-2xl leading-relaxed text-zinc-500 animated-text">
              Gen1 Solutions is a leading creative agency, dedicated to delivering innovative and purpose-driven content
              for global Islamic organizations. With a deep-rooted commitment to Islamic values, we are proud to offer
              Halal creative solutions that inspire and connect with audiences around the world, crafting narratives
              that touch hearts and uplift communities.
            </p>
            <h2 className="text-2xl font-bold mt-12 mb-6 border-b border-zinc-800 pb-2 inline-block">More About Us</h2>
          </div>
        </section>

        {/* Services Section */}
        <section className="container mx-auto py-16 md:py-24 px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-1">
              <h2 className="text-4xl md:text-5xl font-bold mb-2 text-red-600">Services</h2>
              <h3 className="text-4xl md:text-5xl font-bold text-white">We Offer</h3>
            </div>

            <div className="md:col-span-3 grid grid-cols-1 md:grid-cols-4 gap-4">
              {/* Graphic Design Card */}
              <div className="bg-red-600 rounded-3xl p-6 flex flex-col justify-between h-80">
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
              <div className="bg-zinc-900 rounded-3xl p-6 flex flex-col justify-between h-80">
                <div className="bg-zinc-800 text-white rounded-full px-4 py-2 inline-block font-semibold w-fit">
                  Video
                </div>
                <div>
                  <p className="text-white text-lg mt-auto mb-8">
                    Let us create creative customizable designs to elevate your brand
                  </p>
                  <Link
                    href="/services/video"
                    className="text-white/80 hover:text-white flex items-center gap-1 text-sm"
                  >
                    learn more <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>

              {/* Web Development Card */}
              <div className="bg-zinc-900 rounded-3xl p-6 flex flex-col justify-between h-80">
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
              <div className="bg-zinc-900 rounded-3xl p-6 flex flex-col justify-between h-80">
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

        {/* CTA Button */}
        <section className="container mx-auto text-center py-8 md:py-12 px-4">
          <Button
            variant="outline"
            className="rounded-full bg-white text-black hover:bg-white/90 border-0 flex items-center gap-2 px-6 py-6 text-lg mx-auto"
          >
            <Calendar className="h-5 w-5" />
            <span>Book a FREE Consultation</span>
          </Button>
        </section>
      </main>
  )
}

export default Hero
