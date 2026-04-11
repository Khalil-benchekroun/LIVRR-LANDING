import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useLang } from '../LangContext';

export default function Boutiques() {
  const { t } = useLang();
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="boutiques" style={{
      padding: '140px 80px',
      background: 'rgba(201,169,110,0.04)',
      borderTop: '0.5px solid rgba(201,169,110,0.12)',
      borderBottom: '0.5px solid rgba(201,169,110,0.12)',
      position: 'relative', overflow: 'hidden',
    }}>
      {/* Large background text */}
      <div style={{
        position: 'absolute', top: '50%', left: '50%',
        transform: 'translate(-50%, -50%)',
        fontFamily: "'Cormorant Garamond', serif",
        fontSize: 'clamp(120px, 18vw, 220px)', fontWeight: 300,
        color: 'rgba(201,169,110,0.04)',
        whiteSpace: 'nowrap', userSelect: 'none',
        letterSpacing: '0.1em',
        pointerEvents: 'none',
      }}>
        BOUTIQUES
      </div>

      <div ref={ref} style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '100px', alignItems: 'center' }}>

          {/* Left — Stats */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <div style={{
                display: 'inline-flex', alignItems: 'center', gap: '10px',
                marginBottom: '24px',
              }}>
                <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#C9A96E' }} />
                <span style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: '11px', fontWeight: 500, letterSpacing: '0.2em',
                  textTransform: 'uppercase', color: '#C9A96E',
                }}>
                  {t.boutiques.tag}
                </span>
              </div>
              <h2 style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: 'clamp(48px, 5vw, 68px)', fontWeight: 300,
                color: '#FFFFFF', lineHeight: 1.1,
                whiteSpace: 'pre-line', marginBottom: '28px',
                letterSpacing: '-0.01em',
              }}>
                {t.boutiques.title}
              </h2>
              <p style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: '16px', fontWeight: 300,
                color: 'rgba(255,255,255,0.55)', lineHeight: 1.7,
                marginBottom: '48px', maxWidth: '420px',
              }}>
                {t.boutiques.subtitle}
              </p>
              <button style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: '13px', fontWeight: 500,
                letterSpacing: '0.1em', textTransform: 'uppercase',
                padding: '16px 36px', borderRadius: '2px',
                background: 'transparent', border: '1px solid #C9A96E',
                color: '#C9A96E', cursor: 'pointer', transition: 'all 0.3s',
              }}
                onMouseEnter={e => { e.target.style.background = '#C9A96E'; e.target.style.color = '#0A0A0F'; }}
                onMouseLeave={e => { e.target.style.background = 'transparent'; e.target.style.color = '#C9A96E'; }}
              >
                {t.boutiques.cta} →
              </button>
            </motion.div>
          </div>

          {/* Right — Stats grid */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2px' }}>
            {t.boutiques.stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: i * 0.1 + 0.3 }}
                style={{
                  padding: '40px 32px',
                  background: i % 2 === 0 ? 'rgba(201,169,110,0.06)' : 'rgba(10,10,15,0.8)',
                  border: '0.5px solid rgba(201,169,110,0.15)',
                }}
              >
                <div style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: '52px', fontWeight: 300,
                  color: '#C9A96E', lineHeight: 1,
                  marginBottom: '10px', letterSpacing: '-0.02em',
                }}>
                  {stat.value}
                </div>
                <div style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: '12px', fontWeight: 400,
                  color: 'rgba(255,255,255,0.45)', letterSpacing: '0.04em',
                  lineHeight: 1.4,
                }}>
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
