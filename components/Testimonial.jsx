"use client"
import Image from "next/image"
import { useEffect, useRef, useState } from "react"
import { gsap } from "gsap"

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const testimonialRef = useRef(null)
  const profileRef = useRef(null)
  const quoteRef = useRef(null)
  const intervalRef = useRef(null)

  const testimonials = [
    {
      id: 1,
      text: "I truly admire the professional work delivered by the Gen1 Solutions team. Their designs, marketing strategies, ad campaigns, and video production were all exceptional. We highly recommend their services to anyone seeking reliable, creative, and result-driven digital solutions.",
      name: "CEO Mohammad Asif",
      company: "Dar el Mecca",
    },
    {
      id: 2,
      text: "Gen1 Solutions handled our digital marketing campaigns with remarkable efficiency. Their ability to create engaging designs and ads helped us boost app sign-ups and enhance our brand presence. We appreciate their dedication and would confidently recommend them to others",
      name: "Saudah Ali",
      company: "HappyClub Rides",
    },
    {
      id: 3,
      text: "The team at Gen1 Solutions brought our vision to life with their fresh, modern designs and impactful marketing. Their ad creatives and video content helped us effectively connect with our audience. A dependable, professional agency we look forward to working with again",
      name: "Abdul Rehman",
      company: "Tazgo Fresh Juices",
    },
    {
      id: 4,
      text: "We were thoroughly impressed by the outstanding designs delivered by Gen1 Solutions. Their creativity, attention to detail, and ability to capture our brand identity were remarkable. The final results truly elevated our social media and event promotions.",
      name: "",
      company: "Yaseen Youth UK",
    },
     {
      id: 5,
      text: "Gen1 Solutions consistently provides us with visually impactful and meaningful designs. Their work reflects a clear understanding of our message and audience, and their quick turnaround times make them a dependable creative partner",
      name: "",
      company: "Discover Islam",
    }
  ]

  useEffect(() => {
    const startInterval = () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
      
      intervalRef.current = setInterval(() => {
        if (!isPaused) {
          // Animate out current testimonial
          const tl = gsap.timeline()
          
          tl.to([testimonialRef.current, profileRef.current], {
            opacity: 0,
            y: -20,
            duration: 0.2, // Faster animation
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
            duration: 0.2, // Faster animation
            ease: "power2.inOut"
          })
        }
      }, 2500) // Faster interval - 2.5 seconds instead of 5
    }

    startInterval()

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [testimonials.length, isPaused])

  // Handle mouse enter/leave
  const handleMouseEnter = () => {
    setIsPaused(true)
  }

  const handleMouseLeave = () => {
    setIsPaused(false)
  }

  const currentTestimonial = testimonials[currentIndex]

  return (
    <section className="bg-black py-12 px-4 relative overflow-hidden">

      <div className="container mx-auto max-w-2xl relative z-10">
        <div 
          className="flex flex-col items-center text-center"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {/* Quote Mark */}
          <div className="text-red-600 mb-6">
            <Image src="/commas.svg" alt="Quote Mark" width={60} height={60} />
          </div>
          
          {/* Testimonial Text */}
          <div ref={testimonialRef} className="mb-6 hover:cursor-pointer">
            <p className="text-white text-xl sm:text-lg md:text-2xl font-sans tracking-wide transform scale-x-110 mb-4">
              {currentTestimonial.text.split(currentTestimonial.highlight)[0]}
              <span className="text-red-600">{currentTestimonial.highlight}</span>
              {currentTestimonial.text.split(currentTestimonial.highlight)[1]}
            </p>
          </div>

          {/* Profile */}
          <div ref={profileRef} className="mt-8 flex flex-col items-center">
            {currentTestimonial.name && (
              <h4 className="text-white text-xl font-semibold mb-2">{currentTestimonial.name}</h4>
            )}
            <p className="text-red-400 text-lg font-medium">{currentTestimonial.company}</p>
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