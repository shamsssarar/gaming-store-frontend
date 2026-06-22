import { Link } from "react-router-dom";

import { products } from "../../../data";
import ProductCard from "../../ui/ProductCard";

export default function FeaturedProducts() {
  // We handle the data slicing directly inside this component now
  const featured = products.slice(0, 4);

  return (
    <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full border-t border-slate-200">
      <div className="flex justify-between items-end mb-12">
        <div>
          <span className="text-amber-600 font-bold tracking-wider uppercase text-sm">
            Top Tier Gear
          </span>
          <h2 className="text-4xl font-bold text-slate-900 tracking-tight mt-2">
            Featured Products
          </h2>
        </div>
        <Link
          to="/shop"
          className="text-slate-600 hover:text-amber-600 font-medium transition-colors border-b-2 border-transparent hover:border-amber-600 pb-1"
        >
          View All &rarr;
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {featured.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
