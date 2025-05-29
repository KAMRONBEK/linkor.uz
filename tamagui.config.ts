import { config } from '@tamagui/config/v3';
import { createTamagui } from '@tamagui/core';

const tamaguiConfig = createTamagui({
    ...config,
    fontLanguages: [],
    settings: {
        ...config.settings,
        fastSchemeChange: false,
    },
    media: {
        xs: { maxWidth: 660 },
        sm: { maxWidth: 800 },
        md: { maxWidth: 1020 },
        lg: { maxWidth: 1280 },
        xl: { maxWidth: 1420 },
        xxl: { maxWidth: 1600 },
        gtXs: { minWidth: 661 },
        gtSm: { minWidth: 801 },
        gtMd: { minWidth: 1021 },
        gtLg: { minWidth: 1281 },
        short: { maxHeight: 820 },
        tall: { minHeight: 820 },
        hoverNone: { hover: 'none' },
        pointerCoarse: { pointer: 'coarse' },
    },
    themes: {
        ...config.themes,
        // Customize dark theme to use grayish background instead of pure black
        dark: {
            ...config.themes.dark,
            background: '#0a0a0a', // Grayish dark instead of pure black
            backgroundHover: '#1a1a1a',
            backgroundPress: '#2a2a2a',
            backgroundFocus: '#1a1a1a',
        }
    }
});

export default tamaguiConfig;

export type Conf = typeof tamaguiConfig;

declare module '@tamagui/core' {
    interface TamaguiCustomConfig extends Conf { }
} 