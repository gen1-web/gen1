import React from 'react'
import Image from 'next/image'
const Gallery = () => {
  return (
    <section className="relative">
        {/* Hero Text */}
        <div className="container mx-auto text-center px-4">
          <h1 className="text-5xl md:text-7xl font-bold leading-tight tracking-tight mb-4 text-white">
            First in <span className="text-red-600">Creativity</span>, First in{" "}
            <span className="text-red-600">Results</span>.
          </h1>
          <p className="text-lg text-zinc-400 max-w-3xl mx-auto">
            Crafting impactful content for visionary Islamic brands
          </p>
        </div>

        {/* Red Glow Background for Gallery */}
        <div className="relative w-full overflow-hidden">
          {/* Red Glow Gradient */}
          <div className="absolute inset-0 bg-gradient-radial from-red-600/30 via-red-900/20 to-transparent"></div>

          {/* 3D Curved Gallery */}
          <div className="curved-gallery-container relative z-10 justify-around">
            <div className="poster-wrapper">
              <div
                className="poster-item"
                style={{ transform: "rotateY(30deg)" }}
              >
                <Image
                  src="/poster1.png"
                  alt="The Court Flush"
                  width={350}
                  height={500}
                  className="rounded-lg object-cover shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                />
              </div>
              <div
                className="poster-item"
                style={{ transform: "rotateY(15deg)" }}
              >
                <Image
                  src="/poster1.png"
                  alt="Soulful Ties"
                  width={350}
                  height={500}
                  className="rounded-lg object-cover shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                />
              </div>
              <div
                className="poster-item"
                style={{ transform: "rotateY(0deg)" }}
              >
                <Image
                  src="/poster1.png"
                  alt="The Problem with Consent"
                  width={350}
                  height={500}
                  className="rounded-lg object-cover shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                />
              </div>
              <div
                className="poster-item"
                style={{ transform: "rotateY(-15deg)" }}
              >
                <Image
                  src="/poster1.png"
                  alt="The Revival"
                  width={350}
                  height={500}
                  className="rounded-lg object-cover shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                />
              </div>
              <div
                className="poster-item"
                style={{ transform: "rotateY(-30deg)" }}
              >
                <Image
                  src="/poster1.png"
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
  )
}

export default Gallery
