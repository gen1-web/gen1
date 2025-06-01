"use client"
import Image from "next/image"

const WhatSetsUsApart = () => {
  return (
    <section className="bg-red-600 py-16 md:py-20 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Text Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">What sets us apart?</h2>
            <p className="text-white/95 text-lg leading-relaxed">
              We're especially passionate about helping Islamic brands—those amazing businesses that often struggle to
              find quality marketing support. We're here to level the playing field, offering affordable, high-quality
              solutions tailored just for them. It's been an exciting journey, and we're thrilled to be building
              something meaningful, one creative campaign at a time!
            </p>
          </div>

          {/* Right Side - Chess Strategy Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md">
              <Image
                src="/chess.png"
                alt="Strategic planning with chess pieces and wooden blocks representing growth and strategy"
                width={400}
                height={240}
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhatSetsUsApart
