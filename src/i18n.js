import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

// Map regional settings language to i18n language code
const languageMap = {
    'Français': 'fr',
    'Anglais': 'en',
    'Espagnol': 'es',
    'French': 'fr',
    'English': 'en',
    'Spanish': 'es'
};

// Get saved language from regional settings
const getSavedLanguage = () => {
    try {
        const settings = localStorage.getItem('regionalSettings');
        if (settings) {
            const parsed = JSON.parse(settings);
            return languageMap[parsed.language] || 'fr';
        }
    } catch (e) {
        console.warn('Error reading regional settings:', e);
    }
    return 'fr'; // Default to French
};

i18n
    .use(Backend)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        lng: getSavedLanguage(),
        fallbackLng: 'fr',
        supportedLngs: ['en', 'fr', 'es'],
        load: 'languageOnly',
        ns: ['translation'],
        defaultNS: 'translation',
        debug: true, // Help user see loading issues in console

        interpolation: {
            escapeValue: false,
        },

        react: {
            useSuspense: false,
        },

        backend: {
            loadPath: '/locales/{{lng}}/{{ns}}.json?v=1.1',
        },

        detection: {
            order: ['localStorage', 'navigator'],
            lookupLocalStorage: 'i18nextLng',
            caches: ['localStorage'],
        },
    });

export default i18n;