import { CreateProjectData } from "@/data/project_data/create_a_project/data";
import React from "react";
import Image from "next/image";
import { ProjectList } from "@/modules/ProjectTrainingWapper";

export default function CreatingProject() {
  return (
    <section className="w-screen md:w-full h-auto relative">
      <div className="maincontainer mt-5 md:mt-10 flex flex-col justify-center items-center w-full">
        <div className="">
          <p className="text-2xl opacity-70 font-bold  text-center ">
            How to Create a Project in Alight Motion
          </p>
        </div>
        <ProjectList slidelink="https://docs.google.com/presentation/d/e/2PACX-1vT2IAnblV4mM5TS5ZSmic0D5TEC0WYk3Eaio2ThO22Qb8yNGGSVxpp0Aw2z7-VjCrb3hm0jUs12Ydv2/embed?start=false&loop=false&delayms=3000" />
      </div>
    </section>
  );
}
