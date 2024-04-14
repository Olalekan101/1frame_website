import React from "react";
import Image from "next/image";

export default function AboutOneFrame() {
  return (
    <section className="w-screen md:w-full h-auto py-0 md:py-4 relative">
      <div className="maincontainer mt-10 flex flex-col justify-center items-center  w-full h-full">
        <Image
          src={"/logo/1frame.png"}
          alt="alight motion logo"
          width={100}
          height={100}
        />
        <div className="mt-4 ">
          <p className="opacity-70 text-sm">
            The goal of 1frame is to provide{" "}
            <span className="font-bold">
              free, well-structured, high-quality training content
            </span>{" "}
            on motion graphics, 2D animation, video editing, and designs.
          </p>
        </div>
        <div className="mt-5 w-full mr-auto">
          <p className="font-sm opacity-70 text-left">contributors</p>
          <div className="flex flex-col gap-2 mt-2">
            <Image
              src={"/Images/profile pics.png"}
              alt="alight motion logo"
              width={50}
              height={50}
            />
            {/* <div className="">
              <p>Esanola Sunday</p>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}
