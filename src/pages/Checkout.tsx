import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

export default function Checkout() {
  const { cart, cartTotal } = useCart();
  const tax = cartTotal * 0.08;
  const finalTotal = cartTotal + tax;

  // Guard clause: If they navigate here with an empty cart, send them back
  if (cart.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-24 text-center min-h-[60vh] flex flex-col justify-center items-center">
        <h2 className="text-3xl font-bold text-slate-900 mb-4">Your cart is empty</h2>
        <Link to="/shop" className="bg-amber-600 text-white px-8 py-3 rounded-md font-medium hover:bg-amber-700 transition-colors">
          Return to Shop
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-24">
      
      {/* Premium Header */}
      <div className="flex items-center justify-between mb-12 border-b border-slate-200 pb-6">
        <h1 className="text-3xl font-bold text-slate-900">Secure Checkout</h1>
        <div className="flex items-center gap-2 text-emerald-600 font-medium">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
          </svg>
          <span className="text-sm">256-bit Encryption</span>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-16">
        
        {/* Left Column: Checkout Form */}
        <div className="lg:w-3/5">
          
          {/* Express Checkout Mock */}
          <div className="mb-10">
            <h2 className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-4">Express Checkout</h2>
            <div className="flex gap-4">
              <button className="flex-1 bg-slate-900 text-white py-3 rounded-md font-bold hover:bg-slate-800 transition-colors flex items-center justify-center gap-2">
                Pay
              </button>
              <button className="flex-1 bg-[#FFC439] text-slate-900 py-3 rounded-md font-bold hover:bg-[#F4BB36] transition-colors flex items-center justify-center gap-2">
                PayPal
              </button>
            </div>
            
            <div className="relative flex items-center py-8">
              <div className="flex-grow border-t border-slate-200"></div>
              <span className="flex-shrink-0 mx-4 text-slate-400 text-sm font-medium">OR CONTINUE WITH CREDIT CARD</span>
              <div className="flex-grow border-t border-slate-200"></div>
            </div>
          </div>

          <form onSubmit={(e) => e.preventDefault()} className="space-y-8">
            
            {/* Contact Info */}
            <section>
              <h2 className="text-xl font-bold text-slate-900 mb-4">Contact Information</h2>
              <div className="space-y-4">
                <input type="email" placeholder="Email Address" className="w-full px-4 py-3 rounded-md border border-slate-300 focus:border-amber-500 focus:ring-1 focus:ring-amber-500 outline-none transition-shadow" />
                <div className="flex items-center gap-2">
                  <input type="checkbox" id="newsletter" className="w-4 h-4 text-amber-600 rounded border-slate-300 focus:ring-amber-500" />
                  <label htmlFor="newsletter" className="text-sm text-slate-600">Email me with news and exclusive offers</label>
                </div>
              </div>
            </section>

            {/* Shipping Info */}
            <section>
              <h2 className="text-xl font-bold text-slate-900 mb-4">Shipping Address</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input type="text" placeholder="First Name" className="w-full px-4 py-3 rounded-md border border-slate-300 focus:border-amber-500 focus:ring-1 focus:ring-amber-500 outline-none transition-shadow" />
                <input type="text" placeholder="Last Name" className="w-full px-4 py-3 rounded-md border border-slate-300 focus:border-amber-500 focus:ring-1 focus:ring-amber-500 outline-none transition-shadow" />
                <input type="text" placeholder="Address" className="w-full px-4 py-3 rounded-md border border-slate-300 focus:border-amber-500 focus:ring-1 focus:ring-amber-500 outline-none transition-shadow md:col-span-2" />
                <input type="text" placeholder="City" className="w-full px-4 py-3 rounded-md border border-slate-300 focus:border-amber-500 focus:ring-1 focus:ring-amber-500 outline-none transition-shadow" />
                <input type="text" placeholder="Postal Code" className="w-full px-4 py-3 rounded-md border border-slate-300 focus:border-amber-500 focus:ring-1 focus:ring-amber-500 outline-none transition-shadow" />
              </div>
            </section>

            {/* Payment Info */}
            <section>
              <h2 className="text-xl font-bold text-slate-900 mb-4">Payment Details</h2>
              <div className="bg-slate-50 p-6 rounded-lg border border-slate-200 space-y-4">
                <input type="text" placeholder="Card Number" className="w-full px-4 py-3 rounded-md border border-slate-300 focus:border-amber-500 focus:ring-1 focus:ring-amber-500 outline-none transition-shadow font-mono" />
                <div className="grid grid-cols-2 gap-4">
                  <input type="text" placeholder="MM / YY" className="w-full px-4 py-3 rounded-md border border-slate-300 focus:border-amber-500 focus:ring-1 focus:ring-amber-500 outline-none transition-shadow text-center" />
                  <input type="text" placeholder="CVC" className="w-full px-4 py-3 rounded-md border border-slate-300 focus:border-amber-500 focus:ring-1 focus:ring-amber-500 outline-none transition-shadow text-center" />
                </div>
                <input type="text" placeholder="Name on Card" className="w-full px-4 py-3 rounded-md border border-slate-300 focus:border-amber-500 focus:ring-1 focus:ring-amber-500 outline-none transition-shadow" />
              </div>
            </section>

            <motion.button 
              whileTap={{ scale: 0.98 }}
              className="w-full bg-amber-600 text-white py-4 rounded-md font-bold text-lg hover:bg-amber-700 transition-colors shadow-lg"
            >
              Pay ${finalTotal.toFixed(2)}
            </motion.button>
          </form>
        </div>

        {/* Right Column: Order Summary (Sticky) */}
        <div className="lg:w-2/5">
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 lg:p-8 sticky top-24">
            <h2 className="text-lg font-bold text-slate-900 mb-6">In Your Bag</h2>
            
            {/* Scrollable item list if there are many items */}
            <div className="max-h-[40vh] overflow-y-auto pr-2 mb-6 space-y-4">
              {cart.map((item) => (
                <div key={item.id} className="flex items-center gap-4">
                  <div className="relative">
                    <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded-md border border-slate-200" />
                    <span className="absolute -top-2 -right-2 bg-slate-900 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
                      {item.quantity}
                    </span>
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-sm font-semibold text-slate-900 line-clamp-1">{item.name}</h3>
                    <p className="text-sm text-slate-500">${item.price.toFixed(2)}</p>
                  </div>
                  <div className="font-bold text-slate-900">
                    ${(item.price * item.quantity).toFixed(2)}
                  </div>
                </div>
              ))}
            </div>

            {/* Totals */}
            <div className="border-t border-slate-200 pt-6 space-y-3 text-sm">
              <div className="flex justify-between text-slate-600">
                <span>Subtotal</span>
                <span className="font-medium text-slate-900">${cartTotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-slate-600">
                <span>Shipping</span>
                <span className="text-emerald-600 font-medium">Free</span>
              </div>
              <div className="flex justify-between text-slate-600">
                <span>Taxes (8%)</span>
                <span className="font-medium text-slate-900">${tax.toFixed(2)}</span>
              </div>
            </div>

            <div className="border-t border-slate-200 mt-6 pt-6">
              <div className="flex justify-between items-center text-xl font-black text-slate-900">
                <span>Total</span>
                <span>${finalTotal.toFixed(2)}</span>
              </div>
            </div>
            
          </div>
        </div>

      </div>
    </div>
  );
}