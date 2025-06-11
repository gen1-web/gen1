"use client"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Calendar, Mail, Phone, Facebook, Instagram, Linkedin,Dribbble } from "lucide-react"
import Image from "next/image"
import { ArrowLeft } from "lucide-react"
const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    linkedin: "",
    service: "",
    details: "",
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission here
    alert("Form submitted:", formData)
  }

  return (
    <section className="bg-black py-16 md:py-24 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Side - Contact Information */}
          <div className="text-white">
            {/* Main Heading */}
            <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              Tell Us About
              <br />
              Your Project
            </h2>
            <p className="text-zinc-300 text-lg mb-8 leading-relaxed">
              Let's create something amazing together.
              <br />
              Drop us a message, and we'll get back to you promptly!
            </p>

       
                        <div className="flex gap-3 mb-12">
                          <Image src="/uae.png" alt="UAE Flag" width={40} height={40} className="object-contain" />
                          <Image src="/uk.png" alt="UK Flag" width={40} height={40} className="object-contain" />
                          <Image src="/usa.png" alt="USA Flag" width={40} height={40} className="object-contain" />
                          <Image src="/pakistan.png" alt="Pakistan Flag" width={40} height={40} className="object-contain rounded-md" />
                          <Image src="/canada.png" alt="Canada Flag" width={40} height={40} className="object-contain rounded-md" />
                        </div>

            <div className="space-y-6 mb-12">
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-white" />
                <span className="text-white">contact.gen1solutions@gmail.com</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-white" />
                <span className="text-white">+923054559888</span>
              </div>
            </div>

            {/* Social Media Icons */}
            <div className="flex gap-4">
              <a href="#" className="text-white hover:text-red-600 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-white hover:text-red-600 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-white hover:text-red-600 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-white hover:text-red-600 transition-colors">
                <div className="w-5 h-5 bg-white rounded-sm flex items-center justify-center">
                  <span className="text-black text-xs font-bold">Be</span>
                </div>
              </a>
              <a href="#" className="text-white hover:text-red-600 transition-colors">
                <Dribbble className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="bg-red-600 rounded-3xl p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name and Email Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-white text-sm font-medium mb-2">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Enter your name"
                    className="w-full bg-transparent border-b border-white/30 text-white placeholder-white/70 pb-2 focus:border-white focus:outline-none transition-colors"
                    required
                  />
                </div>
                <div>
                  <label className="block text-white text-sm font-medium mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Enter your email"
                    className="w-full bg-transparent border-b border-white/30 text-white placeholder-white/70 pb-2 focus:border-white focus:outline-none transition-colors"
                    required
                  />
                </div>
              </div>

              {/* Phone and LinkedIn Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-white text-sm font-medium mb-2">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="Enter your number"
                    className="w-full bg-transparent border-b border-white/30 text-white placeholder-white/70 pb-2 focus:border-white focus:outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-white text-sm font-medium mb-2">LinkedIn</label>
                  <input
                    type="url"
                    name="linkedin"
                    value={formData.linkedin}
                    onChange={handleInputChange}
                    placeholder="Enter your LinkedIn"
                    className="w-full bg-transparent border-b border-white/30 text-white placeholder-white/70 pb-2 focus:border-white focus:outline-none transition-colors"
                  />
                </div>
              </div>

              {/* Service Dropdown */}
              <div>
                <label className="block text-white text-sm font-medium mb-2">Service</label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleInputChange}
                  className="w-full bg-transparent border-b border-white/30 text-white pb-2 focus:border-white focus:outline-none transition-colors appearance-none cursor-pointer"
                  required
                >
                  <option value="" className="bg-red-600 text-white">
                    Choose any service
                  </option>
                  <option value="graphic-design" className="bg-red-600 text-white">
                    Graphic Design
                  </option>
                  <option value="video-production" className="bg-red-600 text-white">
                    Video Production
                  </option>
                  <option value="web-development" className="bg-red-600 text-white">
                    Web Development
                  </option>
                  <option value="marketing" className="bg-red-600 text-white">
                    Marketing
                  </option>
                </select>
              </div>

              {/* Details Textarea */}
              <div>
                <label className="block text-white text-sm font-medium mb-2">Details</label>
                <textarea
                  name="details"
                  value={formData.details}
                  onChange={handleInputChange}
                  placeholder="Your description"
                  rows={4}
                  className="w-full bg-transparent border-b border-white/30 text-white placeholder-white/70 pb-2 focus:border-white focus:outline-none transition-colors resize-none"
                  required
                />
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <Button
                  type="submit"
                  className="bg-white text-black hover:bg-white/90 rounded-full px-8 py-3 flex items-center gap-2 font-medium transition-colors"
                >
                  <Calendar className="h-4 w-4" />
                  Book a FREE Consultation
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactForm
