import { motion, type Variants } from "framer-motion";
import { Link } from "react-router-dom";
import { products } from "../../../data";
import ProductCard from "../../ui/ProductCard";

export default function FeaturedProducts() {
  const featured = products.slice(0, 4);

  // Staggered reveal animation settings
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Delay between each card reveal
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full border-t border-slate-200">
      <div className="flex justify-between items-end mb-12">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-amber-600 font-bold tracking-wider uppercase text-sm">
            Top Tier Gear
          </span>
          <h2 className="text-4xl font-bold text-slate-900 tracking-tight mt-2">
            Featured Products
          </h2>
        </motion.div>
        <Link
          to="/shop"
          className="text-slate-600 hover:text-amber-600 font-medium transition-colors border-b-2 border-transparent hover:border-amber-600 pb-1"
        >
          View All &rarr;
        </Link>
      </div>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {featured.map((product) => (
          <motion.div key={product.id} variants={itemVariants}>
            <ProductCard product={product} />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
