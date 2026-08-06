import type { Topology } from "@/lib/services/types";
import { cn } from "@/lib/utils";

/**
 * The schematic on every service page, generated from `topology` data.
 *
 * Same drawing convention as the home page: orthogonal routing, hairline
 * strokes, junction dots only at true T-junctions, CSS-animated packets on a
 * normalised pathLength. Two hand-laid variants — left-to-right on wide
 * screens, stacked on narrow — because scaling an 880-unit drawing down to a
 * 343px phone renders the labels illegible.
 *
 * Costs zero JavaScript; every animation is CSS.
 */

const stageCount = 3;

function Box({
  x,
  y,
  w,
  h,
  kind,
  name,
  tone = "default",
  fsKind = 8,
  fsName = 13,
}: {
  x: number;
  y: number;
  w: number;
  h: number;
  kind: string;
  name: string;
  tone?: "default" | "human";
  fsKind?: number;
  fsName?: number;
}) {
  return (
    <g>
      <rect
        x={x}
        y={y}
        width={w}
        height={h}
        rx="7"
        className={cn("fill-surface", tone === "human" ? "stroke-emerald/45" : "stroke-line-strong")}
        strokeWidth="1"
      />
      {tone === "human" ? (
        <rect x={x} y={y + 12} width="2" height={h - 24} className="fill-emerald" />
      ) : null}
      <text
        x={x + 14}
        y={y + 19}
        fontSize={fsKind}
        letterSpacing="1.1"
        className={tone === "human" ? "fill-emerald" : "fill-ink-faint"}
      >
        {kind}
      </text>
      <text x={x + 14} y={y + 36} fontSize={fsName} fontWeight="500" className="fill-ink">
        {name}
      </text>
    </g>
  );
}

function Wide({ t, className }: { t: Topology; className?: string }) {
  const busX = 640;
  const rowY = [50, 118, 186, 254];
  const humanY = 340;
  const midY = 218;

  return (
    <svg viewBox="0 0 880 392" className={cn("h-auto w-full", className)} fill="none" aria-hidden>
      <g className="stroke-line-strong" strokeWidth="1">
        <path d={`M170 ${midY}H210`} />
        <path d={`M420 ${midY}H${busX}`} />
        <path d={`M${busX} ${rowY[0]}V${humanY}`} />
        {[...rowY, humanY].map((y) => (
          <path key={y} d={`M${busX} ${y}H700`} />
        ))}
      </g>

      <g className="fill-line-strong">
        <circle cx={busX} cy={midY} r="2.4" />
        {rowY.slice(1).map((y) => (
          <circle key={y} cx={busX} cy={y} r="2.4" />
        ))}
      </g>

      <g className="stroke-emerald" strokeWidth="2" strokeLinecap="round" opacity="0.9">
        <path d={`M170 ${midY}H210`} pathLength={1} className="packet" />
        {[...rowY, humanY].map((y, i) => (
          <path
            key={y}
            d={`M420 ${midY}H${busX}V${y}H700`}
            pathLength={1}
            className="packet"
            style={{ ["--packet-delay" as string]: `${(i * 0.5 + 0.5).toFixed(2)}s` }}
          />
        ))}
      </g>

      <Box x={0} y={midY - 28} w={170} h={56} kind={t.entry.kind} name={t.entry.name} />

      <g>
        <rect
          x={210}
          y={140}
          width={210}
          height={156}
          rx="9"
          className="fill-navy-soft stroke-navy/35"
          strokeWidth="1"
        />
        <text x={230} y={168} fontSize="8" letterSpacing="1.1" className="fill-navy">
          {t.core.kind}
        </text>
        <text x={230} y={190} fontSize="15" fontWeight="500" className="fill-ink">
          {t.core.name}
        </text>
        {t.core.stages.slice(0, stageCount).map((stage, i) => (
          <g key={stage}>
            <rect
              x={230}
              y={208 + i * 28}
              width={170}
              height={22}
              rx="5"
              className="fill-surface stroke-line-strong"
              strokeWidth="1"
            />
            <text x={242} y={223 + i * 28} fontSize="10.5" className="fill-ink-muted">
              {stage}
            </text>
          </g>
        ))}
      </g>

      {t.endpoints.map((endpoint, i) => (
        <Box
          key={endpoint.name}
          x={700}
          y={(rowY[i] ?? 0) - 26}
          w={180}
          h={52}
          kind={endpoint.kind}
          name={endpoint.name}
          fsName={12}
        />
      ))}
      <Box
        x={700}
        y={humanY - 26}
        w={180}
        h={52}
        kind={t.escalation.kind}
        name={t.escalation.name}
        tone="human"
        fsName={12}
      />
    </svg>
  );
}

