import { ReactNode } from "react";

import MaxWidthWrapper from "@/components/shared/max-width-wrapper";

export default function LegalDocument({
  eyebrow,
  title,
  description,
  children,
}: {
  eyebrow: string;
  title: string;
  description: string;
  children: ReactNode;
}) {
  return (
    <article className="pb-28 pt-12 text-[var(--site-ink)] sm:pb-36 sm:pt-20">
      <MaxWidthWrapper>
        <p className="mb-5 text-sm font-semibold uppercase tracking-[0.2em] text-[var(--site-muted)]">
          {eyebrow}
        </p>
        <h1 className="text-[clamp(3.8rem,9vw,6rem)] font-bold leading-[0.92] tracking-[-0.04em] text-[var(--site-ink)]">
          {title}
        </h1>
        <p className="mt-7 max-w-3xl text-xl leading-relaxed text-[var(--site-muted)]">
          {description}
        </p>
        <div className="legal-copy mt-14 border-t border-[var(--site-line)] pt-10">
          {children}
        </div>
      </MaxWidthWrapper>
    </article>
  );
}
