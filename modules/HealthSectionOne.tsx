import { Portfoliodata } from "@/data/portfoliodata";
import React from "react";

export default function HealthSectionOne() {
  return (
    <section className="w-screen md:w-full h-auto relative">
      <div className="maincontainer flex flex-col justify-between items-start w-full h-fit md:h-auto">
        <div className="w-full">
          <p className="text-3xl font-bold opacity-70 text-center">
            We create unique content that educates and builds patient trust.
          </p>
        </div>
        <div className="scrollbar-thumb-rounded-full scrollbar-track-rounded-full scrollbar-h-[9px] w-full snap-x flex gap-2 overflow-x-scroll mt-6 scroll-mb-10 scrollbar scrollbar-thumb-MainPurple pb-5 ">
          {Portfoliodata.map((x, index) => (
            <div className=" border-2 border-MainPurple rounded-2xl overflow-clip w-[300px] md:w-[400px] aspect-video flex-none pb  ">
              <iframe
                src={`https://www.youtube.com/embed/${x.url}`}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen={true}
                className="rounded-lg w-full h-full "
              ></iframe>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
