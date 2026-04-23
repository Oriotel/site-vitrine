/**
 * ServiceModal.jsx
 * -----------------------------------------------------------
 * Corrections :
 *   1. Scroll global : tout le panneau défile (image + texte)
 *      → l'image n'est plus "sticky/fixed-height", elle fait
 *        partie du flux scrollable
 *   2. Textes plus clairs : couleurs accentuées, poids plus forts
 *   3. Portal React → toujours au-dessus du header
 * -----------------------------------------------------------
 */

import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Link } from 'react-router-dom';

const ServiceModal = ({ service, onClose }) => {
  useEffect(() => {
    const handleKey = (e) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', handleKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  if (!service) return null;

  const modal = (
    <div
      style={{ position: 'fixed', inset: 0, zIndex: 9999 }}
      className="flex items-center justify-center p-4 md:p-8"
      role="dialog"
      aria-modal="true"
      aria-label={`Détails : ${service.title}`}
    >
      {/* Backdrop */}
      <div
        style={{ position: 'absolute', inset: 0 }}
        className="bg-black/75 backdrop-blur-sm animate-[fadeIn_0.2s_ease-out_both]"
        onClick={onClose}
      />

      {/* ── Panneau : scroll GLOBAL (image + texte ensemble) ── */}
      <div
        style={{ position: 'relative', zIndex: 1 }}
        className="w-full max-w-xl max-h-[82vh] overflow-y-auto rounded-3xl bg-white shadow-2xl animate-[scaleIn_0.28s_cubic-bezier(0.34,1.56,0.64,1)_both] scrollbar-hide"
      >

        {/* ── Image hero (dans le flux scrollable) ────────── */}
        <div className="relative h-56 md:h-72 w-full overflow-hidden rounded-t-3xl">
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-br from-[#1428C9]/20 to-transparent" />

          {/* Badge numéro */}
          <div className="absolute top-4 left-4 w-9 h-9 rounded-full bg-[#1428C9] flex items-center justify-center shadow-lg shadow-[#1428C9]/50">
            <span className="text-white text-xs font-bold">{String(service.id).padStart(2, '0')}</span>
          </div>

          {/* Bouton fermer */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/40 hover:bg-black/65 backdrop-blur-sm flex items-center justify-center text-white transition-all duration-200 hover:scale-110"
            aria-label="Fermer"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Titre superposé sur l'image */}
          <div className="absolute bottom-0 left-0 right-0 p-5 md:p-7">
            <span className="inline-block text-white/80 font-bold text-[10px] uppercase tracking-[0.3em] mb-2 border border-white/25 px-3 py-1 rounded-full backdrop-blur-sm">
              Expertise Oriotel
            </span>
            <h2 className="text-2xl md:text-3xl font-extrabold text-white drop-shadow-lg leading-tight">
              {service.title}
            </h2>
          </div>
        </div>

        {/* ── Corps texte (suite du scroll) ───────────────── */}
        <div className="p-6 md:p-8 flex flex-col gap-6">

          {/* Description principale */}
          <p className="text-slate-800 leading-relaxed text-base md:text-lg font-semibold">
            {service.desc}
          </p>

          {/* Description détaillée */}
          {service.details && (
            <p className="text-slate-600 leading-relaxed text-sm md:text-base">
              {service.details}
            </p>
          )}

          {/* Points clés */}
          {service.points?.length > 0 && (
            <div className="bg-slate-50 rounded-2xl p-5 border border-slate-100">
              <h3 className="text-xs font-extrabold text-[#111827] uppercase tracking-widest mb-4 flex items-center gap-2">
                <div className="w-4 h-1 bg-[#1428C9] rounded-full" />
                Ce que nous proposons
              </h3>
              <ul className="flex flex-col gap-3">
                {service.points.map((point, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="mt-2 w-2 h-2 rounded-full bg-[#1428C9] flex-shrink-0" />
                    <span className="text-slate-700 text-sm md:text-base leading-relaxed font-medium">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Séparateur */}
          <div className="border-t border-slate-200" />

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              to="/contact"
              onClick={onClose}
              className="flex-1 flex items-center justify-center gap-2 bg-[#1428C9] hover:bg-[#0C1879] text-white font-bold text-sm uppercase tracking-widest px-6 py-4 rounded-full transition-all duration-300 hover:shadow-[0_0_24px_rgba(20,40,201,0.4)] hover:-translate-y-0.5"
            >
              Nous contacter
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <button
              onClick={onClose}
              className="border-2 border-slate-200 hover:border-slate-400 text-slate-700 hover:text-slate-900 font-bold text-sm uppercase tracking-widest px-6 py-4 rounded-full transition-all duration-200 hover:bg-slate-50"
            >
              Fermer
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  return createPortal(modal, document.body);
};

export default ServiceModal;
