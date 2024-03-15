import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function TutorialFooter() {
  return (
    <section className="w-screen md:w-full h-[300px] relative">
      <div className="maincontainer flex flex-col justify-center items-center w-full h-full">
        <div className="">
          <Link href={"/1frame-tutorial"}>
            <div className="relative ">
              <Image
                src={"/Images/1frame_tutor.png"}
                alt="1frame health media logo"
                width={150}
                height={100}
                className=""
              />
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
