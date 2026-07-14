"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Sparkles } from "lucide-react";

export default function HeroBanner() {
  return (
    <section className="relative w-full min-h-screen lg:h-screen flex items-center bg-[#fcfdfe] pt-24 lg:pt-0 overflow-hidden select-none">
      
      {/* Background Subtle Luxury Blobs (Hardware Accelerated) */}
      <div className="absolute top-[-10%] right-[-10%] w-[50vw] h-[50vw] rounded-full bg-[#6e3568]/5 blur-[120px] pointer-events-none transform-gpu" />
      <div className="absolute bottom-[-15%] left-[-10%] w-[40vw] h-[40vw] rounded-full bg-[#b68cb2]/10 blur-[100px] pointer-events-none transform-gpu" />

      <div className="max-w-[1440px] mx-auto w-full px-4 sm:px-8 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center h-full relative z-10 py-8 lg:py-0">
        
        {/* Left Typography Column */}
        <div className="lg:col-span-6 flex flex-col items-start gap-5 sm:gap-6 max-w-2xl lg:max-w-none order-1">
          <div className="inline-flex items-center gap-2 bg-[#6e3568]/5 border border-[#6e3568]/10 px-4 py-2 rounded-full text-[11px] font-bold uppercase tracking-widest text-[#6e3568]">
            <Sparkles size={12} className="text-[#b68cb2]" />
            <span>Premium Dessert Franchise · By Gen Z, For Gen Z</span>
          </div>
          
          <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl font-extrabold text-[#6e3568] leading-[1.15] lg:leading-[1.1] tracking-tight">
            Welcome to Waff~hill <br />
            The Heart of <span className="text-[#b68cb2] italic font-normal">Artisanal Waffles</span>
          </h1>
          
          <p className="text-sm sm:text-base md:text-lg text-[#6e3568]/80 font-light leading-relaxed max-w-xl">
           Waff~hill is a premium dessert franchise built by a group of friends who wanted Tier-1 indulgence without the Tier-1 price tag — or the pretense. 10+ outlets, and counting.
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto pt-2 sm:pt-4">
            <Link 
              href="/menu" 
              className="group bg-[#6e3568] text-[#fcfdfe] text-center px-8 py-4 rounded-full text-xs font-bold uppercase tracking-wider hover:bg-[#6e3568]/95 transition-all duration-300 shadow-xl shadow-[#6e3568]/10 flex items-center justify-center gap-2"
            >
              <span>Explore Premium Menu</span>
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
            <Link 
              href="/franchise" 
              className="border border-[#6e3568]/20 hover:border-[#6e3568] text-[#6e3568] text-center px-8 py-4 rounded-full text-xs font-bold uppercase tracking-wider hover:bg-[#6e3568]/5 transition-all duration-300 flex items-center justify-center"
            >
              Partner With Us
            </Link>
          </div>
        </div>

        {/* Right Composite Image Column with explicit Vertical Spacing Containment */}
        <div className="lg:col-span-6 w-full h-full flex items-center justify-center order-1 lg:order-2 py-4 sm:py-8 lg:py-16 xl:py-20">
          <div className="relative w-full aspect-square max-w-[340px] mt-7 sm:max-w-[440px] lg:max-w-none lg:h-[70vh] lg:aspect-[4/4] xl:h-[80vh]">
            
            {/* Soft background luxury shadows behind image frame */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#6e3568]/10 to-transparent rounded-[2.5rem] rotate-3 scale-95 pointer-events-none transform-gpu" />
            
            <div className="relative w-full h-full rounded-[2.5rem] overflow-hidden border border-[#6e3568]/10 shadow-[0_25px_60px_-15px_rgba(110,53,104,0.15)] bg-[#fcfdfe]">
              <Image
                src="/premiummangowaffle.png" 
                alt="Premium Mango Waffle Signature Display"
                fill
                priority
                sizes="(max-w-1024px) 100vw, 50vw"
                className="object-cover hover:scale-102 transition-transform duration-700 ease-out transform-gpu"
              />
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}