import { Metadata } from "next";
import Link from "next/link";

import { getProject } from "@/config/projects";
import { constructMetadata } from "@/lib/utils";
import { ProjectCover } from "@/components/projects/project-cover";
import { MaskRise, Rise } from "@/components/home/motion";

export const metadata: Metadata = constructMetadata({
  title: "Studio — Droidsize",
  description:
    "Droidsize works with a small number of teams to turn difficult product ideas into well-considered software — with the same rails it uses on its own products.",
  path: "/studio",
  image: "/api/og?eyebrow=The%20studio&title=What%20is%20keeping%20the%20product%20from%20moving%3F&accent=orange",
});

const CLIENT_STATES = [
  {
    number: "01",
    title: "You have the idea, but not yet the product.",
    response:
      "We help you turn clarity into a shippable direction. We shape the problem, choose what to build first, and design the experience and system to prove it.",
    outcomes: ["A clear problem and scope", "A direction worth building", "A first release that proves it"],
    proof: "domain-collective",
    proofNote: "Domain Collective began as a recurring operating problem and became a live product.",
  },
  {
    number: "02",
    title: "The product works, but the experience or system does not.",
    response:
      "We step into a product already in motion. We find where the experience loses people or the system loses pace, and we redesign and rebuild the parts that are holding it back.",
    outcomes: ["A sharper experience", "A system ready to grow", "Releases you can trust"],
    proof: "repopress",
    proofNote: "RepoPress rebuilds a familiar workflow around the system teams already trust — Git.",
  },
  {
    number: "03",
    title: "AI is in the brief, but not yet useful.",
    response:
      "We design AI into the right parts of the product — where it compounds value instead of demoing it. Real workflows, honest constraints, and systems that stay reliable in daily use.",
    outcomes: ["The right use of AI", "An experience people trust", "Leverage that compounds"],
    proof: "sparkles",
    proofNote: "Sparkles' reading intelligence works inside a quiet, considered product experience.",
  },
];

const RAIL_STAGES = ["Problem", "Product", "Design", "Build", "Operate", "Learn"];

const ENGAGEMENTS = [
  {
    title: "Focused advisory",
    copy: "A short, high-impact engagement to help you decide, de-risk, or move unblocked.",
  },
  {
    title: "Zero-to-one product build",
    copy: "End-to-end product development from problem definition to launch and beyond.",
  },
  {
    title: "Product or system intervention",
    copy: "Step in at any stage to improve a product, modernise a system, or accelerate delivery.",
  },
];

function RailsLine() {
  return (
    <svg
      viewBox="0 0 1160 120"
      className="w-full"
      aria-label="Problem to product to design to build to operate to learn — one connected system"
      role="img"
    >
      <path d="M40 60 H1120" stroke="var(--site-line-strong)" strokeWidth="2" />
      {RAIL_STAGES.map((stage, i) => {
        const x = 60 + i * 208;
        const dots = [
          "var(--accent-green)",
          "var(--accent-orange)",
          "var(--accent-blue)",
          "var(--site-ink)",
          "var(--accent-navy)",
          "var(--accent-green)",
        ];
        return (
          <g key={stage} fontFamily="var(--font-sans), Helvetica, sans-serif">
            <circle cx={x} cy="60" r="9" fill={dots[i]} />
            <text x={x} y="104" textAnchor="middle" fontSize="17" fill="var(--site-muted)">
              {stage}
            </text>
          </g>
        );
      })}
    </svg>
  );
}

