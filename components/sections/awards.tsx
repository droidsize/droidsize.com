import { useEffect, useRef, useState } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";

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

export default function Awards() {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "0px 0px -200px 0px",
  });
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
      className="container relative mx-auto my-16 flex min-h-screen flex-col items-center justify-center overflow-hidden text-white"
    >
      <h2 className="text-gradient_white-black z-[2] self-center text-center text-9xl font-bold leading-normal dark:text-[#ebe1f9]">
        Awards
      </h2>
      <motion.div
        ref={textRef}
        className="absolute left-0 top-20 z-[1] w-full -translate-y-1/2 text-center text-[10vw] font-bold leading-none text-neutral-700/30"
        style={{ x: textX }}
        data-scroll-section
      >
        Recognition
      </motion.div>
      <div className="z-10 mt-10 flex flex-col gap-16 md:flex-row">
        {/* left */}
        <div className="mt-8 flex w-full flex-col gap-4 md:w-2/5">
          <h4 className="mt-7 text-3xl font-semibold leading-snug md:text-4xl md:leading-snug">
            Efforts to receive worthy rewards, awards & recognition{" "}
            <span className="text-neutral-500">help us affirm our brand.</span>
          </h4>
        </div>

        <div ref={ref} className="w-full md:w-3/5">
          <div className="flex flex-row items-center justify-between gap-4 border-b-2 border-neutral-600 px-4 py-8 text-sm font-bold uppercase text-neutral-300">
            <div>Award Title</div>
            <div>Date</div>
          </div>
          {AWARDS_LIST.map((award, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="before:duration-400 relative flex flex-col items-start justify-between gap-4 border-b border-neutral-700 px-4 py-8 before:absolute before:bottom-0 before:left-0 before:-z-10 before:h-0 before:w-full before:bg-[rgba(137,99,253,0.3)] before:transition-all before:duration-300 before:ease-in-out-sine before:content-[''] hover:before:h-full md:flex-row"
            >
              <div>
                <div className="mb-2 text-sm text-neutral-400">
                  {award.platform}
                </div>
                <div className="text-xl md:text-2xl">{award.title}</div>
              </div>
              <div className="flex-1 self-end whitespace-nowrap text-right text-neutral-400 md:self-start">
                {award.date}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

const AWARDS_LIST = [
  {
    platform: "css awards",
    title: "SOTY 2023 - 1st Winner",
    date: "May 2023",
  },
  {
    platform: "css awards",
    title: "Top 5 Best of eCommerce Websites 2022",
    date: "Dec 2022",
  },
  {
    platform: "Awwwards",
    title: "Honor SOTD November, 2022",
    date: "Nov 2022",
  },
  {
    platform: "Behance Portfolio",
    title: "Winner - US Behance Portfolio Review 2021",
    date: "Aug 2021",
  },
];
