"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, MotionValue, useScroll, useTransform } from "framer-motion";

const projects = [
  {
    title: "Unerio Residential Complex Landing page",
    description:
      "This paragraph is short description to describe about this project, you can use it to improve SEO or highlight some key result of this project",
    image: "/_static/works/1.jpg",
    link: "/works",
  },
  {
    title: "Clément Chapillon",
    description:
      "This paragraph is short description to describe about this project, you can use it to improve SEO or highlight some key result of this project",
    image: "/_static/works/2.jpg",
    link: "/works",
  },
  {
    title: "Zissou",
    description:
      "This paragraph is short description to describe about this project, you can use it to improve SEO or highlight some key result of this project",
    image: "/_static/works/3.jpg",
    link: "/works",
  },
  {
    title: "Mathias Svold and Ulrik Hasemann",
    description:
      "This paragraph is short description to describe about this project, you can use it to improve SEO or highlight some key result of this project",
    image: "/_static/works/4.jpg",
    link: "/works",
  },
  {
    title: "Mathias Svold and Ulrik Hasemann",
    description:
      "This paragraph is short description to describe about this project, you can use it to improve SEO or highlight some key result of this project",
    image: "/_static/works/4.jpg",
    link: "/works",
  },
  {
    title: "Mathias Svold and Ulrik Hasemann",
    description:
      "This paragraph is short description to describe about this project, you can use it to improve SEO or highlight some key result of this project",
    image: "/_static/works/4.jpg",
    link: "/works",
  },
  {
    title: "Mathias Svold and Ulrik Hasemann",
    description:
      "This paragraph is short description to describe about this project, you can use it to improve SEO or highlight some key result of this project",
    image: "/_static/works/4.jpg",
    link: "/works",
  },
];
export default function StackingCard(): JSX.Element {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });
  return (
    <section className="mb-56 mt-14 w-full text-white">
      {projects.map((project, i) => {
        const targetScale = 1 - (projects.length - i) * 0.05;
        const color = `255, 40%, ${10 + i * 5}%`;
        const rangeStart = i / (projects.length - 1);
        const rangeEnd = (i + 1) / (projects.length - 3);
        return (
          <Card
            key={`p_${i}`}
            i={i}
            link={project?.link}
            image={project?.image}
            title={project?.title}
            color={color}
            description={project?.description}
            progress={scrollYProgress}
            range={[rangeStart, rangeEnd]}
            targetScale={targetScale}
          />
        );
      })}
    </section>
  );
}

interface CardProps {
  i: number;
  title: string;
  description: string;
  image: string;
  link: string;
  color: string;
  progress: MotionValue<number>;
  range: [number, number];
  targetScale: number;
}

export const Card: React.FC<CardProps> = ({
  i,
  title,
  description,
  image,
  link,
  color,
  progress,
  range,
  targetScale,
}) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "start start"],
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [1.2, 1]);
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div
      ref={container}
      className="sticky top-4 flex items-center justify-center"
    >
      <motion.div
        style={{
          backgroundColor: `hsl(${color})`,
          scale,
          top: `calc(2vh + ${i * 25}px)`,
        }}
        className="relative -top-1/4 flex h-[550px] w-[85vw] origin-top rounded-2xl border-2 border-white/20 p-6"
      >
        <Link href={link} className="flex w-full flex-row gap-10">
          {/* Left */}
          <div className="flex w-[45%] flex-col justify-between p-8">
            <h3 className="text-left text-4xl font-medium">{title}</h3>
            <div className="relative flex flex-col gap-10">
              <p className="text-md">{description}</p>
              <div className="flex gap-4">
                <span className="rounded-full border border-black/20 px-3 py-1 text-sm dark:border-white/20">
                  development
                </span>
                <span className="rounded-full border border-black/20 px-3 py-1 text-sm dark:border-white/20">
                  illustration
                </span>
              </div>
            </div>
          </div>
          {/* Right */}
          <div className="relative h-full w-[55%] overflow-hidden rounded-2xl">
            <motion.div className="size-full" style={{ scale: imageScale }}>
              <Image fill src={image} alt={title} className="object-cover" />
            </motion.div>
          </div>
        </Link>
      </motion.div>
    </div>
  );
};
