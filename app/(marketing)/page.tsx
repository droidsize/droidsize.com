import "@/styles/home.css";

import {
  ChapterDomainCollective,
  ChapterSparkles,
  HomeClose,
  HomeDelhi,
  HomeHero,
  HomeIndex,
  HomeRails,
  HomeThesis,
} from "@/components/home/sections";

export default function Home() {
  return (
    <>
      <HomeHero />
      <HomeThesis />
      <ChapterDomainCollective />
      <ChapterSparkles />
      <HomeRails />
      <HomeIndex />
      <HomeDelhi />
      <HomeClose />
    </>
  );
}
