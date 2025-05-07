import React from "react";
import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";

const CTA = () => {
  return (
    <section className="container mx-auto text-center py-8 md:py-12 px-4">
      <Button
        variant="outline"
        className="rounded-full bg-white text-black hover:bg-white/90 border-0 flex items-center gap-2 px-6 py-6 text-lg mx-auto"
      >
        <Calendar className="h-5 w-5" />
        <span>Book a FREE Consultation</span>
      </Button>
    </section>
  );
};

export default CTA;
