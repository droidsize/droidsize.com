"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight } from "lucide-react";

import { marketingConfig } from "@/config/marketing";
import { footerSocials } from "@/config/site";
import { cn } from "@/lib/utils";

import { ThemeSwitch } from "../theme-switch";

const navigation = marketingConfig.mainNav;

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const pathname = usePathname();
  const isWorkRoute = pathname === "/work" || pathname.startsWith("/work/");

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  useEffect(() => {
    const desktop = window.matchMedia("(min-width: 900px)");
    const closeMenuAtDesktop = () => {
      if (desktop.matches) setIsOpen(false);
    };

    desktop.addEventListener("change", closeMenuAtDesktop);
    return () => desktop.removeEventListener("change", closeMenuAtDesktop);
  }, []);

  useEffect(() => {
    if (!isOpen) return;

    const pageRegions = Array.from(
      document.querySelectorAll<HTMLElement>("main, footer"),
    );
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    pageRegions.forEach((region) => {
      region.inert = true;
      region.setAttribute("aria-hidden", "true");
    });

    const handleKeys = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
        menuButtonRef.current?.focus();
        return;
      }

      if (event.key !== "Tab") return;

      const menu = document.getElementById("mobile-site-menu");
      const focusable = [
        menuButtonRef.current,
        ...(menu
          ? Array.from(
              menu.querySelectorAll<HTMLElement>(
                'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
              ),
            )
          : []),
      ].filter((element): element is HTMLElement => element !== null);

      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (!first || !last) return;

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", handleKeys);
    return () => {
      document.removeEventListener("keydown", handleKeys);
      document.body.style.overflow = previousOverflow;
      pageRegions.forEach((region) => {
        region.inert = false;
        region.removeAttribute("aria-hidden");
      });
    };
  }, [isOpen]);

  const surfaceClass = isWorkRoute
    ? "border-[var(--work-line)] bg-[var(--work-canvas)] text-[var(--work-ink)]"
    : "border-[var(--site-line)] bg-[var(--site-canvas)] text-[var(--site-ink)]";

  return (
    <header className={cn("relative z-50 border-b", surfaceClass)}>
      <nav
        aria-label="Primary navigation"
        className="mx-auto grid min-h-[5.25rem] max-w-[1392px] grid-cols-[1fr_auto] items-center px-5 sm:px-8 min-[900px]:grid-cols-[1fr_auto_1fr]"
      >
        <Link
          href="/"
          aria-label="Droidsize home"
          className="relative z-50 flex w-fit items-center gap-2.5 transition-opacity duration-200 hover:opacity-60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current"
        >
          <Image
            src="/droidsize-logo.svg"
            alt=""
            width={24}
            height={30}
            priority
            className={cn(
              "h-[1.9rem] w-auto",
              "dark:invert",
            )}
          />
          <span className="text-xl font-medium tracking-[-0.03em]">
            droidsize
          </span>
        </Link>

        <ul className="hidden items-center gap-9 text-sm min-[900px]:flex">
          {navigation.map((item) => {
            const isCurrent =
              pathname === item.href ||
              (item.href === "/work" && pathname.startsWith("/work/"));

            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={isCurrent ? "page" : undefined}
                  className="inline-flex min-h-11 items-center transition-opacity duration-200 hover:opacity-55 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current"
                >
                  {item.title}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="hidden items-center justify-self-end min-[900px]:flex">
          <Link
            href="/contact"
            className="inline-flex min-h-11 items-center gap-1.5 text-sm transition-opacity duration-200 hover:opacity-55 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current"
          >
            Let&apos;s talk
            <ArrowUpRight aria-hidden="true" className="size-3.5" />
          </Link>
          <ThemeSwitch className="ml-3" />
        </div>

        <button
          ref={menuButtonRef}
          type="button"
          onClick={() => setIsOpen((open) => !open)}
          className="relative z-50 flex size-11 items-center justify-center justify-self-end focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current min-[900px]:hidden"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          aria-controls="mobile-site-menu"
        >
          <span className="relative block h-4 w-7" aria-hidden="true">
            <span
              className={cn(
                "absolute left-0 top-1/2 h-px w-7 bg-current transition-transform duration-300 ease-out",
                isOpen ? "-translate-y-1/2 rotate-45" : "-translate-y-[5px]",
              )}
            />
            <span
              className={cn(
                "absolute left-0 top-1/2 h-px w-7 bg-current transition-transform duration-300 ease-out",
                isOpen ? "-translate-y-1/2 -rotate-45" : "translate-y-[5px]",
              )}
            />
          </span>
        </button>
      </nav>

      {isOpen ? (
        <div
          id="mobile-site-menu"
          role="dialog"
          aria-modal="true"
          aria-label="Site menu"
          className={cn(
            "fixed inset-0 z-40 flex min-h-[100svh] flex-col px-5 pb-8 pt-28 sm:px-8",
            surfaceClass,
          )}
        >
          <nav aria-label="Mobile navigation">
            <ul className="border-current/20 border-t">
              {navigation.map((item) => (
                <li className="border-current/20 border-b" key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="flex min-h-16 items-center justify-between text-2xl tracking-[-0.025em] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-current"
                  >
                    {item.title}
                    <ArrowUpRight
                      aria-hidden="true"
                      className="size-5 opacity-50"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="border-current/20 mt-auto border-t pt-6">
            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="inline-flex min-h-11 items-center gap-2 text-lg font-medium focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current"
            >
              Let&apos;s talk
              <ArrowUpRight aria-hidden="true" className="size-4" />
            </Link>
            <div className="mt-7 flex items-center justify-between gap-5">
              <ul className="flex gap-5 text-sm">
                {footerSocials.items.map((item) => (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex min-h-11 items-center"
                    >
                      {item.title}
                    </a>
                  </li>
                ))}
              </ul>
              <ThemeSwitch />
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}
