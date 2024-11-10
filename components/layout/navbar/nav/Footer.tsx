import { ArrowUpRight } from "lucide-react";

import { footerSocials } from "@/config/site";
import LinkUnderline from "@/components/LinkUnderline";
import Magnetic from "@/components/Magnetic";

export default function Footer() {
  return (
    <div className="text-md flex gap-6">
      {footerSocials.items.map((item) => (
        <Magnetic strength={0.12} className="flex items-center gap-1">
          <LinkUnderline
            title={item.title}
            href={item.href}
            className="text-md transition-opacity hover:opacity-80"
          />
          <ArrowUpRight />
        </Magnetic>
      ))}
    </div>
  );
}
