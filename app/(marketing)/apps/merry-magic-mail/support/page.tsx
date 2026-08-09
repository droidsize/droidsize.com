import { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Mail, Phone } from "lucide-react";

import { constructMetadata } from "@/lib/utils";
import MaxWidthWrapper from "@/components/shared/max-width-wrapper";

export const metadata: Metadata = constructMetadata({
  title: "Merry Magic Mail Support | Droidsize Technologies",
  description:
    "Official support contact for Merry Magic Mail by Droidsize Technologies.",
  path: "/apps/merry-magic-mail/support",
});

export default function MerryMagicMailSupportPage() {
  return (
    <section className="overflow-hidden pb-28 pt-12 sm:pb-36 sm:pt-20">
      <MaxWidthWrapper large>
        <p className="mb-5 text-sm font-semibold uppercase tracking-[0.2em] text-[var(--site-muted)]">
          Product support
        </p>
        <h1 className="max-w-7xl text-[clamp(4rem,10vw,6rem)] font-bold leading-[0.92] tracking-[-0.04em] text-[var(--site-ink)]">
          Merry Magic Mail
        </h1>
        <p className="mt-7 max-w-3xl text-xl leading-relaxed text-white/70 sm:text-2xl">
          Get help with access, app behaviour, feedback, or another issue
          involving Merry Magic Mail.
        </p>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          <a
            href="mailto:support@merrymagicmail.com?subject=Merry%20Magic%20Mail%20support"
            className="group flex min-h-72 flex-col justify-between rounded-2xl bg-[var(--site-inverse)] p-8 text-[var(--site-inverse-ink)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white sm:p-10"
          >
            <Mail aria-hidden="true" className="size-10 text-black/55" />
            <div>
              <span className="text-sm font-semibold uppercase tracking-[0.16em] text-black/55">
                Email support
              </span>
              <span className="mt-3 flex items-end justify-between gap-5 text-2xl font-semibold [overflow-wrap:anywhere] sm:text-3xl">
                support@merrymagicmail.com
                <ArrowUpRight
                  aria-hidden="true"
                  className="size-8 shrink-0 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
                />
              </span>
            </div>
          </a>
          <a
            href="tel:+919958007011"
            className="group flex min-h-72 flex-col justify-between rounded-2xl border border-white/15 bg-[var(--site-surface)] p-8 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white sm:p-10"
          >
            <Phone
              aria-hidden="true"
              className="size-10 text-[var(--site-muted)]"
            />
            <div>
              <span className="text-sm font-semibold uppercase tracking-[0.16em] text-[var(--site-muted)]">
                Phone
              </span>
              <span className="mt-3 flex items-end justify-between gap-5 text-3xl font-semibold">
                +91 99580 07011
                <ArrowUpRight
                  aria-hidden="true"
                  className="size-8 shrink-0 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
                />
              </span>
            </div>
          </a>
        </div>

        <div className="mt-16 grid gap-10 border-t border-white/20 pt-10 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight sm:text-5xl">
              What to include
            </h2>
            <ul className="mt-7 space-y-4 text-lg leading-relaxed text-white/70">
              <li>• The device and operating-system version you use</li>
              <li>• The app version, if it is visible</li>
              <li>• What you expected and what happened instead</li>
              <li>• Steps that help us reproduce the issue</li>
            </ul>
            <p className="mt-7 max-w-xl text-sm leading-relaxed text-white/55">
              Do not email passwords, payment-card details, or sensitive
              personal information. If a screenshot is useful, remove
              information that is not needed to understand the issue.
            </p>
          </div>
          <div className="rounded-2xl border border-white/15 p-7 sm:p-10">
            <h2 className="text-3xl font-semibold tracking-tight">
              Product details
            </h2>
            <dl className="mt-7 space-y-6">
              <div>
                <dt className="text-sm font-semibold uppercase tracking-[0.16em] text-[var(--site-muted)]">
                  Developer
                </dt>
                <dd className="mt-2 text-lg">
                  DROIDSIZE TECHNOLOGIES PRIVATE LIMITED
                </dd>
              </div>
              <div>
                <dt className="text-sm font-semibold uppercase tracking-[0.16em] text-[var(--site-muted)]">
                  Application identifier
                </dt>
                <dd className="mt-2 font-mono text-base">
                  com.droidsize.merrymagicmail
                </dd>
              </div>
              <div>
                <dt className="text-sm font-semibold uppercase tracking-[0.16em] text-[var(--site-muted)]">
                  Grievance escalation
                </dt>
                <dd className="mt-2 text-lg leading-relaxed">
                  Evisha Soni, Grievance Officer
                  <br />
                  <a
                    className="underline decoration-white/40 underline-offset-4"
                    href="mailto:contact@droidsize.com"
                  >
                    contact@droidsize.com
                  </a>
                </dd>
              </div>
            </dl>
            <Link
              href="/privacy"
              className="mt-8 inline-flex min-h-11 items-center gap-2 underline decoration-white/40 underline-offset-4"
            >
              Read the website privacy notice
              <ArrowUpRight aria-hidden="true" className="size-4" />
            </Link>
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
}
