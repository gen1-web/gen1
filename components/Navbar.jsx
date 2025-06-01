'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Phone, Calendar, Menu, X } from "lucide-react"

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="container mx-auto py-6 px-4 flex items-center justify-between relative ">
      {/* Logo */}
      <Link href="/" className="flex items-center">
        <img src="/Gen1.svg" alt="Gen1 Logo" className="h-16 w-16 mr-2" />
      </Link>

      {/* Desktop Nav */}
      <div className="hidden md:flex items-center">
        <nav className="bg-[#141414] backdrop-blur-sm rounded-full px-6 py-2 mx-4 ml-45">
          <ul className="flex space-x-8 justify-center w-full">
            {['Home', 'Services', 'Portfolio', 'Case Studies', 'Our Story', 'About Us'].map((text, idx) => (
              <li key={idx}>
                <Link
                  href={text === 'Home' ? '/' : `/${text.toLowerCase().replace(/ /g, '-')}`}
                  className={`text-white/70 hover:text-white transition-colors ${text === 'Home' ? 'text-white/90' : ''}`}
                >
                  {text}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-white focus:outline-none"
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Action Buttons (common for both views) */}
      <div className="hidden md:flex items-center space-x-3 justify-center">
        <Button
          variant="outline"
          className="rounded-full bg-white text-black hover:bg-[#CC0000] border-0 flex items-center gap-2 px-4"
        >
          <Calendar className="h-4 w-4" />
          <Link href="/form">Book a FREE Consultation</Link>
        </Button>
        <Button
          size="icon"
          className="rounded-full bg-red-600 hover:bg-red-700 h-10 w-10 flex items-center justify-center"
        >
          <Phone className="h-5 w-5" />
        </Button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-[#141414] rounded-xl shadow-lg z-50 mt-4 md:hidden px-6 py-4">
          <ul className="space-y-4">
            {['Home', 'Services', 'Portfolio', 'Case Studies', 'Our Story'].map((text, idx) => (
              <li key={idx}>
                <Link
                  href={text === 'Home' ? '/' : `/${text.toLowerCase().replace(/ /g, '-')}`}
                  className="text-white block text-lg"
                  onClick={() => setMenuOpen(false)}
                >
                  {text}
                </Link>
              </li>
            ))}
            <li className="mt-4 flex flex-col gap-3">
              <Button
                variant="outline"
                className="rounded-full bg-white text-black hover:bg-[#CC0000] border-0 flex items-center gap-2 px-4 w-full justify-center"
              >
                <Calendar className="h-4 w-4" />
                <span>Book a FREE Consultation</span>
              </Button>
              <Button
                size="icon"
                className="rounded-full bg-red-600 hover:bg-red-700 h-10 w-10 mx-auto"
              >
                <Phone className="h-5 w-5" />
              </Button>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}

export default Navbar
