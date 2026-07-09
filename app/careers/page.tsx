"use client";

import { useState } from "react";
import CareersHero from "@/app/components/careers/CareersHero";
import OpenPositions, { Position } from "@/app/components/careers/OpenPositions";
import ApplicationForm from "@/app/components/careers/ApplicationForm";

const INITIAL_JOBS: Position[] = [
  {
    id: 1,
    title: "Boutique Store Manager",
    department: "Operations",
    location: "Mumbai Galleria",
    type: "Full-Time",
    compensation: "₹6 - 8 LPA",
    description: "Oversee complete floor operations, maintain premium material accounting metrics, customer hospitality architectures, and lead lounge training protocols.",
    requirements: ["3+ years experience in premium premium retail/QSR setups.", "Exceptional communication frameworks and team tracking capabilities.", "Proficiency in inventory resource analytics."]
  },
  {
    id: 2,
    title: "Master Pastry Chef",
    department: "Culinary Production",
    location: "Delhi Corporate Kitchen",
    type: "Full-Time",
    compensation: "₹5 - 7 LPA",
    description: "Lead sweet recipe configurations, manage raw chocolate profiles consistency, and maintain zero structural fault variations in batter output.",
    requirements: ["Degree in Culinary Arts or Pastry Art Specialization.", "Deep architectural understanding of continuous high-volume desert baking dynamics.", "High attention to detail profiles."]
  },
  {
    id: 3,
    title: "Commis Chef - Waffle Architecture",
    department: "Kitchen Team",
    location: "Bengaluru Lounge Node",
    type: "Full-Time",
    compensation: "₹3 - 4 LPA",
    description: "Execute fresh daily waffle bakes adhering strictly to heat configurations and structural garnish presentation protocols.",
    requirements: ["Freshers with professional culinary foundational training are welcome.", "Ability to perform flawlessly under continuous rapid high-density time parameters.", "Rigid kitchen hygiene compliance."]
  }
];

export default function CareersPage() {
  const [selectedJob, setSelectedJob] = useState<string>("");

  const handleApplyNow = (jobTitle: string) => {
    setSelectedJob(jobTitle);
    document.getElementById("application-form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className="bg-[#fcfdfe] min-h-screen pb-12">
      <CareersHero />
      <OpenPositions positions={INITIAL_JOBS} onApplyClick={handleApplyNow} />
      <ApplicationForm selectedJob={selectedJob} />
    </main>
  );
}