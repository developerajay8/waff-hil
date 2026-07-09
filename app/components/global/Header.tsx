"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ArrowUpRight, Smartphone } from "lucide-react";
import { BsInstagram } from "react-icons/bs";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Menu", href: "/menu" },
    { name: "Franchise", href: "/franchise" },
    { name: "Stores", href: "/stores" },
    { name: "Careers", href: "/careers" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-[#fcfdfe]/80 backdrop-blur-xl border-b border-[#6e3568]/10 shadow-[0_4px_30px_rgba(110,53,104,0.03)] h-20"
          : "bg-transparent h-24"
      }`}
    >
      <div className="max-w-[1440px] mx-auto h-full px-4 sm:px-8 flex items-center justify-between">
        
        {/* Brand Logo - Styled precisely according to Figma guidelines */}
        <Link 
          href="/" 
          className=""
        >
          <img src="/logo.png" className="w-[200]" alt="" />
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-xs font-semibold uppercase tracking-widest text-[#6e3568]/80 hover:text-[#6e3568] relative after:absolute after:bottom-[-6px] after:left-0 after:w-0 after:h-[2px] after:bg-[#b68cb2] hover:after:w-full after:transition-all after:duration-300"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* External CTAs (App link & Instagram redirect) */}
        <div className="hidden md:flex items-center gap-4">
          {/* Instagram Button */}
          <a
            href="https://www.instagram.com/waff_hil?igsh=Nzc4eWc5b2k0a2Yz" // Replace with real link
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-full border border-[#6e3568]/20 text-[#6e3568] hover:bg-[#6e3568] hover:text-[#fcfdfe] transition-all duration-300"
            title="Follow us on Instagram"
          >
            <BsInstagram size={18} />
          </a>

          {/* Download App Button */}
          <a
            href="https://apps.apple.com/app/id6784344028" // Replace with real link or route
            target="_blank"
            className="flex items-center gap-2 bg-[#6e3568] text-[#fcfdfe] px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider hover:bg-[#6e3568]/90 transition-all duration-300 shadow-[0_4px_14px_rgba(110,53,104,0.2)] hover:shadow-[0_6px_20px_rgba(110,53,104,0.3)]"
          >
            <Smartphone size={14} />
            <span>Get App</span>
            <ArrowUpRight size={14} className="opacity-60" />
          </a>
        </div>

        {/* Mobile Navigation Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden p-2 text-[#6e3568] hover:opacity-80 transition-opacity"
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Drawer Overlay */}
      {isOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-[#fcfdfe] border-b border-[#6e3568]/10 shadow-2xl px-6 py-8 flex flex-col gap-5 animate-in fade-in slide-in-from-top-4 duration-300">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-base font-medium text-[#6e3568] py-2 border-b border-[#6e3568]/5"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Mobile CTAs Group */}
          <div className="grid grid-cols-2 gap-4 pt-4">
            <a
              href="https://www.instagram.com/waff_hil?igsh=Nzc4eWc5b2k0a2Yz"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 border border-[#6e3568]/20 text-[#6e3568] py-3 rounded-xl font-medium text-sm"
            >
              <BsInstagram size={16} /> Instagram
            </a>
            <a
              href="https://apps.apple.com/app/id6784344028"
              target="_blank"
              className="flex items-center justify-center gap-2 bg-[#6e3568] text-[#fcfdfe] py-3 rounded-xl font-medium text-sm"
            >
              <Smartphone size={16} /> Waffhil App
            </a>
          </div>
        </div>
      )}
    </header>
  );
}