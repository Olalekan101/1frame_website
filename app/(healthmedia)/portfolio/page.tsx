import React from "react";
import Link from "next/link";
import Image from "next/image";
import Rive from "@rive-app/react-canvas";
import { PortfolioTopRive } from "@/modules/RiveComponents";
import { Portfoliodata } from "@/data/portfoliodata";
import { FaCaretDown } from "react-icons/fa6";

export default function Portfolio() {
  return (
    <section className="w-full py-4  h-full">
      <div className="maincontainer flex flex-col w-full justify-between items-center ">
        <div className=" flex flex-col md:flex-row mt-5 md:mt-10 gap-6 md:gap-0">
          <div className=" w-full md:w-[50%]">
            <div className="relative w-[100px] md:w-[200px] aspect-video ">
              <Image
                src={"/Images/1frame_portfolio.png"}
                alt="1frame logo"
                className=" object-contain"
                fill
              />
            </div>
            <p className="text-2xl md:text-4xl opacity-65">
              Welcome Here are the past projects we have worked on. Please have
              a look. 
            </p>
          </div>
          <div className=" w-full md:w-[50%] relative flex justify-center items-center">
            <div className="relative  aspect-video w-full md:w-[90%] border-2  rounded-xl overflow-clip ">
              <Image
                src={"/Images/Hero_Image.webp"}
                fill
                alt="placeholder"
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* <div className="h-[100px] w-full flex justify-center items-center">
          <PortfolioTopRive />
        </div> */}
        <div className="my-10 md:my-20 w-full">
          <p className="text-center text-base opacity-75 ">
            WE KEEP IMPROVING EVERY DAY.
          </p>
        </div>
        {/* <div className="flex flex-col ">
          <div className="">
            <p>LOGO ANIMATION</p>
          </div>
        </div> */}
        <div className="flex  w-full z-20">
          <div className="w-full mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 pb-10">
            {Portfoliodata?.map((x, index) => (
              <>
                <div className="" key={x.id}>
                  <div className="">
                    <p className="text-xl opacity-70 mb-4 ">
                      <Link
                        href={`/portfolio/${x.id}`}
                        className="line-clamp-1 overflow-ellipsis"
                      >
                        {x.title}
                      </Link>
                    </p>
                  </div>
                  <div className=" border-2 border-MainPurple rounded-2xl overflow-clip ">
                    <iframe
                      src={`https://www.youtube.com/embed/${x.url}`}
                      title="YouTube video player"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen={true}
                      className="rounded-lg aspect-video w-full"
                    ></iframe>
                  </div>
                  {/* <div className="mt-4">
                    <div className="py-2">
                      <p className="font-bold opacity-70">
                        How We Created This Video
                      </p>
                    </div>
                    <div className="relative">
                      <div className="">
                        <p className="line-clamp-3 overflow-ellipsis">
                          {x.walkthrough}
                        </p>
                      </div>
                      <div className="absolute bg-gradient-to-b from-transparent to-black inset-0">
                        <div className="flex w-full h-full justify-center items-end">
                          <Link
                            href={`/portfolio/${x.id}`}
                            className="flex justify-center items-center"
                          >
                            <div className="leading-none ">Show More</div>
                            <FaCaretDown className="animate-bounce duration-1000 ease-in-out" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div> */}
                </div>
              </>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
