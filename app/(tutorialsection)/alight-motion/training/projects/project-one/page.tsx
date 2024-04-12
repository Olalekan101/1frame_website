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
      {/* <ProjectList ProjectData={ProjectOneData} toggle /> */}
      <section className="mt-20 border-b-[1px] border-b-slate-100/50 w-full py-4  ">
        <div className="maincontainer relative flex justify-center items-center">
          <iframe
            src="https://docs.google.com/presentation/d/e/2PACX-1vSZIx8iXgqU87NsYhtJI-KbStMw0xUluhU44xyaHYb8M2G8wQ2jqHEU_D9WcvOgbGZyiH_TkdQN1HWn/embed?start=false&loop=false&delayms=10000"
            frameBorder="0"
            width="320"
            height="500"
            allowFullScreen={true}
            // mozAllowFullScreen={true}
            // webkitAllowFullScreen={true}
            className="bg-white mx-auto"
          ></iframe>
        </div>
      </section>
    </>
  );
}
