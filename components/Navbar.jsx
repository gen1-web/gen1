import React from 'react'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Phone, Calendar } from "lucide-react"
const Navbar = () => {
  return (
    <header className="container mx-auto py-6 px-4 flex items-center justify-between">
    {/* Logo */}
    <Link href="/" className="flex items-center">
      <span className="text-white text-3xl font-bold">Gen</span>
      <span className="text-red-600 text-3xl font-bold">1</span>
    </Link>

    {/* Navigation */}
    <div className="hidden md:flex items-center">
      <nav className="bg-zinc-900/80 backdrop-blur-sm rounded-full px-6 py-2 mx-4">
        <ul className="flex space-x-8">
          <li>
            <Link href="/" className="text-white/90 hover:text-white transition-colors">
              Home
            </Link>
          </li>
          <li>
            <Link href="/services" className="text-white/70 hover:text-white transition-colors">
              Services
            </Link>
          </li>
          <li>
            <Link href="/portfolio" className="text-white/70 hover:text-white transition-colors">
              Portfolio
            </Link>
          </li>
          <li>
            <Link href="/case-studies" className="text-white/70 hover:text-white transition-colors">
              Case Studies
            </Link>
          </li>
          <li>
            <Link href="/our-story" className="text-white/70 hover:text-white transition-colors">
              Our Story
            </Link>
          </li>
        </ul>
      </nav>
    </div>

    {/* Action Buttons */}
    <div className="flex items-center space-x-3">
      <Button
        variant="outline"
        className="rounded-full bg-white text-black hover:bg-white/90 border-0 flex items-center gap-2 px-4"
      >
        <Calendar className="h-4 w-4" />
        <span>Book a FREE Consultation</span>
      </Button>
      <Button
        size="icon"
        className="rounded-full bg-red-600 hover:bg-red-700 h-10 w-10 flex items-center justify-center"
      >
        <Phone className="h-5 w-5" />
      </Button>
    </div>
  </header>
  )
}

export default Navbar
