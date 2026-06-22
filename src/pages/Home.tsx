import HeroBanner from "../components/layout/Home/HeroBanner";
import FeaturedCategories from "../components/layout/Home/FeaturedCategories";

import WhyChooseUs from "../components/layout/Home/WhyChooseUs";

import SpecialOffers from "../components/layout/Home/SpecialOffers";
import CustomerReviews from "../components/layout/Home/CustomerReviews";
import BestSellers from "../components/layout/Home/BestSellers";
import Newsletter from "../components/layout/Home/Newsletter";
import FeaturedProducts from "../components/layout/Home/FeaturedProducts";

export default function Home() {
  return (
    <div className="flex flex-col w-full bg-slate-50">
      <HeroBanner />
      <FeaturedCategories />
      <FeaturedProducts />
      <SpecialOffers />
      <BestSellers />
      <CustomerReviews />
      <WhyChooseUs />
      <Newsletter />
    </div>
  );
}
