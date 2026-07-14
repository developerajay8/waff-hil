import Link from "next/link";
import { ArrowUpRight, Building2 } from "lucide-react";

export default function FranchiseCTA() {
  return (
    <section className="w-full md:py-24 py-10 bg-[#fcfdfe]">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8">
        <div className="relative w-full rounded-[2.5rem] bg-gradient-to-br from-[#6e3568] to-[#4a2045] p-8 sm:p-12 lg:p-16 overflow-hidden shadow-2xl">
          {/* Geometrical Design Shapes */}
          <div className="absolute top-0 right-0 w-[40vw] h-[40vw] rounded-full bg-[#b68cb2]/10 blur-[80px] pointer-events-none" />
          
          <div className="max-w-3xl flex flex-col items-start gap-6 relative z-10">
            <div className="w-12 h-12 rounded-xl bg-[#fcfdfe]/10 flex items-center justify-center text-[#b68cb2]">
              <Building2 size={24} />
            </div>
            
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#fcfdfe] leading-tight">
              Build Your High-Return Dessert Empire with Waff~hill
            </h2>
            
            <p className="text-sm sm:text-base text-[#fcfdfe]/80 font-light leading-relaxed max-w-xl">
              Partner with India&apos;s fastest growing premium dessert franchise. Access established micro-supply frameworks, intensive staff training systems, and a high ROI layout model.
            </p>

            <div className="pt-4 w-full sm:w-auto">
              <Link 
                href="/franchise" 
                className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#fcfdfe] text-[#6e3568] px-8 py-4 rounded-full text-xs font-bold uppercase tracking-wider hover:bg-[#b68cb2] hover:text-[#fcfdfe] transition-all duration-300 shadow-xl"
              >
                <span>Launch Franchise Process</span>
                <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}