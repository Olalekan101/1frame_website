"use client";

import Rive, { useRive } from "@rive-app/react-canvas";
import { Skeleton } from "@/components/ui/skeleton";

export function PortfolioTopRive() {
  const { rive, RiveComponent } = useRive({
    src: "/rive/1frame.riv",
    artboard: "Portfolio_top_section",
    stateMachines: "State Machine 1",
    autoplay: true,
  });
  return (
    <>
      {RiveComponent ? (
        <RiveComponent />
      ) : (
        <Skeleton className="h-[30px] md:h-[70px] w-full rounded-2xl" />
      )}
    </>
  );
}
