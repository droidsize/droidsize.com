"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const Cursor = () => {
  const [mousePosition, setMousePosition] = useState({
    x: typeof window !== "undefined" ? window.innerWidth / 2 : 0,
    y: typeof window !== "undefined" ? window.innerHeight / 2 : 0,
  });
  const [isHovering, setIsHovering] = useState(false);

  const cursorSize = isHovering ? 100 : 60;

  const cursorX = useMotionValue(
    typeof window !== "undefined" ? window.innerWidth / 2 : 0,
  );
  const cursorY = useMotionValue(
    typeof window !== "undefined" ? window.innerHeight / 2 : 0,
  );

  // Slower, smoother spring configuration
  const springConfig = {
    damping: 65, // Increased damping for more smoothness
    stiffness: 200, // Reduced stiffness for slower movement
    mass: 1.2, // Increased mass for more inertia
    restSpeed: 0.001, // Lower rest speed for smoother stops
  };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const mouseMove = (e: MouseEvent) => {
      const x = e.clientX;
      const y = e.clientY;
      setMousePosition({ x, y });
    };

    const isClickable = (element: Element | null): boolean => {
      if (!element) return false;
      const clickableTags = ["A", "BUTTON", "INPUT", "SELECT", "TEXTAREA"];
      if (
        clickableTags.includes(element.tagName) ||
        element.getAttribute("role") === "button" ||
        element.classList.contains("clickable")
      ) {
        return true;
      }
      return isClickable(element.parentElement);
    };

    const handleMouseOver = (e: MouseEvent) => {
      if (isClickable(e.target as Element)) {
        setIsHovering(true);
      }
    };

    const handleMouseOut = (e: MouseEvent) => {
      if (isClickable(e.target as Element)) {
        setIsHovering(false);
      }
    };

    window.addEventListener("mousemove", mouseMove);
    window.addEventListener("mouseover", handleMouseOver);
    window.addEventListener("mouseout", handleMouseOut);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
      window.removeEventListener("mouseout", handleMouseOut);
    };
  }, []);

  useEffect(() => {
    cursorX.set(mousePosition.x - cursorSize / 2);
    cursorY.set(mousePosition.y - cursorSize / 2);
  }, [mousePosition.x, mousePosition.y, cursorSize]);

  return (
    <motion.div
      className="pointer-events-none fixed z-50 hidden rounded-full mix-blend-difference sm:block"
      animate={{
        width: cursorSize,
        height: cursorSize,
        backgroundColor: isHovering
          ? "rgba(255, 255, 255, 1)"
          : "rgba(255, 255, 255, 0)",
        scale: isHovering ? 1 : 1,
        border: isHovering ? "none" : "1.5px solid white",
      }}
      style={{
        x: cursorXSpring,
        y: cursorYSpring,
        transformOrigin: "center",
      }}
      initial={false}
      transition={{
        scale: {
          type: "spring",
          damping: 50,
          stiffness: 150,
          mass: 0.7,
        },
        width: {
          type: "spring",
          damping: 50,
          stiffness: 150,
          mass: 0.7,
        },
        height: {
          type: "spring",
          damping: 50,
          stiffness: 150,
          mass: 0.7,
        },
      }}
    >
      <motion.div
        className="absolute inset-0 m-auto size-1.5 rounded-full bg-white"
        animate={{
          scale: isHovering ? 0 : 1,
          opacity: isHovering ? 0 : 1,
        }}
        transition={{
          duration: 0.2,
          ease: "easeInOut",
        }}
      />
    </motion.div>
  );
};

export default Cursor;
