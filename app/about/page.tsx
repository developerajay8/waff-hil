import AboutHero from "@/app/components/about/AboutHero";
import OurStory from "@/app/components/about/OurStory";
import MissionVision from "@/app/components/about/MissionVision";
import StoreCount from "../components/home/StoreCount";
import FranchiseCTA from "../components/home/FranchiseCTA";
import FranchiseNetwork from "../components/home/FranchiseNetwork";

export const metadata = {
  title: "About Us | Our Story & Vision - Waff~hill",
  description: "Discover the heritage, mission, and craftsmanship behind Waff~hill. Learn how we engineer India's premier luxury dessert and waffle network.",
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <OurStory />
      <MissionVision />
            <FranchiseCTA />
      <StoreCount />
      <FranchiseNetwork/>
    </>
  );
}