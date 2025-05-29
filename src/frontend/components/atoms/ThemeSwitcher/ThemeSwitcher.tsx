import { Monitor, Moon, Sun } from '@tamagui/lucide-icons';
import React from 'react';
import { Button, Text, useTheme, XStack, YStack } from 'tamagui';

import { useColorScheme, type ThemeMode } from '@/hooks';
import { useI18n } from '@/shared';

export interface ThemeSwitcherProps {
    /** Display style - compact shows only icons, full shows labels */
    variant?: 'compact' | 'full';
    /** Size of the component */
    size?: 'sm' | 'md' | 'lg';
    /** Show as dropdown or button group */
    style?: 'dropdown' | 'buttons';
}

export function ThemeSwitcher({
    variant = 'compact',
    size = 'md',
    style = 'buttons'
}: ThemeSwitcherProps) {
    const { t } = useI18n();
    const { themeMode, setTheme } = useColorScheme();
    const theme = useTheme();

    const themes: Array<{ mode: ThemeMode; icon: React.ComponentType<any>; label: string }> = [
        { mode: 'light', icon: Sun, label: t('settings.lightTheme') },
        { mode: 'dark', icon: Moon, label: t('settings.darkTheme') },
        { mode: 'system', icon: Monitor, label: t('settings.systemTheme') },
    ];

    const buttonSize = size === 'sm' ? '$2' : size === 'lg' ? '$4' : '$3';
    const iconSize = size === 'sm' ? 16 : size === 'lg' ? 24 : 20;

    if (style === 'buttons') {
        return (
            <XStack gap="$2" alignItems="center">
                {variant === 'full' && (
                    <Text fontSize="$3" color="$gray11" fontWeight="500">
                        {t('settings.theme')}
                    </Text>
                )}
                <XStack gap="$1" backgroundColor="$gray3" borderRadius="$4" padding="$1">
                    {themes.map(({ mode, icon: Icon, label }) => (
                        <Button
                            key={mode}
                            size={buttonSize}
                            theme={themeMode === mode ? 'active' : undefined}
                            backgroundColor={themeMode === mode ? "$background" : "transparent"}
                            borderColor={themeMode === mode ? "$borderColor" : "transparent"}
                            onPress={() => setTheme(mode)}
                            icon={<Icon size={iconSize} color={theme.color?.val} />}
                        >
                            {variant === 'full' ? label : undefined}
                        </Button>
                    ))}
                </XStack>
            </XStack>
        );
    }

    // Dropdown style (can be extended later)
    return (
        <YStack gap="$2">
            {variant === 'full' && (
                <Text fontSize="$4" fontWeight="600">
                    {t('settings.theme')}
                </Text>
            )}
            <XStack gap="$2">
                {themes.map(({ mode, icon: Icon, label }) => (
                    <Button
                        key={mode}
                        size={buttonSize}
                        theme={themeMode === mode ? 'active' : undefined}
                        onPress={() => setTheme(mode)}
                        icon={<Icon size={iconSize} />}
                        flex={1}
                    >
                        {label}
                    </Button>
                ))}
            </XStack>
        </YStack>
    );
}

export default ThemeSwitcher; 