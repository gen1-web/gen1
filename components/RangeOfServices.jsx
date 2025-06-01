"use client"
import Image from "next/image"

const RangeOfServices = () => {
 

  return (
    <section className="bg-zinc-900 py-20 px-4 relative overflow-hidden">
      <Image src={"/range-of-services.png"} alt="Range of Services" width={1920} height={1080} className="absolute inset-0 w-full h-full object-cover opacity-20" />
    </section>
  )
}

export default RangeOfServices
