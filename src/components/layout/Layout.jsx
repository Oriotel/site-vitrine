import React from 'react';
import Footer from './Footer';
import Header from './Header';

const Layout = ({ children }) => {
  return (
    /* overflow-x-hidden empêche le site de "bouger" de gauche à droite sur mobile */
    <div className="min-h-screen flex flex-col text-midnight-slate dark:text-cloud-white font-sans overflow-x-hidden">
      <Header />
      <main className="flex-grow flex flex-col w-full">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;