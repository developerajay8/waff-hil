"use client";

import { FileText, Scale, ShieldAlert, ShoppingBag, Landmark } from "lucide-react";

export default function TermsAndConditionsPage() {
  const revisionDate = "July 2026";

  const termsSections = [
    {
      icon: <ShoppingBag size={20} className="text-[#b68cb2]" />,
      title: "1. Commercial Menu & Pricing Parameters",
      content: "All listed financial numbers, menu layouts, seasonal dessert rates, and signature additions display dynamic calculations across our physical franchise lounge spots. Waff~hil reserves the absolute system privilege to structural adjustments of menu arrays, items accessibility, and dynamic price shifting variants without rendering previous warnings."
    },
    {
      icon: <Landmark size={20} className="text-[#b68cb2]" />,
      title: "2. Intellectual Property Rights & Frameworks",
      content: "The layout designs, dynamic code setups, digital illustrations, recipe structure configurations, and brand asset vectors displayed on this domain platform belong strictly to Waff~hil corporate domains. Unauthorized scraping, replication of system codes, or duplication of text copy protocols for external monetization layout modules will instantly trigger dynamic legal damage evaluation mechanics."
    },
    {
      icon: <Scale size={20} className="text-[#b68cb2]" />,
      title: "3. Franchise Enquiries & Operational Declarations",
      content: "Submitting financial evaluations or commercial data across our franchise proposal channels doesn't automatically grant allocation or business validation metrics. Final franchise certificates are explicitly governed via standalone material partnership contracts processed across offline physical legal infrastructures."
    },
    {
      icon: <ShieldAlert size={20} className="text-[#b68cb2]" />,
      title: "4. Limitations of Online Domain Accountability",
      content: "While our systems maintain strict hardware-accelerated code uptime parameters, Waff~hil denies framework liability for third-party map data misalignments, network structural drops, or short-term hosting processing stalls. The online portal platform operates explicitly on an 'As-Is' structural delivery standard."
    }
  ];

  return (
    <main className="bg-[#fcfdfe] min-h-screen pb-24 selection:bg-[#6e3568]/10">
      
      {/* 1. Header Node Banner */}
      <section className="relative w-full pt-40 pb-16 overflow-hidden select-none border-b border-[#6e3568]/5">
        <div className="absolute top-[-10%] right-[-10%] w-[45vw] h-[45vw] rounded-full bg-[#6e3568]/5 blur-[120px] pointer-events-none transform-gpu" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[40vw] h-[40vw] rounded-full bg-[#b68cb2]/5 blur-[100px] pointer-events-none transform-gpu" />

        <div className="max-w-[1440px] mx-auto w-full px-4 sm:px-8 lg:px-12 text-center relative z-10">
          <div className="max-w-2xl mx-auto flex flex-col items-center gap-4">
            
            <div className="inline-flex items-center gap-2 bg-[#6e3568]/5 border border-[#6e3568]/10 px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest text-[#6e3568]">
              <FileText size={12} className="text-[#b68cb2]" />
              <span>Operational Protocols</span>
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl font-extrabold text-[#6e3568] tracking-tight">
              Terms & <span className="text-[#b68cb2] italic font-normal">Conditions</span>
            </h1>

            <div className="w-12 h-[1px] bg-[#b68cb2]/50 my-1" />

            <p className="text-xs uppercase tracking-widest text-[#6e3568]/50 font-semibold">
              Document Revision Baseline: {revisionDate}
            </p>
            
          </div>
        </div>
      </section>

      {/* 2. Legal Content Grid Segment */}
      <section className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 mt-16">
        <div className="max-w-3xl mx-auto flex flex-col gap-10">
          
          {/* Executive Preamble */}
          <div className="bg-[#6e3568]/[0.01] border border-[#6e3568]/5 rounded-3xl p-6 sm:p-8 text-sm sm:text-base text-[#6e3568]/80 font-light leading-relaxed">
            Welcome to our formal operational network. Accessing this domain system implies absolute submission parameters compliance regarding the structural regulatory definitions outlined below. If you reject any statement framework inside this document layer, please cancel layout sessions instantly.
          </div>

          {/* Structured Terms Content Nodes */}
          <div className="flex flex-col gap-8">
            {termsSections.map((section, index) => (
              <article 
                key={index} 
                className="group flex flex-col gap-4 p-6 sm:p-8 bg-[#fcfdfe] border border-[#6e3568]/5 rounded-[2rem] hover:shadow-[0_15px_35px_rgba(110,53,104,0.03)] hover:border-[#6e3568]/10 transition-all duration-300 transform-gpu"
              >
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-[#6e3568]/5 flex items-center justify-center text-[#6e3568] shrink-0">
                    {section.icon}
                  </div>
                  <h2 className="font-serif text-lg sm:text-xl font-bold text-[#6e3568]">
                    {section.title}
                  </h2>
                </div>
                
                <p className="text-xs sm:text-sm text-[#6e3568]/70 font-light leading-relaxed pl-1">
                  {section.content}
                </p>
              </article>
            ))}
          </div>

          {/* Jurisdictional Footnote */}
          <div className="pt-8 border-t border-[#6e3568]/5 text-center space-y-2">
            <h3 className="font-serif text-base font-bold text-[#6e3568]">Jurisdiction & Dispute Management</h3>
            <p className="text-xs text-[#6e3568]/60 font-light leading-relaxed max-w-md mx-auto">
              Any systemic discrepancies or standard litigation claims arising out of portal metrics usage shall fall strictly under the exclusive governing legal courts of India.
            </p>
          </div>

        </div>
      </section>

    </main>
  );
}