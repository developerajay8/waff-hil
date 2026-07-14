"use client";

export default function BrandTagline() {
  const stats = [
  {
    value: "5",
    label: "Live Outlets",
  },
  {
    value: "5",
    label: "Opening Soon",
  },
  {
    value: "10+",
    label: "Total Footprint",
  },
  {
    value: "2024",
    label: "Est.",
    isPrefix: true,
  },
  {
    value: "100+",
    label: "Target",
    suffix: "by 2028",
  },
];

  return (
    <section className="w-full bg-[#6e3568] text-[#fcfdfe] py-6 md:py-8 relative overflow-hidden border-y border-[#b68cb2]/10 select-none">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 relative z-10">
        
        {/* Responsive Flex System */}
        <div className="flex flex-wrap items-center justify-center gap-y-4 md:gap-y-0 text-center">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="flex items-center justify-center w-1/2 md:w-auto md:flex-1 relative"
            >
              {/* Stat Typography Container */}
              <div className="flex flex-col md:flex-row items-center justify-center gap-1 md:gap-2.5 px-4">
                {stat.isPrefix ? (
  <p className="flex items-center gap-2 text-xs sm:text-sm md:text-base font-medium text-[#fcfdfe]/90">
    <span>{stat.label}</span>
    <span className="font-serif text-xl sm:text-2xl md:text-3xl font-bold text-[#f8c64e]">
      {stat.value}
    </span>
  </p>
) : stat.suffix ? (
  <p className="flex items-center gap-2 text-xs sm:text-sm md:text-base font-medium text-[#fcfdfe]/90">
    <span>{stat.label}</span>
    <span className="font-serif text-xl sm:text-2xl md:text-3xl font-bold text-[#f8c64e]">
      {stat.value}
    </span>
    <span>{stat.suffix}</span>
  </p>
) : (
  <p className="flex items-center gap-2 text-xs sm:text-sm md:text-base font-medium text-[#fcfdfe]/90">
    <span className="font-serif text-xl sm:text-2xl md:text-3xl font-bold text-[#f8c64e]">
      {stat.value}
    </span>
    <span>{stat.label}</span>
  </p>
)}
              </div>

              {/* Minimal Vertical Divider */}
              {index < stats.length - 1 && (
                <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 w-[1px] h-6 bg-[#fcfdfe]/15" />
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}