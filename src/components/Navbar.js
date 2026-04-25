import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLang } from '../LangContext';
import { useBreakpoint } from '../hooks/useBreakpoint';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { lang, setLang, t } = useLang();
  const { isMobile, isTablet, isDesktop } = useBreakpoint();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (isDesktop) setMenuOpen(false);
  }, [isDesktop]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  const navLinks = [
    ['how', t.nav.howItWorks],
    ['boutiques', t.nav.boutiques],
    ['download', t.nav.download],
  ];

  const showHamburger = isMobile || isTablet;
  const navHeight = isMobile ? '60px' : '72px';
  const navPadding = isMobile ? '0 20px' : isTablet ? '0 32px' : '0 48px';

  return (
    <>
      <motion.nav
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        style={{
          position: 'fixed',
          top: 0, left: 0, right: 0,
          zIndex: 100,
          height: navHeight,
          padding: navPadding,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          background: scrolled || menuOpen ? 'rgba(10,10,15,0.96)' : 'transparent',
          backdropFilter: scrolled || menuOpen ? 'blur(20px)' : 'none',
          borderBottom: scrolled && !menuOpen ? '0.5px solid rgba(201,169,110,0.2)' : 'none',
          transition: 'all 0.4s ease',
        }}
      >
        {/* Logo */}
        <span
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: isMobile ? '22px' : '26px',
            fontWeight: 500,
            letterSpacing: '0.15em',
            color: '#C9A96E',
            cursor: 'pointer',
            zIndex: 101,
          }}
        >
          LIVRR
        </span>

        {/* Desktop nav */}
        {isDesktop && (
          <div style={{ display: 'flex', alignItems: 'center', gap: '40px' }}>
            {navLinks.map(([id, label]) => (
              <span
                key={id}
                onClick={() => scrollTo(id)}
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: '13px',
                  color: 'rgba(255,255,255,0.55)',
                  letterSpacing: '0.06em',
                  cursor: 'pointer',
                  transition: 'color 0.2s',
                }}
                onMouseEnter={(e) => (e.target.style.color = '#C9A96E')}
                onMouseLeave={(e) => (e.target.style.color = 'rgba(255,255,255,0.55)')}
              >
                {label}
              </span>
            ))}
            <button
              onClick={() => scrollTo('boutiques')}
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: '11px',
                fontWeight: 500,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                padding: '10px 24px',
                borderRadius: '2px',
                background: 'transparent',
                border: '1px solid rgba(201,169,110,0.6)',
                color: '#C9A96E',
                cursor: 'pointer',
                transition: 'all 0.25s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = '#C9A96E';
                e.currentTarget.style.color = '#0A0A0F';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'transparent';
                e.currentTarget.style.color = '#C9A96E';
              }}
            >
              {t.nav.forBoutiques}
            </button>
            <div style={{ display: 'flex', gap: '4px' }}>
              {['fr', 'en'].map((l) => (
                <button
                  key={l}
                  onClick={() => setLang(l)}
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: '11px',
                    fontWeight: 500,
                    background: lang === l ? 'rgba(201,169,110,0.15)' : 'none',
                    border: 'none',
                    cursor: 'pointer',
                    padding: '4px 8px',
                    color: lang === l ? '#C9A96E' : 'rgba(255,255,255,0.3)',
                    borderRadius: '2px',
                    transition: 'all 0.2s',
                  }}
                >
                  {l.toUpperCase()}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Mobile / Tablet right side */}
        {showHamburger && (
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px', zIndex: 101 }}>
            <div style={{ display: 'flex', gap: '2px' }}>
              {['fr', 'en'].map((l) => (
                <button
                  key={l}
                  onClick={() => setLang(l)}
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: '10px',
                    fontWeight: 500,
                    background: lang === l ? 'rgba(201,169,110,0.15)' : 'none',
                    border: 'none',
                    cursor: 'pointer',
                    padding: '4px 7px',
                    color: lang === l ? '#C9A96E' : 'rgba(255,255,255,0.3)',
                    borderRadius: '2px',
                  }}
                >
                  {l.toUpperCase()}
                </button>
              ))}
            </div>
            {/* Hamburger button */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                padding: '6px',
                display: 'flex',
                flexDirection: 'column',
                gap: '5px',
              }}
            >
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  animate={
                    menuOpen
                      ? i === 0 ? { rotate: 45, y: 10 }
                      : i === 1 ? { opacity: 0, x: -8 }
                      : { rotate: -45, y: -10 }
                      : { rotate: 0, y: 0, opacity: 1, x: 0 }
                  }
                  transition={{ duration: 0.28 }}
                  style={{
                    width: i === 1 ? '18px' : '26px',
                    height: '1.5px',
                    background: '#C9A96E',
                    borderRadius: '1px',
                    transformOrigin: 'center',
                  }}
                />
              ))}
            </button>
          </div>
        )}
      </motion.nav>

      {/* Fullscreen mobile menu */}
      <AnimatePresence>
        {menuOpen && showHamburger && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            style={{
              position: 'fixed',
              inset: 0,
              zIndex: 99,
              background: 'rgba(10,10,15,0.98)',
              backdropFilter: 'blur(24px)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <div style={{ width: '1px', height: '48px', background: 'linear-gradient(transparent, #C9A96E44)', marginBottom: '48px' }} />
            {navLinks.map(([id, label], i) => (
              <motion.div
                key={id}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ delay: i * 0.07 + 0.05 }}
                onClick={() => scrollTo(id)}
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: isTablet ? '56px' : '44px',
                  fontWeight: 300,
                  color: 'rgba(255,255,255,0.7)',
                  cursor: 'pointer',
                  padding: '10px 0',
                  textAlign: 'center',
                  transition: 'color 0.2s',
                  letterSpacing: '0.02em',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#C9A96E')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.7)')}
              >
                {label}
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.35 }}
              style={{ marginTop: '44px' }}
            >
              <button
                onClick={() => scrollTo('boutiques')}
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: '11px',
                  fontWeight: 500,
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                  padding: '14px 36px',
                  borderRadius: '2px',
                  background: 'transparent',
                  border: '1px solid rgba(201,169,110,0.45)',
                  color: '#C9A96E',
                  cursor: 'pointer',
                }}
              >
                {t.nav.forBoutiques}
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
