"use client";

import { Eye, Target } from "lucide-react";

export default function MissionVision() {
  return (
    <section className="w-full md:py-24 py-16 bg-[#6e3568]/[0.02] border-y border-[#6e3568]/5 select-none">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12">
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          
          {/* Mission Card Node */}
          <div className="bg-[#fcfdfe] border border-[#6e3568]/5 p-8 sm:p-10 rounded-[2rem] shadow-[0_4px_30px_rgba(110,53,104,0.01)] flex flex-col gap-6 group hover:shadow-[0_15px_40px_rgba(110,53,104,0.04)] transition-all duration-300">
            <div className="w-12 h-12 rounded-2xl bg-[#6e3568]/5 flex items-center justify-center text-[#6e3568] group-hover:bg-[#6e3568] group-hover:text-[#fcfdfe] transition-all duration-300">
              <Target size={20} />
            </div>
            <div className="space-y-2">
              <span className="text-[9px] font-bold uppercase tracking-widest text-[#9e6396]">OUR PURPOSE</span>
              <h2 className="font-serif text-xl font-bold text-[#6e3568]">Mission</h2>
              <p className="text-xs sm:text-sm text-[#6e3568]/70 font-normal leading-relaxed">
                To make premium desserts accessible, affordable and operationally simple for franchise partners across India.
              </p>
            </div>
          </div>

          {/* Vision Card Node */}
          <div className="bg-[#fcfdfe] border border-[#6e3568]/5 p-8 sm:p-10 rounded-[2rem] shadow-[0_4px_30px_rgba(110,53,104,0.01)] flex flex-col gap-6 group hover:shadow-[0_15px_40px_rgba(110,53,104,0.04)] transition-all duration-300">
            <div className="w-12 h-12 rounded-2xl bg-[#6e3568]/5 flex items-center justify-center text-[#6e3568] group-hover:bg-[#6e3568] group-hover:text-[#fcfdfe] transition-all duration-300">
              <Eye size={20} />
            </div>
            <div className="space-y-2">
              <span className="text-[9px] font-bold uppercase tracking-widest text-[#9e6396]">OUR TARGET</span>
              <h2 className="font-serif text-xl font-bold text-[#6e3568]">Vision</h2>
              <p className="text-xs sm:text-sm text-[#6e3568]/70 font-normal leading-relaxed">
                To become India's most loved Gen-Z dessert brand — one city at a time.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}