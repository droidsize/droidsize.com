/**
 * Themed, animated SVG project covers.
 *
 * Every cover draws from the site tokens (--cover-*, --accent-*) so it
 * resolves correctly in light and dark themes. Animations live in
 * styles/covers.css and run only when the visitor allows motion.
 */

const VB = "0 0 1732 908";

function Ground() {
  return <rect width="1732" height="908" fill="var(--cover-ground)" />;
}

/* ————— Domain Collective — registrar routes converge into one portfolio ————— */

function DomainCollectiveCover() {
  return (
    <svg className="cover-svg" viewBox={VB} aria-hidden="true">
      <Ground />
      <circle cx="1430" cy="330" r="150" fill="var(--accent-orange)" />
      <rect x="1060" y="330" width="430" height="350" fill="var(--accent-navy)" />
      <path
        d="M1060 680 H1120 V600 H1180 V520 H1240 V440 H1300 V330 H1060 Z"
        fill="var(--cover-ground)"
        opacity="0.18"
      />
      <path
        d="M1060 680 H1120 V600 H1180 V520 H1240 V440 H1300 V330"
        fill="none"
        stroke="var(--cover-ground)"
        strokeWidth="4"
      />
      {[
        { y: 220, c: "var(--accent-green)", d: "M215 220 H640 Q670 220 670 250 V430 Q670 460 700 460 H1060", cls: "" },
        { y: 340, c: "var(--accent-orange)", d: "M215 340 H540 Q570 340 570 370 V470 Q570 500 600 500 H1060", cls: "cvr-d2" },
        { y: 460, c: "var(--accent-blue)", d: "M215 460 H460 Q490 460 490 490 V520 Q490 550 520 550 H1060", cls: "" },
        { y: 580, c: "var(--cover-ink)", d: "M215 580 H520 Q550 580 550 610 L550 610 Q550 640 580 640 H1060", cls: "cvr-d3" },
        { y: 700, c: "var(--accent-orange)", d: "M215 700 H600 Q630 700 630 670 V620 Q630 590 660 590 H1060", cls: "cvr-d2" },
        { y: 820, c: "var(--accent-green)", d: "M215 820 H700 Q730 820 730 790 V680 Q730 650 760 650 H1060", cls: "cvr-d3" },
      ].map((r, i) => (
        <g key={i}>
          <path
            className={`cvr-draw ${r.cls}`}
            d={r.d}
            pathLength={1}
            fill="none"
            stroke="var(--cover-ink)"
            strokeWidth="3"
          />
          <circle
            className={`cvr-pulse ${i % 3 === 1 ? "cvr-p2" : i % 3 === 2 ? "cvr-p3" : ""}`}
            cx="215"
            cy={r.y}
            r="14"
            fill={r.c}
          />
        </g>
      ))}
    </svg>
  );
}

/* ————— Sparkle — saved reading resolves through an aperture into Sparks ————— */

function SparkleCover() {
  return (
    <svg className="cover-svg" viewBox={VB} aria-hidden="true">
      <Ground />
      {[250, 330, 410, 490, 570, 650].map((y, i) => (
        <rect
          key={y}
          x="150"
          y={y}
          width={i % 2 === 0 ? 380 : 300}
          height="26"
          rx="13"
          fill="var(--cover-muted)"
        />
      ))}
      <path
        className="cvr-draw"
        d="M560 455 H700"
        pathLength={1}
        stroke="var(--cover-ink)"
        strokeWidth="3"
        fill="none"
      />
      <g className="cvr-breathe">
        <path
          d="M866 260 C886 400 926 434 1066 454 C926 474 886 508 866 648 C846 508 806 474 666 454 C806 434 846 400 866 260"
          fill="var(--cover-ink)"
        />
      </g>
      {[
        { x: 1180, y: 240, r: -8, hot: false, cls: "" },
        { x: 1330, y: 330, r: 5, hot: true, cls: "cvr-b2" },
        { x: 1210, y: 470, r: -3, hot: false, cls: "cvr-b3" },
        { x: 1380, y: 560, r: 7, hot: false, cls: "cvr-b2" },
        { x: 1230, y: 680, r: -6, hot: false, cls: "" },
      ].map((c, i) => (
        <g key={i} transform={`translate(${c.x} ${c.y}) rotate(${c.r})`}>
          <g className={`cvr-bob ${c.cls}`}>
          <rect
            x="-70"
            y="-48"
            width="140"
            height="96"
            rx="10"
            fill={c.hot ? "var(--accent-yellow)" : "var(--cover-card)"}
            stroke="var(--cover-ink)"
            strokeWidth={c.hot ? 0 : 2.5}
          />
          <rect x="-46" y="-18" width="92" height="8" rx="4" fill={c.hot ? "#1b1917" : "var(--cover-muted)"} />
          <rect x="-46" y="2" width="66" height="8" rx="4" fill={c.hot ? "#1b1917" : "var(--cover-muted)"} />
          </g>
        </g>
      ))}
      <path
        className="cvr-draw cvr-d2"
        d="M1066 454 Q1120 400 1180 330 M1066 454 Q1140 460 1210 470 M1066 454 Q1130 560 1200 620"
        pathLength={1}
        stroke="var(--cover-ink)"
        strokeWidth="2"
        fill="none"
        opacity="0.55"
      />
    </svg>
  );
}

/* ————— RepoPress — branches pass through review gates into one document ————— */

function RepoPressCover() {
  return (
    <svg className="cover-svg" viewBox={VB} aria-hidden="true">
      <Ground />
      {[
        { x: 560, fill: "var(--cover-card)" },
        { x: 800, fill: "var(--accent-yellow)" },
        { x: 1040, fill: "var(--accent-blue)" },
      ].map((g) => (
        <path
          key={g.x}
          d={`M${g.x} 210 L${g.x + 90} 170 L${g.x + 90} 690 L${g.x} 730 Z`}
          fill={g.fill}
          stroke="var(--cover-ink)"
          strokeWidth="2"
        />
      ))}
      {[
        { y: 280, c: "var(--accent-blue)", end: 460 },
        { y: 380, c: "var(--cover-muted)", end: 452 },
        { y: 460, c: "var(--cover-ink)", end: 452, main: true },
        { y: 560, c: "var(--cover-muted)", end: 468 },
        { y: 660, c: "var(--accent-blue)", end: 476 },
      ].map((r, i) => (
        <g key={i}>
          <path
            className={`cvr-draw ${i % 2 ? "cvr-d2" : ""}`}
            d={
              r.main
                ? "M170 460 H1360"
                : `M170 ${r.y} H420 Q450 ${r.y} 450 ${r.y < 460 ? r.y + 30 : r.y - 30} L450 ${r.y < 460 ? 430 : 490} Q450 460 480 460`
            }
            pathLength={1}
            fill="none"
            stroke="var(--cover-ink)"
            strokeWidth={r.main ? 3 : 2}
          />
          <circle cx="170" cy={r.y} r="12" fill={r.c} />
        </g>
      ))}
      <circle
        className="cvr-travel"
        style={{ ["--cvr-travel-x" as string]: "1080px" }}
        cx="280"
        cy="460"
        r="9"
        fill="var(--accent-green)"
      />
      <g>
        <path
          d="M1360 300 H1560 L1610 350 V660 H1360 Z"
          fill="var(--cover-card)"
          stroke="var(--cover-ink)"
          strokeWidth="2.5"
        />
        <path d="M1560 300 V350 H1610 Z" fill="var(--cover-ink)" />
        <rect x="1400" y="420" width="150" height="10" rx="5" fill="var(--cover-muted)" />
        <rect x="1400" y="450" width="120" height="10" rx="5" fill="var(--cover-muted)" />
        <rect x="1400" y="480" width="136" height="10" rx="5" fill="var(--cover-muted)" />
        <circle className="cvr-pulse" cx="1485" cy="580" r="14" fill="var(--accent-green)" />
      </g>
    </svg>
  );
}

