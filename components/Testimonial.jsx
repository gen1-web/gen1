"use client"
import Image from "next/image"

const Testimonial = () => {
  return (
    <section className="bg-black py-12 px-4 relative">
      <div className="container mx-auto max-w-2xl">
        <div className="flex flex-col items-center text-center">
          {/* Quote Mark */}
          <div className="text-red-600 mb-6">
            <Image src="/commas.svg" alt="Quote Mark" width={60} height={60} />
          </div>
          {/* Testimonial Text */}
          <p className="text-white text-xl sm:text-lg md:text-2xl font-sans tracking-wide transform scale-x-110 mb-4">

            Gen1 Solutions is a leading creative agency, dedicated to delivering innovative and purpose-driven content
            for global Islamic organizations.
            They <span className="text-red-600">designed some amazing graphics</span> for my YouTube channel.
            Highly Recommended!!!
          </p>

          {/* Profile */}
          <div className="mt-6 flex flex-col items-center">
            <div className="w-14 h-14 rounded-full overflow-hidden mb-2 border border-zinc-700">
              <Image
                src="/aliE.jpg"
                alt="Ali E."
                width={56}
                height={56}
                className="object-cover"
              />
            </div>
            <h4 className="text-white text-base font-medium">Ali E.</h4>
            <p className="text-zinc-500 text-xs">Islamic Influencer</p>
          </div>
        </div>
      </div>
      {/* Bottom Right SVG */}
      {/* <div className="absolute bottom-0 right-0 opacity-10 bg-slate-600">
        <Image src="/commas2.svg" alt="Decorative Quote Mark" width={300} height={300} />
      </div> */}
    </section>
  )
}

export default Testimonial