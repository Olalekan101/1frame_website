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

export default function TravellingArrows() {
  return (
    <>
      <ProjectWrapper
        projectgif="/training/Travelling arrow/rendered/Traveling arrows.gif"
        projectname="Travelling Arrow"
      >
        <ToKnowBtn
          link="../basic-concept/creating-a-project"
          title="How to create a project"
        />
        <ToKnowBtn link="../basic-concept/element" title="What is an element" />
      </ProjectWrapper>
      <ProjectList
        projectdownloadlink="https://alight.link/1jygYSk1DLVXanDc6"
        slidelink={
          "https://docs.google.com/presentation/d/e/2PACX-1vSiX-9CVYCfTosodCLeznGmUN-m4rfw28B8GoL2cUOx0xErPCDpNIJgDlv9HIVo_rOe5mxLitFUZ42K/embed?start=false&loop=false&delayms=3000"
        }
      />
    </>
  );
}
