"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";

import Magnetic from "@/components/Magnetic";

export default function RoundedButton({
  children,
  backgroundColor = "#455CE9",
  ...attributes
}) {
  const circle = useRef(null);
  const timeline = useRef<gsap.core.Timeline | null>(null);
  let timeoutId: NodeJS.Timeout | null = null;

  useEffect(() => {
    timeline.current = gsap.timeline({ paused: true });
    timeline.current
      .to(
        circle.current,
        { top: "-25%", width: "150%", duration: 0.4, ease: "power3.in" },
        "enter",
      )
      .to(
        circle.current,
        { top: "-150%", width: "125%", duration: 0.25 },
        "exit",
      );
  }, []);

  const manageMouseEnter = () => {
    if (timeoutId) clearTimeout(timeoutId);
    timeline.current?.tweenFromTo("enter", "exit");
  };

  const manageMouseLeave = () => {
    timeoutId = setTimeout(() => {
      timeline.current?.play();
    }, 300);
  };

  return (
    <Magnetic>
      <div
        className="border-[1px solid rgb(136, 136, 136)] relative flex cursor-pointer items-center justify-center rounded-[3em] px-16 py-4"
        style={{ overflow: "hidden" }}
        onMouseEnter={() => {
          manageMouseEnter();
        }}
        onMouseLeave={() => {
          manageMouseLeave();
        }}
        {...attributes}
      >
        <p className="duration-400 relative z-10 transition-colors ease-linear group-hover:text-white">
          {children}
        </p>
        <div
          ref={circle}
          style={{ backgroundColor }}
          className="absolute top-full h-[150%] w-full rounded-full"
        ></div>
      </div>
    </Magnetic>
  );
}
