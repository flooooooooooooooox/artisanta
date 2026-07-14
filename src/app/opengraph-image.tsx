import { ImageResponse } from "next/og";

export const alt = "Propre Éclat — Nettoyage professionnel à Caen";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "linear-gradient(135deg, #0f3a5c 0%, #16537e 100%)",
          color: "#faf6ec",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            fontSize: 30,
            fontWeight: 700,
            letterSpacing: 4,
            textTransform: "uppercase",
            color: "#2f96d8",
          }}
        >
          Nettoyage professionnel · Caen
        </div>
        <div
          style={{
            marginTop: 24,
            fontSize: 92,
            fontWeight: 800,
            lineHeight: 1.05,
          }}
        >
          Propre Éclat
        </div>
        <div style={{ marginTop: 20, fontSize: 44, color: "rgba(250,246,236,0.85)" }}>
          La différence de propreté
        </div>
        <div style={{ marginTop: 40, fontSize: 30, color: "rgba(250,246,236,0.7)" }}>
          Vitres · Bureaux · Copropriété · Fin de chantier — Caen + 20 km
        </div>
      </div>
    ),
    { ...size }
  );
}
