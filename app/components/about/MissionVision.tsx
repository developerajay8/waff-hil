"use client";

import { Eye, Target } from "lucide-react";

export default function MissionVision() {
  return (
    <section className="w-full md:py-24 py-10 bg-[#6e3568]/[0.02] border-y border-[#6e3568]/5">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12">
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          
          {/* Mission Card node */}
          <div className="bg-[#fcfdfe] border border-[#6e3568]/5 p-8 sm:p-12 rounded-[2rem] shadow-[0_4px_30px_rgba(110,53,104,0.01)] flex flex-col gap-6 group hover:shadow-[0_15px_40px_rgba(110,53,104,0.04)] transition-all duration-300">
            <div className="w-14 h-14 rounded-2xl bg-[#6e3568]/5 flex items-center justify-center text-[#6e3568] group-hover:bg-[#6e3568] group-hover:text-[#fcfdfe] transition-all duration-300">
              <Target size={26} />
            </div>
            <div className="space-y-3">
              <h2 className="font-serif text-2xl font-bold text-[#6e3568]">Our Core Mission</h2>
              <p className="text-sm sm:text-base text-[#6e3568]/70 font-light leading-relaxed">
                To systematically engineer and serve premium-tier, pure vegetarian confectionaries that elevate the sensory standards of our consumers. We strive to maintain absolute material sustainability and operational transparency across every active kitchen layer.
              </p>
            </div>
          </div>

          {/* Vision Card node */}
          <div className="bg-[#fcfdfe] border border-[#6e3568]/5 p-8 sm:p-12 rounded-[2rem] shadow-[0_4px_30px_rgba(110,53,104,0.01)] flex flex-col gap-6 group hover:shadow-[0_15px_40px_rgba(110,53,104,0.04)] transition-all duration-300">
            <div className="w-14 h-14 rounded-2xl bg-[#6e3568]/5 flex items-center justify-center text-[#6e3568] group-hover:bg-[#6e3568] group-hover:text-[#fcfdfe] transition-all duration-300">
              <Eye size={26} />
            </div>
            <div className="space-y-3">
              <h2 className="font-serif text-2xl font-bold text-[#6e3568]">Our Long-Term Vision</h2>
              <p className="text-sm sm:text-base text-[#6e3568]/70 font-light leading-relaxed">
                To position Waffhil as the premier, gold-standard global benchmark in the boutique waffle and dessert industry franchise model. We aim to inspire entrepreneurial excellence and craft micro-communities bound by the love for luxury taste.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}