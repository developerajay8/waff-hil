"use client";

import { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

interface Testimonial {
  id: number;
  quote: string;
  author: string;
  role: string;
}

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const reviews: Testimonial[] = [
    {
      id: 1,
      quote: "Waff~hil completely changed our perception of desserts. The crisp density of the waffle base stays fresh even after delivery. It is absolute premium craftsmanship.",
      author: "Rohan Malhotra",
      role: "Jaipur Food Enthusiast",
    },
    {
      id: 2,
      quote: "As a franchise partner, the business operations are flawless. The lean store format keeps overhead low, and the product consistency keeps customers coming back every single day.",
      author: "Ananya Sharma",
      role: "Franchise Owner, FOFO Model",
    },
    {
      id: 3,
      quote: "The Strawberry Vibe Check is not just a waffle; it's an aesthetic experience. The packaging, presentation, and taste are explicitly built for this generation.",
      author: "Kabir Mehta",
      role: "Digital Creator",
    },
    {
      id: 4,
      quote: "Predictable margins and rigid quality standards make Waff~hil stand out from regular dessert chains. Their focus on premium imports is highly noticeable in the taste.",
      author: "Vikramaditya Singh",
      role: "Investor & Partner",
    },
  ];

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="w-full md:py-28 py-16 bg-[#fcfdfe] select-none">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8">
        
        {/* Minimal Editorial Header Line */}
        <div className="flex items-center gap-2 mb-12">
          <div className="w-5 h-[1.5px] bg-[#9e6396]" />
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#9e6396]">
            WORDS FROM THE LOUNGE
          </span>
        </div>

        {/* Dynamic Slidable Quote Area */}
        <div className="relative min-h-[300px] sm:min-h-[240px] md:min-h-[200px] flex flex-col justify-between gap-12 border-b border-[#6e3568]/10 pb-12">
          
          {/* Active Quote Content */}
          <div className="animate-in fade-in slide-in-from-right-4 duration-500 transition-all">
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-light text-[#6e3568] leading-relaxed tracking-wide max-w-5xl">
              “{reviews[activeIndex].quote}”
            </h2>
          </div>

          {/* Author Meta Details and Arrow Controls Row */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 w-full">
            
            {/* Left Side: Author Identity */}
            <div className="flex flex-col gap-1">
              <span className="font-serif text-base md:text-lg font-bold text-[#6e3568]">
                {reviews[activeIndex].author}
              </span>
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#9e6396]">
                {reviews[activeIndex].role}
              </span>
            </div>

            {/* Right Side: Interactive Index & Action Buttons */}
            <div className="flex items-center gap-6">
              {/* Pagination Indicators */}
              <div className="flex items-center gap-1.5">
                {reviews.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveIndex(idx)}
                    className={`h-[3px] transition-all duration-300 rounded-full ${
                      idx === activeIndex ? "w-6 bg-[#6e3568]" : "w-2 bg-[#6e3568]/20"
                    }`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>

              {/* Premium Control Arrows */}
              <div className="flex items-center gap-2">
                <button
                  onClick={handlePrev}
                  className="p-3 rounded-full border border-[#6e3568]/10 text-[#6e3568] hover:bg-[#6e3568] hover:text-[#fcfdfe] transition-all duration-300 active:scale-95"
                  aria-label="Previous Testimonial"
                >
                  <ArrowLeft size={16} />
                </button>
                
                <button
                  onClick={handleNext}
                  className="p-3 rounded-full border border-[#6e3568]/10 text-[#6e3568] hover:bg-[#6e3568] hover:text-[#fcfdfe] transition-all duration-300 active:scale-95"
                  aria-label="Next Testimonial"
                >
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}