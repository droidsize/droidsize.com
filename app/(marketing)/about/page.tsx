import { Metadata } from "next";
import Link from "next/link";

import { constructMetadata } from "@/lib/utils";

export const metadata: Metadata = constructMetadata({
  title: "About — Droidsize",
  description:
    "Why Droidsize exists: a founder-led product studio building the things it needs, from Delhi, for use anywhere.",
  path: "/about",
});

/**
 * Placeholder shell — the approved direction is the founder's thesis
 * spine with the shared-rails diagram and the Delhi workspace chapter.
 * Full page composition lands next.
 */
export default function AboutPage() {
  return (
    <section className="mx-auto max-w-[1240px] px-10 py-28 max-[700px]:px-6">
      <p className="mb-6 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--site-faint)]">
        About Droidsize
      </p>
      <h1 className="max-w-3xl text-balance text-5xl font-semibold leading-[1.04] tracking-[-0.03em] text-[var(--site-ink)] sm:text-6xl">
        We build the things we need.
      </h1>
      <p className="mt-7 max-w-md text-lg leading-relaxed text-[var(--site-muted)]">
        Droidsize is a founder-led product studio working where AI, technology,
        and design meet. This page is being composed.
      </p>
      <div className="mt-9 flex flex-wrap gap-8">
        <Link
          href="/work"
          className="inline-block border-b-2 border-[var(--site-ink)] pb-1 font-medium text-[var(--site-ink)] transition-opacity hover:opacity-55"
        >
          See the work ↗
        </Link>
        <Link
          href="/company"
          className="inline-block border-b border-[var(--site-line-strong)] pb-1 font-medium text-[var(--site-muted)] transition-opacity hover:opacity-55"
        >
          Company information ↗
        </Link>
      </div>
    </section>
  );
}
