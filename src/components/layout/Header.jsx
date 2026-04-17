import React, { useState, useEffect } from 'react';
import { Button, buttonVariants } from '@/components/ui/button';
import { cn } from '@/utils/cn';
import { MenuToggleIcon } from '@/components/ui/menu-toggle-icon';
import { useScroll } from '@/hooks/use-scroll';

export function Header() {
  const [open, setOpen] = useState(false);
  const scrolled = useScroll(20); 

  const links = [
    { label: 'Accueil', href: '/' },
    { label: 'À propos de nous', href: '/a-propos' },
    { label: 'Notre Méthodologie', href: '/processus' },
    { label: 'Services & Expertise', href: '/services' },
    { label: 'Événements à venir', href: '/evenements' },
    { label: 'Nous contacter', href: '/contact' },
  ];

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
            'top-4 left-0 right-0 w-[95%] lg:w-[80%] max-w-6xl rounded-2xl border border-gray-200 bg-cloud-white/85 backdrop-blur-md shadow-lg py-2 px-2': 
              scrolled && !open,
            'top-0 left-0 right-0 w-full rounded-none border-b border-gray-100 bg-cloud-white py-4 px-6 lg:px-10': 
              !scrolled && !open,
            'top-0 left-0 right-0 w-full bg-cloud-white py-4 px-4': 
              open,
          }
        )}
      >
        <nav className="flex w-full items-center justify-between">
          
          {/* LOGO */}
          <a href="/" className="flex items-center gap-2 pl-2">
            <img 
              src="/assets/images/logo-oriotel.svg" 
              alt="Oriotel Logo" 
              className={cn(
                "w-auto object-contain transition-all duration-300",
                scrolled ? "h-8" : "h-10"
              )} 
            />
          </a>

          {/* MENU DESKTOP */}
          <div className="hidden lg:flex items-center gap-2">
            {links.map((link, i) => (
              <a 
                key={i} 
                className={buttonVariants({ variant: 'ghost', size: 'sm' })} 
                href={link.href}
              >
                {link.label}
              </a>
            ))}
            
            {/* BOUTON OFFRES D'EMPLOI (Avec animation de disparition) */}
            <div className={cn(
              "transition-all duration-500 ease-in-out overflow-hidden flex items-center",
              // Si on scroll : largeur 0, opacité 0, marge 0 (Disparaît en douceur)
              // Sinon : largeur max, opacité 1, marge (Apparaît)
              scrolled ? "max-w-0 opacity-0 ml-0 pointer-events-none" : "max-w-[200px] opacity-100 ml-4"
            )}>
              <a href="/carrieres/offres">
                 {/* whitespace-nowrap est crucial ici pour que le texte ne se casse pas pendant l'animation */}
                 <Button className="rounded-full px-6 whitespace-nowrap">Offres d'emploi</Button>
              </a>
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
          <div className="flex flex-col gap-2 mt-4">
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
            <a href="/carrieres/offres" className="w-full block" onClick={() => setOpen(false)}>
              <Button className="w-full h-14 text-lg rounded-xl">Consulter les Offres d'emploi</Button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;