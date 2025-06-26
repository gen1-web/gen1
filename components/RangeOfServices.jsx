"use client"
import Image from "next/image"
import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

const RangeOfServices = () => {
  const imageRef = useRef(null)
  const containerRef = useRef(null)
  
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    
    // Main image animation
    const imageAnimation = gsap.from(imageRef.current, {
      opacity: 0,
      scale: 0.8,
      y: 50,
      duration: 1.5,
      ease: "power3.out",
      scrollTrigger: {
        trigger: imageRef.current,
        start: "top center+=100",
        end: "bottom center",
        toggleActions: "play none none reverse"
      }
    })

    // Create particles
    const particles = []
    const numParticles = 50 // Increased number of particles
    const container = containerRef.current
    const particleTypes = ['circle', 'square', 'line'] // Different particle shapes

    for (let i = 0; i < numParticles; i++) {
      const particle = document.createElement('div')
      const type = particleTypes[Math.floor(Math.random() * particleTypes.length)]
      
      // Assign different classes based on particle type
      const baseClasses = 'absolute bg-gradient-to-br from-red-600/20 to-red-800/20'
      const typeClasses = {
        circle: 'rounded-full w-2 h-2',
        square: 'rounded-sm w-1.5 h-1.5 rotate-45',
        line: 'w-3 h-0.5 rounded-full'
      }
      
      particle.className = `${baseClasses} ${typeClasses[type]}`
      container.appendChild(particle)
      particles.push(particle)

      // Distribute particles across the entire container with padding
      const padding = 50 // Padding from edges
      gsap.set(particle, {
        x: gsap.utils.random(padding, container.offsetWidth - padding),
        y: gsap.utils.random(padding, container.offsetHeight - padding),
      })

      // Create more varied movement patterns
      const randomPath = () => {
        const radius = gsap.utils.random(100, 300)
        const angle = gsap.utils.random(0, 360)
        const centerX = particle._gsap.x
        const centerY = particle._gsap.y
        
        return {
          duration: gsap.utils.random(15, 30),
          motionPath: {
            path: [
              { x: centerX, y: centerY },
              { x: centerX + radius * Math.cos(angle), y: centerY + radius * Math.sin(angle) },
              { x: centerX + radius * Math.cos(angle + 120), y: centerY + radius * Math.sin(angle + 120) },
              { x: centerX + radius * Math.cos(angle + 240), y: centerY + radius * Math.sin(angle + 240) },
              { x: centerX, y: centerY }
            ]
          },
          repeat: -1,
          ease: "none",
          rotation: 360,
        }
      }

      // Apply the floating animation
      gsap.to(particle, randomPath())

      // Size and opacity pulsing animation
      gsap.to(particle, {
        duration: gsap.utils.random(2, 4),
        scale: gsap.utils.random(0.8, 1.5),
        opacity: gsap.utils.random(0.1, 0.4),
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: i * -0.1,
      })
    }

    // Handle window resize
    const handleResize = () => {
      particles.forEach(particle => {
        const padding = 50
        gsap.set(particle, {
          x: gsap.utils.random(padding, container.offsetWidth - padding),
          y: gsap.utils.random(padding, container.offsetHeight - padding),
        })
      })
    }

    window.addEventListener('resize', handleResize)

    return () => {
      imageAnimation.kill()
      window.removeEventListener('resize', handleResize)
      particles.forEach(particle => {
        gsap.killTweensOf(particle)
        particle.remove()
      })
    }
  }, [])

  return (
    <section ref={containerRef} className="bg-zinc-900 py-20 px-4 relative overflow-hidden min-h-[80vh] flex flex-col justify-center items-center">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-red-600/5 to-transparent"></div>
      
      <div ref={imageRef} className="transform-gpu relative z-10">
        <Image 
          src={"/range.svg"} 
          alt="Range of Services" 
          width={900} 
          height={800}
          priority
        />
      </div>
    </section>
  )
}

export default RangeOfServices
