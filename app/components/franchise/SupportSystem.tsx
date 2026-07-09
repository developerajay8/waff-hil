import { Box, Megaphone, Users } from "lucide-react";

export default function SupportSystem() {
  const supports = [
    { icon: <Box size={22} />, title: "Raw Material Logistics", desc: "Timely delivery of centralized raw mixes to preserve absolute profile standard compliance." },
    { icon: <Megaphone size={22} />, title: "Hyper-Local Marketing", desc: "Engineered high-intent digital conversion setups and regional promotional launch maps." },
    { icon: <Users size={22} />, title: "Staff Training Ecosystem", desc: "Rigorous complete training and certified execution manuals provided for your team onboarding." }
  ];

  return (
    <section className="w-full py-24 bg-[#fcfdfe]">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12">
        <div className="text-center max-w-2xl mx-auto mb-16 flex flex-col gap-3">
          <span className="text-xs font-bold uppercase tracking-widest text-[#b68cb2]">Ecosystem Support</span>
          <h2 className="font-serif text-3xl font-extrabold text-[#6e3568]">Our Pillars of Support</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {supports.map((sup, idx) => (
            <div key={idx} className="bg-[#fcfdfe] p-8 rounded-2xl border border-[#6e3568]/5 shadow-sm hover:translate-y-[-2px] transition-transform duration-300">
              <div className="w-11 h-11 rounded-xl bg-[#6e3568]/5 flex items-center justify-center text-[#6e3568] mb-5">
                {sup.icon}
              </div>
              <h3 className="font-serif text-lg font-bold text-[#6e3568] mb-2">{sup.title}</h3>
              <p className="text-xs sm:text-sm text-[#6e3568]/70 font-light leading-relaxed">{sup.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}