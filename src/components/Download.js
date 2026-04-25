import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useLang } from '../LangContext';
import { useBreakpoint } from '../hooks/useBreakpoint';

function QRCode() {
  const cellSize = 8;
  const cells = 20;
  const seed = [
    1,1,1,1,1,1,1,0,1,0,1,0,1,1,1,1,1,1,1,0,1,0,0,0,0,0,1,0,0,1,0,1,1,0,0,0,0,0,1,0,
    1,0,1,1,1,0,1,0,1,0,1,0,1,0,1,1,1,0,1,0,1,0,1,1,1,0,1,0,0,1,1,0,1,0,1,1,1,0,1,0,
    1,0,1,1,1,0,1,0,1,1,0,1,1,0,1,1,1,0,1,0,1,0,0,0,0,0,1,0,0,0,1,0,1,0,0,0,0,0,1,0,
    1,1,1,1,1,1,1,0,1,0,1,0,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,1,1,0,1,0,0,0,0,0,0,0,0,
    1,0,1,1,0,1,1,1,0,0,1,1,1,0,1,1,0,1,1,1,0,1,0,0,1,0,0,0,1,0,0,1,0,1,0,0,1,0,0,0,
    1,1,0,1,1,1,1,0,0,1,1,0,1,1,0,1,1,1,1,0,0,0,1,0,0,0,0,1,1,0,0,1,0,1,1,1,1,1,0,1,
    0,1,1,1,1,1,1,0,1,0,0,0,0,0,0,0,0,0,1,0,1,0,0,0,1,0,0,0,0,0,1,1,1,1,1,1,1,0,0,1,
    0,1,0,0,0,0,0,1,0,1,0,1,0,1,0,0,0,0,0,1,0,1,0,1,1,0,1,1,1,1,1,1,1,1,0,1,0,1,0,1,
    0,0,0,1,1,1,1,0,0,1,1,1,1,1,1,1,0,0,1,0,1,0,0,0,1,0,0,0,0,0,1,1,1,1,1,1,1,0,1,0,
    1,0,0,0,0,1,1,1,1,1,1,1,0,0,1,0,1,1,0,1,0,1,1,0,1,1,1,1,1,0,1,0,0,0,0,0,1,0,0,1,
  ];
  const pattern = [];
  for (let r = 0; r < cells; r++)
    for (let c = 0; c < cells; c++)
      if (seed[r * cells + c]) pattern.push({ x: c * cellSize, y: r * cellSize });

  return (
    <div style={{ padding: '24px', background: '#FFFFFF', borderRadius: '4px', display: 'inline-block', border: '0.5px solid rgba(201,169,110,0.3)' }}>
      <svg width={160} height={160} viewBox={`0 0 ${cells * cellSize} ${cells * cellSize}`}>
        {pattern.map((p, i) => <rect key={i} x={p.x} y={p.y} width={cellSize - 1} height={cellSize - 1} fill="#0A0A0F" />)}
      </svg>
      <div style={{ textAlign: 'center', marginTop: '12px', fontFamily: "'DM Sans', sans-serif", fontSize: '10px', fontWeight: 500, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#0A0A0F' }}>
        LIVRR.APP
      </div>
    </div>
  );
}

function AppleLogo() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.37 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" fill="white"/>
    </svg>
  );
}

function GooglePlayLogo() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M3.18 23.76c.3.17.64.24.99.2L16.93 12 13.07 8.14 3.18 23.76z" fill="#EA4335"/>
      <path d="M22.14 10.64L19.38 9.1l-3.2 2.9 3.2 3.2 2.79-1.56a1.93 1.93 0 000-3.0z" fill="#FBBC04"/>
      <path d="M3.18.24a1.93 1.93 0 00-.99 1.72v20.08c0 .7.36 1.34.99 1.72l.1.06 11.25-11.25v-.34L3.28.18l-.1.06z" fill="#4285F4"/>
      <path d="M16.93 12L13.07 8.14l-9.89-7.9c.3-.17.64-.2.99-.06L16.93 12z" fill="#34A853"/>
    </svg>
  );
}

