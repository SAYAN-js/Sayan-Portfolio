import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/site";

export const alt = `${siteConfig.name} portfolio`;
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          background: "#050508",
          color: "#fafafa",
          padding: 72,
          fontFamily: "Arial, sans-serif",
        }}
      >
        <div
          style={{
            color: "#a78bfa",
            fontSize: 28,
            letterSpacing: 6,
            textTransform: "uppercase",
          }}
        >
          Portfolio
        </div>
        <div
          style={{
            marginTop: 28,
            fontSize: 82,
            fontWeight: 700,
            lineHeight: 1,
          }}
        >
          {siteConfig.name}
        </div>
        <div
          style={{
            marginTop: 28,
            maxWidth: 920,
            color: "#d4d4d8",
            fontSize: 38,
            lineHeight: 1.25,
          }}
        >
          Software Engineer building full-stack web applications with modern
          frontend and backend fundamentals.
        </div>
      </div>
    ),
    size
  );
}
