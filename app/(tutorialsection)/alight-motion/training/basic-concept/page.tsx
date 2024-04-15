import React from "react";
import { ToLearnWarpper } from "../../page";
import { PortfolioTopRive } from "@/modules/RiveComponents";

export default function BasicConcept() {
  return (
    <section className="w-screen md:w-full h-auto relative">
      <div className="maincontainer flex flex-col justify-center items-center w-full h-auto">
        <div className="mt-5 w-full mx-auto flex justify-center items-center flex-col">
          <div className="">
            <p className="opacity-70 text-2xl text-center">
              Basic Concepts You Need to Know
            </p>
          </div>
          <div className=" h-[50px] md:h-[200px] w-full flex justify-center items-center">
            <PortfolioTopRive />
          </div>
          <div className="mt-2 grid grid-cols-2 gap-2 overflow-clip w-fit">
            <ToLearnWarpper
              linkx="/alight-motion/training/creating-a-project"
              title="How to create a project"
            />
            <ToLearnWarpper
              linkx="/alight-motion/training/element"
              title="What is an element"
            />
            <ToLearnWarpper
              linkx="/alight-motion/training/creating-a-project"
              title="What is a keyframe?"
            />
            <ToLearnWarpper
              linkx="/alight-motion/training/creating-a-project"
              title="Animation curve"
            />
            <ToLearnWarpper
              linkx="/alight-motion/training/creating-a-project"
              title="Power of Group"
            />
            <ToLearnWarpper
              linkx="/alight-motion/training/creating-a-project"
              title="Concept of Parenting"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
