export default function ProcessTimeline() {
  const steps = [
    { count: "01", title: "Submit Form", desc: "Complete our premium online commercial audit data enquiry layout." },
    { count: "02", title: "Location Finalization", desc: "Joint commercial analysis to select and verify premium catchment zones." },
    { count: "03", title: "Site Fit-Outs", desc: "Execution of absolute premium spatial design aesthetics parameters." },
    { count: "04", title: "Grand Launch", desc: "Deployment of launch plans and welcome mechanics setup active." }
  ];

  return (
    <section className="w-full py-24 bg-[#6e3568]/[0.01] border-y border-[#6e3568]/5">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12">
        <div className="text-center max-w-2xl mx-auto mb-16 flex flex-col gap-3">
          <span className="text-xs font-bold uppercase tracking-widest text-[#b68cb2]">The Journey</span>
          <h2 className="font-serif text-3xl font-extrabold text-[#6e3568]">Onboarding Timeline</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {steps.map((st, idx) => (
            <div key={idx} className="flex flex-col gap-4 relative">
              <span className="font-serif text-4xl font-extrabold text-[#b68cb2]/30">{st.count}</span>
              <h3 className="font-sans text-base font-bold text-[#6e3568]">{st.title}</h3>
              <p className="text-xs sm:text-sm text-[#6e3568]/70 font-light leading-relaxed">{st.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}