import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useLang } from "../LangContext";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const { lang, setLang, t } = useLang();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        height: "72px",
        padding: "0 48px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        background: scrolled ? "rgba(10,10,15,0.92)" : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom: scrolled ? "0.5px solid rgba(201,169,110,0.2)" : "none",
        transition: "all 0.4s ease",
      }}
    >
      <span
        style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: "26px",
          fontWeight: 500,
          letterSpacing: "0.15em",
          color: "#C9A96E",
        }}
      >
        LIVRR
      </span>

      <div style={{ display: "flex", alignItems: "center", gap: "40px" }}>
        {[
          ["how", t.nav.howItWorks],
          ["boutiques", t.nav.boutiques],
          ["download", t.nav.download],
        ].map(([id, label]) => (
          <span
            key={id}
            onClick={() => scrollTo(id)}
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "13px",
              color: "rgba(255,255,255,0.55)",
              letterSpacing: "0.06em",
              cursor: "pointer",
              transition: "color 0.2s",
            }}
            onMouseEnter={(e) => (e.target.style.color = "#C9A96E")}
            onMouseLeave={(e) =>
              (e.target.style.color = "rgba(255,255,255,0.55)")
            }
          >
            {label}
          </span>
        ))}

        <button
          onClick={() => scrollTo("boutiques")}
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "11px",
            fontWeight: 500,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            padding: "10px 24px",
            borderRadius: "2px",
            background: "transparent",
            border: "1px solid rgba(201,169,110,0.6)",
            color: "#C9A96E",
            cursor: "pointer",
            transition: "all 0.25s",
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
          {t.nav.forBoutiques}
        </button>

        <div style={{ display: "flex", gap: "4px" }}>
          {["fr", "en"].map((l) => (
            <button
              key={l}
              onClick={() => setLang(l)}
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "11px",
                fontWeight: 500,
                letterSpacing: "0.1em",
                background: lang === l ? "rgba(201,169,110,0.15)" : "none",
                border: "none",
                cursor: "pointer",
                padding: "4px 8px",
                color: lang === l ? "#C9A96E" : "rgba(255,255,255,0.3)",
                borderRadius: "2px",
                transition: "all 0.2s",
              }}
            >
              {l.toUpperCase()}
            </button>
          ))}
        </div>
      </div>
    </motion.nav>
  );
}
