import Link from "next/link";

import { cn } from "@/lib/utils";

interface LinkUnderlineProps {
  title: string;
  href: string;
  className?: string;
}

const LinkUnderline = ({ title, href, className }: LinkUnderlineProps) => {
  return (
    <Link
      className={cn(
        "relative inline-block after:absolute after:bottom-0 after:left-0 after:h-[0.1em] after:w-full after:origin-bottom-right after:scale-x-0 after:rounded-[5px] after:bg-current after:transition-transform after:duration-300 after:ease-out after:content-[''] hover:after:origin-bottom-left hover:after:scale-x-100",
        className,
      )}
      href={href}
    >
      {title}
    </Link>
  );
};

export default LinkUnderline;
