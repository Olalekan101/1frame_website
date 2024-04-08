import React from "react";
import Image from "next/image";
import { ProjectOneData } from "@/data/project_data/project_one/data";
import { GoDownload } from "react-icons/go";

export default function ProjectOne() {
  return (
    <section className="w-screen md:w-full h-auto relative">
      <div className="maincontainer mt-5 md:mt-10 flex flex-col justify-center items-center w-full h-auto">
        <div className="flex flex-col justify-center items-center gap-2 w-full">
          <p className="text-sm opacity-75 font-bold">Project One</p>
          <div className="flex flex-col gap-2 justify-center items-center">
            <p className="text-xl opacity-75 font-bold">The Star ⭐</p>
            <a
              href="https://alight.link/Xs1p3owTiRCshiEy5 "
              className="text-sm opacity-70 flex justify-center items-center gap-2"
            >
              Download Project <GoDownload />
            </a>
          </div>
        </div>
        <div className="flex justify-start items-center w-full md:w-[50%] relative mt-5">
          <p className=" w-full text-white text-xs md:text-xl py-2 opacity-70">
            A preview of what we are building
          </p>
        </div>
        <div className="w-full h-full aspect-square relative ">
          <Image
            src={"/training/project-one/rendered/thestargif.gif"}
            fill
            alt="gif"
          />
        </div>
        <div className="my-4">
          <p className="font-bold opacity-70 text-2xl">Lets goo</p>
        </div>
        {ProjectOneData.map((data, index) => (
          <div
            key={index}
            className="relative w-full mt-10 flex flex-col justify-center items-center md:flex-row"
          >
            <div className="relative aspect-video w-full h-fit mx-auto -mb-8">
              <Image
                src={data.graphics}
                alt="project gif"
                fill
                className="object-contain"
              />
            </div>
            <div className="relative w-[70%] md:w-full mx-auto mt-2 overflow-clip">
              <Image
                src={data.gif}
                alt="project gif"
                width={360}
                height={824}
                className="-translate-y-5"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