export default function StudioPage() {
  return (
    <>
      {/* Hero */}
      <section className="mx-auto max-w-[1240px] px-10 pb-24 pt-24 max-[700px]:px-6 sm:pb-28 sm:pt-28">
        <Rise>
          <p className="mb-6 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--site-faint)]">
            The studio
          </p>
        </Rise>
        <MaskRise delay={0.06}>
          <h1 className="max-w-4xl text-balance text-[clamp(2.9rem,6vw,4.6rem)] font-semibold leading-[1.02] tracking-[-0.035em] text-[var(--site-ink)]">
            What is keeping the product from moving?
          </h1>
        </MaskRise>
        <Rise delay={0.14}>
          <p className="mt-8 max-w-md text-lg leading-relaxed text-[var(--site-muted)]">
            Droidsize works inside the difficult part — where product judgment,
            design, engineering, and AI have to resolve together.
          </p>
        </Rise>
      </section>

      {/* Client states */}
      <section aria-label="Situations we work in">
        {CLIENT_STATES.map((state, index) => {
          const project = getProject(state.proof);
          return (
            <details
              key={state.number}
              open={index === 0}
              className="group border-t border-[var(--site-line)]"
            >
              <summary className="mx-auto flex max-w-[1240px] cursor-pointer list-none items-baseline gap-8 px-10 py-10 transition-opacity hover:opacity-70 max-[700px]:px-6 [&::-webkit-details-marker]:hidden">
                <span className="text-sm font-semibold text-[var(--site-faint)]">
                  {state.number}
                </span>
                <span className="flex-1 text-balance text-[clamp(1.7rem,3.4vw,2.6rem)] font-semibold leading-[1.12] tracking-[-0.025em] text-[var(--site-ink)]">
                  {state.title}
                </span>
                <span
                  aria-hidden="true"
                  className="text-2xl font-medium text-[var(--site-faint)] group-open:hidden"
                >
                  +
                </span>
                <span
                  aria-hidden="true"
                  className="hidden text-2xl font-medium text-[var(--site-faint)] group-open:inline"
                >
                  −
                </span>
              </summary>
              <div className="mx-auto grid max-w-[1240px] gap-14 px-10 pb-16 pt-2 max-[700px]:px-6 lg:grid-cols-[0.9fr_1.1fr]">
                <div className="max-w-md">
                  <p className="text-lg leading-relaxed text-[var(--site-muted)]">
                    {state.response}
                  </p>
                  <ul className="mt-9 divide-x divide-[var(--site-line)] border-y border-[var(--site-line)] text-sm text-[var(--site-muted)] sm:flex">
                    {state.outcomes.map((outcome) => (
                      <li key={outcome} className="px-4 py-3 first:pl-0 last:pr-0">
                        {outcome}
                      </li>
                    ))}
                  </ul>
                </div>
                {project ? (
                  <div>
                    <Link
                      href={`/work/${project.slug}`}
                      className="block transition-opacity hover:opacity-80"
                    >
                      <ProjectCover project={project} className="rounded-md" />
                    </Link>
                    <p className="mt-4 text-sm leading-relaxed text-[var(--site-muted)]">
                      <span className="font-semibold text-[var(--site-ink)]">
                        {project.name}.
                      </span>{" "}
                      {state.proofNote}
                    </p>
                  </div>
                ) : null}
              </div>
            </details>
          );
        })}
      </section>

      {/* Shared rails */}
      <section className="border-t border-[var(--site-line)]">
        <div className="mx-auto max-w-[1240px] px-10 py-24 max-[700px]:px-6 sm:py-28">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <div>
              <Rise>
                <p className="mb-6 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--site-faint)]">
                  Why it works
                </p>
              </Rise>
              <MaskRise delay={0.06}>
                <h2 className="text-balance text-[clamp(2rem,3.6vw,3.1rem)] font-semibold leading-[1.06] tracking-[-0.03em] text-[var(--site-ink)]">
                  We build products. Then we improve the system that builds them.
                </h2>
              </MaskRise>
            </div>
            <Rise delay={0.12}>
              <p className="max-w-md text-lg leading-relaxed text-[var(--site-muted)] lg:justify-self-end">
                Our own products run on the same end-to-end rails we bring to
                partner work — continuously shaped, stress-tested, and improved.
              </p>
            </Rise>
          </div>
          <div className="mt-16 overflow-x-auto">
            <div className="min-w-[720px]">
              <RailsLine />
            </div>
          </div>
        </div>
      </section>

      {/* Engagement shapes */}
      <section className="border-t border-[var(--site-line)]">
        <div className="mx-auto max-w-[1240px] px-10 py-20 max-[700px]:px-6 sm:py-24">
          <p className="mb-10 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--site-faint)]">
            Ways to work together
          </p>
          <div className="grid gap-10 divide-[var(--site-line)] sm:grid-cols-3 sm:gap-0 sm:divide-x">
            {ENGAGEMENTS.map((engagement, i) => (
              <div key={engagement.title} className={i === 0 ? "sm:pr-10" : "sm:px-10"}>
                <h3 className="text-xl font-semibold tracking-[-0.01em] text-[var(--site-ink)]">
                  {engagement.title}
                </h3>
                <p className="mt-3 max-w-xs text-[15px] leading-relaxed text-[var(--site-muted)]">
                  {engagement.copy}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Working promise + CTA */}
      <section className="border-t border-[var(--site-line)]">
        <div className="mx-auto grid max-w-[1240px] gap-10 px-10 py-20 max-[700px]:px-6 sm:py-24 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <MaskRise>
            <h2 className="max-w-2xl text-balance text-[clamp(1.9rem,3.4vw,2.9rem)] font-semibold leading-[1.08] tracking-[-0.03em] text-[var(--site-ink)]">
              You work directly with the people shaping and building the product.
            </h2>
          </MaskRise>
          <Rise delay={0.1}>
            <p className="max-w-sm text-lg leading-relaxed text-[var(--site-muted)]">
              We stay close to the problem, the decisions, and the work that
              moves it forward.
            </p>
          </Rise>
        </div>
      </section>

      <section className="bg-[var(--site-inverse)] text-[var(--site-inverse-ink)]">
        <div className="mx-auto flex max-w-[1240px] flex-wrap items-center justify-between gap-8 px-10 py-16 max-[700px]:px-6">
          <h2 className="text-balance text-[clamp(1.8rem,3vw,2.6rem)] font-semibold tracking-[-0.03em]">
            Tell us where it is stuck.
          </h2>
          <Link
            href="/contact"
            className="border-b-2 border-current pb-1 text-lg font-medium transition-opacity hover:opacity-60"
          >
            Let&apos;s talk ↗
          </Link>
        </div>
      </section>
    </>
  );
}
