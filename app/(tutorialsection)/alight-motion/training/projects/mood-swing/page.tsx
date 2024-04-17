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

export default function MoodSwing() {
  return (
    <>
      <ProjectWrapper
        projectgif="/training/Mood Swing/rendered/Mood Swings.gif"
        projectname="Mood Swing"
      >
        <ToKnowBtn
          link="../basic-concept/creating-a-project"
          title="How to create a project"
        />
      </ProjectWrapper>
      <ProjectList
        projectdownloadlink="https://alight.link/N4xe11YiqwY3vW5V8"
        slidelink={
          "https://docs.google.com/presentation/d/e/2PACX-1vRk5cEnsFXUhBzB7ZC3js23bbuJB8_QWSM9ej1yqO9IwHH69rlvRwkSINU31XbjmOxQT397MWWnDxh8/embed?start=false&loop=false&delayms=3000"
        }
      />
    </>
  );
}
