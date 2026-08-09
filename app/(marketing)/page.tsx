"use client";

import ParallaxText from "@/components/ParallaxText";
import Clients from "@/components/sections/clients";
import Hero from "@/components/sections/hero";
import HowWeWork from "@/components/sections/how-we-work";
import RecentWorks from "@/components/sections/recent-works";
import Services from "@/components/sections/services";
import Trusted from "@/components/sections/trusted";
import TextRevealOnScroll from "@/components/text-reveal-on-scroll";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <HowWeWork />
      <TextRevealOnScroll phrase="Small teams. Senior thinking. Digital products built to move." />
      <Trusted />
      <RecentWorks />
      <Clients />
      <TextRevealOnScroll phrase="Design and engineering stay in the same room, from the first sketch to the final release." />
      <ParallaxText
        baseVelocity={-5}
        href="/contact"
        subTitle="Tell us what you are building."
      >
        Start a project
      </ParallaxText>
    </>
  );
}