/* ————— Merry Magic Mail — a letter becomes a voice ————— */

function MerryMagicMailCover() {
  return (
    <svg className="cover-svg" viewBox={VB} aria-hidden="true">
      <Ground />
      <path
        className="cvr-orbit"
        d="M180 480 Q420 240 700 330 Q950 410 1080 330"
        fill="none"
        stroke="var(--accent-yellow)"
        strokeWidth="3"
        strokeDasharray="4 28"
        strokeLinecap="round"
      />
      <path
        className="cvr-orbit"
        d="M700 640 Q950 720 1180 600 Q1330 520 1470 500"
        fill="none"
        stroke="var(--accent-yellow)"
        strokeWidth="3"
        strokeDasharray="4 28"
        strokeLinecap="round"
      />
      <g>
        <path d="M210 330 L440 190 L670 330 V690 H210 Z" fill="#8e1f1f" />
        <path d="M210 330 L440 470 L670 330" fill="none" stroke="#6e1414" strokeWidth="4" />
        <path d="M210 690 L400 500 M670 690 L480 500" stroke="#6e1414" strokeWidth="4" />
        <path
          d="M300 360 C420 330 520 380 640 420 C760 460 830 470 900 465"
          fill="var(--cover-card)"
          stroke="var(--cover-ink)"
          strokeWidth="2"
        />
        <path
          d="M300 430 C420 400 520 440 640 480 C760 520 830 510 900 500 L900 465 C830 470 760 460 640 420 C520 380 420 330 300 360 Z"
          fill="var(--cover-card)"
        />
      </g>
      {[930, 970, 1010, 1050, 1090, 1130, 1170, 1210, 1250].map((x, i) => {
        const h = [40, 90, 140, 70, 180, 110, 60, 120, 50][i];
        return (
          <rect
            key={x}
            className="cvr-wave"
            style={{ animationDelay: `${i * 0.12}s` }}
            x={x}
            y={470 - h / 2}
            width="16"
            height={h}
            rx="8"
            fill="var(--cover-ink)"
            opacity="0.85"
          />
        );
      })}
      <path
        className="cvr-draw cvr-d2"
        d="M1280 470 H1420"
        pathLength={1}
        stroke="var(--accent-yellow)"
        strokeWidth="3"
        fill="none"
      />
      <circle className="cvr-pulse" cx="1500" cy="470" r="80" fill="var(--accent-green)" />
    </svg>
  );
}

/* ————— Cadenza — a data spine becomes a deck ————— */

function CadenzaCover() {
  return (
    <svg className="cover-svg" viewBox={VB} aria-hidden="true">
      <Ground />
      <g opacity="0.9">
        {[0, 1, 2, 3].map((r) =>
          [0, 1, 2].map((c) => (
            <rect
              key={`${r}-${c}`}
              className={`cvr-pulse ${((r + c) % 3 === 1 && "cvr-p2") || ((r + c) % 3 === 2 && "cvr-p3") || ""}`}
              x={130 + c * 56}
              y={330 + r * 56}
              width="40"
              height="40"
              fill={(r + c) % 4 === 0 ? "#5b45f0" : "var(--cover-muted)"}
              opacity={(r + c) % 4 === 0 ? 1 : 0.6}
            />
          )),
        )}
      </g>
      <path
        className="cvr-draw"
        d="M330 470 H1360"
        pathLength={1}
        stroke="#5b45f0"
        strokeWidth="6"
        fill="none"
      />
      {[
        { x: 560, tilt: -6 },
        { x: 800, tilt: 4 },
        { x: 1040, tilt: -3 },
      ].map((s, i) => (
        <g key={i} transform={`translate(${s.x} 455) rotate(${s.tilt})`}>
          <rect
            x="-95"
            y="-140"
            width="190"
            height="280"
            rx="8"
            fill="var(--cover-card)"
            stroke="var(--cover-ink)"
            strokeWidth="2"
          />
          <rect x="-62" y="-100" width="124" height="10" rx="5" fill="var(--cover-muted)" />
          <rect x="-62" y="-76" width="88" height="10" rx="5" fill="var(--cover-muted)" />
        </g>
      ))}
      <g>
        {[0, 1, 2, 3].map((i) => {
          const h = [70, 130, 100, 190][i];
          return (
            <rect
              key={i}
              className="cvr-grow"
              style={{ animationDelay: `${0.5 + i * 0.15}s` }}
              x={1400 + i * 52}
              y={560 - h}
              width="34"
              height={h}
              fill={["var(--cover-ink)", "#5b45f0", "var(--accent-orange)", "var(--accent-blue)"][i]}
            />
          );
        })}
        <circle cx="1490" cy="300" r="76" fill="#5b45f0" />
        <path d="M1490 300 L1490 224 A76 76 0 0 1 1557 340 Z" fill="var(--accent-orange)" />
        <path d="M1490 300 L1557 340 A76 76 0 0 1 1420 345 Z" fill="var(--cover-ink)" />
      </g>
    </svg>
  );
}

