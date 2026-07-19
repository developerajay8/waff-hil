"use client";

export default function FranchiseNetwork() {
  const locations = {
    live: ["Raja Park, Jaipur", "Jagatpura, Jaipur", "Ajmer - Outlet 1", "Ajmer - Outlet 2", "Kishangarh"],
    soon: ["Pushkar", "Bhilwara", "Jodhpur", "Jaipur - 3rd Outlet", "Ajmer - 3rd Outlet"],
    radar: ["Udaipur", "Kota"]
  };
  

  return (
    <div  className="w-full bg-[#fcfdfe] select-none">
      
      {/* SECTION 1: OUTLET TRACKER (WHERE WE ARE) */}
      <section className="w-full md:py-24 py-16 max-w-[1440px] mx-auto px-4 sm:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col gap-2 mb-16 max-w-3xl">
          <div className="flex items-center gap-2">
            <div className="w-5 h-[1.5px] bg-[#9e6396]" />
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#9e6396]">
              WHERE WE ARE
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-medium text-[#6e3568] tracking-tight leading-tight">
            10+ Outlets, and This is Only the Start
          </h2>
          <p className="text-[#6e3568]/70 font-normal text-xs sm:text-sm mt-1">
            5 live today, 5 opening soon, and two more cities already on the radar.
          </p>
        </div>

        {/* 3-Column Dynamic Location Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          
          {/* Column 1: Live Now */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2 pb-2 border-b border-[#6e3568]/10">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
              <h3 className="text-[10px] font-bold uppercase tracking-widest text-[#6e3568]">LIVE NOW</h3>
            </div>
            <div className="flex flex-col gap-2">
              {locations.live.map((loc, i) => (
                <div key={i} className="flex items-center justify-between p-4 rounded-2xl border border-[#6e3568]/5 bg-[#f3ebf6]/10 hover:border-[#6e3568]/20 transition-all duration-300">
                  <span className="text-xs font-semibold text-[#6e3568]">{loc}</span>
                  <span className="text-[9px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-md bg-green-50 text-green-700 border border-green-200/50">LIVE</span>
                </div>
              ))}
            </div>
          </div>

          {/* Column 2: Opening Soon */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2 pb-2 border-b border-[#6e3568]/10">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
              <h3 className="text-[10px] font-bold uppercase tracking-widest text-[#6e3568]">OPENING SOON</h3>
            </div>
            <div className="flex flex-col gap-2">
              {locations.soon.map((loc, i) => (
                <div key={i} className="flex items-center justify-between p-4 rounded-2xl border border-[#6e3568]/5 bg-[#f3ebf6]/10 hover:border-[#6e3568]/20 transition-all duration-300">
                  <span className="text-xs font-semibold text-[#6e3568]">{loc}</span>
                  <span className="text-[9px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-md bg-amber-50 text-amber-700 border border-amber-200/50">SOON</span>
                </div>
              ))}
            </div>
          </div>

          {/* Column 3: On The Radar */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2 pb-2 border-b border-[#6e3568]/10">
              <span className="w-1.5 h-1.5 rounded-full bg-purple-500" />
              <h3 className="text-[10px] font-bold uppercase tracking-widest text-[#6e3568]">ON THE RADAR</h3>
            </div>
            <div className="flex flex-col gap-2">
              {locations.radar.map((loc, i) => (
                <div key={i} className="flex items-center justify-between p-4 rounded-2xl border border-[#6e3568]/5 bg-[#f3ebf6]/10 hover:border-[#6e3568]/20 transition-all duration-300">
                  <span className="text-xs font-semibold text-[#6e3568]">{loc}</span>
                  <span className="text-[9px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-md bg-purple-50 text-purple-700 border border-purple-200/50">FUTURE</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      

      
    </div>
  );
}