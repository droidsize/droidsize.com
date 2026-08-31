import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

export const runtime = "nodejs";

const PAPER = "#f2f0ea";
const INK = "#1b1917";
const MUTED = "#6e695f";
const FAINT = "#948f84";
const LINE = "#d9d5ca";
const ACCENTS = {
  blue: "#2b45c4",
  orange: "#e85b25",
  yellow: "#ffce1b",
  green: "#17513c",
  navy: "#1e2c4e",
} as const;

let fontsPromise: Promise<{ regular: Buffer; bold: Buffer }> | null = null;

function loadFonts() {
  fontsPromise ??= (async () => {
    const dir = join(process.cwd(), "assets", "fonts");
    const [regular, bold] = await Promise.all([
      readFile(join(dir, "Inter-Regular.ttf")),
      readFile(join(dir, "Inter-Bold.ttf")),
    ]);
    return { regular, bold };
  })();
  return fontsPromise;
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const eyebrow = (searchParams.get("eyebrow") ?? "Product studio · New Delhi").slice(0, 60);
  const title = (
    searchParams.get("title") ??
    "Software products and the systems behind them."
  ).slice(0, 120);
  const meta = (searchParams.get("meta") ?? "droidsize.com").slice(0, 60);
  const accentKey = searchParams.get("accent") ?? "blue";
  const accent =
    ACCENTS[accentKey as keyof typeof ACCENTS] ?? ACCENTS.blue;

  const { regular, bold } = await loadFonts();

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: PAPER,
          padding: "64px 72px",
          fontFamily: "Inter",
        }}
      >
        {/* top bar */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              display: "flex",
              fontSize: 34,
              fontWeight: 700,
              letterSpacing: "0.1px",
              color: INK,
            }}
          >
            Droidsize
          </div>
          <div style={{ display: "flex", gap: 12 }}>
            {[ACCENTS.green, ACCENTS.orange, accent].map((color, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  width: 16,
                  height: 16,
                  borderRadius: 999,
                  background: color,
                }}
              />
            ))}
          </div>
        </div>

        {/* title block */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 26,
            maxWidth: 980,
          }}
        >
          <div
            style={{
              display: "flex",
              fontSize: 22,
              fontWeight: 700,
              letterSpacing: "4px",
              textTransform: "uppercase",
              color: FAINT,
            }}
          >
            {eyebrow}
          </div>
          <div
            style={{
              display: "flex",
              fontSize: title.length > 60 ? 62 : 76,
              fontWeight: 700,
              lineHeight: 1.06,
              letterSpacing: "-2.5px",
              color: INK,
            }}
          >
            {title}
          </div>
        </div>

        {/* bottom bar with routing motif */}
        <div
          style={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "space-between",
            borderTop: `2px solid ${LINE}`,
            paddingTop: 32,
          }}
        >
          <div style={{ display: "flex", fontSize: 24, color: MUTED }}>
            {meta}
          </div>
          <svg
            width="330"
            height="80"
            viewBox="0 0 330 80"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 24 H140 Q152 24 152 36 V56 Q152 68 164 68 H330"
              stroke={INK}
              strokeWidth="2.5"
              fill="none"
            />
            <path d="M80 68 H30" stroke={INK} strokeWidth="2.5" fill="none" />
            <circle cx="24" cy="68" r="8" fill={ACCENTS.orange} />
            <circle cx="216" cy="68" r="7" fill={accent} />
            <circle cx="316" cy="24" r="8" fill={ACCENTS.green} />
            <path d="M240 24 H308" stroke={INK} strokeWidth="2.5" fill="none" />
          </svg>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
      fonts: [
        { name: "Inter", data: regular, weight: 400, style: "normal" },
        { name: "Inter", data: bold, weight: 700, style: "normal" },
      ],
    },
  );
}
