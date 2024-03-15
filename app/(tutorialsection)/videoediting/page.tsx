import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FaWhatsappSquare } from "react-icons/fa";

export default function VideoEditing() {
  const PATHMAIN = "/tools/";
  const iconspaths = [
    "ae.png",
    "ai.png",
    "au.png",
    // "c4d.png",
    // "figma.png",
    // "pr.png",
    "ps.png",
    // "Rive.png",
  ];
  return (
    <section className="w-screen md:w-full h-auto relative">
      <div className="maincontainer  w-full h-auto">
        <div className="flex flex-col justify-between items-center mt-10">
          <p className="font-extrabold opacity-80 text-2xl md:text-4xl text-center">
            Video editing is story-telling.
          </p>
          <p className="font-light line-clamp-3 opacity-80 text-xs md:text-base text-center mt-2">
            Video editing is a fulfilling and mentally engaging skill; you will
            never get bored, and it rewards your creative endeavours.
          </p>
        </div>
        <div className="flex flex-col gap-2 justify-center items-center py-2 md:py-4">
          <p>You want to learn; let's talk.</p>
          <p className="animate-bounce duration-1000 delay-1000">↓</p>
          <a href={"https://wa.me/+2348146339697"} target="_blank">
            <div className="">
              <FaWhatsappSquare className="text-green-500 size-[40px] md:size-[45px]" />
            </div>
          </a>
        </div>
        <div className="w-full flex md:flex-row md:overflow-hidden overflow-x-scroll gap-2 mt-3 md:mt-5 h-[170px] md:h-[250px]">
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

          <div className="w-full flex justify-center items-center pt-3 md:pt-2">
            <Image
              src={"/tools/pr.png"}
              alt="placeholder"
              width={150}
              height={150}
            />
          </div>
          <div className="flex gap-2 w-full justify-center items-center py-4">
            <div className="">
              {/* <Link href={"/videoediting/premierepro-tools"}> */}
              <Button className="py-2 px-4 rounded-full">
                Premiere Pro Tools
              </Button>
              {/* </Link> */}
            </div>
            <div className="">
              {/* <Link href={"/videoediting/editing-roadmap"}> */}
              <Button className="py-2 px-4 rounded-full">Roadmap</Button>
              {/* </Link> */}
            </div>
          </div>
          <div className="w-full flex flex-col justify-center items-center">
            <div className=" flex  gap-2">
              {iconspaths.map((x, index) => Icons(PATHMAIN + x))}
            </div>
            <p className="md:text-base text-sm text-center">
              We will also touch on these tools to make you a well-rounded
              editor.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Icons(path: string) {
  return (
    <div className="w-[50px] h-[50px] relative">
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
