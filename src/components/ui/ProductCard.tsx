import { AnimatePresence, motion } from "framer-motion";
import { useCart } from "../../context/CartContext";
import type { Product } from "../../context/CartContext";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function ProductCard({ product }: { product: Product }) {
  const { addToCart } = useCart();
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -8 }}
      className="group bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-2xl hover:shadow-amber-500/10 transition-all duration-50 overflow-hidden flex flex-col"
    >
      {/* 1. Image Container with Category Badge */}
      <Link
        to={`/product/${product.id}`}
        className="relative block overflow-hidden"
      >
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
        />
        {/* Category Badge - Floating in the corner */}
        <span className="absolute top-3 left-3 bg-slate-900/90 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest backdrop-blur-sm">
          {product.category}
        </span>
      </Link>

      {/* 2. Content Section */}
      <div className="p-5 flex flex-col flex-grow">
        <Link to={`/product/${product.id}`} className="group/title">
          <h3 className="text-lg font-bold text-slate-900 group-hover/title:text-amber-600 transition-colors line-clamp-1">
            {product.name}
          </h3>
          <p className="text-sm text-slate-500 mt-2 line-clamp-2 leading-relaxed">
            {product.description}
          </p>
        </Link>

        {/* 3. Footer: Price & Add Action */}
        <div className="mt-6 flex items-center justify-between pt-4 border-t border-slate-100">
          <span className="text-2xl font-black text-slate-900">
            ${product.price.toFixed(2)}
          </span>

          <motion.button
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            whileTap={{ scale: 0.95 }}
            onClick={(e) => {
              e.preventDefault();
              addToCart(product);
            }}
            className="relative flex items-center gap-2 bg-slate-900 text-white px-5 py-2.5 rounded-lg font-bold text-sm hover:bg-amber-600 transition-colors shadow-lg shadow-slate-900/20 overflow-hidden"
          >
            {/* 1. The Icon (Conditional: Only shows when hovered) */}
            <AnimatePresence>
              {isHovered && (
                <motion.div
                  initial={{ width: 0, opacity: 0, x: -10 }}
                  animate={{ width: "auto", opacity: 1, x: 0 }}
                  exit={{ width: 0, opacity: 0, x: -10 }}
                  className="flex items-center"
                >
                  {/* You can swap this SVG for any icon (mouse, keyboard, etc.) */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 mr-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 2C9.239 2 7 4.239 7 7v10c0 2.761 2.239 5 5 5s5-2.239 5-5V7c0-2.761-2.239-5-5-5z M12 6c.552 0 1 .448 1 1v4c0 .552-.448 1-1 1s-1-.448-1-1V7c0-.552.448-1 1-1z"
                    />
                  </svg>
                </motion.div>
              )}
            </AnimatePresence>

            {/* 2. The Text */}
            <motion.span layout>Add</motion.span>
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}
