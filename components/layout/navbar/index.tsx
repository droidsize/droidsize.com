"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence } from "framer-motion";

import Magnetic from "@/components/Magnetic";

import Nav from "./nav/Nav";

export default function Navbar() {
  const [isActive, setIsActive] = useState(false);
  const [currentPath, setCurrentPath] = useState("/");

  useEffect(() => {
    if (isActive) setIsActive(false);
  }, [currentPath]);

  const closeMenu = () => {
    setIsActive(false);
  };

  return (
    <>
      <div
        className={
          "z-50 flex min-h-20 w-full items-center justify-between px-8 py-6 transition-all"
        }
      >
        {/* Logo */}
        <Magnetic strength={0.2}>
          <Link
            href="/"
            className="flex items-center gap-px text-white transition-all duration-300 hover:opacity-80"
            onMouseDown={() => setCurrentPath("/")}
          >
            <Image
              src="/droidsize-logo.svg"
              alt="Droidsize"
              width={32}
              height={32}
              className="mr-2 invert"
            />
            <span className="text-3xl font-semibold tracking-tight">
              droidsize
            </span>
          </Link>
        </Magnetic>
        {/* Hamburger Button */}
        <Magnetic strength={0.6} className="z-50">
          <button
            onClick={() => setIsActive(!isActive)}
            className="duration-600 z-50 flex size-20 cursor-pointer items-center justify-center rounded-full bg-[#efe7fb] transition-all duration-500 ease-in-out hover:bg-[#ebe1f9]"
            aria-label="Toggle menu"
          >
            <div className="relative flex h-5 w-8 flex-col justify-center gap-[10px]">
              <span
                className={`absolute h-[2px] w-full bg-neutral-900 transition-all duration-300 ease-in-out ${
                  isActive
                    ? "top-1/2 -translate-y-1/2 rotate-45"
                    : "translate-y-[-4px]"
                }`}
              />
              <span
                className={`absolute h-[2px] w-full bg-neutral-900 transition-all duration-300 ease-in-out ${
                  isActive
                    ? "top-1/2 -translate-y-1/2 -rotate-45"
                    : "translate-y-[4px]"
                }`}
              />
            </div>
          </button>
        </Magnetic>
        <AnimatePresence mode="wait">
          {isActive && <Nav setPath={setCurrentPath} closeMenu={closeMenu} />}
        </AnimatePresence>
      </div>
    </>
  );
}
