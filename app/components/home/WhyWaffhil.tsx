"use client";

interface RoadmapStep {
  stepNumber: string;
  title: string;
  desc: string;
  isActive?: boolean;
}

export default function WhyWaffHil() {
  const roadmap: RoadmapStep[] = [
    {
      stepNumber: "01",
      title: "Expression Of Interest",
      desc: "Submit your franchise inquiry. Our team reviews your profile and connects within 48 hours.",
    },
    {
      stepNumber: "02",
      title: "Token Amount",
      desc: "Pay a token of Rs. 2,00,000 to secure your interest and initiate location evaluation.",
    },
    {
      stepNumber: "03",
      title: "Location Evaluation",
      desc: "Our operations team evaluates your proposed location for footfall, visibility and feasibility.",
      isActive: true, // Highlights current operational phase gracefully
    },
    {
      stepNumber: "04",
      title: "Franchise Agreement",
      desc: "Legal agreement signed. Terms, territory, royalty and support structure are formalized.",
    },
    {
      stepNumber: "05",
      title: "Grand Opening",
      desc: "Your Waff~hil outlet opens — backed by a launch campaign and full operational readiness.",
    },
  ];

  return (
    <section className="w-full md:py-24 py-16 bg-[#fcfdfe] select-none">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8">
        
        {/* Clean Premium Header Section */}
        <div className="flex flex-col gap-2 mb-16 max-w-3xl">
          <div className="flex items-center gap-2">
            <div className="w-5 h-[1.5px] bg-[#9e6396]" />
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#9e6396]">
              FRANCHISE JOURNEY
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-medium text-[#6e3568] tracking-tight leading-tight">
            Your Journey Starts Here
          </h2>
          <p className="text-[#6e3568]/70 font-normal text-sm md:text-base mt-1">
            A clear, structured path from interest to grand opening.
          </p>
        </div>

        {/* Roadmap Timeline Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 md:gap-6">
          {roadmap.map((step, index) => (
            <div
              key={index}
              className={`flex flex-col justify-between p-6 sm:p-7 rounded-[2rem] border min-h-[220px] transition-all duration-500 ease-out
                ${
                  step.isActive
                    ? "bg-[#6e3568] border-[#6e3568] text-[#fcfdfe] shadow-[0_20px_45px_rgba(110,53,104,0.12)]"
                    : "bg-[#f3ebf6]/30 border-[#6e3568]/5 text-[#6e3568] hover:bg-[#f3ebf6]/50"
                }
              `}
            >
              {/* Step Sequence Counter */}
              <span 
                className={`font-serif text-3xl font-bold tracking-tight block
                  ${step.isActive ? "text-[#b68cb2]" : "text-[#9e6396]/40"}
                `}
              >
                {step.stepNumber}
              </span>

              {/* Title & Description Area */}
              <div className="mt-6 flex-grow flex flex-col justify-end">
                <h3 className="font-serif text-base font-bold tracking-wide mb-1.5">
                  {step.title}
                </h3>
                <p 
                  className={`text-xs font-normal leading-relaxed
                    ${step.isActive ? "text-[#fcfdfe]/85" : "text-[#6e3568]/75"}
                  `}
                >
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}