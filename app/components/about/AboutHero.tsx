"use client";

import { Sparkles } from "lucide-react";

export default function AboutHero() {
  return (
    <section className="relative w-full min-h-[50vh] flex items-center bg-[#fcfdfe] pt-36 pb-16 overflow-hidden select-none">
      {/* Premium Ambient Soft Light Layer */}
      <div className="absolute top-[-20%] left-[50%] -translate-x-1/2 w-[60vw] h-[60vw] rounded-full bg-[#6e3568]/5 blur-[140px] pointer-events-none transform-gpu" />

      <div className="max-w-[1440px] mx-auto w-full px-4 sm:px-8 lg:px-12 text-center relative z-10">
        <div className="max-w-3xl mx-auto flex flex-col items-center gap-6">
          
          {/* Brand Tag Node */}
          <div className="inline-flex items-center gap-2 bg-[#6e3568]/5 border border-[#6e3568]/10 px-4 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest text-[#6e3568]">
            <Sparkles size={11} className="text-[#b68cb2]" />
            <span>The Waff~hill Story</span>
          </div>

          {/* Heading with Premium Serif Pair */}
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-[#6e3568] leading-[1.15] tracking-tight">
            Built For The Next Generation <br />
            <span className="text-[#b68cb2] italic font-normal">Of Dessert Lovers</span>
          </h1>

          {/* Subtle Aesthetic Separator */}
          <div className="w-12 h-[1.5px] bg-[#b68cb2] my-2" />

          {/* Content Aligned Context Brand Paragraph */}
          <p className="text-xs sm:text-sm md:text-base text-[#6e3568]/80 font-normal leading-relaxed max-w-2xl">
            Waff~hill was founded in 2024 with a simple vision: to build a modern dessert brand that combines premium products, affordable pricing, and a highly scalable franchise model.
          </p>
          
        </div>
      </div>
    </section>
  );
}