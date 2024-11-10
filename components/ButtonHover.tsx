import Link from "next/link";

import { cn } from "@/lib/utils";

interface ButtonHoverProps {
  title: string;
  className?: string;
  onClick?: () => void;
  href?: string;
}

const ButtonHover = ({ title, className, onClick, href }: ButtonHoverProps) => {
  return !href ? (
    <button
      className={cn(
        "group relative inline-flex h-14 w-fit items-center justify-center overflow-hidden rounded-full border border-slate-800 font-medium *:h-14 dark:border-neutral-500",
        className,
      )}
      onClick={onClick}
    >
      <div className="inline-flex translate-y-0 items-center justify-center bg-neutral-900 bg-gradient-to-r px-12 text-black transition duration-500 group-hover:translate-y-[-150%] dark:from-[#8963fd] dark:to-[#6e42f1] dark:text-white">
        {title}
      </div>
      <div className="absolute inline-flex w-full translate-y-full items-center justify-center transition duration-500 group-hover:translate-y-0">
        <span className="absolute size-full translate-y-full skew-y-12 scale-y-0 bg-gradient-to-r from-[#212024] to-[#3f374e] transition duration-500 group-hover:translate-y-0 group-hover:scale-150 dark:from-[#ebe1f9] dark:to-[#bbb0d1]"></span>
        <span className="z-10 text-white dark:text-black">{title}</span>
      </div>
    </button>
  ) : (
    <Link
      href={href || "#"}
      className={cn(
        "group relative inline-flex h-14 w-fit items-center justify-center overflow-hidden rounded-full border border-slate-800 font-medium *:h-14 dark:border-neutral-500",
        className,
      )}
      onClick={onClick}
    >
      <div className="inline-flex translate-y-0 items-center justify-center bg-neutral-900 bg-gradient-to-r px-12 text-black transition duration-500 group-hover:translate-y-[-150%] dark:bg-[#8963fd] dark:text-white">
        {title}
      </div>
      <div className="absolute inline-flex w-full translate-y-full items-center justify-center transition duration-500 group-hover:translate-y-0">
        <span className="absolute size-full translate-y-full skew-y-12 scale-y-0 bg-neutral-700 transition duration-500 group-hover:translate-y-0 group-hover:scale-150 dark:bg-[#ebe1f9]"></span>
        <span className="z-10 text-white dark:text-black">{title}</span>
      </div>
    </Link>
  );
};

export default ButtonHover;
