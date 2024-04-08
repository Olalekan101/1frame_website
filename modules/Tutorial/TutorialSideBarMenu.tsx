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
            <a href={"/videoediting"}>Premiere Pro</a>
          </div>
          <div className="">
            <a href={"/alight-motion"}>Alight Motion</a>
          </div>
          {/* <div className="">
            <Link href={"/font-end"}></Link>
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
