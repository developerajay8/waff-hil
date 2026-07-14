"use client";

import Image from "next/image";

interface StoryMilestone {
  year: string;
  title: string;
  description: string;
}

export default function OurStory() {
  const milestones: StoryMilestone[] = [
    {
      year: "2024",
      title: "The Food Truck Origin",
      description: "Waffhil started with a single, highly energetic food truck setup. We focused entirely on custom product density, premium imports, and testing product feedback loops directly on the streets.",
    },
    {
      year: "Weeks from Launch",
      title: "Going Globally Viral",
      description: "Waffhil's Strawberry Triple Chocolate waffle went completely viral within weeks of launch. This signature traction proved that structural premium quality captures immediate customer repetition.",
    },
    {
      year: "Today & Beyond",
      title: "Rajasthan Scaling Footprint",
      description: "Today, Waffhil is expanding across Rajasthan with a strong focus on Tier 2 and Tier 3 cities—bringing unmatched dessert experiences to premium markets that were previously underserved.",
    },
  ];

  return (
    <section className="w-full md:py-24 py-16 bg-[#fcfdfe] border-t border-[#6e3568]/5 select-none">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
        
        {/* Left Side: Sticky Frame & Inventory Card (5 Columns) */}
        <div className="lg:col-span-5 lg:sticky lg:top-32 space-y-8">
          <div className="space-y-4">
            <span className="text-[10px] font-bold uppercase tracking-widest text-[#b68cb2] block">OUR HERITAGE</span>
            <h2 className="font-serif text-3xl sm:text-4xl font-medium text-[#6e3568] tracking-tight">
              Food Truck to Multi-City Brand
            </h2>
            <p className="text-xs sm:text-sm text-[#6e3568]/70 font-normal leading-relaxed">
              From signature Waffles and Bowl Cakes to Eton Mess, Brownies, Sundaes, and Pancakes, Waffhil focuses on products customers love to order repeatedly—driving high footfall and strong repeat purchase rates.
            </p>
          </div>
          
          {/* Founder & Brand Meta Profile Card */}
          <div className="p-5 rounded-3xl bg-[#f3ebf6]/30 border border-[#6e3568]/5 flex items-center gap-4 max-w-sm">
            <div className="relative w-12 h-12 rounded-full overflow-hidden bg-[#6e3568]/10 shrink-0 border border-[#6e3568]/10">
              <Image
                src="/founder-harshit.jpg" // Change this to your public image path or link
                alt="Harshit Sharma"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h4 className="font-serif text-sm font-bold text-[#6e3568]">Harshit Sharma</h4>
              <p className="text-[9px] font-bold uppercase tracking-widest text-[#9e6396] mt-0.5">Founder & Business Head</p>
            </div>
          </div>
        </div>

        {/* Right Side: Timeline Content Grid (7 Columns) */}
        <div className="lg:col-span-7 flex flex-col gap-12 pl-6 border-l border-[#6e3568]/10 relative ml-2 lg:ml-6">
          {milestones.map((item, index) => (
            <article key={index} className="relative group flex flex-col gap-2">
              
              {/* Timeline Indicator Blob (Fixed Layout Alignment) */}
              <div className="absolute left-[-31px] top-1 w-4 h-4 rounded-full bg-[#fcfdfe] border-2 border-[#b68cb2] flex items-center justify-center group-hover:border-[#6e3568] transition-colors duration-300">
                <div className="w-1.5 h-1.5 rounded-full bg-[#6e3568] opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>

              <span className="text-[10px] font-bold uppercase tracking-wider text-[#b68cb2]">
                {item.year}
              </span>
              <h3 className="text-lg font-bold text-[#6e3568]">
                {item.title}
              </h3>
              <p className="text-xs sm:text-sm text-[#6e3568]/70 font-normal leading-relaxed max-w-2xl">
                {item.description}
              </p>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}