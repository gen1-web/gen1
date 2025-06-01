"use client"

const AboutHero = () => {
  return (
    <section className="bg-black min-h-screen flex flex-col justify-center px-4 py-16 relative">
      <div className="container mx-auto">
        {/* Main Heading - Centered */}
        <div className="text-center mb-32">
          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-4">From idea to reality</h1>
          <h2 className="text-5xl md:text-7xl font-bold leading-tight text-red-600">Your Vision, Our Theme.</h2>
        </div>

        {/* Our Story Section - Positioned in lower left */}
        <div className="max-w-lg">
          <h3 className="text-3xl font-bold mb-6">
            Our <span className="text-red-600">Story</span>
          </h3>
          <div className="space-y-6 text-white leading-relaxed">
            <p>
              We started out like most—stuck in the 9-to-5 grind, clocking in and out with little room for our creative
              sparks to shine. But we had a passion for marketing and a belief that we could do things differently.
            </p>
            <p>
              So, we took a leap, ditched the day job, and launched our own agency with a clear mission: to deliver
              top-notch marketing services at prices that won't break the bank.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutHero
