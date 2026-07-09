export default function StoreCount() {
  const stats = [
    { metric: "50+", label: "Elite Lounges Active" },
    { metric: "15+", label: "Metropolitan Cities" },
    { metric: "1.2M+", label: "Happy Waffle Connoisseurs" },
  ];

  return (
    <section className="w-full md:py-24 py-10 bg-[#6e3568] text-[#fcfdfe] relative overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 sm:gap-6 text-center divide-y sm:divide-y-0 sm:divide-x divide-[#fcfdfe]/10">
          {stats.map((stat, idx) => (
            <div key={idx} className="flex flex-col gap-2 pt-8 sm:pt-0">
              <span className="font-serif text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#b68cb2]">
                {stat.metric}
              </span>
              <span className="text-xs uppercase tracking-widest font-semibold text-[#fcfdfe]/70">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}