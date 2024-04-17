import React from "react";
import {
  ProjectList,
  ProjectWrapper,
  ToKnowBtn,
} from "@/modules/ProjectTrainingWapper";

export default function SamX() {
  return (
    <>
      <ProjectWrapper
        projectgif="/training/Sam X/rendered/Sam X.gif"
        projectname="Sam X"
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
