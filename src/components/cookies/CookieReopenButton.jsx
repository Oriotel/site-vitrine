/**
 * CookieReopenButton.jsx
 * ─────────────────────────────────────────────────────────────────
 * Petit bouton flottant (coin bas-gauche) permettant à l'utilisateur
 * de rouvrir ses paramètres cookies à tout moment.
 * N'apparaît qu'une fois le choix initial effectué.
 * ─────────────────────────────────────────────────────────────────
 */
import React from 'react';
import { Cookie } from 'lucide-react';
import { useCookieConsent } from '@/context/CookieConsentContext';

const CookieReopenButton = () => {
  const { consent, showBanner, showSettings, reopenBanner } = useCookieConsent();

  // N'afficher que si le choix a été fait et aucun dialog n'est ouvert
  if (!consent || showBanner || showSettings) return null;

  return (
    <button
      onClick={reopenBanner}
      title="Gérer mes cookies"
      aria-label="Gérer mes préférences cookies"
      className="
        fixed bottom-5 left-5 z-[9999]
        w-10 h-10 rounded-full
        bg-white border border-gray-200
        shadow-[0_2px_12px_rgba(0,0,0,0.12)]
        flex items-center justify-center
        hover:shadow-[0_4px_20px_rgba(0,0,0,0.16)]
        hover:scale-110
        transition-all duration-200
        group
      "
    >
      <Cookie size={17} className="text-gray-500 group-hover:text-[#1428C9] transition-colors" />
    </button>
  );
};

export default CookieReopenButton;
