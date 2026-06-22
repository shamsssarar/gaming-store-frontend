import { motion } from "framer-motion";

export default function OriginStory() {
  return (
    <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col lg:flex-row items-center gap-16">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="lg:w-1/2"
        >
          <img
            src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&q=80"
            alt="Hardware Engineering"
            className="rounded-2xl shadow-2xl border border-slate-200"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="lg:w-1/2"
        >
          <h2 className="text-3xl font-bold text-slate-900 tracking-tight mb-6">
            The Masterminds Behind the Hardware
          </h2>
          <div className="space-y-4 text-slate-600 leading-relaxed text-lg">
            <p>
              It started with a simple frustration: standard consumer gear
              couldn't keep up with the APM (Actions Per Minute) required for
              high-level competitive play. Switches degraded, sensors spun out,
              and latency cost matches.
            </p>
            <p>
              We assembled a team of industrial designers and former esports
              competitors to architect a new standard. We obsess over
              micro-details—from the actuation force of a mechanical switch to
              the exact weight distribution of a wireless mouse.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
