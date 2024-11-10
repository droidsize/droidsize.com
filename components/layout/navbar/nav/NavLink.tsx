import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

import { scale, slide } from "../animations";

interface NavLinkProps {
  data: {
    title: string;
    href: string;
    index: number;
  };
  setSelectedIndicator: (href: string) => void;
  setPath: (path: string) => void;
  closeMenu: () => void;
}

export default function NavLink({
  data,
  setSelectedIndicator,
  setPath,
  closeMenu,
}: NavLinkProps) {
  const { title, href, index } = data;
  const pathname = usePathname();
  const isCurrentPage = decodeURIComponent(pathname) === href;
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="relative flex items-center"
      onMouseEnter={() => {
        setSelectedIndicator(href);
        setIsHovered(true);
      }}
      onMouseLeave={() => setIsHovered(false)}
      custom={index}
      variants={slide}
      initial="initial"
      animate="enter"
      exit="exit"
    >
      <motion.div
        variants={scale}
        animate={isHovered || isCurrentPage ? "open" : "closed"}
        className="absolute -left-8 size-2.5 rounded-full bg-white"
      />
      <Link
        href={href}
        className="font-regular transition-opacity hover:opacity-80"
        onClick={() => {
          closeMenu();
        }}
      >
        {title}
      </Link>
    </motion.div>
  );
}
