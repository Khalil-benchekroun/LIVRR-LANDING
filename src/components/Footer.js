import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useLang } from "../LangContext";

export default function Footer() {
  const { t } = useLang();
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  return (
    <footer style={{ padding: "60px 80px 40px", background: "#0A0A0F" }}>
      <div ref={ref} style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "32px",
            marginBottom: "48px",
          }}
        >
          <div>
            <div
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "32px",
                fontWeight: 300,
                color: "#C9A96E",
                letterSpacing: "0.1em",
                marginBottom: "10px",
              }}
            >
              LIVRR
            </div>
            <p
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "13px",
                fontWeight: 300,
                color: "rgba(255,255,255,0.35)",
                letterSpacing: "0.04em",
                fontStyle: "italic",
              }}
            >
              {t.footer.tagline}
            </p>
          </div>
          <div style={{ display: "flex", gap: "32px" }}>
            {t.footer.links.map((link, i) => (
              <span
                key={i}
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "12px",
                  color: "rgba(255,255,255,0.35)",
                  letterSpacing: "0.06em",
                  cursor: "pointer",
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) => (e.target.style.color = "#C9A96E")}
                onMouseLeave={(e) =>
                  (e.target.style.color = "rgba(255,255,255,0.35)")
                }
              >
                {link}
              </span>
            ))}
          </div>
        </motion.div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            paddingTop: "24px",
            borderTop: "0.5px solid rgba(255,255,255,0.06)",
          }}
        >
          <span
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "11px",
              color: "rgba(255,255,255,0.2)",
              letterSpacing: "0.06em",
            }}
          >
            {t.footer.rights}
          </span>
          <div style={{ display: "flex", gap: "6px", alignItems: "center" }}>
            <div
              style={{
                width: "4px",
                height: "4px",
                borderRadius: "50%",
                background: "#C9A96E",
                opacity: 0.6,
              }}
            />
            <span
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "11px",
                color: "rgba(255,255,255,0.2)",
                letterSpacing: "0.06em",
              }}
            >
              Paris, France
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
