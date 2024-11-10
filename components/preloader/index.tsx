import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import { opacity, slideUp } from "./animations";

const words = [
  "Gathering ideas...",
  "Building the experience...",
  "Almost ready...",
  "Here we go!",
];

export default function Index({ onLoadingComplete }) {
  const [index, setIndex] = useState(0);
  const [dimension, setDimension] = useState({ width: 0, height: 0 });

  useEffect(() => {
    setDimension({ width: window.innerWidth, height: window.innerHeight });
  }, []);

  useEffect(() => {
    if (index == words.length - 1) {
      onLoadingComplete();
      window.scrollTo(0, 0);
      return;
    }
    setTimeout(
      () => {
        setIndex(index + 1);
      },
      index == 0 ? 1500 : 1050,
    );
  }, [index]);

  const initialPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${dimension.height} Q${dimension.width / 2} ${dimension.height + 300} 0 ${dimension.height}  L0 0`;
  const targetPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${dimension.height} Q${dimension.width / 2} ${dimension.height} 0 ${dimension.height}  L0 0`;

  const curve = {
    initial: {
      d: initialPath,
      transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] },
    },
    exit: {
      d: targetPath,
      transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1], delay: 0.3 },
    },
  };

  return (
    <motion.div
      variants={slideUp}
      initial="initial"
      exit="exit"
      className="fixed z-[99] flex h-screen w-screen items-center justify-center fill-neutral-800"
    >
      {dimension.width > 0 && (
        <>
          <motion.p
            className="absolute z-50 flex items-center text-4xl text-white"
            variants={opacity}
            initial="initial"
            animate="enter"
          >
            {/* <span className="mr-2 block size-2 rounded-full bg-white"></span> */}
            {words[index]}
          </motion.p>
          <svg className="absolute top-0 h-[calc(100%+300px)] w-full">
            <motion.path
              className="fill-neutral-800"
              variants={curve}
              initial="initial"
              exit="exit"
            ></motion.path>
          </svg>
        </>
      )}
    </motion.div>
  );
}
