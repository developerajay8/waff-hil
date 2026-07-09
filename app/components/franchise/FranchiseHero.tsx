"use client";

import { Sparkles, ArrowDown } from "lucide-react";

export default function FranchiseHero() {
  const scrollToEnquiry = () => {
    document.getElementById("enquiry")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative w-full min-h-[75vh] lg:min-h-[85vh] flex items-center bg-[#fcfdfe] pt-32 pb-16 overflow-hidden select-none">
      <div className="absolute top-[-25%] right-[-15%] w-[55vw] h-[55vw] rounded-full bg-[#6e3568]/5 blur-[140px] pointer-events-none transform-gpu" />
      
      <div className="max-w-[1440px] mx-auto w-full px-4 sm:px-8 lg:px-12 text-center relative z-10">
        <div className="max-w-4xl mx-auto flex flex-col items-center gap-6">
          
          <div className="inline-flex items-center gap-2 bg-[#6e3568]/5 border border-[#6e3568]/10 px-4 py-2 rounded-full text-[11px] font-bold uppercase tracking-widest text-[#6e3568]">
            <Sparkles size={12} className="text-[#b68cb2]" />
            <span>Premium QSR Investment Opportunity</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-extrabold text-[#6e3568] leading-[1.15] tracking-tight">
            Own India’s Most Lucrative <br />
            <span className="text-[#b68cb2] italic font-normal">Luxury Dessert</span> Franchise
          </h1>

          <div className="w-16 h-[2px] bg-[#b68cb2] my-2" />

          <p className="text-base sm:text-lg text-[#6e3568]/80 font-light leading-relaxed max-w-2xl">
            Join a network engineered for high-margin ROI, absolute supply chain efficiency, and unmatched customer brand equity in the premium dessert space.
          </p>

          <div className="pt-6">
            <button 
              onClick={scrollToEnquiry}
              className="group bg-[#6e3568] text-[#fcfdfe] px-8 py-4 rounded-full text-xs font-bold uppercase tracking-wider hover:bg-[#6e3568]/95 transition-all duration-300 shadow-xl shadow-[#6e3568]/10 flex items-center gap-2"
            >
              <span>Begin Application Process</span>
              <ArrowDown size={14} className="group-hover:translate-y-0.5 transition-transform" />
            </button>
          </div>
          
        </div>
      </div>
    </section>
  );
}