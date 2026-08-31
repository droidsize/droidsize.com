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

/* ————— Hero — an edge-to-edge network: pulses move in and out of frame ————— */

const HERO_ROUTES = [
  {
    d: "M0 150 H320 Q336 150 336 166 V250 Q336 266 352 266 H800",
    delay: 0,
    ends: [],
    traveler: { dur: "9s", delay: 1800, fill: "var(--accent-blue)" },
  },
  {
    d: "M800 90 H560 Q544 90 544 106 V210",
    delay: 250,
    ends: [{ cx: 544, cy: 214, r: 7, fill: "var(--accent-blue)", d: 900 }],
    traveler: { dur: "6.5s", delay: 4200, fill: "var(--accent-orange)" },
  },
  {
    d: "M0 440 H180 Q196 440 196 424 V320 Q196 304 212 304 H420 Q436 304 436 288 V80",
    delay: 450,
    ends: [{ cx: 436, cy: 76, r: 7, fill: "var(--accent-green)", d: 1100 }],
    traveler: { dur: "8s", delay: 3000, fill: "var(--accent-green)" },
  },
  {
    d: "M800 500 H600 Q584 500 584 484 V400 Q584 384 568 384 H364",
    delay: 600,
    ends: [{ cx: 360, cy: 384, r: 6, fill: "var(--accent-orange)", d: 1250 }],
    traveler: { dur: "7s", delay: 5200, fill: "var(--accent-navy)" },
  },
  {
    d: "M140 0 V110 Q140 126 156 126 H260",
    delay: 750,
    ends: [{ cx: 264, cy: 126, r: 6, fill: "var(--accent-yellow)", d: 1350, ring: true }],
    traveler: null,
  },
  {
    d: "M280 620 V520 Q280 504 296 504 H520 Q536 504 536 520 V620",
    delay: 900,
    ends: [],
    traveler: { dur: "6s", delay: 6400, fill: "var(--accent-orange)" },
  },
];

export function HeroMapLines() {
  return (
    <svg viewBox="0 0 800 620" fill="none" aria-hidden="true">
      {HERO_ROUTES.map((route, i) => (
        <g key={i}>
          <DrawnPath d={route.d} delay={route.delay} />
          {route.ends.map((end, j) => (
            <circle
              key={j}
              className="hm-pop hm-pulse"
              style={{ ["--d" as string]: end.d }}
              cx={end.cx}
              cy={end.cy}
              r={end.r}
              fill={end.fill}
              stroke={"ring" in end && end.ring ? "var(--site-ink)" : "none"}
              strokeWidth="1"
            />
          ))}
          {route.traveler ? (
            <circle
              className="hm-travel"
              style={{
                ["--path" as string]: `path("${route.d}")`,
                ["--dur" as string]: route.traveler.dur,
                ["--d" as string]: route.traveler.delay,
              }}
              r="4.5"
              fill={route.traveler.fill}
            />
          ) : null}
        </g>
      ))}
      {/* junction nodes where routes cross */}
      <circle className="hm-pop" style={{ ["--d" as string]: 1500 }} cx="336" cy="266" r="3" fill="var(--site-ink)" />
      <circle className="hm-pop" style={{ ["--d" as string]: 1580 }} cx="436" cy="150" r="3" fill="var(--site-ink)" />
      <circle className="hm-pop" style={{ ["--d" as string]: 1660 }} cx="584" cy="500" r="3" fill="var(--site-ink)" />
    </svg>
  );
}

/* ————— Rails — isometric stack: edges draw, fills wash in, layers drift ————— */

const ISO = { cx: 300, dw: 218, dh: 92, t: 26, gap: 100, topY: 176 };

function isoFaces(cy: number) {
  const { cx, dw, dh, t } = ISO;
  return {
    top: `M ${cx} ${cy - dh} L ${cx + dw} ${cy} L ${cx} ${cy + dh} L ${cx - dw} ${cy} Z`,
    right: `M ${cx + dw} ${cy} L ${cx} ${cy + dh} L ${cx} ${cy + dh + t} L ${cx + dw} ${cy + t} Z`,
    left: `M ${cx - dw} ${cy} L ${cx} ${cy + dh} L ${cx} ${cy + dh + t} L ${cx - dw} ${cy + t} Z`,
    edges: `M ${cx - dw} ${cy} v ${t} M ${cx} ${cy + dh} v ${t} M ${cx + dw} ${cy} v ${t} M ${cx - dw} ${cy + t} L ${cx} ${cy + dh + t} L ${cx + dw} ${cy + t}`,
  };
}

