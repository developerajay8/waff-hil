"use client";

import { Sparkles } from "lucide-react";

export default function CareersHero() {
  return (
    <section className="relative w-full min-h-[55vh] flex items-center bg-[#fcfdfe] pt-36 pb-16 overflow-hidden select-none">
      {/* Premium Aurora Accents */}
      <div className="absolute top-[-15%] right-[-10%] w-[50vw] h-[50vw] rounded-full bg-[#6e3568]/5 blur-[130px] pointer-events-none transform-gpu" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[45vw] h-[45vw] rounded-full bg-[#b68cb2]/10 blur-[110px] pointer-events-none transform-gpu" />

      <div className="max-w-[1440px] mx-auto w-full px-4 sm:px-8 lg:px-12 text-center relative z-10">
        <div className="max-w-3xl mx-auto flex flex-col items-center gap-6">
          
          <div className="inline-flex items-center gap-2 bg-[#6e3568]/5 border border-[#6e3568]/10 px-4 py-2 rounded-full text-[11px] font-bold uppercase tracking-widest text-[#6e3568]">
            <Sparkles size={12} className="text-[#b68cb2]" />
            <span>Join the Culinary Revolution</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-extrabold text-[#6e3568] leading-[1.15] tracking-tight">
            Build Your Career in <br />
            <span className="text-[#b68cb2] italic font-normal">Luxury Hospitality</span>
          </h1>

          <div className="w-12 h-[2px] bg-[#b68cb2] my-1" />

          <p className="text-sm sm:text-base text-[#6e3568]/70 font-light max-w-xl leading-relaxed">
            We don’t just offer jobs; we cultivate artisanal paths. Join a team dedicated to design precision, unparalleled taste architectures, and professional expansion.
          </p>
          
        </div>
      </div>
    </section>
  );
}