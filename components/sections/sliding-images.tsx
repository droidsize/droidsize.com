import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

export default function SlidingImages() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });

  const x1 = useTransform(scrollYProgress, [0, 1], [-450, 150]);
  const x2 = useTransform(scrollYProgress, [0, 1], [150, -250]);
  const height = useTransform(scrollYProgress, [0, 0.9], [50, 0]);

  return (
    <section
      ref={container}
      className="relative z-10 flex w-full flex-col gap-[3vw] py-52"
    >
      <div className="relative w-full overflow-hidden">
        <motion.div style={{ x: x1 }} className="flex gap-[3vw]">
          {slider1.map((project, index) => {
            return (
              <div
                key={index}
                className="flex h-[20vw] w-[25vw] flex-none items-center justify-center"
                style={{ backgroundColor: project.color }}
              >
                <div className="relative size-4/5">
                  <Image
                    fill={true}
                    alt={"image"}
                    src={`${project.src}`}
                    className="object-cover"
                  />
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>
      <div className="relative w-full overflow-hidden">
        <motion.div style={{ x: x2 }} className="flex gap-[3vw]">
          {slider2.map((project, index) => {
            return (
              <div
                key={index}
                className="flex h-[20vw] w-[25vw] flex-none items-center justify-center"
                style={{ backgroundColor: project.color }}
              >
                <div className="relative size-4/5">
                  <Image
                    fill={true}
                    alt={"image"}
                    src={`${project.src}`}
                    className="object-cover"
                  />
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>
      {/* <motion.div style={{ height }} className="relative mt-[100px] -mb-[50px]">
      <div className="z-10 h-[1550%] w-[120%] rounded-b-[50%] bg-gray-800 shadow-
        [0_60px_50px_rgba(0,0,0,0.748)] dark:shadow-[0_60px_50px_rgba(255,255,255,0.2)] 
        absolute inset-0 -translate-x-1/2 left-1/2"></div>
      </motion.div> */}
    </section>
  );
}

const slider1 = [
  {
    color: "#e3e5e7",
    src: "/_static/works/2.jpg",
  },
  {
    color: "#d6d7dc",
    src: "/_static/works/4.jpg",
  },
  {
    color: "#e3e3e3",
    src: "/_static/works/1.jpg",
  },
  {
    color: "#e3e3e3",
    src: "/_static/works/2.jpg",
  },
  {
    color: "#e3e3e3",
    src: "/_static/works/3.jpg",
  },
];

const slider2 = [
  {
    color: "#d4e3ec",
    src: "/_static/works/4.jpg",
  },
  {
    color: "#e5e0e1",
    src: "/_static/works/1.jpg",
  },
  {
    color: "#d7d4cf",
    src: "/_static/works/2.jpg",
  },
  {
    color: "#e1dad6",
    src: "/_static/works/3.jpg",
  },
  {
    color: "#e1dad6",
    src: "/_static/works/4.jpg",
  },
];
