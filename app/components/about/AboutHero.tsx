"use client";

import { Sparkles } from "lucide-react";

export default function AboutHero() {
  return (
    <section className="relative w-full min-h-[60vh] flex items-center bg-[#fcfdfe] pt-32 pb-16 overflow-hidden select-none">
      {/* Premium Ambient Light Layer */}
      <div className="absolute top-[-20%] left-[50%] -translate-x-1/2 w-[60vw] h-[60vw] rounded-full bg-[#6e3568]/5 blur-[140px] pointer-events-none transform-gpu" />

      <div className="max-w-[1440px] mx-auto w-full px-4 sm:px-8 lg:px-12 text-center relative z-10">
        <div className="max-w-3xl mx-auto flex flex-col items-center gap-6">
          
          {/* Tag Node */}
          <div className="inline-flex items-center gap-2 bg-[#6e3568]/5 border border-[#6e3568]/10 px-4 py-2 rounded-full text-[11px] font-bold uppercase tracking-widest text-[#6e3568]">
            <Sparkles size={12} className="text-[#b68cb2]" />
            <span>The Waffhil Legacy</span>
          </div>

          {/* Heading */}
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-extrabold text-[#6e3568] leading-[1.15] tracking-tight">
            Crafting Moments of <br />
            <span className="text-[#b68cb2] italic font-normal">Pure Sweet Luxury</span>
          </h1>

          {/* Subtle Accent Line */}
          <div className="w-12 h-[2px] bg-[#b68cb2] my-2" />

          {/* SEO Optimized Context Description */}
          <p className="text-base sm:text-lg text-[#6e3568]/80 font-light leading-relaxed">
            Founded with a vision to revolutionize the dessert ecosystem, Waffhil blends artisanal European baking methodologies with globally sourced premium ingredients to engineer the ultimate crisp profile.
          </p>
          
        </div>
      </div>
    </section>
  );
}