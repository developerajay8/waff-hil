"use client";

import { Building2, Landmark, Target, Users2 } from "lucide-react";

export default function ExpansionBlueprint() {
  const strategies = [
    {
      icon: <Building2 size={18} />,
      title: "Optimized Real Estate Costs",
      desc: "Lower square footage commercial rentals in smaller cities inherently secure strong unit economics and rapid breakeven points for franchise partners."
    },
    {
      icon: <Target size={18} />,
      title: "First-Mover Market Advantage",
      desc: "Tier 2 and Tier 3 markets remain highly under-penetrated by high-end premium luxury dessert profiles, giving Waff~hil a massive brand recall edge."
    },
    {
      icon: <Users2 size={18} />,
      title: "Aspirational Consumer Base",
      desc: "Rapidly rising lifestyle spending capacity among Gen-Z and millennial demographics in smaller hubs yields consistent luxury food item traction."
    },
    {
      icon: <Landmark size={18} />,
      title: "Unrivaled Brand Loyalty",
      desc: "Minimal regional alternative clutter means significantly higher long-term customer retention, organic word-of-mouth growth, and lower acquisition spending."
    }
  ];

  return (
    <section className="w-full py-24 bg-[#6e3568]/[0.02] border-y border-[#6e3568]/5 select-none">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12">
        
        <div className="text-center max-w-2xl mx-auto mb-16 flex flex-col gap-3">
          <span className="text-[10px] font-bold uppercase tracking-widest text-[#b68cb2]">STRATEGIC DEPLOYMENT</span>
          <h2 className="font-serif text-3xl sm:text-4xl font-medium text-[#6e3568] tracking-tight">Why Tier 2 & Tier 3 Cities?</h2>
          <p className="text-xs text-[#6e3568]/60">Rajasthan First. India Next. Building localized dessert infrastructure engineered for sustained high margins.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {strategies.map((strat, idx) => (
            <div key={idx} className="bg-[#fcfdfe] border border-[#6e3568]/5 p-6 rounded-[2rem] flex flex-col gap-4 shadow-[0_4px_30px_rgba(110,53,104,0.01)] hover:shadow-[0_12px_35px_rgba(110,53,104,0.04)] hover:border-[#6e3568]/20 transition-all duration-300">
              <div className="w-9 h-9 rounded-xl bg-[#6e3568]/5 flex items-center justify-center text-[#6e3568]">
                {strat.icon}
              </div>
              <div className="space-y-1">
                <h4 className="text-xs sm:text-sm font-bold text-[#6e3568] tracking-wide">{strat.title}</h4>
                <p className="text-xs text-[#6e3568]/70 font-normal leading-relaxed">{strat.desc}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}