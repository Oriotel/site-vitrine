/**
 * CookieSettings.jsx
 * ─────────────────────────────────────────────────────────────────
 * Modal de paramétrage avancé des cookies.
 * Permet d'activer/désactiver chaque catégorie indépendamment.
 * Les cookies "nécessaires" sont toujours activés et non modifiables.
 * ─────────────────────────────────────────────────────────────────
 */
import React, { useState, useEffect } from 'react';
import { X, Shield, BarChart2, Megaphone, ChevronDown, ChevronUp, Check } from 'lucide-react';
import { useCookieConsent } from '@/context/CookieConsentContext';

// ── Définition des catégories ─────────────────────────────────────
const CATEGORIES = [
  {
    id: 'necessary',
    label: 'Cookies nécessaires',
    description:
      'Indispensables au bon fonctionnement du site. Ils permettent la navigation, la sécurité et les fonctions de base. Ne peuvent pas être désactivés.',
    icon: Shield,
    locked: true,
    color: 'text-green-600',
    bg: 'bg-green-50',
    border: 'border-green-200',
    examples: ['Session sécurisée', 'Panier', 'Préférences de langue'],
  },
  {
    id: 'analytics',
    label: 'Cookies analytiques',
    description:
      'Nous aident à comprendre comment les visiteurs interagissent avec le site (pages consultées, durée, erreurs). Les données sont anonymisées.',
    icon: BarChart2,
    locked: false,
    color: 'text-blue-600',
    bg: 'bg-blue-50',
    border: 'border-blue-200',
    examples: ['Google Analytics 4', 'Hotjar', 'Mesure de performance'],
  },
  {
    id: 'marketing',
    label: 'Cookies marketing',
    description:
      'Utilisés pour vous proposer des publicités pertinentes et mesurer l efficacité de nos campagnes publicitaires.',
    icon: Megaphone,
    locked: false,
    color: 'text-purple-600',
    bg: 'bg-purple-50',
    border: 'border-purple-200',
    examples: ['Facebook Pixel', 'Google Ads', 'Retargeting'],
  },
];

// ── Toggle Switch ─────────────────────────────────────────────────
const Toggle = ({ enabled, onChange, locked }) => (
  <button
    type="button"
    role="switch"
    aria-checked={enabled}
    disabled={locked}
    onClick={() => !locked && onChange(!enabled)}
    className={`
      relative inline-flex h-6 w-11 items-center rounded-full
      transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1428C9] focus-visible:ring-offset-2
      ${locked ? 'cursor-not-allowed opacity-70' : 'cursor-pointer'}
      ${enabled ? 'bg-gradient-to-r from-[#1428C9] to-[#4f5ef0] shadow-[0_0_10px_rgba(20,40,201,0.3)]' : 'bg-gray-200'}
    `}
  >
    <span
      className={`
        inline-block h-4 w-4 rounded-full bg-white shadow-sm
        transition-transform duration-300
        ${enabled ? 'translate-x-6' : 'translate-x-1'}
      `}
    />
  </button>
);

