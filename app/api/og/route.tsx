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
          background: PAPER,
          fontFamily: "Inter",
          position: "relative",
        }}
      >
        {/* isometric stack, right side */}
        <svg
          width="560"
          height="630"
          viewBox="0 0 560 630"
          style={{ position: "absolute", right: -30, top: 0 }}
        >
          {[430, 330, 230].map((cy, idx) => {
            const dw = 205;
            const dh = 88;
            const t = 24;
            const cx = 290;
            const topFill = idx % 2 === 0 ? "#ece9e1" : "#fbfaf6";
            return (
              <g key={cy}>
                <path
                  d={`M ${cx - dw} ${cy} L ${cx} ${cy + dh} L ${cx} ${cy + dh + t} L ${cx - dw} ${cy + t} Z`}
                  fill="#d6d2c6"
                  stroke={INK}
                  strokeWidth="2"
                />
                <path
                  d={`M ${cx + dw} ${cy} L ${cx} ${cy + dh} L ${cx} ${cy + dh + t} L ${cx + dw} ${cy + t} Z`}
                  fill="#e3dfd3"
                  stroke={INK}
                  strokeWidth="2"
                />
                <path
                  d={`M ${cx} ${cy - dh} L ${cx + dw} ${cy} L ${cx} ${cy + dh} L ${cx - dw} ${cy} Z`}
                  fill={topFill}
                  stroke={INK}
                  strokeWidth="2"
                />
              </g>
            );
          })}
          <path
            d="M290 118 V560"
            stroke={INK}
            strokeWidth="1.6"
            strokeDasharray="4 8"
            opacity="0.55"
          />
          <path d="M190 60 V172" stroke={INK} strokeWidth="2" />
          <path d="M290 44 V130" stroke={INK} strokeWidth="2" />
          <path d="M390 60 V172" stroke={INK} strokeWidth="2" />
          <circle cx="190" cy="54" r="9" fill={accent} />
          <circle cx="290" cy="38" r="10" fill={ACCENTS.orange} />
          <circle cx="390" cy="54" r="9" fill={ACCENTS.green} />
          <circle cx="102" cy="330" r="7" fill={accent} />
          <circle cx="120" cy="430" r="7" fill={ACCENTS.yellow} stroke={INK} strokeWidth="1.5" />
          <circle cx="112" cy="230" r="7" fill={ACCENTS.orange} />
        </svg>

        {/* text column */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            padding: "60px 0 56px 72px",
            width: 680,
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 14,
            }}
          >
            <div
              style={{
                display: "flex",
                fontSize: 32,
                fontWeight: 700,
                letterSpacing: "0.1px",
                color: INK,
              }}
            >
              Droidsize
            </div>
            <div
              style={{
                display: "flex",
                width: 8,
                height: 8,
                borderRadius: 999,
                background: accent,
                marginTop: 4,
              }}
            />
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            <div
              style={{
                display: "flex",
                fontSize: 21,
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
                fontSize: title.length > 58 ? 60 : 74,
                fontWeight: 700,
                lineHeight: 1.05,
                letterSpacing: "-2.5px",
                color: INK,
              }}
            >
              {title}
            </div>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 18,
            }}
          >
            <div
              style={{
                display: "flex",
                width: 44,
                height: 3,
                background: INK,
              }}
            />
            <div style={{ display: "flex", fontSize: 23, color: MUTED }}>
              {meta}
            </div>
          </div>
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
