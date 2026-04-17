import React, { useEffect, useState } from "react";
import { Sun, Moon, ArrowUp } from "lucide-react";

const ThemeToggle = () => {
  const [theme, setTheme] = useState("light");

  // Logique simple pour basculer le mode sombre avec Tailwind sous Vite
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleScrollTop = () => {
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="flex items-center justify-center">
      <div className="flex items-center rounded-full border border-dotted border-gray-300 dark:border-gray-700">
        <button
          onClick={() => setTheme("light")}
          className={`mr-3 rounded-full p-2 transition-colors ${
            theme === "light" 
              ? "bg-midnight-slate text-cloud-white" 
              : "text-midnight-slate dark:text-cloud-white"
          }`}
        >
          <Sun className="h-5 w-5" strokeWidth={1.5} />
          <span className="sr-only">Mode clair</span>
        </button>

        <button type="button" onClick={handleScrollTop} className="text-gray-500 hover:text-signal-blue transition-colors">
          <ArrowUp className="h-4 w-4" />
          <span className="sr-only">Retour en haut</span>
        </button>

        <button
          onClick={() => setTheme("dark")}
          className={`ml-3 rounded-full p-2 transition-colors ${
            theme === "dark" 
              ? "bg-midnight-slate text-cloud-white" 
              : "text-midnight-slate dark:text-cloud-white"
          }`}
        >
          <Moon className="h-5 w-5" strokeWidth={1.5} />
          <span className="sr-only">Mode sombre</span>
        </button>
      </div>
    </div>
  );
};

export default ThemeToggle;