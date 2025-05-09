"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

// Portfolio data
const portfolioItems = [
  {
    id: 1,
    title: "Lost Poster",
    category: "Social Media Campaign",
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nis.
    
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nis.`,
    tags: ["Tag 1", "Tag 2", "Tag 3", "Tag 4"],
    image: "/lost.jpg",
    thumbnail: "/lost.jpg",
    type: "Graphic Design",
  },
  {
    id: 2,
    title: "Video Production",
    category: "Marketing Campaign",
    description: `Professional video production for your brand's marketing needs. We create engaging content that captures your audience's attention and drives results.
    
    Our team of experts handles everything from concept to final delivery, ensuring high-quality production values throughout.`,
    tags: ["Production", "Editing", "Motion", "Branding"],
    image: "/lost.jpg",
    thumbnail: "/lost.jpg",
    type: "Video",
  },
  {
    id: 3,
    title: "Turn the Page",
    category: "Book Campaign",
    description: `A comprehensive book promotion campaign designed to increase visibility and drive sales. Our strategic approach combines traditional and digital marketing techniques.
    
    We work closely with authors and publishers to create customized campaigns that reach the right audience at the right time.`,
    tags: ["Publishing", "Marketing", "Design", "Social"],
    image: "/lost.jpg",
    thumbnail: "/lost.jpg",
    type: "Marketing",
  },
  {
    id: 4,
    title: "The Revival",
    category: "Event Promotion",
    description: `Strategic event promotion that drives attendance and engagement. We create comprehensive marketing plans that utilize multiple channels to reach your target audience.
    
    From initial concept to day-of execution, our team ensures your event gets the attention it deserves.`,
    tags: ["Events", "Promotion", "Design", "Strategy"],
    image: "/lost.jpg",
    thumbnail: "/lost.jpg",
    type: "Graphic Design",
  },
  {
    id: 5,
    title: "UEFA Champions League",
    category: "Sports Marketing",
    description: `Comprehensive sports marketing campaign designed to engage fans and drive viewership. Our approach combines digital and traditional marketing techniques to maximize reach.
    
    We create compelling content that resonates with sports enthusiasts and casual viewers alike.`,
    tags: ["Sports", "Marketing", "Digital", "Broadcast"],
    image: "/lost.jpg",
    thumbnail: "/lost.jpg",
    type: "Marketing",
  },
];

// Filter categories
const categories = ["Graphic Design", "Video", "Web Development", "Marketing"];

export default function PortfolioSection() {
  const [activeCategory, setActiveCategory] = useState("Graphic Design");
  const [selectedItem, setSelectedItem] = useState(portfolioItems[0]);

  // Filter items by category
  const filteredItems =
    activeCategory === "All"
      ? portfolioItems
      : portfolioItems.filter((item) => item.type === activeCategory);

  // Handle category change
  const handleCategoryChange = (category) => {
    setActiveCategory(category);
    // Set the first item of the filtered category as selected
    const firstItem = portfolioItems.find((item) => item.type === category);
    if (firstItem) {
      setSelectedItem(firstItem);
    }
  };

  // Handle item selection
  const handleItemSelect = (item) => {
    setSelectedItem(item);
  };

  return (
    <section className="relative py-16 md:py-24 px-4 overflow-hidden">
      {/* Radial Glow Effect in Center */}
      <div className="absolute inset-0 flex justify-center items-start pointer-events-none z-0">
        <div className="w-[500px] h-[100px] bg-[#CC0000] opacity-50 blur-3xl rounded-full mt-[-100px]"></div>
      </div>

      <div className="container mx-auto relative z-10">
        {/* Portfolio Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-[#CC0000] mb-2">
            Our Portfolio
          </h2>
          <p className="text-zinc-400 text-lg mt-2">
            Here are some glimpse of our top work
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <div
              key={category}
              className={`rounded-full p-[2px] transition-all ${
                activeCategory === category
                  ? "bg-gradient-to-r from-black to-[#CC0000] shadow-lg"
                  : "bg-transparent"
              }`}
            >
              <button
                onClick={() => handleCategoryChange(category)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-colors w-full h-full ${
                  activeCategory === category
                    ? "bg-zinc-900 text-white"
                    : "bg-zinc-900 text-white/70"
                }`}
              >
                {category}
              </button>
            </div>
          ))}
        </div>

        {/* Portfolio Display */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Main Display */}
          <div className="lg:col-span-12 grid grid-cols-1 lg:grid-cols-12 gap-6 bg-zinc-900/50 rounded-3xl p-6 mb-6 relative">
            {/* Glow Effect on Hover */}
            {/* Featured Image */}
            <div className="lg:col-span-5 flex items-center justify-center">
              <div className="relative w-full max-w-md aspect-[3/4] overflow-hidden rounded-xl">
                <Image
                  src={selectedItem.image || "/placeholder.svg"}
                  alt={selectedItem.title}
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Content */}
            <div className="lg:col-span-7 flex flex-col justify-center">
              <div className="text-zinc-400 mb-2">{selectedItem.category}</div>
              <h3 className="text-3xl font-bold mb-4">{selectedItem.title}</h3>
              <div className="text-zinc-400 space-y-4 mb-6">
                {selectedItem.description
                  .split("\n\n")
                  .map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {selectedItem.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-zinc-800 rounded-full text-xs"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* View Portfolio Button */}
              <div>
                <Button
                  variant="outline"
                  className="rounded-full bg-white text-black hover:bg-white/90 border-0 flex items-center gap-2 px-6"
                >
                  <span>View Portfolio</span>
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Thumbnails */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => handleItemSelect(item)}
              className={`cursor-pointer rounded-xl overflow-hidden transition-all duration-300 ${
                selectedItem.id === item.id
                  ? "ring-2 ring-red-600 scale-105"
                  : "opacity-70 hover:opacity-100"
              }`}
            >
              <div className="relative aspect-[3/4] w-full">
                <Image
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
