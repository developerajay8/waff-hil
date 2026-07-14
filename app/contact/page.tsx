
  "use client";     




        
        import React, { useState } from "react";
        import { ChevronDown, Percent, DollarSign, Store } from "lucide-react";
export default function FranchisePage() {
  
        
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
    <>
     
      
      <div className="">
        
            <div  className="w-full ">
        
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
                              <option value="Under 25 Lakhs">Under 25 Lakhs</option>
                              <option value="25 - 50 Lakhs">25 - 50 Lakhs</option>
                              <option value="50 Lakhs +">50 Lakhs +</option>
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
      
      
      </div>

      
      {/* <ContactDetails /> */}
    </>
  );
}