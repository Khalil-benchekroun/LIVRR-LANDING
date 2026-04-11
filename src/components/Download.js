import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useLang } from '../LangContext';

// Simple SVG QR code placeholder (decorative)
function QRCode() {
  const size = 160;
  const cellSize = 8;
  const cells = 20;

  // Generate a deterministic pattern for the QR code visual
  const pattern = [];
  const seed = [
    1,1,1,1,1,1,1,0,1,0,1,0,1,1,1,1,1,1,1,0,
    1,0,0,0,0,0,1,0,0,1,0,1,1,0,0,0,0,0,1,0,
    1,0,1,1,1,0,1,0,1,0,1,0,1,0,1,1,1,0,1,0,
    1,0,1,1,1,0,1,0,0,1,1,0,1,0,1,1,1,0,1,0,
    1,0,1,1,1,0,1,0,1,1,0,1,1,0,1,1,1,0,1,0,
    1,0,0,0,0,0,1,0,0,0,1,0,1,0,0,0,0,0,1,0,
    1,1,1,1,1,1,1,0,1,0,1,0,1,1,1,1,1,1,1,0,
    0,0,0,0,0,0,0,0,1,1,0,1,0,0,0,0,0,0,0,0,
    1,0,1,1,0,1,1,1,0,0,1,1,1,0,1,1,0,1,1,1,
    0,1,0,0,1,0,0,0,1,0,0,1,0,1,0,0,1,0,0,0,
    1,1,0,1,1,1,1,0,0,1,1,0,1,1,0,1,1,1,1,0,
    0,0,1,0,0,0,0,1,1,0,0,1,0,0,1,0,0,0,0,1,
    1,1,1,1,1,0,1,0,1,1,0,1,1,1,1,1,1,0,1,0,
    0,0,0,0,0,0,0,0,1,0,1,0,0,0,1,0,0,0,0,0,
    1,1,1,1,1,1,1,0,0,1,0,1,1,0,1,1,1,1,1,0,
    1,0,0,0,0,0,1,0,1,0,1,0,1,0,0,0,0,0,1,0,
    1,0,1,1,1,0,1,1,0,1,0,1,1,1,1,1,1,0,1,0,
    1,0,1,1,1,0,1,0,1,0,1,0,0,0,1,1,1,0,1,0,
    1,0,0,0,0,0,1,0,0,1,0,1,1,0,0,0,0,0,1,0,
    1,1,1,1,1,1,1,0,1,0,1,0,1,1,1,1,1,1,1,0,
  ];

  for (let row = 0; row < cells; row++) {
    for (let col = 0; col < cells; col++) {
      if (seed[row * cells + col]) {
        pattern.push({ x: col * cellSize, y: row * cellSize });
      }
    }
  }

  return (
    <div style={{
      padding: '20px', background: '#FFFFFF', borderRadius: '4px',
      display: 'inline-block',
    }}>
      <svg width={size} height={size} viewBox={`0 0 ${cells * cellSize} ${cells * cellSize}`}>
        {pattern.map((cell, i) => (
          <rect key={i} x={cell.x} y={cell.y} width={cellSize - 1} height={cellSize - 1} fill="#0A0A0F" />
        ))}
      </svg>
      <div style={{
        textAlign: 'center', marginTop: '10px',
        fontFamily: "'DM Sans', sans-serif",
        fontSize: '10px', fontWeight: 500,
        letterSpacing: '0.12em', textTransform: 'uppercase',
        color: '#0A0A0F',
      }}>
        LIVRR.APP
      </div>
    </div>
  );
}

