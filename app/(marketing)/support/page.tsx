import { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { constructMetadata } from "@/lib/utils";

export const metadata: Metadata = constructMetadata({
  title: "Support — Droidsize",
  description:
    "Product support for Droidsize products is handled per product. Find the right destination for help, privacy, and account matters.",
  path: "/support",
});

const PRODUCTS = [
  {
    name: "Merry Magic Mail",
    summary: "Letters to Santa, replies, wishlists, and keepsakes.",
    site: "https://merrymagicmail.com",
    email: "support@merrymagicmail.com",
  },
  {
    name: "Domain Collective",
    summary: "Domain, DNS, and renewal management across registrars.",
    site: "https://collective.domains",
    email: null,
  },
  {
    name: "Sparkle",
    summary: "Saved reading turned into visual stories.",
    site: "https://trysparkles.app",
    email: null,
  },
];

export default function SupportPage() {
  return (
    <>
      <section className="mx-auto max-w-[1240px] px-10 pb-20 pt-24 max-[700px]:px-6 sm:pt-28">
        <p className="mb-6 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--site-faint)]">
          Support
        </p>
        <h1 className="max-w-3xl text-balance text-[clamp(2.6rem,5.4vw,4.2rem)] font-semibold leading-[1.04] tracking-[-0.035em] text-[var(--site-ink)]">
          How can we help?
        </h1>
        <p className="mt-7 max-w-md text-lg leading-relaxed text-[var(--site-muted)]">
          Support is handled per product, on each product&apos;s own site. Pick
          your product below, or contact the organisation directly.
        </p>
      </section>

      <section className="border-t border-[var(--site-line)]">
        <div className="mx-auto max-w-[1240px] px-10 py-16 max-[700px]:px-6">
          <h2 className="mb-8 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--site-faint)]">
            Product support
          </h2>
          <div className="border-t border-[var(--site-line-strong)]">
            {PRODUCTS.map((product) => (
              <div
                key={product.name}
                className="grid gap-4 border-b border-[var(--site-line)] py-7 sm:grid-cols-[220px_1fr_auto] sm:items-baseline sm:gap-8"
              >
                <span className="text-xl font-semibold tracking-[-0.02em] text-[var(--site-ink)]">
                  {product.name}
                </span>
                <span className="max-w-md text-[15px] leading-relaxed text-[var(--site-muted)]">
                  {product.summary}
                  {product.email ? (
                    <>
                      {" · "}
                      <a
                        className="text-[var(--site-ink)] underline decoration-[var(--site-line-strong)] underline-offset-4"
                        href={`mailto:${product.email}`}
                      >
                        {product.email}
                      </a>
                    </>
                  ) : null}
                </span>
                <a
                  href={product.site}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 font-medium text-[var(--site-ink)] transition-opacity hover:opacity-55"
                >
                  Visit product site
                  <ArrowUpRight aria-hidden="true" className="size-4" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-[var(--site-line)]">
        <div className="mx-auto grid max-w-[1240px] gap-10 px-10 py-16 max-[700px]:px-6 sm:grid-cols-3">
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-[0.16em] text-[var(--site-faint)]">
              Organisation contact
            </h2>
            <a
              className="mt-3 block text-lg font-medium text-[var(--site-ink)] transition-opacity hover:opacity-55"
              href="mailto:contact@droidsize.com"
            >
              contact@droidsize.com
            </a>
            <a
              className="mt-1 block text-lg text-[var(--site-muted)] transition-opacity hover:opacity-55"
              href="tel:+919958007011"
            >
              +91 99580 07011
            </a>
          </div>
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-[0.16em] text-[var(--site-faint)]">
              Privacy or grievance
            </h2>
            <p className="mt-3 max-w-xs text-[15px] leading-relaxed text-[var(--site-muted)]">
              For privacy concerns or any grievance, contact the organisation —
              details and the grievance officer are on the{" "}
              <Link
                className="text-[var(--site-ink)] underline decoration-[var(--site-line-strong)] underline-offset-4"
                href="/company"
              >
                company information
              </Link>{" "}
              page.
            </p>
          </div>
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-[0.16em] text-[var(--site-faint)]">
              When writing in
            </h2>
            <p className="mt-3 max-w-xs text-[15px] leading-relaxed text-[var(--site-muted)]">
              Include your device and app version, what you expected, and what
              happened instead. Please never send passwords or payment details.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
