import React from 'react';
import Footer from './Footer';
import Header from './Header';
import { useLoading } from '@/context/LoadingContext';
import { HeaderSkeleton, FooterSkeleton } from './LayoutSkeleton';

const Layout = ({ children }) => {
  const { isLayoutLoading } = useLoading();

  return (
    /* overflow-x-hidden empêche le site de "bouger" de gauche à droite sur mobile */
    <div className="min-h-screen flex flex-col text-midnight-slate font-sans overflow-x-hidden">
      {isLayoutLoading ? <HeaderSkeleton /> : <Header />}
      <main className="flex-grow flex flex-col w-full">
        {children}
      </main>
      {isLayoutLoading ? <FooterSkeleton /> : <Footer />}
    </div>
  );
};

export default Layout;