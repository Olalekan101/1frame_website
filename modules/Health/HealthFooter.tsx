import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function HealthFooter() {
  return (
    <section className="w-screen md:w-full h-[300px] relative">
      <div className="maincontainer flex flex-col justify-center items-center w-full h-full">
        <div className="">
          <Link href={"/healthmedia"}>
            <div className="relative ">
              <Image
                src={"/Images/1frame health media.png"}
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
