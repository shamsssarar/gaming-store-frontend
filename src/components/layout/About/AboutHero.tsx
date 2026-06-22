import { motion } from "framer-motion";

export default function AboutHero() {
  return (
    <section className="relative bg-slate-900 py-32 overflow-hidden">
      {/* Abstract Background */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute top-[-20%] right-[-10%] w-[500px] h-[500px] bg-amber-500 rounded-full mix-blend-multiply filter blur-[120px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-amber-500 font-bold tracking-wider uppercase text-sm mb-4 block"
        >
          Our Mission
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-5xl md:text-6xl font-extrabold text-white tracking-tight mb-6"
        >
          Forged for the{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-600">
            Elite.
          </span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed"
        >
          We don't just build hardware. We engineer strategic advantages. SD
          Store was created for professionals who demand absolute precision from
          their loadouts.
        </motion.p>
      </div>
    </section>
  );
}
