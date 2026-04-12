import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useLang } from "../LangContext";

export default function Footer() {
  const { t } = useLang();
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  return (
    <footer style={{ padding: "80px 80px 48px", background: "#060608" }}>
      <div ref={ref} style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.9 }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-start",
              marginBottom: "64px",
              flexWrap: "wrap",
              gap: "40px",
            }}
          >
            <div style={{ maxWidth: "320px" }}>
              <div
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "36px",
                  fontWeight: 300,
                  color: "#C9A96E",
                  letterSpacing: "0.12em",
                  marginBottom: "16px",
                }}
              >
                LIVRR
              </div>
              <p
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "14px",
                  fontWeight: 300,
                  color: "rgba(255,255,255,0.3)",
                  lineHeight: 1.7,
                  fontStyle: "italic",
                }}
              >
                {t.footer.tagline}
              </p>
            </div>
            <div style={{ display: "flex", gap: "80px", flexWrap: "wrap" }}>
              <div>
                <div
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: "10px",
                    fontWeight: 500,
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    color: "#C9A96E",
                    marginBottom: "20px",
                  }}
                >
                  Plateforme
                </div>
                {[
                  "Comment ça marche",
                  "Boutiques partenaires",
                  "Télécharger l'app",
                ].map((link) => (
                  <div
                    key={link}
                    style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: "13px",
                      color: "rgba(255,255,255,0.3)",
                      marginBottom: "12px",
                      cursor: "pointer",
                      transition: "color 0.2s",
                    }}
                    onMouseEnter={(e) => (e.target.style.color = "#C9A96E")}
                    onMouseLeave={(e) =>
                      (e.target.style.color = "rgba(255,255,255,0.3)")
                    }
                  >
                    {link}
                  </div>
                ))}
              </div>
              <div>
                <div
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: "10px",
                    fontWeight: 500,
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    color: "#C9A96E",
                    marginBottom: "20px",
                  }}
                >
                  Légal
                </div>
                {t.footer.links.map((link) => (
                  <div
                    key={link}
                    style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: "13px",
                      color: "rgba(255,255,255,0.3)",
                      marginBottom: "12px",
                      cursor: "pointer",
                      transition: "color 0.2s",
                    }}
                    onMouseEnter={(e) => (e.target.style.color = "#C9A96E")}
                    onMouseLeave={(e) =>
                      (e.target.style.color = "rgba(255,255,255,0.3)")
                    }
                  >
                    {link}
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div
            style={{
              height: "0.5px",
              background: "rgba(201,169,110,0.12)",
              marginBottom: "32px",
            }}
          />
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "wrap",
              gap: "16px",
            }}
          >
            <span
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "11px",
                color: "rgba(255,255,255,0.18)",
                letterSpacing: "0.06em",
              }}
            >
              {t.footer.rights}
            </span>
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <div
                style={{
                  width: "5px",
                  height: "5px",
                  borderRadius: "50%",
                  background: "#C9A96E",
                  opacity: 0.5,
                }}
              />
              <span
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "11px",
                  color: "rgba(255,255,255,0.18)",
                  letterSpacing: "0.08em",
                }}
              >
                Paris, France
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
