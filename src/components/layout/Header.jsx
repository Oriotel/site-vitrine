import React, { useState, useEffect } from 'react';
import { Button, buttonVariants } from '@/components/ui/button';
import { PremiumButton } from '@/components/ui/PremiumButton';
import { cn } from '@/utils/cn';
import { MenuToggleIcon } from '@/components/ui/menu-toggle-icon';
import { useScroll } from '@/hooks/use-scroll';
import { Globe } from 'lucide-react';
import { Logo } from '@/components/ui/Logo';

export function Header() {
  const [open, setOpen] = useState(false);
  const scrolled = useScroll(20);

  const [language, setLanguage] = useState('FR');

  const links = [
    { label: 'Accueil', href: '/' },
    { label: 'À propos de nous', href: '/a-propos' },
    { label: 'Services & Expertise', href: '/services' },
    { label: 'Événements', href: '/evenements' },
    { label: 'Nous contacter', href: '/contact' },
  ];

  const toggleLanguage = () => {
    setLanguage((prevLang) => (prevLang === 'FR' ? 'EN' : 'FR'));
  };

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
            'top-4 left-0 right-0 w-[98%] lg:w-[85%] max-w-7xl rounded-2xl border border-gray-200 bg-cloud-white/90 backdrop-blur-md shadow-lg py-2 px-3':
              scrolled && !open,
            'top-0 left-0 right-0 w-full rounded-none border-b border-gray-100/50 bg-white/40 backdrop-blur-md py-4 px-6 lg:px-10':
              !scrolled && !open,
            'top-0 left-0 right-0 w-full bg-cloud-white py-4 px-4':
              open,
          }
        )}
      >
        <nav className="flex w-full items-center justify-between">

          {/* ==========================================
              1. GAUCHE : LOGO (Prend un tiers de l'espace)
              ========================================== */}
          <div className="flex-1 flex justify-start items-center">
            <Logo 
              className={scrolled ? "h-7" : "h-9"} 
              href="/"
            />
          </div>


          {/* ==========================================
              2. CENTRE : LIENS (Parfaitement au milieu)
              ========================================== */}
          <div className="hidden lg:flex items-center justify-center gap-1 lg:gap-2 shrink-0">
            {links.map((link, i) => (
              <a
                key={i}
                className={cn(
                  buttonVariants({ variant: 'ghost', size: 'sm' }),
                  "text-sm px-3"
                )}
                href={link.href}
              >
                {link.label}
              </a>
            ))}

          </div>


          {/* ==========================================
              3. DROITE : ACTIONS (Prend le dernier tiers de l'espace)
              ========================================== */}
          <div className="flex-1 flex justify-end items-center gap-2">

            {/* Conteneur Desktop (Langue + Offres) */}
            <div className="hidden lg:flex items-center gap-2">
              {/* SÉLECTEUR DE LANGUE (Disparaît au scroll) */}
              <div className={cn(
                "transition-all duration-500 ease-in-out overflow-hidden flex items-center",
                scrolled ? "max-w-0 opacity-0 ml-0 pointer-events-none" : "max-w-[100px] opacity-100"
              )}>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={toggleLanguage}
                  className="flex items-center gap-1 px-2 text-midnight-slate hover:bg-gray-100 rounded-full cursor-pointer"
                >
                  <Globe className="w-4 h-4" />
                  <span className="font-semibold text-xs transition-all">{language}</span>
                </Button>
              </div>

              {/* BOUTON OFFRES D'EMPLOI (Reste TOUJOURS visible) */}
              <div className="shrink-0">
                <PremiumButton href="/carrieres/offres" size="sm" showIcon={false}>
                  Offres d'emploi
                </PremiumButton>
              </div>
            </div>

            {/* BOUTON MENU MOBILE (Hamburger) */}
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

      {/* MENU MOBILE (Inchangé) */}
      <div
        className={cn(
          'fixed top-[72px] right-0 bottom-0 left-0 z-40 flex flex-col overflow-y-auto bg-cloud-white px-6 py-6 lg:hidden transition-all duration-300 ease-in-out',
          open ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0 pointer-events-none'
        )}
      >
        <div className="flex h-full flex-col gap-4">

          <div className="flex justify-end border-b border-gray-100 pb-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleLanguage}
              className="flex items-center gap-2"
            >
              <Globe className="w-5 h-5" />
              <span className="font-semibold">{language === 'FR' ? 'Français' : 'English'}</span>
            </Button>
          </div>

          <div className="flex flex-col gap-2 mt-2">
            {links.map((link) => (
              <a
                key={link.label}
                className={cn(
                  buttonVariants({ variant: 'ghost', size: 'lg' }),
                  'justify-start text-lg font-medium w-full border-b border-gray-50 rounded-none py-6'
                )}
                href={link.href}
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </div>
          <div className="mt-auto pb-8 pt-4">
            <a href="/offres" className="w-full block" onClick={() => setOpen(false)}>
              <Button className="w-full h-14 text-lg rounded-xl">Consulter les Offres d'emploi</Button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;