import HeroBanner from "@/app/components/home/HeroBanner";
// import BrandTagline from "@/app/components/home/BrandTagline";
import FeaturedProducts from "@/app/components/home/FeaturedProducts";
import WhyWaffhil from "@/app/components/home/WhyWaffhil";
import StoreCount from "@/app/components/home/StoreCount";
import FranchiseCTA from "@/app/components/home/FranchiseCTA";
import BusinessEngineering from "./components/home/BusinessEngineering";
import Testimonials from "./components/home/Testimonials";
import FranchiseNetwork from "./components/home/FranchiseNetwork";
import FAQ from "./components/home/Faq";
import Formss from "./components/home/Formss";
import AboutUs from "./components/home/AboutUs";

export default function HomePage() {
  return (
    <>
      <HeroBanner />
      {/* <BrandTagline /> */}
      <AboutUs/>
      <StoreCount />
      <WhyWaffhil />
      <FranchiseNetwork/>
      <FeaturedProducts />
      <BusinessEngineering/>
      <FranchiseCTA />
      <Testimonials/>
      <FAQ/>
      <Formss/>

    </>
  );
}