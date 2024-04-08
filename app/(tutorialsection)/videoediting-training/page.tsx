import { PortfolioTopRive } from "@/modules/RiveComponents";
import Image from "next/image";
import React from "react";
import { FaWhatsappSquare } from "react-icons/fa";
import { FaCalendarAlt } from "react-icons/fa";
import { GiCheckMark } from "react-icons/gi";

export default function EditingTraining() {
  const data = [
    "You will be introduced to the industry-standard editing software, Premiere Pro.",
    "You will be able to make use of the tools in Premiere Pro to edit videos.",
  ];
  return (
    <section className="w-screen md:w-full h-auto relative">
      <div className="maincontainer  w-full h-auto">
        <div className="w-full text-center mt-5">
          <p className="font-medium text-lg md:text-2xl opacity-70 flex gap-2 justify-center items-center">
            <span>
              <FaCalendarAlt />
            </span>{" "}
            Starting April 20th and ending May 18th.
          </p>
        </div>
        <div className="flex flex-col w-full mt-5 md:-mt-10 gap-4 ">
          <div className="w-full relative">
            <div className="w-full relative aspect-video">
              <Image
                src={"/training/4weeks training graphics.png"}
                alt="training graphics"
                fill
                className="object-contain w-full h-full"
              />
            </div>
            <div className=" -mt-5 md:-mt-20 flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="">
                <p className="font-bold text-xl md:text-3xl opacity-70 text-center">
                  All you need is a laptop
                </p>
              </div>
              <div className="flex gap-2 justify-center items-center text-center">
                <p className="font-bold text-xl md:text-3xl opacity-70 text-center">
                  Register →
                </p>
                <a href={"https://wa.me/+2348146339697"} target="_blank">
                  <div className="">
                    <FaWhatsappSquare className=" text-green-500 size-[40px] md:size-[45px]" />
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div className=" h-[50px] md:h-[100px] w-full flex justify-center items-center">
            <PortfolioTopRive />
          </div>
          <div className="w-full flex flex-col justify-center items-center">
            <div className="">
              <p className="text-2xl font-black text-left opacity-70">
                What will you gain from this training?
              </p>
            </div>
            <div className="md:mt-10 mt-5">
              <ul className="flex flex-col gap-4">
                {data.map((x, index) => (
                  <li className="flex gap-2 items-start justify-center text-lg ">
                    <span>
                      <GiCheckMark />
                    </span>
                    {x}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="mt-10 flex flex-col justify-center items-center">
            <div className="w-[40%] md:w-[20%] relative aspect-square">
              <Image
                src={"/Images/profile pics.png"}
                alt="images"
                fill
                className="object-contain w-full h-full"
              />
            </div>
            <div className="realtive md:w-[50%] mt-5 opacity-80">
              <p>
                Hi, my name is Olalekan Esanola, a professional video editor,
                motion designer, and 2D animator, and I will be taking you
                through this journey.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
