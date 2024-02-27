import { Button } from "@/components/ui/button";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import Link from "next/link";
import { FaWhatsappSquare } from "react-icons/fa";

export function ContactPopover() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline">Contact Me</Button>
      </PopoverTrigger>
      <PopoverContent className="w-80">
        <div className="grid gap-4 ">
          <Link href={"/"}>
            <div className="">
              <FaWhatsappSquare size={35} className="text-green-500" />
            </div>
          </Link>
        </div>
      </PopoverContent>
    </Popover>
  );
}
