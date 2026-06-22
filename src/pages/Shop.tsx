import { useState } from "react";
import { products } from "../data"; // Ensure this path is correct after moving data.ts!

import { motion } from "framer-motion";
import ProductCard from "../components/ui/ProductCard";

export default function Shop() {
  // 1. State to track the currently selected category
  const [activeCategory, setActiveCategory] = useState("All");

  // 2. Extract unique categories from your data dynamically
  const categories = ["All", ...new Set(products.map((item) => item.category))];

  // 3. Filter the products based on the active category
  const filteredProducts =
    activeCategory === "All"
      ? products
      : products.filter((product) => product.category === activeCategory);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold text-slate-900 mb-8 text-center">
        Shop All Gear
      </h1>

      {/* Category Filter Buttons */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-6 py-2 rounded-full font-medium transition-colors ${
              activeCategory === category
                ? "bg-amber-600 text-white shadow-md"
                : "bg-slate-200 text-slate-700 hover:bg-slate-300"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Filtered Product Grid */}
      <motion.div
        layout // Framer motion magic to smoothly animate layout changes when filtering
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </motion.div>

      {/* Empty State Guard */}
      {filteredProducts.length === 0 && (
        <div className="text-center py-12 text-slate-500 text-lg">
          No products found in this category.
        </div>
      )}
    </div>
  );
}
