/**
 * Shimmer.jsx  — composant utilitaire partagé
 * -----------------------------------------------------------
 * Bloc rectangle gris avec une barre de lumière glissante.
 * Utilisé dans TOUS les squelettes de chargement du projet.
 *
 * Usage :
 *   <Shimmer className="h-6 w-48 rounded-md" />
 *
 * Props :
 *   className  – classes Tailwind supplémentaires (taille, forme…)
 * -----------------------------------------------------------
 */

import React from 'react';

const Shimmer = ({ className = '' }) => (
  <div className={`relative overflow-hidden bg-slate-200 rounded ${className}`}>
    {/* Barre lumineuse en mouvement */}
    <div className="absolute inset-0 -translate-x-full animate-[shimmer_1.6s_ease-in-out_infinite] bg-gradient-to-r from-transparent via-white/60 to-transparent" />
  </div>
);

export default Shimmer;