function Narrow({ t, className }: { t: Topology; className?: string }) {
  const cx = 172;
  const colCx = [87, 257];
  const bus = [298, 426];
  const rowTop = [326, 454];

  return (
    <svg
      viewBox="0 0 344 600"
      className={cn("mx-auto h-auto w-full max-w-[344px]", className)}
      fill="none"
      aria-hidden
    >
      <g className="stroke-line-strong" strokeWidth="1">
        <path d={`M${cx} 46V78`} />
        <path d={`M${cx} 266V${bus[1]}`} />
        {bus.map((y, r) => (
          <g key={y}>
            <path d={`M${colCx[0]} ${y}H${colCx[1]}`} />
            {colCx.map((x) => (
              <path key={x} d={`M${x} ${y}V${rowTop[r]}`} />
            ))}
          </g>
        ))}
        <path d={`M${cx} ${bus[1]}V546`} />
      </g>

      <g className="fill-line-strong">
        {bus.map((y) => (
          <circle key={y} cx={cx} cy={y} r="2.4" />
        ))}
      </g>

      <g className="stroke-emerald" strokeWidth="2" strokeLinecap="round" opacity="0.9">
        <path d={`M${cx} 46V78`} pathLength={1} className="packet" />
        {t.endpoints.map((endpoint, i) => {
          const r = Math.floor(i / 2);
          const c = i % 2;
          return (
            <path
              key={endpoint.name}
              d={`M${cx} 266V${bus[r]}H${colCx[c]}V${rowTop[r]}`}
              pathLength={1}
              className="packet"
              style={{ ["--packet-delay" as string]: `${(i * 0.5 + 0.4).toFixed(2)}s` }}
            />
          );
        })}
        <path
          d={`M${cx} 266V546`}
          pathLength={1}
          className="packet"
          style={{ ["--packet-delay" as string]: "2.4s" }}
        />
      </g>

      <Box x={42} y={0} w={260} h={46} kind={t.entry.kind} name={t.entry.name} fsName={12.5} />

      <g>
        <rect
          x={12}
          y={78}
          width={320}
          height={188}
          rx="9"
          className="fill-navy-soft stroke-navy/35"
          strokeWidth="1"
        />
        <text x={30} y={104} fontSize="8" letterSpacing="1.1" className="fill-navy">
          {t.core.kind}
        </text>
        <text x={30} y={126} fontSize="14" fontWeight="500" className="fill-ink">
          {t.core.name}
        </text>
        {t.core.stages.slice(0, stageCount).map((stage, i) => (
          <g key={stage}>
            <rect
              x={30}
              y={144 + i * 34}
              width={284}
              height={26}
              rx="5"
              className="fill-surface stroke-line-strong"
              strokeWidth="1"
            />
            <text x={44} y={161 + i * 34} fontSize="11" className="fill-ink-muted">
              {stage}
            </text>
          </g>
        ))}
      </g>

      {t.endpoints.map((endpoint, i) => {
        const r = Math.floor(i / 2);
        const c = i % 2;
        return (
          <Box
            key={endpoint.name}
            x={(colCx[c] ?? 0) - 73}
            y={rowTop[r] ?? 0}
            w={146}
            h={46}
            kind={endpoint.kind}
            name={endpoint.name}
            fsName={10.5}
            fsKind={7}
          />
        );
      })}
      <Box
        x={42}
        y={546}
        w={260}
        h={46}
        kind={t.escalation.kind}
        name={t.escalation.name}
        tone="human"
        fsName={12.5}
      />
    </svg>
  );
}

export function ServiceTopology({ topology }: { topology: Topology }) {
  return (
    <figure className="relative">
      <div className="relative overflow-hidden rounded-xl border border-line bg-canvas shadow-panel">
        <div className="flex items-center justify-between gap-4 border-b border-line bg-surface px-4 py-3 sm:px-5">
          <div className="flex items-center gap-2.5">
            <span className="relative flex size-1.5">
              <span className="absolute inset-0 rounded-full bg-emerald breathe" />
              <span className="relative size-1.5 rounded-full bg-emerald" />
            </span>
            <span className="label text-ink-muted">{topology.core.name}</span>
          </div>
          <span className="label hidden text-ink-faint sm:block">{topology.caption}</span>
        </div>

        <div className="relative px-4 py-6 sm:px-6 sm:py-8">
          <div aria-hidden className="dot-field absolute inset-0" />
          <div className="relative">
            <Wide t={topology} className="hidden lg:block" />
            <Narrow t={topology} className="lg:hidden" />
          </div>
        </div>
      </div>

      <figcaption className="sr-only">{topology.description}</figcaption>
    </figure>
  );
}
