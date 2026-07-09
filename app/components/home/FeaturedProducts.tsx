"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

interface Product {
  id: number;
  title: string;
  category: string;
  tag: string;
  image: string;
}

export default function FeaturedProducts() {
  const products: Product[] = [
    {
      id: 1,
      title: "Signature Mango Injector Waffle",
      category: "Fruit Luxuries",
      tag: "Seasonal Masterpiece",
      image: "/Copy of 0fb4eb61-749a-43a3-839b-77b80395d4c0 - Harshit Khandelwal.jpeg",
    },
    {
      id: 2,
      title: "Belgian Classic Melt Box",
      category: "Dark Cocoa",
      tag: "Chef's Special",
      image: "/meltbox.jpeg", 
    },
    {
      id: 3,
      title: "Lotus Biscoff Dessert Square",
      category: "Premium Cakes",
      tag: "Best Seller",
      image: "/lotus.jpeg",
    },
  ];

  return (
    <section className="w-full md:py-24 py-10 bg-[#fcfdfe]">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8">
        
        {/* Grid Header Node */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="flex flex-col gap-3">
            <span className="text-xs font-bold uppercase tracking-widest text-[#b68cb2]">Curated Collection</span>
            <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-[#6e3568]">The Signature Lineup</h2>
          </div>
          <p className="text-[#6e3568]/70 font-light max-w-md text-sm sm:text-base">
            Every creation is engineered to maintain crisp texture benchmarks and premium chocolate density balance.
          </p>
        </div>

        {/* Product Cards Interactive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {products.map((product) => (
            <div 
              key={product.id} 
              className="group flex flex-col bg-[#fcfdfe] rounded-[2rem] overflow-hidden border border-[#6e3568]/5 shadow-[0_10px_40px_rgba(110,53,104,0.02)] hover:shadow-[0_20px_50px_rgba(110,53,104,0.06)] transition-all duration-500 ease-out"
            >
              {/* Product Layout Image Box */}
              <div className="relative w-full aspect-[4/3] overflow-hidden bg-[#6e3568]/5">
                <span className="absolute top-4 left-4 z-10 bg-[#fcfdfe] text-[#6e3568] px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest border border-[#6e3568]/10 shadow-sm">
                  {product.tag}
                </span>
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  sizes="(max-w-768px) 100vw, (max-w-1200px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>

              {/* Product Info Segment */}
              <div className="p-8 flex flex-col flex-grow justify-between gap-4">
                <div className="flex flex-col gap-1.5">
                  <span className="text-xs font-semibold tracking-wider text-[#b68cb2] uppercase">
                    {product.category}
                  </span>
                  <h3 className="font-serif text-lg font-bold text-[#6e3568] leading-snug group-hover:text-[#b68cb2] transition-colors duration-300">
                    {product.title}
                  </h3>
                </div>
                
                <div className="pt-2 border-t border-[#6e3568]/5 flex items-center justify-between group/btn cursor-pointer">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#6e3568]/60 group-hover/btn:text-[#6e3568] transition-colors">
                    View Tasting Profiles
                  </span>
                  <div className="w-8 h-8 rounded-full bg-[#6e3568]/5 group-hover:bg-[#6e3568] group-hover:text-[#fcfdfe] flex items-center justify-center transition-all duration-300">
                    <ArrowUpRight size={14} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}