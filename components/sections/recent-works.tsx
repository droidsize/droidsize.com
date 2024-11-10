"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  motion,
  MotionProps,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "framer-motion";
import { MoveUpRight } from "lucide-react";

import { throttle } from "@/lib/utils";

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

const slideAnimation: MotionProps = {
  initial: "partial",
  whileInView: "full",
  viewport: { amount: 1, once: false },
};

export default function RecentWorks() {
  const mainRef = useRef<HTMLDivElement>(null);
  const carouselRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const { position } = useElementViewportPosition(mainRef);
  const [carouselEndPosition, setCarouselEndPosition] = useState(0);
  const { scrollYProgress, scrollY } = useScroll();
  const [sectionHeight, setSectionHeight] = useState("300vh");

  const x = useTransform(
    scrollYProgress,
    position,
    typeof window !== "undefined"
      ? [window.innerWidth / 0.7, carouselEndPosition - window.innerWidth]
      : [0, 0],
  );

  const textX = useTransform(
    scrollYProgress,
    position,
    typeof window !== "undefined"
      ? [
          window.innerWidth / 2,
          window.innerWidth / 2 - (textRef.current?.offsetWidth || 0),
        ]
      : [0, 0],
  );

  useMotionValueEvent(scrollY, "change", (latest) => {
    console.log("Page scroll: ", latest);
  });

  useEffect(() => {
    if (!carouselRef || !carouselRef.current) return;
    const parent = carouselRef.current.parentElement;
    const scrollbarWidth =
      typeof window !== "undefined"
        ? window.innerWidth - document.documentElement.clientWidth
        : 0;

    const resetCarouselEndPosition = () => {
      if (carouselRef && carouselRef.current && typeof window !== "undefined") {
        const newPosition =
          carouselRef.current.clientWidth -
          window.innerWidth +
          scrollbarWidth +
          (parent as HTMLElement).offsetLeft * 2;

        setCarouselEndPosition(-newPosition);

        // Calculate the section height based on the total width of carousel items
        const totalWidth = carouselRef.current.clientWidth;
        const sectionHeight = `${(totalWidth / window.innerWidth) * 100}vh`;
        setSectionHeight(sectionHeight);
      }
    };

    resetCarouselEndPosition();
    const handleResize = throttle(resetCarouselEndPosition, 10);

    if (typeof window !== "undefined") {
      window.addEventListener("resize", handleResize);
    }
    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("resize", handleResize);
      }
    };
  }, []);

  return (
    <>
      <section ref={mainRef} id="recent-works">
        <div
          className="mx-auto w-full"
          style={{ height: sectionHeight }}
          data-scroll-container
        >
          <div
            className="sticky top-0 flex h-screen w-full flex-col items-start justify-center overflow-hidden"
            data-scroll-section
          >
            <motion.h2
              ref={textRef}
              className="text-gradient_white-black absolute left-0 top-0 w-full -translate-y-1/2 text-center text-[13vw] font-bold text-neutral-100 dark:text-[#ebe1f9]"
              style={{ x: textX }}
              data-scroll-section
            >
              Recent Works
            </motion.h2>
            <motion.div
              ref={carouselRef}
              className="mt-20 flex gap-10"
              style={{ x }}
            >
              {works.map((work, index) => (
                <motion.div
                  {...slideAnimation}
                  key={index}
                  className="relative w-[35rem] overflow-hidden"
                >
                  <Link href={"#"} className="size-full">
                    <Card work={work} />
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}

function Card({ work }: { work: (typeof works)[number] }) {
  return (
    <>
      <article className="group relative overflow-hidden">
        <div className="wofull h-96 overflow-hidden rounded-xl">
          <Image
            src={`/_static/${work.image}`}
            alt={"image"}
            height={800}
            width={1200}
            className="size-full scale-105 rounded-xl object-cover transition-all duration-300 hover:scale-100"
          />
        </div>
        <div className="relative bottom-2 flex w-full items-center justify-between p-4 pt-6 text-black">
          <div className="flex flex-col gap-2">
            <h3 className="text-4xl font-bold text-white">{work.title}</h3>
            <div className="text-xl font-medium text-white">
              {work.category}
            </div>
          </div>
          <button className="group relative inline-flex size-12 items-center justify-center overflow-hidden rounded-full border-2 bg-[#080918] font-medium text-neutral-200 transition-all duration-500 group-hover:w-24">
            <div className="inline-flex whitespace-nowrap opacity-0 transition-all duration-500 group-hover:-translate-x-3 group-hover:opacity-100">
              Visit
            </div>
            <div className="absolute right-3">
              <MoveUpRight />
            </div>
          </button>
        </div>
      </article>
    </>
  );
}

export const works = [
  {
    title: "Paytm",
    category: "Backend Development",
    image: "works/1.jpg",
  },
  {
    title: "Pei",
    category: "Web & App Development",
    image: "works/2.jpg",
  },
  {
    title: "Stream app",
    category: "Application Development",
    image: "works/3.jpg",
  },
  {
    title: "Daily Objects",
    category: "Application Development",
    image: "works/2.jpg",
  },
  {
    title: "Chargespot",
    category: "Full Stack",
    image: "works/4.jpg",
  },
  {
    title: "Painini",
    category: "Full Stack",
    image: "works/2.jpg",
  },
  {
    title: "House of Ivy",
    category: "Branding",
    image: "works/1.jpg",
  },
  {
    title: "Epic.one",
    category: "Application Development",
    image: "works/3.jpg",
  },
  {
    title: "Bitcharge",
    category: "Front/Backend Development",
    image: "works/4.jpg",
  },
];
