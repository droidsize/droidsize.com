import { Metadata } from "next";
import Link from "next/link";

import { getProject } from "@/config/projects";
import { constructMetadata } from "@/lib/utils";
import { DelhiSketch } from "@/components/home/art";
import { MaskRise, Rise, SlideIn } from "@/components/home/motion";
import { ProjectCover } from "@/components/projects/project-cover";

export const metadata: Metadata = constructMetadata({
  title: "About — Droidsize",
  description:
    "Why Droidsize exists: a founder-led product studio that turns recurring problems into products, built in Delhi for use anywhere.",
  path: "/about",
  image: "/api/og?eyebrow=About%20Droidsize&title=We%20build%20the%20things%20we%20need.&accent=green",
});

const PROBLEM_ROWS = [
  {
    slug: "domain-collective",
    problem: "Domains scattered across registrars, people, and spreadsheets.",
  },
  {
    slug: "sparkles",
    problem: "Reading lists that grow faster than anyone can return to them.",
  },
  {
    slug: "triplewave",
    problem: "Company documents split between a word processor and a design tool.",
  },
];

const RAIL_NODES = [
  { label: "Research", angle: 210, color: "var(--accent-green)" },
  { label: "Product design", angle: 270, color: "var(--accent-blue)" },
  { label: "AI workflows", angle: 330, color: "var(--site-ink)" },
  { label: "Engineering", angle: 30, color: "var(--accent-orange)" },
  { label: "Operations", angle: 90, color: "var(--accent-navy)" },
];

