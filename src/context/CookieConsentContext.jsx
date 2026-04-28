/**
 * CookieConsentContext.jsx
 * ─────────────────────────────────────────────────────────────────
 * Gestion centralisée du consentement aux cookies (RGPD).
 * Stockage dans localStorage, activation conditionnelle des scripts.
 * ─────────────────────────────────────────────────────────────────
 */
import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';

// ── Clé de stockage ───────────────────────────────────────────────
const STORAGE_KEY = 'oriotel_cookie_consent';

// ── Valeurs par défaut ────────────────────────────────────────────
const DEFAULT_PREFERENCES = {
  necessary: true,     // Toujours activé, non modifiable
  analytics: false,    // Google Analytics, etc.
  marketing: false,    // Publicité, réseaux sociaux, etc.
};

// ── Contexte ─────────────────────────────────────────────────────
const CookieConsentContext = createContext(null);

/**
 * Injecte dynamiquement Google Analytics si l'analytics est consenti.
 * @param {boolean} enabled
 */
function applyAnalyticsScripts(enabled) {
  if (enabled && typeof window !== 'undefined') {
    // Exemple : Google Analytics 4 – remplacez G-XXXXXXXX par votre ID réel
    if (!document.getElementById('ga-script')) {
      const script = document.createElement('script');
      script.id = 'ga-script';
      script.async = true;
      script.src = 'https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXX';
      document.head.appendChild(script);

      window.dataLayer = window.dataLayer || [];
      function gtag() { window.dataLayer.push(arguments); }
      window.gtag = gtag;
      gtag('js', new Date());
      gtag('config', 'G-XXXXXXXX', { anonymize_ip: true });
    }
  }
}

// ── Provider ──────────────────────────────────────────────────────
export const CookieConsentProvider = ({ children }) => {
  // null = pas encore décidé, objet = préférences enregistrées
  const [consent, setConsent] = useState(null);
  const [showBanner, setShowBanner] = useState(false);
  const [showSettings, setShowSettings] = useState(false);

  // Chargement initial depuis localStorage
  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored);
        setConsent(parsed);
        applyAnalyticsScripts(parsed.analytics);
        setShowBanner(false);
      } else {
        // Première visite : afficher la bannière après un court délai
        const timer = setTimeout(() => setShowBanner(true), 800);
        return () => clearTimeout(timer);
      }
    } catch {
      setShowBanner(true);
    }
  }, []);

  /** Sauvegarde les préférences et active les scripts correspondants */
  const saveConsent = useCallback((preferences) => {
    const updated = { ...DEFAULT_PREFERENCES, ...preferences, necessary: true };
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    } catch { /* quota exceeded – silent */ }
    setConsent(updated);
    applyAnalyticsScripts(updated.analytics);
    setShowBanner(false);
    setShowSettings(false);
  }, []);

  /** Accepter toutes les catégories */
  const acceptAll = useCallback(() => {
    saveConsent({ necessary: true, analytics: true, marketing: true });
  }, [saveConsent]);

  /** Refuser tout (sauf nécessaires) */
  const rejectAll = useCallback(() => {
    saveConsent({ necessary: true, analytics: false, marketing: false });
  }, [saveConsent]);

  /** Ouvrir le panneau de paramétrage */
  const openSettings = useCallback(() => {
    setShowSettings(true);
    setShowBanner(false);
  }, []);

  /** Réouvrir la bannière (ex: depuis le footer) */
  const reopenBanner = useCallback(() => {
    setShowBanner(true);
    setShowSettings(false);
  }, []);

  const value = {
    consent,
    showBanner,
    showSettings,
    acceptAll,
    rejectAll,
    openSettings,
    reopenBanner,
    saveConsent,
    setShowSettings,
  };

  return (
    <CookieConsentContext.Provider value={value}>
      {children}
    </CookieConsentContext.Provider>
  );
};

// ── Hook ──────────────────────────────────────────────────────────
export const useCookieConsent = () => {
  const ctx = useContext(CookieConsentContext);
  if (!ctx) throw new Error('useCookieConsent must be used inside CookieConsentProvider');
  return ctx;
};
