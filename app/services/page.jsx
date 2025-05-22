"use client"
import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, ArrowLeft } from "lucide-react"
import Navbar from "@/components/Navbar"

export default function ServicesPage() {
  // State for hover effect
  const [hoveredCard, setHoveredCard] = useState(null)

  // Services data
  const services = [
    {
      id: 1,
      title: "Graphic Design",
      image: "/placeholder.svg?height=400&width=600",
      description:
        "Gen1 Solutions provides high quality Graphic Design services which include Social Media Campaigns, Banner Designs, Thumbnail Designs. We are the best in Designing Social media banners and Event posters. Let us create creative customizable designs to elevate your brand.",
      bgColor: "bg-red-600",
      textColor: "text-white",
      labelBg: "bg-white",
      labelText: "text-red-600",
    },
    {
      id: 2,
      title: "Video",
      image: "/placeholder.svg?height=400&width=600",
      description:
        "Gen1 Solutions provides high quality Video Production services which include Social Media Campaigns, Promotional Videos, Event Coverage. We are the best in creating engaging video content that resonates with your audience and elevates your brand.",
      bgColor: "bg-zinc-900",
      textColor: "text-white",
      labelBg: "bg-zinc-800",
      labelText: "text-white",
    },
    {
      id: 3,
      title: "Web Development",
      image: "/placeholder.svg?height=400&width=600",
      description:
        "Gen1 Solutions provides high quality Web Development services which include Social Media Campaigns, Banner Designs, Thumbnail Designs. We are the best in Designing Social media banners and Event posters. Let us create creative customizable designs to elevate your brand.",
      bgColor: "bg-zinc-900",
      textColor: "text-white",
      labelBg: "bg-zinc-800",
      labelText: "text-white",
    },
    {
      id: 4,
      title: "Marketing",
      image: "/placeholder.svg?height=400&width=600",
      description:
        "Gen1 Solutions provides high quality Marketing services which include Social Media Campaigns, Banner Designs, Thumbnail Designs. We are the best in Designing Social media banners and Event posters. Let us create creative customizable designs to elevate your brand.",
      bgColor: "bg-zinc-900",
      textColor: "text-white",
      labelBg: "bg-zinc-800",
      labelText: "text-white",
    },
  ]

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      <main className="pt-8 pb-20">
        {/* Back Button */}
        <div className="container mx-auto px-4 mb-8">
          <Link href="/" className="inline-flex items-center text-white/70 hover:text-white transition-colors">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Link>
        </div>

        {/* Services Header */}
        <div className="container mx-auto px-4 mb-12">
          <h1 className="text-5xl md:text-6xl font-bold mb-2">
            Our <span className="text-red-600">Services</span>
          </h1>
          <p className="text-lg text-zinc-400">Crafting impactful content for visionary Islamic brands</p>
        </div>

        {/* Services Grid */}
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service) => (
              <div
                key={service.id}
                className="relative overflow-hidden rounded-lg transition-all duration-300"
                onMouseEnter={() => setHoveredCard(service.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Service Image */}
                <div className="relative h-64 w-full">
                  <Image
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    fill
                    className="object-cover"
                    style={{ filter: "brightness(0.7)" }}
                  />
                </div>

                {/* Service Content */}
                <div
                  className={`${service.bgColor} p-6 relative ${
                    hoveredCard === service.id ? "h-auto" : "h-48 md:h-56"
                  } transition-all duration-300`}
                >
                  {/* Service Label */}
                  <div
                    className={`${service.labelBg} ${service.labelText} inline-block px-4 py-1 rounded-full text-sm font-medium mb-4`}
                  >
                    {service.title}
                  </div>

                  {/* Service Description */}
                  <p className={`${service.textColor} mb-4 line-clamp-3 md:line-clamp-4`}>{service.description}</p>

                  {/* Learn More Link */}
                  <Link
                    href={`/services/${service.title.toLowerCase().replace(/\s+/g, "-")}`}
                    className={`${service.textColor}/80 hover:${
                      service.textColor
                    } flex items-center gap-1 text-sm transition-colors`}
                  >
                    learn more <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}
