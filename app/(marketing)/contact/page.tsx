import { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { constructMetadata } from "@/lib/utils";
import MaxWidthWrapper from "@/components/shared/max-width-wrapper";

export const metadata: Metadata = constructMetadata({
  title: "Contact — Droidsize",
  description:
    "Contact Droidsize Technologies about a product, project, company matter, or support request.",
  path: "/contact",
  image: "/api/og?eyebrow=Let%27s%20talk&title=Tell%20us%20what%20you%20are%20building.&accent=orange",
});

const contactRoutes = [
  {
    label: "Build a product with us",
    value: "contact@droidsize.com",
    href: "mailto:contact@droidsize.com?subject=Product%20enquiry",
  },
  {
    label: "Call the studio",
    value: "+91 99580 07011",
    href: "tel:+919958007011",
  },
  {
    label: "Product support",
    value: "Support centre",
    href: "/support",
  },
  {
    label: "Privacy or grievance",
    value: "Company information",
    href: "/company",
  },
];

export default function ContactPage() {
  return (
    <section className="overflow-hidden pb-28 pt-12 sm:pb-36 sm:pt-20">
      <MaxWidthWrapper large>
        <p className="mb-5 text-sm font-semibold uppercase tracking-[0.2em] text-[var(--site-muted)]">
          Contact
        </p>
        <h1 className="max-w-7xl text-[clamp(4rem,10vw,6rem)] font-bold leading-[0.92] tracking-[-0.04em] text-[var(--site-ink)]">
          Tell us what you&apos;re building.
        </h1>

        <div className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-[var(--site-line)] bg-white/15 lg:grid-cols-2 xl:grid-cols-4">
          {contactRoutes.map((route) => (
            <Link
              key={route.label}
              href={route.href}
              className="group flex min-h-64 flex-col justify-between bg-[var(--site-surface)] p-7 transition-colors hover:bg-[var(--site-surface-raised)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-6px] focus-visible:outline-white sm:p-9"
            >
              <span className="text-sm font-semibold uppercase tracking-[0.16em] text-[var(--site-muted)]">
                {route.label}
              </span>
              <span className="flex items-end justify-between gap-5 text-2xl font-semibold sm:text-3xl">
                {route.value}
                <ArrowUpRight
                  aria-hidden="true"
                  className="size-8 shrink-0 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
                />
              </span>
            </Link>
          ))}
        </div>

        <div className="mt-16 grid gap-8 border-t border-[var(--site-line)] pt-10 md:grid-cols-2">
          <h2 className="text-4xl font-semibold tracking-tight sm:text-6xl">
            Registered office
          </h2>
          <address className="text-xl not-italic leading-relaxed text-[var(--site-muted)] sm:text-2xl">
            DROIDSIZE TECHNOLOGIES PRIVATE LIMITED
            <br />
            190, Baba Faridpuri, West Patel Nagar
            <br />
            New Delhi, Delhi 110008, India
            <br />
            CIN: U72200DL2019PTC347342
          </address>
        </div>
      </MaxWidthWrapper>
    </section>
  );
}
