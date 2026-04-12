import React from "react";
import { motion } from "framer-motion";
import { useLang } from "../LangContext";
import Scene3D from "./Scene3D";

export default function Hero() {
  const { t } = useLang();
  return (
    <section
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        background: "#0A0A0F",
        overflow: "hidden",
        padding: "0 80px",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "50%",
          right: "10%",
          width: "600px",
          height: "600px",
          transform: "translateY(-50%)",
          background:
            "radial-gradient(ellipse, rgba(201,169,110,0.12) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: 0,
          right: "-2%",
          width: "58%",
          height: "100%",
        }}
      >
        <Scene3D style={{ width: "100%", height: "100%" }} />
      </div>
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "50%",
          height: "100%",
          background: "linear-gradient(90deg, #0A0A0F 55%, transparent 100%)",
          zIndex: 1,
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: "180px",
          background: "linear-gradient(0deg, #0A0A0F 0%, transparent 100%)",
          zIndex: 1,
          pointerEvents: "none",
        }}
      />

      <div style={{ position: "relative", zIndex: 2, maxWidth: "560px" }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            marginBottom: "36px",
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
            {t.hero.tag}
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "clamp(60px, 7.5vw, 96px)",
            fontWeight: 300,
            lineHeight: 0.95,
            color: "#FFFFFF",
            letterSpacing: "-0.02em",
            marginBottom: "32px",
            whiteSpace: "pre-line",
          }}
        >
          {t.hero.title}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.65 }}
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "17px",
            fontWeight: 300,
            lineHeight: 1.75,
            color: "rgba(255,255,255,0.5)",
            maxWidth: "400px",
            marginBottom: "52px",
          }}
        >
          {t.hero.subtitle}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.85 }}
          style={{ display: "flex", alignItems: "center", gap: "28px" }}
        >
          <button
            onClick={() =>
              document
                .getElementById("download")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "12px",
              fontWeight: 500,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              padding: "18px 40px",
              borderRadius: "2px",
              background: "#C9A96E",
              border: "none",
              color: "#0A0A0F",
              cursor: "pointer",
              transition: "all 0.3s",
            }}
            onMouseEnter={(e) => {
              e.target.style.background = "#E8D5A3";
            }}
            onMouseLeave={(e) => {
              e.target.style.background = "#C9A96E";
            }}
          >
            {t.hero.cta}
          </button>
          <span
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "12px",
              color: "rgba(255,255,255,0.3)",
              letterSpacing: "0.04em",
            }}
          >
            {t.hero.ctaSub}
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          style={{
            display: "flex",
            gap: "40px",
            marginTop: "64px",
            paddingTop: "32px",
            borderTop: "0.5px solid rgba(201,169,110,0.15)",
          }}
        >
          {[
            ["20+", "Boutiques partenaires"],
            ["< 3h", "Livraison garantie"],
            ["250€", "Panier moyen"],
          ].map(([val, label]) => (
            <div key={label}>
              <div
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "28px",
                  fontWeight: 300,
                  color: "#C9A96E",
                  lineHeight: 1,
                  marginBottom: "6px",
                }}
              >
                {val}
              </div>
              <div
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "11px",
                  color: "rgba(255,255,255,0.35)",
                  letterSpacing: "0.06em",
                }}
              >
                {label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
        style={{
          position: "absolute",
          bottom: "36px",
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
            fontSize: "9px",
            letterSpacing: "0.25em",
            textTransform: "uppercase",
            color: "rgba(255,255,255,0.25)",
          }}
        >
          {t.hero.scroll}
        </span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          style={{
            width: "1px",
            height: "44px",
            background: "linear-gradient(#C9A96E, transparent)",
          }}
        />
      </motion.div>
    </section>
  );
}
