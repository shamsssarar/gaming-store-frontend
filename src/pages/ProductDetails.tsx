import { useParams, Link } from "react-router-dom";
import { products } from "../data";
import { useCart } from "../context/CartContext";
import { motion } from "framer-motion";

export default function ProductDetails() {
  const { id } = useParams();
  const { addToCart } = useCart();

  const product = products.find((p) => p.id === Number(id));

  if (!product) {
    return <div className="text-center py-32 text-slate-500 text-xl">Product not found.</div>;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-24"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        
        {/* Left: Premium Product Imagery */}
        <div className="space-y-6">
          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="bg-white p-8 rounded-2xl border border-slate-200 shadow-xl"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-auto object-contain aspect-square"
            />
          </motion.div>
        </div>

        {/* Right: Product Details & Purchase Funnel */}
        <div className="flex flex-col">
          <div className="mb-8">
            <span className="text-amber-600 font-bold tracking-wider uppercase text-sm">
              {product.category}
            </span>
            <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mt-2 mb-6">
              {product.name}
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed mb-8">
              {product.description}
            </p>
            
            {/* Technical Specs - Industry Standard Addition */}
            <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 mb-8">
              <h3 className="font-bold text-slate-900 mb-4">Key Specifications</h3>
              <ul className="grid grid-cols-2 gap-4 text-sm text-slate-600">
                <li className="flex items-center gap-2">✔ High-Precision Sensor</li>
                <li className="flex items-center gap-2">✔ Ergonomic Design</li>
                <li className="flex items-center gap-2">✔ RGB Programmable</li>
                <li className="flex items-center gap-2">✔ 2-Year Warranty</li>
              </ul>
            </div>
          </div>

          <div className="text-4xl font-black text-slate-900 mb-8">
            ${product.price.toFixed(2)}
          </div>

          <div className="flex gap-4 mb-12">
            <button
              onClick={() => addToCart(product)}
              className="bg-slate-900 text-white px-12 py-4 rounded-md font-bold text-lg hover:bg-amber-600 transition-all shadow-lg shadow-slate-900/20 grow"
            >
              Add to Cart
            </button>
            <Link
              to="/shop"
              className="bg-slate-100 text-slate-900 px-8 py-4 rounded-md font-bold hover:bg-slate-200 transition-colors"
            >
              Back
            </Link>
          </div>

          {/* Trust Badges */}
          <div className="flex items-center gap-8 text-sm text-slate-500 border-t border-slate-200 pt-8">
            <div className="flex items-center gap-2">🚚 Free Shipping</div>
            <div className="flex items-center gap-2">🛡️ Secure Payment</div>
          </div>
        </div>
      </div>

      {/* Deep Dive Description Section */}
      <section className="mt-24 border-t border-slate-200 pt-16">
        <h2 className="text-2xl font-bold text-slate-900 mb-6">Product Overview</h2>
        <p className="text-slate-600 leading-relaxed max-w-3xl">
          Engineered for professionals who refuse to compromise, the {product.name} represents the pinnacle of 
          modern hardware design. Every curve and component has been optimized to provide a tactile experience that 
          minimizes fatigue and maximizes responsiveness. Whether you are navigating complex data sheets or competing 
          on the global stage, this device serves as a natural extension of your intent.
        </p>
      </section>
    </motion.div>
  );
}