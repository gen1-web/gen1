"use client"
import { useState } from "react"
import axios from 'axios'
import {  Mail, Phone, Facebook, Instagram, Linkedin, PersonStanding, House, MessageCircle} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    linkedin: "",
    service: "",
    details: "",
  })
  const [isLoading, setIsLoading] = useState(false)
  const [message, setMessage] = useState({ type: '', text: '' })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    setMessage({ type: '', text: '' })

    try {
      const response = await axios.post('/api/email', formData)
      setMessage({ 
        type: 'success', 
        text: 'Thank you for your message! We will get back to you soon.' 
      })
      // Clear form
      setFormData({
        name: "",
        email: "",
        phone: "",
        linkedin: "",
        service: "",
        details: "",
      })
    } catch (error) {
      setMessage({ 
        type: 'error', 
        text: error.response?.data?.message || 'Something went wrong. Please try again later.' 
      })
    } finally {
      setIsLoading(false)
    }
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
                          <Image src="/aus.png" alt="Aus Flag" width={40} height={40} className="object-contain" />
                          <Image src="/uk.png" alt="UK Flag" width={40} height={40} className="object-contain" />
                          <Image src="/usa.png" alt="USA Flag" width={40} height={40} className="object-contain" />
                          <Image src="/pakistan.png" alt="Pakistan Flag" width={40} height={40} className="object-contain rounded-md" />
                          <Image src="/canada.png" alt="Canada Flag" width={40} height={40} className="object-contain rounded-md" />
                        </div>

            <div className="space-y-6 mb-12">
              <div className="flex items-center gap-3">
                <PersonStanding className="h-5 w-5 text-white" />
                <span className="text-white">Abdul Aleem</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-white" />
                <span className="text-white">contact.gen1solutions@gmail.com</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-white" />
                <span className="text-white">+923054559888</span>
              </div>
              <div className="flex items-center gap-3">
                <MessageCircle className="h-5 w-5 text-white" />
                <span className="text-white">Postal Code: 54770</span>
              </div>
            </div>

            {/* Social Media Icons */}
            <div className="flex gap-4">
              <a href="https://www.facebook.com/gen1solutions" className="text-white hover:text-red-600 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="https://www.instagram.com/gen1solutions" className="text-white hover:text-red-600 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="https://www.linkedin.com/company/gen1solutions" className="text-white hover:text-red-600 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="bg-red-600 rounded-3xl p-8">
            {message.text && (
              <div className={`mb-4 p-4 rounded ${
                message.type === 'success' ? 'bg-green-600 text-white' : 'bg-red-700 text-white'
              }`}>
                {message.text}
              </div>
            )}
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name and Email Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-white text-sm font-medium mb-2">Name</label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 rounded-md bg-red-700 text-white placeholder-red-300 focus:outline-none focus:ring-2 focus:ring-red-400"
                    placeholder="Enter your name"
                  />
                </div>
                <div>
                  <label className="block text-white text-sm font-medium mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 rounded-md bg-red-700 text-white placeholder-red-300 focus:outline-none focus:ring-2 focus:ring-red-400"
                    placeholder="Enter your email"
                  />
                </div>
              </div>

              {/* Phone and LinkedIn Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-white text-sm font-medium mb-2">Phone</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 rounded-md bg-red-700 text-white placeholder-red-300 focus:outline-none focus:ring-2 focus:ring-red-400"
                    placeholder="Enter your phone"
                  />
                </div>
                <div>
                  <label className="block text-white text-sm font-medium mb-2">LinkedIn</label>
                  <input
                    type="url"
                    name="linkedin"
                    value={formData.linkedin}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 rounded-md bg-red-700 text-white placeholder-red-300 focus:outline-none focus:ring-2 focus:ring-red-400"
                    placeholder="Your LinkedIn profile"
                  />
                </div>
              </div>

              {/* Service Dropdown */}
              <div>
                <label className="block text-white text-sm font-medium mb-2">Service</label>
                <select
                  name="service"
                  required
                  value={formData.service}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 rounded-md bg-red-700 text-white placeholder-red-300 focus:outline-none focus:ring-2 focus:ring-red-400"
                >
                  <option value="">Select a service</option>
                  <option value="Video">Video</option>
                  <option value="Design">Design</option>
                  <option value="Marketing">Marketing</option>
                  <option value="Web Development">Web Development</option>
                </select>
              </div>

              {/* Project Details */}
              <div>
                <label className="block text-white text-sm font-medium mb-2">Project Details</label>
                <textarea
                  name="details"
                  required
                  value={formData.details}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-2 rounded-md bg-red-700 text-white placeholder-red-300 focus:outline-none focus:ring-2 focus:ring-red-400"
                  placeholder="Tell us about your project"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isLoading}
                className={`w-full bg-white text-red-600 py-3 px-6 rounded-md font-semibold hover:bg-red-100 transition-colors ${
                  isLoading ? 'opacity-75 cursor-not-allowed' : ''
                }`}
              >
                {isLoading ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactForm
