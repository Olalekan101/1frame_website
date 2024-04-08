import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function TutorialFooter() {
  return (
    <section className="w-screen md:w-full md:h-[100px] h-[100px] relative">
      <div className="maincontainer flex flex-col justify-center items-center w-full h-full">
        <div className="">
          <Link href={"/1frame-tutorial"}>
            <div className="relative hidden md:block ">
              <Image
                src={"/logo/1frame training.png"}
                alt="1frame health media logo"
                width={150}
                height={100}
                className=""
              />
            </div>
            <div className="relative block md:hidden ">
              <Image
                src={"/logo/1frame training.png"}
                alt="1frame health media logo"
                width={100}
                height={50}
                className=""
              />
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
