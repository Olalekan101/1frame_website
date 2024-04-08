import { CreateProjectData } from "@/data/project_data/create_a_project/data";
import React from "react";
import Image from "next/image";

export default function CreatingProject() {
  return (
    <section className="w-screen md:w-full h-auto relative">
      <div className="maincontainer mt-5 md:mt-10 flex flex-col justify-center items-center w-full h-auto">
        <div className="">
          <p className="text-2xl opacity-70  text-center ">
            How to Create a Project in Alight Motion
          </p>
          <p className=" opacity-70  text-center ">What you need to know</p>
        </div>
        <div className="">
          {CreateProjectData.map((data, index) => (
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
      </div>
    </section>
  );
}
