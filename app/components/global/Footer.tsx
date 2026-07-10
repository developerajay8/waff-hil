import Link from "next/link";
import { Phone, Mail, MapPin, MessageSquare, ArrowUpRight } from "lucide-react";
import { BsFacebook, BsInstagram } from "react-icons/bs";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#6e3568] text-[#fcfdfe] border-t border-[#b68cb2]/10 pt-20 pb-8">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 pb-16 border-b border-[#fcfdfe]/10">
        
        {/* Brand Architecture Segment */}
        <div className="flex flex-col gap-6">
          <Link href="/" className="">
           <img src="/logo.png" className="w-[160]" alt="" />
          </Link>
          <p className="text-[#fcfdfe]/70 text-sm leading-relaxed font-light max-w-sm">
            Crafting premium, gold-standard crispy waffles and elite confections. Experience luxury in every bite.
          </p>
          {/* Social Links Context */}
          <div className="flex items-center gap-4 pt-2">
            <a href="https://www.instagram.com/waff_hil/" className="w-9 h-9 rounded-full bg-[#fcfdfe]/5 flex items-center justify-center text-[#fcfdfe] hover:bg-[#b68cb2] hover:text-[#6e3568] transition-all duration-300">
              <BsInstagram size={16} />
            </a>
            <a href="https://www.facebook.com/people/Waff-hil/61565659544711/?ref=PROFILE_EDIT_xav_ig_profile_page_web#" className="w-9 h-9 rounded-full bg-[#fcfdfe]/5 flex items-center justify-center text-[#fcfdfe] hover:bg-[#b68cb2] hover:text-[#6e3568] transition-all duration-300">
              <BsFacebook size={16} />
            </a>
          </div>
        </div>

        {/* Explore Links Grid */}
        <div className="flex flex-col gap-6">
          <h4 className="text-xs font-bold uppercase tracking-widest text-[#b68cb2]">Explore</h4>
          <ul className="flex flex-col gap-3.5 text-sm font-light text-[#fcfdfe]/80">
            <li><Link href="/" className="hover:text-[#fcfdfe] transition-colors">Home</Link></li>
            <li><Link href="/about" className="hover:text-[#fcfdfe] transition-colors">Our Story</Link></li>
            <li><Link href="/menu" className="hover:text-[#fcfdfe] transition-colors">Menu Categories</Link></li>
            <li><Link href="/stores" className="hover:text-[#fcfdfe] transition-colors">Store Locator</Link></li>
            <li><Link href="/careers" className="hover:text-[#fcfdfe] transition-colors">Careers</Link></li>
          </ul>
        </div>

        {/* Business Partnership (Franchise Section) */}
        <div className="flex flex-col gap-6">
          <h4 className="text-xs font-bold uppercase tracking-widest text-[#b68cb2]">Franchise</h4>
          <ul className="flex flex-col gap-3.5 text-sm font-light text-[#fcfdfe]/80">
            <li><Link href="/franchise" className="hover:text-[#fcfdfe] transition-colors">Why Invest</Link></li>
            <li><Link href="/franchise#process" className="hover:text-[#fcfdfe] transition-colors">Setup Process</Link></li>
            <li><Link href="/franchise#faqs" className="hover:text-[#fcfdfe] transition-colors">Franchise FAQs</Link></li>
            <li>
              <Link target="_blank" href="https://docs.google.com/forms/d/e/1FAIpQLSd5rSLQBdQiYvOhSeYEI8anqzDHNR7zhPODmUArOUcpl6DgJg/viewform" className="inline-flex items-center gap-1 text-[#b68cb2] font-medium hover:underline group">
                Enquiry Form <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
            </li>
          </ul>
        </div>

        {/* Complete Premium Contact Nodes */}
        <div className="flex flex-col gap-6">
          <h4 className="text-xs font-bold uppercase tracking-widest text-[#b68cb2]">Connect</h4>
          <ul className="flex flex-col gap-4 text-sm font-light text-[#fcfdfe]/80">
            <li className="flex items-start gap-3">
              <MapPin size={18} className="text-[#b68cb2] shrink-0 mt-0.5" />
              <span>280, Opposite Hill Pizza, Gurunanakpura, Raja Park, Jaipur, Rajasthan 302004</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone size={16} className="text-[#b68cb2] shrink-0" />
              <a href="tel:+918955371827" className="hover:text-[#fcfdfe] transition-colors">+91 8955371827</a>
            </li>
            <li className="flex items-center gap-3">
              <Mail size={16} className="text-[#b68cb2] shrink-0" />
              <a href="mailto:Official.waffhil@gmail.com" className="hover:text-[#fcfdfe] transition-colors">Official.waffhil@gmail.com</a>
            </li>
            {/* Live WhatsApp Action Activation */}
            <li className="pt-2">
              <a 
                href="https://wa.me/918955371827" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#fcfdfe]/10 border border-[#fcfdfe]/20 hover:bg-[#fcfdfe] hover:text-[#6e3568] px-4 py-2 rounded-xl text-xs font-semibold tracking-wider transition-all duration-300"
              >
                <MessageSquare size={14} />
                WHATSAPP CHAT
              </a>
            </li>
          </ul>
        </div>

      </div>

      {/* Corporate Metadata & Compliance Footer End */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-light text-[#fcfdfe]/40">
  <p>
    © {currentYear} Waffhil. All rights reserved. | Developed by{" "}
    <a
      href="https://www.teamupservices.in/"
      target="_blank"
      rel="noopener noreferrer"
      className="text-[#fcfdfe]/70 hover:text-[#fcfdfe] transition-colors underline underline-offset-4"
    >
      Team Up
    </a>
  </p>

  <div className="flex items-center gap-6">
    <Link
      href="/privacy-policy"
      className="hover:text-[#fcfdfe]/70 transition-colors"
    >
      Privacy Policy
    </Link>

    <Link
      href="/terms"
      className="hover:text-[#fcfdfe]/70 transition-colors"
    >
      Terms & Conditions
    </Link>
  </div>
</div>
    </footer>
  );
}