import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Calendar, Facebook, Instagram, Linkedin, Twitter } from 'lucide-react'
import Image from 'next/image'
import PartnerClients from './Partner'

const Footer = () => {
  return (
    <>
    <PartnerClients/>
    <footer className="container mx-auto px-4 py-8 mb-8 overflow-hidden">
        <div className="bg-red-600 rounded-3xl overflow-hidden">
          {/* CTA Section */}
          <div className="px-8 md:px-16 pt-12 pb-8 flex flex-col md:flex-row justify-between items-start md:items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                <span className='text-white opacity-65'>Ready to start a project?</span>
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
                <Link href="/contact-us">Book a FREE Consultation</Link>
              </Button>
            </div>
          </div>

          {/* Shadow Divider */}
                <div className="relative h-4 w-full overflow-hidden">
                <div className="absolute left-1/2 transform -translate-x-1/2 w-1/2 h-1">
                  <div className="w-full h-full bg-gradient-to-r from-transparent via-black/50 to-transparent blur-sm"></div>
                </div>
                </div>

                {/* Main Footer Content */}
          <div className="px-8 md:px-16 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Logo and Description */}
            <div className="md:col-span-2">
              <div className='flex flex-row items-start gap-4'>
              <Link href="/" className="flex items-center mb-6 flex-shrink-0">
               <Image src="/gen1.png" alt="Gen1 Solutions Logo" width={80} height={80} className="h-20 w-20 object-contain" />
               </Link>
               <div className='flex flex-col'>
               <p className="text-white/90 text-lg max-w-md leading-relaxed">
                Gen1 Solutions is a leading creative agency, dedicated to delivering innovative and purpose-driven
                content for global Islamic organizations.
               </p>
               <div className="flex space-x-3 mt-6">
                <Link href="https://www.linkedin.com/company/gen1solutions" className="bg-black hover:bg-red-500/70 transition-colors p-3 rounded-full">
                  <Linkedin className="h-5 w-5 text-white" />
                </Link>
                <Link href="https://www.facebook.com/gen1solutions" className="bg-black hover:bg-red-500/70 transition-colors p-3 rounded-full">
                  <Facebook className="h-5 w-5 text-white" />
                </Link>
                <Link href="https://www.instagram.com/gen1solutions" className="bg-black hover:bg-red-500/70 transition-colors p-3 rounded-full">
                  <Instagram className="h-5 w-5 text-white" />
                </Link>
              </div>
               </div>
              </div>
            </div>
            <div>
              <h3 className="text-white text-xl font-semibold mb-6">Quick Links</h3>
              <ul className="space-y-2">
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
                  <Link href="/our-story" className="text-white/80 hover:text-white transition-colors">
                    Our Story
                  </Link>
                </li>
              </ul>
            </div>
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
    </>
  )
}

export default Footer
