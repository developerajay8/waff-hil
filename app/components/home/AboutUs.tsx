"use client";

import { Sparkles, Calendar, TrendingUp, Award, Target } from "lucide-react";

export default function AboutUs() {
  const stats = [
    { value: "5", label: "Live Outlets", color: "text-[#eab308]" },
    { value: "5", label: "Opening Soon", color: "text-[#eab308]" },
    { value: "10+", label: "Total Footprint", color: "text-[#eab308]" },
    { value: "2024", label: "Est. Year", color: "text-[#eab308]", prefix: "" },
    { value: "100+", label: "Target by 2028", color: "text-[#eab308]" },
  ];

  return (
    <section className="relative w-full py-24 bg-[#fcfdfe] overflow-hidden select-none">
      {/* Premium Background Ambient Grid & Animated Blobs */}
      <div className="absolute inset-0 bg-[radial-gradient(#6e3568_1px,transparent_1px)] [background-size:32px_32px] opacity-[0.02] pointer-events-none" />
      <div className="absolute top-1/4 left-[-10%] w-[50vw] h-[50vw] rounded-full bg-[#b68cb2]/5 blur-[130px] pointer-events-none animate-[pulse_8s_ease-in-out_infinite]" />
      <div className="absolute bottom-1/4 right-[-10%] w-[45vw] h-[45vw] rounded-full bg-[#6e3568]/5 blur-[120px] pointer-events-none animate-[pulse_10s_ease-in-out_infinite]" />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 relative z-10">
        
        {/* Main Pitch Layer */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-20">
          
          {/* Left Text Column */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 bg-[#6e3568]/5 border border-[#6e3568]/10 px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest text-[#6e3568]">
              <Sparkles size={11} className="text-[#b68cb2]" />
              <span>Our Identity & Genesis</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-[#6e3568] leading-[1.15] tracking-tight">
              Built by <span className="text-[#b68cb2] italic font-normal">Gen-Z</span>, <br />
              Engineered for Sustainable Scale.
            </h2>

            <div className="w-16 h-[2px] bg-[#b68cb2]" />

            <div className="space-y-4 text-xs sm:text-sm text-[#6e3568]/80 font-normal leading-relaxed max-w-2xl">
              <p>
                Waffhil was born out of a simple realization: the premium dessert space needed disruption. Founded by Harshit Sharma with a clear visionary mandate, we intentionally designed an ecosystem that bridges high-end confectionery experiences with bulletproof franchise unit economics.
              </p>
              <p>
                We engineered our central raw material logistics and automated kitchen systems to completely bypass dependence on specialized gourmet chefs. This makes it a plug-and-play architecture built for modern entrepreneurs who value high recurring retail margins, predictable systems, and profound customer recall.
              </p>
            </div>
          </div>

          {/* Right Concept Blueprint Column */}
          <div className="lg:col-span-5 bg-[#6e3568]/[0.01] border border-[#6e3568]/5 rounded-[2.5rem] p-8 sm:p-10 space-y-6 relative hover:shadow-[0_15px_40px_rgba(110,53,104,0.03)] transition-all duration-500">
            <h3 className="font-serif text-xl font-bold text-[#6e3568]">The Waffhil Edge</h3>
            
            <div className="space-y-4">
              <div className="flex gap-4 items-start">
                <div className="w-8 h-8 rounded-xl bg-[#6e3568]/5 flex items-center justify-center text-[#6e3568] shrink-0">
                  <Calendar size={15} />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-[#6e3568] uppercase tracking-wide">Inception Era</h4>
                  <p className="text-[11px] text-[#6e3568]/70 mt-0.5">Established in 2024 to disrupt Tier-2 and Tier-3 premium dessert market caps.</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-8 h-8 rounded-xl bg-[#6e3568]/5 flex items-center justify-center text-[#6e3568] shrink-0">
                  <Award size={15} />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-[#6e3568] uppercase tracking-wide">Zero Chef Dependency</h4>
                  <p className="text-[11px] text-[#6e3568]/70 mt-0.5">Pre-formulated premium signature mix tech guarantees uniform product execution parameters.</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-8 h-8 rounded-xl bg-[#6e3568]/5 flex items-center justify-center text-[#6e3568] shrink-0">
                  <Target size={15} />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-[#6e3568] uppercase tracking-wide">Hyperlocal Traction</h4>
                  <p className="text-[11px] text-[#6e3568]/70 mt-0.5">High visual product layouts meticulously structured for maximum organic Gen-Z social conversions.</p>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Dynamic Image Stats Matrix Block */}
        <div className="w-full bg-[#6e3568] rounded-[2rem] sm:rounded-[2.5rem] p-6 sm:p-8 lg:p-10 shadow-[0_20px_50px_rgba(110,53,104,0.15)] relative overflow-hidden">
          {/* Subtle graphic flare inside bar */}
          <div className="absolute top-0 right-0 w-[30%] h-full bg-[linear-gradient(to_right,transparent,rgba(255,255,255,0.03))] pointer-events-none transform skew-x-12" />
          
          <div className="grid grid-cols-2 md:grid-cols-5 gap-y-8 gap-x-4 items-center justify-center text-center divide-x-0 md:divide-x divide-white/10">
            {stats.map((stat, index) => (
              <div key={index} className="flex flex-col items-center justify-center px-2 space-y-1 group">
                <div className="flex items-baseline justify-center">
                  {stat.label.includes("Est.") && (
                    <span className="font-serif text-sm font-bold text-[#fcfdfe]/60 mr-1 select-none">Est.</span>
                  )}
                  {stat.label.includes("Target") && (
                    <span className="font-serif text-xs font-bold text-[#fcfdfe]/60 mr-1 select-none">Target</span>
                  )}
                  <span className={`font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold ${stat.color} tracking-tight group-hover:scale-105 transition-transform duration-300`}>
                    {stat.value}
                  </span>
                </div>
                <span className="text-[10px] sm:text-[11px] font-bold text-[#fcfdfe]/80 uppercase tracking-widest whitespace-nowrap">
                  {stat.label.replace("Est. ", "").replace("Target ", "")}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}