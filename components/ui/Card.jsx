"use client"
import { forwardRef } from "react"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

const Card = forwardRef(({ className, title, image, description, link }, ref) => {
  return (
    <div ref={ref} className={`bg-zinc-900 rounded-3xl p-6 flex flex-col justify-between h-80 ${className}`}>
      <div className="bg-zinc-800 text-white rounded-full px-4 py-2 inline-block font-semibold w-fit">{title}</div>
      <div>
        <p className="text-white text-lg mt-auto mb-8">{description}</p>
        <Link href={link} className="text-white/80 hover:text-white flex items-center gap-1 text-sm">
          learn more <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </div>
  )
})

Card.displayName = "Card"

export default Card
