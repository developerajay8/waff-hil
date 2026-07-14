"use client";

import { ShieldCheck, UserCheck } from "lucide-react";

export default function ResponsibilityMatrix() {
  const brandDuties = [
    "Supply of pre-formulated central waffle batter base mixtures.",
    "Pan-India brand level marketing and continuous menu engineering.",
    "Comprehensive kitchen staff training modules and operational audits.",
    "Integrated POS inventory management tech software access."
  ];

  const partnerDuties = [
    "Providing and managing local store commercial estate leases.",
    "Managing local staff payrolls, utilities, and daily operations.",
    "Ensuring strict compliance with premium hygiene benchmarks.",
    "Execution of hyper-local visual storefront mechanics."
  ];

  return (
    <section className="w-full py-24 bg-[#fcfdfe] select-none">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12">
        <div className="text-center max-w-2xl mx-auto mb-16 flex flex-col gap-3">
          <span className="text-[10px] font-bold uppercase tracking-widest text-[#b68cb2]">OPERATIONAL JURISDICTION</span>
          <h2 className="font-serif text-3xl sm:text-4xl font-medium text-[#6e3568] tracking-tight">Who Does What Matrix</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {/* Waffhil Corporate Side */}
          <div className="bg-[#fcfdfe] border border-[#6e3568]/10 p-8 rounded-[2rem]">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-[#6e3568]/5 flex items-center justify-center text-[#6e3568]">
                <ShieldCheck size={20} />
              </div>
              <div>
                <h3 className="font-serif text-xl font-bold text-[#6e3568]">Waff~hill Corporate</h3>
                <p className="text-[10px] font-bold uppercase text-[#b68cb2] tracking-wide mt-0.5">Core Brand Responsibilities</p>
              </div>
            </div>
            <ul className="space-y-4">
              {brandDuties.map((d, i) => (
                <li key={i} className="flex items-start gap-3 text-xs sm:text-sm text-[#6e3568]/80 font-normal leading-relaxed">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#b68cb2] mt-2 shrink-0" />
                  <span>{d}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Franchise Partner Side */}
          <div className="bg-[#fcfdfe] border border-[#6e3568]/10 p-8 rounded-[2rem]">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-[#6e3568]/5 flex items-center justify-center text-[#6e3568]">
                <UserCheck size={20} />
              </div>
              <div>
                <h3 className="font-serif text-xl font-bold text-[#6e3568]">Franchise Partner</h3>
                <p className="text-[10px] font-bold uppercase text-[#b68cb2] tracking-wide mt-0.5">Core Ground Duties</p>
              </div>
            </div>
            <ul className="space-y-4">
              {partnerDuties.map((d, i) => (
                <li key={i} className="flex items-start gap-3 text-xs sm:text-sm text-[#6e3568]/80 font-normal leading-relaxed">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#6e3568] mt-2 shrink-0" />
                  <span>{d}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}