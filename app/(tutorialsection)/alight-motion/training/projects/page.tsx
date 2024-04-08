import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Motiongraphics() {
  return (
    <section className="w-screen md:w-full h-auto relative">
      <div className="maincontainer flex flex-col justify-center items-center w-full h-auto">
        <div className="mt-5 md:mt-10">
          <div className="flex gap-2 justify-center items-center">
            <Image
              src={"/tools/am.png"}
              alt="alight motion"
              width={25}
              height={25}
            />
            <p>ALIGHT MOTION TRAINING</p>
          </div>
          <p className="text-base opacity-70 mt-2 text-center ">
            These lessons are carefully planned. Take your time and practice
            them.
          </p>
        </div>
        <div className="mt-5 w-full">
          <div className="">
            <p className="opacity-70">Basic Concepts You Need to Know</p>
          </div>
          <div className="mt-2 grid grid-cols-2 gap-2 overflow-clip">
            <Link
              className="text-sm w-fit px-2 py-2 rounded-lg bg-purple-900 text-white"
              href={"./creating-a-project"}
            >
              How to Create a project
            </Link>
            <Link
              className="text-sm px-2 py-2 w-fit bg-purple-900 text-white"
              href={"./creating-a-project"}
            >
              What is a keyframe?
            </Link>
            <Link
              className="text-sm px-2 py-2 w-fit bg-purple-900 text-white"
              href={"./creating-a-project"}
            >
              What is a graph curve?
            </Link>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center w-full mt-5">
          <p className="font-bold text-sm opacity-70 py-2 text-start w-full">
            Lessons for Beginners
          </p>
          <div className="w-full grid grid-cols-2 gap-2">
            <Link
              href={"./projects/project-one"}
              className="w-full h-full mx-auto"
            >
              <div className="w-full h-full aspect-square relative mx-auto">
                <Image
                  src={"/training/project-one/rendered/thestargif.gif"}
                  fill
                  alt="gif"
                />
                <div className="absolute inset-0 w-full">
                  <p className="bg-purple-900 w-fit text-white text-xs px-2 py-2">
                    The Star ⭐
                  </p>
                </div>
              </div>
            </Link>
            <Link
              href={"./projects/project-one"}
              className="w-full h-full mx-auto"
            >
              <div className="w-full h-full aspect-square relative mx-auto">
                <Image
                  src={"/training/project-one/rendered/thestargif.gif"}
                  fill
                  alt="gif"
                />
                <div className="absolute inset-0 w-full">
                  <p className="bg-purple-900 w-fit text-white text-xs px-2 py-2">
                    The Travelling
                  </p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
