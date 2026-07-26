import { cn } from "@/lib/utils";

/**
 * Runtime topology, drawn as an engineering schematic rather than as artwork.
 *
 * Orthogonal routing on a shared vertical trunk with one horizontal bus per
 * tier — the same convention an electrical or network drawing uses. Junction
 * dots mark true T-junctions only; corners stay bare, as they should.
 *
 * Layout is generated from a config so the wide (4-column) and narrow
 * (2-column) variants stay in exact geometric agreement. Every animation is
 * CSS on a normalised pathLength, so this whole visual costs zero JavaScript.
 */

type Kind = "SYSTEM" | "CHANNEL" | "GATE";

const endpoints: { name: string; kind: Kind }[] = [
  { name: "CRM", kind: "SYSTEM" },
  { name: "ERP", kind: "SYSTEM" },
  { name: "Database", kind: "SYSTEM" },
  { name: "APIs", kind: "SYSTEM" },
  { name: "Email", kind: "CHANNEL" },
  { name: "Slack", kind: "CHANNEL" },
  { name: "Calendar", kind: "CHANNEL" },
  { name: "Human Approval", kind: "GATE" },
];

const stages = ["Retrieve", "Reason", "Act"];

type Config = {
  cols: 2 | 4;
  width: number;
  topPad: number;
  userW: number;
  userH: number;
  agentW: number;
  agentH: number;
  nodeW: number;
  nodeH: number;
  gapX: number;
  gapY: number;
  drop: number;
  linkA: number;
  linkB: number;
  bottomPad: number;
  fsKind: number;
  fsName: number;
  fsAgent: number;
};

const wide: Config = {
  cols: 4,
  width: 600,
  topPad: 4,
  userW: 132,
  userH: 42,
  agentW: 264,
  agentH: 100,
  nodeW: 118,
  nodeH: 46,
  gapX: 24,
  gapY: 70,
  drop: 34,
  linkA: 34,
  linkB: 34,
  bottomPad: 8,
  fsKind: 7.5,
  fsName: 12.5,
  fsAgent: 14,
};

const narrow: Config = {
  cols: 2,
  width: 344,
  topPad: 2,
  userW: 150,
  userH: 40,
  agentW: 300,
  agentH: 92,
  nodeW: 152,
  nodeH: 44,
  gapX: 24,
  gapY: 52,
  drop: 26,
  linkA: 28,
  linkB: 30,
  bottomPad: 6,
  fsKind: 8.5,
  fsName: 14,
  fsAgent: 15,
};

function geometry(c: Config) {
  const rows = endpoints.length / c.cols;
  const center = c.width / 2;

  const userY = c.topPad;
  const userBottom = userY + c.userH;
  const agentY = userBottom + c.linkA;
  const agentBottom = agentY + c.agentH;

  const firstRowTop = agentBottom + c.linkB + c.drop;
  const rowTop = (r: number) => firstRowTop + r * (c.nodeH + c.gapY);
  const busY = (r: number) => rowTop(r) - c.drop;

  const contentW = c.cols * c.nodeW + (c.cols - 1) * c.gapX;
  const padX = (c.width - contentW) / 2;
  const nodeX = (col: number) => padX + col * (c.nodeW + c.gapX);
  const cx = (col: number) => nodeX(col) + c.nodeW / 2;

  const height = rowTop(rows - 1) + c.nodeH + c.bottomPad;

  return { rows, center, userY, userBottom, agentY, agentBottom, rowTop, busY, nodeX, cx, height };
}

