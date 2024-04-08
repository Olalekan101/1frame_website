import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Motiongraphics() {
  return (
    <section className="w-screen md:w-full h-auto relative">
      <div className="maincontainer flex flex-col justify-center items-center w-full h-auto">
        <div className="md:mt-10 mt-5 flex flex-col justify-center items-center">
          <Image
            src={"/tools/am.png"}
            alt="alight motion"
            width={100}
            height={100}
          />
          <p className="md:text-xl text-sm opacity-80 mt-5">
            Alight Motion is a powerful app for creating animation and motion
            graphics with your phone.
          </p>
          <p className="text-2xl opacity-80 mt-5">
            I have provided you with tutorials to help you learn this tool{" "}
            <span className="font-extrabold">for free</span>
          </p>
          <div className="mt-10">
            <Link href={"alight-motion/training/projects"}>
              Check out trainings.
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
