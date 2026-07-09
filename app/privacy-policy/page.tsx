"use client";

import { Shield, Lock, Eye, FileText, CheckCircle2 } from "lucide-react";

export default function PrivacyPolicyPage() {
  const lastUpdated = "July 2026";

  const policySections = [
    {
      icon: <Eye size={20} className="text-[#b68cb2]" />,
      title: "Data We Collect",
      content: "We collect precise information required to optimize your dessert experiences. This includes personal identifiers (Name, Email, Phone number) provided during franchise enquiries or feedback submissions, along with localized network details if you use our real-time interactive store mapping systems."
    },
    {
      icon: <Lock size={20} className="text-[#b68cb2]" />,
      title: "How We Protect Your Information",
      content: "Waffhil implements rigorous hardware-accelerated security controls and encrypted storage clusters to process your structural credentials. Your personal records are strictly confidential and are isolated behind highly monitored network firewalls to completely neutralize unauthorized profile leaks."
    },
    {
      icon: <Shield size={20} className="text-[#b68cb2]" />,
      title: "Franchise & Career Portals",
      content: "All operational commercial assets, investment metrics, and resume documents uploaded through our Franchise Enquiry or Career Portal structures are processed exclusively for internal background verifications. This structural data is never transferred or leased to secondary marketing brokers."
    },
    {
      icon: <CheckCircle2 size={20} className="text-[#b68cb2]" />,
      title: "Cookies & Fluid Metrics",
      content: "Our system platform utilizes minimalist modern cookies to retain structural caching variables, speed up website loading limits, and analyze traffic patterns. You can adjust your browser properties to discard tracking parameters without breaking layout interactions."
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
              <span>Legal Guidelines</span>
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl font-extrabold text-[#6e3568] tracking-tight">
              Privacy <span className="text-[#b68cb2] italic font-normal">Policy</span>
            </h1>

            <div className="w-12 h-[1px] bg-[#b68cb2]/50 my-1" />

            <p className="text-xs uppercase tracking-widest text-[#6e3568]/50 font-semibold">
              Last Document Configuration: {lastUpdated}
            </p>
            
          </div>
        </div>
      </section>

      {/* 2. Content Framework Bracket */}
      <section className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 mt-16">
        <div className="max-w-3xl mx-auto flex flex-col gap-10">
          
          {/* Introductory Preamble */}
          <div className="bg-[#6e3568]/[0.01] border border-[#6e3568]/5 rounded-3xl p-6 sm:p-8 text-sm sm:text-base text-[#6e3568]/80 font-light leading-relaxed">
            At <strong>Waffhil</strong>, we prioritize the protection and security parameters of our consumers, investors, and job candidates. This privacy layout systematically breaks down how we compile, lock down, and execute data lifecycle mechanics across our digital networks.
          </div>

          {/* Structured Policy Nodes */}
          <div className="flex flex-col gap-8">
            {policySections.map((section, index) => (
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

          {/* Regulatory Contact Footnote */}
          <div className="pt-8 border-t border-[#6e3568]/5 text-center space-y-2">
            <h3 className="font-serif text-base font-bold text-[#6e3568]">Legal & Grievance Enquiries</h3>
            <p className="text-xs text-[#6e3568]/60 font-light leading-relaxed max-w-md mx-auto">
              If you have structural complaints, system parameters disputes, or data cleanup requests, please transmit a formal prompt directly to our backend administration node at:
            </p>
            <p className="pt-2">
              <a 
                href="mailto:legal@waffhil.com" 
                className="text-xs font-bold uppercase tracking-wider bg-[#6e3568] text-[#fcfdfe] px-5 py-2.5 rounded-xl hover:bg-[#b68cb2] transition-colors duration-300"
              >
                legal@waffhil.com
              </a>
            </p>
          </div>

        </div>
      </section>

    </main>
  );
}