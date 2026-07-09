"use client";

import { useState } from "react";

export default function EnquiryForm() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => setLoading(false), 1500); // Fast non-lag user validation simulation
  };

  return (
    <section id="enquiry" className="w-full py-24 bg-[#6e3568]/[0.02]">
      <div className="max-w-[640px] mx-auto px-4 sm:px-6 bg-[#fcfdfe] border border-[#6e3568]/5 rounded-[2.5rem] p-8 sm:p-12 shadow-xl">
        <div className="text-center mb-8">
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#6e3568]">Enquiry Form</h2>
          <p className="text-xs text-[#6e3568]/60 font-light mt-1">Provide your data checkpoints below.</p>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input required type="text" placeholder="Full Name" className="w-full border border-[#6e3568]/10 rounded-xl p-3.5 text-xs bg-[#fcfdfe] text-[#6e3568] outline-none focus:border-[#6e3568]" />
            <input required type="email" placeholder="Email Address" className="w-full border border-[#6e3568]/10 rounded-xl p-3.5 text-xs bg-[#fcfdfe] text-[#6e3568] outline-none focus:border-[#6e3568]" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input required type="tel" placeholder="Phone Number" className="w-full border border-[#6e3568]/10 rounded-xl p-3.5 text-xs bg-[#fcfdfe] text-[#6e3568] outline-none focus:border-[#6e3568]" />
            <input required type="text" placeholder="Target City" className="w-full border border-[#6e3568]/10 rounded-xl p-3.5 text-xs bg-[#fcfdfe] text-[#6e3568] outline-none focus:border-[#6e3568]" />
          </div>
          <textarea required placeholder="Available Investment Capital Details..." rows={4} className="w-full border border-[#6e3568]/10 rounded-xl p-3.5 text-xs bg-[#fcfdfe] text-[#6e3568] outline-none focus:border-[#6e3568]" />
          
          <button type="submit" disabled={loading} className="w-full bg-[#6e3568] text-[#fcfdfe] py-4 rounded-xl text-xs font-bold uppercase tracking-wider hover:bg-[#6e3568]/95 transition-all">
            {loading ? "Processing..." : "Submit Proposal Data"}
          </button>
        </form>
      </div>
    </section>
  );
}