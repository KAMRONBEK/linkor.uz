import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';

export type SupportedLanguage = 'en' | 'ru' | 'uz';

export const SUPPORTED_LANGUAGES: SupportedLanguage[] = ['en', 'ru', 'uz'];

export const LANGUAGE_NAMES = {
    en: 'English',
    ru: 'Русский',
    uz: "O'zbek",
} as const;

export const useI18n = () => {
    const { t, i18n } = useTranslation();

    const changeLanguage = useCallback(
        async (language: SupportedLanguage) => {
            try {
                await i18n.changeLanguage(language);
            } catch (error) {
                console.error('Failed to change language:', error);
            }
        },
        [i18n]
    );

    const getCurrentLanguage = useCallback((): SupportedLanguage => {
        const currentLang = i18n.language;
        return SUPPORTED_LANGUAGES.includes(currentLang as SupportedLanguage)
            ? (currentLang as SupportedLanguage)
            : 'en';
    }, [i18n.language]);

    const isLanguageSupported = useCallback(
        (language: string): language is SupportedLanguage => SUPPORTED_LANGUAGES.includes(language as SupportedLanguage),
        []
    );

    return {
        t,
        changeLanguage,
        getCurrentLanguage,
        isLanguageSupported,
        currentLanguage: getCurrentLanguage(),
        supportedLanguages: SUPPORTED_LANGUAGES,
        languageNames: LANGUAGE_NAMES,
        isReady: i18n.isInitialized,
    };
};

export default useI18n; 