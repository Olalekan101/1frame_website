import React from "react";
import Image from "next/image";
import { GoDownload } from "react-icons/go";
import Link from "next/link";
// import { useRouter } from "next/navigation";

interface ProjectWrapperProps {
  projectname: string;

  projectgif: string;
  children: React.ReactNode;
  // projectdetails: string[];
}
interface ProjectListProps {
  projectdownloadlink: string;
  slidelink: string;
}
interface ToKnowBtnProps {
  link: string;
  title: string;
}
export const ProjectList: React.FC<ProjectListProps> = ({
  slidelink,
  projectdownloadlink,
}) => {
  return (
    <>
      <section className="w-full md:w-full h-auto relative">
        <div className="maincontainer  flex flex-col relative justify-center items-center w-full h-auto">
          <iframe
            src={slidelink}
            frameBorder="0"
            width="300"
            height="500"
            allowFullScreen={true}
            // mozAllowFullScreen={true}
            // webkitAllowFullScreen={true}
            className="bg-white"
          ></iframe>
          <div className=" mt-5">
            <a
              href={projectdownloadlink}
              className="text-sm opacity-70 flex justify-center items-center gap-2"
            >
              Download the finished project.
              <GoDownload />
            </a>
          </div>
          {/* {ProjectData.map((data: any, index: number) => (
            <div
              key={index}
              className="relative w-full mt-10 flex flex-col justify-center items-center md:flex-row"
            >
              <div className="relative aspect-video w-full h-fit mx-auto -mb-8">
                <Image
                  src={data.graphics}
                  alt="project gif"
                  fill
                  className="object-contain"
                />
              </div>

              <div className="relative w-[70%] md:w-full mx-auto mt-2 overflow-clip -mb-10">
                <Image
                  src={data.gif}
                  alt="project gif"
                  width={360}
                  height={824}
                  className="-translate-y-5"
                />
              </div>
            </div>
          ))}
          {toggle ? (
            <>
              <div className="w-full h-full flex justify-center items-center mt-12">
                <Image
                  src={"/Images/well-done (1).png"}
                  alt="project gif"
                  width={100}
                  height={100}
                  className="object-contain"
                />
              </div>
              <div className="mt-5 opacity-70 w-full">
                <p className="text-sm text-center">
                  I hope you learned something. Now try recreating the project
                  on your own.
                </p>
                <Link
                  href={"../projects"}
                  className="mx-auto w-full flex justify-center mt-4"
                >
                  <p className="bg-purple-900 text-yellow-50 px-2 w-fit py-2 rounded-xl">
                    ← Go to training
                  </p>
                </Link>
              </div>
            </>
          ) : null} */}
        </div>
      </section>
    </>
  );
};

export const ToKnowBtn: React.FC<ToKnowBtnProps> = ({ link, title }) => {
  return (
    <Link
      href={link}
      className="font-bold italic underline text-xs border-2 border-white/40 rounded-xl px-4 py-2 flex justify-start items-center mt-2 hover:bg-white/30"
    >
      <p className="opacity-70">{title}</p>
    </Link>
  );
};

export const ProjectWrapper: React.FC<ProjectWrapperProps> = ({
  projectname,
  projectgif,
  children,
}) => {
  return (
    <section className="w-screen md:w-full h-auto relative">
      <div className="maincontainer mt-5 md:mt-10 flex flex-col justify-center items-center w-full h-auto">
        <div className="flex flex-col justify-center items-center gap-2 w-full">
          {/* <p className="text-sm opacity-75 font-bold">Project One</p> */}
          <div className="flex flex-col gap-2 justify-center items-center">
            <p className="text-xl opacity-75 font-bold">{projectname}</p>
          </div>
        </div>
        <div className="flex justify-start items-center w-full md:w-[50%] relative mt-5">
          <p className=" w-full text-white text-xs md:text-xl py-2 opacity-70 text-center">
            A preview of what we are building
          </p>
        </div>
        <div className="w-full md:w-[50%] h-full aspect-square relative ">
          <Image src={projectgif} fill alt="gif" />
        </div>
        <div className="my-4">
          <div className="w-full flex flex-col justify-start items-center">
            <p className="opacity-70 text-xs">
              What you need to know before starting
            </p>
            <div className="w-full flex flex-col gap-2 justify-center items-center mx-auto mt-2">
              {children}
            </div>
          </div>
        </div>
        {/* <div className="opacity-70 w-full px-4 border-2 border-white/45 rounded-xl py-4">
          <p>The project details are: </p>
          <ul className="grid grid-cols-2 gap-2 text-xs mt-2 font-bold">
            <li>Project name: {projectdetails[0]}</li>
            <li>Aspect ratio: {projectdetails[1]}</li>
            <li>Resolution: {projectdetails[2]}</li>
            <li>Frame rate: {projectdetails[3]}</li>
          </ul>
        </div> */}
        <div className="w-full h-full flex justify-center items-center mt-4">
          <Image
            src={"/Images/lets-go.png"}
            alt="project gif"
            width={100}
            height={100}
            className="object-contain"
          />
        </div>
      </div>
    </section>
  );
};
