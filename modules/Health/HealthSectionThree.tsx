import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

export default function HealthSectionTwo() {
  return (
    <section className="w-screen md:w-full h-auto relative mt-10 md:mt-16">
      <div className="maincontainer flex md:flex-row flex-col gap-2 justify-between items-center w-full h-auto">
        <div className="md:w-[50%] w-full relative">
          <div className="w-full aspect-square relative inset-0">
            <Image
              src={"/Images/1frame sec2.png"}
              alt="section two"
              fill
              className="w-full h-full object-contain"
            />
          </div>
        </div>

        <div className="md:w-[50%] w-full order-first md:order-2">
          <div className="flex flex-col h-full justify-start items-start ">
            <p className="md:text-5xl text-3xl font-bold opacity-80">
              From script writing to editing and animating, we will handle all
              of that.
            </p>
            <p className="mt-3 opacity-80">
              Yes, we know how tedious and costly it is sometimes for healthcare
              providers to handle their own content creation, so we will handle
              all of that and provide quality content that will add more value
              to the healthcare provider. 
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
