"use client";

export default function BrandTagline() {
  const stats = [
    { value: "₹6.5L", label: "Total Investment" },
    { value: "2.5 Yrs", label: "Franchise Term" },
    { value: "10+", label: "Live Locations" },
    { value: "2024", label: "Established Brand", isPrefix: true },
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
                  <p className="text-xs md:text-sm font-medium tracking-wide text-[#fcfdfe]/90">
                    {stat.label} <span className="text-[#fcfdfe] font-serif text-lg md:text-xl ml-1 font-bold">{stat.value}</span>
                  </p>
                ) : (
                  <p className="text-xs md:text-sm font-medium tracking-wide text-[#fcfdfe]/90 flex flex-col md:flex-row items-center gap-1 md:gap-2">
                    <span className="text-[#fcfdfe] font-serif text-xl md:text-2xl font-bold tracking-tight">{stat.value}</span>
                    <span className="opacity-80 font-normal">{stat.label}</span>
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