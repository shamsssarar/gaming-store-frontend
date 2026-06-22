import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8 border-t border-slate-800 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* 1. Brand Section */}
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <Link to="/" className="text-2xl font-bold tracking-tight text-amber-500 mb-4 block">
              SD <span className="text-white">Store</span>
            </Link>
            <p className="text-sm text-slate-400 mt-4 leading-relaxed">
              Premium gaming gear and tech accessories built for performance. Elevate your setup with our curated collection of industry-leading hardware.
            </p>
          </div>

          {/* 2. Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4 uppercase tracking-wider text-sm">Shop</h3>
            <ul className="space-y-3 text-sm">
              <li><Link to="/" className="hover:text-amber-400 transition-colors">All Products</Link></li>
              <li><Link to="/" className="hover:text-amber-400 transition-colors">Gaming Mice</Link></li>
              <li><Link to="/" className="hover:text-amber-400 transition-colors">Mechanical Keyboards</Link></li>
              <li><Link to="/" className="hover:text-amber-400 transition-colors">Audio & Headsets</Link></li>
            </ul>
          </div>

          {/* 3. Support Links */}
          <div>
            <h3 className="text-white font-semibold mb-4 uppercase tracking-wider text-sm">Support</h3>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-amber-400 transition-colors">Track Your Order</a></li>
              <li><a href="#" className="hover:text-amber-400 transition-colors">Returns & Exchanges</a></li>
              <li><a href="#" className="hover:text-amber-400 transition-colors">Shipping Info</a></li>
              <li><a href="#" className="hover:text-amber-400 transition-colors">Contact Us</a></li>
            </ul>
          </div>

          {/* 4. Newsletter Form */}
          <div>
            <h3 className="text-white font-semibold mb-4 uppercase tracking-wider text-sm">Stay Updated</h3>
            <p className="text-sm text-slate-400 mb-4">Subscribe for the latest gear drops and exclusive deals.</p>
            <form className="flex" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 rounded-l-md bg-slate-800 border border-slate-700 text-white focus:outline-none focus:border-amber-500 transition-colors placeholder-slate-500"
              />
              <button
                type="submit"
                className="bg-amber-600 hover:bg-amber-700 text-white px-4 py-2 rounded-r-md font-medium transition-colors"
              >
                Join
              </button>
            </form>
          </div>

        </div>

        {/* Bottom Copyright Bar */}
        <div className="border-t border-slate-800 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-slate-500">
          <p>&copy; {new Date().getFullYear()} SD Tech Store. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}