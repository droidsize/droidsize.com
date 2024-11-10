"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import gsap from "gsap";

import ButtonHover from "@/components/ButtonHover";

import MaxWidthWrapper from "../shared/max-width-wrapper";

const scaleAnimation = {
  initial: { scale: 0, x: "-50%", y: "-50%" },
  enter: {
    scale: 1,
    x: "-50%",
    y: "-50%",
    transition: { duration: 0.4, ease: [0.76, 0, 0.24, 1] },
  },
  closed: {
    scale: 0,
    x: "-50%",
    y: "-50%",
    transition: { duration: 0.4, ease: [0.32, 0, 0.67, 0] },
  },
};

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

function Blog({ index, title, category, description, date, manageModal }) {
  return (
    <article
      onMouseEnter={(e) => {
        manageModal(true, index, e.clientX, e.clientY);
      }}
      onMouseLeave={(e) => {
        manageModal(false, index, e.clientX, e.clientY);
      }}
      className="group flex w-full cursor-pointer flex-col items-start justify-center gap-6 border-b border-[rgb(201,201,201)] py-12 *:transition-all *:duration-300 hover:opacity-50"
    >
      <div className="flex items-center group-hover:translate-x-[10px]">
        <time>{date}</time>
        <div className="relative mx-[15px] inline-block h-px w-[20px] bg-[rgba(255,255,255,0.6)] align-middle"></div>
        <p className="font-light">{category}</p>
      </div>
      <h2 className="text-4xl font-bold group-hover:translate-x-[10px]">
        {title}
      </h2>
      <p className="text-md line-clamp-3 overflow-hidden text-ellipsis font-light leading-loose group-hover:translate-x-[10px]">
        {description}
      </p>
    </article>
  );
}

export default function BlogsList() {
  const [modal, setModal] = useState({ active: false, index: 0 });
  const { active, index } = modal;
  const modalContainer = useRef(null);
  const cursor = useRef(null);
  const cursorLabel = useRef(null);
  const mainRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress, scrollY } = useScroll();
  const { position } = useElementViewportPosition(mainRef);

  const textX = useTransform(
    scrollYProgress,
    position,
    typeof window !== "undefined"
      ? [
          (window.innerWidth * 3) / 5,
          window.innerWidth / 2 - (textRef.current?.offsetWidth || 0),
        ]
      : [0, 0],
  );

  let xMoveContainer = useRef<gsap.QuickToFunc | null>(null);
  let yMoveContainer = useRef<gsap.QuickToFunc | null>(null);
  let xMoveCursor = useRef<gsap.QuickToFunc | null>(null);
  let yMoveCursor = useRef<gsap.QuickToFunc | null>(null);
  let xMoveCursorLabel = useRef<gsap.QuickToFunc | null>(null);
  let yMoveCursorLabel = useRef<gsap.QuickToFunc | null>(null);

  useEffect(() => {
    //Move Container
    xMoveContainer.current = gsap.quickTo(modalContainer.current, "left", {
      duration: 0.8,
      ease: "power3",
    });
    yMoveContainer.current = gsap.quickTo(modalContainer.current, "top", {
      duration: 0.8,
      ease: "power3",
    });
    //Move cursor
    xMoveCursor.current = gsap.quickTo(cursor.current, "left", {
      duration: 0.5,
      ease: "power3",
    });
    yMoveCursor.current = gsap.quickTo(cursor.current, "top", {
      duration: 0.5,
      ease: "power3",
    });
    //Move cursor label
    xMoveCursorLabel.current = gsap.quickTo(cursorLabel.current, "left", {
      duration: 0.45,
      ease: "power3",
    });
    yMoveCursorLabel.current = gsap.quickTo(cursorLabel.current, "top", {
      duration: 0.45,
      ease: "power3",
    });
  }, []);

  const moveItems = (x, y) => {
    xMoveContainer.current?.(x);
    yMoveContainer.current?.(y);
    xMoveCursor.current?.(x);
    yMoveCursor.current?.(y);
    xMoveCursorLabel.current?.(x);
    yMoveCursorLabel.current?.(y);
  };
  const manageModal = (active, index, x, y) => {
    moveItems(x, y);
    setModal({ active, index });
  };

  return (
    <section
      onMouseMove={(e) => {
        moveItems(e.clientX, e.clientY);
      }}
      className="relative flex flex-col items-center justify-center overflow-hidden px-4 py-32"
      ref={mainRef}
    >
      <MaxWidthWrapper className="max-w-4xl">
        <h2 className="text-gradient_white-black self-start text-left text-8xl font-bold dark:text-[#ebe1f9]">
        Latest Articles
        </h2>
        <motion.div
          ref={textRef}
          className="absolute left-0 top-32 -z-10 w-full -translate-y-1/2 text-center text-[13vw] font-bold leading-none text-neutral-700/30"
          style={{ x: textX }}
          data-scroll-section
        >
          Blog Posts
        </motion.div>
        <div className="flex w-full max-w-4xl flex-col items-center justify-center">
          {blogs.map((project, index) => {
            return (
              <Blog
                index={index}
                title={project.title}
                description={project.description}
                date={project.date}
                category={project.category}
                manageModal={manageModal}
                key={index}
              />
            );
          })}
          <ButtonHover title="More Blogs" className="mt-20 self-start" />
        </div>
        <>
          <motion.div
            ref={modalContainer}
            variants={scaleAnimation}
            initial="initial"
            animate={active ? "enter" : "closed"}
            className="pointer-events-none fixed left-1/2 top-1/2 z-[3] h-[350px] w-[400px] overflow-hidden bg-white"
          >
            <div
              style={{ top: index * -100 + "%" }}
              className="ease-[cubic-bezier(0.76,0,0.24,1)] relative size-full transition-[top] duration-500"
            >
              {blogs.map((project, index) => {
                const { src, color } = project;
                return (
                  <div
                    className="flex size-full items-center justify-center"
                    style={{ backgroundColor: color }}
                    key={`modal_${index}`}
                  >
                    <Image src={`${src}`} width={300} height={0} alt="image" />
                  </div>
                );
              })}
            </div>
          </motion.div>
          <motion.div
            ref={cursor}
            className="pointer-events-none fixed z-[3] flex size-20 items-center justify-center rounded-full bg-[#6e42f1] text-sm font-light text-white"
            variants={scaleAnimation}
            initial="initial"
            animate={active ? "enter" : "closed"}
          ></motion.div>
          <motion.div
            ref={cursorLabel}
            className="pointer-events-none fixed z-[3] flex size-20 items-center justify-center rounded-full bg-transparent text-sm font-light text-white"
            variants={scaleAnimation}
            initial="initial"
            animate={active ? "enter" : "closed"}
          >
            View
          </motion.div>
        </>
      </MaxWidthWrapper>
    </section>
  );
}

