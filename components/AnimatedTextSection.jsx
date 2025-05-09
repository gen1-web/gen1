import React from 'react'
import Link from 'next/link'
const AnimatedTextSection = () => {
  return (
    <section className="container mx-auto py-6 md:py-24 px-4">
        <div className="max-w-15xl">
          <p className="text-lg md:text-2xl leading-relaxed text-zinc-500 animated-text group relative">
            Gen1 Solutions is a leading creative agency, dedicated to delivering
            innovative and purpose-driven content for global Islamic
            organizations. With a deep-rooted commitment to Islamic values, we
            are proud to offer Halal creative solutions that inspire and connect
            with audiences around the world, crafting narratives that touch
            hearts and uplift communities.
            <span className="absolute bottom-0 left-0 w-0 h-0.5  bg-zinc-800 group-hover:w-full transition-all duration-700"></span>
          </p>
          <h2 className="text-xl font-bold mt-5 mb-6 inline-block relative group">
            <Link href={"/"}>
            More About Us
            </Link>
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-zinc-300 group-hover:w-full transition-all duration-700"></span>
          </h2>
        </div>
    </section>
  )
}

export default AnimatedTextSection
