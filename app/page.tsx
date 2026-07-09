import HeroBanner from "@/app/components/home/HeroBanner";
import BrandTagline from "@/app/components/home/BrandTagline";
import FeaturedProducts from "@/app/components/home/FeaturedProducts";
import WhyWaffhil from "@/app/components/home/WhyWaffhil";
import StoreCount from "@/app/components/home/StoreCount";
import FranchiseCTA from "@/app/components/home/FranchiseCTA";

export default function HomePage() {
  return (
    <>
      <HeroBanner />
      <BrandTagline />
      <FeaturedProducts />
      <WhyWaffhil />
      <StoreCount />
      <FranchiseCTA />
    </>
  );
}