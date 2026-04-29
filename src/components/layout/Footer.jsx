import React from 'react';
import { useTranslation } from 'react-i18next';
import { Mail } from "lucide-react";
import { Logo } from "@/components/ui/Logo";

const Footer = () => {
  const { t } = useTranslation();

  const navigation = {
    categories: [
      {
        id: "company",
        name: t('footer.nav.company.title'),
        sections: [
          {
            id: "about",
            name: t('footer.nav.company.sections.enterprise'),
            items: [
              { name: t('nav.home'), href: "/" },
              { name: t('nav.about'), href: "/a-propos" },
              { name: t('footer.nav.methodology') || "Notre Méthodologie", href: "/processus" },
            ],
          },
          {
            id: "solutions",
            name: t('footer.nav.company.sections.solutions'),
            items: [
              { name: t('nav.services'), href: "/services" },
              { name: t('footer.nav.upcoming_events') || "Événements à venir", href: "/evenements" },
              { name: t('footer.nav.register_event') || "S'inscrire à un événement", href: "/evenements/inscription" },
            ],
          },
          {
            id: "careers",
            name: t('footer.nav.company.sections.join_us'),
            items: [
              { name: t('nav.careers'), href: "/carrieres/offres" },
              { name: t('footer.nav.apply') || "Déposer une candidature", href: "/carrieres/postuler" },
              { name: t('nav.contact'), href: "/contact" },
            ],
          },
        ],
      },
    ],
  };

  const Underline = `hover:-translate-y-1 rounded-xl p-2.5 transition-transform text-slate-300 hover:text-white`;

  return (
    <footer id="site-footer" className="w-full bg-[#020C1A] text-slate-200 border-t border-white/10 transition-colors duration-300 pt-10 flex flex-col">
      
      {/* CONTENEUR GLOBAL */}
      <div className="w-[90%] lg:w-[80%] mx-auto flex flex-col">

        {/* 1. SECTION RÉSEAUX SOCIAUX */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-6 pb-8">
          <div className="flex flex-wrap items-center justify-center gap-2">
            <a aria-label="LinkedIn" href="#" className={Underline}>
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
            </a>
            <a aria-label="Twitter" href="#" className={Underline}>
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.054 10.054 0 01-3.127 1.184 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" /></svg>
            </a>
            <a aria-label="Facebook" href="#" className={Underline}>
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" /></svg>
            </a>
            <a aria-label="Mail" href="mailto:contact@oriotel.com" className={Underline}>
              <Mail strokeWidth={1.5} className="h-5 w-5" />
            </a>
          </div>
        </div>

        <div className="border-b border-white/10 w-full mb-10"></div>

        {/* 2. SECTION NAVIGATION */}
        <div className="pb-10 w-full">
          {navigation.categories.map((category) => (
            <div key={category.name} className="w-full">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
                {category.sections.map((section) => (
                  <div key={section.id} className="flex flex-col items-center md:items-start text-center md:text-left">
                    <h3 className="text-base font-semibold mb-6 !text-white uppercase tracking-wider">
                      {section.name}
                    </h3>
                    <ul role="list" className="flex flex-col space-y-4">
                      {section.items.map((item) => (
                        <li key={item.name} className="flow-root">
                          <a
                            href={item.href}
                            className="text-sm font-normal text-slate-400 hover:text-white transition-all"
                          >
                            {item.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="border-b border-white/10 w-full mb-10"></div>

        {/* 3. SECTION LOGO ET DESCRIPTION */}
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-10 pb-10">
          <Logo 
            variant="white" 
            className="h-10" 
          />
          
          <p className="text-center md:text-left text-sm leading-relaxed text-slate-400 md:max-w-2xl lg:max-w-3xl">
            {t('footer.description')}
          </p>
        </div>

      </div>

      {/* 4. SECTION COPYRIGHT */}
      <div className="w-full py-6 border-t border-white/10 mt-auto">
        <div className="w-[90%] lg:w-[80%] mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <span>{t('footer.copyright', { year: new Date().getFullYear() })}</span>
          
          <div className="flex items-center gap-4">
             <a href="/mentions-legales" className="hover:text-white hover:opacity-100 transition-colors">{t('footer.legal.mentions')}</a>
             <a href="/confidentialite" className="hover:text-white hover:opacity-100 transition-colors">{t('footer.legal.privacy')}</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;