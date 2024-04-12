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
    </>
  );
}
