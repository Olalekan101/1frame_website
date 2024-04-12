import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";
import { FaWhatsappSquare } from "react-icons/fa";
import Image from "next/image";
import { ContactPopover } from "./ContactPopover";
import { healthcareProviderData } from "@/data/sitedata";
import { PortfolioTopRive } from "./RiveComponents";

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
      <div className="maincontainer flex flex-col justify-between items-center  w-full h-auto">
        <div className="flex flex-col justify-center items-center w-full h-auto">
          <div className="flex flex-col justify-center items-center gap-2 w-full">
            <p className="text-xs md:text-base pb-2 opacity-50">
              Video Editing . Motion Design . 2D Animation
            </p>
            <h1 className="text-3xl text-center">
              We provide valuable training at no cost.
            </h1>
            <p className="text-lg opacity-40 md:mt-3 text-center">
              All you need is the discipline to do the training and gain
              valuable skills.
            </p>
          </div>
        </div>

        <div className=" h-[100px] md:h-[200px] w-full flex justify-center items-center">
          <PortfolioTopRive />
        </div>
        <div className="w-full flex justify-center items-start">
          <Link
            href={"/alight-motion"}
            className="hover:bg-white/30 duration-100 ease-in-out overflow-clip"
          >
            <div className="flex gap-2 border-2 border-white/40 rounded-xl px-4 py-4 hover:bg-white/30 duration-100 ease-in-out">
              <Image
                src={"/tools/am.png"}
                alt="alight motion logo"
                width={30}
                height={30}
              />
              <p className="font-bold opacity-70 text-2xl ">
                Alight Motion Training
              </p>
            </div>
          </Link>
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
