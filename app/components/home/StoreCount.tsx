"use client";

const scrollToSection = () => {
  const section = document.getElementById("contact");

  if (section) {
    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
};
interface FranchiseModel {
  badge: string;
  title: string;
  subtitle: string;
  tagline: string;
  features: string[];
  buttonText: string;
  isPopular?: boolean;
}

export default function StoreCount() {
  const models: FranchiseModel[] = [
    {
      badge: "PRIMARY FORMAT · PAN-INDIA",
      title: "FOFO Model",
      subtitle: "Franchise Owned · Franchise Operated",
      tagline: "Primary pan-India structure. You own and run the outlet with Waff~hil's systems, training and brand support.",
      features: [
        "Franchise Term: 2.5 Years duration",
        "Monthly Royalty: Rs. 5,000 flat / fixed",
        "Investment: Rs. 6.5 Lakhs (Early Bird option)",
        "Full SOPs, master recipes & vendor setup",
      ],
      buttonText: "Request FOFO Blueprint",
      isPopular: true, // Soft elegant highlight matching brand colors
    },
    {
      badge: "JAIPUR METRO ONLY",
      title: "FOCO Model",
      subtitle: "Franchise Owned · Company Operated",
      tagline: "Waff~hil manages hiring, training, operations and rigorous quality control. You provide the strategic space.",
      features: [
        "Available strictly within Jaipur region",
        "Complete hands-free passive business run",
        "Core brand team manages daily storefront",
        "Hassle-free operations & inventory sync",
      ],
      buttonText: "Enquire About FOCO",
    },
    {
      badge: "EXCLUSIVE ALLIANCE",
      title: "Spontaneous 4-Fold",
      subtitle: "Exclusive Invitation Architecture",
      tagline: "Select few allocations across premier zones. Highly exclusive structural design with custom partnership modules.",
      features: [
        "Premium multi-unit territory footprint",
        "By invitation only layout framework",
        "Direct executive-level scaling access",
        "Advanced localized market control",
      ],
      buttonText: "Apply via Special Access",
    },
  ];

  return (
    <section className="w-full md:py-24 py-16 bg-[#fcfdfe] select-none">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8">
        
        {/* Title Content Element */}
        <div className="flex flex-col gap-2 mb-16 max-w-3xl">
          <div className="flex items-center gap-2">
            <div className="w-5 h-[1.5px] bg-[#9e6396]" />
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#9e6396]">
              THE OPPORTUNITY
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-medium text-[#6e3568] tracking-tight leading-tight">
            Why Entrepreneurs Choose Waff~hil
          </h2>
          <p className="text-[#6e3568]/70 font-normal text-sm md:text-base mt-1">
            Built for scalability, engineered for absolute simple execution.
          </p>
        </div>

        {/* 3-Column Premium Card Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {models.map((model, idx) => (
            <div
              key={idx}
              className={`flex flex-col justify-between p-8 sm:p-10 rounded-[2.5rem] border transition-all duration-500 ease-out
                ${
                  model.isPopular
                    ? "bg-[#6e3568] border-[#6e3568] text-[#fcfdfe] shadow-[0_20px_45px_rgba(110,53,104,0.12)] lg:-translate-y-1"
                    : "bg-[#f3ebf6]/20 border-[#6e3568]/5 text-[#6e3568] hover:bg-[#f3ebf6]/40"
                }
              `}
            >
              <div>
                <span 
                  className={`text-[9px] font-bold uppercase tracking-widest block mb-4
                    ${model.isPopular ? "text-[#b68cb2]" : "text-[#9e6396]"}
                  `}
                >
                  {model.badge}
                </span>

                <h3 className="font-serif text-2xl sm:text-3xl font-bold tracking-tight mb-1">
                  {model.title}
                </h3>
                <h4 
                  className={`text-xs font-medium tracking-wide mb-6
                    ${model.isPopular ? "text-[#fcfdfe]/75" : "text-[#6e3568]/60"}
                  `}
                >
                  {model.subtitle}
                </h4>

                <p className="text-xs sm:text-sm font-normal leading-relaxed mb-8 opacity-90">
                  {model.tagline}
                </p>

                <ul className="flex flex-col gap-3.5 mb-10">
                  {model.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-3 text-xs font-normal">
                      <span className="mt-2 w-2.5 h-[1.2px] shrink-0 bg-current opacity-50" />
                      <span className="leading-relaxed opacity-9s">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div  className="pt-2">
                {model.isPopular ? (
                  <button onClick={scrollToSection} className="w-full bg-[#fcfdfe] text-[#6e3568] hover:bg-[#fcfdfe]/90 font-bold cursor-pointer text-xs tracking-wider uppercase py-4 px-6 rounded-full shadow-md transition-all duration-300">
                    {model.buttonText}
                  </button>
                ) : (
                  <button onClick={scrollToSection} className="w-full bg-transparent hover:bg-[#6e3568] text-[#6e3568] cursor-pointer hover:text-[#fcfdfe] font-bold text-xs tracking-wider uppercase py-4 px-6 rounded-full border border-[#6e3568]/20 transition-all duration-300">
                    {model.buttonText}
                  </button>
                )}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}