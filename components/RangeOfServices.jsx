"use client"
import Image from "next/image"
import Link from "next/link"
import { Search, Code, BarChart3, ArrowRight } from "lucide-react"

const RangeOfServices = () => {

  const services = [
    {
      id: 1,
      title: "Graphic Design",
      image: "/graphic.png",
      description:
        "Gen1 Solutions provides high quality Graphic Design services which include Social Media Campaigns, Banner Designs, Thumbnail Designs. We are the best in Designing Social media banners and Event posters. Let us create creative customizable designs to elevate your brand.",
      bgColor: "bg-black",
      textColor: "text-white",
      labelBg: "bg-zinc-800",
      labelText: "text-white",
      icon: Search,
      benefits: [
        "Professional designs that capture your brand's essence",
        "Eye-catching social media graphics that increase engagement",
        "Custom banner designs that convert visitors to customers",
        "Event posters that drive attendance and create buzz",
      ],
      process: [
        { title: "Research", description: "We analyze your brand, audience, and competitors to inform our design strategy", icon: Search },
        { title: "Planning", description: "We create mood boards and sketches to establish the visual direction", icon: BarChart3 },
        { title: "Execution", description: "We craft pixel-perfect designs that align with your brand and objectives", icon: Code },
      ],
      portfolioItems: ["/poster1.png", "/lost.jpg", "/football.jpg", "/night.jpg"],
    },
    {
      id: 2,
      title: "Video",
      image: "/video.png",
      description:
        "Gen1 Solutions provides high quality Video Production services which include Social Media Campaigns, Promotional Videos, Event Coverage. We are the best in creating engaging video content that resonates with your audience and elevates your brand.",
      bgColor: "bg-black",
      textColor: "text-white",
      labelBg: "bg-zinc-800",
      labelText: "text-white",
      icon: BarChart3,
      benefits: [
        "Professional video production that tells your story",
        "Engaging content that captures your audience's attention",
        "High-quality production values that reflect your brand",
        "Strategic video marketing that drives results",
      ],
      process: [
        { title: "Research", description: "We understand your vision, audience, and objectives to plan the perfect video", icon: Search },
        { title: "Planning", description: "We create storyboards and scripts to map out the production", icon: BarChart3 },
        { title: "Execution", description: "We shoot, edit, and produce high-quality videos that achieve your goals", icon: Code },
      ],
      portfolioItems: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
    },
    {
      id: 3,
      title: "Web Development",
      image: "/web.png",
      description:
        "Gen1 Solutions provides high quality Web Development services which include responsive websites, e-commerce platforms, and custom web applications. We are the best in creating modern, fast, and user-friendly websites that drive results for your organization.",
      bgColor: "bg-black",
      textColor: "text-white",
      labelBg: "bg-zinc-800",
      labelText: "text-white",
      icon: Code,
      benefits: [
        "Modern, responsive websites that work on all devices",
        "Fast-loading pages that keep visitors engaged",
        "SEO-friendly code that improves your search rankings",
        "User-friendly interfaces that drive conversions",
      ],
      process: [
        { title: "Research", description: "We analyze your requirements, audience, and competitors to inform our development strategy", icon: Search },
        { title: "Planning", description: "We create wireframes and prototypes to establish the user experience", icon: BarChart3 },
        { title: "Execution", description: "We develop clean, efficient code that brings your website to life", icon: Code },
      ],
      portfolioItems: ["/darelmecca.png"],
    },
    {
      id: 4,
      title: "Marketing",
      image: "/marketing.png",
      description:
        "Gen1 Solutions provides high quality Marketing services which include Social Media Campaigns, Content Marketing, and Digital Advertising. We are the best in creating strategic marketing plans that connect with your audience and drive measurable results.",
      bgColor: "bg-black",
      textColor: "text-white",
      labelBg: "bg-zinc-800",
      labelText: "text-white",
      icon: BarChart3,
      benefits: [
        "Strategic marketing plans tailored to your objectives",
        "Data-driven campaigns that maximize ROI",
        "Engaging content that resonates with your audience",
        "Comprehensive analytics to measure and improve results",
      ],
      process: [
        { title: "Research", description: "We analyze your market, audience, and competitors to inform our marketing strategy", icon: Search },
        { title: "Planning", description: "We create comprehensive marketing plans with clear objectives and KPIs", icon: BarChart3 },
        { title: "Execution", description: "We implement campaigns across channels and continuously optimize for results", icon: Code },
      ],
      portfolioItems: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
    },
  ]

  return (
    <section  className="bg-zinc-900 py-20 px-4 relative overflow-hidden min-h-[80vh] flex flex-col justify-center items-center">
      <div className="container mx-auto px-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {services.map((service) => {
                  const slug = service.title.toLowerCase().replace(/\s+/g, "-");
                  return (
                    <Link key={service.id} href={`/services/${slug}`} className="relative overflow-hidden rounded-lg cursor-pointer transition-all duration-300">
                      <div className="relative h-64 w-full">
                        <Image
                          src={service.image}
                          alt={service.title}
                          fill
                          className="object-cover"
                          style={{ filter: "brightness(0.7)"}}
                        />
                      </div>
                      <div
                        className={`${service.bgColor} p-6 relative h-48 md:h-56 overflow-hidden transition-all duration-300 hover:bg-[#CC0000]`}
                      >
                        <div
                          className={`${service.labelBg} ${service.labelText} inline-block px-4 py-1 rounded-full text-sm font-medium mb-4 transition-all duration-300 hover:bg-white hover:text-red-600`}
                        >
                          {service.title}
                        </div>
                        <p className={`${service.textColor} mb-4 line-clamp-3 md:line-clamp-4`}>{service.description}</p>
                        <div className={`${service.textColor}/80 hover:${service.textColor} flex items-center gap-1 text-sm transition-colors`}>
                          Learn more <ArrowRight className="h-4 w-4" />
                        </div>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
    </section>
  )
}

export default RangeOfServices
