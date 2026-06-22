import { Link } from "react-router-dom";

export default function FinalCTA() {
  return (
    <section className="bg-slate-900 py-24">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-white mb-6 tracking-tight">
          Ready to Upgrade Your Setup?
        </h2>
        <p className="text-slate-400 mb-10 text-lg">
          Stop blaming your hardware. Equip yourself with the tools required to
          dominate.
        </p>
        <Link
          to="/shop"
          className="inline-block bg-amber-600 text-white px-10 py-4 rounded-md font-bold text-lg hover:bg-amber-700 transition-colors shadow-lg shadow-amber-600/20"
        >
          Explore the Arsenal
        </Link>
      </div>
    </section>
  );
}
