import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useLang } from '../LangContext';

const styles = {
  nav: {
    position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
    padding: '0 40px', height: '72px',
    display: 'flex', alignItems: 'center', justifyContent: 'space-between',
    transition: 'background 0.4s ease, backdrop-filter 0.4s ease',
  },
  navScrolled: {
    background: 'rgba(10,10,15,0.85)',
    backdropFilter: 'blur(20px)',
    borderBottom: '0.5px solid rgba(201,169,110,0.15)',
  },
  logo: {
    fontFamily: "'Cormorant Garamond', serif",
    fontSize: '24px', fontWeight: 500, letterSpacing: '0.12em',
    color: '#C9A96E', textDecoration: 'none',
  },
  links: { display: 'flex', alignItems: 'center', gap: '36px', listStyle: 'none' },
  link: {
    fontFamily: "'DM Sans', sans-serif", fontSize: '13px', fontWeight: 400,
    color: 'rgba(255,255,255,0.65)', textDecoration: 'none', letterSpacing: '0.04em',
    transition: 'color 0.2s',
    cursor: 'pointer',
  },
  ctaBtn: {
    fontFamily: "'DM Sans', sans-serif", fontSize: '12px', fontWeight: 500,
    letterSpacing: '0.08em', textTransform: 'uppercase',
    padding: '10px 22px', borderRadius: '2px',
    background: 'transparent', border: '1px solid #C9A96E',
    color: '#C9A96E', cursor: 'pointer', transition: 'all 0.2s',
  },
  langToggle: {
    display: 'flex', gap: '6px', alignItems: 'center',
    marginLeft: '20px',
  },
  langBtn: {
    fontFamily: "'DM Sans', sans-serif", fontSize: '11px', fontWeight: 500,
    letterSpacing: '0.1em', background: 'none', border: 'none',
    cursor: 'pointer', padding: '4px 8px', borderRadius: '2px',
    transition: 'all 0.2s',
  },
};

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const { lang, setLang, t } = useLang();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.nav
      style={{ ...styles.nav, ...(scrolled ? styles.navScrolled : {}) }}
      initial={{ y: -72 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      <span style={styles.logo}>LIVRR</span>

      <ul style={styles.links}>
        <li><span style={styles.link} onClick={() => scrollTo('how')}>{t.nav.howItWorks}</span></li>
        <li><span style={styles.link} onClick={() => scrollTo('boutiques')}>{t.nav.boutiques}</span></li>
        <li><span style={styles.link} onClick={() => scrollTo('download')}>{t.nav.download}</span></li>
        <li>
          <button
            style={styles.ctaBtn}
            onMouseEnter={e => { e.target.style.background = '#C9A96E'; e.target.style.color = '#0A0A0F'; }}
            onMouseLeave={e => { e.target.style.background = 'transparent'; e.target.style.color = '#C9A96E'; }}
            onClick={() => scrollTo('download')}
          >
            {t.nav.forBoutiques}
          </button>
        </li>
        <li style={styles.langToggle}>
          {['fr', 'en'].map(l => (
            <button
              key={l}
              style={{
                ...styles.langBtn,
                color: lang === l ? '#C9A96E' : 'rgba(255,255,255,0.4)',
                background: lang === l ? 'rgba(201,169,110,0.1)' : 'none',
              }}
              onClick={() => setLang(l)}
            >
              {l.toUpperCase()}
            </button>
          ))}
        </li>
      </ul>
    </motion.nav>
  );
}
