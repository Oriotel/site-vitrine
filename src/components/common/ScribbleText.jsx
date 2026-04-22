import React from 'react';

/**
 * ScribbleText - Adds a modern startup-style hand-drawn highlight behind text
 * @param {string} children - The text to be highlighted
 * @param {string} color - The color of the scribble (tailwind class)
 * @param {string} className - Additional classes
 */
export const ScribbleText = ({ children, color = "text-primary-500/30", className = "" }) => {
  return (
    <span className={`relative inline-block ${className}`}>
      <span className="relative z-10">{children}</span>
      <svg
        className={`absolute -bottom-1 left-0 -z-10 w-full h-[0.5em] ${color}`}
        viewBox="0 0 100 10"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0,5 Q25,0 50,5 T100,5"
          fill="none"
          stroke="currentColor"
          strokeWidth="6"
          strokeLinecap="round"
          className="animate-scribble"
        />
      </svg>
    </span>
  );
};
