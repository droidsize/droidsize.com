import "@/styles/home.css";

import {
  ChapterDomainCollective,
  ChapterSparkle,
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
      <ChapterSparkle />
      <HomeRails />
      <HomeIndex />
      <HomeDelhi />
      <HomeClose />
    </>
  );
}
