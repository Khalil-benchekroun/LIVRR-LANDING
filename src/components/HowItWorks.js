import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useLang } from "../LangContext";

function Step({ step, index }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.15 });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.9,
        delay: index * 0.18,
        ease: [0.16, 1, 0.3, 1],
      }}
      style={{
        padding: "52px 44px",
        background: "#FFFFFF",
        border: "0.5px solid rgba(201,169,110,0.2)",
        borderRadius: "4px",
        position: "relative",
        transition: "box-shadow 0.3s, transform 0.3s",
        cursor: "default",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow = "0 20px 60px rgba(201,169,110,0.15)";
        e.currentTarget.style.transform = "translateY(-4px)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow = "none";
        e.currentTarget.style.transform = "translateY(0)";
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "24px",
          right: "32px",
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: "88px",
          fontWeight: 300,
          color: "rgba(201,169,110,0.1)",
          lineHeight: 1,
          userSelect: "none",
        }}
      >
        {step.num}
      </div>
      <div
        style={{
          width: "36px",
          height: "2px",
          background: "#C9A96E",
          marginBottom: "32px",
        }}
      />
      <h3
        style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: "34px",
          fontWeight: 400,
          color: "#0A0A0F",
          marginBottom: "18px",
        }}
      >
        {step.title}
      </h3>
      <p
        style={{
          fontFamily: "'DM Sans', sans-serif",
          fontSize: "15px",
          fontWeight: 300,
          color: "rgba(10,10,15,0.55)",
          lineHeight: 1.75,
        }}
      >
        {step.desc}
      </p>
    </motion.div>
  );
}

export default function HowItWorks() {
  const { t } = useLang();
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  return (
    <section
      id="how"
      style={{
        padding: "140px 80px",
        background: "#FAF8F5",
        position: "relative",
      }}
    >
      <div
        style={{
          position: "absolute",
          left: 0,
          top: "15%",
          bottom: "15%",
          width: "3px",
          background: "linear-gradient(transparent, #C9A96E, transparent)",
        }}
      />
      <div ref={ref} style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          style={{ marginBottom: "80px" }}
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
              {t.how.tag}
            </span>
          </div>
          <h2
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(48px, 5.5vw, 76px)",
              fontWeight: 300,
              color: "#0A0A0F",
              lineHeight: 1.05,
              whiteSpace: "pre-line",
            }}
          >
            {t.how.title}
          </h2>
        </motion.div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "24px",
          }}
        >
          {t.how.steps.map((step, i) => (
            <Step key={i} step={step} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