/* ————— CopyCanvas — copy reviewed in the flow of real screens ————— */

function CopyCanvasCover() {
  const frame = (x: number, w = 220, h = 380) => ({ x, y: 264, w, h });
  return (
    <svg className="cover-svg" viewBox={VB} aria-hidden="true">
      <Ground />
      <path
        className="cvr-draw"
        d="M150 454 H1590"
        pathLength={1}
        stroke="var(--cover-ink)"
        strokeWidth="2.5"
        fill="none"
      />
      {[
        frame(170),
        frame(450),
        { x: 730, y: 314, w: 170, h: 280 },
        frame(960),
        { x: 1240, y: 264, w: 260, h: 380 },
      ].map((f, i) => (
        <rect
          key={i}
          x={f.x}
          y={f.y}
          width={f.w}
          height={f.h}
          rx="14"
          fill="var(--cover-card)"
          stroke="var(--cover-ink)"
          strokeWidth="2.5"
        />
      ))}
      {[300, 330, 372, 402, 444, 486, 528, 558].map((y, i) => (
        <rect
          key={y}
          x="196"
          y={y}
          width={i % 3 === 0 ? 168 : 120}
          height="9"
          rx="4.5"
          fill="var(--cover-muted)"
        />
      ))}
      {[
        [476, 300, 60, 60],
        [560, 306, 84, 10],
        [560, 330, 60, 10],
        [476, 396, 90, 64],
        [586, 402, 60, 10],
        [476, 496, 150, 10],
        [476, 522, 110, 10],
        [476, 566, 66, 56],
      ].map(([x, y, w, h], i) => (
        <rect
          key={i}
          x={x}
          y={y}
          width={w}
          height={h}
          fill="none"
          stroke="var(--cover-ink)"
          strokeWidth="2"
          opacity="0.65"
        />
      ))}
      {[350, 400, 450, 500, 550].map((y, i) => (
        <g key={y}>
          <rect x="752" y={y} width="44" height="9" rx="4.5" fill="var(--cover-ink)" opacity="0.7" />
          <path
            d={`M800 ${y + 4} Q820 ${y + 4} 830 ${430 + i * 8}`}
            fill="none"
            stroke="var(--cover-ink)"
            strokeWidth="1.5"
            strokeDasharray="3 5"
            opacity="0.6"
          />
          <rect x="836" y={424 + i * 26} width="40" height="9" rx="4.5" fill="var(--accent-orange)" />
        </g>
      ))}
      <rect className="cvr-sweep" x="990" y="360" width="160" height="120" fill="var(--accent-orange)" />
      {[320, 510, 540].map((y) => (
        <rect key={y} x="990" y={y} width="130" height="9" rx="4.5" fill="var(--cover-muted)" />
      ))}
      <rect className="cvr-sweep" x="1268" y="300" width="204" height="42" fill="var(--accent-orange)" />
      <rect x="1268" y="374" width="150" height="11" rx="5.5" fill="var(--cover-ink)" />
      <rect x="1268" y="402" width="180" height="11" rx="5.5" fill="var(--cover-muted)" />
      <rect x="1268" y="430" width="120" height="11" rx="5.5" fill="var(--cover-muted)" />
      <rect x="1268" y="540" width="90" height="56" fill="var(--cover-muted)" opacity="0.6" />
      <rect x="1382" y="540" width="66" height="56" fill="var(--cover-ink)" />
      <g className="cvr-nudge">
        <circle cx="1552" cy="330" r="34" fill="var(--accent-orange)" />
        <path d="M1546 316 L1546 352 L1556 344 L1564 358 L1572 353 L1564 340 L1576 338 Z" fill="var(--cover-ink)" />
      </g>
    </svg>
  );
}

