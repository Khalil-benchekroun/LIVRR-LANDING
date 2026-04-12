import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useLang } from "../LangContext";

export default function Boutiques() {
  const { t } = useLang();
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  return (
    <section
      id="boutiques"
      style={{
        padding: "140px 80px",
        background: "#0A0A0F",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: "clamp(100px, 16vw, 200px)",
          fontWeight: 300,
          color: "rgba(201,169,110,0.04)",
          whiteSpace: "nowrap",
          userSelect: "none",
          pointerEvents: "none",
        }}
      >
        BOUTIQUES
      </div>
      <div
        style={{
          position: "absolute",
          top: "30%",
          right: "-10%",
          width: "500px",
          height: "500px",
          background:
            "radial-gradient(ellipse, rgba(201,169,110,0.07) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />
      <div
        ref={ref}
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          position: "relative",
          zIndex: 1,
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "100px",
            alignItems: "center",
          }}
        >
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
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
                {t.boutiques.tag}
              </span>
            </div>
            <h2
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "clamp(44px, 5vw, 68px)",
                fontWeight: 300,
                color: "#FFFFFF",
                lineHeight: 1.05,
                whiteSpace: "pre-line",
                marginBottom: "28px",
              }}
            >
              {t.boutiques.title}
            </h2>
            <p
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "16px",
                fontWeight: 300,
                color: "rgba(255,255,255,0.45)",
                lineHeight: 1.75,
                marginBottom: "52px",
                maxWidth: "420px",
              }}
            >
              {t.boutiques.subtitle}
            </p>
            <button
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "12px",
                fontWeight: 500,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                padding: "18px 40px",
                borderRadius: "2px",
                background: "transparent",
                border: "1px solid rgba(201,169,110,0.5)",
                color: "#C9A96E",
                cursor: "pointer",
                transition: "all 0.3s",
              }}
              onMouseEnter={(e) => {
                e.target.style.background = "#C9A96E";
                e.target.style.color = "#0A0A0F";
              }}
              onMouseLeave={(e) => {
                e.target.style.background = "transparent";
                e.target.style.color = "#C9A96E";
              }}
            >
              {t.boutiques.cta} →
            </button>
          </motion.div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "3px",
            }}
          >
            {t.boutiques.stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.88 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.7, delay: i * 0.12 + 0.3 }}
                style={{
                  padding: "44px 36px",
                  background: i % 2 === 0 ? "#111118" : "#0D0D14",
                  border: "0.5px solid rgba(201,169,110,0.12)",
                }}
              >
                <div
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: "56px",
                    fontWeight: 300,
                    color: "#C9A96E",
                    lineHeight: 1,
                    marginBottom: "12px",
                  }}
                >
                  {stat.value}
                </div>
                <div
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: "12px",
                    fontWeight: 300,
                    color: "rgba(255,255,255,0.35)",
                    letterSpacing: "0.06em",
                    lineHeight: 1.5,
                  }}
                >
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
