"use client";

import { CheckCircle2, Radio } from "lucide-react";

export default function WhereWeAreGrid() {
  const liveOutlets = [
    { city: "Jaipur", area: "Raja Park HQ" },
    { city: "Jaipur", area: "Jagatpura Node" },
    { city: "Jaipur", area: "City Center" },
    { city: "Ajmer", area: "Premium Outlet 1" },
    { city: "Ajmer", area: "Commercial Outlet 2" },
    { city: "Kishangarh", area: "Main Highway Cluster" }
  ];

  const comingSoon = [
    { city: "Jodhpur", zone: "High Footfall Catchment" },
    { city: "Bhilwara", zone: "Core Retail Zone" },
    { city: "Pushkar", zone: "Tourist Transit Hub" },
    { city: "Jaipur", zone: "New Micro Market Location" }
  ];

  return (
    <section className="w-full py-20 bg-[#fcfdfe] border-t border-[#6e3568]/5 select-none">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12">
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
          
          {/* Live Outlets Node Segment */}
          <div className="space-y-6">
            <div className="flex items-center gap-2 border-b border-[#6e3568]/10 pb-4">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <h3 className="font-serif text-2xl font-bold text-[#6e3568]">Live Outlets</h3>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {liveOutlets.map((outlet, idx) => (
                <div key={idx} className="bg-[#6e3568]/[0.01] border border-[#6e3568]/5 hover:border-[#6e3568]/20 p-4 rounded-2xl flex items-start gap-3 transition-all duration-300">
                  <CheckCircle2 size={16} className="text-[#b68cb2] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-[#6e3568]">{outlet.city}</h4>
                    <p className="text-[11px] text-[#6e3568]/60 font-normal mt-0.5">{outlet.area}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Coming Soon Node Segment */}
          <div className="space-y-6">
            <div className="flex items-center gap-2 border-b border-[#6e3568]/10 pb-4">
              <Radio size={16} className="text-[#b68cb2] animate-pulse" />
              <h3 className="font-serif text-2xl font-bold text-[#6e3568]">Coming Soon Locations</h3>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {comingSoon.map((outlet, idx) => (
                <div key={idx} className="bg-[#6e3568]/[0.01] border border-[#6e3568]/5 hover:border-[#b68cb2]/30 p-4 rounded-2xl flex items-start gap-3 transition-all duration-300">
                  <span className="text-[10px] font-bold bg-[#b68cb2]/10 text-[#b68cb2] px-2 py-0.5 rounded-md uppercase tracking-wider shrink-0 mt-0.5">Next</span>
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-[#6e3568]">{outlet.city}</h4>
                    <p className="text-[11px] text-[#6e3568]/60 font-normal mt-0.5">{outlet.zone}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}