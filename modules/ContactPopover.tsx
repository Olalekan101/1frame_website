import { Button } from "@/components/ui/button";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { FaWhatsappSquare, FaPhoneAlt } from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";

export function ContactPopover() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline">Contact Us</Button>
      </PopoverTrigger>
      <PopoverContent className="w-fit py-2 px-4 bg-white rounded-2xl overflow-clip">
        <div className="flex gap-4 ">
          <a href={"https://wa.me/+2347010174548"}>
            <div className="">
              <FaWhatsappSquare className="text-MainPurple size-[20px] md:size-[35px]" />
            </div>
          </a>
          <a href={"tel:+2347010174548"}>
            <div className="">
              <FaPhoneAlt
                size={35}
                className="text-MainPurple size-[20px] md:size-[35px]"
              />
            </div>
          </a>
          <a href={"mailto:+2347010174548"}>
            <div className="">
              <MdAlternateEmail
                size={35}
                className="text-MainPurple size-[20px] md:size-[35px]"
              />
            </div>
          </a>
        </div>
      </PopoverContent>
    </Popover>
  );
}
