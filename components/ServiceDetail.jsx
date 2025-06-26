"use client"

import Image from "next/image"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const ServiceDetail = ({ service, onClose }) => {
  if (!service) return null

  return (
    <div className="container mx-auto px-4">
      {/* Back Button */}
      <button
        onClick={onClose}
        className="inline-flex items-center text-white/70 hover:text-white transition-colors mb-8"
      >
        <ArrowLeft className="mr-2 h-4 w-4" />
        <Link href="/services">Back to Services</Link>
      </button>

      {/* Service Header */}
      <div className="mb-12">
        <h1 className="text-5xl md:text-6xl font-bold mb-2">
          {service.title.split(" ")[0]}{" "}
          <span className="text-red-600">{service.title.split(" ").slice(1).join(" ")}</span>
        </h1>
        <p className="text-lg text-zinc-400">Crafting impactful content for visionary Islamic brands</p>
      </div>

      {/* Service Video/Image */}
      <div className="mb-12">
        <div className="relative aspect-video w-full bg-zinc-900 rounded-lg overflow-hidden">
          
            <Image
              src={service.image || "/placeholder.svg"}
              alt={service.title}
              fill
              className="object-cover"
              style={{ filter: "brightness(0.7)" }}
            />
        </div>
      </div>

      {/* Service Description */}
      <div className="mb-12">
        <p className="text-zinc-400 leading-relaxed">
          Gen1 Solutions is a leading creative agency, dedicated to delivering innovative and purpose-driven content for
          global Islamic organizations. With a deep-rooted commitment to Islamic values, we are proud to offer Halal
          creative solutions that inspire and connect with audiences around the world, crafting narratives that touch
          hearts and uplift communities.
        </p>
      </div>

      {/* Benefits Section */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-6">
          Benefits <span className="text-zinc-500">of Our Service</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {service.benefits.map((benefit, index) => (
            <div key={index} className="flex items-start">
              <div className="mr-2 text-red-600">•</div>
              <p className="text-zinc-400">{benefit}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Process Section */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-6 text-center">
          Our <span className="text-red-600">Process</span>
        </h2>
        <p className="text-center text-zinc-500 mb-10">Here are steps of how we execute our project</p>

        <div className="flex flex-col md:flex-row justify-between items-center relative">
          {/* Process Line */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-zinc-800 -z-10"></div>

          {service.process.map((step, index) => (
            <div key={index} className="flex flex-col items-center mb-10 md:mb-0 w-full md:w-1/3 px-4">
              <div className="bg-zinc-900 rounded-full p-4 mb-4 w-16 h-16 flex items-center justify-center">
                <step.icon className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">{step.title}</h3>
              <p className="text-zinc-500 text-center text-sm">{step.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Portfolio Section */}
      <div className="mb-12">
        <h2 className="text-3xl font-bold mb-6">
          Explore Our <span className="text-red-600">{service.title} Work</span>
        </h2>
        <p className="text-zinc-500 mb-8">Browse through our more work</p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {service.portfolioItems.map((item, index) => (
            <div key={index} className="relative aspect-[3/4] rounded-lg overflow-hidden">
              {service.title === "Video" && item.startsWith("http") ? (
                <iframe
                  src={item}
                  title={`Portfolio video ${index + 1}`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                  className="absolute top-0 left-0 w-full h-full rounded"
                
                ></iframe>
              ) : (
                <Image
                  src={item || "/placeholder.svg"}
                  alt={`Portfolio item ${index + 1}`}
                  fill
                  className="object-cover"
                />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* CTA Button */}
      <div className="text-center mt-16 mb-8">
        <Button className="bg-red-600 hover:bg-red-700 text-white px-8 py-6 rounded-full text-lg">
          <Link href="/form">Get Started with {service.title}</Link>
        </Button>
      </div>
    </div>
  )
}

export default ServiceDetail
