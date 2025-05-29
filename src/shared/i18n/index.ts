import { getLocales } from 'expo-localization';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Import translation files
import en from './locales/en.json';
import ru from './locales/ru.json';
import uz from './locales/uz.json';

// Language detection configuration
const languageDetector = {
    type: 'languageDetector' as const,
    async: true,
    detect: (callback: (lng: string) => void) => {
        // Get device locale
        const deviceLocale = getLocales()[0].languageCode;
        const supportedLanguages = ['en', 'ru', 'uz'];

        // Extract language code (e.g., 'en-US' -> 'en')
        const languageCode = deviceLocale?.split('-')[0];

        // Use detected language if supported, otherwise default to Uzbek
        const detectedLanguage = supportedLanguages.includes(languageCode || '')
            ? languageCode
            : 'uz';

        callback(detectedLanguage!);
    },
    init: () => { },
    cacheUserLanguage: () => { },
};

const resources = {
    en: {
        translation: en,
    },
    ru: {
        translation: ru,
    },
    uz: {
        translation: uz,
    },
};

i18n
    .use(languageDetector)
    .use(initReactI18next)
    .init({
        resources,
        fallbackLng: 'uz',
        debug: __DEV__,

        interpolation: {
            escapeValue: false, // React already escapes values
        },

        react: {
            useSuspense: false, // Disable suspense for React Native
        },

        // Namespace configuration
        defaultNS: 'translation',
        ns: ['translation'],
    });

export default i18n; 