const RAIL_LAYERS = [
  { label: "Product layer", dot: "var(--accent-blue)" },
  { label: "Design system", dot: "var(--accent-orange)" },
  { label: "AI workflows", dot: "var(--site-ink)" },
  { label: "Infrastructure", dot: "var(--accent-yellow)" },
  { label: "Release rails", dot: "var(--accent-green)" },
];

const RAIL_PINS = [
  { x: 190, foot: 146, label: "Domain Collective", fill: "var(--accent-blue)" },
  { x: 300, foot: 116, label: "Sparkle", fill: "var(--accent-orange)" },
  { x: 410, foot: 146, label: "TripleWave", fill: "var(--accent-green)" },
];

export function RailsStack() {
  const { cx, dw, dh, t, gap, topY } = ISO;
  // paint bottom layer first so upper layers occlude correctly
  const order = [4, 3, 2, 1, 0];

  return (
    <svg viewBox="0 0 660 724" fill="none" aria-hidden="true">
      {order.map((i) => {
        const layer = RAIL_LAYERS[i];
        const cy = topY + i * gap;
        const faces = isoFaces(cy);
        const base = (4 - i) * 180;
        return (
          <g
            key={layer.label}
            className="hm-drift"
            style={{ ["--d" as string]: base }}
            fontFamily="var(--font-sans), Helvetica, sans-serif"
          >
            <path
              className="hm-fill"
              style={{ ["--d" as string]: base + 520 }}
              d={faces.left}
              fill="color-mix(in srgb, var(--site-ink) 13%, var(--site-surface))"
            />
            <path
              className="hm-fill"
              style={{ ["--d" as string]: base + 520 }}
              d={faces.right}
              fill="color-mix(in srgb, var(--site-ink) 7%, var(--site-surface))"
            />
            <path
              className="hm-fill"
              style={{ ["--d" as string]: base + 440 }}
              d={faces.top}
              fill={i % 2 === 0 ? "var(--site-surface)" : "var(--site-surface-raised)"}
            />
            <DrawnPath d={faces.top} w={1.5} delay={base} />
            <DrawnPath d={faces.edges} w={1.5} delay={base + 260} />
            <circle
              className="hm-pop"
              style={{ ["--d" as string]: base + 640 }}
              cx={cx - dw + 34}
              cy={cy}
              r="5.5"
              fill={layer.dot}
              stroke={layer.dot === "var(--accent-yellow)" ? "var(--site-ink)" : "none"}
              strokeWidth="1"
            />
            <text
              className="hm-pop"
              style={{ ["--d" as string]: base + 700 }}
              x={cx + dw + 18}
              y={cy + 5}
              fontSize="15"
              fill="var(--site-muted)"
            >
              {layer.label}
            </text>
          </g>
        );
      })}

      {/* dashed spine */}
      <path
        className="hm-fill"
        style={{ ["--d" as string]: 1400 }}
        d={`M${cx} ${topY - dh + 12} V${topY + 4 * gap + dh + t - 12}`}
        pathLength={1}
        stroke="var(--site-ink)"
        strokeWidth="1.3"
        strokeDasharray="0.012 0.02"
        fill="none"
        opacity="0.7"
      />

      {/* product pins onto the top layer */}
      {RAIL_PINS.map((pin, i) => (
        <g key={pin.label} fontFamily="var(--font-sans), Helvetica, sans-serif">
          <DrawnPath d={`M${pin.x} 58 V${pin.foot}`} w={1.4} delay={1500 + i * 160} />
          <circle
            className="hm-pop hm-pulse"
            style={{ ["--d" as string]: 1620 + i * 160 }}
            cx={pin.x}
            cy="52"
            r="6.5"
            fill={pin.fill}
          />
          <text
            className="hm-pop"
            style={{ ["--d" as string]: 1720 + i * 160 }}
            x={pin.x}
            y="32"
            textAnchor="middle"
            fontSize="14"
            fill="var(--site-muted)"
          >
            {pin.label}
          </text>
        </g>
      ))}
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
