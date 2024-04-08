import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Motiongraphics() {
  return (
    <section className="w-screen md:w-full h-auto relative">
      <div className="maincontainer flex flex-col justify-center items-center w-full h-auto">
        <div className="mt-5 md:mt-10">
          <p className="font-bold text-sm opacity-70">ALIGHT MOTION TRAINING</p>
          <p className="text-2xl opacity-70 ">
            These trainings are carefully planned. Make sure to Follow it
            project by project. step by step.
          </p>
        </div>
        <div className="flex flex-col justify-center items-start w-full mt-5">
          <p className="font-bold text-sm opacity-70 py-2">
            Lessons for Beginners
          </p>
          <Link href={"./projects/project-one"} className="w-full h-full">
            <div className="w-full h-full aspect-square relative">
              <Image
                src={"/training/project-one/rendered/thestargif.gif"}
                fill
                alt="gif"
              />
              <div className="absolute inset-0 w-full">
                <p className="bg-purple-900 w-fit text-white text-xs px-2 py-2">
                  Project One (The Star ⭐)
                </p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
