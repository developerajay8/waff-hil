"use client";

import { Clock, Phone, MapPin, ArrowUpRight } from "lucide-react";

export interface StoreLocation {
  id: number;
  name: string;
  city: string;
  address: string;
  timings: string;
  phone: string;
  coordinates: { lat: number; lng: number };
  embedUrl: string;
}

interface LocationListProps {
  locations: StoreLocation[];
  activeStoreId: number | null;
  onSelectStore: (store: StoreLocation) => void;
}

export default function LocationList({ locations, activeStoreId, onSelectStore }: LocationListProps) {
  if (locations.length === 0) {
    return (
      <div className="w-full py-16 text-center border border-dashed border-[#6e3568]/10 rounded-3xl">
        <p className="text-sm text-[#6e3568]/50 font-light">No premium outlets match your active search parameter.</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-6 max-h-[75vh] overflow-y-auto pr-2 no-scrollbar scroll-smooth">
      {locations.map((store) => {
        const isSelected = activeStoreId === store.id;
        return (
          <div
            key={store.id}
            onClick={() => onSelectStore(store)}
            className={`group w-full p-6 sm:p-8 rounded-[2rem] border text-left cursor-pointer transition-all duration-500 ease-out transform-gpu flex flex-col gap-5 ${
              isSelected
                ? "bg-[#6e3568] border-[#6e3568] text-[#fcfdfe] shadow-[0_20px_40px_rgba(110,53,104,0.15)] translate-x-1"
                : "bg-[#fcfdfe] border-[#6e3568]/5 hover:border-[#6e3568]/20 shadow-[0_4px_25px_rgba(110,53,104,0.01)] hover:shadow-[0_15px_35px_rgba(110,53,104,0.04)]"
            }`}
          >
            {/* Header Node */}
            <div className="flex items-start justify-between gap-4">
              <div className="space-y-1">
                <span className={`text-[10px] font-bold uppercase tracking-widest ${isSelected ? "text-[#b68cb2]" : "text-[#b68cb2]"}`}>
                  {store.city}
                </span>
                <h3 className={`font-serif text-lg font-extrabold tracking-tight ${isSelected ? "text-[#fcfdfe]" : "text-[#6e3568]"}`}>
                  {store.name}
                </h3>
              </div>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                isSelected ? "bg-[#fcfdfe]/10 text-[#fcfdfe]" : "bg-[#6e3568]/5 text-[#6e3568]"
              }`}>
                <ArrowUpRight size={14} className="group-hover:rotate-45 transition-transform" />
              </div>
            </div>

            {/* Content Specifications */}
            <div className="space-y-3 pt-3 border-t border-current/10 text-xs sm:text-sm font-light">
              <div className="flex items-start gap-2.5">
                <MapPin size={16} className="mt-0.5 shrink-0 opacity-70" />
                <p className={isSelected ? "text-[#fcfdfe]/90" : "text-[#6e3568]/80"}>{store.address}</p>
              </div>
              
              <div className="flex items-center gap-2.5">
                <Clock size={16} className="shrink-0 opacity-70" />
                <p className={isSelected ? "text-[#fcfdfe]/90" : "text-[#6e3568]/80"}>{store.timings}</p>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone size={16} className="shrink-0 opacity-70" />
                <a 
                  href={`tel:${store.phone}`} 
                  onClick={(e) => e.stopPropagation()} 
                  className={`hover:underline ${isSelected ? "text-[#fcfdfe]" : "text-[#6e3568] font-medium"}`}
                >
                  {store.phone}
                </a>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}