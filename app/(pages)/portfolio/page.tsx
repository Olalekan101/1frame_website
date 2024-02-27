import React from "react";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import Image from "next/image";
import Rive from "@rive-app/react-canvas";
import { PortfolioTopRive } from "@/modules/RiveComponents";

export default function Portfolio() {
  return (
    <section className="w-full py-4  h-full">
      <div className="maincontainer flex flex-col w-full justify-between items-center">
        <div className="h-[100px] w-full flex justify-center items-center">
          {/* <Rive src="/rive/1frame.riv" /> */}
          <PortfolioTopRive />
        </div>
        <div className=" flex flex-col md:flex-row mt-10 ">
          <div className=" w-full md:w-[50%]">
            {/* <Link href={"/about"}>
              <div className="border border-green-500 px-2 py-0 md:px-4 md:py-2 rounded-full  mb-3 w-fit">
                <p className=" text-[6px] md:text-xs">1Frame Portfolio</p>
              </div>
            </Link> */}
            <div className="relative ">
              <Image
                src={"/Images/1frame_portfolio.png"}
                alt="1frame logo"
                width={200}
                height={50}
                className=""
              />
            </div>
            <p className="text-2xl md:text-4xl opacity-65">
              Welcome Here are the past projects I have worked on. Please have a
              look. 
            </p>
          </div>
          <div className=" w-full md:w-[50%] z-20 relative flex justify-center items-start">
            <div className="absolute  aspect-video w-[90%] border-2  rounded-xl overflow-clip ">
              <Image
                src={"/Images/Hero_Image.webp"}
                fill
                alt="placeholder"
                className="object-cover h-full w-full"
              />
            </div>
          </div>
        </div>

        <div className="flex mt-20 w-full"></div>
      </div>
    </section>
  );
}
