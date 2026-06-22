import { useParams, Link } from "react-router-dom";
import { products } from "../hooks/data";
import { useCart } from "../context/CartContext";
import { motion } from "framer-motion";

export default function ProductDetails() {
  const { id } = useParams();
  const { addToCart } = useCart();

  // Find the exact product based on the URL parameter
  const product = products.find((p) => p.id === Number(id));

  if (!product) {
    return <div className="p-12 text-center text-2xl">Product not found.</div>;
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="max-w-7xl mx-auto px-4 py-12 flex flex-col md:flex-row gap-12"
    >
      <div className="md:w-1/2">
        <img
          src={product.image}
          alt={product.name}
          className="w-full rounded-lg shadow-lg object-cover h-[500px]"
        />
      </div>
      <div className="md:w-1/2 flex flex-col justify-center">
        <span className="text-amber-600 font-semibold tracking-wider uppercase text-sm mb-2">
          {product.category}
        </span>
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          {product.name}
        </h1>
        <p className="text-gray-600 text-lg mb-8">{product.description}</p>
        <div className="text-3xl font-bold text-gray-900 mb-8">
          ${product.price.toFixed(2)}
        </div>

        <div className="flex gap-4">
          <button
            onClick={() => addToCart(product)}
            className="bg-slate-900 text-white px-8 py-4 rounded-md font-bold hover:bg-slate-800 transition-colors flex-grow"
          >
            Add to Cart
          </button>
          <Link
            to="/"
            className="bg-gray-200 text-gray-800 px-8 py-4 rounded-md font-bold hover:bg-gray-300 transition-colors"
          >
            Back
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
