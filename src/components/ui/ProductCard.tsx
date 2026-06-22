import { motion } from "framer-motion";
import { useCart } from "../../context/CartContext";
import type { Product } from "../../context/CartContext";
import { Link } from "react-router-dom";

export default function ProductCard({ product }: { product: Product }) {
  const { addToCart } = useCart();

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
            whileTap={{ scale: 0.9 }}
            onClick={(e) => {
              e.preventDefault();
              addToCart(product);
            }}
            className="flex items-center gap-2 bg-slate-900 text-white px-4 py-2.5 rounded-lg font-bold text-sm hover:bg-amber-600 transition-colors shadow-lg shadow-slate-900/20"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
            Add
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}
