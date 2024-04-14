import React from "react";
import { ProjectList } from "@/modules/ProjectTrainingWapper";

export default function WhatIsAnElement() {
  return (
    <section className="w-screen md:w-full h-auto relative">
      <div className="maincontainer mt-5 md:mt-10 flex flex-col justify-center items-center w-full">
        <div className="">
          <p className="text-2xl opacity-70 font-bold  text-center ">
            What is an element?
          </p>
        </div>
        <ProjectList slidelink="https://docs.google.com/presentation/d/e/2PACX-1vSshv-DLJ33pxBWJjwNBQoAznEsKi0cBanaMFiQfS3hugKY0uRGkYhdMcEvFp8xviXzuQXrDpDPRNIw/embed?start=false&loop=false&delayms=3000" />
      </div>
    </section>
  );
}
