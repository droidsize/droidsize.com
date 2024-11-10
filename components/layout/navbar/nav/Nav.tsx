import { useState } from "react";
import { motion } from "framer-motion";

import { marketingConfig } from "@/config/marketing";

import { menuSlide } from "../animations";
import Curve from "./Curve";
import Footer from "./Footer";
import NavLink from "./NavLink";

interface NavProps {
  setPath: (path: string) => void;
  closeMenu: () => void;
}

const navItems = marketingConfig.mainNav;

export default function Nav({ setPath, closeMenu }: NavProps) {
  const [selectedIndicator, setSelectedIndicator] = useState("/");

  return (
    <motion.div
      variants={menuSlide}
      initial="initial"
      animate="enter"
      exit="exit"
      className="fixed right-0 top-0 z-30 h-screen bg-[#301e64] text-white"
    >
      <div className="flex h-full flex-col justify-between p-24">
        <nav
          onMouseLeave={() => setSelectedIndicator("/")}
          className="flex flex-col"
        >
          <div className="text-md mb-2 border-b border-gray-400 uppercase text-gray-400">
            <span>Navigation</span>
          </div>
          <div className="mt-20 flex flex-col gap-6 text-5xl">
            {navItems.map((data, index) => (
              <NavLink
                key={index}
                data={{ ...data, index }}
                setSelectedIndicator={setSelectedIndicator}
                setPath={setPath}
                closeMenu={closeMenu}
              />
            ))}
          </div>
        </nav>
        <Footer />
      </div>
      <Curve />
    </motion.div>
  );
}
