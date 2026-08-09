import { ArrowDownRight } from "lucide-react";

import MaxWidthWrapper from "@/components/shared/max-width-wrapper";

const principles = [
  ["01", "A direct line from the problem to the people doing the work."],
  ["02", "Design decisions that engineering can carry into production."],
  ["03", "A product foundation that can change without starting over."],
];

export default function Trusted() {
  return (
    <section className="py-24 sm:py-36" aria-labelledby="partnership-heading">
      <MaxWidthWrapper>
        <div className="overflow-hidden rounded-2xl bg-[var(--site-inverse)] text-[var(--site-inverse-ink)]">
          <div className="grid gap-12 p-7 sm:p-12 lg:grid-cols-[0.9fr_1.1fr] lg:p-16">
            <div className="flex flex-col justify-between gap-16">
              <ArrowDownRight
                aria-hidden="true"
                className="size-12 text-black/55"
              />
              <div>
                <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-black/55">
                  How we partner
                </p>
                <h2
                  id="partnership-heading"
                  className="max-w-xl text-[clamp(3rem,6vw,5.75rem)] font-semibold leading-[0.94] tracking-[-0.04em]"
                >
                  Close enough to care. Experienced enough to challenge.
                </h2>
              </div>
            </div>

            <ol className="border-t border-black/20 lg:border-l lg:border-t-0">
              {principles.map(([number, text]) => (
                <li
                  key={number}
                  className="grid grid-cols-[3rem_1fr] gap-4 border-b border-black/20 py-7 lg:px-9"
                >
                  <span className="text-sm font-semibold text-black/55">
                    {number}
                  </span>
                  <p className="max-w-xl text-xl leading-relaxed sm:text-2xl">
                    {text}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
}
