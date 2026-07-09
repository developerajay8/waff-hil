"use client";

import { useState } from "react";
import MenuHero from "@/app/components/menu/MenuHero";
import CategoryFilter from "@/app/components/menu/CategoryFilter";
import ProductGrid, { ProductItem } from "@/app/components/menu/ProductGrid";

const CATEGORIES = ["All Delicacies", "Waffles", "Pancakes", "Waffle Cakes", "Shakes"];

const ALL_PRODUCTS: ProductItem[] = [
  {
    id: 1,
    title: "Signature Mango Injector Waffle",
    category: "Waffles",
    price: "₹249",
    ingredients: ["Fresh Mango Alphonso", "Syringe Drizzle", "Vanilla Cream Base"],
    image: "/meltbox.jpeg",
    tag: "Signature Special",
  },
  {
    id: 2,
    title: "Belgian Classic Melt Box",
    category: "Waffles",
    price: "₹199",
    ingredients: ["Imported Dark Cocoa", "Crispy Pure Veg Batter", "Milk Choco Shreds"],
    image: "/meltbox.jpeg",
    tag: "Best Seller",
  },
  {
    id: 3,
    title: "Lotus Biscoff Dessert Square",
    category: "Waffle Cakes",
    price: "₹349",
    ingredients: ["Biscoff Spread Crumb", "Fudgy Chocolate Base", "Gold Flakes"],
    image: "/meltbox.jpeg",
  },
  {
    id: 4,
    title: "Double Layer Berry Fluffy Pancake",
    category: "Pancakes",
    price: "₹219",
    ingredients: ["Wild Blueberry Compote", "Maple Infusion", "Whipped Fluff"],
    image: "/meltbox.jpeg",
  },
  {
    id: 5,
    title: "Roasted Hazelnut Cocoa Shake",
    category: "Shakes",
    price: "₹189",
    ingredients: ["Turkish Hazelnut Paste", "Thick Cream Node", "Dark Ganache Rim"],
    image: "/meltbox.jpeg",
  },
];

export default function MenuPage() {
  const [selectedCategory, setSelectedCategory] = useState("All Delicacies");

  // Dynamic Non-Lag Filtering Logic
  const filteredProducts = selectedCategory === "All Delicacies"
    ? ALL_PRODUCTS
    : ALL_PRODUCTS.filter(product => product.category === selectedCategory);

  return (
    <>
      <MenuHero />
      <CategoryFilter
        categories={CATEGORIES}
        activeCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
      />
      <ProductGrid products={filteredProducts} />
    </>
  );
}