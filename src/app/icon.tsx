import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#1a3a2a",
          color: "#f7f5f0",
          fontSize: 16,
          fontWeight: 600,
        }}
      >
        GN
      </div>
    ),
    { ...size }
  );
}
