import type { Metadata } from "next";
import { IBM_Plex_Mono, Outfit } from "next/font/google";
import "../globals.css";
import Navbar from "@/modules/Navbar";
import BGshapes from "@/modules/BGshapes";
import { TbLayoutNavbar } from "react-icons/tb";
import ToturialNavbar from "@/modules/Tutorial/TutorialNavbar";
import TutorialFooter from "@/modules/Tutorial/TutorialFooter";

const ibm = Outfit({ subsets: ["latin"], weight: "500" });

export const metadata: Metadata = {
  title: "1Frame",
  description: "Professional Video Editor and Motion Graphics Designer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${ibm.className} min-h-screen flex flex-col w-full`}>
        <BGshapes />
        <ToturialNavbar />
        <main className="grow">{children}</main>
        <TutorialFooter />
      </body>
    </html>
  );
}