function StoreBtn({ logo, store, sub, fullWidth }) {
  return (
    <button
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '16px',
        padding: '16px 28px',
        borderRadius: '4px',
        background: '#0A0A0F',
        border: '1px solid rgba(201,169,110,0.3)',
        cursor: 'pointer',
        transition: 'all 0.3s',
        width: fullWidth ? '100%' : 'auto',
        minWidth: fullWidth ? 'unset' : '190px',
      }}
      onMouseEnter={(e) => { e.currentTarget.style.borderColor = '#C9A96E'; e.currentTarget.style.background = '#111118'; }}
      onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(201,169,110,0.3)'; e.currentTarget.style.background = '#0A0A0F'; }}
    >
      <span style={{ display: 'flex', alignItems: 'center', flexShrink: 0 }}>{logo}</span>
      <div style={{ textAlign: 'left' }}>
        <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '10px', color: 'rgba(255,255,255,0.35)', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '3px' }}>{sub}</div>
        <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '16px', fontWeight: 500, color: '#FFFFFF' }}>{store}</div>
      </div>
    </button>
  );
}

export default function Download() {
  const { t } = useLang();
  const { isMobile, isTablet } = useBreakpoint();
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  const sectionPadding = isMobile ? '80px 20px' : isTablet ? '100px 32px' : '140px 80px';

  const storeBtns = [
    { logo: <AppleLogo />, store: t.download.ios },
    { logo: <GooglePlayLogo />, store: t.download.android },
  ];

  return (
    <section id="download" style={{ padding: sectionPadding, background: '#FAF8F5' }}>
      <div ref={ref} style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: isMobile || isTablet ? '1fr' : '1fr 1fr',
            gap: isMobile ? '52px' : isTablet ? '60px' : '100px',
            alignItems: 'center',
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9 }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '20px' }}>
              <div style={{ width: '32px', height: '1px', background: '#C9A96E' }} />
              <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '11px', fontWeight: 500, letterSpacing: '0.22em', textTransform: 'uppercase', color: '#C9A96E' }}>
                {t.download.tag}
              </span>
            </div>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: isMobile ? 'clamp(38px, 10vw, 56px)' : 'clamp(44px, 5vw, 68px)', fontWeight: 300, color: '#0A0A0F', lineHeight: 1.05, whiteSpace: 'pre-line', marginBottom: '20px' }}>
              {t.download.title}
            </h2>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '16px', fontWeight: 300, color: 'rgba(10,10,15,0.55)', lineHeight: 1.75, marginBottom: '44px' }}>
              {t.download.subtitle}
            </p>

            <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap', flexDirection: isMobile ? 'column' : 'row' }}>
              {storeBtns.map(({ logo, store }) => (
                <div key={store} style={{ position: 'relative', flex: isMobile ? '1' : 'none' }}>
                  <StoreBtn logo={logo} store={store} sub={t.download.soon} fullWidth={isMobile} />
                  <div style={{ position: 'absolute', top: '-8px', right: '-8px', background: '#C9A96E', color: '#0A0A0F', fontSize: '9px', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', padding: '3px 9px', borderRadius: '2px' }}>
                    {t.download.soon}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {!isMobile && (
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.9, delay: 0.25 }}
              style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '28px' }}
            >
              <div style={{ position: 'relative', padding: '36px', background: '#F2EDE6', border: '0.5px solid rgba(201,169,110,0.25)', borderRadius: '4px' }}>
                {[
                  { top: -1, left: -1, borderTop: '2px solid #C9A96E', borderLeft: '2px solid #C9A96E' },
                  { top: -1, right: -1, borderTop: '2px solid #C9A96E', borderRight: '2px solid #C9A96E' },
                  { bottom: -1, left: -1, borderBottom: '2px solid #C9A96E', borderLeft: '2px solid #C9A96E' },
                  { bottom: -1, right: -1, borderBottom: '2px solid #C9A96E', borderRight: '2px solid #C9A96E' },
                ].map((s, i) => (
                  <div key={i} style={{ position: 'absolute', width: '20px', height: '20px', ...s }} />
                ))}
                <QRCode />
              </div>
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '11px', fontWeight: 300, color: 'rgba(10,10,15,0.35)', letterSpacing: '0.1em', textAlign: 'center', textTransform: 'uppercase' }}>
                Scannez pour télécharger · Scan to download
              </p>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
