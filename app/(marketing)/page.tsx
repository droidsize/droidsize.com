"use client";

import ParallaxText from "@/components/ParallaxText";
import Awards from "@/components/sections/awards";
import BlogsList from "@/components/sections/blogs-list";
import Clients from "@/components/sections/clients";
import Hero from "@/components/sections/hero";
import HowWeWork from "@/components/sections/how-we-work";
import RecentWorks from "@/components/sections/recent-works";
import Services from "@/components/sections/services";
import SlidingImages from "@/components/sections/sliding-images";
import Team from "@/components/sections/team";
import Testimonials from "@/components/sections/testimonials";
import Trusted from "@/components/sections/trusted";
import TextRevealOnScroll from "@/components/text-reveal-on-scroll";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <HowWeWork />
      <TextRevealOnScroll phrase="As a tight-knit team of experts, we create memorable & emotional sites, digital experiences, and native apps." />
      <Trusted />
      <RecentWorks />
      <TextRevealOnScroll phrase="We are an independent creative agency in the India who connect brands with their audiences using deisgn, technology and insights." />
      <SlidingImages />
      <Clients />
      <Awards />
      <Team />
      <Testimonials />
      <BlogsList />
      <ParallaxText
        baseVelocity={-5}
        href="/works"
        subTitle="See what we did before."
      >
        Works
      </ParallaxText>
    </>
  );
}
