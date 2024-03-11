import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "../globals.css";
import BGshapes from "@/modules/BGshapes";
import HealthNavbar from "@/modules/Health/HealthNavbar";
import HealthFooter from "@/modules/Health/HealthFooter";

const ibm = Outfit({ subsets: ["latin"], weight: "500" });

export const metadata: Metadata = {
  title: "1Frame",
  description: "Content creators for health care service providers",
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
        <HealthNavbar />
        <main className="grow">{children}</main>
        <HealthFooter />
      </body>
    </html>
  );
}
