import { Phone, Mail, MapPin, MessageSquare } from "lucide-react";

export default function ContactDetails() {
  return (
    <section className="w-full py-24 bg-[#fcfdfe]">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        <div className="flex flex-col items-center md:items-start gap-3">
          <div className="w-10 h-10 rounded-full bg-[#6e3568]/5 flex items-center justify-center text-[#6e3568]"><Phone size={16} /></div>
          <h4 className="font-bold text-sm text-[#6e3568]">Call Matrix</h4>
          <a href="tel:+911234567890" className="text-xs sm:text-sm text-[#6e3568]/70 font-light">+91 12345 67890</a>
        </div>
        <div className="flex flex-col items-center md:items-start gap-3">
          <div className="w-10 h-10 rounded-full bg-[#6e3568]/5 flex items-center justify-center text-[#6e3568]"><Mail size={16} /></div>
          <h4 className="font-bold text-sm text-[#6e3568]">Email Nodes</h4>
          <a href="mailto:franchise@waffhil.com" className="text-xs sm:text-sm text-[#6e3568]/70 font-light">franchise@waffhil.com</a>
        </div>
        <div className="flex flex-col items-center md:items-start gap-3">
          <div className="w-10 h-10 rounded-full bg-[#6e3568]/5 flex items-center justify-center text-[#6e3568]"><MessageSquare size={16} /></div>
          <h4 className="font-bold text-sm text-[#6e3568]">Direct WhatsApp Connection</h4>
          <a href="https://wa.me/911234567890" target="_blank" rel="noopener noreferrer" className="bg-[#6e3568] text-[#fcfdfe] text-xs px-4 py-2 rounded-lg font-medium tracking-wide">Live Chat Initiate</a>
        </div>
      </div>
    </section>
  );
}