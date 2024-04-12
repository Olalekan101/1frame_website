import React from "react";
import Image from "next/image";
import {
  ProjectArrowPartOne,
  ProjectArrowPartTwo,
} from "@/data/project_data/travelling_arrows/data";
import { GoDownload } from "react-icons/go";
import Link from "next/link";
import { ProjectList, ProjectWrapper } from "@/modules/ProjectTrainingWapper";

export default function BouncingBall() {
  return (
    <>
      <ProjectWrapper
        projectdetails={["The Star", "1:1", "1080p(FHD)", "24 fps"]}
        projectdownloadlink="https://alight.link/Xs1p3owTiRCshiEy5"
        projectgif="/training/Fruit Salad/rendered/Fruit salad.gif"
        projectname="Fruit Salad"
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
      <ProjectList ProjectData={ProjectArrowPartOne} toggle={false} />
      <div className="mt-20 -mb-20 flex justify-center items-center">
        <Image src={"/Images/two.png"} alt="images" width={50} height={50} />
      </div>
      <ProjectList ProjectData={ProjectArrowPartTwo} toggle />
    </>
  );
}
