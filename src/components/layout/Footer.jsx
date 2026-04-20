import React from "react";
import { 
  Mail, Twitter, Linkedin, Facebook 
} from "lucide-react";
import ThemeToggle from "../ui/ThemeToggle";

const navigation = {
  categories: [
    {
      id: "company",
      name: "Navigation",
      sections: [
        {
          id: "about",
          name: "L'Entreprise",
          items: [
            { name: "Accueil", href: "/" },
            { name: "À propos de nous", href: "/a-propos" },
            { name: "Notre Méthodologie", href: "/processus" },
          ],
        },
        {
          id: "solutions",
          name: "Nos Solutions",
          items: [
            { name: "Services & Expertise", href: "/services" },
            { name: "Événements à venir", href: "/evenements" },
            { name: "S'inscrire à un événement", href: "/evenements/inscription" },
          ],
        },
        {
          id: "careers",
          name: "Nous Rejoindre",
          items: [
            { name: "Offres d'emploi", href: "/carrieres/offres" },
            { name: "Déposer une candidature", href: "/carrieres/postuler" },
            { name: "Nous contacter", href: "/contact" },
          ],
        },
      ],
    },
  ],
};

const Underline = `hover:-translate-y-1 rounded-xl p-2.5 transition-transform text-midnight-slate dark:text-cloud-white hover:text-signal-blue dark:hover:text-signal-blue`;

const Footer = () => {
  return (
    <footer className="w-full border-t border-gray-200 dark:border-gray-800 bg-cloud-white dark:bg-midnight-slate transition-colors duration-300 pt-10 flex flex-col">
      
      {/* CONTENEUR GLOBAL : Force 80% de largeur et centre parfaitement (marges égales) */}
      <div className="w-[90%] lg:w-[80%] mx-auto flex flex-col">

        {/* 1. SECTION RÉSEAUX SOCIAUX & THEME */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 pb-8">
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-2">
            <a aria-label="LinkedIn" href="#" className={Underline}>
              <Linkedin className="h-5 w-5" />
            </a>
            <a aria-label="Twitter" href="#" className={Underline}>
              <Twitter className="h-5 w-5" />
            </a>
            <a aria-label="Facebook" href="#" className={Underline}>
              <Facebook className="h-5 w-5" />
            </a>
            <a aria-label="Mail" href="mailto:contact@oriotel.com" className={Underline}>
              <Mail strokeWidth={1.5} className="h-5 w-5" />
            </a>
          </div>
          
          <div className="flex justify-center md:justify-end">
            <ThemeToggle />
          </div>
        </div>

        <div className="border-b border-gray-200 dark:border-gray-800 w-full mb-10"></div>

        {/* 2. SECTION NAVIGATION */}
        <div className="pb-10 w-full">
          {navigation.categories.map((category) => (
            <div key={category.name} className="w-full">
              {/* UTILISATION DE GRID : 3 colonnes égales, espacement parfait */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
                {category.sections.map((section) => (
                  <div key={section.name} className="flex flex-col items-center md:items-start text-center md:text-left">
                    <h3 className="text-base font-medium mb-6">
                      {section.name}
                    </h3>
                    <ul role="list" className="flex flex-col space-y-4">
                      {section.items.map((item) => (
                        <li key={item.name} className="flow-root">
                          <a
                            href={item.href}
                            className="text-sm font-normal text-gray-600 hover:text-signal-blue dark:text-gray-300 dark:hover:text-white transition-colors"
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

        <div className="border-b border-gray-200 dark:border-gray-800 w-full mb-10"></div>

        {/* 3. SECTION LOGO ET DESCRIPTION */}
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-10 pb-10">
          <a href="/" className="shrink-0">
            <div className="flex items-center justify-center">
              <img 
                src="/assets/images/logo-oriotel.svg" 
                alt="Oriotel" 
                className="h-10 w-auto object-contain dark:brightness-0 dark:invert" 
              />
            </div>
          </a>
          <p className="text-center md:text-left text-sm leading-relaxed text-gray-600 dark:text-gray-400 md:max-w-2xl lg:max-w-3xl">
            <span className="font-medium text-midnight-slate dark:text-cloud-white">ORIOTEL</span> est une entreprise marocaine spécialisée dans l’achat et la vente d’appareils téléphoniques et électriques. Grâce à son expertise en négoce et en intermédiation, elle accompagne les grandes sociétés de télécommunications ainsi que les particuliers en leur offrant des produits et services fiables, modernes et accessibles.
          </p>
        </div>

      </div>

      {/* 4. SECTION COPYRIGHT */}
      <div className="w-full bg-cloud-white dark:bg-midnight-slate py-6 border-t border-gray-200 dark:border-gray-800 mt-auto">
        <div className="w-[90%] lg:w-[80%] mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-500 dark:text-gray-400">
          <span>© {new Date().getFullYear()} ORIOTEL - Tous droits réservés</span>
          
          <div className="flex items-center gap-4">
             <a href="/mentions-legales" className="hover:text-midnight-slate dark:hover:text-cloud-white transition-colors">Mentions légales</a>
             <a href="/confidentialite" className="hover:text-midnight-slate dark:hover:text-cloud-white transition-colors">Politique de confidentialité</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;