import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Motiongraphics() {
  return (
    <section className="w-screen md:w-full h-auto relative">
      <div className="maincontainer flex flex-col justify-center items-center w-full h-auto">
        <div className=" backdrop-blur-2xl bg-purple-500/20 py-5 rounded-b-xl">
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
              className="text-sm w-fit  py-2 bg-purple-600 text-white rounded-xl px-4"
              href={"./creating-a-project"}
            >
              How to Create a project
            </Link>
            <Link
              className="text-sm px-2 py-2 w-fit bg-purple-600 text-white rounded-xl px-4"
              href={"./creating-a-project"}
            >
              What is a keyframe?
            </Link>
            <Link
              className="text-sm px-2 py-2 w-fit bg-purple-600 text-white rounded-xl px-4"
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
              <div className="w-full h-full aspect-square relative mx-auto rounded-xl overflow-clip">
                <Image
                  src={"/training/project-one/rendered/thestargif.gif"}
                  fill
                  alt="gif"
                />
                <div className="absolute inset-0 w-full">
                  <p className="bg-cyan-600 w-fit text-white text-xs px-2 py-2 rounded-br-xl">
                    The Star ⭐
                  </p>
                </div>
              </div>
            </Link>
            <Link
              href={"./projects/project-one"}
              className="w-full h-full mx-auto"
            >
              <div className="w-full h-full aspect-square relative mx-auto rounded-xl overflow-clip ">
                <Image
                  src={
                    "/training/Travelling arrow/rendered/Traveling arrows.gif"
                  }
                  fill
                  alt="gif"
                />
                <div className="absolute inset-0 w-full">
                  <p className="bg-cyan-600 w-fit text-white text-xs px-2 py-2 rounded-br-xl">
                    Travelling arrow
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
