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
        <div className="w-full flex flex-col justify-start items-center">
          <p className="opacity-70 text-xs">
            What you need to know before starting
          </p>
          <Link
            href={"../creating-a-project"}
            className="font-bold italic underline text-xs border-2 border-white/40 rounded-xl px-4 py-2 flex justify-start items-center mt-2 hover:bg-white/30"
          >
            <p className="opacity-70">How to create a project</p>
          </Link>
        </div>
      </ProjectWrapper>
      <ProjectList
        slidelink={
          "https://docs.google.com/presentation/d/e/2PACX-1vSZIx8iXgqU87NsYhtJI-KbStMw0xUluhU44xyaHYb8M2G8wQ2jqHEU_D9WcvOgbGZyiH_TkdQN1HWn/embed?start=false&loop=false&delayms=10000"
        }
      />
    </>
  );
}
