import { TrendingUp, Sparkles, Sliders } from "lucide-react";

export default function WhyWaffhilFranchise() {
  const points = [
    {
      icon: <TrendingUp size={24} />,
      title: "High ROI Architecture",
      desc: "Our optimized unit economics allow our franchise partners to achieve faster operational break-even points and high lifetime net margins."
    },
    {
      icon: <Sliders size={24} />,
      title: "Zero Operational Hassle",
      desc: "Pre-formulated signature batter bases remove dependency on specialized bakers. Your regular kitchen staff can execute perfectly."
    },
    {
      icon: <Sparkles size={24} />,
      title: "Established Brand Equity",
      desc: "Benefit from structured digital marketing, premium market positioning, and direct viral recognition of product assets."
    }
  ];

  return (
    <section className="w-full py-24 bg-[#fcfdfe] border-t border-[#6e3568]/5">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          {points.map((pt, idx) => (
            <div key={idx} className="flex flex-col gap-5 p-8 rounded-2xl border border-[#6e3568]/5 bg-[#6e3568]/[0.01]">
              <div className="w-12 h-12 rounded-xl bg-[#6e3568]/5 flex items-center justify-center text-[#6e3568]">
                {pt.icon}
              </div>
              <h3 className="font-serif text-xl font-bold text-[#6e3568]">{pt.title}</h3>
              <p className="text-sm text-[#6e3568]/70 font-light leading-relaxed">{pt.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}