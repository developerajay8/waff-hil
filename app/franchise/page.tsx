import FranchiseHero from "@/app/components/franchise/FranchiseHero";
import WhyWaffhilFranchise from "@/app/components/franchise/WhyWaffhilFranchise";
import InvestmentDetails from "@/app/components/franchise/InvestmentDetails";
import SupportSystem from "@/app/components/franchise/SupportSystem";
import ProcessTimeline from "@/app/components/franchise/ProcessTimeline";
import FranchiseFAQ from "@/app/components/franchise/FranchiseFAQ";
import EnquiryForm from "@/app/components/franchise/EnquiryForm";
import ChoosePath from "../components/franchise/ChoosePath";
// import ContactDetails from "@/app/components/franchise/ContactDetails";
import ResponsibilityMatrix from "../components/franchise/ResponsibilityMatrix";

export const metadata = {
  title: "Franchise Ecosystem Hub | Partner With Waffhil",
  description: "Launch your ultra-premium dessert business with high ROI modeling.",
};

export default function FranchisePage() {
  return (
    <>
      <FranchiseHero />
      <WhyWaffhilFranchise />
      <InvestmentDetails />
      <SupportSystem />
      <ChoosePath/>
      <ResponsibilityMatrix/>
      <ProcessTimeline />
      <FranchiseFAQ />
      <EnquiryForm />

      
      {/* <ContactDetails /> */}
    </>
  );
}