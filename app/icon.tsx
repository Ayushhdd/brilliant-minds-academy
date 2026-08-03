import { ImageResponse } from "next/og";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    <div
      style={{
        width: "64px",
        height: "64px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        border: "4px solid #d9aa4d",
        borderRadius: "50%",
        background: "#071b34",
        color: "#fffdf8",
        fontFamily: "serif",
        fontSize: "30px",
        fontWeight: 800,
        letterSpacing: "-2px",
      }}
    >
      <span>BM</span>
    </div>,
    size,
  );
}
