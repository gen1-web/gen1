"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServiceDetail from "@/components/ServiceDetail";
import { use } from "react";
import { Search, BarChart3, Code } from "lucide-react";


const services = [
  {
    id: 1,
    title: "Graphic Design",
    image: "/graphic.png",
    description:
      "Gen1 Solutions provides high quality Graphic Design services which include Social Media Campaigns, Banner Designs, Thumbnail Designs. We are the best in Designing Social media banners and Event posters. Let us create creative customizable designs to elevate your brand.",
    bgColor: "bg-zinc-900",
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
      {
        title: "Research",
        description:
          "We analyze your brand, audience, and competitors to inform our design strategy",
        icon: Search,
      },
      {
        title: "Planning",
        description:
          "We create mood boards and sketches to establish the visual direction",
        icon: BarChart3,
      },
      {
        title: "Execution",
        description:
          "We craft pixel-perfect designs that align with your brand and objectives",
        icon: Code,
      },
    ],
    portfolioItems: [
      "/poster1.png",
      "/lost.jpg",
      "/football.jpg",
      "/night.jpg",
    ],
  },
  {
    id: 2,
    title: "Video",
    image: "/video.png",
    description:
      "Gen1 Solutions provides high quality Video Production services which include Social Media Campaigns, Promotional Videos, Event Coverage. We are the best in creating engaging video content that resonates with your audience and elevates your brand.",
    bgColor: "bg-zinc-900",
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
      {
        title: "Research",
        description:
          "We understand your vision, audience, and objectives to plan the perfect video",
        icon: Search,
      },
      {
        title: "Planning",
        description:
          "We create storyboards and scripts to map out the production",
        icon: BarChart3,
      },
      {
        title: "Execution",
        description:
          "We shoot, edit, and produce high-quality videos that achieve your goals",
        icon: Code,
      },
    ],
    portfolioItems: [
      "/placeholder.svg",
      "/placeholder.svg",
      "/placeholder.svg",
      "/placeholder.svg",
    ],
  },
  {
    id: 3,
    title: "Web Development",
    image: "/web.png",
    description:
      "Gen1 Solutions provides high quality Web Development services which include responsive websites, e-commerce platforms, and custom web applications. We are the best in creating modern, fast, and user-friendly websites that drive results for your organization.",
    bgColor: "bg-zinc-900",
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
      {
        title: "Research",
        description:
          "We analyze your requirements, audience, and competitors to inform our development strategy",
        icon: Search,
      },
      {
        title: "Planning",
        description:
          "We create wireframes and prototypes to establish the user experience",
        icon: BarChart3,
      },
      {
        title: "Execution",
        description:
          "We develop clean, efficient code that brings your website to life",
        icon: Code,
      },
    ],
    portfolioItems: [
      "/darelmecca.png",
    ],
  },
  {
    id: 4,
    title: "Marketing",
    image: "/marketing.png",
    description:
      "Gen1 Solutions provides high quality Marketing services which include Social Media Campaigns, Content Marketing, and Digital Advertising. We are the best in creating strategic marketing plans that connect with your audience and drive measurable results.",
    bgColor: "bg-zinc-900",
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
      {
        title: "Research",
        description:
          "We analyze your market, audience, and competitors to inform our marketing strategy",
        icon: Search,
      },
      {
        title: "Planning",
        description:
          "We create comprehensive marketing plans with clear objectives and KPIs",
        icon: BarChart3,
      },
      {
        title: "Execution",
        description:
          "We implement campaigns across channels and continuously optimize for results",
        icon: Code,
      },
    ],
    portfolioItems: [
      "/placeholder.svg",
      "/placeholder.svg",
      "/placeholder.svg",
      "/placeholder.svg",
    ],
  },
];

export default function ServicePage({ params }) {
  const { slug } = use(params);
  const service = services.find(
    (s) => s.title.toLowerCase().replace(/\s+/g, "-") === slug
  );

  if (!service) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        Service not found
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <main className="pt-8 pb-20">
        <ServiceDetail service={service} onClose={() => {}} />
      </main>
      <Footer />
    </div>
  );
}
