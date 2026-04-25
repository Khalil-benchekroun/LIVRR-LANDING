import React, { createContext, useContext, useState } from 'react';

const translations = {
  fr: {
    nav: {
      howItWorks: 'Comment ça marche',
      boutiques: 'Boutiques',
      download: 'Téléchargez',
      forBoutiques: 'Pour les boutiques',
    },
    hero: {
      tag: 'Paris · Livraison J-0',
      title: 'Rendre réel\nce que vous désirez,\nà l\'instant même.',
      subtitle: 'Les meilleures boutiques parisiennes à votre porte en moins de 2 heures.',
      cta: "Télécharger l'app",
      ctaSub: 'Disponible sur iOS & Android',
      scroll: 'Découvrir',
    },
    how: {
      tag: 'Comment ça marche',
      title: 'Trois gestes.\nUne expérience.',
      steps: [
        { num: '01', title: 'Explorez', desc: 'Parcourez une sélection curatée de boutiques premium parisiennes. Robes, accessoires, bijoux — tout en temps réel.' },
        { num: '02', title: 'Commandez', desc: "Choisissez votre pièce, réglez en un instant. Votre boutique est notifiée immédiatement." },
        { num: '03', title: 'Recevez', desc: 'Un livreur partenaire collecte votre commande et vous la remet en main propre en moins de 2 heures.' },
      ],
    },
    boutiques: {
      tag: 'Pour les boutiques',
      title: 'Rejoignez\nla plateforme.',
      subtitle: "LIVRR connecte vos collections aux clients premium de Paris. Zéro investissement logistique. +25 à 35% de chiffre d'affaires additionnel.",
      stats: [
        { value: '25+', label: 'Boutiques partenaires Day 1' },
        { value: '< 2h', label: 'Livraison en moins de 2h' },
        { value: '0€', label: 'Investissement logistique' },
        { value: '−30%', label: 'Stock dormant' },
      ],
      cta: 'Devenir partenaire',
    },
    download: {
      tag: 'Téléchargez',
      title: "Accédez à une sélection\npensée avec exigence.",
      subtitle: 'Disponible sur iOS et Android. Scannez le QR code ou téléchargez directement.',
      ios: 'App Store',
      android: 'Google Play',
      soon: 'Bientôt disponible',
    },
    footer: {
      tagline: "L'élégance à votre porte, le jour même.",
      links: ['Mentions légales', 'Confidentialité', 'Contact'],
      rights: '© 2026 LIVRR. Tous droits réservés.',
    },
  },
  en: {
    nav: {
      howItWorks: 'How it works',
      boutiques: 'Boutiques',
      download: 'Download',
      forBoutiques: 'For boutiques',
    },
    hero: {
      tag: 'Paris · Same-day delivery',
      title: 'Making real\nwhat you desire,\nthis very instant.',
      subtitle: 'The best Parisian boutiques at your door in less than 2 hours.',
      cta: 'Download the app',
      ctaSub: 'Available on iOS & Android',
      scroll: 'Discover',
    },
    how: {
      tag: 'How it works',
      title: 'Three steps.\nOne experience.',
      steps: [
        { num: '01', title: 'Explore', desc: 'Browse a curated selection of premium Parisian boutiques. Dresses, accessories, jewelry — all in real time.' },
        { num: '02', title: 'Order', desc: 'Choose your piece, pay instantly. Your boutique is notified immediately.' },
        { num: '03', title: 'Receive', desc: 'A partner courier picks up your order and delivers it to you in less than 2 hours.' },
      ],
    },
    boutiques: {
      tag: 'For boutiques',
      title: 'Join\nthe platform.',
      subtitle: "LIVRR connects your collections to Paris's premium customers. Zero logistics investment. +25 to 35% additional revenue.",
      stats: [
        { value: '25+', label: 'Partner boutiques Day 1' },
        { value: '< 2h', label: 'Delivery in under 2h' },
        { value: '0€', label: 'Logistics investment' },
        { value: '−30%', label: 'Dead stock' },
      ],
      cta: 'Become a partner',
    },
    download: {
      tag: 'Download',
      title: 'A selection curated\nwith exacting standards.',
      subtitle: 'Available on iOS and Android. Scan the QR code or download directly.',
      ios: 'App Store',
      android: 'Google Play',
      soon: 'Coming soon',
    },
    footer: {
      tagline: 'Elegance at your door, same day.',
      links: ['Legal notice', 'Privacy', 'Contact'],
      rights: '© 2026 LIVRR. All rights reserved.',
    },
  },
};

const LangContext = createContext();

export const LangProvider = ({ children }) => {
  const [lang, setLang] = useState('fr');
  const t = translations[lang];
  return (
    <LangContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LangContext.Provider>
  );
};

export const useLang = () => useContext(LangContext);