// ── Accordion category card ───────────────────────────────────────
const CategoryCard = ({ category, value, onChange }) => {
  const [expanded, setExpanded] = useState(false);
  const Icon = category.icon;

  return (
    <div className={`rounded-xl border ${category.border} bg-white overflow-hidden transition-all duration-200`}>
      {/* Header */}
      <div className="flex items-center gap-4 p-4">
        {/* Icône */}
        <div className={`shrink-0 w-9 h-9 rounded-lg ${category.bg} flex items-center justify-center`}>
          <Icon size={17} className={category.color} />
        </div>

        {/* Label + expand */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2">
            <span className="text-sm font-semibold text-gray-900">{category.label}</span>
            {category.locked && (
              <span className="text-[10px] font-bold text-green-700 bg-green-100 px-1.5 py-0.5 rounded-full">
                Toujours actif
              </span>
            )}
          </div>
        </div>

        {/* Controls */}
        <div className="flex items-center gap-3 shrink-0">
          {/* Toggle */}
          <Toggle
            enabled={value}
            onChange={onChange}
            locked={category.locked}
          />
          {/* Expand */}
          <button
            onClick={() => setExpanded((v) => !v)}
            className="w-7 h-7 rounded-lg bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
            aria-label={expanded ? 'Réduire' : 'En savoir plus'}
          >
            {expanded ? <ChevronUp size={14} className="text-gray-500" /> : <ChevronDown size={14} className="text-gray-500" />}
          </button>
        </div>
      </div>

      {/* Expandable details */}
      <div className={`overflow-hidden transition-all duration-300 ${expanded ? 'max-h-64' : 'max-h-0'}`}>
        <div className={`px-4 pb-4 pt-1 border-t ${category.border}`}>
          <p className="text-xs text-gray-500 leading-relaxed mb-3">{category.description}</p>
          <div className="flex flex-wrap gap-1.5">
            {category.examples.map((ex) => (
              <span key={ex} className={`text-[10px] font-medium px-2 py-0.5 rounded-full ${category.bg} ${category.color}`}>
                {ex}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// ── Modal principale ──────────────────────────────────────────────
const CookieSettings = () => {
  const { consent, saveConsent, acceptAll, rejectAll, setShowSettings } = useCookieConsent();

  // Préférences locales (avant sauvegarde)
  const [prefs, setPrefs] = useState({
    necessary: true,
    analytics: consent?.analytics ?? false,
    marketing: consent?.marketing ?? false,
  });

  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 30);
    return () => clearTimeout(t);
  }, []);

  const handleClose = () => {
    setVisible(false);
    setTimeout(() => setShowSettings(false), 300);
  };

  const handleSave = () => {
    saveConsent(prefs);
  };

  return (
    /* ── Overlay ─────────────────────────────────────────────── */
    <div
      className={`
        fixed inset-0 z-[99999] flex items-end md:items-center justify-center p-4
        transition-all duration-300
        ${visible ? 'opacity-100' : 'opacity-0'}
      `}
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
        onClick={handleClose}
        aria-hidden="true"
      />

      {/* Modal card */}
      <div
        className={`
          relative w-full max-w-lg bg-white rounded-2xl shadow-2xl
          transition-all duration-300
          ${visible ? 'translate-y-0 scale-100' : 'translate-y-8 scale-95'}
        `}
        role="dialog"
        aria-modal="true"
        aria-label="Paramètres des cookies"
      >
        {/* ── Header ─────────────────────────────────────────── */}
        <div className="flex items-center justify-between p-5 border-b border-gray-100">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#1428C9] to-[#4f5ef0] flex items-center justify-center">
              <Shield size={17} className="text-white" />
            </div>
            <div>
              <h2 className="text-base font-bold text-gray-900">Paramètres cookies</h2>
              <p className="text-xs text-gray-400">Contrôlez vos préférences de confidentialité</p>
            </div>
          </div>
          <button
            onClick={handleClose}
            className="w-8 h-8 rounded-lg hover:bg-gray-100 flex items-center justify-center transition-colors"
            aria-label="Fermer"
          >
            <X size={16} className="text-gray-500" />
          </button>
        </div>

        {/* ── Catégories ─────────────────────────────────────── */}
        <div className="p-5 space-y-3 max-h-[55vh] overflow-y-auto">
          {CATEGORIES.map((cat) => (
            <CategoryCard
              key={cat.id}
              category={cat}
              value={prefs[cat.id]}
              onChange={(val) => setPrefs((p) => ({ ...p, [cat.id]: val }))}
            />
          ))}
        </div>

        {/* ── Footer ─────────────────────────────────────────── */}
        <div className="flex flex-col sm:flex-row gap-2 p-5 border-t border-gray-100">
          {/* Refuser */}
          <button
            onClick={() => { rejectAll(); }}
            className="flex-1 px-4 py-2.5 text-xs font-semibold rounded-xl border border-gray-200 text-gray-600 hover:bg-gray-50 transition-all duration-200"
          >
            Refuser tout
          </button>

          {/* Sauvegarder la sélection */}
          <button
            onClick={handleSave}
            className="flex-1 px-4 py-2.5 text-xs font-semibold rounded-xl border border-[#1428C9]/30 text-[#1428C9] hover:bg-[#1428C9]/5 transition-all duration-200"
          >
            Sauvegarder ma sélection
          </button>

          {/* Accepter tout */}
          <button
            onClick={acceptAll}
            className="
              flex-1 flex items-center justify-center gap-1.5
              px-4 py-2.5 text-xs font-bold rounded-xl
              bg-gradient-to-r from-[#1428C9] to-[#4f5ef0] text-white
              shadow-[0_2px_12px_rgba(20,40,201,0.3)]
              hover:shadow-[0_4px_20px_rgba(20,40,201,0.4)]
              hover:-translate-y-0.5 transition-all duration-200
            "
          >
            <Check size={12} /> Accepter tout
          </button>
        </div>

        {/* RGPD notice */}
        <p className="text-center text-[10px] text-gray-400 pb-4 px-5">
          Conformément au RGPD, vous pouvez modifier vos préférences à tout moment.
        </p>
      </div>
    </div>
  );
};

export default CookieSettings;
