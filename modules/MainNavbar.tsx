import Link from "next/link";
import React from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { SideBarMenu } from "./SideBarMenu";
import Image from "next/image";

export default function Navbar() {
  return (
    <section className=" border-b-[1px] border-b-slate-100/50 w-full py-4  ">
      <div className="maincontainer relative flex justify-between items-center">
        <div className="">
          <Link href={"/"}>
            <div className="relative ">
              <Image
                src={"/logo/1frame.png"}
                alt="1frame logo"
                width={70}
                height={30}
                className=""
              />
            </div>
          </Link>
        </div>

        <div className="md:flex justify-center items-center hidden gap-4 font-light opacity-70 ">
          <div className="">
            <Link href={"/alight-motion"}>Alight Motion Training</Link>
          </div>
          {/* <div className="">
            <Link href={"/healthmedia"}>Health Media</Link>
          </div> */}
          <div className="">
            <Link href={"/about "}> About Me</Link>
          </div>
        </div>
        <div className="z-10 block md:hidden">
          <SideBarMenu />
        </div>
      </div>
    </section>
  );
}
