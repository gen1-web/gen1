import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
const Card = (props) => {
  return (
    <div className="relative bg-red-600 rounded-3xl p-6 flex flex-col justify-between h-80 overflow-hidden">
      <svg
        className="absolute inset-0 w-full h-full opacity-10 z-0"
        viewBox="0 0 200 200"
        preserveAspectRatio="none"
      >
        <path
          d="M50,100 C90,10 160,10 170,90 C180,170 80,190 40,120"
          fill="none"
          stroke="white"
          strokeWidth="20"
        />
      </svg>
      <div className="bg-white text-red-600 rounded-full px-4 py-2 inline-block font-semibold w-fit relative z-10">
        {props.title}
      </div>
      <div className="relative z-10">
        <p className="text-white text-lg mt-auto mb-8">{props.description}</p>
        <Link
          href={props.link}
          className="text-white/80 hover:text-white flex items-center gap-1 text-sm"
        >
          learn more <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </div>
  );
};

export default Card;
