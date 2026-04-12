import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useLang } from "../LangContext";

function QRCode() {
  const cellSize = 8;
  const cells = 20;
  const seed = [
    1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 0, 0, 0,
    0, 1, 0, 0, 1, 0, 1, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 0,
    1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 0, 1, 1, 0, 1, 0, 1,
    1, 1, 0, 1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 0, 1, 0,
    1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 1, 1, 1, 1,
    1, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1,
    0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 1, 0, 1, 1, 1, 0, 0, 1, 1, 1, 0, 1,
    1, 0, 1, 1, 1, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 1, 0, 0, 1, 0, 0, 0,
    1, 1, 0, 1, 1, 1, 1, 0, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 0, 0, 0, 1, 0, 0,
    0, 0, 1, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1,
    0, 1, 1, 1, 1, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1,
    0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0,
    1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 1, 1,
    0, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 0,
    1, 0, 0, 0, 1, 1, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 1, 1, 0, 0,
    0, 0, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0,
  ];
  const pattern = [];
  for (let r = 0; r < cells; r++)
    for (let c = 0; c < cells; c++)
      if (seed[r * cells + c])
        pattern.push({ x: c * cellSize, y: r * cellSize });
  return (
    <div
      style={{
        padding: "24px",
        background: "#FFFFFF",
        borderRadius: "4px",
        display: "inline-block",
        border: "0.5px solid rgba(201,169,110,0.3)",
      }}
    >
      <svg
        width={160}
        height={160}
        viewBox={`0 0 ${cells * cellSize} ${cells * cellSize}`}
      >
        {pattern.map((p, i) => (
          <rect
            key={i}
            x={p.x}
            y={p.y}
            width={cellSize - 1}
            height={cellSize - 1}
            fill="#0A0A0F"
          />
        ))}
      </svg>
      <div
        style={{
          textAlign: "center",
          marginTop: "12px",
          fontFamily: "'DM Sans', sans-serif",
          fontSize: "10px",
          fontWeight: 500,
          letterSpacing: "0.15em",
          textTransform: "uppercase",
          color: "#0A0A0F",
        }}
      >
        LIVRR.APP
      </div>
    </div>
  );
}

function StoreBtn({ icon, store, sub }) {
  return (
    <button
      style={{
        display: "flex",
        alignItems: "center",
        gap: "16px",
        padding: "16px 28px",
        borderRadius: "4px",
        background: "#0A0A0F",
        border: "1px solid rgba(201,169,110,0.3)",
        cursor: "pointer",
        transition: "all 0.3s",
        minWidth: "190px",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = "#C9A96E";
        e.currentTarget.style.background = "#111118";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = "rgba(201,169,110,0.3)";
        e.currentTarget.style.background = "#0A0A0F";
      }}
    >
      <span style={{ fontSize: "24px" }}>{icon}</span>
      <div style={{ textAlign: "left" }}>
        <div
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "10px",
            color: "rgba(255,255,255,0.35)",
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            marginBottom: "3px",
          }}
        >
          {sub}
        </div>
        <div
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "16px",
            fontWeight: 500,
            color: "#FFFFFF",
          }}
        >
          {store}
        </div>
      </div>
    </button>
  );
}

export default function Download() {
  const { t } = useLang();
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  return (
    <section
      id="download"
      style={{ padding: "140px 80px", background: "#FAF8F5" }}
    >
      <div ref={ref} style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "100px",
            alignItems: "center",
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9 }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "14px",
                marginBottom: "24px",
              }}
            >
              <div
                style={{ width: "32px", height: "1px", background: "#C9A96E" }}
              />
              <span
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "11px",
                  fontWeight: 500,
                  letterSpacing: "0.22em",
                  textTransform: "uppercase",
                  color: "#C9A96E",
                }}
              >
                {t.download.tag}
              </span>
            </div>
            <h2
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "clamp(44px, 5vw, 68px)",
                fontWeight: 300,
                color: "#0A0A0F",
                lineHeight: 1.05,
                whiteSpace: "pre-line",
                marginBottom: "24px",
              }}
            >
              {t.download.title}
            </h2>
            <p
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "16px",
                fontWeight: 300,
                color: "rgba(10,10,15,0.55)",
                lineHeight: 1.75,
                marginBottom: "52px",
              }}
            >
              {t.download.subtitle}
            </p>
            <div style={{ display: "flex", gap: "14px", flexWrap: "wrap" }}>
              {[
                ["🍎", t.download.ios],
                ["🤖", t.download.android],
              ].map(([icon, store]) => (
                <div key={store} style={{ position: "relative" }}>
                  <StoreBtn icon={icon} store={store} sub={t.download.soon} />
                  <div
                    style={{
                      position: "absolute",
                      top: "-8px",
                      right: "-8px",
                      background: "#C9A96E",
                      color: "#0A0A0F",
                      fontSize: "9px",
                      fontWeight: 700,
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                      padding: "3px 9px",
                      borderRadius: "2px",
                    }}
                  >
                    {t.download.soon}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.9, delay: 0.25 }}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "28px",
            }}
          >
            <div
              style={{
                position: "relative",
                padding: "36px",
                background: "#F2EDE6",
                border: "0.5px solid rgba(201,169,110,0.25)",
                borderRadius: "4px",
              }}
            >
              {[
                {
                  top: -1,
                  left: -1,
                  borderTop: "2px solid #C9A96E",
                  borderLeft: "2px solid #C9A96E",
                },
                {
                  top: -1,
                  right: -1,
                  borderTop: "2px solid #C9A96E",
                  borderRight: "2px solid #C9A96E",
                },
                {
                  bottom: -1,
                  left: -1,
                  borderBottom: "2px solid #C9A96E",
                  borderLeft: "2px solid #C9A96E",
                },
                {
                  bottom: -1,
                  right: -1,
                  borderBottom: "2px solid #C9A96E",
                  borderRight: "2px solid #C9A96E",
                },
              ].map((s, i) => (
                <div
                  key={i}
                  style={{
                    position: "absolute",
                    width: "20px",
                    height: "20px",
                    ...s,
                  }}
                />
              ))}
              <QRCode />
            </div>
            <p
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "11px",
                fontWeight: 300,
                color: "rgba(10,10,15,0.35)",
                letterSpacing: "0.1em",
                textAlign: "center",
                textTransform: "uppercase",
              }}
            >
              Scannez pour télécharger · Scan to download
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
