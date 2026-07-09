"use client";

import { Sparkles } from "lucide-react";

export default function MenuHero() {
  return (
    <section className="relative w-full min-h-[45vh] flex items-center bg-[#fcfdfe] pt-32 pb-12 overflow-hidden select-none">
      {/* Soft Dessert Abstract Ambient Tints */}
      <div className="absolute top-[-20%] right-[-10%] w-[45vw] h-[45vw] rounded-full bg-[#b68cb2]/10 blur-[120px] pointer-events-none transform-gpu" />
      <div className="absolute bottom-[-20%] left-[-15%] w-[40vw] h-[40vw] rounded-full bg-[#6e3568]/5 blur-[100px] pointer-events-none transform-gpu" />

      <div className="max-w-[1440px] mx-auto w-full px-4 sm:px-8 lg:px-12 text-center relative z-10">
        <div className="max-w-2xl mx-auto flex flex-col items-center gap-4">
          
          <div className="inline-flex items-center gap-2 bg-[#6e3568]/5 border border-[#6e3568]/10 px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest text-[#6e3568]">
            <Sparkles size={12} className="text-[#b68cb2]" />
            <span>The Confectionery Collection</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl font-extrabold text-[#6e3568] tracking-tight">
            Our Premium <span className="text-[#b68cb2] italic font-normal">Menu</span>
          </h1>

          <div className="w-12 h-[1px] bg-[#b68cb2]/50 my-2" />

          <p className="text-sm sm:text-base text-[#6e3568]/70 font-light leading-relaxed">
            Every master creation is strictly prepared using authentic ingredients, premium cocoa profiles, and fresh signature toppings tailored for an exceptional tasting experience.
          </p>
          
        </div>
      </div>
    </section>
  );
}