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

export function TutorialSideBarMenu() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <RxHamburgerMenu />
      </SheetTrigger>
      <SheetContent>
        <div className="grid gap-4 py-4">
          <div className="">
            <Link href={"/videoediting"}>Video Editing</Link>
          </div>
          <div className="">
            <Link href={"/2danimation"}>2D Animation</Link>
          </div>
          <div className="">
            <Link href={"/font-end"}>Front End</Link>
          </div>
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