export const blogs = [
  {
    date: "March 23, 2022",
    category: "Development",
    title: "Radio telescope a mote of dust suspended in a sunbeam galaxies.",
    description:
      "What led you into design? My older brother was always into technology and taught himself to code when he was young. So I think he got me interested in computers at a young age. When I was around 12 or 13, I got really into Flash and started making animations and imaginary websites. So I think he got me interested in computers at a young age. When I was around 12 or 13, I got really into Flash and started making animations and imaginary websites.",
    src: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800&auto=format&fit=crop&q=80",
    color: "#b3b0b0",
  },
  {
    date: "March 20, 2022",
    category: "News",
    title:
      "Dream of the mind’s eye hundreds of thousands preserve and cherish.",
    description:
      "What led you into design? My older brother was always into technology and taught himself to code when he was young. So I think he got me interested in computers at a young age. When I was around 12 or 13, I got really into Flash and started making animations and imaginary websites. So I think he got me interested in computers at a young age. When I was around 12 or 13, I got really into Flash and started making animations and imaginary websites.",
    src: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800&auto=format&fit=crop&q=80",
    color: "#8C8C8C",
  },
  {
    date: "March 19, 2022",
    category: "Marketing",
    title: "Tunguska event decipherment extraplanetary rogue star stuff.",
    description:
      "What led you into design? My older brother was always into technology and taught himself to code when he was young. So I think he got me interested in computers at a young age. When I was around 12 or 13, I got really into Flash and started making animations and imaginary websites. So I think he got me interested in computers at a young age. When I was around 12 or 13, I got really into Flash and started making animations and imaginary websites.",
    src: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800&auto=format&fit=crop&q=80",
    color: "#5a5858",
  },
  {
    date: "March 15, 2022",
    category: "Marketing",
    title:
      "Dream of the mind’s eye hundreds of thousands preserve and cherish.",
    description:
      "What led you into design? My older brother was always into technology and taught himself to code when he was young. So I think he got me interested in computers at a young age. When I was around 12 or 13, I got really into Flash and started making animations and imaginary websites. So I think he got me interested in computers at a young age. When I was around 12 or 13, I got really into Flash and started making animations and imaginary websites.",
    src: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800&auto=format&fit=crop&q=80",
    color: "#3b3a3a",
  },
];
