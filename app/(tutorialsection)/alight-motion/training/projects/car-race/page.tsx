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

export default function CarRace() {
  return (
    <>
      <ProjectWrapper
        projectgif="/training/Car Race/rendered/Car race.gif"
        projectname=" Car Race 🚗"
      >
        <ToKnowBtn
          link="../basic-concept/creating-a-project"
          title="How to create a project"
        />
      </ProjectWrapper>
      <ProjectList
        projectdownloadlink="https://alight.link/2EnZR44CXfsRmnne6"
        slidelink={
          "https://docs.google.com/presentation/d/e/2PACX-1vQyfRTnGB3Wfe1RyeOQsfxq10cldj6FxBDl3jPKcu39hdggPYT2RQbJIjjZ43495fcJR0n8hRFabNed/embed?start=false&loop=false&delayms=3000"
        }
      />
    </>
  );
}
