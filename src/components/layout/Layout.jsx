// src/components/layout/Layout.jsx
import React from 'react';
import Footer from './Footer';
import Header from './Header';
import CookieBanner from '@/components/cookies/CookieBanner';
import CookieReopenButton from '@/components/cookies/CookieReopenButton';

const Layout = ({ children }) => {
  return (
    /* Utilisation de Flexbox pour s'assurer que le footer reste en bas
      même si le contenu principal est vide.
    */
    <div className="min-h-screen flex flex-col bg-cloud-white text-midnight-slate font-sans">
      
      {/* 1. La barre de navigation */}
      <Header />

      {/* 2. Le contenu spécifique de chaque page */}
      <main className="flex-grow flex flex-col w-full mx-auto">
        {children}
      </main>

      {/* 3. Le pied de page */}
      <Footer />

      {/* 4. Système de gestion des cookies (RGPD) */}
      <CookieBanner />
      <CookieReopenButton />
      
    </div>
  );
};

export default Layout;