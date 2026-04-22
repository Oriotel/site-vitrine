import React, { useEffect, useState } from 'react';
import { Moon, Sun, ArrowUp } from 'lucide-react';

const ThemeToggle = ({ isDarkMode, toggleTheme }) => {
  const handleScrollTop = () => {
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="flex items-center justify-center gap-2">
      {/* Bouton Retour en haut */}
      <button 
        type="button" 
        onClick={handleScrollTop} 
        aria-label="Retour en haut"
        className="p-2.5 rounded-xl transition-all duration-300 bg-gray-100 dark:bg-gray-800 text-midnight-slate dark:text-cloud-white hover:bg-gray-200 dark:hover:bg-gray-700"
      >
        <ArrowUp className="w-5 h-5" />
      </button>

      {/* Bouton Mode Sombre / Clair */}
      <button
        onClick={toggleTheme}
        aria-label="Toggle Dark Mode"
        className="p-2.5 rounded-xl transition-all duration-300 bg-gray-100 dark:bg-gray-800 text-midnight-slate dark:text-cloud-white hover:bg-gray-200 dark:hover:bg-gray-700"
      >
        {isDarkMode ? (
          <Sun className="w-5 h-5" />
        ) : (
          <Moon className="w-5 h-5" />
        )}
      </button>
    </div>
  );
};

export default ThemeToggle;