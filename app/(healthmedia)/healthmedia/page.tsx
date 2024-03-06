import React from "react";
import HealthHeroSection from "@/modules/HealthHeroSection";
import HealthSectionOne from "@/modules/HealthSectionOne";
import HealthSectionTwo from "@/modules/HealthSectionTwo";
import "../../globals.css";
import HealthSectionThree from "@/modules/HealthSectionThree";
import HealthSectionFour from "@/modules/HealthSectionFour";

export default function HealthMediaHeroSection() {
  return (
    <main className="flex  flex-col">
      <HealthHeroSection />
      <HealthSectionOne />
      <HealthSectionTwo />
      <HealthSectionThree />
      <HealthSectionFour />
    </main>
  );
}
