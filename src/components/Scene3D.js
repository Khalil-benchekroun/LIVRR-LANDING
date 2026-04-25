import React, { useEffect, useRef, useState } from 'react';
import { useBreakpoint } from '../hooks/useBreakpoint';

const SCREENS = ['home', 'product', 'checkout', 'tracking'];
const DURATIONS = { home: 2800, product: 2500, checkout: 2200, tracking: 2800 };

function HomeScreen({ progress }) {
  const items = [
    { name: 'Maison Élise', cat: 'Concept Store · Paris 6e', delay: '< 3h', tag: 'Nouveautés' },
    { name: 'Studio Noir', cat: 'Prêt-à-porter · Paris 1er', delay: '< 2h', tag: 'Tendance' },
    { name: 'Atelier Blanc', cat: 'Accessoires · Paris 8e', delay: '< 1h', tag: 'Exclusif' },
  ];
  return (
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
      <div style={{ padding: '16px 16px 10px', background: '#0A0A0F', borderBottom: '0.5px solid #1A1A28' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
          <span style={{ fontFamily: 'Georgia, serif', fontSize: '20px', fontWeight: 700, color: '#C9A96E', letterSpacing: '4px' }}>LIVRR</span>
          <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: '#1A1A28', border: '1px solid #C9A96E44', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div style={{ width: '14px', height: '10px', display: 'flex', flexDirection: 'column', gap: '3px' }}>
              {[0, 1, 2].map((i) => <div key={i} style={{ height: '1.5px', background: '#C9A96E', borderRadius: '1px' }} />)}
            </div>
          </div>
        </div>
        <div style={{ background: '#111118', borderRadius: '20px', padding: '8px 14px', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <div style={{ width: '14px', height: '14px', border: '1.5px solid #444455', borderRadius: '50%', position: 'relative', flexShrink: 0 }}>
            <div style={{ position: 'absolute', bottom: '-4px', right: '-3px', width: '5px', height: '1.5px', background: '#444455', transform: 'rotate(45deg)', borderRadius: '1px' }} />
          </div>
          <span style={{ fontSize: '12px', color: '#444455' }}>Rechercher une boutique...</span>
        </div>
      </div>
      <div style={{ flex: 1, overflowY: 'hidden', padding: '14px 14px 0', transform: `translateY(${-progress * 60}px)`, transition: 'transform 0.1s linear' }}>
        <div style={{ display: 'flex', gap: '8px', marginBottom: '16px' }}>
          {['Tout', 'Robes', 'Sacs', 'Bijoux'].map((tag, i) => (
            <div key={tag} style={{ padding: '5px 14px', borderRadius: '14px', fontSize: '11px', fontWeight: 600, background: i === 0 ? '#C9A96E' : '#1A1A28', color: i === 0 ? '#0A0A0F' : '#666677', whiteSpace: 'nowrap', flexShrink: 0 }}>{tag}</div>
          ))}
        </div>
        <div style={{ fontSize: '13px', fontWeight: 600, color: '#FFFFFF', marginBottom: '12px', letterSpacing: '0.5px' }}>Boutiques à la une</div>
        {items.map((item, i) => (
          <div key={i} style={{ background: '#111118', borderRadius: '12px', padding: '14px', marginBottom: '10px', border: '0.5px solid #1E1E2E', display: 'flex', alignItems: 'center', gap: '12px', opacity: progress > 0.3 && i === 0 ? 0.5 : 1, transition: 'opacity 0.3s' }}>
            <div style={{ width: '44px', height: '44px', borderRadius: '10px', flexShrink: 0, background: `linear-gradient(135deg, ${['#1E1A14','#141420','#1A1614'][i]}, ${['#2A2418','#1E1E32','#281E1A'][i]})`, border: '1px solid #C9A96E33', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <div style={{ width: '18px', height: '18px', border: '1.5px solid #C9A96E88', borderRadius: '4px' }} />
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: '13px', fontWeight: 600, color: '#FFFFFF', marginBottom: '3px' }}>{item.name}</div>
              <div style={{ fontSize: '11px', color: '#555566' }}>{item.cat}</div>
            </div>
            <div style={{ textAlign: 'right' }}>
              <div style={{ fontSize: '10px', color: '#C9A96E', fontWeight: 600, background: '#C9A96E14', padding: '3px 8px', borderRadius: '8px', marginBottom: '3px' }}>{item.delay}</div>
              <div style={{ fontSize: '9px', color: '#444455' }}>{item.tag}</div>
            </div>
          </div>
        ))}
      </div>
      <div style={{ padding: '10px 0 14px', background: '#0A0A0F', borderTop: '0.5px solid #1A1A28', display: 'flex', justifyContent: 'space-around' }}>
        {[['⌂','Accueil',true],['♡','Favoris',false],['◎','Suivi',false],['◉','Profil',false]].map(([icon, label, active]) => (
          <div key={label} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '3px' }}>
            <span style={{ fontSize: '16px', color: active ? '#C9A96E' : '#333344' }}>{icon}</span>
            <span style={{ fontSize: '9px', color: active ? '#C9A96E' : '#333344' }}>{label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function ProductScreen({ progress }) {
  const tapped = progress > 0.6;
  return (
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
      <div style={{ padding: '14px 16px', display: 'flex', alignItems: 'center', gap: '12px', background: '#0A0A0F' }}>
        <div style={{ fontSize: '16px', color: '#C9A96E' }}>←</div>
        <span style={{ fontSize: '13px', fontWeight: 600, color: '#FFFFFF' }}>Maison Élise</span>
      </div>
      <div style={{ height: '200px', flexShrink: 0, background: 'linear-gradient(160deg, #1A1620, #0E1018)', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 60% 40%, rgba(201,169,110,0.12), transparent 70%)' }} />
        <svg width="80" height="130" viewBox="0 0 80 130" fill="none">
          <path d="M30 0 C30 0 20 8 18 16 L5 40 L20 42 L16 130 L64 130 L60 42 L75 40 L62 16 C60 8 50 0 50 0 Z" fill="#C9A96E22" stroke="#C9A96E" strokeWidth="0.8" />
          <ellipse cx="40" cy="4" rx="10" ry="4" fill="#C9A96E33" stroke="#C9A96E88" strokeWidth="0.6" />
        </svg>
        <div style={{ position: 'absolute', top: '12px', right: '12px', background: '#C9A96E', color: '#0A0A0F', fontSize: '9px', fontWeight: 700, padding: '3px 8px', borderRadius: '4px', letterSpacing: '0.5px' }}>EXCLUSIF</div>
      </div>
      <div style={{ flex: 1, padding: '16px', overflowY: 'hidden' }}>
        <div style={{ fontSize: '18px', fontWeight: 700, color: '#FFFFFF', fontFamily: 'Georgia, serif', marginBottom: '4px' }}>Robe Midi Sculptée</div>
        <div style={{ fontSize: '11px', color: '#666677', marginBottom: '14px' }}>Maison Élise · Paris 6e</div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px', padding: '12px', background: '#111118', borderRadius: '10px', border: '0.5px solid #1E1E2E' }}>
          <div>
            <div style={{ fontSize: '22px', fontWeight: 700, color: '#C9A96E' }}>485 €</div>
            <div style={{ fontSize: '10px', color: '#444455' }}>Prix boutique</div>
          </div>
          <div style={{ textAlign: 'right' }}>
            <div style={{ fontSize: '12px', fontWeight: 600, color: '#FFFFFF' }}>Livraison avant</div>
            <div style={{ fontSize: '16px', fontWeight: 700, color: '#C9A96E' }}>15h30</div>
          </div>
        </div>
        <div style={{ display: 'flex', gap: '8px', marginBottom: '16px' }}>
          {['XS','S','M','L'].map((s, i) => (
            <div key={s} style={{ width: '36px', height: '36px', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '11px', fontWeight: 600, background: i === 1 ? '#C9A96E' : '#111118', color: i === 1 ? '#0A0A0F' : '#444455', border: `1px solid ${i === 1 ? '#C9A96E' : '#1E1E2E'}` }}>{s}</div>
          ))}
        </div>
        <div style={{ background: tapped ? '#E8D5A3' : '#C9A96E', borderRadius: '12px', padding: '14px', textAlign: 'center', transform: tapped ? 'scale(0.97)' : 'scale(1)', transition: 'all 0.15s' }}>
          <span style={{ fontSize: '13px', fontWeight: 700, color: '#0A0A0F', letterSpacing: '1px' }}>{tapped ? 'Commande en cours...' : 'Commander maintenant'}</span>
        </div>
      </div>
    </div>
  );
}

function CheckoutScreen({ progress }) {
  const confirmed = progress > 0.5;
  return (
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '20px', overflow: 'hidden' }}>
      <div style={{ width: '72px', height: '72px', borderRadius: '50%', border: `3px solid ${confirmed ? '#C9A96E' : '#1E1E2E'}`, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px', background: confirmed ? 'rgba(201,169,110,0.1)' : 'transparent', transform: confirmed ? 'scale(1.05)' : 'scale(0.9)', transition: 'all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)', boxShadow: confirmed ? '0 0 30px rgba(201,169,110,0.2)' : 'none' }}>
        <svg width="32" height="32" viewBox="0 0 32 32">
          <path d="M6 16 L13 23 L26 10" stroke="#C9A96E" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" strokeDasharray="30" strokeDashoffset={confirmed ? 0 : 30} style={{ transition: 'stroke-dashoffset 0.5s ease 0.2s' }} />
        </svg>
      </div>
      <div style={{ fontSize: '20px', fontWeight: 700, color: '#FFFFFF', fontFamily: 'Georgia, serif', marginBottom: '8px', textAlign: 'center' }}>{confirmed ? 'Commande confirmée !' : 'Traitement...'}</div>
      <div style={{ fontSize: '12px', color: '#555566', textAlign: 'center', marginBottom: '24px', lineHeight: 1.6 }}>{confirmed ? 'Votre boutique prépare\nvotre commande' : 'Sécurisation du paiement'}</div>
      <div style={{ width: '100%', background: '#111118', borderRadius: '12px', padding: '14px', border: '0.5px solid #1E1E2E', marginBottom: '14px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
          <span style={{ fontSize: '12px', color: '#888899' }}>Robe Midi Sculptée</span>
          <span style={{ fontSize: '12px', color: '#FFFFFF', fontWeight: 600 }}>485 €</span>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
          <span style={{ fontSize: '12px', color: '#888899' }}>Livraison LIVRR</span>
          <span style={{ fontSize: '12px', color: '#C9A96E', fontWeight: 600 }}>9,90 €</span>
        </div>
        <div style={{ height: '0.5px', background: '#1E1E2E', margin: '8px 0' }} />
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <span style={{ fontSize: '13px', fontWeight: 700, color: '#FFFFFF' }}>Total</span>
          <span style={{ fontSize: '13px', fontWeight: 700, color: '#C9A96E' }}>494,90 €</span>
        </div>
      </div>
      <div style={{ width: '100%', background: 'rgba(201,169,110,0.08)', borderRadius: '10px', padding: '12px', border: '1px solid rgba(201,169,110,0.2)', display: 'flex', alignItems: 'center', gap: '10px', opacity: confirmed ? 1 : 0, transition: 'opacity 0.4s ease 0.3s' }}>
        <div style={{ fontSize: '22px' }}>🕐</div>
        <div>
          <div style={{ fontSize: '11px', color: '#888899' }}>Livraison estimée</div>
          <div style={{ fontSize: '15px', fontWeight: 700, color: '#C9A96E' }}>Aujourd'hui avant 15h30</div>
        </div>
      </div>
    </div>
  );
}

function TrackingScreen({ progress }) {
  const steps = [
    { label: 'Commande reçue', sub: 'Maison Élise prépare votre sélection', done: true },
    { label: 'Préparation', sub: 'Emballage premium en cours', done: progress > 0.25 },
    { label: 'Collectée', sub: 'Livreur LIVRR en route', done: progress > 0.55 },
    { label: 'Livrée', sub: 'À votre porte', done: false },
  ];
  const activeStep = steps.filter((s) => s.done).length;
  return (
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
      <div style={{ padding: '14px 16px 10px', display: 'flex', alignItems: 'center', gap: '12px', background: '#0A0A0F' }}>
        <div style={{ fontSize: '16px', color: '#C9A96E' }}>←</div>
        <span style={{ fontSize: '13px', fontWeight: 600, color: '#FFFFFF' }}>Suivi de commande</span>
      </div>
      <div style={{ height: '140px', flexShrink: 0, background: 'linear-gradient(160deg, #0D1018, #111820)', position: 'relative', overflow: 'hidden' }}>
        {[...Array(6)].map((_, i) => <div key={i} style={{ position: 'absolute', left: 0, right: 0, top: `${i * 20}%`, height: '0.5px', background: '#1A2030' }} />)}
        {[...Array(8)].map((_, i) => <div key={i} style={{ position: 'absolute', top: 0, bottom: 0, left: `${i * 14}%`, width: '0.5px', background: '#1A2030' }} />)}
        <svg style={{ position: 'absolute', inset: 0 }} width="100%" height="100%" viewBox="0 0 300 140">
          <path d="M 40 110 C 80 110 100 60 150 50 C 200 40 230 70 260 50" stroke="#C9A96E44" strokeWidth="2" fill="none" strokeDasharray="4 4" />
          <circle cx={40 + progress * 220} cy={110 - Math.sin(progress * Math.PI) * 60} r="6" fill="#C9A96E" />
          <circle cx={40 + progress * 220} cy={110 - Math.sin(progress * Math.PI) * 60} r="12" fill="rgba(201,169,110,0.2)" />
          <circle cx="260" cy="50" r="5" fill="#FFFFFF" opacity="0.5" />
        </svg>
        <div style={{ position: 'absolute', top: '10px', right: '12px', background: 'rgba(10,10,15,0.8)', border: '1px solid #C9A96E44', borderRadius: '8px', padding: '6px 10px', backdropFilter: 'blur(8px)' }}>
          <div style={{ fontSize: '9px', color: '#888899' }}>Arrivée estimée</div>
          <div style={{ fontSize: '14px', fontWeight: 700, color: '#C9A96E' }}>15h30</div>
        </div>
      </div>
      <div style={{ flex: 1, padding: '16px', overflowY: 'hidden' }}>
        <div style={{ fontSize: '12px', fontWeight: 600, color: '#888899', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '16px' }}>Étape {activeStep} / {steps.length}</div>
        {steps.map((step, i) => (
          <div key={i} style={{ display: 'flex', gap: '12px', marginBottom: '16px' }}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '20px', flexShrink: 0 }}>
              <div style={{ width: '16px', height: '16px', borderRadius: '50%', background: step.done ? '#C9A96E' : '#1A1A28', border: `2px solid ${step.done ? '#C9A96E' : '#2A2A38'}`, flexShrink: 0, boxShadow: step.done && i === activeStep - 1 ? '0 0 10px rgba(201,169,110,0.5)' : 'none', transition: 'all 0.3s', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                {step.done && <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#0A0A0F' }} />}
              </div>
              {i < steps.length - 1 && <div style={{ width: '1.5px', flex: 1, background: step.done ? '#C9A96E44' : '#1A1A28', marginTop: '4px' }} />}
            </div>
            <div>
              <div style={{ fontSize: '13px', fontWeight: 600, color: step.done ? '#FFFFFF' : '#333344', marginBottom: '3px', transition: 'color 0.3s' }}>{step.label}</div>
              <div style={{ fontSize: '11px', color: step.done ? '#666677' : '#2A2A38', transition: 'color 0.3s' }}>{step.sub}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function PhoneDemo({ scale = 1 }) {
  const [screenIndex, setScreenIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const screenRef = useRef(0);
  const rafRef = useRef();

  useEffect(() => {
    let screenStart = Date.now();
    function tick() {
      const screen = SCREENS[screenRef.current];
      const duration = DURATIONS[screen];
      const elapsed = Date.now() - screenStart;
      const p = Math.min(elapsed / duration, 1);
      setProgress(p);
      if (p >= 1) {
        const next = (screenRef.current + 1) % SCREENS.length;
        screenRef.current = next;
        setScreenIndex(next);
        screenStart = Date.now();
        setProgress(0);
      }
      rafRef.current = requestAnimationFrame(tick);
    }
    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  const W = Math.round(260 * scale);
  const H = Math.round(520 * scale);

  const currentScreen = SCREENS[screenIndex];
  return (
    <div style={{ position: 'relative', width: `${W}px`, height: `${H}px`, margin: '0 auto' }}>
      <div style={{ position: 'absolute', inset: '-3px', borderRadius: '42px', background: 'linear-gradient(145deg, #C9A96E, #8A6A30, #C9A96E, #E8D5A3)', zIndex: 0 }} />
      <div style={{ position: 'absolute', inset: '0px', borderRadius: '40px', background: '#0A0A0F', zIndex: 1, overflow: 'hidden', boxShadow: '0 30px 80px rgba(0,0,0,0.7), inset 0 1px 0 rgba(255,255,255,0.05)' }}>
        <div style={{ position: 'absolute', top: '10px', left: '50%', transform: 'translateX(-50%)', width: '90px', height: '22px', background: '#0A0A0F', borderRadius: '12px', zIndex: 10, boxShadow: '0 0 0 1px #1A1A28' }} />
        <div style={{ position: 'absolute', inset: 0, borderRadius: '40px', overflow: 'hidden', paddingTop: '38px' }}>
          {currentScreen === 'home' && <HomeScreen progress={progress} />}
          {currentScreen === 'product' && <ProductScreen progress={progress} />}
          {currentScreen === 'checkout' && <CheckoutScreen progress={progress} />}
          {currentScreen === 'tracking' && <TrackingScreen progress={progress} />}
        </div>
        <div style={{ position: 'absolute', bottom: '8px', left: '50%', transform: 'translateX(-50%)', width: '100px', height: '4px', background: 'rgba(255,255,255,0.2)', borderRadius: '2px', zIndex: 10 }} />
      </div>
      <div style={{ position: 'absolute', right: '-5px', top: '100px', width: '4px', height: '50px', background: 'linear-gradient(180deg, #C9A96E, #8A6A30)', borderRadius: '2px', zIndex: 2 }} />
      {[60, 100].map((top) => (
        <div key={top} style={{ position: 'absolute', left: '-5px', top: `${top}px`, width: '4px', height: '36px', background: 'linear-gradient(180deg, #C9A96E, #8A6A30)', borderRadius: '2px', zIndex: 2 }} />
      ))}
      {/* Glow */}
      <div style={{ position: 'absolute', bottom: '-40px', left: '50%', transform: 'translateX(-50%)', width: '200px', height: '60px', background: 'radial-gradient(ellipse, rgba(201,169,110,0.25) 0%, transparent 70%)', zIndex: 0 }} />
      {/* Dots */}
      <div style={{ position: 'absolute', bottom: '-32px', left: '50%', transform: 'translateX(-50%)', display: 'flex', gap: '6px', zIndex: 3 }}>
        {SCREENS.map((_, i) => (
          <div key={i} style={{ width: i === screenIndex ? '20px' : '6px', height: '6px', borderRadius: '3px', background: i === screenIndex ? '#C9A96E' : '#333344', transition: 'all 0.3s ease' }} />
        ))}
      </div>
    </div>
  );
}

export default function Scene3D({ style, scale }) {
  return (
    <div style={{ ...style, display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
      <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '400px', height: '400px', background: 'radial-gradient(ellipse, rgba(201,169,110,0.08) 0%, transparent 70%)', pointerEvents: 'none' }} />
      <PhoneDemo scale={scale || 1} />
    </div>
  );
}
