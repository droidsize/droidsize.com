import Link from "next/link";

import { projects } from "@/config/projects";
import TextRevealOnScroll from "@/components/text-reveal-on-scroll";

import { DelhiSketch, HeroMapLines, RailsStack } from "./art";
import { ClipReveal, DrawOnView, MaskRise, Rise, SlideIn } from "./motion";

/* ————— Hero ————— */

export function HomeHero() {
  return (
    <section className="home-hero">
      <div className="home-shell">
        <div>
          <MaskRise>
            <h1 className="home-h1">We build useful things with technology.</h1>
          </MaskRise>
          <Rise delay={0.12}>
            <p>
              Droidsize is a multidisciplinary product studio from India. We
              build products and the systems behind them.
            </p>
          </Rise>
          <Rise delay={0.2}>
            <Link className="home-cta" href="/work">
              View selected work
            </Link>
          </Rise>
        </div>
        <SlideIn className="home-hero-art" delay={0.25}>
          <DrawOnView>
            <HeroMapLines />
          </DrawOnView>
        </SlideIn>
      </div>
    </section>
  );
}

/* ————— Thesis (scroll-driven letter reveal) ————— */

export function HomeThesis() {
  return (
    <div className="home-rule-top">
      <TextRevealOnScroll phrase="Products for the world. Built from India." />
    </div>
  );
}

/* ————— Chapter: Domain Collective ————— */

export function ChapterDomainCollective() {
  return (
    <section className="home-chapter home-rule-top">
      <div className="home-shell">
        <div>
          <Rise>
            <p className="home-ch-meta">
              01 · Droidsize product · <em>Live</em>
            </p>
          </Rise>
          <MaskRise delay={0.06}>
            <h2 className="home-h2">Domains, understood.</h2>
          </MaskRise>
          <Rise delay={0.14}>
            <p>
              One place to see where every domain lives, what renews next, and
              whether DNS, SSL, or access needs attention — across every
              registrar you use.
            </p>
          </Rise>
          <Rise delay={0.2}>
            <a
              className="home-cta"
              href="https://collective.domains"
              target="_blank"
              rel="noreferrer"
            >
              Visit Domain Collective
            </a>
          </Rise>
        </div>
        <ClipReveal className="home-visual" delay={0.1}>
          <div
            className="home-window"
            role="img"
            aria-label="Domain Collective dashboard preview"
          >
            <div className="home-win-bar">
              <i></i>
              <i></i>
              <i></i>
              <span>
                <b></b>Domain Collective
              </span>
            </div>
            <div className="home-win-body">
              <div className="home-win-side">
                <span className="home-on">Overview</span>
                <span>Domains</span>
                <span>DNS</span>
                <span>SSL</span>
                <span>Team</span>
              </div>
              <div className="home-win-main">
                <h5>Needs attention</h5>
                <div className="home-drow">
                  <b>triplewave.co</b>
                  <span>Cloudflare</span>
                  <span>Renews 12 Sep</span>
                  <span className="home-pill home-due">SSL expiring</span>
                </div>
                <div className="home-drow">
                  <b>trysparkles.app</b>
                  <span>Namecheap</span>
                  <span>Renews 03 Oct</span>
                  <span className="home-pill home-warn">NS mismatch</span>
                </div>
                <div className="home-drow">
                  <b>droidsize.com</b>
                  <span>GoDaddy</span>
                  <span>Renews 09 Feb</span>
                  <span className="home-pill home-ok">Healthy</span>
                </div>
                <div className="home-drow">
                  <b>merrymagicmail.com</b>
                  <span>Porkbun</span>
                  <span>Renews 21 Nov</span>
                  <span className="home-pill home-ok">Healthy</span>
                </div>
                <div className="home-drow">
                  <b>collective.domains</b>
                  <span>Name.com</span>
                  <span>Renews 30 Jan</span>
                  <span className="home-pill home-ok">Healthy</span>
                </div>
              </div>
            </div>
          </div>
        </ClipReveal>
      </div>
    </section>
  );
}

/* ————— Chapter: Sparkle ————— */

