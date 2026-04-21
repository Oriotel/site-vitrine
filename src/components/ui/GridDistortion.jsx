import React from 'react';

/**
 * PLACEHOLDER
 * Le composant GridDistortion.jsx n'avait pas encore été créé dans l'arborescence.
 * J'ai généré ce contour pour que l'application Vite puisse compiler.
 * 
 * 👉 VEUILLEZ REMPLACER L'INTÉGRALITÉ DE CE FICHIER PAR LE CODE DE VOTRE 
 * COMPOSANT GridDistortion (celui avec Three.js que vous avez préparé).
 */
export default function GridDistortion({
  imageSrc,
  grid,
  mouse,
  strength,
  relaxation,
  className
}) {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      {imageSrc && (
        <img 
          src={imageSrc} 
          alt="Grid Distortion Placeholder" 
          className="w-full h-full object-cover object-center"
        />
      )}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
        <p className="text-white text-sm font-bold bg-black/50 px-4 py-2 rounded-lg text-center backdrop-blur-md">
          ⚠️ Placeholder GridDistortion<br/>
          (Collez votre code Three.js dans src/components/ui/GridDistortion.jsx)
        </p>
      </div>
    </div>
  );
}
