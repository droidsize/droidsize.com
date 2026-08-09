import { Metadata } from "next";
import { ArrowDownRight } from "lucide-react";

import { constructMetadata } from "@/lib/utils";
import ButtonHover from "@/components/ButtonHover";
import MaxWidthWrapper from "@/components/shared/max-width-wrapper";

export const metadata: Metadata = constructMetadata({
  title: "Company | Droidsize Technologies",
  description:
    "Corporate identity and operating details for Droidsize Technologies Private Limited.",
  path: "/company",
});

const facts = [
  ["Legal entity", "DROIDSIZE TECHNOLOGIES PRIVATE LIMITED"],
  ["Corporate Identity Number", "U72200DL2019PTC347342"],
  ["Incorporated", "2019"],
  [
    "Registered office",
    "190, Baba Faridpuri, West Patel Nagar, New Delhi, Delhi 110008, India",
  ],
];

export default function CompanyPage() {
  return (
    <>
      <section className="overflow-hidden pb-24 pt-12 sm:pb-32 sm:pt-20">
        <MaxWidthWrapper large>
          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.2em] text-[var(--site-muted)]">
            The company
          </p>
          <h1 className="max-w-7xl text-[clamp(4rem,10vw,6rem)] font-bold leading-[0.92] tracking-[-0.04em] text-[var(--site-ink)]">
            Independent by structure. Collaborative by practice.
          </h1>
          <div className="mt-14 grid gap-10 border-t border-white/20 pt-10 md:grid-cols-2">
            <ArrowDownRight
              aria-hidden="true"
              className="size-14 text-[var(--site-muted)]"
            />
            <div className="space-y-6 text-xl leading-relaxed text-white/75 sm:text-2xl">
              <p>
                Droidsize is a product design and engineering company based in
                New Delhi. We bring strategy, interface design, and software
                delivery into one working relationship.
              </p>
              <p>
                The aim is simple: fewer hand-offs, clearer decisions, and
                digital products that remain useful after launch.
              </p>
            </div>
          </div>
        </MaxWidthWrapper>
      </section>

      <section className="pb-28 sm:pb-36" aria-labelledby="identity-heading">
        <MaxWidthWrapper large>
          <div className="overflow-hidden rounded-2xl border border-white/15 bg-[var(--site-surface)]">
            <div className="grid gap-6 border-b border-white/15 p-7 sm:p-10 md:grid-cols-2">
              <h2
                id="identity-heading"
                className="text-4xl font-semibold tracking-tight sm:text-6xl"
              >
                Corporate identity
              </h2>
              <p className="max-w-lg text-lg leading-relaxed text-white/65">
                These details identify the legal entity responsible for this
                website and its published products.
              </p>
            </div>
            <dl>
              {facts.map(([term, detail]) => (
                <div
                  key={term}
                  className="grid gap-3 border-b border-white/15 px-7 py-7 last:border-b-0 sm:px-10 md:grid-cols-[0.4fr_1fr]"
                >
                  <dt className="text-sm font-semibold uppercase tracking-[0.16em] text-[var(--site-muted)]">
                    {term}
                  </dt>
                  <dd className="text-lg leading-relaxed sm:text-xl">
                    {detail}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </MaxWidthWrapper>
      </section>

      <section className="pb-28 sm:pb-36">
        <MaxWidthWrapper>
          <div className="grid gap-10 rounded-2xl border border-white/15 bg-[var(--site-surface-raised)] p-8 sm:p-12 md:grid-cols-[1fr_auto] md:items-end">
            <div>
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[var(--site-muted)]">
                Leadership and grievance contact
              </p>
              <h2 className="text-4xl font-semibold tracking-tight sm:text-6xl">
                Evisha Soni
              </h2>
              <p className="mt-3 text-xl text-white/75">
                Chief Operating Officer and Grievance Officer
              </p>
            </div>
            <ButtonHover title="Contact Droidsize" href="/contact" />
          </div>
        </MaxWidthWrapper>
      </section>
    </>
  );
}
