import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

export default function Cart() {
  const { cart, removeFromCart, updateQuantity, cartTotal } = useCart();

  // 1. Handle the Empty State gracefully
  if (cart.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-24 text-center min-h-[60vh] flex flex-col items-center justify-center">
        <h2 className="text-3xl font-bold text-slate-900 mb-4">
          Your cart is empty
        </h2>
        <p className="text-slate-500 mb-8">
          Looks like you haven't added any gear yet.
        </p>
        <Link
          to="/shop"
          className="bg-amber-600 text-white px-8 py-3 rounded-md font-medium hover:bg-amber-700 transition-colors"
        >
          Continue Shopping
        </Link>
      </div>
    );
  }

  // 2. Render the Populated Cart
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-slate-900 mb-8">Shopping Cart</h1>

      <div className="flex flex-col lg:flex-row gap-12">
        {/* Left Side: Cart Items List */}
        <div className="lg:w-2/3">
          {cart.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }} // Staggers the entrance animation
              className="flex flex-col sm:flex-row items-center gap-6 border-b border-slate-200 py-6"
            >
              {/* Product Image */}
              <img
                src={item.image}
                alt={item.name}
                className="w-24 h-24 object-cover rounded-md border border-slate-200"
              />

              {/* Product Details */}
              <div className="flex-grow text-center sm:text-left">
                <Link
                  to={`/product/${item.id}`}
                  className="text-lg font-semibold text-slate-900 hover:text-amber-600 transition-colors"
                >
                  {item.name}
                </Link>
                <p className="text-slate-500 text-sm mt-1">{item.category}</p>
              </div>

              {/* Controls and Pricing */}
              <div className="flex flex-col sm:flex-row items-center gap-4 mt-4 sm:mt-0">
                {/* Quantity Adjustment Buttons */}
                <div className="flex items-center border border-slate-300 rounded-md bg-white">
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    className="px-3 py-1 text-slate-600 hover:bg-slate-100 transition-colors font-medium"
                  >
                    -
                  </button>
                  <span className="px-3 py-1 font-medium text-slate-900 border-x border-slate-300">
                    {item.quantity}
                  </span>
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    className="px-3 py-1 text-slate-600 hover:bg-slate-100 transition-colors font-medium"
                  >
                    +
                  </button>
                </div>

                {/* Subtotal for this specific item */}
                <div className="w-24 text-right font-bold text-slate-900">
                  ${(item.price * item.quantity).toFixed(2)}
                </div>

                {/* Remove Button */}
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-slate-400 hover:text-red-500 p-2 transition-colors"
                  aria-label="Remove item"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                    />
                  </svg>
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Right Side: Order Summary Sticky Sidebar */}
        <div className="lg:w-1/3">
          <div className="bg-white border border-slate-200 rounded-lg p-6 sticky top-24 shadow-sm">
            <h2 className="text-xl font-bold text-slate-900 mb-6">
              Order Summary
            </h2>

            <div className="space-y-4 mb-6 text-slate-600">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span className="font-medium text-slate-900">
                  ${cartTotal.toFixed(2)}
                </span>
              </div>
              <div className="flex justify-between">
                <span>Shipping</span>
                <span className="text-emerald-600 font-medium">Free</span>
              </div>
              <div className="flex justify-between">
                <span>Estimated Tax (8%)</span>
                <span className="font-medium text-slate-900">
                  ${(cartTotal * 0.08).toFixed(2)}
                </span>
              </div>
            </div>

            <div className="border-t border-slate-200 pt-4 mb-6">
              <div className="flex justify-between items-center text-lg font-bold text-slate-900">
                <span>Total</span>
                <span>${(cartTotal * 1.08).toFixed(2)}</span>
              </div>
            </div>

            <Link to="/checkout" className="block w-full">
              <motion.button
                whileTap={{ scale: 0.98 }}
                className="w-full bg-slate-900 text-white py-4 rounded-md font-bold hover:bg-slate-800 transition-colors shadow-md"
              >
                Proceed to Checkout
              </motion.button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
