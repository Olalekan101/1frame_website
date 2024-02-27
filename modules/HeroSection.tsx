import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";
import { FaWhatsappSquare } from "react-icons/fa";
import Image from "next/image";
import { ContactPopover } from "./ContactPopover";

export default function HeroSection() {
  const PATHMAIN = "/tools/";
  const iconspaths = [
    "ae.png",
    "ai.png",
    "au.png",
    "c4d.png",
    "figma.png",
    "pr.png",
    "ps.png",
    "Rive.png",
  ];
  return (
    <section className="w-screen md:w-full h-auto py-0 md:py-4 relative">
      <div className="maincontainer flex flex-col md:flex-row justify-between items-start md:items-start w-full h-auto">
        <div className="flex flex-col justify-start items-start w-full h-auto">
          <div className="flex flex-col gap-2 w-full">
            <p className="text-xs md:text-base pb-2 opacity-50">
              Video Editing . Motion Design . 2D Animation
            </p>
            <h1 className="text-3xl">
              I'm a creative video editor who creates engaging content.
            </h1>
            <p className="text-sm font-thin opacity-40">
              I have worked on several projects, which has given me the
              experience and ability to deliver top-notch results.
            </p>
          </div>
          <div className="flex flex-col md:flex-row justify-center md:justify-start items-center gap-2 mt-8 mx-auto md:mx-0">
            <div className="z-10">
              <ContactPopover />
            </div>
            <div className="">
              <Link href={"/portfolio"}>
                <p className="opacity-80 underline">Check out my portfolio</p>
              </Link>
            </div>
          </div>
          <div className="mt-4 flex flex-col gap-4">
            <div className="">
              <p className="text-sm">Tools I use</p>
            </div>
            <div className="grid grid-cols-4 gap-4 justify-start items-center">
              {iconspaths.map((x, index) => Icons(PATHMAIN + x))}
            </div>
          </div>
        </div>

        <div className="w-full h-[500px] z-20 relative flex justify-center items-start gap-4">
          <div className="absolute  aspect-square w-[90%] border-2  rounded-xl overflow-clip ">
            <Image
              src={"/Images/Hero_Image.webp"}
              fill
              alt="placeholder"
              className="object-contain h-full w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export function Icons(path: string) {
  return (
    <div className="w-[30px] h-[30px] relative">
      <div className="absolute w-full h-full inset-0">
        <Image
          src={path}
          alt="icons"
          fill
          className="w-full h-full object-contain"
        />
      </div>
    </div>
  );
}
