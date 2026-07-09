import { Award, Zap, Heart, ShieldCheck } from "lucide-react";

export default function WhyWaffhil() {
  const features = [
    {
      icon: <Award className="text-[#b68cb2]" size={28} />,
      title: "Gold-Standard Formulation",
      desc: "Our proprietary premium batter mix guarantees a long-lasting light crispiness unmatched in the industry.",
    },
    {
      icon: <Zap className="text-[#b68cb2]" size={28} />,
      title: "Flash Heating Grid Tech",
      desc: "Custom operational waffle irons ensure strict temperature maintenance for flawless gold crusts.",
    },
    {
      icon: <Heart className="text-[#b68cb2]" size={28} />,
      title: "Premium Imports Only",
      desc: "From authentic Belgian cocoa bases to chosen seasonal fruit syrups, premium quality is absolute.",
    },
    {
      icon: <ShieldCheck className="text-[#b68cb2]" size={28} />,
      title: "Rigid Cleanliness Controls",
      desc: "Zero-compromise structural sanitation protocols active across all franchise operating networks.",
    },
  ];

  return (
    <section className="w-full md:py-24 py-10 bg-[#6e3568]/[0.02] border-y border-[#6e3568]/5">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-20 flex flex-col gap-4">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#b68cb2]">Brand Integrity</span>
          <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-[#6e3568]">Why Waffhil Outperforms</h2>
          <p className="text-sm sm:text-base text-[#6e3568]/70 font-light">
            We operate at the interface of artisanal food preparation engineering and premium sweet indulgence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feat, index) => (
            <div 
              key={index} 
              className="bg-[#fcfdfe] border border-[#6e3568]/5 p-8 rounded-2xl shadow-[0_4px_30px_rgba(110,53,104,0.01)] hover:translate-y-[-4px] transition-transform duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-[#6e3568]/5 flex items-center justify-center mb-6">
                {feat.icon}
              </div>
              <h3 className="font-serif text-lg font-bold text-[#6e3568] mb-3">{feat.title}</h3>
              <p className="text-sm text-[#6e3568]/70 font-light leading-relaxed">{feat.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}