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
  <div className={`relative overflow-hidden bg-slate-50/60 backdrop-blur-md border border-slate-200/50 rounded-xl shadow-[inset_0_0_0_1px_rgba(255,255,255,0.8)] ${className}`}>
    {/* Effet Pulse en arrière-plan avec la couleur de la marque ultra légère */}
    <div className="absolute inset-0 animate-pulse bg-[#1428C9]/5" />
    
    {/* Barre lumineuse moderne (Shimmer) */}
    <div 
      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/90 to-transparent"
      style={{
        backgroundSize: '200% 100%',
        animation: 'shimmer 1.8s infinite linear'
      }}
    />
  </div>
);

export default Shimmer;
