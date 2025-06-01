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

        {/* About Hero Section */}
        <AboutHero />

        {/* What Sets Us Apart Section */}
        <WhatSetsUsApart />

        {/* Range of Services Section */}
        <RangeOfServices />

        {/* Values Section */}
        <section className="bg-black py-16 md:py-24 px-4">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Our <span className="text-red-600">Values</span>
              </h2>
              <p className="text-zinc-400 max-w-2xl mx-auto">
                At Gen1 Solutions, our values guide everything we do, ensuring we deliver exceptional results while
                staying true to our Islamic principles.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Value 1 */}
              <div className="text-center">
                <div className="bg-red-600/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <div className="w-8 h-8 bg-red-600 rounded-full"></div>
                </div>
                <h3 className="text-xl font-bold mb-3">Integrity</h3>
                <p className="text-zinc-400">
                  We conduct our business with honesty, transparency, and ethical practices that align with Islamic
                  values.
                </p>
              </div>

              {/* Value 2 */}
              <div className="text-center">
                <div className="bg-red-600/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <div className="w-8 h-8 bg-red-600 rounded-full"></div>
                </div>
                <h3 className="text-xl font-bold mb-3">Excellence</h3>
                <p className="text-zinc-400">
                  We strive for the highest quality in every project, ensuring our clients receive exceptional creative
                  solutions.
                </p>
              </div>

              {/* Value 3 */}
              <div className="text-center">
                <div className="bg-red-600/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <div className="w-8 h-8 bg-red-600 rounded-full"></div>
                </div>
                <h3 className="text-xl font-bold mb-3">Community</h3>
                <p className="text-zinc-400">
                  We're committed to supporting Islamic organizations and building meaningful connections within our
                  community.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer/>
    </div>
  )
}