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
      type="button"
      aria-label={title}
      className={cn(
        "group relative inline-flex h-14 w-fit items-center justify-center overflow-hidden rounded-full border border-white/30 font-medium *:h-14 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white",
        className,
      )}
      onClick={onClick}
    >
      <div className="inline-flex translate-y-0 items-center justify-center bg-[var(--site-inverse)] px-12 text-[var(--site-inverse-ink)] transition duration-500 group-hover:translate-y-[-150%]">
        {title}
      </div>
      <div className="absolute inline-flex w-full translate-y-full items-center justify-center transition duration-500 group-hover:translate-y-0">
        <span className="absolute size-full translate-y-full skew-y-12 scale-y-0 bg-[var(--site-surface-raised)] transition duration-500 group-hover:translate-y-0 group-hover:scale-150"></span>
        <span className="z-10 text-[var(--site-ink)]">{title}</span>
      </div>
    </button>
  ) : (
    <Link
      href={href || "#"}
      aria-label={title}
      className={cn(
        "group relative inline-flex h-14 w-fit items-center justify-center overflow-hidden rounded-full border border-white/30 font-medium *:h-14 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white",
        className,
      )}
      onClick={onClick}
    >
      <div className="inline-flex translate-y-0 items-center justify-center bg-[var(--site-inverse)] px-12 text-[var(--site-inverse-ink)] transition duration-500 group-hover:translate-y-[-150%]">
        {title}
      </div>
      <div className="absolute inline-flex w-full translate-y-full items-center justify-center transition duration-500 group-hover:translate-y-0">
        <span className="absolute size-full translate-y-full skew-y-12 scale-y-0 bg-[var(--site-surface-raised)] transition duration-500 group-hover:translate-y-0 group-hover:scale-150"></span>
        <span className="z-10 text-[var(--site-ink)]">{title}</span>
      </div>
    </Link>
  );
};

export default ButtonHover;
