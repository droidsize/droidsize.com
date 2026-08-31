import { Metadata } from "next";
import Link from "next/link";

import { constructMetadata } from "@/lib/utils";

export const metadata: Metadata = constructMetadata({
  title: "Studio — Droidsize",
  description:
    "Droidsize works with a small number of teams to turn difficult product ideas into well-considered software.",
  path: "/studio",
});

/**
 * Placeholder shell — the approved direction is "client states"
 * (What is keeping the product from moving?) with the shared-rails
 * model as proof. Full page composition lands next.
 */
export default function StudioPage() {
  return (
    <section className="mx-auto max-w-[1240px] px-10 py-28 max-[700px]:px-6">
      <p className="mb-6 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--site-faint)]">
        The studio
      </p>
      <h1 className="max-w-3xl text-balance text-5xl font-semibold leading-[1.04] tracking-[-0.03em] text-[var(--site-ink)] sm:text-6xl">
        What is keeping the product from moving?
      </h1>
      <p className="mt-7 max-w-md text-lg leading-relaxed text-[var(--site-muted)]">
        Droidsize works inside the difficult part — where product judgment,
        design, engineering, and AI have to resolve together. This page is
        being composed.
      </p>
      <Link
        href="/contact"
        className="mt-9 inline-block border-b-2 border-[var(--site-ink)] pb-1 font-medium text-[var(--site-ink)] transition-opacity hover:opacity-55"
      >
        Tell us what you are building ↗
      </Link>
    </section>
  );
}
