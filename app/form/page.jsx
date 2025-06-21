import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import ContactForm from "@/components/ContactForm"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      <main>
        <div className="container mx-auto pt-8 px-4">
          <Link href="/" className="inline-flex items-center text-white/70 hover:text-white transition-colors mb-8">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Link>
        </div>

        <div className="container mx-auto px-4 mb-8">
          <h1 className="text-5xl md:text-6xl font-bold mb-2">
            Contact <span className="text-red-600">Us</span>
          </h1>
          <p className="text-lg text-zinc-400">Get in touch with our team to discuss your project</p>
        </div>

       
        <ContactForm/>

        
        <Footer/>
      </main>
    </div>
  )
}
