import React from "react";
import Image from "next/image";

export default function AboutOneFrame() {
  return (
    <section className="w-screen md:w-full h-auto py-0 md:py-4 relative">
      <div className="maincontainer flex flex-col justify-center items-center  w-full h-full">
        <Image
          src={"/Images/work-in-progress.png"}
          alt="alight motion logo"
          width={100}
          height={100}
        />
      </div>
    </section>
  );
}
