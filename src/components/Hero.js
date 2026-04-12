import React from "react";
import { motion } from "framer-motion";
import { useLang } from "../LangContext";
import Scene3D from "./Scene3D";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 1, delay, ease: [0.16, 1, 0.3, 1] },
});

export default function Hero() {
  const { t } = useLang();
  return (
    <section
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
        padding: "0 80px",
        background: "#FAF8F5",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          right: "-5%",
          width: "65%",
          height: "100%",
          opacity: 0.7,
        }}
      >
        <Scene3D style={{ width: "100%", height: "100%" }} />
      </div>
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "55%",
          height: "100%",
          background: "linear-gradient(90deg, #FAF8F5 60%, transparent 100%)",
          zIndex: 1,
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: "200px",
          background: "linear-gradient(0deg, #FAF8F5 0%, transparent 100%)",
          zIndex: 1,
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: 0,
          width: "40px",
          height: "1px",
          background: "#C9A96E",
          zIndex: 2,
        }}
      />
      <div style={{ position: "relative", zIndex: 2, maxWidth: "580px" }}>
        <motion.div
          {...fadeUp(0.2)}
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "10px",
            marginBottom: "32px",
          }}
        >
          <div
            style={{
              width: "6px",
              height: "6px",
              borderRadius: "50%",
              background: "#C9A96E",
            }}
          />
          <span
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "11px",
              fontWeight: 500,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "#C9A96E",
            }}
          >
            {t.hero.tag}
          </span>
        </motion.div>
        <motion.h1
          {...fadeUp(0.4)}
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "clamp(64px, 8vw, 100px)",
            fontWeight: 300,
            lineHeight: 1.0,
            color: "#0A0A0F",
            letterSpacing: "-0.02em",
            marginBottom: "28px",
            whiteSpace: "pre-line",
          }}
        >
          {t.hero.title}
        </motion.h1>
        <motion.p
          {...fadeUp(0.6)}
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "17px",
            fontWeight: 300,
            lineHeight: 1.7,
            color: "rgba(10,10,15,0.55)",
            maxWidth: "400px",
            marginBottom: "48px",
          }}
        >
          {t.hero.subtitle}
        </motion.p>
        <motion.div
          {...fadeUp(0.8)}
          style={{ display: "flex", alignItems: "center", gap: "24px" }}
        >
          <button
            onClick={() =>
              document
                .getElementById("download")
                .scrollIntoView({ behavior: "smooth" })
            }
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "13px",
              fontWeight: 500,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              padding: "16px 36px",
              borderRadius: "2px",
              background: "#0A0A0F",
              border: "none",
              color: "#FAF8F5",
              cursor: "pointer",
              transition: "all 0.3s",
            }}
            onMouseEnter={(e) => {
              e.target.style.background = "#C9A96E";
              e.target.style.color = "#0A0A0F";
            }}
            onMouseLeave={(e) => {
              e.target.style.background = "#0A0A0F";
              e.target.style.color = "#FAF8F5";
            }}
          >
            {t.hero.cta}
          </button>
          <span
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "12px",
              color: "rgba(10,10,15,0.35)",
              letterSpacing: "0.04em",
            }}
          >
            {t.hero.ctaSub}
          </span>
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        style={{
          position: "absolute",
          bottom: "40px",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "8px",
          zIndex: 2,
        }}
      >
        <span
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "10px",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "rgba(10,10,15,0.3)",
          }}
        >
          {t.hero.scroll}
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
          style={{
            width: "1px",
            height: "40px",
            background: "linear-gradient(#C9A96E, transparent)",
          }}
        />
      </motion.div>
    </section>
  );
}