function SharedRailsLoop() {
  const cx = 300;
  const cy = 210;
  const r = 150;
  return (
    <svg
      viewBox="0 0 600 420"
      className="w-full max-w-xl"
      role="img"
      aria-label="Research, product design, AI workflows, engineering and operations connected as one shared system"
    >
      <ellipse
        cx={cx}
        cy={cy}
        rx={r + 40}
        ry={r - 20}
        fill="none"
        stroke="var(--site-line-strong)"
        strokeWidth="2"
      />
      <text
        x={cx}
        y={cy - 6}
        textAnchor="middle"
        fontSize="17"
        fontWeight="600"
        fill="var(--site-ink)"
        fontFamily="var(--font-sans), Helvetica, sans-serif"
      >
        Shared foundations.
      </text>
      <text
        x={cx}
        y={cy + 20}
        textAnchor="middle"
        fontSize="15"
        fill="var(--site-muted)"
        fontFamily="var(--font-sans), Helvetica, sans-serif"
      >
        Different outcomes.
      </text>
      {RAIL_NODES.map((node) => {
        const rad = (node.angle * Math.PI) / 180;
        const x = cx + Math.cos(rad) * (r + 40);
        const y = cy + Math.sin(rad) * (r - 20);
        const labelBelow = node.angle > 0 && node.angle < 180;
        return (
          <g key={node.label} fontFamily="var(--font-sans), Helvetica, sans-serif">
            <circle
              cx={x}
              cy={y}
              r="11"
              fill={node.color}
              stroke="var(--site-canvas)"
              strokeWidth="4"
            />
            <text
              x={x}
              y={labelBelow ? y + 34 : y - 22}
              textAnchor="middle"
              fontSize="15"
              fill="var(--site-muted)"
            >
              {node.label}
            </text>
          </g>
        );
      })}
    </svg>
  );
}

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="mx-auto max-w-[1240px] px-10 pb-24 pt-24 max-[700px]:px-6 sm:pb-28 sm:pt-28">
        <Rise>
          <p className="mb-6 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--site-faint)]">
            Droidsize — New Delhi
          </p>
        </Rise>
        <MaskRise delay={0.06}>
          <h1 className="max-w-3xl text-balance text-[clamp(3rem,6.4vw,5rem)] font-semibold leading-[1.02] tracking-[-0.035em] text-[var(--site-ink)]">
            We build the things we need.
          </h1>
        </MaskRise>
        <Rise delay={0.14}>
          <p className="mt-8 max-w-md text-lg leading-relaxed text-[var(--site-muted)]">
            Droidsize is a multidisciplinary product studio working where AI,
            technology, and design meet.
          </p>
        </Rise>
      </section>

      {/* Origin */}
      <section className="border-t border-[var(--site-line)]">
        <div className="mx-auto grid max-w-[1240px] gap-14 px-10 py-24 max-[700px]:px-6 sm:py-28 lg:grid-cols-[0.9fr_1.1fr]">
          <MaskRise>
            <h2 className="max-w-sm text-balance text-[clamp(1.9rem,3.4vw,2.9rem)] font-semibold leading-[1.08] tracking-[-0.03em] text-[var(--site-ink)]">
              The studio began with a simple idea.
            </h2>
          </MaskRise>
          <SlideIn delay={0.1}>
            <div className="max-w-lg space-y-6 text-lg leading-relaxed text-[var(--site-muted)]">
              <p>
                Every team faces the same kinds of problems. Fragmented tools.
                Manual work. Data that doesn&apos;t connect. We kept building
                internal solutions to fix them.
              </p>
              <p>
                Patterns emerged. We shaped those patterns into products — not
                to chase markets, but to solve the problems that slow real
                teams down.
              </p>
            </div>
          </SlideIn>
        </div>
      </section>

      {/* Founder */}
      <section className="border-t border-[var(--site-line)]">
        <div className="mx-auto grid max-w-[1240px] gap-14 px-10 py-24 max-[700px]:px-6 sm:py-28 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <Rise>
              <p className="mb-6 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--site-faint)]">
                Founder
              </p>
            </Rise>
            <MaskRise delay={0.06}>
              <h2 className="text-balance text-[clamp(2.6rem,5.4vw,4.4rem)] font-semibold leading-[1.02] tracking-[-0.035em] text-[var(--site-ink)]">
                Yogesh Kumar.
              </h2>
            </MaskRise>
            <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2 border-t border-[var(--site-line)] pt-5 text-sm text-[var(--site-faint)]">
              {["Builder", "Problem solver", "Systems thinker", "Long-term"].map(
                (trait) => (
                  <li key={trait}>{trait}</li>
                ),
              )}
            </ul>
          </div>
          <SlideIn delay={0.1}>
            <div className="max-w-lg space-y-6 text-lg leading-relaxed text-[var(--site-muted)]">
              <p>
                Droidsize is a founder-led studio. A builder at heart, Yogesh
                founded Droidsize to build software products and the systems
                behind them — careful about craft, opinionated about
                simplicity, and committed to solving real problems.
              </p>
              <p>
                We stay close to the work, make decisions with context, and
                take responsibility for outcomes.
              </p>
              <a
                href="https://itsyogesh.fyi"
                target="_blank"
                rel="noreferrer"
                className="inline-block border-b-2 border-[var(--site-ink)] pb-1 font-medium text-[var(--site-ink)] transition-opacity hover:opacity-55"
              >
                Read Yogesh&apos;s notes ↗
              </a>
            </div>
          </SlideIn>
        </div>
      </section>

      {/* Problems become products */}
      <section className="border-t border-[var(--site-line)]">
        <div className="mx-auto max-w-[1240px] px-10 py-24 max-[700px]:px-6 sm:py-28">
          <MaskRise>
            <h2 className="text-balance text-[clamp(1.9rem,3.4vw,2.9rem)] font-semibold leading-[1.08] tracking-[-0.03em] text-[var(--site-ink)]">
              Problems become products.
            </h2>
          </MaskRise>
          <Rise delay={0.08}>
            <p className="mt-4 text-[var(--site-muted)]">
              A few examples from the journey so far.
            </p>
          </Rise>
          <div className="mt-12 border-t border-[var(--site-line-strong)]">
            {PROBLEM_ROWS.map((row) => {
              const project = getProject(row.slug);
              if (!project) return null;
              return (
                <Link
                  key={row.slug}
                  href={`/work/${project.slug}`}
                  className="grid items-center gap-8 border-b border-[var(--site-line)] py-7 transition-opacity hover:opacity-60 sm:grid-cols-[150px_220px_1fr_auto]"
                >
                  <ProjectCover project={project} className="rounded" />
                  <span className="text-xl font-semibold tracking-[-0.02em] text-[var(--site-ink)]">
                    {project.name}
                  </span>
                  <span className="max-w-md text-[15px] leading-relaxed text-[var(--site-muted)]">
                    {row.problem}
                  </span>
                  <span aria-hidden="true" className="hidden text-[var(--site-faint)] sm:block">
                    ↗
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Shared rails */}
      <section className="border-t border-[var(--site-line)]">
        <div className="mx-auto grid max-w-[1240px] items-center gap-14 px-10 py-24 max-[700px]:px-6 sm:py-28 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <Rise>
              <p className="mb-6 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--site-faint)]">
                How we work
              </p>
            </Rise>
            <MaskRise delay={0.06}>
              <h2 className="max-w-sm text-balance text-[clamp(1.9rem,3.4vw,2.9rem)] font-semibold leading-[1.08] tracking-[-0.03em] text-[var(--site-ink)]">
                Small by design. Connected by systems.
              </h2>
            </MaskRise>
            <Rise delay={0.14}>
              <p className="mt-6 max-w-sm text-lg leading-relaxed text-[var(--site-muted)]">
                We stay small so we can stay close to the work. Our strength
                comes from shared rails that make every product better.
              </p>
            </Rise>
          </div>
          <SlideIn delay={0.12} className="justify-self-center lg:justify-self-end">
            <SharedRailsLoop />
          </SlideIn>
        </div>
      </section>

      {/* Delhi */}
      <section className="border-t border-[var(--site-line)]">
        <div className="mx-auto grid max-w-[1240px] items-center gap-14 px-10 py-24 max-[700px]:px-6 sm:py-28 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <MaskRise>
              <h2 className="max-w-sm text-balance text-[clamp(1.9rem,3.4vw,2.9rem)] font-semibold leading-[1.08] tracking-[-0.03em] text-[var(--site-ink)]">
                Built in Delhi. Made for use anywhere.
              </h2>
            </MaskRise>
            <Rise delay={0.1}>
              <p className="mt-6 max-w-sm text-lg leading-relaxed text-[var(--site-muted)]">
                We&apos;re a local team with a global mindset. Our products are
                used by teams across industries and time zones — and our
                workspace for focused making and prototyping is in progress.
              </p>
            </Rise>
            <Rise delay={0.16}>
              <span className="mt-7 inline-block rounded-full border border-[var(--site-line-strong)] px-4 py-1.5 text-xs uppercase tracking-[0.1em] text-[var(--site-muted)]">
                Workspace in development · not yet open
              </span>
            </Rise>
          </div>
          <div>
            <DelhiSketch />
          </div>
        </div>
      </section>

      {/* Company link + CTA */}
      <section className="border-t border-[var(--site-line)]">
        <div className="mx-auto flex max-w-[1240px] flex-wrap items-center justify-between gap-6 px-10 py-10 max-[700px]:px-6">
          <p className="text-[var(--site-muted)]">
            Legal details, policies, and official information.
          </p>
          <Link
            href="/company"
            className="border-b border-[var(--site-line-strong)] pb-0.5 font-medium text-[var(--site-ink)] transition-opacity hover:opacity-55"
          >
            View company information ↗
          </Link>
        </div>
      </section>

      <section className="bg-[var(--site-inverse)] text-[var(--site-inverse-ink)]">
        <div className="mx-auto flex max-w-[1240px] flex-wrap items-center justify-between gap-8 px-10 py-16 max-[700px]:px-6">
          <h2 className="text-balance text-[clamp(1.8rem,3vw,2.6rem)] font-semibold tracking-[-0.03em]">
            See what we&apos;re building.
          </h2>
          <Link
            href="/work"
            className="border-b-2 border-current pb-1 text-lg font-medium transition-opacity hover:opacity-60"
          >
            View the work ↗
          </Link>
        </div>
      </section>
    </>
  );
}
