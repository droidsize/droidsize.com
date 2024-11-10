"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface TextRevealOnScrollProps {
  phrase: string;
}

export default function TextRevealOnScroll({
  phrase,
}: TextRevealOnScrollProps) {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 40%", "end 60%"],
  });

  const splitWords = (phrase: string): JSX.Element[] => {
    const allLetters = phrase.split(" ").reduce(
      (acc, word, wordIndex) => {
        const letters = word.split("").map((letter, letterIndex) => ({
          letter,
          word,
          wordIndex,
          letterIndex,
          isSpace: false,
        }));
        if (wordIndex < phrase.split(" ").length - 1) {
          letters.push({
            letter: " ",
            word: " ",
            wordIndex,
            letterIndex: -1,
            isSpace: true,
          });
        }
        return [...acc, ...letters];
      },
      [] as Array<{
        letter: string;
        word: string;
        wordIndex: number;
        letterIndex: number;
        isSpace: boolean;
      }>,
    );

    const totalLetters = allLetters.length;
    const words: JSX.Element[] = [];
    let currentWord: JSX.Element[] = [];
    let currentWordIndex = 0;

    allLetters.forEach((letterObj, globalIndex) => {
      if (letterObj.isSpace) {
        words.push(
          <p
            key={`word-${currentWordIndex}`}
            className="m-0 mr-[1.5vw] text-[8vw] font-bold leading-tight tracking-tight"
          >
            {currentWord}
          </p>,
        );
        currentWord = [];
        currentWordIndex++;
        return;
      }

      // Distribute progress evenly across total letters
      const progress = (globalIndex / totalLetters) * 0.8;

      //eslint-disable-next-line react-hooks/rules-of-hooks
      const opacity = useTransform(
        scrollYProgress,
        [progress, progress + 0.05],
        [0.1, 1],
      );

      //eslint-disable-next-line react-hooks/rules-of-hooks
      const y = useTransform(
        scrollYProgress,
        [progress, progress + 0.05],
        [20, 0],
      );

      currentWord.push(
        <motion.span
          key={`letter-${globalIndex}`}
          style={{
            opacity,
            y,
            display: "inline-block",
          }}
          className="inline-block"
        >
          {letterObj.letter}
        </motion.span>,
      );
    });

    if (currentWord.length > 0) {
      words.push(
        <p
          key={`word-${currentWordIndex}`}
          className="m-0 mr-[1.5vw] text-[8vw] font-bold leading-tight tracking-tight"
        >
          {currentWord}
        </p>,
      );
    }

    return words;
  };

  return (
    <section
      ref={containerRef}
      className="flex min-h-screen items-center justify-center py-[20vh] text-[rgb(211,211,211)] md:min-h-screen"
    >
      <div className="flex w-[90%] flex-wrap">{splitWords(phrase)}</div>
    </section>
  );
}
