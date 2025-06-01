"use client"
import Image from "next/image"

const RangeOfServices = () => {
  return (
    <section className="bg-zinc-900 py-20 px-4 relative overflow-hidden min-h-[50vh] flex flex-col justify-center items-center">
      <Image src={"/range.svg"} alt="Range of Services" width={900} height={800} />
    </section>
  )
}

export default RangeOfServices
