import React from "react";
import HealthHeroSection from "@/modules/Health/HealthHeroSection";
import HealthSectionOne from "@/modules/Health/HealthSectionOne";
import HealthSectionTwo from "@/modules/Health/HealthSectionTwo";
import "../../globals.css";
import HealthSectionThree from "@/modules/Health/HealthSectionThree";
import HealthSectionFour from "@/modules/Health/HealthSectionFour";

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
