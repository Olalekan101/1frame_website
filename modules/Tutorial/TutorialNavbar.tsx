import Link from "next/link";
import React from "react";
import Image from "next/image";
import { TutorialSideBarMenu } from "./TutorialSideBarMenu";

export default function Navbar() {
  return (
    <section className=" border-b-[1px] border-b-slate-100/50 w-full py-4  ">
      <div className="maincontainer relative flex justify-between items-center">
        <div className="">
          <Link href={"/1frame-tutorial"}>
            <div className="relative ">
              <Image
                src={"/logo/1frame training.png"}
                alt="1frame logo"
                width={100}
                height={50}
                className=""
              />
            </div>
          </Link>
        </div>

        <div className="md:flex justify-center items-center hidden gap-4 font-light opacity-70 ">
          <div className="">
            <Link href={"/videoediting"}>Premiere Pro</Link>
          </div>
          <div className="">
            <Link href={"/alight-motion"}>Alight Motion</Link>
          </div>
          {/* <div className="">
            <Link href={"/motion-graphics"}>Motion Graphics</Link>
          </div> */}
          {/* <div className="">
            <Link href={"/font-end"}>Font-end Development</Link>
          </div> */}
        </div>
        <div className="z-10 block md:hidden">
          <TutorialSideBarMenu />
        </div>
      </div>
    </section>
  );
}
