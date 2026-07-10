"use client";

import { useState } from "react";
import StoreLocatorHero from "@/app/components/stores/StoreLocatorHero";
import LocationList, { StoreLocation } from "@/app/components/stores/LocationList";
import GoogleMapsEmbed from "@/app/components/stores/GoogleMapsEmbed";

const INITIAL_STORES: StoreLocation[] = [
  {
    id: 1,
    name: "Waffhil Prestige Lounge",
    city: "Mumbai",
    address: "Ground Floor, Luxury Galleria, Colaba, Mumbai - 400001",
    timings: "11:00 AM - 12:30 AM Everyday",
    phone: "+91 22 9876 5432",
    coordinates: { lat: 18.922, lng: 72.834 },
    embedUrl: "https://maps.app.goo.gl/YJghCAg1Wmojbd1Z8"
  },
  {
    id: 2,
    name: "Waffhil Urban Square Hub",
    city: "Delhi NCR",
    address: "Shop 24, Cyber Hub, Phase 3, Gurgaon, Delhi NCR - 122002",
    timings: "10:30 AM - 01:00 AM Everyday",
    phone: "+91 124 8765 4321",
    coordinates: { lat: 28.495, lng: 77.088 },
    embedUrl: "https://maps.app.goo.gl/YJghCAg1Wmojbd1Z8"
  },
  
  {
    id: 3,
    name: "Waffhil Silicon Galleria",
    city: "Bengaluru",
    address: "12th Main Road, Indiranagar, Bengaluru - 560038",
    timings: "11:00 AM - 11:30 PM Everyday",
    phone: "+91 80 7654 3210",
    coordinates: { lat: 12.971, lng: 77.641 },
    embedUrl: "https://maps.app.goo.gl/YJghCAg1Wmojbd1Z8"
  }
];

export default function StoresPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedStore, setSelectedStore] = useState<StoreLocation>(INITIAL_STORES[0]);

  const filteredStores = INITIAL_STORES.filter(store => 
    store.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    store.city.toLowerCase().includes(searchQuery.toLowerCase()) ||
    store.address.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <main className="bg-[#fcfdfe] min-h-screen md:pb-24 pb-12">
      <StoreLocatorHero searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      
      <section className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-10 xl:gap-14 items-start">
        {/* Left Interactive List Stack */}
        <div className="lg:col-span-5 w-full">
          <LocationList 
            locations={filteredStores}
            activeStoreId={selectedStore?.id || null}
            onSelectStore={(store) => setSelectedStore(store)}
          />
        </div>

        {/* Right Sticky Canvas Map Bracket */}
        <div className="lg:col-span-7 w-full lg:sticky lg:top-28">
          {selectedStore && (
            <GoogleMapsEmbed 
              embedUrl={selectedStore.embedUrl} 
              storeName={selectedStore.name} 
            />
          )}
        </div>
      </section>
    </main>
  );
}