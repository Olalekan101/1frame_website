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

export function HealthSideBarMenu() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <RxHamburgerMenu />
      </SheetTrigger>
      <SheetContent>
        <div className="grid gap-4 py-4">
          <div className="">
            <a href={"/portfolio"}>Portfolio</a>
          </div>
          <div className="">
            <a href={"/about-health-media"}> About Us</a>
          </div>
          <div className="">
            <a href={"/content-calendar"}>Content Calendar</a>
          </div>
          <div className="">
            <a href={"/pricing"}> Pricing</a>
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
