import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

export default function HealthSectionTwo() {
  return (
    <section className="w-screen md:w-full h-auto relative mt-16">
      <div className="maincontainer flex md:flex-row flex-col gap-2 justify-between items-center w-full h-auto">
        <div className="md:w-[50%] w-full ">
          <div className="">
            <p className="text-3xl md:text-5xl font-bold opacity-80">
              Outstanding contents that will bring out the uniqueness of the
              healthcare provider
            </p>
            <p className="mt-3 opacity-80">
              Every piece of content we produce, we make sure it is unique and
              within the healthcare provider brand identity; no generic content.
            </p>
          </div>
        </div>
        <div className="md:w-[50%] w-full relative order-2 md:order-1">
          <div className="w-full aspect-square relative inset-0">
            <Image
              src={"/Images/1frame sec1.png"}
              alt="section two"
              fill
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
