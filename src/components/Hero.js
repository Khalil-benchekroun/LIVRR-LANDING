import React from 'react';
import { motion } from 'framer-motion';
import { useLang } from '../LangContext';
import { useBreakpoint } from '../hooks/useBreakpoint';
import Scene3D from './Scene3D';

export default function Hero() {
  const { t } = useLang();
  const { isMobile, isTablet, isDesktop } = useBreakpoint();

  const sectionPadding = isMobile
    ? '0 20px'
    : isTablet
    ? '0 32px'
    : '0 80px';

  const phoneScale = isMobile ? 0.72 : isTablet ? 0.85 : 1;

  return (
    <section
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        background: '#0A0A0F',
        overflow: 'hidden',
        padding: sectionPadding,
        paddingTop: isMobile ? '80px' : isTablet ? '100px' : '72px',
        flexDirection: isMobile ? 'column' : 'row',
        justifyContent: isMobile ? 'flex-start' : 'flex-start',
      }}
    >
      <div
        style={{
          position: 'absolute',
          top: '50%',
          right: isMobile ? '50%' : '10%',
          width: isMobile ? '300px' : '600px',
          height: isMobile ? '300px' : '600px',
          transform: isMobile ? 'translate(50%, -30%)' : 'translateY(-50%)',
          background: 'radial-gradient(ellipse, rgba(201,169,110,0.12) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      {!isMobile && (
        <>
          <div
            style={{
              position: 'absolute',
              top: '72px',
              right: isTablet ? '-4%' : '-2%',
              width: isTablet ? '52%' : '58%',
              height: 'calc(100% - 72px)',
            }}
          >
            <Scene3D style={{ width: '100%', height: '100%' }} scale={phoneScale} />
          </div>
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: isTablet ? '55%' : '50%',
              height: '100%',
              background: 'linear-gradient(90deg, #0A0A0F 55%, transparent 100%)',
              zIndex: 1,
              pointerEvents: 'none',
            }}
          />
          <div
            style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              height: '180px',
              background: 'linear-gradient(0deg, #0A0A0F 0%, transparent 100%)',
              zIndex: 1,
              pointerEvents: 'none',
            }}
          />
        </>
      )}

      <div
        style={{
          position: 'relative',
          zIndex: 2,
          maxWidth: isMobile ? '100%' : isTablet ? '420px' : '560px',
          width: '100%',
          paddingTop: isMobile ? '20px' : '0',
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '28px' }}
        >
          <div style={{ width: '32px', height: '1px', background: '#C9A96E' }} />
          <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '11px', fontWeight: 500, letterSpacing: '0.22em', textTransform: 'uppercase', color: '#C9A96E' }}>
            {t.hero.tag}
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: isMobile ? 'clamp(36px, 10vw, 52px)' : isTablet ? 'clamp(40px, 6vw, 60px)' : 'clamp(42px, 5vw, 68px)',
            fontWeight: 300,
            lineHeight: 1.05,
            color: '#FFFFFF',
            letterSpacing: '-0.02em',
            marginBottom: '28px',
            whiteSpace: 'pre-line',
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
            fontSize: isMobile ? '15px' : '17px',
            fontWeight: 300,
            lineHeight: 1.75,
            color: 'rgba(255,255,255,0.5)',
            maxWidth: '400px',
            marginBottom: '44px',
          }}
        >
          {t.hero.subtitle}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.85 }}
          style={{ display: 'flex', alignItems: 'center', gap: '24px', flexWrap: 'wrap' }}
        >
          <button
            onClick={() => document.getElementById('download')?.scrollIntoView({ behavior: 'smooth' })}
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: '12px',
              fontWeight: 500,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              padding: isMobile ? '16px 32px' : '18px 40px',
              borderRadius: '2px',
              background: '#C9A96E',
              border: 'none',
              color: '#0A0A0F',
              cursor: 'pointer',
              transition: 'all 0.3s',
            }}
            onMouseEnter={(e) => { e.target.style.background = '#E8D5A3'; }}
            onMouseLeave={(e) => { e.target.style.background = '#C9A96E'; }}
          >
            {t.hero.cta}
          </button>
          <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '12px', color: 'rgba(255,255,255,0.3)', letterSpacing: '0.04em' }}>
            {t.hero.ctaSub}
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.1 }}
          style={{
            display: 'flex',
            gap: isMobile ? '24px' : '40px',
            marginTop: '52px',
            paddingTop: '28px',
            borderTop: '0.5px solid rgba(201,169,110,0.15)',
            flexWrap: 'wrap',
          }}
        >
          {[
            ['25+', 'Boutiques partenaires'],
            ['< 3h', 'Livraison garantie'],
            ['250€', 'Panier moyen'],
          ].map(([val, label]) => (
            <div key={label}>
              <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: isMobile ? '24px' : '28px', fontWeight: 300, color: '#C9A96E', lineHeight: 1, marginBottom: '6px' }}>{val}</div>
              <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '11px', color: 'rgba(255,255,255,0.35)', letterSpacing: '0.06em' }}>{label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {isMobile && (
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.5 }}
          style={{ marginTop: '64px', paddingBottom: '80px', width: '100%', display: 'flex', justifyContent: 'center' }}
        >
          <Scene3D style={{ width: '100%', height: '420px' }} scale={phoneScale} />
        </motion.div>
      )}

      {!isMobile && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8 }}
          style={{ position: 'absolute', bottom: '36px', left: '50%', transform: 'translateX(-50%)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px', zIndex: 2 }}
        >
          <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '9px', letterSpacing: '0.25em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.25)' }}>
            {t.hero.scroll}
          </span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
            style={{ width: '1px', height: '44px', background: 'linear-gradient(#C9A96E, transparent)' }}
          />
        </motion.div>
      )}
    </section>
  );
}
