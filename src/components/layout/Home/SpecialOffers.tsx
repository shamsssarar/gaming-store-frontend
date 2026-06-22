import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function SpecialOffers() {
  return (
    <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
      <div className="bg-slate-900 rounded-3xl overflow-hidden relative shadow-2xl border border-slate-800">
        {/* Ambient Glow Effect */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-amber-600 rounded-full mix-blend-multiply filter blur-[100px] opacity-20"></div>
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-blue-600 rounded-full mix-blend-multiply filter blur-[100px] opacity-10"></div>
        </div>

        <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between p-8 md:p-16 gap-12">
          {/* Text Content */}
          <div className="lg:w-1/2">
            <span className="text-amber-500 font-bold tracking-wider uppercase text-sm mb-4 block">
              Limited Time Drop
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-6">
              The Pro Streamer Bundle
            </h2>
            <p className="text-slate-300 text-lg mb-8 leading-relaxed">
              Upgrade your entire setup at once. Get our flagship mechanical
              keyboard, precision mouse, and studio headset for 20% off the
              individual retail price.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 items-center">
              <Link
                to="/shop"
                className="bg-amber-600 text-white px-8 py-4 rounded-md font-bold hover:bg-amber-700 transition-colors w-full sm:w-auto text-center"
              >
                Claim Bundle - $349
              </Link>
              <div className="flex items-center gap-2">
                <span className="text-slate-400 text-sm font-medium">
                  Ends in:
                </span>
                <span className="text-amber-500 font-mono font-bold text-lg bg-slate-800 px-3 py-1 rounded">
                  12:45:00
                </span>
              </div>
            </div>
          </div>

          {/* Floating Product Image */}
          <motion.div
            className="lg:w-1/2 flex justify-center"
            animate={{ y: [0, -15, 0] }}
            transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
          >
            <img
              src="https://images.unsplash.com/photo-1593640408182-31c70c8268f5?w=800&q=80"
              alt="Pro Streamer Bundle"
              className="rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-slate-700 transform -rotate-2"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
