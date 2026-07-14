"use client";

import { useState } from "react";

export default function EnquiryForm() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => setLoading(false), 1500);
  };

  return (
    <section id="enquiry" className="w-full py-24 bg-[#6e3568]/[0.02] select-none">
      <div className="max-w-[680px] mx-auto px-4 sm:px-6">
        <div className="bg-[#fcfdfe] border border-[#6e3568]/10 rounded-[2.5rem] p-8 sm:p-12 shadow-[0_20px_50px_rgba(110,53,104,0.05)]">
          <div className="text-center mb-10">
            <span className="text-[10px] font-bold uppercase tracking-widest text-[#b68cb2]">PARTNERSHIP INTAKE</span>
            <h2 className="font-serif text-2xl sm:text-3xl font-medium text-[#6e3568] mt-1">Franchise Application Form</h2>
            <p className="text-xs text-[#6e3568]/60 font-normal mt-1.5">Provide secure data checkpoints below for priority evaluation.</p>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input required type="text" placeholder="Full Name" className="w-full border border-[#6e3568]/10 rounded-xl p-3.5 text-xs bg-[#fcfdfe] text-[#6e3568] outline-none focus:border-[#6e3568] font-normal" />
              <input required type="email" placeholder="Email Address" className="w-full border border-[#6e3568]/10 rounded-xl p-3.5 text-xs bg-[#fcfdfe] text-[#6e3568] outline-none focus:border-[#6e3568] font-normal" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input required type="tel" placeholder="Phone Number" className="w-full border border-[#6e3568]/10 rounded-xl p-3.5 text-xs bg-[#fcfdfe] text-[#6e3568] outline-none focus:border-[#6e3568] font-normal" />
              <input required type="text" placeholder="Target City / State" className="w-full border border-[#6e3568]/10 rounded-xl p-3.5 text-xs bg-[#fcfdfe] text-[#6e3568] outline-none focus:border-[#6e3568] font-normal" />
            </div>
            
            <select required className="w-full border border-[#6e3568]/10 rounded-xl p-3.5 text-xs bg-[#fcfdfe] text-[#6e3568]/80 outline-none focus:border-[#6e3568] font-normal">
              <option value="">Select Capital Budget Group</option>
              <option value="kiosk">₹6.5 Lakhs (Kiosk Setup Format)</option>
              <option value="lounge">₹12 - 15 Lakhs (Cafe Setup Format)</option>
              <option value="master">Multi-Unit Territory Developer Path</option>
            </select>

            <textarea required placeholder="Briefly describe your business background or retail zone availability details..." rows={4} className="w-full border border-[#6e3568]/10 rounded-xl p-3.5 text-xs bg-[#fcfdfe] text-[#6e3568] outline-none focus:border-[#6e3568] font-normal resize-none" />
            
            <button type="submit" disabled={loading} className="w-full bg-[#6e3568] text-[#fcfdfe] py-4 rounded-xl text-xs font-bold uppercase tracking-wider hover:bg-[#6e3568]/95 transition-all duration-300">
              {loading ? "Processing Secure Nodes..." : "Submit Proposal Data"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}