"use client";

import { BsInstagram, BsFacebook } from "react-icons/bs";
import { Smartphone, ArrowUpRight } from "lucide-react";

export default function FixedSocialBar() {
  return (
    <>
      {/* 1. DESKTOP & TABLET VIEW (Right Side Fixed Panel) */}
      <div className="hidden md:flex fixed right-4 top-1/2 -translate-y-1/2 flex-col items-center gap-4 z-50 bg-[#fcfdfe]/80 backdrop-blur-md p-3 rounded-full border border-[#6e3568]/10 shadow-[0_10px_30px_rgba(110,53,104,0.08)]">
        {/* Instagram */}
        <a
          href="https://www.instagram.com/waff_hil/"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2.5 rounded-full border border-[#6e3568]/10 text-[#6e3568] hover:bg-[#6e3568] hover:text-[#fcfdfe] transition-all duration-300 bg-[#fcfdfe]"
          title="Follow us on Instagram"
        >
          <BsInstagram size={18} />
        </a>

        {/* Facebook */}
        <a
          href="https://www.facebook.com/people/Waff-hil/61565659544711/?ref=PROFILE_EDIT_xav_ig_profile_page_web#"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2.5 rounded-full border border-[#6e3568]/10 text-[#6e3568] hover:bg-[#6e3568] hover:text-[#fcfdfe] transition-all duration-300 bg-[#fcfdfe]"
          title="Follow us on Facebook"
        >
          <BsFacebook size={18} />
        </a>

        {/* Separator Line */}
        <div className="w-6 h-[1px] bg-[#6e3568]/10" />

        {/* Get App Iconized for Desktop Panel */}
        <a
          href="https://apps.apple.com/app/id6784344028"
          target="_blank"
          className="p-2.5 rounded-full bg-[#6e3568] text-[#fcfdfe] hover:bg-[#b68cb2] transition-all duration-300 shadow-md group relative"
          title="Download Waff~hill App"
        >
          <Smartphone size={18} />
          {/* Tooltip on hover */}
          <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-[#6e3568] text-[#fcfdfe] text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-md whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none shadow-lg">
            Get App <ArrowUpRight size={10} className="inline ml-0.5" />
          </span>
        </a>
      </div>

      {/* 2. MOBILE VIEW (Bottom Fixed Floating Action Dock) */}
      {/* Mobile par screen block na ho, isliye soft floating clean pill banaya hai */}
      <div className="hidden fixed bottom-5 left-1/2 -translate-x-1/2 w-[90%] max-w-[360px] h-14 bg-[#fcfdfe]/90 backdrop-blur-lg border border-[#6e3568]/10 rounded-full shadow-[0_12px_40px_rgba(110,53,104,0.15)] z-50 flex items-center justify-between px-4">
        <div className="flex items-center gap-3">
          <a
            href="https://www.instagram.com/waff_hil?igsh=Nzc4eWc5b2k0a2Yz"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full text-[#6e3568] hover:bg-[#6e3568]/5 transition-colors"
          >
            <BsInstagram size={18} />
          </a>
          <a
            href="https://www.facebook.com/waff_hil"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full text-[#6e3568] hover:bg-[#6e3568]/5 transition-colors"
          >
            <BsFacebook size={18} />
          </a>
        </div>

        {/* Compact Pill Button for App on Mobile */}
        <a
          href="https://apps.apple.com/app/id6784344028"
          target="_blank"
          className="flex items-center gap-1.5 bg-[#6e3568] text-[#fcfdfe] px-4 py-2 rounded-full text-[11px] font-bold uppercase tracking-wider shadow-sm active:scale-95 transition-transform"
        >
          <Smartphone size={12} />
          <span>Get App</span>
        </a>
      </div>
    </>
  );
}