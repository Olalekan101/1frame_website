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
            <Link href={"/portfolio"}>Portfolio</Link>
          </div>
          <div className="">
            <Link href={"/about-health-media"}> About Us</Link>
          </div>
          <div className="">
            <Link href={"/content-calendar"}>Content Calendar</Link>
          </div>
          <div className="">
            <Link href={"/pricing"}> Pricing</Link>
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
