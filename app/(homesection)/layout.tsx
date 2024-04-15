import type { Metadata } from "next";
import { IBM_Plex_Mono, Outfit } from "next/font/google";
import "../globals.css";
import Navbar from "@/modules/Navbar";
import BGshapes from "@/modules/BGshapes";
import MainNavbar from "@/modules/MainNavbar";

const ibm = Outfit({ subsets: ["latin"], weight: "500" });

export const metadata: Metadata = {
  title: "1Frame",
  description: "House of Quality Training",
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
        <MainNavbar />
        <main className="grow">{children}</main>
      </body>
    </html>
  );
}
