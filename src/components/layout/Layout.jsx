import React from 'react';
import Footer from './Footer';
import Header from './Header';

const Layout = ({ children }) => {
  return (
    /* overflow-x-hidden empêche le site de "bouger" de gauche à droite sur mobile */
    <div className="min-h-screen flex flex-col bg-cloud-white text-midnight-slate font-sans overflow-x-hidden">
      
      {/* 1. La barre de navigation */}
      <Header />

      {/* 2. Le contenu spécifique de chaque page 
          On laisse w-full pour que le Hero et le Footer puissent faire 100% de l'écran.
          L'équilibre gauche/droite est géré à l'intérieur de HomePage.
      */}
      <main className="flex-grow flex flex-col w-full">
        {children}
      </main>

      {/* 3. Le pied de page */}
      <Footer />
      
    </div>
  );
};

export default Layout;