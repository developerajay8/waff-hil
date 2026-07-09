import AboutHero from "@/app/components/about/AboutHero";
import OurStory from "@/app/components/about/OurStory";
import MissionVision from "@/app/components/about/MissionVision";
import StoreCount from "../components/home/StoreCount";
import FranchiseCTA from "../components/home/FranchiseCTA";

export const metadata = {
  title: "About Us | Our Story & Vision - Waffhil",
  description: "Discover the heritage, mission, and craftsmanship behind Waffhil. Learn how we engineer India's premier luxury dessert and waffle network.",
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <OurStory />
      <StoreCount />
      <MissionVision />
            <FranchiseCTA />
    </>
  );
}