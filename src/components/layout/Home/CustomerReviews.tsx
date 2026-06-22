import { motion } from "framer-motion";

const reviews = [
  {
    id: 1,
    name: "Alex C.",
    role: "Esports Competitor",
    text: "The precision on the wireless mouse is unreal. I've completely eliminated cable drag, and the battery lasts through tournament weekends without a single charge.",
    rating: 5,
  },
  {
    id: 2,
    name: "Sarah M.",
    role: "Software Engineer",
    text: "Switched to their mechanical keyboard for coding. The tactile feedback is perfect, and the build quality feels like it will last a decade. Highly recommended.",
    rating: 5,
  },
  {
    id: 3,
    name: "David K.",
    role: "Twitch Streamer",
    text: "The studio audio headset isolated my voice perfectly. My chat immediately noticed the quality jump. It is extremely comfortable for 8+ hour sessions.",
    rating: 5,
  },
];

export default function CustomerReviews() {
  return (
    <section className="py-24 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-amber-600 font-bold tracking-wider uppercase text-sm">
            Verified Buyers
          </span>
          <h2 className="text-4xl font-bold text-slate-900 tracking-tight mt-2">
            Tested by Professionals
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, i) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: i * 0.15 }}
              className="bg-slate-50 p-8 rounded-2xl border border-slate-100 hover:shadow-lg transition-shadow duration-300"
            >
              {/* SVG Star Rating */}
              <div className="flex gap-1 mb-6 text-amber-500">
                {[...Array(review.rating)].map((_, index) => (
                  <svg
                    key={index}
                    className="w-5 h-5 fill-current"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              <p className="text-slate-600 mb-8 leading-relaxed italic">
                "{review.text}"
              </p>

              <div className="flex items-center gap-4 mt-auto">
                <div className="w-12 h-12 bg-slate-200 rounded-full flex items-center justify-center text-slate-700 font-bold text-xl">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <h4 className="text-slate-900 font-bold">{review.name}</h4>
                  <span className="text-slate-500 text-sm">{review.role}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
