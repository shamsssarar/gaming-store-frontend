import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useCart } from "../../context/CartContext";

export default function Navbar() {
  const { cart } = useCart();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
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

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  // Determine if we are on the Home page
  const isHome = location.pathname === "/";

  // If we are scrolled down, OR if we are not on the home page, apply the dark background
  const navBackground =
    isScrolled || !isHome || isMobileMenuOpen
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
          className="text-2xl font-black tracking-tight text-amber-500 hover:scale-105 transition-transform relative z-50"
        >
          SD <span className="text-white">Store</span>
        </Link>

        {/* Right Side Controls */}
        <div className="flex items-center gap-6">
          {/* Desktop Navigation Links */}
          <div className="hidden sm:flex items-center gap-6 text-sm font-semibold text-slate-300">
            <Link to="/" className="hover:text-amber-400 transition-colors">
              Home
            </Link>
            <Link to="/shop" className="hover:text-amber-400 transition-colors">
              Shop Gear
            </Link>
            <Link
              to="/about"
              className="hover:text-amber-400 transition-colors"
            >
              Our Story
            </Link>
          </div>

          {/* Vertical Divider (Desktop Only) */}
          <div className="hidden sm:block h-6 w-px bg-slate-700"></div>

          {/* Cart Icon with Dynamic Badge */}
          <Link
            to="/cart"
            className="relative text-white hover:text-amber-400 transition-colors p-2 group z-50"
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

            {totalItems > 0 && (
              <span className="absolute -top-1 -right-1 bg-amber-500 text-slate-900 text-[10px] font-bold h-5 w-5 flex items-center justify-center rounded-full shadow-lg border-2 border-slate-900">
                {totalItems}
              </span>
            )}
          </Link>

          {/* 3. Mobile Menu Toggle Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="sm:hidden text-white hover:text-amber-400 transition-colors p-2 z-50"
            aria-label="Toggle Menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                /> // X Icon
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                /> // Hamburger Icon
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* 4. Mobile Menu Dropdown Panel */}
      <div
        className={`sm:hidden absolute top-full left-0 w-full bg-slate-900/95 backdrop-blur-md border-t border-slate-800 transition-all duration-300 origin-top overflow-hidden ${
          isMobileMenuOpen
            ? "max-h-64 opacity-100 py-4"
            : "max-h-0 opacity-0 py-0"
        }`}
      >
        <div className="flex flex-col px-4 gap-4 text-center font-semibold text-slate-300">
          <Link
            to="/"
            className="block py-2 hover:text-amber-400 hover:bg-slate-800 rounded-md transition-colors"
          >
            Home
          </Link>
          <Link
            to="/shop"
            className="block py-2 hover:text-amber-400 hover:bg-slate-800 rounded-md transition-colors"
          >
            Shop Gear
          </Link>
          <Link
            to="/about"
            className="block py-2 hover:text-amber-400 hover:bg-slate-800 rounded-md transition-colors"
          >
            Our Story
          </Link>
        </div>
      </div>
    </nav>
  );
}
