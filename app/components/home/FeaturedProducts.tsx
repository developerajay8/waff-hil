"use client";

import Image from "next/image";

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
      title: "Waffles",
      category: "19 VARIANTS",
      tag: "Our Flagship",
      image: "/Copy of 0fb4eb61-749a-43a3-839b-77b80395d4c0 - Harshit Khandelwal.jpeg", 
      description: "From classic to loaded — waffles in every flavour imaginable. The repeat-order king of the menu.",
      bgColor: "bg-[#f3ebf6]/40",
    },
    {
      id: 2,
      title: "Bowl Cakes",
      category: "SIGNATURE ITEM",
      tag: "Fresh & Indulgent",
      image: "/lotus.jpeg",
      description: "Warm cake served in a bowl, fresh and indulgent. A visual sensation and an Instagrammable staple.",
      bgColor: "bg-[#f3ebf6]/40",
    },
    {
      id: 3,
      title: "Eton Mess",
      category: "PREMIUM DESSERT",
      tag: "Layered Blend",
      image: "/meltbox.jpeg",
      description: "A layered blend of meringue, cream and berries. Elevated dessert positioned for premium perception.",
      bgColor: "bg-[#f3ebf6]/40",
    },
    {
      id: 4,
      title: "Mango Mess",
      category: "SEASONAL SPECIAL",
      tag: "Limited Batch",
      image: "/Copy of 1c4911ba-1f86-44b8-be7b-5d203f89b11d - Harshit Khandelwal.jpeg",
      description: "A tropical mango-forward twist on the classic — bright, refreshing and high-demand in summer months.",
      bgColor: "bg-[#f3ebf6]/40",
    },
    {
      id: 5,
      title: "Brownies",
      category: "RICH & FUDGY",
      tag: "Crowd-Pleaser",
      image: "/Biscoff Brownie.JPG.jpeg", 
      description: "Decadent fudge brownies served warm. A universal crowd-pleaser that drives impulse orders.",
      bgColor: "bg-[#f3ebf6]/40",
    },
    {
      id: 6,
      title: "Sundaes",
      category: "ICE CREAM + TOPPINGS",
      tag: "Signature Sauces",
      image: "/Brownie Sundae.jpeg", 
      description: "Classic sundae formats elevated with premium toppings and Waff~hill's signature sauces.",
      bgColor: "bg-[#f3ebf6]/40",
    },
    {
      id: 7,
      title: "Pancakes",
      category: "STACKED VARIANTS",
      tag: "Fluffy Stack",
      image: "/Red velvet Sundae.JPG.jpeg", 
      description: "Fluffy stacked pancakes — a breakfast-snack crossover that drives strong daytime footfall.",
      bgColor: "bg-[#f3ebf6]/40",
    }
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
          ))}
        </div>

        {/* 💻 DESKTOP & TABLET VIEW: Horizontal Slider Track */}
        <div className="hidden md:block w-full group/scroll">
          <div className="flex gap-6 overflow-x-auto pb-6 pt-1 scrollbar-none snap-x snap-mandatory">
            {products.map((product) => (
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