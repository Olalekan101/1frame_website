"use client";

import React from "react";
import { Rive, useRive, useStateMachineInput } from "@rive-app/react-canvas";
import { useEffect, useState } from "react";
import { usePremiereProTools } from "@/store/videoeditingstore";

export default function PremiereProBtnRive(artboard: string) {
  const { rive, RiveComponent } = useRive({
    src: "/rive/1frame_tutorial.riv",
    artboard: artboard,
    stateMachines: "Click State Machine",
    autoplay: true,
  });

  const setActive = usePremiereProTools((state: any) => state.setActive);

  const [clicked, setClicked] = useState("");
  return (
    <RiveComponent onClick={() => rive && setActive(rive?.activeArtboard)} />
  );
}
