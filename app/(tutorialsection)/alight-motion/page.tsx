import Image from "next/image";
import Link from "next/link";
import React from "react";

export const ToLearnWarpper = ({ linkx, title }: any) => {
  return (
    <Link
      className="text-sm w-full hover:bg-white/45  py-2 border-2 border-white/45  text-white rounded-xl px-4"
      href={linkx}
    >
      <p className="opacity-75">{title}</p>
    </Link>
  );
};
export const ProjectGifWarpper = ({ linkx, gif, title }: any) => {
  return (
    <Link href={linkx} className="w-full h-full mx-auto">
      <div className="w-full md:w-[50%] h-full aspect-square relative mx-auto rounded-xl overflow-clip">
        <Image src={gif} fill alt="gif" />
        <div className="absolute inset-0 w-full">
          <p className="bg-purple-800 w-fit text-white text-xs px-2 py-2 rounded-br-xl line-clamp-1">
            {title}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default function Motiongraphics() {
  return (
    <section className="w-screen md:w-full h-auto relative">
      <div className="maincontainer flex flex-col justify-center items-center w-full h-auto">
        <div className=" backdrop-blur-2xl py-5 rounded-b-xl">
          <div className="flex gap-2 justify-center items-center">
            <Image
              src={"/tools/am.png"}
              alt="alight motion"
              width={25}
              height={25}
            />
            <p>ALIGHT MOTION TRAINING</p>
          </div>
          <p className="text-sm opacity-70 mt-2 text-center ">
            These lessons are carefully planned. Take your time and practice
            them.
          </p>
        </div>
        <div className="mt-5 w-full mx-auto flex justify-center items-center flex-col">
          <div className="">
            <p className="opacity-70">Basic Concepts You Need to Know</p>
          </div>
          <div className="mt-2 grid grid-cols-2 gap-2 overflow-clip w-fit">
            <ToLearnWarpper
              linkx="/alight-motion/training/creating-a-project"
              title="How to create a project"
            />
            <ToLearnWarpper
              linkx="/alight-motion/training/creating-a-project"
              title="What is an element"
            />
            <ToLearnWarpper
              linkx="/alight-motion/training/creating-a-project"
              title="What is a keyframe?"
            />
            <ToLearnWarpper
              linkx="/alight-motion/training/creating-a-project"
              title="What is a graph curve?"
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
        <div className="flex flex-col justify-center items-center w-full mt-5">
          <p className="font-bold text-sm md:text-lg opacity-70 py-2 text-center w-full ">
            Level 1
          </p>
          <p className="text-xs opacity-70 md:mb-4 mb-4">
            This level is meant to show you the ins and outs of alight motion.
            and the basics of animations
          </p>
          <div className="w-full grid md:grid-cols-3 grid-cols-2 gap-2">
            <ProjectGifWarpper
              linkx="/alight-motion/training/projects/project-one"
              gif="/training/project-one/rendered/thestargif.gif"
              title="The Star ⭐"
            />
            <ProjectGifWarpper
              linkx="/alight-motion/training/projects/travelling-arrows"
              gif="/training/Travelling arrow/rendered/Traveling arrows.gif"
              title="Travelling arrow"
            />
            <ProjectGifWarpper
              linkx="/alight-motion/training/projects/bouncing-ball"
              gif="/training/Bouncing Ball/rendered/Bouncing Ball.gif"
              title="Bouncing Ball ⚽"
            />
            <ProjectGifWarpper
              linkx="/alight-motion/training/projects/car-race"
              gif="/training/Car Race/rendered/Car race.gif"
              title="Car Race 🚗"
            />
            <ProjectGifWarpper
              linkx="/alight-motion/training/projects/mood-swing"
              gif="/training/Mood Swing/rendered/Mood Swings.gif"
              title="Mood Swings"
            />
          </div>
        </div>
        <div className="flex flex-col justify-center items-center w-full mt-5">
          <p className="font-bold text-sm md:text-lg opacity-70 py-2 text-center w-full ">
            Level 2
          </p>
          <p className="text-xs opacity-70 md:mb-4 mb-4">
            Here we touch on some pretty advanced concepts.
          </p>
          <div className="w-full grid md:grid-cols-3 grid-cols-2 gap-2">
            <ProjectGifWarpper
              linkx="/alight-motion/training/projects/fruit-salad"
              gif="/training/Fruit Salad/rendered/Fruit salad.gif"
              title=" Fruit Salad"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
