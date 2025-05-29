import { config } from '@tamagui/config/v3';
import { createTamagui } from '@tamagui/core';

const tamaguiConfig = createTamagui({
    ...config,
    fontLanguages: [],
});

export default tamaguiConfig; 