export function ChapterSparkle() {
  return (
    <section className="home-chapter home-flip">
      <div className="home-shell">
        <ClipReveal className="home-visual" delay={0.1}>
          <div
            className="home-tablet"
            role="img"
            aria-label="Sparkle reading app preview"
          >
            <div className="home-tab-screen">
              <div className="home-tab-head">
                <span>
                  <span className="home-spark-dot">✦</span>Sparkle
                </span>
                <span>Constellations</span>
              </div>
              <div className="home-scard">
                <span className="home-tag">Spark · 2 of 5</span>
                <h6>Good design is as little design as possible.</h6>
                <div className="home-bar"></div>
                <div className="home-bar home-short"></div>
                <div className="home-dots">
                  <i></i>
                  <i className="home-on"></i>
                  <i></i>
                  <i></i>
                  <i></i>
                </div>
              </div>
              <div className="home-scard">
                <span className="home-tag">Saved · 4 min read</span>
                <h6>
                  Start with a tight feedback loop and build the smallest thing
                  that works.
                </h6>
                <div className="home-bar"></div>
                <div className="home-bar home-short"></div>
              </div>
            </div>
          </div>
        </ClipReveal>
        <div>
          <Rise>
            <p className="home-ch-meta">
              02 · Droidsize product · In active development
            </p>
          </Rise>
          <MaskRise delay={0.06}>
            <h2 className="home-h2">Your reading list, made useful.</h2>
          </MaskRise>
          <Rise delay={0.14}>
            <p>
              Sparkle turns saved articles into short visual stories called
              Sparks, and gathers related ideas into Constellations you actually
              return to.
            </p>
          </Rise>
          <Rise delay={0.2}>
            <a
              className="home-cta"
              href="https://trysparkles.app"
              target="_blank"
              rel="noreferrer"
            >
              Explore Sparkle
            </a>
          </Rise>
        </div>
      </div>
    </section>
  );
}

/* ————— Rails ————— */

export function HomeRails() {
  return (
    <section className="home-rails">
      <div className="home-shell home-rails-grid">
        <div>
          <Rise>
            <p className="home-eyebrow">Our operating system</p>
          </Rise>
          <MaskRise delay={0.06}>
            <h2 className="home-h2">Built on reusable rails.</h2>
          </MaskRise>
          <Rise delay={0.14}>
            <p>
              We invest in shared foundations, so every product starts stronger
              and stays adaptable. Better for teams. Better for users.
            </p>
          </Rise>
        </div>
        <DrawOnView className="home-art">
          <RailsStack />
        </DrawOnView>
      </div>
      <div className="home-shell">
        <div className="home-steps">
          <Rise>
            <div className="home-n">01</div>
            <h3>Find the real problem</h3>
            <p>We start with curiosity and go deep on context.</p>
          </Rise>
          <Rise delay={0.1}>
            <div className="home-n">02</div>
            <h3>Make the smallest clear version</h3>
            <p>We build the simplest thing that proves value.</p>
          </Rise>
          <Rise delay={0.2}>
            <div className="home-n">03</div>
            <h3>Stay for the evolution</h3>
            <p>We keep improving with users, over time.</p>
          </Rise>
        </div>
      </div>
    </section>
  );
}

/* ————— Index of remaining work ————— */

const INDEX_SLUGS = [
  "triplewave",
  "cadenza",
  "merry-magic-mail",
  "repopress",
  "turbocamp",
  "copycanvas",
];

const STATUS_DOT: Record<string, string> = {
  Live: "var(--accent-orange)",
  "Active development": "var(--accent-green)",
  "In development": "var(--accent-blue)",
  "Public repository": "var(--accent-navy)",
};

function IndexIcon({ slug }: { slug: string }) {
  switch (slug) {
    case "triplewave":
      return (
        <span className="home-ic" style={{ background: "var(--accent-green)" }}>
          <svg width="20" height="14" viewBox="0 0 20 14" fill="none">
            <path
              d="M2 3 Q6 1 10 3 T18 3 M2 7 Q6 5 10 7 T18 7 M2 11 Q6 9 10 11 T18 11"
              stroke="#F5F3EE"
              strokeWidth="1.6"
            />
          </svg>
        </span>
      );
    case "cadenza":
      return (
        <span className="home-ic" style={{ background: "var(--accent-navy)" }}>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <rect x="2" y="2" width="12" height="12" rx="2" stroke="#F5F3EE" strokeWidth="1.5" />
            <path d="M5 8 H11 M8 5 V11" stroke="#F5F3EE" strokeWidth="1.5" />
          </svg>
        </span>
      );
    case "merry-magic-mail":
      return (
        <span className="home-ic" style={{ background: "var(--accent-yellow)" }}>
          <svg width="18" height="13" viewBox="0 0 18 13" fill="none">
            <rect x="1" y="1" width="16" height="11" rx="1.5" stroke="#1B1917" strokeWidth="1.6" />
            <path d="M1.5 2 L9 7.5 L16.5 2" stroke="#1B1917" strokeWidth="1.6" />
          </svg>
        </span>
      );
    case "turbocamp":
      return (
        <span className="home-ic" style={{ background: "var(--accent-blue)" }}>
          <svg width="16" height="14" viewBox="0 0 16 14" fill="none">
            <path d="M8 1 L15 13 H1 Z" fill="#F5F3EE" />
          </svg>
        </span>
      );
    case "repopress":
      return (
        <span
          className="home-ic"
          style={{
            background: "var(--site-surface-raised)",
            border: "1px solid var(--site-line-strong)",
          }}
        >
          <svg width="18" height="14" viewBox="0 0 18 14" fill="none">
            <path
              d="M2 2 H8 Q10 2 10 4 V12 M16 12 H10"
              stroke="var(--site-ink)"
              strokeWidth="1.5"
            />
            <circle cx="16" cy="7" r="1.6" fill="var(--accent-green)" />
          </svg>
        </span>
      );
    default:
      return (
        <span
          className="home-ic"
          style={{
            background: "var(--site-surface-raised)",
            border: "1px solid var(--site-line-strong)",
          }}
        >
          <svg width="18" height="14" viewBox="0 0 18 14" fill="none">
            <rect
              x="1"
              y="1"
              width="10"
              height="12"
              rx="1.5"
              stroke="var(--site-ink)"
              strokeWidth="1.4"
            />
            <rect
              x="7"
              y="3"
              width="10"
              height="8"
              rx="1.5"
              fill="var(--site-canvas)"
              stroke="var(--site-ink)"
              strokeWidth="1.4"
            />
            <path
              d="M9.5 6 H14.5 M9.5 8.5 H13"
              stroke="var(--accent-orange)"
              strokeWidth="1.3"
            />
          </svg>
        </span>
      );
  }
}

