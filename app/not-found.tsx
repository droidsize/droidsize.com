import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Page not found — Droidsize",
  robots: {
    index: false,
    follow: false,
  },
};

export default function NotFound() {
  return (
    <main
      id="main-content"
      className="flex min-h-screen items-center bg-[var(--site-canvas)] px-5 py-20 text-white"
    >
      <div className="mx-auto w-full max-w-6xl">
        <p className="mb-5 text-sm font-semibold uppercase tracking-[0.2em] text-[var(--site-muted)]">
          Error 404
        </p>
        <h1 className="max-w-5xl text-[clamp(4rem,10vw,6rem)] font-bold leading-[0.92] tracking-[-0.04em] text-[var(--site-ink)]">
          This page isn&apos;t here.
        </h1>
        <p className="mt-8 max-w-xl text-xl leading-relaxed text-white/70">
          The address may have changed, or the page may no longer exist.
        </p>
        <Link
          href="/"
          className="mt-10 inline-flex min-h-14 items-center gap-2 rounded-full bg-[var(--site-inverse)] px-7 font-semibold text-[var(--site-inverse-ink)] transition-colors hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
        >
          Return home
          <ArrowUpRight aria-hidden="true" className="size-5" />
        </Link>
      </div>
    </main>
  );
}
