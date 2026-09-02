import { ImageResponse } from "next/og";

export const alt =
  "Choko Delights - Luxury Chocolate Hampers & Premium Gifting";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Brand share card, generated at build time (no external assets needed).
export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background:
            "linear-gradient(135deg, #3b2a24 0%, #2b1e19 55%, #3b2a24 100%)",
          color: "#fbf4e3",
          position: "relative",
          fontFamily: "sans-serif",
        }}
      >
        {/* Gold frame */}
        <div
          style={{
            position: "absolute",
            top: 36,
            left: 36,
            right: 36,
            bottom: 36,
            border: "2px solid rgba(199,151,64,0.55)",
            borderRadius: 24,
            display: "flex",
          }}
        />
        {/* Glow */}
        <div
          style={{
            position: "absolute",
            top: -120,
            right: -120,
            width: 420,
            height: 420,
            borderRadius: 420,
            background: "rgba(235,178,66,0.20)",
            display: "flex",
          }}
        />

        <div
          style={{
            fontSize: 26,
            letterSpacing: 8,
            textTransform: "uppercase",
            color: "#dda93e",
            display: "flex",
          }}
        >
          Premium Luxury Gifting
        </div>

        <div
          style={{
            marginTop: 14,
            fontSize: 104,
            fontWeight: 700,
            color: "#ebb242",
            display: "flex",
          }}
        >
          Choko Delights
        </div>

        <div
          style={{
            marginTop: 10,
            fontSize: 40,
            color: "#fbf4e3",
            display: "flex",
            textAlign: "center",
          }}
        >
          Handcrafted Chocolates & Couture Hampers
        </div>

        <div
          style={{
            marginTop: 40,
            fontSize: 24,
            letterSpacing: 4,
            textTransform: "uppercase",
            color: "rgba(251,244,227,0.72)",
            display: "flex",
          }}
        >
          Weddings · Festivals · Corporate · PAN India
        </div>
      </div>
    ),
    { ...size }
  );
}
