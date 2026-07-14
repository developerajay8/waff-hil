"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

export default function FAQ() {
  const [openId, setOpenId] = useState<number | null>(1);

  const faqs: FAQItem[] = [
    {
      id: 1,
      question: "Waff~hil premium waffles regular dessert outlets se kaise alag hain?",
      answer: "Waff~hil me hum density aur crispness ka ek unique gold-standard maintain karte hain. Hamara waffle base delivery ke baad bhi soggy nahi hota aur iski recipe exclusive premium ingredients ke saath design ki gayi hai jo har bite me lounge-style luxury taste deti hai.",
    },
    {
      id: 2,
      question: "Franchise ke liye FOFO aur FOCO models me kya difference hai?",
      answer: "FOFO (Franchise Owned, Franchise Operated) me store setup aur daily operations dono aap sambhalte hain. FOCO (Franchise Owned, Company Operated) me investment aapka hota hai lekin backend aur everyday store management hamari expert team run karti hai.",
    },
    {
      id: 3,
      question: "Waff~hil franchise start karne ke liye kitne investment ki zarurat hai?",
      answer: "Humne pure business operations ko lean aur highly profitable format me design kiya hai. Hamare franchise models 'Under 25 Lakhs' ki range se shuru ho jaate hain, jo kam space aur heavy dine-in overheads ke bina fast rollout allow karte hain.",
    },
    {
      id: 4,
      question: "Kya menu aur ingredient quality har outlet par consistent rehti hai?",
      answer: "Bilkul. Waff~hil rigid quality standards aur predictable margins par kaam karta hai. Hamare premium imports aur standard operating procedures (SOPs) yeh ensure karte hain ki Jaipur se lekar Ajmer tak, har customer ko same elite flavor aur signature presentation mile.",
    },
    {
      id: 5,
      question: "Franchise enquiry submit karne ke baad aage ka process kya hota hai?",
      answer: "Jaise hi aap details submit karte hain, hamari core team aapki preferred city ke location data ke saath aapse personally connect karegi. Hum market feasibility check karne ke baad onboarding operations aur store setup guidelines share karte hain.",
    },
  ];

  const toggleFAQ = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="w-full md:py-28 py-16 bg-[#fcfdfe] select-none">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
        
        {/* Left Side: Sticky Section Header (5 Columns) */}
        <div className="lg:col-span-5 flex flex-col gap-2 lg:sticky lg:top-28 h-fit">
          <div className="flex items-center gap-2">
            <div className="w-5 h-[1.5px] bg-[#9e6396]" />
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#9e6396]">
              QUESTIONS & ANSWERS
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-medium text-[#6e3568] tracking-tight leading-tight">
            Everything You <br className="hidden md:block" /> Need to Know
          </h2>
          <p className="text-[#6e3568]/70 font-normal text-xs sm:text-sm mt-2 max-w-sm leading-relaxed">
            Waff~hil brand, premium products, aur hamare lean business franchise model ke baare me kuch ahem baatein.
          </p>
        </div>

        {/* Right Side: Editorial Accordion List (7 Columns) */}
        <div className="lg:col-span-7 flex flex-col w-full">
          {faqs.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className="border-b border-[#6e3568]/10 last:border-none py-5 sm:py-6 transition-all duration-300"
              >
                <button
                  onClick={() => toggleFAQ(faq.id)}
                  className="w-full flex items-center justify-between text-left gap-4 group"
                  aria-expanded={isOpen}
                >
                  <span className={`font-serif text-base sm:text-lg font-bold transition-colors duration-300 ${
                    isOpen ? "text-[#6e3568]" : "text-[#6e3568]/80 group-hover:text-[#6e3568]"
                  }`}>
                    {faq.question}
                  </span>
                  <div className={`w-8 h-8 rounded-full border flex items-center justify-center shrink-0 transition-all duration-300 ${
                    isOpen 
                      ? "bg-[#6e3568] border-[#6e3568] text-[#fcfdfe] rotate-180" 
                      : "bg-transparent border-[#6e3568]/10 text-[#6e3568]"
                  }`}>
                    <ChevronDown size={14} />
                  </div>
                </button>

                {/* Animated Answer Area */}
                <div className={`grid transition-all duration-300 ease-in-out ${
                  isOpen ? "grid-rows-[1fr] opacity-100 mt-3" : "grid-rows-[0fr] opacity-0 mt-0"
                }`}>
                  <div className="overflow-hidden">
                    <p className="text-xs sm:text-sm text-[#6e3568]/70 font-normal leading-relaxed max-w-2xl">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}