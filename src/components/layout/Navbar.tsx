import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useCart } from "../../context/CartContext";

export default function Navbar() {
  const { cart } = useCart();
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // Calculate total number of items in the cart
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  // Listen for scroll events to trigger the background transition
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Determine if we are on the Home page
  const isHome = location.pathname === "/";

  // If we are scrolled down, OR if we are not on the home page, apply the dark background
  const navBackground =
    isScrolled || !isHome
      ? "bg-slate-900/95 backdrop-blur-md shadow-md py-4"
      : "bg-transparent py-6";

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${navBackground}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <Link
          to="/"
          className="text-2xl font-black tracking-tight text-amber-500 hover:scale-105 transition-transform"
        >
          SD <span className="text-white">Store</span>
        </Link>

        {/* Navigation Links */}
        <div className="flex items-center gap-8">
          <div className="hidden sm:flex items-center gap-6 text-sm font-semibold text-slate-300">
            <Link to="/" className="hover:text-amber-400 transition-colors">
              Home
            </Link>
            <Link to="/shop" className="hover:text-amber-400 transition-colors">
              Shop Gear
            </Link>
            <Link to="#" className="hover:text-amber-400 transition-colors">
              Support
            </Link>
          </div>

          {/* Vertical Divider */}
          <div className="hidden sm:block h-6 w-px bg-slate-700"></div>

          {/* Cart Icon with Dynamic Badge */}
          <Link
            to="/cart"
            className="relative text-white hover:text-amber-400 transition-colors p-2 group"
            aria-label="Shopping Cart"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 transform group-hover:scale-110 transition-transform"
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

            {/* The Notification Badge */}
            {totalItems > 0 && (
              <span className="absolute -top-1 -right-1 bg-amber-500 text-slate-900 text-[10px] font-bold h-5 w-5 flex items-center justify-center rounded-full shadow-lg border-2 border-slate-900">
                {totalItems}
              </span>
            )}
          </Link>
        </div>
      </div>
    </nav>
  );
}
