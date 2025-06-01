"use client";
import Image from "next/image";

const AboutHero = () => {
  return (
    <section className="bg-black flex flex-col justify-center px-4 py-8 relative ">
      <div className="container mx-auto">
        {/* Main Heading - Centered */}
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4">
            From idea to reality
          </h1>
          <h2 className="text-4xl md:text-6xl font-bold leading-tight text-red-600">
            Your Vision, Our Theme.
          </h2>
        </div>
      </div>
      {/* Our Story Section - Full width */}
      <div className="w-full flex flex-col md:flex-row items-center justify-evenly gap-10 px-4 md:px-12 mt-6">
        {/* Left: Text */}
        <div className="flex-1 text-white md:pl-12">
          <h3 className="text-4xl md:text-5xl font-bold mb-6">
            Our <span className="text-red-600">Story</span>
          </h3>
          
            <p className="text-2xl">
              We started out like most—stuck in the 9-to-5 grind, clocking in and out with little room for our creative
              sparks to shine. But we had a passion for marketing and a belief that we could do things differently.
            </p>
            <p className="text-2xl">
              Top-notch marketing services at prices that won't break the bank.
            </p>
        </div>
        {/* Right: Image */}
        <div className="md:pr-12 flex  justify-end">
          <Image src={"/aliE.jpg"}
            alt="Our Story"
            width={400}
            height={400}
            className="w-1/2 "
            />
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
