"use client";

import { MapPin, Sparkles } from "lucide-react";

export default function StoresHero() {
  return (
    <section className="relative w-full min-h-[50vh] flex items-center bg-[#fcfdfe] pt-32 pb-16 overflow-hidden select-none">
      {/* Ambient Radial Mesh Drops */}
      <div className="absolute top-[-20%] right-[-15%] w-[50vw] h-[50vw] rounded-full bg-[#b68cb2]/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[40vw] h-[40vw] rounded-full bg-[#6e3568]/5 blur-[100px] pointer-events-none" />

      <div className="max-w-[1440px] mx-auto w-full px-4 sm:px-8 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <div className="space-y-6 text-left max-w-xl">
            <div className="inline-flex items-center gap-2 bg-[#6e3568]/5 border border-[#6e3568]/10 px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest text-[#6e3568]">
              <Sparkles size={11} className="text-[#b68cb2]" />
              <span>Expansion Network Active</span>
            </div>
            
            <h1 className="font-serif text-4xl sm:text-5xl font-medium text-[#6e3568] leading-[1.15] tracking-tight">
              Growing Across <br />
              <span className="text-[#b68cb2] italic font-normal">Rajasthan & Beyond</span>
            </h1>

            <div className="w-12 h-[2px] bg-[#b68cb2]" />

            <p className="text-xs sm:text-sm text-[#6e3568]/80 font-normal leading-relaxed">
              Waffhil is executing a systematic city-by-city expansion blueprint—starting with Rajasthan’s most opportunity-rich markets before scaling our premium dessert setups nationally.
            </p>
          </div>

          {/* Metric Showcase Card */}
          <div className="flex justify-start lg:justify-end">
            <div className="bg-[#fcfdfe] border border-[#6e3568]/10 p-8 sm:p-10 rounded-[2.5rem] shadow-[0_15px_40px_rgba(110,53,104,0.02)] max-w-sm w-full relative">
              <span className="font-serif text-7xl font-extrabold text-[#6e3568] tracking-tight block">10+</span>
              <span className="text-xs font-bold uppercase text-[#b68cb2] tracking-wider block mt-2">Locations & Counting</span>
              <p className="text-[11px] text-[#6e3568]/60 font-normal mt-2 leading-relaxed">
                Dominating the regional sweet landscape with high-margin premium dessert retail models.
              </p>
              <div className="absolute bottom-6 right-6 text-[#6e3568]/10">
                <MapPin size={48} strokeWidth={1} />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}