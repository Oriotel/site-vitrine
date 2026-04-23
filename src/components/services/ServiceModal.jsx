/**
 * ServiceModal.jsx
 * -----------------------------------------------------------
 * Popup de détails pour chaque service Oriotel.
 * Design cohérent avec la page Services :
 *   - Backdrop noir/blur pour l'overlay
 *   - Image hero en haut + overlay dégradé brand
 *   - Badge service numéroté
 *   - Titre, description complète
 *   - Liste de points clés (bullets)
 *   - CTA "Nous contacter" + bouton de fermeture
 *   - Animation d'ouverture/fermeture fluide
 *
 * Props :
 *   service  – objet { id, title, desc, image, details, points }
 *   onClose  – callback de fermeture
 * -----------------------------------------------------------
 */

import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const ServiceModal = ({ service, onClose }) => {
  // Fermer avec Escape
  useEffect(() => {
    const handleKey = (e) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', handleKey);
    // Bloquer le scroll du body
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  if (!service) return null;

  return (
    /* ── Backdrop ──────────────────────────────────────────── */
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8"
      role="dialog"
      aria-modal="true"
      aria-label={`Détails : ${service.title}`}
    >
      {/* Overlay flouté */}
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm animate-[fadeIn_0.25s_ease-out_both]"
        onClick={onClose}
      />

      {/* ── Panneau modal ──────────────────────────────────── */}
      <div className="relative z-10 w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl bg-white shadow-2xl animate-[scaleIn_0.3s_cubic-bezier(0.34,1.56,0.64,1)_both] scrollbar-hide">

        {/* Bouton fermer */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/30 hover:bg-black/50 backdrop-blur-sm flex items-center justify-center text-white transition-all duration-200 hover:scale-110"
          aria-label="Fermer"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* ── Image hero du service ───────────────────────── */}
        <div className="relative h-64 md:h-80 w-full overflow-hidden rounded-t-3xl">
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-full object-cover"
          />
          {/* Overlay dégradé brand */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-br from-[#1428C9]/20 to-transparent" />

          {/* Badge numéro */}
          <div className="absolute top-5 left-5 w-10 h-10 rounded-full bg-[#1428C9] flex items-center justify-center shadow-lg shadow-[#1428C9]/40">
            <span className="text-white text-xs font-bold">{String(service.id).padStart(2, '0')}</span>
          </div>

          {/* Titre superposé */}
          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
            <span className="inline-block text-white/70 font-bold text-xs uppercase tracking-[0.3em] mb-2 border border-white/20 px-3 py-1 rounded-full backdrop-blur-sm">
              Expertise Oriotel
            </span>
            <h2 className="text-2xl md:text-3xl font-extrabold text-white drop-shadow-lg leading-tight">
              {service.title}
            </h2>
          </div>
        </div>

        {/* ── Corps du modal ──────────────────────────────── */}
        <div className="p-6 md:p-8 flex flex-col gap-6">

          {/* Description complète */}
          <div>
            <p className="text-slate-600 leading-relaxed text-base md:text-lg">
              {service.desc}
            </p>
            {service.details && (
              <p className="text-slate-500 leading-relaxed text-sm md:text-base mt-3">
                {service.details}
              </p>
            )}
          </div>

          {/* Points clés */}
          {service.points && service.points.length > 0 && (
            <div>
              <h3 className="text-sm font-bold text-[#111827] uppercase tracking-widest mb-4 flex items-center gap-2">
                <div className="w-4 h-1 bg-[#1428C9] rounded-full" />
                Ce que nous proposons
              </h3>
              <ul className="flex flex-col gap-3">
                {service.points.map((point, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="mt-1.5 w-2 h-2 rounded-full bg-[#1428C9] flex-shrink-0" />
                    <span className="text-slate-600 text-sm leading-relaxed">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Séparateur */}
          <div className="border-t border-slate-100" />

          {/* CTA + Fermer */}
          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              to="/contact"
              onClick={onClose}
              className="flex-1 flex items-center justify-center gap-2 bg-[#1428C9] hover:bg-[#0C1879] text-white font-bold text-sm uppercase tracking-widest px-6 py-4 rounded-full transition-all duration-300 hover:shadow-[0_0_25px_rgba(20,40,201,0.4)] hover:-translate-y-0.5"
            >
              Nous contacter
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <button
              onClick={onClose}
              className="flex-1 sm:flex-none border border-slate-200 hover:border-slate-400 text-slate-600 hover:text-slate-900 font-bold text-sm uppercase tracking-widest px-6 py-4 rounded-full transition-all duration-200 hover:-translate-y-0.5"
            >
              Fermer
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceModal;
