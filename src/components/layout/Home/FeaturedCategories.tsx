import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const categories = [
  { name: 'Pro Mice', image: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=800&q=80', span: 'col-span-1 md:col-span-2 lg:col-span-1' },
  { name: 'Mechanical Keyboards', image: 'https://images.unsplash.com/photo-1595225476474-87563907a212?w=800&q=80', span: 'col-span-1 md:col-span-2 lg:col-span-2' },
  { name: 'Studio Audio', image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&q=80', span: 'col-span-1 md:col-span-2 lg:col-span-2' },
  { name: '4K Monitors', image: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=800&q=80', span: 'col-span-1 md:col-span-2 lg:col-span-1' },
];

export default function FeaturedCategories() {
  return (
    <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-slate-900 tracking-tight">Shop by Category</h2>
        <p className="text-slate-500 mt-4 max-w-2xl mx-auto">Curated collections for your specific loadout requirements.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-3 gap-6 auto-rows-[300px]">
        {categories.map((cat, index) => (
          <Link 
            to="/shop" 
            key={cat.name}
            className={`relative overflow-hidden rounded-xl group ${cat.span}`}
          >
            <div className="absolute inset-0 bg-slate-900">
              <motion.img 
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.6 }}
                src={cat.image} 
                alt={cat.name} 
                className="w-full h-full object-cover opacity-70 group-hover:opacity-50 transition-opacity"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-transparent to-transparent flex items-end p-8">
              <div>
                <h3 className="text-2xl font-bold text-white mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform">{cat.name}</h3>
                <span className="text-amber-500 font-medium opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-2">
                  Browse Gear <span className="text-xl">→</span>
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}