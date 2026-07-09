"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function FranchiseFAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  const faqs = [
    { q: "What is the operational gross margin percentage?", a: "Waffhil setups typically register up to 65-70% gross margins due to centralized bulk supply structures." },
    { q: "Prior experience required in bakeries?", a: "No. Our automated grid technology parameters make cooking execution accessible to standard staff completely." }
  ];

  return (
    <section className="w-full py-24 bg-[#fcfdfe]">
      <div className="max-w-[768px] mx-auto px-4 sm:px-6">
        <h2 className="font-serif text-3xl font-extrabold text-[#6e3568] text-center mb-12">Frequently Asked Questions</h2>
        <div className="flex flex-col gap-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div key={idx} className="border border-[#6e3568]/10 rounded-xl overflow-hidden bg-[#fcfdfe]">
                <button 
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="w-full p-5 text-left flex items-center justify-between font-medium text-sm text-[#6e3568] bg-[#6e3568]/[0.01]"
                >
                  <span>{faq.q}</span>
                  <ChevronDown size={16} className={`text-[#b68cb2] transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
                </button>
                {isOpen && (
                  <div className="p-5 text-xs sm:text-sm text-[#6e3568]/80 font-light border-t border-[#6e3568]/5 bg-[#fcfdfe] animate-fade-in">
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