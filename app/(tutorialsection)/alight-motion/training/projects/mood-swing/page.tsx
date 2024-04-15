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
          "https://docs.google.com/presentation/d/e/2PACX-1vSZIx8iXgqU87NsYhtJI-KbStMw0xUluhU44xyaHYb8M2G8wQ2jqHEU_D9WcvOgbGZyiH_TkdQN1HWn/embed?start=false&loop=false&delayms=10000"
        }
      />
    </>
  );
}
