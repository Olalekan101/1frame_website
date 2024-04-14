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
        projectgif="/training/Bouncing Ball/rendered/Bouncing Ball.gif"
        projectname=" Bouncing Ball ⚽"
      >
        <div className="w-full flex flex-col justify-center items-center gap-4">
          <p className="opacity-70 text-xs">What you need to know</p>
          <Link
            href={"../creating-a-project"}
            className="font-bold italic underline text-xs border-2 border-white/40 rounded-xl px-4 py-2 flex justify-start items-center"
          >
            <p>How to create a project</p>
          </Link>
        </div>
      </ProjectWrapper>
      <ProjectList
        slidelink={
          "https://docs.google.com/presentation/d/e/2PACX-1vTn-moy8m2gBsV_8Sc6SJzpHpa_p6_GiHl1st1xPRi-g-Xanzyze3Syp8N4gClUYITQgqelXL6Tt6fO/embed?start=false&loop=false&delayms=3000"
        }
      />
    </>
  );
}