function StoreButton({ icon, store, sub }) {
  return (
    <button style={{
      display: 'flex', alignItems: 'center', gap: '14px',
      padding: '14px 28px', borderRadius: '4px',
      background: 'rgba(201,169,110,0.08)',
      border: '1px solid rgba(201,169,110,0.3)',
      cursor: 'pointer', transition: 'all 0.3s',
      minWidth: '180px',
    }}
      onMouseEnter={e => { e.currentTarget.style.background = 'rgba(201,169,110,0.15)'; e.currentTarget.style.borderColor = '#C9A96E'; }}
      onMouseLeave={e => { e.currentTarget.style.background = 'rgba(201,169,110,0.08)'; e.currentTarget.style.borderColor = 'rgba(201,169,110,0.3)'; }}
    >
      <span style={{ fontSize: '22px' }}>{icon}</span>
      <div style={{ textAlign: 'left' }}>
        <div style={{
          fontFamily: "'DM Sans', sans-serif", fontSize: '10px',
          color: 'rgba(255,255,255,0.4)', letterSpacing: '0.06em',
          textTransform: 'uppercase', marginBottom: '2px',
        }}>
          {sub}
        </div>
        <div style={{
          fontFamily: "'DM Sans', sans-serif", fontSize: '15px',
          fontWeight: 500, color: '#FFFFFF',
        }}>
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
    <section id="download" style={{ padding: '140px 80px' }}>
      <div ref={ref} style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '100px', alignItems: 'center' }}>

          {/* Left — Text */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
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
                {t.download.tag}
              </span>
            </div>
            <h2 style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: 'clamp(48px, 5vw, 68px)', fontWeight: 300,
              color: '#FFFFFF', lineHeight: 1.1,
              whiteSpace: 'pre-line', marginBottom: '24px',
              letterSpacing: '-0.01em',
            }}>
              {t.download.title}
            </h2>
            <p style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: '16px', fontWeight: 300,
              color: 'rgba(255,255,255,0.55)', lineHeight: 1.7,
              marginBottom: '48px',
            }}>
              {t.download.subtitle}
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <div style={{ display: 'flex', gap: '12px' }}>
                <div style={{ position: 'relative' }}>
                  <StoreButton icon="🍎" store={t.download.ios} sub={t.download.soon} />
                  <div style={{
                    position: 'absolute', top: '-8px', right: '-8px',
                    background: '#C9A96E', color: '#0A0A0F',
                    fontSize: '9px', fontWeight: 600, letterSpacing: '0.08em',
                    padding: '3px 8px', borderRadius: '2px',
                    textTransform: 'uppercase',
                  }}>
                    {t.download.soon}
                  </div>
                </div>
                <div style={{ position: 'relative' }}>
                  <StoreButton icon="🤖" store={t.download.android} sub={t.download.soon} />
                  <div style={{
                    position: 'absolute', top: '-8px', right: '-8px',
                    background: '#C9A96E', color: '#0A0A0F',
                    fontSize: '9px', fontWeight: 600, letterSpacing: '0.08em',
                    padding: '3px 8px', borderRadius: '2px',
                    textTransform: 'uppercase',
                  }}>
                    {t.download.soon}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right — QR Code */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            style={{
              display: 'flex', flexDirection: 'column',
              alignItems: 'center', gap: '28px',
            }}
          >
            {/* Decorative frame */}
            <div style={{
              position: 'relative', padding: '32px',
              background: 'rgba(201,169,110,0.04)',
              border: '1px solid rgba(201,169,110,0.2)',
              borderRadius: '4px',
            }}>
              {/* Corner accents */}
              {[
                { top: -1, left: -1, borderTop: '2px solid #C9A96E', borderLeft: '2px solid #C9A96E' },
                { top: -1, right: -1, borderTop: '2px solid #C9A96E', borderRight: '2px solid #C9A96E' },
                { bottom: -1, left: -1, borderBottom: '2px solid #C9A96E', borderLeft: '2px solid #C9A96E' },
                { bottom: -1, right: -1, borderBottom: '2px solid #C9A96E', borderRight: '2px solid #C9A96E' },
              ].map((style, i) => (
                <div key={i} style={{ position: 'absolute', width: '20px', height: '20px', ...style }} />
              ))}
              <QRCode />
            </div>
            <p style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: '12px', fontWeight: 300,
              color: 'rgba(255,255,255,0.3)', letterSpacing: '0.08em',
              textAlign: 'center', textTransform: 'uppercase',
            }}>
              Scannez pour télécharger / Scan to download
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
