import { useCallback, useEffect, useState } from 'react';
import { useColorScheme as useNativeColorScheme } from 'react-native';
import { MMKV } from 'react-native-mmkv';

export type ThemeMode = 'light' | 'dark' | 'system';

const THEME_STORAGE_KEY = 'app-theme-mode';

// MMKV storage instance with web support
const storage = new MMKV();

export function useColorScheme() {
    const systemColorScheme = useNativeColorScheme();
    const [themeMode, setThemeModeState] = useState<ThemeMode>('dark'); // Default to dark
    const [isLoaded, setIsLoaded] = useState(false);

    // Load saved theme preference on mount
    useEffect(() => {
        loadThemePreference();
    }, []);

    const loadThemePreference = useCallback(() => {
        try {
            const savedTheme = storage.getString(THEME_STORAGE_KEY);
            if (savedTheme && ['light', 'dark', 'system'].includes(savedTheme)) {
                setThemeModeState(savedTheme as ThemeMode);
            }
        } catch (error) {
            console.warn('Failed to load theme preference:', error);
        } finally {
            setIsLoaded(true);
        }
    }, []);

    const saveThemePreference = useCallback((mode: ThemeMode) => {
        try {
            storage.set(THEME_STORAGE_KEY, mode);
        } catch (error) {
            console.warn('Failed to save theme preference:', error);
        }
    }, []);

    const getActualColorScheme = useCallback(() => {
        if (themeMode === 'system') {
            return systemColorScheme || 'dark'; // Fallback to dark if system is null
        }
        return themeMode;
    }, [themeMode, systemColorScheme]);

    const setTheme = useCallback((mode: ThemeMode) => {
        setThemeModeState(mode);
        saveThemePreference(mode);
    }, [saveThemePreference]);

    const actualColorScheme = getActualColorScheme();

    return {
        colorScheme: actualColorScheme,
        themeMode,
        setTheme,
        isLoaded,
        isDark: actualColorScheme === 'dark',
        isLight: actualColorScheme === 'light',
    };
} 