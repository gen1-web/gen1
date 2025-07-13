"use client"
import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import Testimonial from "@/components/Testimonial"

export default function PortfolioPage() {
  // State to track active category and selected item
  const [activeCategory, setActiveCategory] = useState("Graphic Design")
  const [selectedItem, setSelectedItem] = useState(null)

  // Portfolio items data
  const portfolioItems = [
    {
      id: 1,
      title: "Family Fun Day",
      category: "Social Media Campaign",
      image: "/poster11.jpg?height=400&width=300",
      type: "Graphic Design",
      aspectRatio: "3/4",
      date: "June 23, 2023",
      description:
        "Building an internal tool of this scale is no small feat, but with the right approach, it can be a powerful force for uniting a community.",
      fullDescription:
        "Gen1 Solutions is a leading creative agency, dedicated to delivering innovative and purpose-driven content for global Islamic organizations. With a deep-rooted commitment to Islamic values, we are proud to offer Halal creative solutions that inspire and connect with audiences around the world, crafting narratives that touch hearts and uplift communities.",
      details: "FESTIVAL RIDES, GAMES, STALLS, FACE PAINTING, HENNA, FOOD & VARIETY STALLS",
      organization: "AIC COMMUNITY",
      date: "SUNDAY 8 DEC",
      time: "12-5PM",
      footer: "PORTION OF THE EVENT PROCEEDS WILL GO TOWARDS THE GAZA EMERGENCY APPEAL",
    },
    {
      id: 2,
      title: "Brand Video",
      category: "Social Media Campaign",
      url: "https://res.cloudinary.com/dvgsiwacs/video/upload/v1749023873/hwhq59teserq7ipezyez.mp4",
      thumbnail: "/video1.png",
      type: "Video",
      aspectRatio: "16/9",
      date: "May 15, 2023",
      description: "Creating a compelling brand video that captures the essence of Islamic values while engaging a modern audience.",
      fullDescription:
        "Gen1 Solutions is a leading creative agency, dedicated to delivering innovative and purpose-driven content for global Islamic organizations. With a deep-rooted commitment to Islamic values, we are proud to offer Halal creative solutions that inspire and connect with audiences around the world, crafting narratives that touch hearts and uplift communities.",
    },
    {
      id: 3,
      title: "A Night of Inspiration",
      category: "Social Media Campaign",
      image: "/night.jpg?height=400&width=300",
      type: "Graphic Design",
      aspectRatio: "3/4",
      date: "April 10, 2023",
      description:
        "An evening event featuring renowned speakers sharing wisdom and inspiration from Islamic teachings.",
      fullDescription:
        "Gen1 Solutions is a leading creative agency, dedicated to delivering innovative and purpose-driven content for global Islamic organizations. With a deep-rooted commitment to Islamic values, we are proud to offer Halal creative solutions that inspire and connect with audiences around the world, crafting narratives that touch hearts and uplift communities.",
    },
    {
      id: 4,
      title: "Wales Brotherhood Adventure",
      category: "Social Media Campaign",
      image: "/poster1.png?height=400&width=300",
      type: "Marketing",
      aspectRatio: "3/4",
      date: "March 28, 2023",
      description:
        "A brotherhood retreat focused on strengthening bonds through outdoor activities and spiritual reflection.",
      fullDescription:
        "Gen1 Solutions is a leading creative agency, dedicated to delivering innovative and purpose-driven content for global Islamic organizations. With a deep-rooted commitment to Islamic values, we are proud to offer Halal creative solutions that inspire and connect with audiences around the world, crafting narratives that touch hearts and uplift communities.",
    },
    {
      id: 5,
      title: "Yasen Youth Annual Cup",
      category: "Social Media Campaign",
      image: "/football.jpg",
      type: "Graphic Design",
      aspectRatio: "3/4",
      date: "February 15, 2023",
      description:
        "Annual sports tournament bringing together youth from various Islamic communities to compete and connect.",
      fullDescription:
        "Gen1 Solutions is a leading creative agency, dedicated to delivering innovative and purpose-driven content for global Islamic organizations. With a deep-rooted commitment to Islamic values, we are proud to offer Halal creative solutions that inspire and connect with audiences around the world, crafting narratives that touch hearts and uplift communities.",
    },
    {
      id: 6,
      title: "Travel Agency Website",
      category: "Web Development",
      image: "/darelmecca.png",
      type: "Web Development",
      aspectRatio: "3/4",
      date: "January 20, 2023",
      description: "A modern travel platform designed specifically for Islamic travels and tours.",
      fullDescription:
        "Gen1 Solutions is a leading creative agency, dedicated to delivering innovative and purpose-driven content for global Islamic organizations. With a deep-rooted commitment to Islamic values, we are proud to offer Halal creative solutions that inspire and connect with audiences around the world, crafting narratives that touch hearts and uplift communities.",
    },
    {
      id: 8,
      title: "Salam Arabic",
      category: "Digital Marketing",
      image: "/poster5.jpg",
      type: "Marketing",
      aspectRatio: "3/4",
      date: "November 12, 2022",
      description: "Comprehensive digital marketing strategy for an Islamic charity organization.",
      fullDescription:
        "Gen1 Solutions is a leading creative agency, dedicated to delivering innovative and purpose-driven content for global Islamic organizations. With a deep-rooted commitment to Islamic values, we are proud to offer Halal creative solutions that inspire and connect with audiences around the world, crafting narratives that touch hearts and uplift communities.",
    },
    {
      id: 9,
      title: "7 Deadly Sins",
      category: "Social Media Campaign",
      url: "https://res.cloudinary.com/dvgsiwacs/video/upload/v1750491658/Copy_of_7_Deadly_Sins_in_Islam_jv9h3j.mp4",
      thumbnail: "/video3.png",
      type: "Video",
      aspectRatio: "16/9",
      date: "May 15, 2023",
      description:
        "Creating a compelling brand video that captures the essence of Islamic values while engaging a modern audience.",
      fullDescription:
        "Gen1 Solutions is a leading creative agency, dedicated to delivering innovative and purpose-driven content for global Islamic organizations. With a deep-rooted commitment to Islamic values, we are proud to offer Halal creative solutions that inspire and connect with audiences around the world, crafting narratives that touch hearts and uplift communities.",
    },
    {
      id: 10,
      title: "How Allah Rewards a Believer",
      category: "Social Media Campaign",
      url: "https://res.cloudinary.com/dvgsiwacs/video/upload/v1750492162/How_Allah_Rewards_a_Believer_iqx1zn.mp4",
      thumbnail: "/video4.png",
      type: "Video",
      aspectRatio: "16/9",
      date: "May 15, 2023",
      description:
        "Creating a compelling brand video that captures the essence of Islamic values while engaging a modern audience.",
      fullDescription:
        "Gen1 Solutions is a leading creative agency, dedicated to delivering innovative and purpose-driven content for global Islamic organizations. With a deep-rooted commitment to Islamic values, we are proud to offer Halal creative solutions that inspire and connect with audiences around the world, crafting narratives that touch hearts and uplift communities.",
    },
    {
      id: 11,
      title: "Turn Back to Allah",
      category: "Social Media Campaign",
      url: "https://res.cloudinary.com/dvgsiwacs/video/upload/v1750492593/Turn_Back_to_Allah_ipcghe.mp4",
      thumbnail: "/video2.png",
      type: "Video",
      aspectRatio: "16/9",
      date: "May 15, 2023",
      description:
        "Creating a compelling brand video that captures the essence of Islamic values while engaging a modern audience.",
      fullDescription:
        "Gen1 Solutions is a leading creative agency, dedicated to delivering innovative and purpose-driven content for global Islamic organizations. With a deep-rooted commitment to Islamic values, we are proud to offer Halal creative solutions that inspire and connect with audiences around the world, crafting narratives that touch hearts and uplift communities.",
    },
    {
      id: 12,
      title: "Ramadan 2025 Promo",
      category: "Social Media Campaign",
      url: "https://res.cloudinary.com/dvgsiwacs/video/upload/v1750493606/Ramadan_2025_Promo_bkxqvf.mp4",
      thumbnail: "/video5.png",
      type: "Video",
      aspectRatio: "16/9",
      date: "May 15, 2023",
      description:
        "Creating a compelling brand video that captures the essence of Islamic values while engaging a modern audience.",
      fullDescription:
        "Gen1 Solutions is a leading creative agency, dedicated to delivering innovative and purpose-driven content for global Islamic organizations. With a deep-rooted commitment to Islamic values, we are proud to offer Halal creative solutions that inspire and connect with audiences around the world, crafting narratives that touch hearts and uplift communities.",
    },
    {
      id: 13,
      title: "Father and Son",
      category: "Event Campaign",
      image: "/poster12.jpg?height=400&width=300",
      type: "Graphic Design",
      aspectRatio: "3/4",
      date: "June 23, 2023",
      description:
        "Building an internal tool of this scale is no small feat, but with the right approach, it can be a powerful force for uniting a community.",
      fullDescription:
        "Gen1 Solutions is a leading creative agency, dedicated to delivering innovative and purpose-driven content for global Islamic organizations. With a deep-rooted commitment to Islamic values, we are proud to offer Halal creative solutions that inspire and connect with audiences around the world, crafting narratives that touch hearts and uplift communities.",
      details: "REFRESHMENTS, GAMES, STALLS,NIGHT STAY, COACHING, QURAN RECITATION",
      organization: "AIC COMMUNITY",
      date: "SUNDAY 8 DEC",
      time: "12-5PM",
      footer: "PORTION OF THE EVENT PROCEEDS WILL GO TOWARDS THE GAZA EMERGENCY APPEAL",
    },
    {
      id: 14,
      title: "Creativity Challenge",
      category: "Event Campaign",
      image: "/poster13.jpg?height=400&width=300",
      type: "Graphic Design",
      aspectRatio: "3/4",
      date: "June 23, 2023",
      description:
        "Building an internal tool of this scale is no small feat, but with the right approach, it can be a powerful force for uniting a community.",
      fullDescription:
        "Gen1 Solutions is a leading creative agency, dedicated to delivering innovative and purpose-driven content for global Islamic organizations. With a deep-rooted commitment to Islamic values, we are proud to offer Halal creative solutions that inspire and connect with audiences around the world, crafting narratives that touch hearts and uplift communities.",
      details: "Amazon Gift Cards, Script writing, Film Production, Editing",
      organization: "AIC COMMUNITY",
      date: "SUNDAY 8 DEC",
      time: "12-5PM"
    },
    {
      id: 15,
      title: "Youth Iftar",
      category: "Event Campaign",
      image: "/poster14.jpg?height=400&width=300",
      type: "Graphic Design",
      aspectRatio: "3/4",
      date: "June 23, 2023",
      description:
        "Building an internal tool of this scale is no small feat, but with the right approach, it can be a powerful force for uniting a community.",
      fullDescription:
        "Gen1 Solutions is a leading creative agency, dedicated to delivering innovative and purpose-driven content for global Islamic organizations. With a deep-rooted commitment to Islamic values, we are proud to offer Halal creative solutions that inspire and connect with audiences around the world, crafting narratives that touch hearts and uplift communities.",
      details: "Fun , games, islamic talks, food, refreshments",
      organization: "AIC COMMUNITY",
      date: "SUNDAY 8 DEC",
      time: "12-5PM"
    },
    {
      id: 16,
      title: "National Quran Camp",
      category: "Event Campaign",
      image: "/poster2.jpg",
      type: "Graphic Design",
      aspectRatio: "3/4",
      date: "July 1, 2023",
      description: "A week to reunite and reconnect",
      fullDescription: "This poster showcases the creativity and design expertise of our team, tailored for impactful event campaigns.",
    },
    {
      id: 17,
      title: "Umrah Poster",
      category: "Event Campaign",
      image: "/poster3.jpg",
      type: "Marketing",
      aspectRatio: "3/4",
      date: "July 2, 2023",
      description: "A vibrant poster for an Umrah Tour.",
      fullDescription: "Designed to captivate and engage, this poster highlights our commitment to community-focused campaigns.",
    },
    {
      id: 18,
      title: "Book Fair",
      category: "Event Campaign",
      image: "/poster4.jpg",
      type: "Graphic Design",
      aspectRatio: "3/4",
      date: "July 3, 2023",
      description: "An artistic poster for a book fair event.",
      fullDescription: "This poster reflects the cultural essence and artistic flair of our design team.",
    },
    {
      id: 19,
      title: "BBQ Brotherhood",
      category: "Event Campaign",
      image: "/poster6.jpg",
      type: "Graphic Design",
      aspectRatio: "3/4",
      date: "July 4, 2023",
      description: "Nourish the soul ignite the fire",
      fullDescription: "Showcasing modern design trends, this poster is perfect for promotional campaigns.",
    },
    {
      id: 20,
      title: "Broski: Ski trip",
      category: "Event Campaign",
      image: "/poster7.jpg",
      type: "Marketing",
      aspectRatio: "3/4",
      date: "July 5, 2023",
      description: "A dynamic poster for a ski trip event.",
      fullDescription: "This poster captures the energy and vibrancy of youth-focused events.",
    },
    {
      id: 21,
      title: "Explore the Quran",
      category: "Event Campaign",
      image: "/poster8.jpg",
      type: "Graphic Design",
      aspectRatio: "3/4",
      date: "July 6, 2023",
      description: "Unlock the language of revelation.",
      fullDescription: "Designed to inspire and motivate, this poster is ideal for charity events.",
    },
    {
      id: 22,
      title: "Umrah Package",
      category: "Event Campaign",
      image: "/poster9.jpg",
      type: "Graphic Design",
      aspectRatio: "3/4",
      date: "July 7, 2023",
      description: "A bold poster for a marketing campaign.",
      fullDescription: "This poster combines bold visuals and strategic messaging for marketing success.",
    },
    {
      id: 23,
      title: "Eid prayers",
      category: "Event Campaign",
      image: "/poster10.jpg",
      type: "Graphic Design",
      aspectRatio: "3/4",
      date: "July 8, 2023",
      description: "Depending on the moonsight",
      fullDescription: "This poster exudes professionalism and elegance, perfect for corporate events.",
    },
    {
      id: 24,
      title: "Sisters bowl and bite",
      category: "Event Campaign",
      image: "/poster15.jpg",
      type: "Graphic Design",
      aspectRatio: "3/4",
      date: "July 9, 2023",
      description: "Join yasseen youth sistes for an evening of bwoling and cheeky nandos",
      fullDescription: "This poster captures the festive spirit and excitement of community festivals.",
    },
    {
      id: 25,
      title: "Ice skating with yasseen youth",
      category: "Event Campaign",
      image: "/poster16.jpg",
      type: "Marketing",
      aspectRatio: "3/4",
      date: "July 10, 2023",
      description: "A colorful poster for a cultural celebration.",
      fullDescription: "This poster celebrates cultural diversity and creativity through vibrant design.",
    },
    {
      id: 26,
      title: "Lost Poster",
      category: "Event Campaign",
      image: "/lost.jpg",
      type: "Graphic Design",
      aspectRatio: "3/4",
      date: "July 11, 2023",
      description: "A unique poster for a special event.",
      fullDescription: "This poster stands out with its unique design and compelling visuals, perfect for special events.",
    },
  ]

  // Filter categories
  const categories = ["Graphic Design", "Video", "Web Development", "Marketing"]

  // Filter items based on active category
  const filteredItems = portfolioItems.filter((item) => item.type === activeCategory)

  // Handle category change
  const handleCategoryChange = (category) => {
    setActiveCategory(category)
  }

  // Handle item selection
  const handleItemClick = (item) => {
    setSelectedItem(item)
    // Scroll to top when item is selected
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  // Close detail view
  const closeDetailView = () => {
    setSelectedItem(null)
  }

  // Get related items (excluding the selected item)
  const getRelatedItems = () => {
    return portfolioItems.filter((item) => item.id !== selectedItem?.id).slice(0, 4)
  }

  return (
    <>
    <Navbar/>
    <div className="min-h-screen bg-black text-white">
      {selectedItem ? (
        // Detail View
        <div className="min-h-screen">
          {/* Back Button */}
          <div className="container mx-auto pt-8 px-4">
            <button
              onClick={closeDetailView}
              className="inline-flex items-center text-white/70 hover:text-white transition-colors mb-6"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Portfolio
            </button>
          </div>

          {/* Detail Header */}
          <div className="container mx-auto px-4 mb-8">
            <div className="flex justify-between items-center">
              <div>
                <div className="text-zinc-500 text-sm">{selectedItem.category}</div>
                <h1 className="text-4xl md:text-5xl font-bold mt-1">{selectedItem.title}</h1>
              </div>
              <div className="text-zinc-500 text-sm">{selectedItem.date}</div>
            </div>
            <p className="text-zinc-400 mt-4 max-w-3xl">{selectedItem.description}</p>
          </div>

          {/* Main Poster Display */}
          <div className="container mx-auto px-4 mb-12">
            <div className="max-w-3xl mx-auto border border-zinc-800 rounded-lg p-2 bg-zinc-900/50">
              <div className={`relative aspect-[${selectedItem.aspectRatio}] w-full min-h-[200px]`}>
                {selectedItem.type === "Video" && selectedItem.url ? (
                  selectedItem.url.endsWith(".mp4") ? (
                    <video
                      src={selectedItem.url}
                      controls
                      typeof="video/mp4"
                      className="absolute top-0 left-0 w-full h-full rounded"
                    />
                  ) : (
                    <iframe
                      src={selectedItem.url}
                      title={selectedItem.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerPolicy="strict-origin-when-cross-origin"
                      allowFullScreen
                      className="absolute top-0 left-0 w-full h-full rounded"
                    ></iframe>
                  )
                ) : (
                  <Image
                    src={selectedItem.image}
                    alt={selectedItem.title}
                    fill
                    className="object-cover rounded"
                  />
                )}
              </div>
            </div>
          </div>

          {/* Description */}
          <div className="container mx-auto px-4 mb-16">
            <div className="max-w-3xl mx-auto">
              <p className="text-zinc-400 mb-8">{selectedItem.fullDescription}</p>

              {/* CTA Button */}
              <div className="text-center">
                <Button
                  variant="outline"
                  className="rounded-full bg-white text-black hover:bg-white/90 border-0 flex items-center gap-2 px-6 py-6 mx-auto"
                >
                  <Calendar className="h-5 w-5" />
                  <span>Book a FREE Consultation</span>
                </Button>
              </div>
            </div>
          </div>

          {/* Explore More Work */}
          <div className="container mx-auto px-4 pb-20">
            <h2 className="text-2xl font-bold mb-2">
              Explore More <span className="text-red-600">Work</span>
            </h2>
            <p className="text-zinc-500 mb-8">Browse through our more work</p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {getRelatedItems().map((item) => (
                <div key={item.id} className="cursor-pointer" onClick={() => handleItemClick(item)}>
                  <div className="bg-zinc-900 rounded-lg overflow-hidden group hover:bg-zinc-800 transition-colors">
                    <div className="relative aspect-[3/4] w-full">
                      <Image
                        src={item.image || "/placeholder.svg"}
                        alt={item.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        // Portfolio Grid View
        <>
          {/* Back Button */}
          <div className="container mx-auto pt-8 px-4">
            <Link href="/" className="inline-flex items-center text-white/70 hover:text-white transition-colors mb-12">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Link>
          </div>

          {/* Portfolio Header */}
          <div className="container mx-auto px-4 mb-12">
            <h1 className="text-5xl md:text-6xl font-bold mb-2">
              Our <span className="text-red-600">Portfolio</span>
            </h1>
            <p className="text-lg text-zinc-400">Crafting impactful content for visionary Islamic brands</p>
          </div>

          {/* Filter Buttons */}
          <div className="container mx-auto px-4 mb-12">
            <div className="flex flex-wrap gap-4">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => handleCategoryChange(category)}
                  className={`px-6 py-2 rounded-full border ${
                    activeCategory === category
                      ? "border-red-600 text-white bg-red-600/10"
                      : "border-zinc-800 text-white bg-transparent hover:bg-zinc-800/50"
                  } transition-colors`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Portfolio Grid */}
          <div className="container mx-auto px-4 pb-20">
            {filteredItems.length === 0 ? (
              <div className="text-center py-20 text-zinc-500">
                <p className="text-xl">No items found in this category.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredItems.map((item, index) => (
                  <div
                    key={item.id}
                    className={`${
                      item.type === "Web Development"
                        ? "lg:col-span-2 lg:row-span-2"
                        : index === 0 && item.aspectRatio === "16/9"
                        ? "md:col-span-2"
                        : "md:col-span-1"
                    } transition-all duration-300`}
                    onClick={() => handleItemClick(item)}
                  >
                    <div className="bg-zinc-900 rounded-lg overflow-hidden h-full group hover:bg-zinc-800 transition-colors cursor-pointer">
                      <div className={`relative aspect-[${item.aspectRatio}] w-full`}>
                        {item.type === "Video" ? (
                          <div className="relative w-full h-full">
                            <Image
                              src={item.thumbnail || "/video.png"}
                              alt={item.title}
                              fill
                              className="object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                          </div>
                        ) : (
                          <Image
                            src={item.image || "/placeholder.svg"}
                            alt={item.title}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                        )}
                      </div>
                      <div className="p-4">
                        <div className="text-zinc-500 text-sm mb-1">{item.category}</div>
                        <h3 className="text-xl font-semibold">{item.title}</h3>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </>
      )}
    </div>
    <Testimonial/>
    <div className="bg-[#141414]">
    <Footer/>
    </div>
    </>
  )
}
