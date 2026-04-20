import React from 'react';
import Footer from './Footer';
import Header from './Header';

const Layout = ({ children }) => {
  return (
    /* L'ASTUCE EST ICI :
       - On ajoute dark:bg-[#0f172a] (ou dark:bg-midnight-slate) pour le fond global.
       - On ajoute dark:text-cloud-white pour que PAR DÉFAUT tout le texte devienne blanc !
    */
    <div className="min-h-screen flex flex-col bg-cloud-white dark:bg-[#0f172a] text-midnight-slate dark:text-cloud-white font-sans overflow-x-hidden transition-colors duration-300">
      
      <Header />

      <main className="flex-grow flex flex-col w-full">
        {children}
      </main>

      <Footer />
      
    </div>
  );
};

export default Layout;