"use client"
import Image from "next/image"
import { useEffect, useRef, useState } from "react"
import { gsap } from "gsap"

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const testimonialRef = useRef(null)
  const profileRef = useRef(null)
  const quoteRef = useRef(null)

  const testimonials = [
    {
      id: 1,
      text: "Gen1 Solutions is a leading creative agency, dedicated to delivering innovative and purpose-driven content for global Islamic organizations. They designed some amazing graphics for my YouTube channel. Highly Recommended!!!",
      name: "Ali E.",
      role: "Islamic Influencer",
      image: "/aliE.jpg",
      highlight: "designed some amazing graphics"
    },
    {
      id: 2,
      text: "Working with Gen1 Solutions has been an incredible experience. Their video production quality is outstanding and they truly understand our vision. The team is professional and delivers on time every single time.",
      name: "Sarah Ahmed",
      role: "Content Creator",
      image: "/aliE.jpg", // You can replace with actual image
      highlight: "video production quality is outstanding"
    },
    {
      id: 3,
      text: "The marketing campaigns created by Gen1 Solutions have significantly increased our reach and engagement. Their strategic approach and creative execution are exactly what we needed for our brand growth.",
      name: "Muhammad Hassan",
      role: "Business Owner",
      image: "/aliE.jpg", // You can replace with actual image
      highlight: "significantly increased our reach"
    },
    {
      id: 4,
      text: "Gen1 Solutions delivered exceptional web development services for our organization. The website is not only beautiful but also highly functional. Their attention to detail is remarkable.",
      name: "Fatima Khan",
      role: "Project Manager",
      image: "/aliE.jpg", // You can replace with actual image
      highlight: "exceptional web development services"
    }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      // Animate out current testimonial
      const tl = gsap.timeline()
      
      tl.to([testimonialRef.current, profileRef.current], {
        opacity: 0,
        y: -20,
        duration: 0.3,
        ease: "power2.inOut"
      })
      .call(() => {
        // Change to next testimonial
        setCurrentIndex((prevIndex) => 
          prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
        )
      })
      .to([testimonialRef.current, profileRef.current], {
        opacity: 1,
        y: 0,
        duration: 0.3,
        ease: "power2.inOut"
      })
    }, 5000) // Change every 5 seconds

    return () => clearInterval(interval)
  }, [testimonials.length])

  const currentTestimonial = testimonials[currentIndex]

  return (
    <section className="bg-black py-12 px-4 relative overflow-hidden">
      {/* Background particles */}
      <div className="absolute inset-0 opacity-20">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-red-600 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animation: `float ${5 + Math.random() * 5}s ease-in-out infinite`
            }}
          />
        ))}
      </div>

      <div className="container mx-auto max-w-2xl relative z-10">
        <div className="flex flex-col items-center text-center">
          {/* Quote Mark */}
          <div className="text-red-600 mb-6">
            <Image src="/commas.svg" alt="Quote Mark" width={60} height={60} />
          </div>
          
          {/* Testimonial Text */}
          <div ref={testimonialRef} className="mb-6">
            <p className="text-white text-xl sm:text-lg md:text-2xl font-sans tracking-wide transform scale-x-110 mb-4">
              {currentTestimonial.text.split(currentTestimonial.highlight)[0]}
              <span className="text-red-600">{currentTestimonial.highlight}</span>
              {currentTestimonial.text.split(currentTestimonial.highlight)[1]}
            </p>
          </div>

          {/* Profile */}
          <div ref={profileRef} className="mt-6 flex flex-col items-center">
            <div className="w-14 h-14 rounded-full overflow-hidden mb-2 border border-zinc-700 transition-transform duration-300 hover:scale-110">
              <Image
                src={currentTestimonial.image}
                alt={currentTestimonial.name}
                width={56}
                height={56}
                className="object-cover"
              />
            </div>
            <h4 className="text-white text-base font-medium">{currentTestimonial.name}</h4>
            <p className="text-zinc-500 text-xs">{currentTestimonial.role}</p>
          </div>

          {/* Testimonial indicators */}
          <div className="flex space-x-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                  index === currentIndex ? 'bg-red-600' : 'bg-zinc-600'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonial