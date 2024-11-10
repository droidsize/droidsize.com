"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface TextMaskAnimationProps {
  phrases?: string[];
}

const defaultPhrases = [
  "It is a long established fact",
  "that a reader will be distracted",
  "by the readable content of a page",
  "when looking at its layout.",
];

export default function TextMaskAnimation({
  phrases = defaultPhrases,
}: TextMaskAnimationProps) {
  return <MaskText phrases={phrases} />;
}

function MaskText({ phrases }: { phrases: string[] }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, {
    once: true,
    amount: 0.75,
  });

  const animation = {
    initial: { y: "100%" },
    enter: (i: number) => ({
      y: "0",
      transition: {
        duration: 0.75,
        ease: [0.33, 1, 0.68, 1],
        delay: 0.075 * i,
      },
    }),
  };

  return (
    <section
      ref={ref}
      className="m-auto my-[100px] flex max-w-6xl flex-col items-center text-[5vw] text-[#ebe1f9]"
    >
      {phrases.map((phrase, index) => (
        <div key={index} className="overflow-hidden">
          <motion.p
            custom={index}
            variants={animation}
            initial="initial"
            animate={isInView ? "enter" : ""}
            className="m-0 font-bold"
          >
            {phrase}
          </motion.p>
        </div>
      ))}
    </section>
  );
}
