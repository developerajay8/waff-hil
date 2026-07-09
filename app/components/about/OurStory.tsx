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
      year: "The Genesis",
      title: "Perfecting the Batter Formula",
      description: "Waffhil started in our specialized test kitchen, where master confectioners spent thousands of hours analyzing starch ratios and heat metrics to create a waffle crisp that stays structurally flawless.",
    },
    {
      year: "The Expansion",
      title: "Spreading Sweet Indulgence",
      description: "Driven by absolute consumer love, we scaled from a single premium lounge node into a high-demand dessert destination network across multi-tier cities, setting new benchmarks for quick-service luxury.",
    },
    {
      year: "Today & Beyond",
      title: "India's Elite Dessert Hub",
      description: "Operating premium store lounges, we continue to engineer fresh innovations—like our signature Mango Injection Waffles—while maintaining rigid parameters of hygiene and ingredient superiority.",
    },
  ];

  return (
    <section className="w-full md:py-24 py-10 bg-[#fcfdfe] border-t border-[#6e3568]/5">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
        
        {/* Left Side: Premium Sticky Frame Media Grid */}
        <div className="lg:col-span-5 lg:sticky lg:top-32 space-y-6">
          <span className="text-xs font-bold uppercase tracking-widest text-[#b68cb2] block">Honest Heritage</span>
          <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-[#6e3568] tracking-tight">
            How We Engineered the Art of Waffles
          </h2>
          <p className="text-sm sm:text-base text-[#6e3568]/70 font-light leading-relaxed">
            We don&apos;t just prepare food; we treat waffle architecture as an absolute science. From temperature calibrations to dark chocolate density balance, quality is our sacred priority.
          </p>
          
          {/* Aesthetic Secondary Layer Image Frame */}
          <div className="relative w-full aspect-[4/3] rounded-[2rem] overflow-hidden shadow-xl border border-[#6e3568]/5 mt-8">
            <Image
              src="/Copy of 33c424b0-f2e9-4c29-97d5-c5f69a09cb26 - Harshit Khandelwal.jpeg" // Put your premium waffle prep image here
              alt="Artisanal Waffhil Chocolate Preparation Craft"
              fill
              sizes="(max-w-1024px) 100vw, 40vw"
              className="object-cover hover:scale-103 transition-transform duration-700 ease-out transform-gpu"
            />
          </div>
        </div>

        {/* Right Side: Timeline Content Grid */}
        <div className="lg:col-span-7 flex flex-col gap-12 pl-2 sm:pl-8 border-l border-[#6e3568]/10 relative ml-2 lg:ml-6">
          {milestones.map((item, index) => (
            <article key={index} className="relative group flex flex-col gap-3">
              
              {/* Timeline Indicator Blob */}
              <div className="absolute left--[-13px] lg:left--[-37px] top-1.5 w-6 h-6 rounded-full bg-[#fcfdfe] border-2 border-[#b68cb2] flex items-center justify-center group-hover:border-[#6e3568] transition-colors duration-300">
                <div className="w-2 h-2 rounded-full bg-[#6e3568] opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>

              <span className="font-serif text-lg font-bold text-[#b68cb2] tracking-wide">
                {item.year}
              </span>
              <h3 className="text-xl font-extrabold text-[#6e3568] font-sans">
                {item.title}
              </h3>
              <p className="text-sm sm:text-base text-[#6e3568]/70 font-light leading-relaxed max-w-2xl">
                {item.description}
              </p>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}