import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { TestimonialType } from "@/types";
import { motion, useScroll, useTransform } from "framer-motion";

import { cn } from "@/lib/utils";
import Marquee from "@/components/ui/marquee";

export const testimonials: TestimonialType[] = [
  {
    name: "John Doe",
    job: "Full Stack Developer",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
    review:
      "The development workflow is incredibly smooth and intuitive. The architecture decisions made here show.",
  },
  {
    name: "Alice Smith",
    job: "UI/UX Designer",
    image: "https://randomuser.me/api/portraits/women/2.jpg",
    review:
      "The attention to detail in the user interface is exceptional. Every interaction feels natural and the animations add a delightful touch to the experience.",
  },
  {
    name: "David Johnson",
    job: "DevOps Engineer",
    image: "https://randomuser.me/api/portraits/men/3.jpg",
    review:
      "The deployment pipeline and infrastructure setup are rock solid. I'm impressed by how well everything is automated.",
  },
  {
    name: "Michael Wilson",
    job: "Project Manager",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
    review:
      "This platform has streamlined our entire workflow. The team collaboration features and project tracking tools have significantly boosted our productivity.",
  },
  {
    name: "Sophia Garcia",
    job: "Data Analyst",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
    review:
      "The data visualization capabilities are outstanding. Being able to generate insights quickly has transformed how we make decisions. Highly recommended.",
  },
  {
    name: "Emily Brown",
    job: "Marketing Manager",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
    review:
      "From a marketing perspective, this tool is a game-changer. The analytics integration and campaign management features exceed all our expectations.",
  },
  {
    name: "Jason Stan",
    job: "Web Designer",
    image: "https://randomuser.me/api/portraits/men/9.jpg",
    review:
      "The design system is incredibly well thought out. The components are flexible yet consistent, making it easy to maintain brand identity across projects.",
  },
  {
    name: "David Johnson",
    job: "DevOps Engineer",
    image: "https://randomuser.me/api/portraits/men/3.jpg",
    review:
      "The scalability and performance optimizations are impressive. Load times are minimal and the system handles high traffic without breaking a sweat.",
  },
  {
    name: "Michael Wilson",
    job: "Project Manager",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
    review:
      "The resource allocation features have revolutionized how we manage projects. It's made tracking progress and identifying bottlenecks much more efficient.",
  },
  {
    name: "Sophia Garcia",
    job: "Data Analyst",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
    review:
      "The machine learning integration for predictive analytics is powerful. It's helped us uncover patterns we wouldn't have found through traditional analysis.",
  },
];

const firstRow = testimonials.slice(0, Math.floor(testimonials.length / 2));
const secondRow = testimonials.slice(
  Math.floor(testimonials.length / 2),
  Math.floor(testimonials.length - 1),
);

const TestimonialCard = ({
  image,
  name,
  job,
  review,
}: {
  image: string;
  name: string;
  job: string;
  review: string;
}) => {
  return (
    <figure
      className={cn(
        "relative min-h-44 w-96 overflow-hidden rounded-xl border p-4 transition-all duration-300 ease-in-out-sine",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-black/[.5] dark:bg-[#ebe1f9]/[.10] dark:hover:bg-[#ebe1f9]/[.15]",
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <Image
          width={44}
          height={44}
          className="rounded-full border"
          src={image}
          alt={name}
        />
        <div className="flex flex-col">
          <figcaption className="text-md font-medium dark:text-white">
            {name}
          </figcaption>
          <p className="text-xs font-medium dark:text-white/40">{job}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm text-neutral-300">
        {review}
      </blockquote>
    </figure>
  );
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

export default function Testimonials() {
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
          window.innerWidth / 2 - (textRef.current?.offsetWidth || 0),
        ]
      : [0, 0],
  );

  return (
    <section
      ref={mainRef}
      className="relative flex flex-col overflow-hidden py-32"
    >
      <h2 className="text-gradient_white-black z-[2] self-center text-center text-7xl font-bold leading-normal dark:text-[#ebe1f9]">
        What People Have To Say
      </h2>
      <motion.div
        ref={textRef}
        className="absolute left-0 top-20 z-[1] w-full -translate-y-1/2 text-center text-[13vw] font-bold leading-none text-neutral-700/30"
        style={{ x: textX }}
        data-scroll-section
      >
        Testimonials
      </motion.div>
      <div className="relative flex size-full flex-col items-center justify-center overflow-hidden py-20">
        <Marquee pauseOnHover className="[--duration:20s]">
          {firstRow.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </Marquee>
        <Marquee reverse pauseOnHover className="[--duration:20s]">
          {secondRow.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </Marquee>
        {/* Left gradient */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
        {/* Right gradient */}
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
      </div>
    </section>
  );
}
