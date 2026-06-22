import { useState, useMemo } from "react";
import { products } from "../data";
import { motion, AnimatePresence } from "framer-motion";
import ProductCard from "../components/ui/ProductCard";

export default function Shop() {
  // 1. All Filter States
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("featured");
  const [maxPrice, setMaxPrice] = useState(1000);

  const categories = ["All", ...new Set(products.map((item) => item.category))];

  // 2. Powerful Derived State Calculation
  const filteredProducts = useMemo(() => {
    let result = products.filter((p) => {
      const matchesCategory =
        activeCategory === "All" || p.category === activeCategory;
      const matchesSearch = p.name
        .toLowerCase()
        .includes(searchQuery.toLowerCase());
      const matchesPrice = p.price <= maxPrice;
      return matchesCategory && matchesSearch && matchesPrice;
    });

    if (sortBy === "price-low") result.sort((a, b) => a.price - b.price);
    if (sortBy === "price-high") result.sort((a, b) => b.price - a.price);

    return result;
  }, [activeCategory, searchQuery, sortBy, maxPrice]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
      <h1 className="text-4xl font-bold text-slate-900 mb-12 text-center">
        Shop All Gear
      </h1>

      {/* Filter Bar */}
      <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 mb-12 space-y-6">
        {/* Search & Sort Row */}
        <div className="flex flex-col md:flex-row gap-4">
          <input
            type="text"
            placeholder="Search gear..."
            className="flex-grow px-4 py-2 border border-slate-300 rounded-md outline-none focus:ring-2 focus:ring-amber-500"
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <select
            className="px-4 py-2 border border-slate-300 rounded-md outline-none"
            onChange={(e) => setSortBy(e.target.value)}
          >
            <option value="featured">Featured</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
          </select>
        </div>

        {/* Price Slider & Category Row */}
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="w-full md:w-1/3">
            <label className="text-sm font-bold text-slate-700 block mb-2">
              Max Price: ${maxPrice}
            </label>
            <input
              type="range"
              min="0"
              max="1000"
              value={maxPrice}
              className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-amber-600"
              onChange={(e) => setMaxPrice(Number(e.target.value))}
            />
          </div>

          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
                  activeCategory === cat
                    ? "bg-amber-600 text-white"
                    : "bg-slate-100 hover:bg-slate-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Grid */}
      <motion.div
        layout
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        <AnimatePresence>
          {filteredProducts.map((product) => (
            <motion.div
              key={product.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
            >
              <ProductCard product={product} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
