"use client";

import Image from "next/image";
import Link from "next/link";

interface Product {
  id: number;
  title: string;
  category: string;
  tag: string;
  image: string;
  description: string;
  bgColor: string;
}

export default function FeaturedProducts() {
  const products: Product[] = [
    {
    id: 1,
    title: "Mango Bliss Waffle",
    category: "BESTSELLER",
    tag: "Customer Favorite",
    image: "/Copy of 0fb4eb61-749a-43a3-839b-77b80395d4c0 - Harshit Khandelwal.jpeg",
    description:
      "Golden waffles topped with creamy vanilla ice cream, fresh mango chunks, and rich mango drizzle for the perfect tropical indulgence.",
    bgColor: "bg-[#f3ebf6]/40",
  },
  {
    id: 2,
    title: "biscoff bowl cake",
    category: "SIGNATURE ITEM",
    tag: "Most Loved",
    image: "/lotus.jpeg",
    description:
      "A warm, soft bowl cake layered with Lotus Biscoff spread, crunchy biscuit crumbs, and silky chocolate for an unforgettable dessert.",
    bgColor: "bg-[#f3ebf6]/40",
  },
  {
    id: 3,
    title: "Triple Chocolate Waffle",
    category: "PREMIUM WAFFLE",
    tag: "Chocolate Lover",
    image: "/meltbox.jpeg",
    description:
      "Freshly baked waffles generously coated with white, milk, and dark chocolate for the ultimate chocolate experience.",
    bgColor: "bg-[#f3ebf6]/40",
  },
  {
    id: 4,
    title: "pancakes",
    category: "CHEF'S SPECIAL",
    tag: "Limited Edition",
    image: "/Copy of 1c4911ba-1f86-44b8-be7b-5d203f89b11d - Harshit Khandelwal.jpeg",
    description:
      "Rich pancakes handcrafted with smooth pancakes coating that melts in every delicious bite.",
    bgColor: "bg-[#f3ebf6]/40",
  },
  {
    id: 5,
    title: "Biscoff Brownie",
    category: "RICH & FUDGY",
    tag: "Crowd Favorite",
    image: "/Biscoff Brownie.JPG.jpeg",
    description:
      "Warm, fudgy chocolate brownie topped with creamy Lotus Biscoff spread and crunchy biscuit crumbs for pure indulgence.",
    bgColor: "bg-[#f3ebf6]/40",
  },
  {
    id: 6,
    title: "Brownie Sundae",
    category: "ICE CREAM DELIGHT",
    tag: "Signature Dessert",
    image: "/Brownie Sundae.jpeg",
    description:
      "Rich chocolate brownie paired with creamy ice cream, chocolate sauce, and crunchy toppings for a dessert you'll crave.",
    bgColor: "bg-[#f3ebf6]/40", 
  },
  {
    id: 7,
    title: "Red Velvet Pancakes",
    category: "FLUFFY STACKS",
    tag: "Chef's Pick",
    image: "/Red velvet Sundae.JPG.jpeg",
    description:
      "Soft red velvet pancakes layered with fresh cream and finished with crunchy red velvet crumbs for a luxurious treat.",
    bgColor: "bg-[#f3ebf6]/40",
  },
  ];

  return (
    <section className="w-full md:py-24 py-16 bg-[#fcfdfe]">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8">
        
        {/* Header Structure Area */}
        <div className="flex flex-col gap-2 mb-14 max-w-2xl">
          <div className="flex items-center gap-2">
            <div className="w-5 h-[1.5px] bg-[#9e6396]" />
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#9e6396]">
              OUR MENU
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-medium text-[#6e3568] tracking-tight leading-tight">
            Products Customers Keep Coming Back For
          </h2>
          <p className="text-[#6e3568]/70 font-normal text-sm md:text-base mt-1">
            Seven hero categories. Hundreds of reasons to return.
          </p>
        </div>

        {/* 📱 MOBILE VIEW: Stack-on-Scroll Layout */}
        <div className="flex flex-col gap-8 md:hidden relative">
          {products.map((product, index) => (
            <Link className="cursor-pointer" target="_blank" href={"https://apps.apple.com/app/id6784344028"}>
            <div
              key={`mobile-${product.id}`}
              style={{ top: `${80 + index * 20}px` }}
              className="sticky w-full rounded-[2rem] overflow-hidden border border-[#6e3568]/5 shadow-[0_12px_35px_rgba(110,53,104,0.04)] bg-[#fcfdfe]"
            >
              <div className="relative w-full aspect-[4/3] bg-[#6e3568]/5">
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  className="object-cover"
                />
              </div>
              
              <div className={`p-6 flex flex-col gap-1.5 ${product.bgColor}`}>
                <span className="text-[9px] font-bold uppercase tracking-wider text-[#9e6396]">
                  {product.category}
                </span>
                <h3 className="font-serif text-lg font-bold text-[#6e3568]">
                  {product.title}
                </h3>
                <p className="text-xs text-[#6e3568]/75 font-normal leading-relaxed">
                  {product.description}
                </p>
              </div>
            </div>
            </Link>
          ))}
        </div>

        {/* 💻 DESKTOP & TABLET VIEW: Horizontal Slider Track */}
        <div className="hidden md:block w-full group/scroll">
          <div className="flex gap-6 overflow-x-auto pb-6 pt-1 scrollbar-none snap-x snap-mandatory">
            {products.map((product) => (
              <Link className="cursor-pointer" target="_blank" href={"https://apps.apple.com/app/id6784344028"}>
              <div
                key={`desktop-${product.id}`}
                className="flex-shrink-0 w-[310px] lg:w-[330px] rounded-[2rem] overflow-hidden border border-[#6e3568]/10 bg-[#fcfdfe] hover:shadow-[0_20px_50px_rgba(110,53,104,0.06)] transition-all duration-500 snap-start flex flex-col justify-between"
              >
                <div className="relative w-full aspect-[4/3.2] overflow-hidden bg-[#6e3568]/5">
                  <Image
                    key={product.id}
                    src={product.image}
                    alt={product.title}
                    fill
                    sizes="360px"
                    className="object-cover transition-transform duration-700 ease-out hover:scale-103"
                  />
                </div>

                <div className={`p-6 flex flex-col flex-grow gap-2 ${product.bgColor} border-t border-[#6e3568]/5`}>
                  <div className="flex items-center justify-between">
                    <span className="text-[9px] font-bold uppercase tracking-wider text-[#9e6396]">
                      {product.category}
                    </span>
                    <span className="text-[9px] font-medium text-[#6e3568]/50 italic">
                      {product.tag}
                    </span>
                  </div>
                  <h3 className="font-serif text-xl font-bold text-[#6e3568] leading-tight">
                    {product.title}
                  </h3>
                  <p className="text-xs text-[#6e3568]/70 font-normal leading-relaxed">
                    {product.description}
                  </p>
                </div>
              </div>
              </Link>
            ))}
          </div>

          {/* Premium Fine Baseline Progress Indicator */}
          <div className="w-full h-[2px] bg-purple-100 rounded-full mt-4 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-1/4 h-full bg-[#9e6396] rounded-full group-hover/scroll:translate-x-[300%] transition-transform duration-[2s] ease-in-out" />
          </div>
        </div>

      </div>
    </section>
  );
}