import Link from "next/link"
import { ArrowLeft, Calendar, Linkedin, Facebook, Instagram, Twitter } from "lucide-react"
import { Button } from "@/components/ui/button"
import AboutHero from "@/components/AboutHero"
import WhatSetsUsApart from "@/components/WhatSetsUsApart"
import RangeOfServices from "@/components/RangeOfServices"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <main>
        {/* Back Button */}
        <div className="container mx-auto pt-8 px-4">
          <Link href="/" className="inline-flex items-center text-white/70 hover:text-white transition-colors mb-8">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Link>
        </div>

        <AboutHero />
        <WhatSetsUsApart />
        <RangeOfServices />
        
      </main>
      <div className="bg-[#141414]">
      <Footer/>
      </div>
    </div>
  )
}