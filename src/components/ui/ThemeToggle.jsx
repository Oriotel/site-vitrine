import React, { useEffect, useState } from 'react';
import { Moon, Sun, ArrowUp } from 'lucide-react';

const ThemeToggle = () => {
  // L'état initial vérifie si le mode sombre était déjà activé dans localStorage
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // 1. Vérifier la préférence sauvegardée ou le système du pc
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (savedTheme === 'dark' || (!savedTheme && systemPrefersDark)) {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
    } else {
      setIsDarkMode(false);
      document.documentElement.classList.remove('dark');
    }
  }, []);

  // 2. La fonction qui s'active quand on clique sur le bouton
  const toggleTheme = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      setIsDarkMode(false);
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      setIsDarkMode(true);
    }
  };
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