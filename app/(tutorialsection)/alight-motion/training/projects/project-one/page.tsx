import React from "react";
import Image from "next/image";
import { ProjectOneData } from "@/data/project_data/project_one/data";
import { GoDownload } from "react-icons/go";
import Link from "next/link";
import {
  ProjectList,
  ProjectWrapper,
  ToKnowBtn,
} from "@/modules/ProjectTrainingWapper";

export default function ProjectOne() {
  return (
    <>
      <ProjectWrapper
        projectgif="/training/project-one/rendered/thestargif.gif"
        projectname="The Star ⭐"
      >
        <ToKnowBtn
          link="../basic-concept/creating-a-project"
          title="How to create a project"
        />
      </ProjectWrapper>
      <ProjectList
        projectdownloadlink="https://alight.link/Xs1p3owTiRCshiEy5"
        slidelink={
          "https://docs.google.com/presentation/d/e/2PACX-1vSZIx8iXgqU87NsYhtJI-KbStMw0xUluhU44xyaHYb8M2G8wQ2jqHEU_D9WcvOgbGZyiH_TkdQN1HWn/embed?start=false&loop=false&delayms=10000"
        }
      />
    </>
  );
}
