/*
 * Inline SVG artwork for the homepage — token-driven so both themes hold.
 * Animation classes (hm-stroke / hm-pop / hm-rise / hm-float / hm-pulse)
 * are gated by the DrawOnView wrapper; see styles/home.css.
 */

type Stroke = { d: string; w?: number; delay?: number; color?: string };

function DrawnPath({ d, w = 1.6, delay = 0, color = "var(--site-ink)" }: Stroke) {
  return (
    <path
      className="hm-stroke"
      style={{ ["--d" as string]: delay }}
      d={d}
      pathLength={1}
      fill="none"
      stroke={color}
      strokeWidth={w}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  );
}

/* ————— Hero — routing lines draw in, endpoints pop ————— */

export function HeroMapLines() {
  const dots = [
    { cx: 64, cy: 92, r: 7, fill: "var(--accent-green)", d: 500 },
    { cx: 480, cy: 60, r: 7, fill: "var(--accent-blue)", d: 700 },
    { cx: 250, cy: 52, r: 6, fill: "var(--accent-orange)", d: 900 },
    { cx: 470, cy: 194, r: 7, fill: "var(--accent-green)", d: 1100 },
    { cx: 40, cy: 250, r: 6, fill: "var(--accent-yellow)", d: 1250 },
  ];
  return (
    <svg viewBox="0 0 520 340" fill="none" aria-hidden="true">
      <DrawnPath d="M64 92 H336 Q350 92 350 106 V180 Q350 194 364 194 H470" delay={0} />
      <DrawnPath d="M120 300 V210 Q120 196 134 196 H236 Q250 196 250 182 V52" delay={200} />
      <DrawnPath d="M480 60 H420 Q406 60 406 74 V128" delay={400} />
      <DrawnPath d="M40 250 H180 Q194 250 194 264 V312" delay={550} />
      {dots.map((dot, i) => (
        <circle
          key={i}
          className="hm-pop hm-pulse"
          style={{ ["--d" as string]: dot.d }}
          cx={dot.cx}
          cy={dot.cy}
          r={dot.r}
          fill={dot.fill}
          stroke={dot.fill === "var(--accent-yellow)" ? "var(--site-ink)" : "none"}
          strokeWidth="1"
        />
      ))}
    </svg>
  );
}

/* ————— Rails — five isometric layers, product pins, dashed spine ————— */

const ISO = { cx: 300, dw: 218, dh: 96, t: 24, gap: 88, topY: 190 };

function isoLayer(cy: number) {
  const { cx, dw, dh, t } = ISO;
  const N = `${cx} ${cy - dh}`;
  const E = `${cx + dw} ${cy}`;
  const S = `${cx} ${cy + dh}`;
  const W = `${cx - dw} ${cy}`;
  return {
    top: `M ${N} L ${E} L ${S} L ${W} Z`,
    right: `M ${E} L ${S} L ${cx} ${cy + dh + t} L ${cx + dw} ${cy + t} Z`,
    left: `M ${W} L ${S} L ${cx} ${cy + dh + t} L ${cx - dw} ${cy + t} Z`,
  };
}

export function RailsStack() {
  const layers = [
    { label: "Product layer", dot: "var(--accent-blue)" },
    { label: "Design system", dot: "var(--accent-orange)" },
    { label: "AI workflows", dot: "var(--site-ink)" },
    { label: "Infrastructure", dot: "var(--accent-yellow)" },
    { label: "Release rails", dot: "var(--accent-green)" },
  ];
  const pins = [
    { x: 190, foot: 132, label: "Domain Collective", fill: "var(--accent-blue)" },
    { x: 300, foot: 104, label: "Sparkle", fill: "var(--accent-orange)" },
    { x: 410, foot: 132, label: "TripleWave", fill: "var(--accent-green)" },
  ];
  const { cx, dh, t, gap, topY } = ISO;

  return (
    <svg viewBox="0 0 660 680" fill="none" aria-hidden="true">
      {/* product pins */}
      {pins.map((pin, i) => (
        <g key={pin.label} fontFamily="var(--font-sans), Helvetica, sans-serif">
          <DrawnPath d={`M${pin.x} 46 V${pin.foot}`} w={1.4} delay={600 + i * 150} />
          <circle
            className="hm-pop hm-pulse"
            style={{ ["--d" as string]: 700 + i * 150 }}
            cx={pin.x}
            cy="40"
            r="6.5"
            fill={pin.fill}
          />
          <text
            className="hm-pop"
            style={{ ["--d" as string]: 800 + i * 150 }}
            x={pin.x}
            y="22"
            textAnchor="middle"
            fontSize="14"
            fill="var(--site-muted)"
          >
            {pin.label}
          </text>
        </g>
      ))}

      {/* layers, top to bottom, rising in from below */}
      {layers.map((layer, i) => {
        const cy = topY + i * gap;
        const faces = isoLayer(cy);
        return (
          <g
            key={layer.label}
            className="hm-assemble"
            style={{ ["--d" as string]: 120 * i }}
            fontFamily="var(--font-sans), Helvetica, sans-serif"
          >
            <path
              d={faces.left}
              fill="color-mix(in srgb, var(--site-ink) 13%, var(--site-surface))"
              stroke="var(--site-ink)"
              strokeWidth="1.5"
            />
            <path
              d={faces.right}
              fill="color-mix(in srgb, var(--site-ink) 7%, var(--site-surface))"
              stroke="var(--site-ink)"
              strokeWidth="1.5"
            />
            <path
              d={faces.top}
              fill={i % 2 === 0 ? "var(--site-surface)" : "var(--site-surface-raised)"}
              stroke="var(--site-ink)"
              strokeWidth="1.5"
            />
            <circle cx={cx - ISO.dw + 26} cy={cy - 2} r="5.5" fill={layer.dot} />
            <text x={cx + ISO.dw + 18} y={cy + 5} fontSize="15" fill="var(--site-muted)">
              {layer.label}
            </text>
          </g>
        );
      })}

      {/* dashed spine through the stack */}
      <path
        className="hm-rise"
        style={{ ["--d" as string]: 900 }}
        d={`M${cx} ${topY - dh + 10} V${topY + 4 * gap + dh + t - 10}`}
        pathLength={1}
        stroke="var(--site-ink)"
        strokeWidth="1.3"
        strokeDasharray="0.012 0.02"
        fill="none"
        opacity="0.7"
      />
    </svg>
  );
}

