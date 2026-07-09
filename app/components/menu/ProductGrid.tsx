"use client";

import Image from "next/image";
import { Layers } from "lucide-react";

export interface ProductItem {
  id: number;
  title: string;
  category: string;
  price: string;
  ingredients: string[];
  image: string;
  tag?: string;
}

interface ProductGridProps {
  products: ProductItem[];
}

export default function ProductGrid({ products }: ProductGridProps) {
  if (products.length === 0) {
    return (
      <div className="w-full py-20 text-center">
        <p className="text-[#6e3568]/60 font-light text-base">No premium delicacies found in this category.</p>
      </div>
    );
  }

  return (
    <section className="w-full py-16 bg-[#fcfdfe]">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12">
        
        {/* Responsive Layout Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {products.map((item) => (
            <div
              key={item.id}
              className="group flex flex-col bg-[#fcfdfe] rounded-[2rem] overflow-hidden border border-[#6e3568]/5 shadow-[0_10px_40px_rgba(110,53,104,0.01)] hover:shadow-[0_20px_50px_rgba(110,53,104,0.05)] transition-all duration-500 ease-out transform-gpu"
            >
              {/* Card Image Node Wrapper */}
              <div className="relative w-full aspect-[4/3] overflow-hidden bg-[#6e3568]/5">
                {item.tag && (
                  <span className="absolute top-4 left-4 z-10 bg-[#6e3568] text-[#fcfdfe] px-3 py-1 rounded-full text-[9px] font-bold uppercase tracking-widest shadow-sm">
                    {item.tag}
                  </span>
                )}
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-w-768px) 100vw, (max-w-1200px) 50vw, 33vw"
                  className="object-cover group-hover:scale-103 transition-transform duration-700 ease-out transform-gpu"
                />
              </div>

              {/* Card Specs Segment */}
              <div className="p-6 sm:p-8 flex flex-col flex-grow justify-between gap-6">
                
                <div className="space-y-2">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-[10px] font-bold text-[#b68cb2] uppercase tracking-widest">
                      {item.category}
                    </span>
                    <span className="font-serif text-lg font-bold text-[#6e3568]">
                      {item.price}
                    </span>
                  </div>
                  
                  <h3 className="font-serif text-lg font-extrabold text-[#6e3568] leading-snug group-hover:text-[#b68cb2] transition-colors duration-300">
                    {item.title}
                  </h3>
                </div>

                {/* Key Highlight Ingredients Tags */}
                <div className="pt-4 border-t border-[#6e3568]/5">
                  <div className="flex items-center gap-1.5 text-[#6e3568]/50 mb-2">
                    <Layers size={12} />
                    <span className="text-[10px] font-bold uppercase tracking-wider">Tasting Notes</span>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {item.ingredients.map((ing, index) => (
                      <span
                        key={index}
                        className="bg-[#6e3568]/5 text-[#6e3568]/80 px-2.5 py-1 rounded-md text-[11px] font-medium"
                      >
                        {ing}
                      </span>
                    ))}
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