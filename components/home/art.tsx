/* Inline SVG artwork for the homepage — token-driven so both themes hold. */

export function HeroMapLines() {
  return (
    <svg viewBox="0 0 520 340" fill="none" aria-hidden="true">
      <path
        d="M64 92 H336 Q350 92 350 106 V180 Q350 194 364 194 H470"
        stroke="var(--site-ink)"
        strokeWidth="1.6"
      />
      <path
        d="M120 300 V210 Q120 196 134 196 H236 Q250 196 250 182 V52"
        stroke="var(--site-ink)"
        strokeWidth="1.6"
      />
      <path
        d="M480 60 H420 Q406 60 406 74 V128"
        stroke="var(--site-ink)"
        strokeWidth="1.6"
      />
      <path
        d="M40 250 H180 Q194 250 194 264 V312"
        stroke="var(--site-ink)"
        strokeWidth="1.6"
      />
      <circle cx="64" cy="92" r="7" fill="var(--accent-green)" />
      <circle cx="480" cy="60" r="7" fill="var(--accent-blue)" />
      <circle cx="250" cy="52" r="6" fill="var(--accent-orange)" />
      <circle cx="470" cy="194" r="7" fill="var(--accent-green)" />
      <circle
        cx="40"
        cy="250"
        r="6"
        fill="var(--accent-yellow)"
        stroke="var(--site-ink)"
        strokeWidth="1"
      />
    </svg>
  );
}

export function RailsStack() {
  const layers = [
    { y: 150, top: 90, fill: "var(--site-surface)", label: "Product layer", dot: "var(--accent-blue)" },
    { y: 228, top: 168, fill: "var(--site-surface-raised)", label: "Design system", dot: "var(--accent-orange)" },
    { y: 306, top: 246, fill: "var(--site-surface)", label: "AI workflows", dot: "var(--site-ink)" },
    { y: 384, top: 324, fill: "var(--site-surface-raised)", label: "Infrastructure", dot: "var(--accent-yellow)" },
    { y: 462, top: 402, fill: "var(--site-surface)", label: "Release rails", dot: "var(--accent-green)" },
  ];

  return (
    <svg viewBox="0 0 640 480" fill="none" aria-hidden="true">
      <path
        d="M180 96 V38 M300 82 V38 M420 68 V38"
        stroke="var(--site-ink)"
        strokeWidth="1.3"
      />
      <circle cx="180" cy="34" r="6" fill="var(--accent-blue)" />
      <circle cx="300" cy="34" r="6" fill="var(--accent-orange)" />
      <circle cx="420" cy="34" r="6" fill="var(--accent-green)" />
      {layers.map((l) => (
        <g key={l.label} fontFamily="var(--font-sans), Helvetica, sans-serif" fontSize="14">
          <path
            d={`M80 ${l.y} L400 ${l.y} L520 ${l.top} L200 ${l.top} Z`}
            fill={l.fill}
            stroke="var(--site-ink)"
            strokeWidth="1.5"
          />
          <text x="545" y={l.y - 22} fill="var(--site-muted)">
            {l.label}
          </text>
          <circle
            cx="86"
            cy={l.y - 3}
            r="5"
            fill={l.dot}
            stroke={l.dot === "var(--accent-yellow)" ? "var(--site-ink)" : "none"}
            strokeWidth="1"
          />
        </g>
      ))}
      <path
        d="M240 150 V168 M240 228 V246 M240 306 V324 M240 384 V402"
        stroke="var(--site-ink)"
        strokeWidth="1.2"
        strokeDasharray="3 5"
      />
    </svg>
  );
}

export function DelhiSketch() {
  return (
    <svg
      viewBox="0 0 640 400"
      fill="none"
      stroke="var(--site-ink)"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M20 372 H620" />
      <rect x="42" y="56" width="200" height="160" />
      <path d="M142 56 V216 M42 136 H242" />
      <path d="M60 136 H92 M66 136 V120 Q76 106 86 120 V136" strokeWidth="1.2" />
      <path d="M180 136 V112 M196 136 V104 M188 104 V96" strokeWidth="1.2" />
      <path d="M330 22 V96" />
      <path d="M306 122 L354 122 L344 98 L316 98 Z" />
      <path d="M318 134 Q330 142 342 134" strokeWidth="1.2" />
      <path d="M150 250 H470" />
      <path d="M150 250 V262 H470 V250" />
      <path d="M166 262 V372 M454 262 V372 M240 262 V368 M380 262 V368" />
      <path d="M120 290 V372 M120 290 Q120 278 132 278 H148" />
      <path d="M104 330 H140 V372" />
      <path d="M500 288 V372 M500 288 Q500 276 488 276 H472" />
      <path d="M482 330 H516 V372" />
      <path d="M280 262 V286 H336 V262 M288 286 V372 M328 286 V372" strokeWidth="1.2" />
      <path d="M70 336 H106 L100 372 H76 Z" />
      <path
        d="M88 336 V310 M88 318 Q72 312 70 296 M88 314 Q104 306 108 292 M88 324 Q78 322 74 310"
        strokeWidth="1.2"
      />
      <path d="M520 282 H616 M528 282 V372 M608 282 V372" />
      <rect x="536" y="200" width="64" height="82" />
      <path d="M536 226 H600 M556 226 V214 H580 V226" />
      <rect x="560" y="240" width="18" height="14" strokeWidth="1.2" />
      <path d="M569 254 V268" strokeWidth="1.2" />
      <rect x="520" y="96" width="96" height="72" />
      <g strokeWidth="1.1">
        {[112, 130, 148].map((cy) =>
          [536, 556, 576, 596].map((cx) => (
            <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r="1.2" />
          )),
        )}
        <path d="M548 112 V134 M548 122 Q556 128 548 134" />
        <path d="M586 112 V128 Q592 136 586 142" />
      </g>
    </svg>
  );
}
