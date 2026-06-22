import { motion } from "framer-motion";
import { products } from "../../../data";
import { Link } from "react-router-dom";
import { useCart } from "../../../context/CartContext";
import type { Product } from "../../../context/CartContext";

export default function BestSellers() {
  const { addToCart } = useCart();

  // Dynamic Logic: Grab exactly ONE product from each category, up to 3 total
  const topSellers: Product[] = [];
  const seenCategories = new Set<string>();

  for (const product of products) {
    if (!seenCategories.has(product.category)) {
      seenCategories.add(product.category);
      topSellers.push(product);

      // Stop once we have 3 items to fit the grid perfectly
      if (topSellers.length === 3) break;
    }
  }

  return (
    <section className="py-24 bg-slate-900 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <span className="text-amber-500 font-bold tracking-wider uppercase text-sm">
              Community Favorites
            </span>
            <h2 className="text-4xl font-bold text-white tracking-tight mt-2">
              Top Rated Gear
            </h2>
          </div>
          <Link
            to="/shop"
            className="text-amber-500 hover:text-amber-400 font-medium transition-colors flex items-center gap-2"
          >
            View full rankings <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {topSellers.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="bg-slate-800 rounded-2xl p-6 border border-slate-700 hover:border-amber-500/50 transition-colors group flex flex-col"
            >
              <div className="flex justify-between items-start mb-6">
                <span className="text-5xl font-black text-slate-700/50 group-hover:text-amber-500/20 transition-colors">
                  0{index + 1}
                </span>
                <span className="bg-amber-500/10 text-amber-500 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                  Hot
                </span>
              </div>

              <Link to={`/product/${item.id}`} className="mb-6 block flex-grow">
                <div className="aspect-w-16 aspect-h-9 overflow-hidden rounded-lg mb-6">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                {/* Dynamically displaying the category above the name to highlight the variety */}
                <span className="text-amber-500 text-xs uppercase font-bold tracking-wider mb-1 block">
                  {item.category}
                </span>
                <h3 className="text-xl font-bold text-white mb-2">
                  {item.name}
                </h3>
                <p className="text-slate-400 text-sm line-clamp-2">
                  {item.description}
                </p>
              </Link>

              <div className="flex items-center justify-between mt-auto pt-4 border-t border-slate-700">
                <span className="text-2xl font-bold text-white">
                  ${item.price.toFixed(2)}
                </span>
                <button
                  onClick={(e) => {
                    e.preventDefault(); // Prevents the Link wrapping the card from triggering if overlapping occurs
                    addToCart(item);
                  }}
                  className="bg-slate-700 hover:bg-amber-600 text-white p-3 rounded-md transition-colors"
                  aria-label="Add to cart"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 4v16m8-8H4"
                    />
                  </svg>
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
