import React from "react";
import Image from "next/image";
import {
  ProjectArrowPartOne,
  ProjectArrowPartTwo,
} from "@/data/project_data/travelling_arrows/data";
import { GoDownload } from "react-icons/go";
import Link from "next/link";
import {
  ProjectList,
  ProjectWrapper,
  ToKnowBtn,
} from "@/modules/ProjectTrainingWapper";

export default function BouncingBall() {
  return (
    <>
      <ProjectWrapper
        projectgif="/training/Bouncing Ball/rendered/Bouncing Ball.gif"
        projectname=" Bouncing Ball ⚽"
      >
        <ToKnowBtn
          link="../basic-concept/creating-a-project"
          title="How to create a project"
        />
      </ProjectWrapper>
      <ProjectList
        projectdownloadlink="https://alight.link/ZPeRKNg7Sr7qfrf2A"
        slidelink={
          "https://docs.google.com/presentation/d/e/2PACX-1vTn-moy8m2gBsV_8Sc6SJzpHpa_p6_GiHl1st1xPRi-g-Xanzyze3Syp8N4gClUYITQgqelXL6Tt6fO/embed?start=false&loop=false&delayms=3000"
        }
      />
    </>
  );
}
