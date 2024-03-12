import React from "react";
import Image from "next/image";

export default function VideoEditing() {
  return (
    <section className="w-screen md:w-full h-auto relative">
      <div className="maincontainer  w-full h-auto">
        <div className="flex flex-col justify-between items-center mt-10">
          <p className="font-extrabold opacity-80 text-2xl md:text-4xl text-center">
            Video editing is story-telling.
            <br />
            Every cut is important.
          </p>
        </div>
        <div className="w-full flex md:flex-row overflow-x-scroll gap-2 mt-5 h-[170px] md:h-[250px]">
          <div className="w-full md:w-[50%] flex-none">
            <div className="relative w-full">
              <div className="absolute  aspect-video w-[90%] border-  rounded-xl overflow-clip ">
                <Image
                  src={"/Images/heroplaceholder.png"}
                  fill
                  alt="placeholder"
                  className="object-contain h-full w-full"
                />
              </div>
            </div>
          </div>
          <div className="w-full md:w-[50%] flex-none">
            <div className="relative w-full">
              <div className="absolute  aspect-video w-[90%] border-  rounded-xl overflow-clip ">
                <Image
                  src={"/Images/herotwo.png"}
                  fill
                  alt="placeholder"
                  className="object-contain h-full w-full"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="w-full justify-center items-start mt-5">
          <div className="w-full flex flex-col justify-center items-center text-center md:text-left">
            <p className="font-bold text-2xl ">
              We will be using Premiere Pro, the industry standard.
            </p>
            <p className="md:text-base text-sm">
              Once you understand Premiere Pro, you can work with any other
              editing software.
            </p>
          </div>
          <div className="w-full flex justify-center items-center pt-5">
            <Image
              src={"/tools/pr.png"}
              alt="placeholder"
              width={150}
              height={150}
            />
          </div>
          <div className="w-full flex justify-center items-center"></div>
        </div>
      </div>
    </section>
  );
}