export function HomeIndex() {
  const rows = INDEX_SLUGS.map((slug) =>
    projects.find((project) => project.slug === slug),
  ).filter((project) => project !== undefined);

  return (
    <section className="home-index">
      <div className="home-shell">
        <div className="home-index-head">
          <div>
            <Rise>
              <p className="home-eyebrow">More from the studio</p>
            </Rise>
            <MaskRise delay={0.06}>
              <h2 className="home-h2">Everything we&apos;re building.</h2>
            </MaskRise>
          </div>
          <Rise delay={0.12}>
            <Link className="home-cta" href="/work">
              View all work
            </Link>
          </Rise>
        </div>
        <Rise delay={0.1}>
          <div className="home-index-rows">
            {rows.map((project) => (
              <Link
                key={project.slug}
                className="home-irow"
                href={`/work/${project.slug}`}
              >
                <IndexIcon slug={project.slug} />
                <span className="home-nm">{project.name}</span>
                <span className="home-ds">{project.cardSummary}</span>
                <span className="home-st">
                  <i
                    style={{
                      background:
                        STATUS_DOT[project.status] ?? "var(--site-faint)",
                    }}
                  ></i>
                  {project.status === "Public repository"
                    ? "Open source"
                    : project.status}
                </span>
                <span className="home-ar">↗</span>
              </Link>
            ))}
          </div>
        </Rise>
      </div>
    </section>
  );
}

/* ————— Delhi ————— */

export function HomeDelhi() {
  return (
    <section className="home-delhi">
      <div className="home-shell">
        <div>
          <Rise>
            <p className="home-eyebrow">Our studio</p>
          </Rise>
          <MaskRise delay={0.06}>
            <h2 className="home-h2">A place to build, in Delhi.</h2>
          </MaskRise>
          <Rise delay={0.14}>
            <p>
              We&apos;re shaping a shared space for builders and makers — where
              ideas, craft, and community come together.
            </p>
          </Rise>
          <Rise delay={0.2}>
            <span className="home-tagpill">In development · not yet open</span>
          </Rise>
        </div>
        <DrawOnView className="home-art">
          <DelhiSketch />
        </DrawOnView>
      </div>
    </section>
  );
}

/* ————— Dark close ————— */

export function HomeClose() {
  return (
    <section className="home-close">
      <div className="home-shell">
        <Rise>
          <p className="home-eyebrow">The studio, for hire</p>
        </Rise>
        <MaskRise delay={0.06}>
          <h2 className="home-h2">We can help build yours, too.</h2>
        </MaskRise>
        <Rise delay={0.14}>
          <p className="home-lead">
            We partner with a small number of teams to create enduring products
            — with the same rails we use on our own.
          </p>
        </Rise>
        <div className="home-caps">
          <Rise>
            <h3>Product strategy</h3>
            <p>
              We find the real problems worth solving and shape products with
              clarity.
            </p>
          </Rise>
          <Rise delay={0.08}>
            <h3>Design</h3>
            <p>
              We design simple, useful experiences that people understand and
              trust.
            </p>
          </Rise>
          <Rise delay={0.16}>
            <h3>Engineering</h3>
            <p>
              We build robust, scalable software with thoughtful architecture.
            </p>
          </Rise>
          <Rise delay={0.24}>
            <h3>AI systems</h3>
            <p>We design AI that augments work, not replaces it.</p>
          </Rise>
        </div>
        <div className="home-close-cta">
          <MaskRise>
            <h2 className="home-h2">Have a product worth building?</h2>
          </MaskRise>
          <Rise delay={0.1}>
            <Link className="home-cta" href="/contact">
              Let&apos;s talk
            </Link>
          </Rise>
        </div>
      </div>
    </section>
  );
}
