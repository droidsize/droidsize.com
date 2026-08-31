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
    <footer className={cn("border-t", surfaceClass)}>
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

        <div className="border-current/20 grid gap-6 border-t py-7 text-xs leading-6 sm:grid-cols-[1fr_auto] sm:items-start">
          <div className={cn("max-w-4xl", mutedClass)}>
            <p>
              &copy; 2019–{new Date().getFullYear()} DROIDSIZE TECHNOLOGIES
              PRIVATE LIMITED · CIN U72200DL2019PTC347342
            </p>
            <address className="mt-1 not-italic">
              Registered office: 190, Baba Faridpuri, West Patel Nagar, New
              Delhi, Delhi 110008, India
            </address>
          </div>
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
      </div>
    </footer>
  );
}
