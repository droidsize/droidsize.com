import React from "react";
import Link from "next/link";
import { motion, useScroll } from "framer-motion";
import { Sparkles } from "lucide-react";

import { cn } from "@/lib/utils";
import ButtonHover from "@/components/ButtonHover";
import { slideUpSection } from "@/components/preloader/animations";
import MaxWidthWrapper from "@/components/shared/max-width-wrapper";

import { buttonVariants } from "../ui/button";

const Hero = () => {
  const { scrollYProgress } = useScroll();

  const handleExploreClick = () => {
    const recentWorksSection = document.getElementById("our-services");
    if (recentWorksSection) {
      recentWorksSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    // variants={slideUpSection} initial="initial" animate="enter"
    <motion.header
      className="z-10 min-h-[90vh]"
      variants={slideUpSection}
      initial="initial"
      animate="enter"
    >
      <MaxWidthWrapper>
        <div className="flex flex-col items-center justify-center gap-4">
          <div
            className={cn(
              buttonVariants({
                variant: "outline",
                size: "lg",
                rounded: "full",
              }),
              "border-2 px-4",
            )}
          >
            Bringing Your Brand to Life Online
          </div>
          <h1 className="flex flex-col gap-2 text-center font-bold leading-normal text-[#ebe1f9]">
            <span className="text-gradient_white-black text-[8rem]">
              Your Vision,
            </span>
            <span className="-mt-16 inline-block animate-[bg-gradient_6s_ease_infinite] bg-gradient-to-r from-[#1e1515] via-[#835aff] to-[#251a1a] bg-[length:300%] bg-clip-text text-[9.5rem] leading-normal text-transparent dark:from-[#ebe1f9] dark:via-[#835aff] dark:to-[#c7acf6]">
              Our Expertise
            </span>
          </h1>
          <div className="flex items-center gap-2">
            <p className="text-xl tracking-wide text-[#ebe1f9]">
              We create award winning sites that elevate your brand through
              expert development and design.
            </p>
            <Sparkles className="size-5 text-[#ebe1f9]" />
          </div>
          <div className="mt-10 flex justify-center">
            <ButtonHover
              title="Explore our services"
              className="*:h-16"
              onClick={handleExploreClick}
            />
          </div>
        </div>
      </MaxWidthWrapper>
    </motion.header>
  );
};

export default Hero;
