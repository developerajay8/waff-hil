"use client";

import { DollarSign, ShieldCheck, UserCheck, Star, Sparkles, TrendingUp } from "lucide-react";

interface BusinessFeature {
  icon: React.ReactNode;
  title: string;
  desc: string;
}

export default function BusinessEngineering() {
  const features: BusinessFeature[] = [
    {
      icon: <DollarSign size={18} className="text-[#6e3568]" />,
      title: "Affordable Investment",
      desc: "Start with ₹6.5 Lakhs — engineered to be one of the most accessible premium dessert franchise models across India.",
    },
    {
      icon: <ShieldCheck size={18} className="text-[#6e3568]" />,
      title: "Standardized Operations",
      desc: "Fully documented operational SOPs, master recipes and structured vendor guidance. Zero guesswork, pure execution.",
    },
    {
      icon: <UserCheck size={18} className="text-[#6e3568]" />,
      title: "Chef-Light Model",
      desc: "Cleverly designed for minimal skilled labor. Any motivated internal team can successfully run a standard Waff~hill outlet.",
    },
    {
      icon: <Star size={18} className="text-[#6e3568]" />,
      title: "High-Repeat Products",
      desc: "Dessert profiles that customers crave daily. Consistent return footfall delivers highly predictable organic revenues.",
    },
    {
      icon: <Sparkles size={18} className="text-[#6e3568]" />,
      title: "Marketing & Launch Support",
      desc: "Central brand asset distribution, premium digital content templates, and dedicated localized launch guidance are built right in.",
    },
    {
      icon: <TrendingUp size={18} className="text-[#6e3568]" />,
      title: "Growing Brand Presence",
      desc: "10+ current active locations across Rajasthan with a clean, strategic operational roadmap aligned for pan-India presence.",
    },
  ];

  return (
    <section className="w-full md:py-24 py-16 bg-[#fcfdfe] select-none">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8">
        
        {/* Modern Minimal Header Layout */}
        <div className="flex flex-col gap-2 mb-16 max-w-4xl">
          <div className="flex items-center gap-2">
            <div className="w-5 h-[1.5px] bg-[#9e6396]" />
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#9e6396]">
              OUR EDGE
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-medium text-[#6e3568] tracking-tight leading-tight">
            Why Traditional F&B Fails & Where Waff~hill Wins
          </h2>
        </div>

        {/* Clean Grid Framework */}
        <div className="relative w-full rounded-[2.5rem] border border-[#6e3568]/5 bg-[#fcfdfe] overflow-hidden shadow-[0_15px_45px_rgba(110,53,104,0.02)]">
          
          {/* Top Row Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-[#6e3568]/5">
            {features.slice(0, 3).map((item, idx) => (
              <div 
                key={`top-${idx}`} 
                className="p-8 sm:p-10 flex flex-col gap-5 hover:bg-[#f3ebf6]/10 transition-colors duration-300"
              >
                <div className="w-9 h-9 flex items-center justify-center rounded-xl bg-[#f3ebf6]/40">
                  {item.icon}
                </div>
                <div className="flex flex-col gap-1.5">
                  <h3 className="font-serif text-base font-bold text-[#6e3568] tracking-wide">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#6e3568]/70 font-normal leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Desktop Border Separator */}
          <div className="hidden md:block w-full h-[1px] bg-[#6e3568]/5" />

          {/* Bottom Row Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-[#6e3568]/5">
            {features.slice(3, 6).map((item, idx) => (
              <div 
                key={`bottom-${idx}`} 
                className="p-8 sm:p-10 flex flex-col gap-5 hover:bg-[#f3ebf6]/10 transition-colors duration-300"
              >
                <div className="w-9 h-9 flex items-center justify-center rounded-xl bg-[#f3ebf6]/40">
                  {item.icon}
                </div>
                <div className="flex flex-col gap-1.5">
                  <h3 className="font-serif text-base font-bold text-[#6e3568] tracking-wide">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#6e3568]/70 font-normal leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}