/* ————— Delhi — the workspace draws itself in ————— */

const SKETCH: Stroke[] = [
  { d: "M20 372 H620", w: 1.5 },                                     // floor
  { d: "M42 56 H242 V216 H42 Z", w: 1.5, delay: 150 },               // window
  { d: "M142 56 V216 M42 136 H242", w: 1.5, delay: 300 },
  { d: "M60 136 H92 M66 136 V120 Q76 106 86 120 V136", w: 1.2, delay: 500 },
  { d: "M180 136 V112 M196 136 V104 M188 104 V96", w: 1.2, delay: 600 },
  { d: "M330 22 V96", w: 1.5, delay: 250 },                          // lamp
  { d: "M306 122 L354 122 L344 98 L316 98 Z", w: 1.5, delay: 350 },
  { d: "M318 134 Q330 142 342 134", w: 1.2, delay: 450 },
  { d: "M150 250 H470 M150 250 V262 H470 V250", w: 1.5, delay: 400 }, // table
  { d: "M166 262 V372 M454 262 V372 M240 262 V368 M380 262 V368", w: 1.5, delay: 550 },
  { d: "M120 290 V372 M120 290 Q120 278 132 278 H148", w: 1.5, delay: 700 }, // chairs
  { d: "M104 330 H140 V372", w: 1.5, delay: 780 },
  { d: "M500 288 V372 M500 288 Q500 276 488 276 H472", w: 1.5, delay: 700 },
  { d: "M482 330 H516 V372", w: 1.5, delay: 780 },
  { d: "M280 262 V286 H336 V262 M288 286 V372 M328 286 V372", w: 1.2, delay: 640 },
  { d: "M70 336 H106 L100 372 H76 Z", w: 1.5, delay: 820 },          // plant
  { d: "M88 336 V310 M88 318 Q72 312 70 296 M88 314 Q104 306 108 292 M88 324 Q78 322 74 310", w: 1.2, delay: 900 },
  { d: "M520 282 H616 M528 282 V372 M608 282 V372", w: 1.5, delay: 500 }, // side desk
  { d: "M536 200 H600 V282 H536 Z", w: 1.5, delay: 620 },            // printer
  { d: "M536 226 H600 M556 226 V214 H580 V226", w: 1.5, delay: 720 },
  { d: "M560 240 H578 V254 H560 Z M569 254 V268", w: 1.2, delay: 820 },
  { d: "M520 96 H616 V168 H520 Z", w: 1.5, delay: 400 },             // pegboard
  { d: "M548 112 V134 M548 122 Q556 128 548 134", w: 1.1, delay: 950 },
  { d: "M586 112 V128 Q592 136 586 142", w: 1.1, delay: 1020 },
];

export function DelhiSketch() {
  return (
    <svg viewBox="0 0 640 400" fill="none" aria-hidden="true">
      {SKETCH.map((stroke, i) => (
        <DrawnPath key={i} {...stroke} color="var(--site-ink)" />
      ))}
      {[112, 130, 148].map((cy, row) =>
        [536, 556, 576, 596].map((cx, col) => (
          <circle
            key={`${cx}-${cy}`}
            className="hm-pop"
            style={{ ["--d" as string]: 1000 + (row * 4 + col) * 30 }}
            cx={cx}
            cy={cy}
            r="1.4"
            fill="var(--site-ink)"
          />
        )),
      )}
    </svg>
  );
}
