import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useLang } from '../LangContext';
import { useBreakpoint } from '../hooks/useBreakpoint';

export default function Footer() {
  const { t } = useLang();
  const { isMobile, isTablet } = useBreakpoint();
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  const footerPadding = isMobile ? '60px 20px 36px' : isTablet ? '72px 32px 40px' : '80px 80px 48px';

  return (
    <footer style={{ padding: footerPadding, background: '#060608' }}>
      <div ref={ref} style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.9 }}
        >
          {/* Top row */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-start',
              marginBottom: isMobile ? '48px' : '64px',
              flexDirection: isMobile ? 'column' : 'row',
              gap: isMobile ? '40px' : '40px',
              flexWrap: 'wrap',
            }}
          >
            {/* Brand */}
            <div style={{ maxWidth: '280px' }}>
              <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '36px', fontWeight: 300, color: '#C9A96E', letterSpacing: '0.12em', marginBottom: '14px' }}>
                LIVRR
              </div>
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '14px', fontWeight: 300, color: 'rgba(255,255,255,0.3)', lineHeight: 1.7, fontStyle: 'italic' }}>
                {t.footer.tagline}
              </p>
            </div>

            {/* Links */}
            <div style={{ display: 'flex', gap: isMobile ? '40px' : '80px', flexWrap: 'wrap' }}>
              <div>
                <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '10px', fontWeight: 500, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#C9A96E', marginBottom: '18px' }}>
                  Plateforme
                </div>
                {['Comment ça marche', 'Boutiques partenaires', "Télécharger l'app"].map((link) => (
                  <div
                    key={link}
                    style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '13px', color: 'rgba(255,255,255,0.3)', marginBottom: '10px', cursor: 'pointer', transition: 'color 0.2s' }}
                    onMouseEnter={(e) => (e.target.style.color = '#C9A96E')}
                    onMouseLeave={(e) => (e.target.style.color = 'rgba(255,255,255,0.3)')}
                  >
                    {link}
                  </div>
                ))}
              </div>
              <div>
                <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '10px', fontWeight: 500, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#C9A96E', marginBottom: '18px' }}>
                  Légal
                </div>
                {t.footer.links.map((link) => (
                  <div
                    key={link}
                    style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '13px', color: 'rgba(255,255,255,0.3)', marginBottom: '10px', cursor: 'pointer', transition: 'color 0.2s' }}
                    onMouseEnter={(e) => (e.target.style.color = '#C9A96E')}
                    onMouseLeave={(e) => (e.target.style.color = 'rgba(255,255,255,0.3)')}
                  >
                    {link}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Divider */}
          <div style={{ height: '0.5px', background: 'rgba(201,169,110,0.12)', marginBottom: '28px' }} />

          {/* Bottom row */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              flexDirection: isMobile ? 'column' : 'row',
              gap: isMobile ? '12px' : '16px',
              textAlign: isMobile ? 'center' : 'left',
            }}
          >
            <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '11px', color: 'rgba(255,255,255,0.18)', letterSpacing: '0.06em' }}>
              {t.footer.rights}
            </span>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <div style={{ width: '5px', height: '5px', borderRadius: '50%', background: '#C9A96E', opacity: 0.5 }} />
              <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '11px', color: 'rgba(255,255,255,0.18)', letterSpacing: '0.08em' }}>
                Paris, France
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
