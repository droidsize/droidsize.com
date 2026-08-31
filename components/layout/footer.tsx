"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight } from "lucide-react";

import { footerLinks, footerPolicy, footerSocials } from "@/config/site";
import { cn } from "@/lib/utils";

export default function Footer() {
  const pathname = usePathname();
  const isWorkRoute = pathname === "/work" || pathname.startsWith("/work/");
  const surfaceClass = isWorkRoute
    ? "border-[var(--work-line)] bg-[var(--work-canvas)] text-[var(--work-ink)]"
    : "border-[var(--site-line)] bg-[var(--site-canvas)] text-[var(--site-ink)]";
  const mutedClass = isWorkRoute
    ? "text-[var(--work-muted)]"
    : "text-[var(--site-muted)]";

  return (
    <footer className={cn("overflow-hidden border-t", surfaceClass)}>
      <div className="mx-auto max-w-[1392px] px-5 sm:px-8">
        <div className="grid gap-12 py-12 sm:py-16 lg:grid-cols-[1.2fr_0.8fr_0.9fr] lg:gap-20">
          <div>
            <Link
              href="/"
              aria-label="Droidsize home"
              className="flex w-fit items-center gap-2.5 transition-opacity duration-200 hover:opacity-60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current"
            >
              <Image
                src="/droidsize-logo.svg"
                alt=""
                width={24}
                height={30}
                className={cn(
                  "h-[1.9rem] w-auto",
                  "dark:invert",
                )}
              />
              <span className="text-xl font-medium tracking-[0.1px]">
                Droidsize
              </span>
            </Link>
            <p className={cn("mt-5 max-w-xs text-base leading-7", mutedClass)}>
              Software products and the systems behind them. Built from India,
              for teams everywhere.
            </p>
            <ul className="mt-7 flex flex-wrap gap-x-6 gap-y-2 text-sm">
              {footerSocials.items.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex min-h-11 items-center gap-1.5 transition-opacity duration-200 hover:opacity-55 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current"
                  >
                    {item.title}
                    <ArrowUpRight aria-hidden="true" className="size-3.5" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <nav aria-label="Footer navigation">
            <p className={cn("mb-4 text-sm", mutedClass)}>Explore</p>
            <ul className="space-y-1 text-base">
              {footerLinks[0]?.items?.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="inline-flex min-h-10 items-center transition-opacity duration-200 hover:opacity-55 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className={cn("mb-4 text-sm", mutedClass)}>Contact</p>
            <address className="space-y-1 not-italic">
              <a
                href="mailto:contact@droidsize.com"
                className="flex min-h-10 items-center transition-opacity duration-200 hover:opacity-55 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current"
              >
                contact@droidsize.com
              </a>
              <a
                href="tel:+919958007011"
                className="flex min-h-10 items-center transition-opacity duration-200 hover:opacity-55 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current"
              >
                +91 99580 07011
              </a>
              <p className={cn("pt-2 text-sm leading-6", mutedClass)}>
                New Delhi, India
              </p>
            </address>
            <Link
              href="/support"
              className={cn(
                "border-current/40 mt-5 inline-flex min-h-10 items-center border-b text-sm transition-opacity duration-200 hover:opacity-55 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current",
                mutedClass,
              )}
            >
              Support centre
            </Link>
          </div>
        </div>

        <div className="border-current/20 flex flex-wrap items-center justify-between gap-4 border-t py-6 text-xs leading-6">
          <p className={mutedClass}>
            &copy; 2019–{new Date().getFullYear()} Droidsize Technologies Pvt.
            Ltd. · Made in New Delhi
          </p>
          <ul className="flex gap-5 text-sm">
            {footerPolicy.items.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="inline-flex min-h-10 items-center transition-opacity duration-200 hover:opacity-55 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current"
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div aria-hidden="true" className="pointer-events-none select-none">
          <p className="-mb-[0.24em] whitespace-nowrap text-center text-[clamp(88px,13.5vw,208px)] font-semibold leading-none tracking-[-0.04em] text-[color-mix(in_srgb,currentColor_8%,transparent)]">
            Droidsize
          </p>
        </div>
      </div>
    </footer>
  );
}
