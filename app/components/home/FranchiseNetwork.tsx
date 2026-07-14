"use client";

import React, { useState } from "react";
import { ChevronDown, Percent, DollarSign, Store } from "lucide-react";
import FAQ from "./Faq";

export default function FranchiseNetwork() {
  const locations = {
    live: ["Raja Park, Jaipur", "Jagatpura, Jaipur", "Ajmer - Outlet 1", "Ajmer - Outlet 2", "Kishangarh"],
    soon: ["Pushkar", "Bhilwara", "Jodhpur", "Jaipur - 3rd Outlet", "Ajmer - 3rd Outlet"],
    radar: ["Udaipur", "Kota"]
  };

  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    city: "",
    model: "FOFO",
    investment: "Under 25 Lakhs"
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Enquiry Submitted:", formData);
  };

  return (
    <div  className="w-full bg-[#fcfdfe] select-none">
      
      {/* SECTION 1: OUTLET TRACKER (WHERE WE ARE) */}
      <section className="w-full md:py-24 py-16 max-w-[1440px] mx-auto px-4 sm:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col gap-2 mb-16 max-w-3xl">
          <div className="flex items-center gap-2">
            <div className="w-5 h-[1.5px] bg-[#9e6396]" />
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#9e6396]">
              WHERE WE ARE
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-medium text-[#6e3568] tracking-tight leading-tight">
            10+ Outlets, and This is Only the Start
          </h2>
          <p className="text-[#6e3568]/70 font-normal text-xs sm:text-sm mt-1">
            5 live today, 5 opening soon, and two more cities already on the radar.
          </p>
        </div>

        {/* 3-Column Dynamic Location Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          
          {/* Column 1: Live Now */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2 pb-2 border-b border-[#6e3568]/10">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
              <h3 className="text-[10px] font-bold uppercase tracking-widest text-[#6e3568]">LIVE NOW</h3>
            </div>
            <div className="flex flex-col gap-2">
              {locations.live.map((loc, i) => (
                <div key={i} className="flex items-center justify-between p-4 rounded-2xl border border-[#6e3568]/5 bg-[#f3ebf6]/10 hover:border-[#6e3568]/20 transition-all duration-300">
                  <span className="text-xs font-semibold text-[#6e3568]">{loc}</span>
                  <span className="text-[9px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-md bg-green-50 text-green-700 border border-green-200/50">LIVE</span>
                </div>
              ))}
            </div>
          </div>

          {/* Column 2: Opening Soon */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2 pb-2 border-b border-[#6e3568]/10">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
              <h3 className="text-[10px] font-bold uppercase tracking-widest text-[#6e3568]">OPENING SOON</h3>
            </div>
            <div className="flex flex-col gap-2">
              {locations.soon.map((loc, i) => (
                <div key={i} className="flex items-center justify-between p-4 rounded-2xl border border-[#6e3568]/5 bg-[#f3ebf6]/10 hover:border-[#6e3568]/20 transition-all duration-300">
                  <span className="text-xs font-semibold text-[#6e3568]">{loc}</span>
                  <span className="text-[9px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-md bg-amber-50 text-amber-700 border border-amber-200/50">SOON</span>
                </div>
              ))}
            </div>
          </div>

          {/* Column 3: On The Radar */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2 pb-2 border-b border-[#6e3568]/10">
              <span className="w-1.5 h-1.5 rounded-full bg-purple-500" />
              <h3 className="text-[10px] font-bold uppercase tracking-widest text-[#6e3568]">ON THE RADAR</h3>
            </div>
            <div className="flex flex-col gap-2">
              {locations.radar.map((loc, i) => (
                <div key={i} className="flex items-center justify-between p-4 rounded-2xl border border-[#6e3568]/5 bg-[#f3ebf6]/10 hover:border-[#6e3568]/20 transition-all duration-300">
                  <span className="text-xs font-semibold text-[#6e3568]">{loc}</span>
                  <span className="text-[9px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-md bg-purple-50 text-purple-700 border border-purple-200/50">FUTURE</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      <FAQ/>

      {/* SECTION 2: FRANCHISE LEAD FORM (BRING THE VIBE) */}
      <section id="contact" style={{ backgroundColor: "#6e3568" }}
  className="w-full text-white md:py-24 py-16">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Side Info Area (5 Columns) */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <div className="w-5 h-[1.5px] bg-[#b68cb2]" />
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#b68cb2]">
                  FRANCHISE WITH US
                </span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight leading-tight">
                Bring the Vibe to Your City
              </h2>
              <p className="text-[#fcfdfe]/70 font-normal text-xs sm:text-sm mt-1 max-w-md leading-relaxed">
                A premium franchise model built for fast, lean rollout — not a heavy dine-in commitment.
              </p>
            </div>

            {/* Perks Feature Items */}
            <div className="flex flex-col gap-6 max-w-md">
              <div className="flex gap-4 items-start">
                <div className="w-8 h-8 rounded-xl bg-[#fcfdfe]/5 border border-[#fcfdfe]/10 flex items-center justify-center text-[#b68cb2] shrink-0 mt-0.5">
                  <Percent size={14} />
                </div>
                <div>
                  <h4 className="text-xs font-bold tracking-wide">25–30% margins built in</h4>
                  <p className="text-[11px] text-[#fcfdfe]/60 font-normal mt-0.5 leading-relaxed">A lean, tested menu engineered for consistent profitability.</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-8 h-8 rounded-xl bg-[#fcfdfe]/5 border border-[#fcfdfe]/10 flex items-center justify-center text-[#b68cb2] shrink-0 mt-0.5">
                  <DollarSign size={14} />
                </div>
                <div>
                  <h4 className="text-xs font-bold tracking-wide">Fixed monthly royalty</h4>
                  <p className="text-[11px] text-[#fcfdfe]/60 font-normal mt-0.5 leading-relaxed">Predictable, flat — no revenue-share confusion.</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-8 h-8 rounded-xl bg-[#fcfdfe]/5 border border-[#fcfdfe]/10 flex items-center justify-center text-[#b68cb2] shrink-0 mt-0.5">
                  <Store size={14} />
                </div>
                <div>
                  <h4 className="text-xs font-bold tracking-wide">Lean store format</h4>
                  <p className="text-[11px] text-[#fcfdfe]/60 font-normal mt-0.5 leading-relaxed">Launch faster with a smaller footprint than a full dine-in restaurant.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Premium Card Form (7 Columns) */}
          <div className="lg:col-span-7 w-full flex justify-center lg:justify-end">
            <div className="w-full max-w-[520px] bg-[#fcfdfe] text-[#6e3568] p-8 sm:p-10 rounded-[2.5rem] shadow-[0_30px_70px_rgba(0,0,0,0.25)] border border-[#6e3568]/5">
              
              <div className="mb-6">
                <h3 className="font-serif text-xl font-bold tracking-tight">Get Franchise Details</h3>
                <p className="text-[11px] text-[#6e3568]/60 font-normal mt-0.5">Fill this in — our team will personally connect with you.</p>
              </div>

              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                {/* Full Name */}
                <div className="flex flex-col gap-1">
                  <label className="text-[10px] font-bold uppercase tracking-wider text-[#6e3568]/80">Full Name</label>
                  <input 
                    type="text" 
                    placeholder="Your name"
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                    className="w-full px-4 py-3 rounded-xl border border-[#6e3568]/10 bg-[#f3ebf6]/20 font-medium text-xs focus:outline-none focus:border-[#6e3568] transition-colors"
                  />
                </div>

                {/* Phone Number */}
                <div className="flex flex-col gap-1">
                  <label className="text-[10px] font-bold uppercase tracking-wider text-[#6e3568]/80">Phone Number</label>
                  <input 
                    type="tel" 
                    placeholder="+91 "
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="w-full px-4 py-3 rounded-xl border border-[#6e3568]/10 bg-[#f3ebf6]/20 font-medium text-xs focus:outline-none focus:border-[#6e3568] transition-colors"
                  />
                </div>

                {/* City Exploring */}
                <div className="flex flex-col gap-1">
                  <label className="text-[10px] font-bold uppercase tracking-wider text-[#6e3568]/80">City You're Exploring</label>
                  <input 
                    type="text" 
                    placeholder="e.g. Udaipur"
                    required
                    value={formData.city}
                    onChange={(e) => setFormData({...formData, city: e.target.value})}
                    className="w-full px-4 py-3 rounded-xl border border-[#6e3568]/10 bg-[#f3ebf6]/20 font-medium text-xs focus:outline-none focus:border-[#6e3568] transition-colors"
                  />
                </div>

                {/* Model Selection Dropdown */}
                <div className="flex flex-col gap-1 relative">
                  <label className="text-[10px] font-bold uppercase tracking-wider text-[#6e3568]/80">Which Model Interests You</label>
                  <div className="relative">
                    <select 
                      value={formData.model}
                      onChange={(e) => setFormData({...formData, model: e.target.value})}
                      className="w-full appearance-none px-4 py-3 rounded-xl border border-[#6e3568]/10 bg-[#f3ebf6]/20 font-medium text-xs focus:outline-none focus:border-[#6e3568] cursor-pointer transition-colors text-[#6e3568]"
                    >
                      <option value="FOFO">FOFO (Franchise Owned, Franchise Operated)</option>
                      <option value="FOCO">FOCO (Franchise Owned, Company Operated)</option>
                      <option value="Master">Master Franchise</option>
                    </select>
                    <ChevronDown size={14} className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-[#6e3568]/60" />
                  </div>
                </div>

                {/* Investment Range Dropdown */}
                <div className="flex flex-col gap-1 relative">
                  <label className="text-[10px] font-bold uppercase tracking-wider text-[#6e3568]/80">Investment Range In Mind</label>
                  <div className="relative">
                    <select 
                      value={formData.investment}
                      onChange={(e) => setFormData({...formData, investment: e.target.value})}
                      className="w-full appearance-none px-4 py-3 rounded-xl border border-[#6e3568]/10 bg-[#f3ebf6]/20 font-medium text-xs focus:outline-none focus:border-[#6e3568] cursor-pointer transition-colors text-[#6e3568]"
                    >
                      <option value="Under 6.5 Lakhs">Under 6.5 Lakhs</option>
                      <option value="8 - 10 Lakhs">8 - 10 Lakhs</option>
                      <option value="12 - 15 Lakhs ">12 - 15 Lakhs</option>
                      <option value=" 25 Lakhs +">25 Lakhs +</option>

                    </select>
                    <ChevronDown size={14} className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-[#6e3568]/60" />
                  </div>
                </div>

                {/* Submit Button */}
                <button 
                  type="submit" 
                  className="w-full mt-3 bg-[#6e3568] hover:bg-[#54284f] text-[#fcfdfe] font-bold text-xs tracking-wider uppercase py-4 rounded-full shadow-md transition-all duration-300 transform active:scale-[0.98]"
                >
                  Submit Enquiry
                </button>
              </form>

            </div>
          </div>

        </div>
      </section>

    </div>
  );
}