import { readFileSync } from "node:fs";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

export const alt = `${site.name} — ${site.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/**
 * The card sits on navy, so it takes the white mark. Satori cannot resolve a
 * relative URL at render time, so the file is inlined as a data URI — read once
 * at module scope rather than per request.
 */
const mark = `data:image/png;base64,${readFileSync(
  join(process.cwd(), "public/brand/araxys-mark-white.png"),
).toString("base64")}`;

/** Generated at build time from the same mark the site header uses. */
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#14213D",
          padding: "72px 80px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={mark} width={56} height={56} alt="" />
          <div
            style={{
              fontSize: 40,
              fontWeight: 600,
              color: "#FAFAF8",
              letterSpacing: "-0.03em",
            }}
          >
            Araxys
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: 66,
              lineHeight: 1.05,
              fontWeight: 600,
              color: "#FAFAF8",
              letterSpacing: "-0.035em",
              maxWidth: 940,
            }}
          >
            Engineering AI Systems That Actually Transform Businesses
          </div>
          <div
            style={{
              marginTop: 34,
              display: "flex",
              alignItems: "center",
              gap: 16,
              fontSize: 24,
              color: "#9FB2D6",
            }}
          >
            <div style={{ width: 40, height: 2, background: "#4CC48F" }} />
            <div>AI Engineering &amp; Automation</div>
          </div>
        </div>
      </div>
    ),
    size,
  );
}
