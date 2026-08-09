"use client";

import { motion } from "framer-motion";

import MaxWidthWrapper from "@/components/shared/max-width-wrapper";

const commitments = [
  {
    title: "Clear scope",
    copy: "The work, the trade-offs, and the next decision stay visible.",
  },
  {
    title: "Accessible by default",
    copy: "Core journeys are designed for different devices, inputs, and people.",
  },
  {
    title: "Production-minded",
    copy: "The final experience matters as much as the concept that started it.",
  },
  {
    title: "Built to evolve",
    copy: "Systems are shaped for the next release, not only the first one.",
  },
];

export default function Clients() {
  return (
    <section
      className="overflow-hidden py-24 sm:py-36"
      aria-labelledby="standards-heading"
    >
      <MaxWidthWrapper large>
        <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[var(--site-muted)]">
              Working standards
            </p>
            <h2
              id="standards-heading"
              className="text-[clamp(3.4rem,7vw,6rem)] font-bold leading-[0.92] tracking-[-0.04em] text-[var(--site-ink)]"
            >
              Good work should hold up.
            </h2>
          </div>

          <div className="grid border-y border-white/20 sm:grid-cols-2">
            {commitments.map((item, index) => (
              <motion.article
                key={item.title}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="min-h-64 border-b border-white/20 p-7 last:border-b-0 sm:border-r sm:p-9 sm:even:border-r-0 sm:[&:nth-last-child(-n+2)]:border-b-0"
              >
                <span className="text-sm font-semibold text-[var(--site-muted)]">
                  0{index + 1}
                </span>
                <h3 className="mt-16 text-3xl font-semibold tracking-tight">
                  {item.title}
                </h3>
                <p className="mt-4 max-w-sm text-base leading-relaxed text-white/65">
                  {item.copy}
                </p>
              </motion.article>
            ))}
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
}
