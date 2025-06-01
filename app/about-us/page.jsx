import Link from "next/link"
import { ArrowLeft, Calendar, Linkedin, Facebook, Instagram, Twitter } from "lucide-react"
import { Button } from "@/components/ui/button"
import AboutHero from "@/components/AboutHero"
import WhatSetsUsApart from "@/components/WhatSetsUsApart"
import RangeOfServices from "@/components/RangeOfServices"
import Navbar from "@/components/Navbar"

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

        {/* Team Section */}
        <section className="bg-zinc-900 py-16 md:py-24 px-4">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Meet Our <span className="text-red-600">Team</span>
              </h2>
              <p className="text-zinc-400 max-w-2xl mx-auto">
                Our dedicated team of creative professionals is passionate about bringing your vision to life.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {/* Team Member 1 */}
              <div className="text-center">
                <div className="relative w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden bg-zinc-800">
                  <div className="w-full h-full flex items-center justify-center text-4xl font-bold text-red-600">
                    A
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2">Ahmed Rahman</h3>
                <p className="text-red-600 mb-2">Creative Director</p>
                <p className="text-zinc-400 text-sm">
                  Leading our creative vision with over 8 years of experience in Islamic marketing.
                </p>
              </div>

              {/* Team Member 2 */}
              <div className="text-center">
                <div className="relative w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden bg-zinc-800">
                  <div className="w-full h-full flex items-center justify-center text-4xl font-bold text-red-600">
                    S
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2">Sarah Khan</h3>
                <p className="text-red-600 mb-2">Lead Designer</p>
                <p className="text-zinc-400 text-sm">
                  Crafting beautiful designs that resonate with Islamic values and modern aesthetics.
                </p>
              </div>

              {/* Team Member 3 */}
              <div className="text-center">
                <div className="relative w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden bg-zinc-800">
                  <div className="w-full h-full flex items-center justify-center text-4xl font-bold text-red-600">
                    M
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2">Muhammad Ali</h3>
                <p className="text-red-600 mb-2">Marketing Strategist</p>
                <p className="text-zinc-400 text-sm">
                  Developing strategic marketing solutions that drive results for Islamic organizations.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-black py-16 md:py-24 px-4">
          <div className="container mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Work <span className="text-red-600">Together?</span>
            </h2>
            <p className="text-zinc-400 mb-8 max-w-2xl mx-auto">
              Let's bring your vision to life with our creative expertise and Islamic values-driven approach.
            </p>
            <Button
              variant="outline"
              className="rounded-full bg-white text-black hover:bg-red-600 hover:text-white border-0 flex items-center gap-2 px-8 py-6 text-lg mx-auto transition-colors"
            >
              <Calendar className="h-5 w-5" />
              <span>Book a FREE Consultation</span>
            </Button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="container mx-auto px-4 py-8 mb-8">
        <div className="bg-red-600 rounded-3xl overflow-hidden">
          {/* CTA Section */}
          <div className="px-8 md:px-16 pt-12 pb-8 flex flex-col md:flex-row justify-between items-start md:items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                Ready to start a project?
                <br />
                Let's talk today.
              </h2>
            </div>
            <div className="mt-6 md:mt-0">
              <Button
                variant="outline"
                className="rounded-full bg-white text-black hover:bg-white/90 border-0 flex items-center gap-2 px-6 py-6"
              >
                <Calendar className="h-5 w-5" />
                <span>Book a FREE Consultation</span>
              </Button>
            </div>
          </div>

          {/* Shadow Divider */}
          <div className="relative h-4 w-full overflow-hidden">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1/2 h-1">
              <div className="w-full h-full bg-gradient-to-r from-transparent via-black/20 to-transparent blur-sm"></div>
            </div>
          </div>

          {/* Main Footer Content */}
          <div className="px-8 md:px-16 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Logo and Description */}
            <div className="md:col-span-2">
              <Link href="/" className="flex items-center mb-6">
                <span className="text-white text-3xl font-bold">Gen</span>
                <span className="text-white text-3xl font-bold">1</span>
              </Link>
              <p className="text-white/90 text-lg max-w-md">
                Gen1 Solutions is a leading creative agency, dedicated to delivering innovative and purpose-driven
                content for global Islamic organizations.
              </p>

              {/* Social Media Icons */}
              <div className="flex space-x-3 mt-6">
                <Link href="#" className="bg-red-500/50 hover:bg-red-500/70 transition-colors p-3 rounded-full">
                  <Linkedin className="h-5 w-5 text-white" />
                </Link>
                <Link href="#" className="bg-red-500/50 hover:bg-red-500/70 transition-colors p-3 rounded-full">
                  <Facebook className="h-5 w-5 text-white" />
                </Link>
                <Link href="#" className="bg-red-500/50 hover:bg-red-500/70 transition-colors p-3 rounded-full">
                  <Instagram className="h-5 w-5 text-white" />
                </Link>
                <Link href="#" className="bg-red-500/50 hover:bg-red-500/70 transition-colors p-3 rounded-full">
                  <Twitter className="h-5 w-5 text-white" />
                </Link>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-white text-xl font-semibold mb-6">Quick Links</h3>
              <ul className="space-y-4">
                <li>
                  <Link href="/services" className="text-white/80 hover:text-white transition-colors">
                    Services
                  </Link>
                </li>
                <li>
                  <Link href="/portfolio" className="text-white/80 hover:text-white transition-colors">
                    Our Work
                  </Link>
                </li>
                <li>
                  <Link href="/case-studies" className="text-white/80 hover:text-white transition-colors">
                    Case Studies
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="text-white/80 hover:text-white transition-colors">
                    About Us
                  </Link>
                </li>
              </ul>
            </div>

            {/* Others */}
            <div>
              <h3 className="text-white text-xl font-semibold mb-6">Others</h3>
              <ul className="space-y-4">
                <li>
                  <Link href="/privacy-policy" className="text-white/80 hover:text-white transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="text-white/80 hover:text-white transition-colors">
                    Terms and Conditions
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}