"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import {
  animate,
  AnimatePresence,
  motion,
  useMotionValue,
  useTransform,
} from "framer-motion";

const LoaderProvider = ({ children }: { children: React.ReactNode }) => {
  const pathName = usePathname();
  const count = useMotionValue(0);
  const rounded = useTransform(count, Math.round);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const animation = animate(count, 100, {
      duration: 3,
      onComplete: () => {
        setIsLoading(false);
      },
    });

    // Reset the count when the pathname changes
    return () => {
      setIsLoading(true);
      count.set(0);
      animation.stop();
    };
  }, [pathName]);

  return (
    <AnimatePresence mode="wait">
      <div key={pathName} className="h-screen w-screen">
        {/* background */}
        <motion.div
          className="fixed z-40 h-screen w-screen rounded-b-[100px] bg-green-200"
          animate={{ height: "0vh" }}
          exit={{ height: "140vh" }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        />
        {/* background */}
        <motion.div
          className="fixed bottom-0 z-30 h-screen w-screen rounded-t-[100px] bg-red-200"
          initial={{ height: "140vh" }}
          animate={{
            height: "0vh",
            transition: { delay: 3, ease: "easeInOut" },
          }}
        />
        {/* text */}
        <motion.div
          className="fixed inset-0 z-40 m-auto size-fit cursor-default text-8xl text-slate-700"
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          exit={{ opacity: 0 }}
          transition={{ delay: 0.3, duration: 0.3, ease: "easeOut" }}
        >
          {pathName.substring(1)}
        </motion.div>
        {/* number */}
        <motion.div
          className="fixed bottom-24 left-24 z-50 cursor-default text-[14rem] font-bold text-slate-700"
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{ delay: 3, ease: "easeOut" }}
        >
          {rounded}
        </motion.div>
        {/* page */}
        <motion.div
          className="h-full"
          initial={{ y: "-200vh" }}
          animate={{ y: "0%" }}
          transition={{ duration: 3.4 }}
        >
          {children}
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default LoaderProvider;