/* ————— Turbocamp — modular systems feed one campsite hub ————— */

function TurbocampCover() {
  return (
    <svg className="cover-svg" viewBox={VB} aria-hidden="true">
      <Ground />
      {[
        { x: 240, y: 250, cls: "" },
        { x: 240, y: 460, cls: "cvr-b2" },
        { x: 240, y: 670, cls: "cvr-b3" },
      ].map((b, i) => (
        <g key={i} transform={`translate(${b.x} ${b.y})`}>
          <g className={`cvr-bob ${b.cls}`}>
          <rect x="-90" y="-56" width="180" height="112" rx="10" fill="var(--cover-card)" stroke="var(--cover-ink)" strokeWidth="2.5" />
          <rect x="-58" y="-20" width="116" height="10" rx="5" fill="var(--cover-muted)" />
          <rect x="-58" y="6" width="80" height="10" rx="5" fill="var(--cover-muted)" />
          <circle cx="-58" cy="-34" r="7" fill={["var(--accent-blue)", "var(--accent-orange)", "var(--accent-green)"][i]} />
          </g>
        </g>
      ))}
      {[250, 460, 670].map((y, i) => (
        <path
          key={y}
          className={`cvr-draw ${i === 1 ? "cvr-d2" : i === 2 ? "cvr-d3" : ""}`}
          d={`M330 ${y} H560 Q600 ${y} 600 ${y < 460 ? y + 60 : y === 460 ? y : y - 60} L600 ${y < 460 ? 400 : y === 460 ? 460 : 520} Q600 460 640 460 H700`}
          pathLength={1}
          fill="none"
          stroke="var(--cover-ink)"
          strokeWidth="2.5"
        />
      ))}
      <g className="cvr-breathe">
        <path d="M900 250 L1120 660 H680 Z" fill="#d4ff00" stroke="var(--cover-ink)" strokeWidth="3" />
        <path d="M900 360 L1010 660 H790 Z" fill="var(--cover-ink)" />
      </g>
      <path
        className="cvr-draw cvr-d2"
        d="M1120 460 H1500"
        pathLength={1}
        stroke="var(--cover-ink)"
        strokeWidth="3"
        fill="none"
      />
      <circle
        className="cvr-travel"
        style={{ ["--cvr-travel-x" as string]: "360px" }}
        cx="1140"
        cy="460"
        r="9"
        fill="#d4ff00"
        stroke="var(--cover-ink)"
        strokeWidth="1.5"
      />
      <circle className="cvr-pulse" cx="1540" cy="460" r="16" fill="var(--accent-green)" />
    </svg>
  );
}

/* ————— TripleWave — three waves carry documents onto letterhead ————— */

