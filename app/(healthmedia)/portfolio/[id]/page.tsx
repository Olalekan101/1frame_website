import { Portfoliodata } from "@/data/portfoliodata";
import React from "react";
import { FaCaretDown } from "react-icons/fa";
import Link from "next/link";

export default function SinglePortfolio({
  params,
}: {
  params: { id: string };
}) {
  const x = Portfoliodata.find((x) => x.id === params.id) || null;
  // console.log(SingleDaata.id);

  return (
    <section className="w-full  h-full">
      <div className="maincontainer flex flex-col w-full justify-between items-center">
        <div className="flex  w-full z-20 my-10">
          <div className="w-full mx-auto grid grid-cols-1">
            <>
              {x === null ? (
                ""
              ) : (
                <div className="" key={x.id}>
                  <div className="">
                    <Link
                      href={`/portfolio/${x.id}`}
                      className="line-clamp-1 overflow-ellipsis text-3xl font-bold opacity-70 mb-4 text-center "
                    >
                      {x.title}
                    </Link>
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
                  <div className="mt-4">
                    <div className="py-2">
                      <p className="font-bold opacity-70">
                        How We Created This Video
                      </p>
                    </div>
                    <div className="relative">
                      <div className="">
                        <p className=" overflow-ellipsis">{x.walkthrough}</p>
                      </div>
                      {/* <div className="absolute bg-gradient-to-b from-transparent to-black inset-0">
                      <div className="flex w-full h-full justify-center items-end">
                        <Link
                          href={`/portfolio/${x.id}`}
                          className="flex justify-center items-center"
                        >
                          <div className="leading-none ">Show More</div>
                          <FaCaretDown className="animate-bounce duration-1000 ease-in-out" />
                        </Link>
                      </div>
                    </div> */}
                    </div>
                  </div>
                </div>
              )}
            </>
          </div>
        </div>
      </div>
    </section>
  );
}
