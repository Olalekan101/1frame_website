import React from "react";
import Image from "next/image";
import { GoDownload } from "react-icons/go";
import Link from "next/link";
// import { useRouter } from "next/navigation";

interface ProjectWrapperProps {
  projectname: string;
  projectdownloadlink: string;
  projectgif: string;
  children: React.ReactNode;
  projectdetails: string[];
}
interface ProjectListProps {
  ProjectData: any;
  toggle: boolean;
}

export const ProjectList: React.FC<ProjectListProps> = ({
  ProjectData,
  toggle = true,
}) => {
  return (
    <>
      <section className="w-screen md:w-full h-auto relative">
        <div className="maincontainer mt-5 md:mt-10 flex flex-col justify-center items-center w-full h-auto">
          {ProjectData.map((data: any, index: number) => (
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
          ) : null}
        </div>
      </section>
    </>
  );
};

export const ProjectWrapper: React.FC<ProjectWrapperProps> = ({
  projectname,
  projectdownloadlink,
  projectgif,
  children,
  projectdetails,
}) => {
  return (
    <section className="w-screen md:w-full h-auto relative">
      <div className="maincontainer mt-5 md:mt-10 flex flex-col justify-center items-center w-full h-auto">
        <div className="flex flex-col justify-center items-center gap-2 w-full">
          {/* <p className="text-sm opacity-75 font-bold">Project One</p> */}
          <div className="flex flex-col gap-2 justify-center items-center">
            <p className="text-xl opacity-75 font-bold">{projectname}</p>
            <a
              href={projectdownloadlink}
              className="text-sm opacity-70 flex justify-center items-center gap-2"
            >
              Download Project <GoDownload />
            </a>
          </div>
        </div>
        <div className="flex justify-start items-center w-full md:w-[50%] relative mt-5">
          <p className=" w-full text-white text-xs md:text-xl py-2 opacity-70">
            A preview of what we are building
          </p>
        </div>
        <div className="w-full h-full aspect-square relative ">
          <Image src={projectgif} fill alt="gif" />
        </div>
        <div className="my-4">{children}</div>
        <div className="opacity-70 w-full px-4 border-2 border-white/45 rounded-xl py-4">
          <p>The project details are: </p>
          <ul className="grid grid-cols-2 gap-2 text-xs mt-2 font-bold">
            <li>Project name: {projectdetails[0]}</li>
            <li>Aspect ratio: {projectdetails[1]}</li>
            <li>Resolution: {projectdetails[2]}</li>
            <li>Frame rate: {projectdetails[3]}</li>
          </ul>
        </div>
        <div className="w-full h-full flex justify-center items-center -mb-20 mt-4">
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
