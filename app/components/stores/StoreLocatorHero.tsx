"use client";

import { Search, MapPin, Sparkles } from "lucide-react";

interface StoreLocatorHeroProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

export default function StoreLocatorHero({ searchQuery, setSearchQuery }: StoreLocatorHeroProps) {
  return (
    <section className="relative w-full min-h-[50vh] flex items-center bg-[#fcfdfe] pt-36 pb-16 overflow-hidden select-none">
      {/* Premium Luxury Background Accents */}
      <div className="absolute top-[-10%] left-[-5%] w-[45vw] h-[45vw] rounded-full bg-[#6e3568]/5 blur-[120px] pointer-events-none transform-gpu" />
      <div className="absolute bottom-[-15%] right-[-5%] w-[40vw] h-[40vw] rounded-full bg-[#b68cb2]/10 blur-[100px] pointer-events-none transform-gpu" />

      {/* Structural Minimalist Grid Pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#6e3568/[0.01]_1px,transparent_1px),linear-gradient(to_bottom,#6e3568/[0.01]_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

      <div className="max-w-[1440px] mx-auto w-full px-4 sm:px-8 lg:px-12 text-center relative z-10">
        <div className="max-w-3xl mx-auto flex flex-col items-center gap-6">
          
          <div className="inline-flex items-center gap-2 bg-[#6e3568]/5 border border-[#6e3568]/10 px-4 py-2 rounded-full text-[11px] font-bold uppercase tracking-widest text-[#6e3568]">
            <Sparkles size={12} className="text-[#b68cb2]" />
            <span>Waffhil Boutique Lounges</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-extrabold text-[#6e3568] leading-[1.15] tracking-tight">
            Locate a Dessert Lounge <br />
            <span className="text-[#b68cb2] italic font-normal">Near Your City</span>
          </h1>

          <p className="text-sm sm:text-base text-[#6e3568]/70 font-light max-w-xl leading-relaxed">
            Experience our fresh architectural spaces, curated music landscapes, and signature hot waffle preparation hubs.
          </p>

          {/* Luxury Search Input Frame */}
          <div className="w-full max-w-lg mt-4 relative group">
            <div className="absolute inset-0 bg-[#6e3568]/5 rounded-2xl blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            <div className="relative flex items-center bg-[#fcfdfe] border border-[#6e3568]/10 group-focus-within:border-[#6e3568] rounded-2xl px-5 py-4 shadow-[0_10px_30px_rgba(110,53,104,0.02)] transition-all duration-300">
              <Search size={18} className="text-[#6e3568]/40 mr-3 shrink-0" />
              <input 
                type="text" 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by city, region or pin code..." 
                className="w-full text-sm font-light text-[#6e3568] bg-transparent outline-none placeholder-[#6e3568]/40"
              />
              <MapPin size={18} className="text-[#b68cb2] ml-3 shrink-0" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}