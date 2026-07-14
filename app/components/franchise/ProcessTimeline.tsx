"use client";

export default function ProcessTimeline() {
  const steps = [
    { count: "01", title: "Enquiry Submit", desc: "Fill our verified digital proposal form layer with target parameters." },
    { count: "02", title: "Commercial Call", desc: "Corporate financial validation dialogue to match structural expectations." },
    { count: "03", title: "Site Verification", desc: "Data backed analysis of target location footfall and premium catchments." },
    { count: "04", title: "MOU Execution", desc: "Legal signing of agreements and confirmation of territory allocation fee." },
    { count: "05", title: "Fit-Out Blueprint", desc: "Interior design planning based on our modern modular counter formats." },
    { count: "06", title: "Supply Deployment", desc: "Delivery of heavy automation machinery bakers and custom premixes." },
    { count: "07", title: "Staff Certification", desc: "Rigorous 7-day training cycles covering premium hygiene mechanics." },
    { count: "08", title: "Grand Launch", desc: "Hyperlocal marketing activation goes live for immediate viral conversions." }
  ];

  return (
    <section className="w-full py-24 bg-[#6e3568]/[0.01] border-y border-[#6e3568]/5 select-none">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12">
        <div className="text-center max-w-2xl mx-auto mb-20 flex flex-col gap-3">
          <span className="text-[10px] font-bold uppercase tracking-widest text-[#b68cb2]">THE ROADMAP</span>
          <h2 className="font-serif text-3xl sm:text-4xl font-medium text-[#6e3568] tracking-tight">Your Journey To Launch</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12 relative">
          {steps.map((st, idx) => (
            <div key={idx} className="flex flex-col gap-3 relative group">
              <span className="font-serif text-5xl font-black text-[#b68cb2]/15 group-hover:text-[#b68cb2]/30 transition-colors duration-300 tracking-tight select-none">
                {st.count}
              </span>
              <h3 className="font-sans text-sm font-bold text-[#6e3568] tracking-wide">{st.title}</h3>
              <p className="text-xs text-[#6e3568]/70 font-normal leading-relaxed">{st.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}