/**
 * CookieBanner.jsx
 * ─────────────────────────────────────────────────────────────────
 * Bannière principale de consentement aux cookies.
 * Design glassmorphism, animation fade-in depuis le bas.
 * Boutons : Accepter tout | Paramétrer | Refuser
 * ─────────────────────────────────────────────────────────────────
 */
import React, { useState, useEffect } from 'react';
import { Cookie, Shield, X } from 'lucide-react';
import { useCookieConsent } from '@/context/CookieConsentContext';
import CookieSettings from './CookieSettings';

const CookieBanner = () => {
  const { showBanner, showSettings, acceptAll, rejectAll, openSettings } = useCookieConsent();
  const [visible, setVisible] = useState(false);

  // Déclenche l'animation d'entrée après le premier rendu
  useEffect(() => {
    if (showBanner) {
      const t = setTimeout(() => setVisible(true), 50);
      return () => clearTimeout(t);
    } else {
      setVisible(false);
    }
  }, [showBanner]);

  if (!showBanner && !showSettings) return null;

  return (
    <>
      {/* ── Bannière principale ────────────────────────────────── */}
      {showBanner && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Gestion des cookies"
          className={`
            fixed bottom-0 left-0 right-0 z-[99999]
            transition-all duration-500 ease-out
            ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
          `}
        >
          {/* Glassmorphism card */}
          <div className="
            mx-4 mb-4 md:mx-auto md:max-w-4xl
            bg-white/90 backdrop-blur-xl
            border border-white/60
            shadow-[0_-4px_40px_rgba(0,0,0,0.12),0_4px_40px_rgba(0,0,0,0.08)]
            rounded-2xl
            p-5 md:p-6
          ">
            <div className="flex flex-col md:flex-row md:items-center gap-5">

              {/* ── Icône + Texte ──────────────────────────────── */}
              <div className="flex items-start gap-4 flex-1">
                {/* Icône cookie */}
                <div className="shrink-0 w-10 h-10 rounded-xl bg-gradient-to-br from-[#1428C9] to-[#4f5ef0] flex items-center justify-center shadow-sm mt-0.5">
                  <Cookie size={18} className="text-white" />
                </div>

                <div className="space-y-1">
                  <h3 className="text-sm font-bold text-gray-900 leading-tight">
                    🍪 Nous utilisons des cookies
                  </h3>
                  <p className="text-xs text-gray-500 leading-relaxed max-w-xl">
                    Nous utilisons des cookies pour améliorer votre expérience, analyser
                    le trafic et personnaliser le contenu. Vous pouvez accepter tous les
                    cookies, les refuser ou configurer vos préférences.{' '}
                    <a
                      href="/politique-de-confidentialite"
                      className="text-[#1428C9] underline hover:no-underline font-medium"
                    >
                      En savoir plus
                    </a>
                  </p>

                  {/* Badges catégories */}
                  <div className="flex flex-wrap gap-2 pt-1">
                    {[
                      { label: 'Nécessaires', color: 'bg-green-100 text-green-700' },
                      { label: 'Analytics', color: 'bg-blue-100 text-blue-700' },
                      { label: 'Marketing', color: 'bg-purple-100 text-purple-700' },
                    ].map((badge) => (
                      <span
                        key={badge.label}
                        className={`inline-flex items-center gap-1 text-[10px] font-semibold px-2 py-0.5 rounded-full ${badge.color}`}
                      >
                        <Shield size={9} />
                        {badge.label}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* ── Boutons ──────────────────────────────────────── */}
              <div className="flex flex-col sm:flex-row gap-2 shrink-0">
                {/* Refuser */}
                <button
                  onClick={rejectAll}
                  className="
                    px-4 py-2.5 text-xs font-semibold rounded-xl
                    border border-gray-200 text-gray-600
                    hover:bg-gray-50 hover:text-gray-900
                    transition-all duration-200
                    whitespace-nowrap
                  "
                >
                  Refuser
                </button>

                {/* Paramétrer */}
                <button
                  onClick={openSettings}
                  className="
                    px-4 py-2.5 text-xs font-semibold rounded-xl
                    border border-[#1428C9]/30 text-[#1428C9]
                    hover:bg-[#1428C9]/5
                    transition-all duration-200
                    whitespace-nowrap
                  "
                >
                  Paramétrer
                </button>

                {/* Accepter tout */}
                <button
                  onClick={acceptAll}
                  className="
                    px-5 py-2.5 text-xs font-bold rounded-xl
                    bg-gradient-to-r from-[#1428C9] to-[#4f5ef0]
                    text-white shadow-[0_2px_12px_rgba(20,40,201,0.35)]
                    hover:shadow-[0_4px_20px_rgba(20,40,201,0.45)]
                    hover:-translate-y-0.5
                    transition-all duration-200
                    whitespace-nowrap
                  "
                >
                  Accepter tout
                </button>
              </div>

            </div>
          </div>
        </div>
      )}

      {/* ── Modal de paramétrage ───────────────────────────────── */}
      {showSettings && <CookieSettings />}
    </>
  );
};

export default CookieBanner;
