"use client";
import React from "react";
import { Rive, useRive, useStateMachineInput } from "@rive-app/react-canvas";
import { useEffect, useState } from "react";
import PremiereProBtnRive from "@/modules/Tutorial/PremiereProBtnRive";
import { usePremiereProTools } from "@/store/videoeditingstore";
import { premiereprotools } from "@/data/premiereprodata";

export default function PremiereProTools() {
  const active = usePremiereProTools((state: any) => state.active);

  console.log(active);

  return (
    <section className="w-screen md:w-full h-auto relative">
      <div className="maincontainer flex flex-col justify-between items-center w-full">
        <div className="md:pt-10 pt-5">
          <p className="md:text-base text-xs text-center opacity-70">
            Click on the icons to get an understanding of how the tools work.
          </p>
        </div>
        <div className="w-full h-[200px] py-6">
          {premiereprotools
            .filter((x) => x.name === active)
            .map((x) => (
              <p className="opacity-70 text-center">{x.description}</p>
            ))}
        </div>
        <div className="w-fit grid grid-cols-4 md:grid-cols-8  gap-4 justify-center items-center mx-auto ">
          {premiereprotools.map((value, index) => (
            <div className="aspect-square w-[50px] md:w-[100px] ">
              {PremiereProBtnRive(value.name)}
              <div className="text-center text-sm line-clamp-2 md:line-clamp-1 opacity-70">
                {value.name}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
