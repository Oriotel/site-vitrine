import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Button, buttonVariants } from '@/components/ui/button';
import { PremiumButtonBlue } from '@/components/ui/PremiumButtonBlue';
import { cn } from '@/utils/cn';
import { MenuToggleIcon } from '@/components/ui/MenuToggleIcon';
import { useScroll } from '@/hooks/useScroll';
import { Globe } from 'lucide-react';
import { Logo } from '@/components/ui/Logo';

export function Header() {
  const { t, i18n } = useTranslation();
  const [open, setOpen] = useState(false);
  const scrolled = useScroll(20);
  const location = useLocation();

  const links = [
    { label: t('nav.home'), href: '/' },
    { label: t('nav.about'), href: '/a-propos' },
    { label: t('nav.services'), href: '/services' },
    { label: t('nav.events'), href: '/evenements' },
    { label: t('nav.contact'), href: '/contact' },
  ];

  const [langOpen, setLangOpen] = useState(false);
  const currentLanguage = i18n.language?.split('-')[0].toUpperCase() || 'FR';

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    
    // Save to localStorage to persist state across reloads/navigations
    localStorage.setItem('i18nextLng', lang);
    localStorage.setItem('regionalSettings', JSON.stringify({
      language: lang === 'fr' ? 'Français' : 'English'
    }));
    
    setLangOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (langOpen && !event.target.closest('.lang-dropdown')) {
        setLangOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [langOpen]);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <>
      <header
        className={cn(
          'fixed z-50 mx-auto transition-all duration-500 ease-in-out',
          {
            'top-4 left-0 right-0 w-[98%] lg:w-[85%] max-w-7xl rounded-2xl border border-gray-200 bg-cloud-white/90 backdrop-blur-md shadow-lg py-4 px-6':
              scrolled && !open,
            'top-0 left-0 right-0 w-full rounded-none border-b border-gray-100/50 bg-white/80 backdrop-blur-md py-4 px-8':
              !scrolled && !open,
            'top-0 left-0 right-0 w-full bg-cloud-white py-4 px-6':
              open,
          }
        )}
      >
        <nav className="flex w-full items-center justify-between">

          {/* ==========================================
              1. GAUCHE : LOGO
              ========================================== */}
          <div className="flex justify-start items-center">
            <Logo 
              className="h-9" 
              href="/"
            />
          </div>


          {/* ==========================================
              2. CENTRE : LIENS
              ========================================== */}
          <div className="hidden lg:flex items-center justify-center gap-1 lg:gap-2 shrink-0">
            {links.map((link, i) => {
              const isActive = location.pathname === link.href || (link.href !== '/' && location.pathname.startsWith(link.href));
              return (
                <a
                  key={i}
                  className={cn(
                    buttonVariants({ variant: 'ghost', size: 'sm' }),
                    "text-sm px-3 relative group",
                    isActive ? "text-[#1428C9] bg-transparent hover:bg-transparent" : "hover:bg-transparent"
                  )}
                  href={link.href}
                >
                  {link.label}
                  <span className={cn(
                    "absolute bottom-1 left-1/2 -translate-x-1/2 h-[2px] bg-[#1428C9] transition-all duration-300 rounded-full",
                    isActive ? "w-[60%]" : "w-0 group-hover:w-[60%]"
                  )} />
                </a>
              );
            })}

          </div>


          {/* ==========================================
              3. DROITE : ACTIONS
              ========================================== */}
          <div className="flex justify-end items-center gap-2">

            {/* Conteneur Desktop (Langue + Offres) */}
            <div className="hidden lg:flex items-center gap-2">
              {/* DROPDOWN DE LANGUE */}
              <div className={cn(
                "transition-all duration-500 ease-in-out relative lang-dropdown max-w-[120px] opacity-100"
              )}>
                <button
                  onClick={() => setLangOpen(!langOpen)}
                  className="flex items-center gap-1.5 px-3 py-1.5 text-midnight-slate hover:bg-gray-100 rounded-full cursor-pointer transition-colors"
                >
                  <Globe className="w-4 h-4 text-[#1428C9]" />
                  <span className="font-bold text-xs">{currentLanguage}</span>
                  <svg className={cn("w-3 h-3 transition-transform duration-200", langOpen ? "rotate-180" : "")} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {langOpen && (
                  <div className="absolute top-full right-0 mt-2 w-32 bg-white rounded-xl shadow-xl border border-gray-100 py-1 overflow-hidden animate-in fade-in zoom-in duration-200">
                    <button
                      onClick={() => changeLanguage('fr')}
                      className={cn(
                        "w-full text-left px-4 py-2 text-xs font-semibold hover:bg-gray-50 transition-colors",
                        currentLanguage === 'FR' ? "text-[#1428C9] bg-blue-50/50" : "text-slate-600"
                      )}
                    >
                      Français
                    </button>
                    <button
                      onClick={() => changeLanguage('en')}
                      className={cn(
                        "w-full text-left px-4 py-2 text-xs font-semibold hover:bg-gray-50 transition-colors",
                        currentLanguage === 'EN' ? "text-[#1428C9] bg-blue-50/50" : "text-slate-600"
                      )}
                    >
                      English
                    </button>
                  </div>
                )}
              </div>

              {/* BOUTON OFFRES D'EMPLOI */}
              <div className="shrink-0">
                <PremiumButtonBlue href="/carrieres/offres" size="sm" showIcon={false}>
                  {t('nav.careers')}
                </PremiumButtonBlue>
              </div>
            </div>

            {/* BOUTON MENU MOBILE */}
            <Button
              size="icon"
              variant="ghost"
              onClick={() => setOpen(!open)}
              className="lg:hidden text-midnight-slate"
            >
              <MenuToggleIcon open={open} className="size-6" duration={300} />
            </Button>
          </div>

        </nav>
      </header>

      {/* MENU MOBILE */}
      <div
        className={cn(
          'fixed top-[72px] right-0 bottom-0 left-0 z-40 flex flex-col overflow-y-auto bg-cloud-white px-6 py-6 lg:hidden transition-all duration-300 ease-in-out',
          open ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0 pointer-events-none'
        )}
      >
        <div className="flex h-full flex-col gap-4">

          <div className="flex flex-col gap-1 border-b border-gray-100 pb-4">
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2 px-2">Langue</p>
            <div className="flex gap-2">
              <button
                onClick={() => changeLanguage('fr')}
                className={cn(
                  "flex-1 py-3 rounded-xl font-bold text-sm transition-all border",
                  currentLanguage === 'FR' ? "bg-[#1428C9] text-white border-[#1428C9]" : "bg-white text-slate-600 border-gray-200"
                )}
              >
                Français
              </button>
              <button
                onClick={() => changeLanguage('en')}
                className={cn(
                  "flex-1 py-3 rounded-xl font-bold text-sm transition-all border",
                  currentLanguage === 'EN' ? "bg-[#1428C9] text-white border-[#1428C9]" : "bg-white text-slate-600 border-gray-200"
                )}
              >
                English
              </button>
            </div>
          </div>

          <div className="flex flex-col gap-2 mt-2">
            {links.map((link) => {
              const isActive = location.pathname === link.href || (link.href !== '/' && location.pathname.startsWith(link.href));
              return (
                <a
                  key={link.label}
                  className={cn(
                    buttonVariants({ variant: 'ghost', size: 'lg' }),
                    'justify-start text-lg font-medium w-full border-b border-gray-50 rounded-none py-6 relative',
                    isActive ? "text-[#1428C9]" : ""
                  )}
                  href={link.href}
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute left-0 top-1/2 -translate-y-1/2 w-1.5 h-8 bg-[#1428C9] rounded-r-full" />
                  )}
                </a>
              );
            })}
          </div>
          <div className="mt-auto pb-8 pt-4">
            <a href="/offres" className="w-full block" onClick={() => setOpen(false)}>
              <Button className="w-full h-14 text-lg rounded-xl">{t('nav.careers')}</Button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;