"use client"
import Image from "next/image"

const Testimonial = () => {
  return (
    <section className="bg-black py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="flex flex-col items-center text-center">
          {/* Quote Mark */}
          <div className="text-red-600 mb-8">
            <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M32 16C23.2 16 16 23.2 16 32V48C16 56.8 23.2 64 32 64H48C56.8 64 64 56.8 64 48V32C64 23.2 56.8 16 48 16H32ZM32 24H48C52.4 24 56 27.6 56 32V48C56 52.4 52.4 56 48 56H32C27.6 56 24 52.4 24 48V32C24 27.6 27.6 24 32 24Z"
                fill="#E53935"
              />
              <path
                d="M40 36C42.2 36 44 34.2 44 32C44 29.8 42.2 28 40 28C37.8 28 36 29.8 36 32C36 34.2 37.8 36 40 36Z"
                fill="#E53935"
              />
              <path
                d="M40 44C37.8 44 36 45.8 36 48C36 50.2 37.8 52 40 52C42.2 52 44 50.2 44 48C44 45.8 42.2 44 40 44Z"
                fill="#E53935"
              />
            </svg>
          </div>

          {/* Testimonial Text */}
          <p className="text-white text-2xl md:text-3xl font-normal leading-relaxed mb-4">
            Gen1 Solutions is a leading creative agency, dedicated to delivering innovative and purpose-driven content
            for global Islamic organizations.
            <br />
            They <span className="text-red-600">designed some amazing graphics</span> for my YouTube channel.
            <br />
            Highly Recommended!!!
          </p>

          {/* Profile */}
          <div className="mt-10 flex flex-col items-center">
            <div className="w-16 h-16 rounded-full overflow-hidden mb-3 border border-zinc-700">
              <Image
                src="/placeholder.svg?height=64&width=64"
                alt="Ali E."
                width={64}
                height={64}
                className="object-cover"
              />
            </div>
            <h4 className="text-white text-lg font-medium">Ali E.</h4>
            <p className="text-zinc-500 text-sm">Islamic Influencer</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonial
