"use client";
import React, { useEffect } from "react";
import AnimatedTextSection from "./AnimatedTextSection";
import Card from "./ui/Card";

const Services = () => {
  useEffect(() => {
    const handleScroll = () => {
      const serviceCards = document.querySelectorAll(".service-card");
      serviceCards.forEach((card) => {
        const rect = card.getBoundingClientRect();
        if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
          card.classList.add("animate-slide-in");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const data = [
    {
      id: 1,
      title: "The Court Flush",
      image: "/poster1.png",
      description: "A gripping tale of justice and redemption.",
      link: "/portfolio/the-court-flush",
    },
    {
      id: 2,
      title: "Soulful Ties",
      image: "/poster1.png",
      description: "A heartwarming story of love and connection.",
      link: "/portfolio/soulful-ties",
    },
    {
      id: 3,
      title: "The Problem with Consent",
      image: "/poster1.png",
      description: "A thought-provoking exploration of consent.",
      link: "/portfolio/the-problem-with-consent",
    },
    {
      id: 4,
      title: "The Revival",
      image: "/poster1.png",
      description: "A powerful story of hope and renewal.",
      link: "/portfolio/the-revival",
    },
  ];
  return (
    <section className="container mx-auto py-16 md:py-24 px-4 ml-10 w-full">
      <AnimatedTextSection />
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="md:col-span-1">
          <h2 className="text-4xl md:text-5xl font-bold mb-2 text-red-600">
            Services
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold text-white">
            We Offer
          </h3>
        </div>

        <div className="md:col-span-3 grid grid-cols-1 md:grid-cols-4 gap-4">
          {data.map((item) => (
            <Card
              key={item.id}
              className="service-card opacity-0 transform translate-x-full"
              title={item.title}
              image={item.image}
              description={item.description}
              link={item.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
