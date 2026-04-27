/**
 * GlobalWowStyles.jsx
 * -----------------------------------------------------------
 * Animations CSS partagées pour les skeletons premium (WOW effect).
 * -----------------------------------------------------------
 */

import React from 'react';

const GlobalWowStyles = () => (
  <style>{`
    @keyframes wowShimmer {
      0% { transform: translateX(-100%); }
      100% { transform: translateX(100%); }
    }
    @keyframes pulseGlow {
      0%, 100% { opacity: 0.95; box-shadow: 0 4px 15px rgba(20, 40, 201, 0.02); transform: translateY(0px); }
      50% { opacity: 1; box-shadow: 0 15px 30px rgba(20, 40, 201, 0.08); transform: translateY(-4px); }
    }
    @keyframes gradientShiftHero {
      0% { background-position: 0% 50%; }
      50% { background-position: 100% 50%; }
      100% { background-position: 0% 50%; }
    }
    @keyframes floatLight {
      0%, 100% { transform: translate(0, 0) scale(1); opacity: 0.5; }
      50% { transform: translate(15px, -15px) scale(1.15); opacity: 0.8; }
    }
  `}</style>
);

export default GlobalWowStyles;
