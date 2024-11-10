import { useRef } from "react";
import Link from "next/link";
import {
  motion,
  useAnimationFrame,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
} from "framer-motion";
import { ArrowUpRight } from "lucide-react";

interface ParallaxProps {
  children: string;
  baseVelocity: number;
  href: string;
  subTitle: string;
}

function ParallaxText({
  children,
  baseVelocity = 100,
  href,
  subTitle,
}: ParallaxProps) {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false,
  });

  /**
   * This is a magic wrapping for the length of the text - you
   * have to replace for wrapping that works for you or dynamically
   * calculate
   */

  const wrap = (min: number, max: number, v: number) => {
    const rangeSize = max - min;
    return ((((v - min) % rangeSize) + rangeSize) % rangeSize) + min;
  };

  /**
   * The number of times to repeat the child text should be dynamically calculated
   * based on the size of the text and viewport. Likewise, the x motion value is
   * currently wrapped between -20 and -36.66% - this 16.66% is derived from the fact
   * we have four children (100% / 6). This would also want deriving from the
   * dynamically generated number of children.
   */
  const x = useTransform(baseX, (v) => `${wrap(-20, -36.66, v)}%`);

  const directionFactor = useRef<number>(1);
  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

    /**
     * This is what changes the direction of the scroll once we
     * switch scrolling directions.
     */
    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();

    baseX.set(baseX.get() + moveBy);
  });

  return (
    <section className="relative bg-[#221d24]">
      <div className="m-0 flex flex-nowrap overflow-hidden whitespace-nowrap leading-[0.8] tracking-[-2px]">
        <Link
          href={href}
          className="pb-28 pt-24 text-neutral-200 transition-colors duration-500 ease-in-out-sine hover:text-[#ebe1f9]"
        >
          <motion.div
            className="flex flex-nowrap whitespace-nowrap text-[10rem] font-semibold *:mr-[30px] *:block"
            style={{ x }}
          >
            <span>{children}</span>
            <span>{children}</span>
            <span>{children}</span>
            <span>{children}</span>
            <span>{children}</span>
            <span>{children}</span>
          </motion.div>
          <div className="absolute bottom-11 left-1/2 flex -translate-x-1/2 items-center gap-1 tracking-normal text-neutral-200">
            {subTitle}
            <ArrowUpRight className="" />
          </div>
        </Link>
      </div>
    </section>
  );
}

export default ParallaxText;
