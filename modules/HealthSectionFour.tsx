import Image from "next/image";
import React from "react";

export default function HealthSectionFour() {
  return (
    <section className="w-screen md:w-full h-auto relative mt-16">
      <div className="maincontainer flex flex-col gap-2 justify-between items-center w-full h-auto">
        <div className="w-full">
          <div className="flex flex-col h-full justify-start items-start">
            <p className="md:text-3xl text-2xl font-bold opacity-80">
              With us, there will be no more boring and dry social media pages.
              We will provide consistent media content that will engage the
              audience.
            </p>
            <p className="mt-3 opacity-80">
              Yes, we know how tedious and costly it is sometimes for healthcare
              providers to handle their own content creation, so we will handle
              all of that and provide quality content that will add more value
              to the healthcare provider. 
            </p>
          </div>
        </div>
        <div className="w-full relative">
          <div className="w-full aspect-video relative inset-0 h-[100px] md:h-[200px]">
            <Image
              src={"/Images/1frame sec3.png"}
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
