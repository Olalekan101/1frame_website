import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Link from "next/link";
import { RxHamburgerMenu } from "react-icons/rx";

export function SideBarMenu() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <RxHamburgerMenu />
      </SheetTrigger>
      <SheetContent>
        <div className="grid gap-4 py-4">
          <div className="">
            <Link href={"/alight-motion"}>Alight Motion Training</Link>
          </div>
          <div className="">
            <Link href={"/about "}> About Me</Link>
          </div>
          {/* <div className="">
            <Link href={"/healthmedia"}>Health Media</Link>
          </div> */}
        </div>
        <SheetFooter>
          <SheetClose asChild>
            {/* <Button type="submit">Save changes</Button> */}
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
