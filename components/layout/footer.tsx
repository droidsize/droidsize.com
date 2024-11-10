"use client";

import React, { useRef } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

import { footerLinks, footerPolicy, footerSocials } from "@/config/site";
import ButtonHover from "@/components/ButtonHover";
import Magnetic from "@/components/Magnetic";

import LinkUnderline from "../LinkUnderline";

const Footer = () => {
  const container = useRef<HTMLDivElement>(null);
  const ref = useRef(null);
  const isInView = useInView(ref);

  const variants = {
    visible: (i: any) => ({
      translateY: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
        duration: 0.4,
        delay: i * 0.03,
      },
    }),
    hidden: { translateY: 200 },
  };

  return (
    <>
      <footer className="relative bg-[#271e30] text-white" ref={container}>
        <div className="relative rounded-t-[2rem] border-t-2 border-white/20 bg-gradient-to-b from-[#141211] via-[#1e1924] to-[#141211] bg-[length:100%_100%] bg-no-repeat pt-10 sm:pt-16">
          <div className="mx-auto flex max-w-6xl flex-col justify-between sm:container">
            {/* Upper section */}
            <div className="w-full justify-between pb-10 md:flex">
              {/* Left section */}
              <div className="flex flex-col gap-2">
                <h3 className="mb-6 text-3xl font-bold text-[#ebe1f9] md:text-6xl">
                  Let&lsquo;s talks!
                </h3>
                <ButtonHover title="Get in touch" />
                <div className="inline-block pb-6 pt-10 text-xl font-medium">
                  <p className="pb-3">Reach out @ +91 9999999999</p>
                  <a href="mailto:contact@droidsize.com">
                    contact@droidsize.com
                  </a>
                </div>
              </div>
              {/* Right section */}
              <div className="flex gap-14">
                {footerLinks.map((section) => (
                  <ul className="flex flex-col gap-2" key={section.title}>
                    {section.items?.map((link) => (
                      <li className="text-xl font-medium">
                        <LinkUnderline title={link.title} href={link.href} />
                      </li>
                    ))}
                  </ul>
                ))}

                <ul className="flex flex-col gap-2">
                  {footerSocials.items.map((item) => (
                    <li
                      className="flex items-center text-xl font-medium"
                      key={item.title}
                    >
                      <LinkUnderline title={item.title} href={item.href} />
                      <ArrowUpRight />
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            {/* Bottom section */}
            <div className="flex items-center justify-center border-y-2 border-gray-200">
              <motion.div
                className="flex w-screen items-center justify-center overflow-hidden"
                ref={ref}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
              >
                {"DROIDSIZE".split("").map((letter, index) => (
                  <motion.span
                    key={index}
                    custom={index}
                    variants={variants}
                    className="mb-10 font-droidsize text-[15rem] font-bold leading-none tracking-wider text-[#ebe1f9] dark:text-[#dedede]"
                  >
                    {letter}
                  </motion.span>
                ))}
              </motion.div>
            </div>
            {/* copyright section */}
            <div className="flex flex-col-reverse justify-between gap-3 py-4 font-medium md:flex-row">
              <span>
                &copy; 2023 - {new Date().getFullYear()} Droidsize. All Rights
                Reserved.
              </span>
              <div className="flex gap-4">
                {footerPolicy.items.map((item) => (
                  <Magnetic strength={0.3}>
                    <LinkUnderline
                      title={item.title}
                      href={item.href}
                      className="text-md"
                    />
                  </Magnetic>
                ))}
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
