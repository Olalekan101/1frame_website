import Link from "next/link";
import React from "react";
import Image from "next/image";
import { HealthSideBarMenu } from "./HealthSideBarMenu";

export default function Navbar() {
  return (
    <section className=" border-b-[1px] border-b-slate-100/50 w-full py-4  ">
      <div className="maincontainer relative flex justify-between items-center">
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

        <div className="md:flex justify-center items-center hidden gap-4 font-light opacity-70 ">
          <div className="">
            <Link href={"/portfolio"}>Portfolio</Link>
          </div>
          <div className="">
            <Link href={"/content-calendar"}> Content Calender</Link>
          </div>
          <div className="">
            <Link href={"/pricing"}> Pricing</Link>
          </div>
          <div className="">
            <Link href={"/about-health-media "}> About Us</Link>
          </div>
        </div>
        <div className="z-10 block md:hidden">
          <HealthSideBarMenu />
        </div>
      </div>
    </section>
  );
}
