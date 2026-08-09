import React from "react";

import ButtonHover from "@/components/ButtonHover";
import MaxWidthWrapper from "@/components/shared/max-width-wrapper";

const Hero = () => {
  return (
    <header className="z-10 flex min-h-[calc(100svh-8rem)] items-center overflow-hidden pb-16 pt-6 sm:pb-24">
      <MaxWidthWrapper>
        <div className="flex flex-col items-center justify-center gap-6">
          <div className="inline-flex min-h-11 items-center justify-center rounded-full border border-white/25 px-4 py-2 text-center text-sm font-medium text-[var(--site-muted)] sm:text-base">
            Multidisciplinary product studio
          </div>
          <h1
            aria-label="Software products and the systems behind them."
            className="flex max-w-[1100px] flex-col text-center font-bold leading-[0.94] tracking-[-0.04em]"
          >
            <span className="text-[clamp(3.4rem,9vw,6rem)] text-[var(--site-muted)]">
              Software products
            </span>
            <span className="inline-block pb-3 text-[clamp(3.8rem,10vw,6rem)] leading-[0.95] text-[var(--site-ink)]">
              and the systems behind them.
            </span>
          </h1>
          <div className="flex max-w-2xl items-start text-center sm:items-center">
            <p className="text-base leading-relaxed text-[var(--site-muted)] sm:text-xl">
              We design and build SaaS, AI, and mobile products at the point
              where technology and considered design meet—from India, for teams
              everywhere.
            </p>
          </div>
          <div className="mt-10 flex justify-center">
            <ButtonHover title="See our work" className="*:h-16" href="/work" />
          </div>
        </div>
      </MaxWidthWrapper>
    </header>
  );
};

export default Hero;
