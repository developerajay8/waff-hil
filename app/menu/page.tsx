"use client";

import { useState } from "react";
import MenuHero from "@/app/components/menu/MenuHero";
import CategoryFilter from "@/app/components/menu/CategoryFilter";
import ProductGrid, { ProductItem } from "@/app/components/menu/ProductGrid";

export default function MenuPage() {
  const categories = ["ALL", "WAFFLES", "BOWL CAKES", "ETON MESS", "MANGO MESS", "BROWNIES", "SUNDAES", "PANCAKES"];
  const [activeCategory, setActiveCategory] = useState("ALL");

  const menuDataset: ProductItem[] = [
    {
      id: 1,
      title: "Strawberry Triple Chocolate Waffle",
      category: "WAFFLES",
      price: "₹180",
      tag: "19 VARIANTS · VIRAL",
      description: "Our flagship crisp waffle architecture completely loaded with premium dark, milk, and white chocolate layers topped with fresh farm strawberries.",
      ingredients: ["Belgian Batter", "Triple Cocoa Blend", "Fresh Strawberry"],
      image: "/Copy of 0fb4eb61-749a-43a3-839b-77b80395d4c0 - Harshit Khandelwal.jpeg"
    },
    {
      id: 2,
      title: "Classic Nutella Crunch Pancake",
      category: "PANCAKES",
      price: "₹160",
      tag: "STACKED VARIANTS",
      description: "Fluffy stacked premium pancakes designed as a sweet crossover option driving high daytime consumer volume footprints.",
      ingredients: ["Fluffy Stack", "Imported Nutella", "Hazelnut Shards"],
      image: "/Red velvet Sundae.JPG.jpeg"
    },
    {
      id: 3,
      title: "Fudge Brownie Indulgence",
      category: "BROWNIES",
      price: "₹140",
      tag: "RICH & FUDGY",
      description: "Decadent deep-fudge warm chocolate brownie square optimized to capture impulse checkout sales matrix data patterns.",
      ingredients: ["Warm Fudge", "Gooey Center", "Premium Choco Chips"],
      image: "/Biscoff Brownie.JPG.jpeg"
    },
    {
      id: 4,
      title: "Signature Hot Chocolate Bowl Cake",
      category: "BOWL CAKES",
      price: "₹190",
      tag: "SIGNATURE ITEM",
      description: "Warm, soft artisan sponge cake baked inside a specialized bowl layer—an Instagrammable visual sensation engineered for high traction.",
      ingredients: ["Molten Core Sponge", "Warm Fudge Coating", "Choco Curls"],
      image: "/lotus.jpeg"
    },
    {
      id: 5,
      title: "Boutique Berry Eton Mess",
      category: "ETON MESS",
      price: "₹220",
      tag: "PREMIUM DESSERT",
      description: "An elite layered architectural alignment of pristine meringue shells, heavy whipped cream matrix, and wild tart berries.",
      ingredients: ["Meringue Shells", "Whipped Cream Layer", "Wild Berry Coulis"],
      image: "/meltbox.jpeg"
    },
    {
      id: 6,
      title: "Alphonso Tropical Mango Mess",
      category: "MANGO MESS",
      price: "₹240",
      tag: "SEASONAL SPECIAL",
      description: "Bright summer-forward twist on our classic elite layout layered with premium freshly harvested Alphonso reduction cubes.",
      ingredients: ["Alphonso Cubes", "Meringue Base", "Tropical Glaze"],
      image: "/Copy of 1c4911ba-1f86-44b8-be7b-5d203f89b11d - Harshit Khandelwal.jpeg"
    },
    {
      id: 7,
      title: "Waffhil Overloaded Fudge Sundae",
      category: "SUNDAES",
      price: "₹170",
      tag: "ICE CREAM + TOPPINGS",
      description: "Classic cool cream base architecture deeply enhanced using corporate premium central syrups, nuts, and wafer components.",
      ingredients: ["Vanilla Bean Glace", "Signature Syrups", "Crisp Wafers"],
      image: "/Brownie Sundae.jpeg"
    }
  ];

  const filteredProducts = activeCategory === "ALL" 
    ? menuDataset 
    : menuDataset.filter(item => item.category === activeCategory);

  return (
    <main className="min-h-screen bg-[#fcfdfe]">
      <MenuHero />
      <CategoryFilter 
        categories={categories} 
        activeCategory={activeCategory} 
        onCategoryChange={setActiveCategory} 
      />
      <ProductGrid products={filteredProducts} />
    </main>
  );
}