function TripleWaveCover() {
  return (
    <svg className="cover-svg" viewBox={VB} aria-hidden="true">
      <Ground />
      <path
        className="cvr-morph-a"
        d="M 120 430 C 260 300, 380 560, 520 440 C 640 340, 760 540, 880 450 C 960 395, 1060 470, 1240 448"
        fill="none"
        stroke="var(--accent-green)"
        strokeWidth="12"
        strokeLinecap="round"
      />
      <path
        className="cvr-morph-b"
        d="M 120 520 C 280 620, 400 380, 560 470 C 700 545, 820 400, 940 460 C 1040 505, 1120 450, 1240 462"
        fill="none"
        stroke="var(--accent-navy)"
        strokeWidth="8"
        strokeLinecap="round"
        opacity="0.8"
      />
      <path
        d="M 120 350 C 300 450, 460 300, 620 420 C 760 520, 900 420, 1020 455 C 1100 478, 1160 452, 1240 455"
        fill="none"
        stroke="var(--cover-ink)"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <circle cx="120" cy="430" r="9" fill="var(--accent-green)" />
      <circle cx="120" cy="520" r="7.5" fill="var(--accent-navy)" />
      <circle cx="120" cy="350" r="6.5" fill="var(--cover-ink)" />
      {[
        { x: 330, y: 400, r: -8, f: "var(--accent-green)", cls: "" },
        { x: 560, y: 455, r: 5, f: "var(--cover-card)", cls: "cvr-b2", stroke: true },
        { x: 780, y: 490, r: 6, f: "var(--accent-navy)", cls: "cvr-b3" },
        { x: 1000, y: 455, r: -4, f: "var(--cover-card)", cls: "cvr-b2", stroke: true },
      ].map((b, i) => (
        <g key={i} transform={`translate(${b.x} ${b.y}) rotate(${b.r})`}>
          <g className={`cvr-bob ${b.cls}`}>
          <rect
            x="-26"
            y="-34"
            width="52"
            height="68"
            fill={b.f}
            stroke={b.stroke ? "var(--cover-ink)" : "none"}
            strokeWidth="2.5"
          />
          <rect x="-14" y="-14" width="28" height="5" fill={b.stroke ? "var(--cover-muted)" : "var(--cover-ground)"} />
          <rect x="-14" y="-2" width="20" height="5" fill={b.stroke ? "var(--cover-muted)" : "var(--cover-ground)"} />
          </g>
        </g>
      ))}
      <rect x="1320" y="180" width="310" height="440" fill="none" stroke="var(--cover-ink)" strokeWidth="2" opacity="0.3" transform="translate(24 -16)" />
      <rect x="1320" y="180" width="310" height="440" fill="var(--cover-card)" stroke="var(--cover-ink)" strokeWidth="2.5" />
      <rect x="1356" y="216" width="22" height="22" fill="var(--accent-green)" />
      <rect x="1390" y="220" width="72" height="6" rx="3" fill="var(--cover-ink)" />
      <line x1="1356" y1="262" x2="1594" y2="262" stroke="var(--cover-ink)" strokeWidth="1.8" />
      {[292, 314, 336, 358, 380, 418, 440].map((y, i) => (
        <rect
          key={y}
          x="1356"
          y={y}
          width={[180, 238, 216, 238, 196, 238, 150][i]}
          height="7"
          rx="3.5"
          fill={i === 3 ? "var(--accent-green)" : "var(--cover-muted)"}
        />
      ))}
      <path className="cvr-pulse" d="M1606 352 L1616 352 L1616 396 L1606 396" fill="none" stroke="var(--accent-green)" strokeWidth="3" />
      <path
        d="M1356 548 C1372 534 1386 556 1402 540 C1414 528 1424 544 1436 536"
        fill="none"
        stroke="var(--cover-ink)"
        strokeWidth="2.5"
      />
      <rect x="1356" y="566" width="92" height="5" rx="2.5" fill="var(--cover-muted)" />
    </svg>
  );
}

export const projectCovers: Partial<
  Record<string, () => React.ReactElement>
> = {
  "domain-collective": DomainCollectiveCover,
  sparkle: SparkleCover,
  repopress: RepoPressCover,
  "merry-magic-mail": MerryMagicMailCover,
  cadenza: CadenzaCover,
  copycanvas: CopyCanvasCover,
  turbocamp: TurbocampCover,
  triplewave: TripleWaveCover,
};
