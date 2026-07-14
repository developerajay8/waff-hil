"use client";

import { CheckCircle2, HelpCircle } from "lucide-react";

export default function ChoosePath() {
  const models = [
    {
      title: "FOFO Model",
      subtitle: "Franchise Owned Franchise Operated",
      desc: "Ideal for hands-on entrepreneurs looking to manage operations completely while utilizing Waff~hil's supply line blueprints.",
      points: ["100% operational profit keeping", "Direct management setup control", "Centralized raw material support"],
    },
    {
      title: "FOCO Model",
      subtitle: "Franchise Owned Company Operated",
      desc: "Perfect for passive financial partners. You invest your capital, and Waff~hil's corporate team handles full operations.",
      points: ["Hassle-free passive returns", "Brand managed day-to-day staff", "Shared revenue pool system"],
    },
    {
      title: "4-Fold Exclusive",
      subtitle: "Territory / Master Cluster Node",
      desc: "For institutional investors looking to acquire exclusive district rights and manage multi-unit setups inside a region.",
      points: ["Complete sub-franchise rights", "Highest margin allocation", "Exclusive territorial authority"],
    },
  ];

  return (
    <section className="w-full py-24 bg-[#fcfdfe] select-none">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12">
        <div className="text-center max-w-2xl mx-auto mb-16 flex flex-col gap-3">
          <span className="text-[10px] font-bold uppercase tracking-widest text-[#b68cb2]">OPERATIONAL BLUEPRINTS</span>
          <h2 className="font-serif text-3xl sm:text-4xl font-medium text-[#6e3568] tracking-tight">Choose Your Franchise Path</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {models.map((m, idx) => (
            <div key={idx} className="bg-[#fcfdfe] border border-[#6e3568]/10 p-8 rounded-[2rem] flex flex-col justify-between group hover:border-[#6e3568]/30 transition-all duration-300 shadow-[0_4px_30px_rgba(110,53,104,0.01)] hover:shadow-[0_15px_40px_rgba(110,53,104,0.04)]">
              <div className="space-y-4">
                <div>
                  <h3 className="font-serif text-2xl font-bold text-[#6e3568]">{m.title}</h3>
                  <p className="text-[10px] font-bold text-[#b68cb2] uppercase tracking-wide mt-1">{m.subtitle}</p>
                </div>
                <p className="text-xs sm:text-sm text-[#6e3568]/70 font-normal leading-relaxed">{m.desc}</p>
                <div className="h-[1px] bg-[#6e3568]/5 my-4" />
                <ul className="space-y-3">
                  {m.points.map((p, pIdx) => (
                    <li key={pIdx} className="flex items-center gap-2.5 text-xs text-[#6e3568]/80 font-normal">
                      <CheckCircle2 size={14} className="text-[#b68cb2] shrink-0" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}