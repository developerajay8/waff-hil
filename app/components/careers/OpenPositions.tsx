"use client";

import { useState } from "react";
import { ChevronDown, MapPin, Briefcase, DollarSign } from "lucide-react";

export interface Position {
  id: number;
  title: string;
  department: string;
  location: string;
  type: string;
  compensation: string;
  description: string;
  requirements: string[];
}

interface OpenPositionsProps {
  positions: Position[];
  onApplyClick: (jobTitle: string) => void;
}

export default function OpenPositions({ positions, onApplyClick }: OpenPositionsProps) {
  const [openId, setOpenId] = useState<number | null>(null);

  return (
    <section className="w-full md:py-24 py-10 bg-[#fcfdfe]">
      <div className="max-w-[900px] mx-auto px-4 sm:px-6">
        
        <div className="text-center mb-16 space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-[#b68cb2]">Current Openings</span>
          <h2 className="font-serif text-3xl font-extrabold text-[#6e3568]">Explore Available Roles</h2>
        </div>

        <div className="flex flex-col gap-5">
          {positions.map((job) => {
            const isOpen = openId === job.id;
            return (
              <div 
                key={job.id}
                className={`border rounded-2xl overflow-hidden transition-all duration-300 bg-[#fcfdfe] ${
                  isOpen 
                    ? "border-[#6e3568] shadow-[0_15px_40px_rgba(110,53,104,0.05)]" 
                    : "border-[#6e3568]/10 shadow-sm hover:border-[#6e3568]/30"
                }`}
              >
                {/* Accordion Trigger Panel */}
                <button
                  onClick={() => setOpenId(isOpen ? null : job.id)}
                  className="w-full p-6 sm:p-8 text-left flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                >
                  <div className="space-y-2">
                    <span className="bg-[#6e3568]/5 text-[#6e3568] px-3 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider">
                      {job.department}
                    </span>
                    <h3 className="font-serif text-xl font-bold text-[#6e3568]">{job.title}</h3>
                    
                    {/* Meta Tags Row */}
                    <div className="flex flex-wrap items-center gap-4 text-xs font-light text-[#6e3568]/60 pt-1">
                      <div className="flex items-center gap-1"><MapPin size={14} className="text-[#b68cb2]" /> <span>{job.location}</span></div>
                      <div className="flex items-center gap-1"><Briefcase size={14} className="text-[#b68cb2]" /> <span>{job.type}</span></div>
                      <div className="flex items-center gap-1"><DollarSign size={14} className="text-[#b68cb2]" /> <span>{job.compensation}</span></div>
                    </div>
                  </div>

                  <div className={`w-10 h-10 rounded-full bg-[#6e3568]/5 flex items-center justify-center text-[#6e3568] self-end sm:self-auto shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180 bg-[#6e3568] text-[#fcfdfe]" : ""}`}>
                    <ChevronDown size={18} />
                  </div>
                </button>

                {/* Expanding Content Block */}
                {isOpen && (
                  <div className="px-6 pb-8 sm:px-8 sm:pb-8 border-t border-[#6e3568]/5 bg-[#6e3568]/[0.01] animate-fade-in">
                    <div className="space-y-6 pt-6">
                      <div className="space-y-2">
                        <h4 className="text-xs font-bold uppercase tracking-wider text-[#6e3568]">Role Overview</h4>
                        <p className="text-sm font-light text-[#6e3568]/80 leading-relaxed">{job.description}</p>
                      </div>

                      <div className="space-y-2">
                        <h4 className="text-xs font-bold uppercase tracking-wider text-[#6e3568]">Key Prerequisites</h4>
                        <ul className="list-disc pl-5 text-sm font-light text-[#6e3568]/80 space-y-1.5">
                          {job.requirements.map((req, index) => (
                            <li key={index}>{req}</li>
                          ))}
                        </ul>
                      </div>

                      <div className="pt-4">
                        <button
                          onClick={() => onApplyClick(job.title)}
                          className="bg-[#6e3568] text-[#fcfdfe] px-6 py-3 rounded-xl text-xs font-bold uppercase tracking-wider hover:bg-[#6e3568]/95 transition-all shadow-md shadow-[#6e3568]/10"
                        >
                          Apply For This Position
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}