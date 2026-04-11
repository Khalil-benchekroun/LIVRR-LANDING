import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useLang } from '../LangContext';

function Step({ step, index }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.2, ease: [0.16, 1, 0.3, 1] }}
      style={{
        padding: '48px 40px',
        border: '0.5px solid rgba(201,169,110,0.2)',
        borderRadius: '4px',
        position: 'relative',
        background: 'rgba(201,169,110,0.03)',
        transition: 'border-color 0.3s, background 0.3s',
        cursor: 'default',
      }}
      onMouseEnter={e => {
        e.currentTarget.style.borderColor = 'rgba(201,169,110,0.5)';
        e.currentTarget.style.background = 'rgba(201,169,110,0.06)';
      }}
      onMouseLeave={e => {
        e.currentTarget.style.borderColor = 'rgba(201,169,110,0.2)';
        e.currentTarget.style.background = 'rgba(201,169,110,0.03)';
      }}
    >
      <div style={{
        fontFamily: "'Cormorant Garamond', serif",
        fontSize: '80px', fontWeight: 300,
        color: 'rgba(201,169,110,0.12)',
        position: 'absolute', top: '20px', right: '30px',
        lineHeight: 1, letterSpacing: '-0.04em',
        userSelect: 'none',
      }}>
        {step.num}
      </div>
      <div style={{
        width: '40px', height: '1px',
        background: '#C9A96E', marginBottom: '28px',
      }} />
      <h3 style={{
        fontFamily: "'Cormorant Garamond', serif",
        fontSize: '32px', fontWeight: 400,
        color: '#FFFFFF', marginBottom: '16px',
        letterSpacing: '0.01em',
      }}>
        {step.title}
      </h3>
      <p style={{
        fontFamily: "'DM Sans', sans-serif",
        fontSize: '15px', fontWeight: 300,
        color: 'rgba(255,255,255,0.55)', lineHeight: 1.7,
      }}>
        {step.desc}
      </p>
    </motion.div>
  );
}

export default function HowItWorks() {
  const { t } = useLang();
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="how" style={{
      padding: '140px 80px',
      position: 'relative',
    }}>
      {/* Decorative vertical line */}
      <div style={{
        position: 'absolute', left: '80px', top: '100px', bottom: '100px',
        width: '1px',
        background: 'linear-gradient(transparent, rgba(201,169,110,0.3), transparent)',
      }} />

      <div ref={ref} style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          style={{ marginBottom: '80px', paddingLeft: '40px' }}
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
              {t.how.tag}
            </span>
          </div>
          <h2 style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: 'clamp(48px, 5vw, 72px)', fontWeight: 300,
            color: '#FFFFFF', lineHeight: 1.1,
            whiteSpace: 'pre-line', letterSpacing: '-0.01em',
          }}>
            {t.how.title}
          </h2>
        </motion.div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '24px',
          paddingLeft: '40px',
        }}>
          {t.how.steps.map((step, i) => (
            <Step key={i} step={step} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
