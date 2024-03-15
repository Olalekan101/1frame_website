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
      <div className="maincontainer flex flex-col justify-between items-center w-full h-auto mx-auto">
        <p>These are some of the premiere pro tools.</p>
      </div>
      <div className="w-full grid grid-cols-2 md:grid-cols-3 justify-center items-center">
        {premiereprotools.map((value, index) => (
          <div className="aspect-square w-[50px] ">
            {PremiereProBtnRive(value.name)}
            {/* <div className="">{value.name}</div> */}
          </div>
        ))}
      </div>
    </section>
  );
}
