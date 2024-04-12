import React from "react";
import Image from "next/image";
import { ProjectOneData } from "@/data/project_data/project_one/data";
import { GoDownload } from "react-icons/go";
import Link from "next/link";
import { ProjectList, ProjectWrapper } from "@/modules/ProjectTrainingWapper";

export default function ProjectOne() {
  return (
    <>
      <ProjectWrapper
        projectdetails={["The Star", "1:1", "1080p(FHD)", "24 fps"]}
        projectdownloadlink="https://alight.link/Xs1p3owTiRCshiEy5"
        projectgif="/training/project-one/rendered/thestargif.gif"
        projectname="The Star ⭐"
      >
        <p className="font-bold opacity-70 text-xl">
          First of all, we need to create a project.
        </p>
        <p className="font-bold opacity-70 text-lg">
          If you don't know how,{" "}
          <Link
            href={"../creating-a-project"}
            className="font-bold italic underline"
          >
            click here.
          </Link>
        </p>
      </ProjectWrapper>
      <ProjectList ProjectData={ProjectOneData} toggle />
      {/* <section className="w-screen md:w-full h-auto relative">
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
            <p className="font-bold opacity-70 text-xl">
              First of all, we need to create a project.
            </p>
            <p className="font-bold opacity-70 text-lg">
              If you don't know how,{" "}
              <Link
                href={"../creating-a-project"}
                className="font-bold italic underline"
              >
                click here.
              </Link>
            </p>
          </div>
          <div className="opacity-70 w-full">
            <p>The project details are: </p>
            <ul className="grid grid-cols-2 gap-2 text-sm font-bold">
              <li>Project name: The Star</li>
              <li>Aspect ratio: 1:1</li>
              <li>Resolution: 1080p(FHD)</li>
              <li>Frame rate: 24 fps</li>
            </ul>
          </div>
          <div className="w-full h-full flex justify-center items-center -mb-20 mt-4">
            <Image
              src={"/Images/lets-go.png"}
              alt="project gif"
              width={100}
              height={100}
              className="object-contain"
            />
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

              <div className="relative w-[70%] md:w-full mx-auto mt-2 overflow-clip -mb-10">
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
          <div className="w-full h-full flex justify-center items-center mt-12">
            <Image
              src={"/Images/well-done (1).png"}
              alt="project gif"
              width={100}
              height={100}
              className="object-contain"
            />
          </div>
          <div className="mt-5 opacity-70 w-full">
            <p className="text-sm text-center">
              I hope you learned something. Now try recreating the project on
              your own.
            </p>
            <Link
              href={"../projects"}
              className="mx-auto w-full flex justify-center mt-4"
            >
              <p className="bg-purple-900 text-yellow-50 px-2 w-fit py-2 rounded-xl">
                ← Back to training
              </p>
            </Link>
          </div>
        </div>
      </section> */}
    </>
  );
}
