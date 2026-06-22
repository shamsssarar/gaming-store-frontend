import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext";

export default function Navbar() {
  const { cart } = useCart();

  // Calculate total number of items in the cart (not just unique products)
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <nav className="bg-slate-900 text-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link
          to="/"
          className="text-xl font-bold tracking-tight text-amber-500"
        >
          SD <span className="text-white">Store</span>
        </Link>

        <div className="flex gap-6 items-center">
          <Link to="/" className="hover:text-amber-400 transition-colors">
            Shop
          </Link>
          <Link
            to="/cart"
            className="relative hover:text-amber-400 transition-colors flex items-center gap-2"
          >
            <span>Cart</span>
            {totalItems > 0 && (
              <span className="bg-amber-500 text-slate-900 text-xs font-bold px-2 py-1 rounded-full">
                {totalItems}
              </span>
            )}
          </Link>
        </div>
      </div>
    </nav>
  );
}
