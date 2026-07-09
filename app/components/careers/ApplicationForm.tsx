"use client";

import { useState, useRef } from "react";
import { Upload, FileText, CheckCircle2 } from "lucide-react";

interface ApplicationFormProps {
  selectedJob: string;
}

export default function ApplicationForm({ selectedJob }: ApplicationFormProps) {
  const [loading, setLoading] = useState(false);
  const [fileName, setFileName] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFileName(e.target.files[0].name);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      alert("Application successfully submitted!");
    }, 1500);
  };

  return (
    <section id="application-form" className="w-full md:py-24 py-10 bg-[#6e3568]/[0.02] border-t border-[#6e3568]/5">
      <div className="max-w-[680px] mx-auto px-4 sm:px-6 bg-[#fcfdfe] border border-[#6e3568]/5 rounded-[2.5rem] p-8 sm:p-12 shadow-xl relative">
        
        <div className="text-center mb-10">
          <span className="text-xs font-bold uppercase tracking-widest text-[#b68cb2]">Direct Channel</span>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#6e3568] mt-1">Submit Application</h2>
          {selectedJob && (
            <p className="text-xs text-[#6e3568]/60 font-light mt-2">
              Applying for: <span className="text-[#6e3568] font-bold uppercase tracking-wider">{selectedJob}</span>
            </p>
          )}
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div className="flex flex-col gap-2">
              <label className="text-[11px] font-bold uppercase tracking-wider text-[#6e3568]/70">Full Name</label>
              <input required type="text" placeholder="John Doe" className="w-full border border-[#6e3568]/10 rounded-xl p-3.5 text-xs bg-[#fcfdfe] text-[#6e3568] outline-none focus:border-[#6e3568]" />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-[11px] font-bold uppercase tracking-wider text-[#6e3568]/70">Email Address</label>
              <input required type="email" placeholder="john@example.com" className="w-full border border-[#6e3568]/10 rounded-xl p-3.5 text-xs bg-[#fcfdfe] text-[#6e3568] outline-none focus:border-[#6e3568]" />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div className="flex flex-col gap-2">
              <label className="text-[11px] font-bold uppercase tracking-wider text-[#6e3568]/70">Phone Number</label>
              <input required type="tel" placeholder="+91 XXXXX XXXXX" className="w-full border border-[#6e3568]/10 rounded-xl p-3.5 text-xs bg-[#fcfdfe] text-[#6e3568] outline-none focus:border-[#6e3568]" />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-[11px] font-bold uppercase tracking-wider text-[#6e3568]/70">Position Target</label>
              <input required type="text" defaultValue={selectedJob} placeholder="e.g. Pastry Chef" className="w-full border border-[#6e3568]/10 rounded-xl p-3.5 text-xs bg-[#fcfdfe] text-[#6e3568] outline-none focus:border-[#6e3568]" />
            </div>
          </div>

          {/* Premium Resume Drag & Upload Slot */}
          <div className="flex flex-col gap-2">
            <label className="text-[11px] font-bold uppercase tracking-wider text-[#6e3568]/70">Attach CV / Portfolio</label>
            <div 
              onClick={() => fileInputRef.current?.click()}
              className="border-2 border-dashed border-[#6e3568]/20 hover:border-[#6e3568]/60 bg-[#6e3568]/[0.01] rounded-2xl p-6 text-center cursor-pointer transition-colors duration-300 flex flex-col items-center justify-center gap-2"
            >
              <input 
                type="file" 
                ref={fileInputRef}
                onChange={handleFileChange}
                accept=".pdf,.doc,.docx" 
                className="hidden" 
              />
              {fileName ? (
                <div className="flex items-center gap-2 text-[#6e3568] font-medium text-xs">
                  <FileText size={16} className="text-[#b68cb2]" />
                  <span>{fileName}</span>
                  <CheckCircle2 size={14} className="text-emerald-600 ml-1" />
                </div>
              ) : (
                <>
                  <Upload size={20} className="text-[#b68cb2]" />
                  <p className="text-xs text-[#6e3568]/70 font-light">Click to browse or drop your resume file here</p>
                  <p className="text-[10px] text-[#6e3568]/40 font-light">Supports PDF, DOCX format upto 5MB</p>
                </>
              )}
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-[11px] font-bold uppercase tracking-wider text-[#6e3568]/70">Cover Note (Optional)</label>
            <textarea placeholder="Tell us briefly about your passion for luxury confections..." rows={3} className="w-full border border-[#6e3568]/10 rounded-xl p-3.5 text-xs bg-[#fcfdfe] text-[#6e3568] outline-none focus:border-[#6e3568] resize-none" />
          </div>

          <button 
            type="submit" 
            disabled={loading}
            className="w-full bg-[#6e3568] text-[#fcfdfe] py-4 rounded-xl text-xs font-bold uppercase tracking-wider hover:bg-[#6e3568]/95 transition-all transform-gpu shadow-lg shadow-[#6e3568]/10 mt-2"
          >
            {loading ? "Transmitting Profile..." : "Submit Formal Application"}
          </button>
        </form>
      </div>
    </section>
  );
}