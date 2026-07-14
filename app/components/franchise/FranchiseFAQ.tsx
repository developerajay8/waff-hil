"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function FranchiseFAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  const faqs = [
    { q: "What is the operational gross margin percentage?", a: "Waff~hill setups typically register up to 65-70% gross margins due to centralized bulk supply structures and raw material pricing controls." },
    { q: "Is prior experience required in commercial bakeries?", a: "No. Our pre-formulated signature batter base tech and automated bakers remove dependency on professional culinary artists completely. Standard staff handles execution." },
    { q: "What is the timeline required from signing to live store launch?", a: "The entire onboarding lifecycle takes between 21 to 30 days depending on space location configuration and fit-out custom deployment." },
    { q: "How are regional raw inventory supplies managed?", a: "All basic premixes and branded packaging assets are shipped directly from our corporate central logistics terminal directly to your store node." }
  ];

  return (
    <section className="w-full py-24 bg-[#fcfdfe] select-none">
      <div className="max-w-[768px] mx-auto px-4 sm:px-6">
        <h2 className="font-serif text-3xl font-medium text-[#6e3568] text-center mb-12 tracking-tight">Frequently Asked Questions</h2>
        <div className="flex flex-col gap-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div key={idx} className="border border-[#6e3568]/10 rounded-2xl overflow-hidden bg-[#fcfdfe] transition-colors duration-300">
                <button 
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="w-full p-5 text-left flex items-center justify-between font-bold text-xs sm:text-sm text-[#6e3568] bg-[#6e3568]/[0.01]"
                >
                  <span>{faq.q}</span>
                  <ChevronDown size={14} className={`text-[#b68cb2] transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
                </button>
                {isOpen && (
                  <div className="p-5 pt-1 text-xs sm:text-sm text-[#6e3568]/70 font-normal border-t border-[#6e3568]/5 bg-[#fcfdfe]">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}