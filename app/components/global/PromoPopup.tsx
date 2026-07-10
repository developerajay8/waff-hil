"use client";

import { useState, useEffect } from "react";
import { X } from "lucide-react";

export default function PromoPopup() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Har baar page refresh par ye timer chalega aur popup open karega
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 1500); // 1.5 seconds ka delay smooth layout loading ke liye

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsOpen(false);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 select-none animate-in fade-in duration-300">
      
      {/* Dark Luxury Backdrop Overlay */}
      <div 
        onClick={handleClose}
        className="absolute inset-0 bg-[#6e3568]/40 backdrop-blur-sm cursor-pointer" 
      />

      {/* Container Box - Fully Responsive across all screens */}
      <div className="relative w-full max-w-[450px] sm:max-w-[500px] aspect-[4/5] sm:aspect-[4/5] bg-[#fcfdfe] rounded-[2rem] overflow-hidden shadow-[0_25px_70px_rgba(110,53,104,0.3)] border border-[#6e3568]/10 transform-gpu animate-in zoom-in-95 duration-300 z-10">
        
        {/* Premium Floating Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 z-20 bg-[#fcfdfe]/80 backdrop-blur-md text-[#6e3568] p-2 rounded-full border border-[#6e3568]/10 hover:bg-[#6e3568] hover:text-[#fcfdfe] transition-all duration-300 active:scale-90"
          aria-label="Close Popup"
        >
          <X size={18} />
        </button>

        {/* Dynamic Responsive Image Layout */}
        <div className="relative w-full h-full">
          <img 
            src="/Copy of 1c4911ba-1f86-44b8-be7b-5d203f89b11d - Harshit Khandelwal.jpeg"
            alt="Waffhil Premium Special Offer" 
            className="w-full h-full object-cover"
          />
        </div>

      </div>
    </div>
  );
}