function Diagram({ config, className }: { config: Config; className?: string }) {
  const g = geometry(config);
  const {
    cols,
    width,
    userW,
    userH,
    agentW,
    agentH,
    nodeW,
    nodeH,
    fsKind,
    fsName,
    fsAgent,
  } = config;

  const rowIndices = Array.from({ length: g.rows }, (_, r) => r);
  const colIndices = Array.from({ length: cols }, (_, i) => i);
  const agentX = g.center - agentW / 2;
  const lastBusY = g.busY(g.rows - 1);

  // Interior columns are the only true T-junctions on a bus.
  const interior = colIndices.filter((i) => i > 0 && i < cols - 1);

  return (
    <svg
      viewBox={`0 0 ${width} ${g.height}`}
      className={cn("h-auto w-full", className)}
      fill="none"
      aria-hidden
    >
      {/* ---------------------------------------------- static wiring */}
      <g className="stroke-line-strong" strokeWidth="1">
        <path d={`M${g.center} ${g.userBottom}V${g.agentY}`} />
        <path d={`M${g.center} ${g.agentBottom}V${lastBusY}`} />
        {rowIndices.map((r) => (
          <g key={`wire-${r}`}>
            <path d={`M${g.cx(0)} ${g.busY(r)}H${g.cx(cols - 1)}`} />
            {colIndices.map((c) => (
              <path key={c} d={`M${g.cx(c)} ${g.busY(r)}V${g.rowTop(r)}`} />
            ))}
          </g>
        ))}
      </g>

      {/* ---------------------------------------------- junction dots */}
      <g className="fill-line-strong">
        {rowIndices.map((r) => (
          <g key={`dot-${r}`}>
            <circle cx={g.center} cy={g.busY(r)} r="2.4" />
            {interior.map((c) => (
              <circle key={c} cx={g.cx(c)} cy={g.busY(r)} r="2.4" />
            ))}
          </g>
        ))}
      </g>

      {/* ---------------------------------------------- travelling packets
          Each route is a full path from the agent to one endpoint. Transparent
          base stroke, so overlapping routes never darken the static wiring.
          pathLength="1" normalises speed across routes of different lengths. */}
      <g
        className="stroke-emerald"
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0.9"
      >
        <path
          d={`M${g.center} ${g.userBottom}V${g.agentY}`}
          pathLength={1}
          className="packet"
        />
        {endpoints.map((endpoint, i) => {
          const r = Math.floor(i / cols);
          const c = i % cols;
          return (
            <path
              key={endpoint.name}
              d={`M${g.center} ${g.agentBottom}V${g.busY(r)}H${g.cx(c)}V${g.rowTop(r)}`}
              pathLength={1}
              className="packet"
              style={{ ["--packet-delay" as string]: `${(i * 0.42).toFixed(2)}s` }}
            />
          );
        })}
      </g>

      {/* ---------------------------------------------- entry node */}
      <g>
        <rect
          x={g.center - userW / 2}
          y={g.userY}
          width={userW}
          height={userH}
          rx="7"
          className="fill-surface stroke-line-strong"
          strokeWidth="1"
        />
        <text
          x={g.center}
          y={g.userY + 16}
          textAnchor="middle"
          fontSize={fsKind}
          letterSpacing="1.1"
          className="fill-ink-faint"
        >
          ENTRY POINT
        </text>
        <text
          x={g.center}
          y={g.userY + 31}
          textAnchor="middle"
          fontSize={fsName}
          fontWeight="500"
          className="fill-ink"
        >
          User
        </text>
      </g>

      {/* ---------------------------------------------- agent layer */}
      <g>
        <rect
          x={agentX}
          y={g.agentY}
          width={agentW}
          height={agentH}
          rx="9"
          className="fill-navy-soft stroke-navy/35"
          strokeWidth="1"
        />
        <text
          x={agentX + 18}
          y={g.agentY + 21}
          fontSize={fsKind}
          letterSpacing="1.1"
          className="fill-navy"
        >
          ORCHESTRATION
        </text>
        <text
          x={agentX + 18}
          y={g.agentY + 42}
          fontSize={fsAgent}
          fontWeight="500"
          className="fill-ink"
        >
          Araxys Agent Layer
        </text>
        <g>
          {stages.map((stage, i) => {
            const pillW = (agentW - 36 - (stages.length - 1) * 8) / stages.length;
            const x = agentX + 18 + i * (pillW + 8);
            return (
              <g key={stage}>
                <rect
                  x={x}
                  y={g.agentY + agentH - 34}
                  width={pillW}
                  height={22}
                  rx="5"
                  className="fill-surface stroke-line-strong"
                  strokeWidth="1"
                />
                <text
                  x={x + pillW / 2}
                  y={g.agentY + agentH - 19}
                  textAnchor="middle"
                  fontSize={fsKind + 2}
                  className="fill-ink-muted"
                >
                  {stage}
                </text>
              </g>
            );
          })}
        </g>
      </g>

      {/* ---------------------------------------------- endpoints */}
      {endpoints.map((endpoint, i) => {
        const r = Math.floor(i / cols);
        const c = i % cols;
        const x = g.nodeX(c);
        const y = g.rowTop(r);
        const isGate = endpoint.kind === "GATE";

        return (
          <g key={endpoint.name}>
            <rect
              x={x}
              y={y}
              width={nodeW}
              height={nodeH}
              rx="7"
              className={cn(
                "fill-surface",
                isGate ? "stroke-emerald/45" : "stroke-line-strong",
              )}
              strokeWidth="1"
            />
            {isGate ? (
              <rect x={x} y={y + 12} width="2" height={nodeH - 24} className="fill-emerald" />
            ) : null}
            <text
              x={x + 14}
              y={y + 18}
              fontSize={fsKind}
              letterSpacing="1.1"
              className={isGate ? "fill-emerald" : "fill-ink-faint"}
            >
              {endpoint.kind}
            </text>
            <text
              x={x + 14}
              y={y + 34}
              fontSize={fsName}
              fontWeight="500"
              className="fill-ink"
            >
              {endpoint.name}
            </text>
            <circle
              cx={x + nodeW - 13}
              cy={y + 15}
              r="2.4"
              className="fill-emerald breathe"
              style={{ ["--packet-delay" as string]: `${(i * 0.42 + 1.5).toFixed(2)}s` }}
            />
          </g>
        );
      })}
    </svg>
  );
}

export function ArchitectureDiagram() {
  return (
    <figure className="relative">
      <div className="relative overflow-hidden rounded-xl border border-line bg-canvas shadow-panel">
        {/* header strip */}
        <div className="flex items-center justify-between gap-4 border-b border-line bg-surface px-4 py-3 sm:px-5">
          <div className="flex items-center gap-2.5">
            <span className="relative flex size-1.5">
              <span className="absolute inset-0 rounded-full bg-emerald breathe" />
              <span className="relative size-1.5 rounded-full bg-emerald" />
            </span>
            <span className="label text-ink-muted">Runtime Topology</span>
          </div>
          <span className="label hidden text-ink-faint sm:block">8 Systems · 1 Human Gate</span>
        </div>

        <div className="relative px-4 py-6 sm:px-6 sm:py-8">
          <div aria-hidden className="dot-field absolute inset-0" />
          <div className="relative">
            <Diagram config={wide} className="hidden md:block" />
            <Diagram config={narrow} className="mx-auto max-w-[344px] md:hidden" />
          </div>
        </div>
      </div>

      {/* Text alternative: the diagram is decorative markup, this is the content. */}
      <figcaption className="sr-only">
        System architecture: a user request enters the Araxys agent layer, which retrieves, reasons
        and acts. From there the system connects to a CRM, ERP, database and APIs, plus email, Slack
        and calendar channels, with a human approval gate before any action that requires sign-off.
      </figcaption>
    </figure>
  );
}
