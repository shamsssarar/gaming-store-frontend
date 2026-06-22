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
      whileHover={{ y: -5 }}
      className="border border-gray-200 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow bg-white flex flex-col"
    >
      {/* 1. We wrap everything EXCEPT the button in the Link */}
      <Link
        to={`/product/${product.id}`}
        className="flex-grow group block cursor-pointer"
      >
        <div className="overflow-hidden rounded-md mb-4">
          <img
            src={product.image}
            alt={product.name}
            // Added a slight zoom effect on hover for a premium feel
            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div>
          {/* Title changes color when hovering over the card */}
          <h3 className="text-lg font-semibold text-gray-800 group-hover:text-amber-600 transition-colors">
            {product.name}
          </h3>
          <p className="text-sm text-gray-500 mt-1 line-clamp-2">
            {product.description}
          </p>
        </div>
      </Link>

      {/* 2. Price and Add to Cart stay independent so clicks don't trigger navigation */}
      <div className="mt-4 flex items-center justify-between">
        <span className="text-xl font-bold text-gray-900">
          ${product.price.toFixed(2)}
        </span>
        <motion.button
          whileTap={{ scale: 0.95 }}
          onClick={(e) => {
            // e.preventDefault() ensures clicking the button doesn't trigger the Link if they overlap
            e.preventDefault();
            addToCart(product);
          }}
          className="bg-amber-600 text-white px-4 py-2 rounded-md font-medium hover:bg-amber-700 transition-colors"
        >
          Add to Cart
        </motion.button>
      </div>
    </motion.div>
  );
}
