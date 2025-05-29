import { config } from '@tamagui/config/v3';
import { createTamagui } from '@tamagui/core';

const tamaguiConfig = createTamagui({
    ...config,
    fontLanguages: [],
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
        gtXl: { minWidth: 1421 },
        short: { maxHeight: 820 },
        tall: { minHeight: 820 },
        hoverNone: { hover: 'none' },
        pointerCoarse: { pointer: 'coarse' },
    },
});

export default tamaguiConfig; 