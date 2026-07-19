"use client";

import { useState } from "react";
import MenuHero from "@/app/components/menu/MenuHero";
import CategoryFilter from "@/app/components/menu/CategoryFilter";
import ProductGrid, { ProductItem } from "@/app/components/menu/ProductGrid";
import FeaturedProducts from "../components/home/FeaturedProducts";

export default function MenuPage() {
  const categories = ["ALL", "WAFFLES", "BOWL CAKES",  "BROWNIES", "SUNDAES", "PANCAKES"];
  const [activeCategory, setActiveCategory] = useState("ALL");

  const menuDataset: ProductItem[] = [
    {
    id: 1,
    title: "Mango Bliss Waffle",
    category: "WAFFLES",
    price: "₹180",
    tag: "BESTSELLER · CUSTOMER FAVORITE",
    description:
      "Golden crispy waffle topped with creamy vanilla ice cream, fresh mango chunks, and rich mango drizzle for a refreshing tropical delight.",
    ingredients: [
      "Belgian Waffle",
      "Vanilla Ice Cream",
      "Fresh Mango",
    ],
    image:
      "/Copy of 0fb4eb61-749a-43a3-839b-77b80395d4c0 - Harshit Khandelwal.jpeg",
  },

  {
    id: 2,
    title: "Red Velvet Pancakes",
    category: "PANCAKES",
    price: "₹190",
    tag: "FLUFFY STACKS · CHEF'S PICK",
    description:
      "Soft, fluffy pancakes layered with smooth cream and topped with crunchy red velvet crumbs for a rich and indulgent experience.",
    ingredients: [
      "Fluffy Pancakes",
      "Fresh Cream",
      "Red Velvet Crumbs",
    ],
    image: "/Red velvet Sundae.JPG.jpeg",
  },

  {
    id: 3,
    title: "Lotus Biscoff Brownie",
    category: "BROWNIES",
    price: "₹170",
    tag: "RICH & FUDGY",
    description:
      "Warm chocolate brownie layered with creamy Lotus Biscoff spread and crunchy biscuit crumbs for the perfect fudgy bite.",
    ingredients: [
      "Chocolate Brownie",
      "Lotus Biscoff",
      "Biscuit Crumbs",
    ],
    image: "/Biscoff Brownie.JPG.jpeg",
  },

  {
    id: 4,
    title: "Lotus Bowl Cake",
    category: "BOWL CAKES",
    price: "₹190",
    tag: "SIGNATURE ITEM",
    description:
      "Freshly baked warm bowl cake loaded with Lotus Biscoff spread, crunchy biscuit pieces, and silky chocolate sauce.",
    ingredients: [
      "Warm Sponge Cake",
      "Lotus Spread",
      "Chocolate Sauce",
    ],
    image: "/lotus.jpeg",
  },

  {
    id: 5,
    title: "Triple Chocolate Waffle",
    category: "WAFFLES",
    price: "₹210",
    tag: "PREMIUM WAFFLE",
    description:
      "Fresh Belgian waffle generously coated with white, milk, and dark chocolate for an irresistible chocolate lover's treat.",
    ingredients: [
      "Belgian Waffle",
      "Triple Chocolate",
      "Chocolate Sauce",
    ],
    image: "/meltbox.jpeg",
  },

  {
    id: 6,
    title: "Chocolate Truffle Bites",
    category: "DESSERTS",
    price: "₹220",
    tag: "CHEF'S SPECIAL",
    description:
      "Rich handcrafted chocolate truffle bites coated with smooth premium chocolate that melts in every bite.",
    ingredients: [
      "Premium Chocolate",
      "Truffle Filling",
      "Chocolate Coating",
    ],
    image:
      "/Copy of 1c4911ba-1f86-44b8-be7b-5d203f89b11d - Harshit Khandelwal.jpeg",
  },

  {
    id: 7,
    title: "Brownie Sundae",
    category: "SUNDAES",
    price: "₹180",
    tag: "ICE CREAM DELIGHT",
    description:
      "A rich brownie served with creamy vanilla ice cream, signature chocolate sauce, and crunchy toppings for the ultimate dessert.",
    ingredients: [
      "Chocolate Brownie",
      "Vanilla Ice Cream",
      "Signature Chocolate Sauce",
    ],
    image: "/Brownie Sundae.jpeg",
  }
  ];

  const filteredProducts = activeCategory === "ALL" 
    ? menuDataset 
    : menuDataset.filter(item => item.category === activeCategory);

  return (
    <main className="min-h-screen bg-[#fcfdfe]">
      <MenuHero />
      {/* <CategoryFilter 
        categories={categories} 
        activeCategory={activeCategory} 
        onCategoryChange={setActiveCategory} 
      /> */}
      <FeaturedProducts/>
      {/* <ProductGrid products={filteredProducts} /> */}
    </main>
  );
}