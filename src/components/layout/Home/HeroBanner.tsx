import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function HeroBanner() {
  return (
    <section className="relative h-[100vh] bg-slate-900 flex items-center overflow-hidden pt-24 pb-20">
      {/* Abstract Background Elements */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute top-[-10%] right-[-5%] w-96 h-96 bg-amber-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="max-w-3xl">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-amber-500 font-bold tracking-wider uppercase text-sm mb-4 block"
          >
            Next-Gen Performance
          </motion.span>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-7xl font-extrabold text-white tracking-tight leading-tight mb-6"
          >
            Elevate Your <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-600">
              Battle Station.
            </span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-slate-400 mb-10 max-w-2xl leading-relaxed"
          >
            Discover premium, precision-engineered hardware designed for professionals and hardcore gamers who refuse to compromise.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex gap-4"
          >
            <Link to="/shop" className="bg-amber-600 text-white px-8 py-4 rounded-md font-bold hover:bg-amber-700 transition-all hover:shadow-[0_0_20px_rgba(217,119,6,0.4)]">
              Shop Collection
            </Link>
            <Link to="/about" className="px-8 py-4 rounded-md font-bold text-white border border-slate-700 hover:bg-slate-800 transition-colors">
              Explore Tech
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}