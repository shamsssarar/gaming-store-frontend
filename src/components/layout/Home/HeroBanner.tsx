import { motion } from "framer-motion";
import { Link } from "react-router-dom";

// 1. Defining the Gaming Icon SVG strings for reuse
const gamingIcons = [
  // controller
  "M20 7h-9v10h9c1.657 0 3-1.343 3-3V10c0-1.657-1.343-3-3-3z M11 7H4c-1.657 0-3 1.343-3 3v4c0 1.657 1.343 3 3 3h7V7z M7.5 14a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z M7.5 10a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z M17 10h2v2h-2v-2z M17 14h2v2h-2v-2z",
  // keyboard key
  "M3 5h18a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2z M7 13h10v2H7v-2z M12 9v2H7V9h5z",
  // mouse icon
  "M12 2C9.239 2 7 4.239 7 7v10c0 2.761 2.239 5 5 5s5-2.239 5-5V7c0-2.761-2.239-5-5-5z M12 6c.552 0 1 .448 1 1v4c0 .552-.448 1-1 1s-1-.448-1-1V7c0-.552.448-1 1-1z",
];

export default function HeroBanner() {
  return (
    <section className="relative h-screen bg-slate-900 flex items-center justify-center overflow-hidden">
      {/* 2. Abstract Background Blobs (Original, tweaked for symmetry) */}
      <div className="absolute inset-0 z-0">
        <motion.div
          animate={{
            x: [0, 40, -30, 0],
            y: [0, -60, 30, 0],
            scale: [1, 1.1, 0.9, 1],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[10%] left-[10%] w-[500px] h-[500px] bg-amber-500 rounded-full mix-blend-multiply filter blur-[128px] opacity-20"
        />
        <motion.div
          animate={{
            x: [0, -40, 30, 0],
            y: [0, 60, -30, 0],
            scale: [1, 0.9, 1.1, 1],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
          className="absolute bottom-[10%] right-[10%] w-[500px] h-[500px] bg-blue-600 rounded-full mix-blend-multiply filter blur-[128px] opacity-15"
        />
      </div>

      {/* 3. New Dynamic Icon Streams */}
      <div className="absolute inset-0 z-0 overflow-hidden text-amber-500 opacity-5">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={`stream-h-${i}`}
            className="absolute h-px w-[200%] flex gap-12"
            style={{ top: `${15 + i * 18}%` }}
            animate={{ x: i % 2 === 0 ? ["100%", "-100%"] : ["100%", "-100%"] }}
            transition={{
              duration: 50 + i * 2,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {[...Array(10)].map((__, j) => (
              <svg
                key={j}
                className="w-7 h-7 flex-shrink-0"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d={gamingIcons[j % gamingIcons.length]} />
              </svg>
            ))}
          </motion.div>
        ))}
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={`stream-v-${i}`}
            className="absolute w-px h-[200%] flex flex-col gap-12"
            style={{ left: `${20 + i * 20}%` }}
            animate={{ y: ["-100%", "100%"] }}
            transition={{
              duration: 30 - i * 4,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {[...Array(10)].map((__, j) => (
              <svg
                key={j}
                className="w-6 h-6 flex-shrink-0"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d={gamingIcons[j % gamingIcons.length]} />
              </svg>
            ))}
          </motion.div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          // We add an onAnimationComplete to trigger the floating loop AFTER the entrance
          onAnimationComplete={() => {
            // You can keep the continuous loop simple by wrapping the inner contents
            // or using a specific loop variant.
          }}
        >
          {/* Wrap only the text content that should float in a secondary motion component */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
          >
            <span className="text-amber-500 font-bold tracking-widest uppercase text-xs mb-6 block">
              The Ultimate Hardware Dispatch
            </span>

            <h1 className="text-6xl md:text-8xl font-black text-white tracking-tighter leading-[0.9] mb-10">
              Elevate Your <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-600">
                Battle Station.
              </span>
            </h1>

            <p className="text-xl text-slate-400 mb-16 max-w-xl mx-auto leading-relaxed font-light">
              Precision-engineered hardware. <br />
              Designed for those who demand the{" "}
              <strong className="text-white">absolute edge</strong>.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <Link
                  to="/shop"
                  className="group relative bg-amber-600 text-white px-10 py-5 rounded-sm font-bold text-lg hover:bg-amber-700 transition-all flex items-center gap-2"
                >
                  <span className="relative z-10">Shop Collection</span>
                  <span className="text-2xl z-10">&rarr;</span>
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <Link
                  to="/about"
                  className="px-10 py-5 rounded-sm font-bold text-white border border-slate-700 hover:border-slate-500 transition-all hover:bg-slate-800 text-lg"
                >
                  Our Tech Mission
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Subtle Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-slate-500 text-sm font-bold tracking-widest uppercase"
      >
        Scroll to Explore
      </motion.div>
    </section>
  );
}
