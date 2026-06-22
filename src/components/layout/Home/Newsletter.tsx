import { motion } from "framer-motion";

export default function Newsletter() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-amber-500 rounded-3xl p-8 md:p-16 relative overflow-hidden shadow-xl">
          {/* Decorative Pattern */}
          <div className="absolute top-0 right-0 -translate-y-12 translate-x-1/3 opacity-10 pointer-events-none">
            <svg width="404" height="384" fill="none" viewBox="0 0 404 384">
              <defs>
                <pattern
                  id="pattern-squares"
                  x="0"
                  y="0"
                  width="20"
                  height="20"
                  patternUnits="userSpaceOnUse"
                >
                  <rect x="0" y="0" width="4" height="4" fill="currentColor" />
                </pattern>
              </defs>
              <rect width="404" height="384" fill="url(#pattern-squares)" />
            </svg>
          </div>

          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="lg:w-1/2 text-center lg:text-left">
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
                Join the Vanguard.
              </h2>
              <p className="text-slate-900/80 text-lg font-medium">
                Subscribe for exclusive drops, early access to new tech, and 10%
                off your first hardware order.
              </p>
            </div>

            <div className="lg:w-1/2 w-full max-w-md">
              <form
                onSubmit={(e) => e.preventDefault()}
                className="flex flex-col sm:flex-row gap-3"
              >
                <input
                  type="email"
                  placeholder="Enter your email address"
                  required
                  className="flex-grow px-6 py-4 rounded-md border-0 focus:ring-4 focus:ring-slate-900/20 text-slate-900 placeholder-slate-500 font-medium transition-shadow outline-none"
                />
                <motion.button
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  className="bg-slate-900 text-white px-8 py-4 rounded-md font-bold hover:bg-slate-800 transition-colors shadow-lg"
                >
                  Subscribe
                </motion.button>
              </form>
              <p className="text-slate-900/60 text-xs mt-3 text-center lg:text-left">
                We care about your data in our{" "}
                <a href="#" className="underline hover:text-slate-900">
                  privacy policy
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
