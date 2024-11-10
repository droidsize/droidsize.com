"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

import ParallaxText from "@/components/ParallaxText";
import StackingCard from "@/components/sections/stacking-card";

function useElementViewportPosition(ref: React.RefObject<HTMLElement>) {
  const [position, setPosition] = useState<[number, number]>([0, 0]);

  useEffect(() => {
    if (!ref || !ref.current) return;

    const pageHeight = document.body.scrollHeight;
    const start = ref.current.offsetTop - 600;
    const end = start + ref.current.offsetHeight + 1000;

    setPosition([start / pageHeight, end / pageHeight]);
  }, []);

  return { position };
}

export default function Home() {
  const mainRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress, scrollY } = useScroll();
  const { position } = useElementViewportPosition(mainRef);

  const textX = useTransform(
    scrollYProgress,
    position,
    typeof window !== "undefined"
      ? [
          window.innerWidth,
          window.innerWidth / 3 - (textRef.current?.offsetWidth || 0),
        ]
      : [0, 0],
  );

  return (
    <>
      <section ref={mainRef} className="relative z-10 flex flex-col">
        <h1 className="text-gradient_white-black z-[2] self-center text-center text-8xl font-bold uppercase leading-normal dark:text-[#ebe1f9]">
          Work Card
        </h1>
        <motion.div
          ref={textRef}
          className="absolute -top-5 left-0 w-full -translate-y-1/2 text-center text-[10vw] font-bold leading-none text-neutral-700/30"
          style={{ x: textX }}
          data-scroll-section
        >
          Portfolio
        </motion.div>
      </section>
      <StackingCard />
      <ParallaxText
        baseVelocity={-5}
        href="/about-us"
        subTitle="Something more about the agency."
      >
        About us
      </ParallaxText>
    </>
  );
}
