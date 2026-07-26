import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

export const alt = `${site.name} — ${site.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const mark = `data:image/svg+xml;utf8,${encodeURIComponent(
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="56" height="56"><rect width="32" height="32" rx="8" fill="#FAFAF8"/><path d="M7 22h6v-6h6v-6h6" fill="none" stroke="#14213D" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
)}`;

/** Generated at build time — no binary asset to keep in sync with the brand. */
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
