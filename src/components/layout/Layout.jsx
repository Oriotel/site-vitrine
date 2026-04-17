// src/components/layout/Layout.jsx
import React from 'react';
import Footer from './Footer';
import Header from './Header';

const Layout = ({ children }) => {
  return (
    /* Utilisation de Flexbox pour s'assurer que le footer reste en bas
      même si le contenu principal est vide.
    */
    <div className="min-h-screen flex flex-col bg-cloud-white text-midnight-slate font-sans">
      
      {/* 1. La barre de navigation */}
      <Header />

      {/* 2. Le contenu spécifique de chaque page */}
      <main className="flex-grow flex flex-col w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {children}
      </main>

      {/* 3. Le pied de page */}
      <Footer />
      
    </div>
  );
};

export default Layout;