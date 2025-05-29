import { Stack } from '@tamagui/core';
import { Check, ChevronDown, ChevronUp } from '@tamagui/lucide-icons';
import { Select } from '@tamagui/select';
import { Sheet } from '@tamagui/sheet';
import React from 'react';

import { useI18n, type SupportedLanguage } from '@/shared/hooks/useI18n';
import { AdaptWhen } from 'tamagui';

export interface LanguageSelectorProps {
    size?: 'small' | 'medium' | 'large';
    variant?: 'outlined' | 'ghost';
}

export const LanguageSelector: React.FC<LanguageSelectorProps> = ({
    size = 'medium',
    variant = 'outlined',
}) => {
    const { t, currentLanguage, changeLanguage, languageNames, supportedLanguages } = useI18n();

    const handleLanguageChange = (value: string) => {
        if (value && value !== currentLanguage) {
            changeLanguage(value as SupportedLanguage);
        }
    };

    return (
        <Select
            value={currentLanguage}
            onValueChange={handleLanguageChange}
            disablePreventBodyScroll
        >
            <Select.Trigger
                width={120}
                iconAfter={ChevronDown}
                borderWidth={variant === 'outlined' ? 1 : 0}
                backgroundColor={variant === 'ghost' ? 'transparent' : '$background'}
                size={size}
            >
                <Select.Value placeholder={t('settings.language')} />
            </Select.Trigger>

            <Select.Adapt when={"$sm" as keyof AdaptWhen} platform="touch">
                <Sheet
                    modal
                    dismissOnSnapToBottom
                    animationConfig={{
                        type: 'spring',
                        damping: 20,
                        mass: 1.2,
                        stiffness: 250,
                    }}
                >
                    <Sheet.Frame>
                        <Sheet.ScrollView>
                            <Select.Adapt.Contents />
                        </Sheet.ScrollView>
                    </Sheet.Frame>
                    <Sheet.Overlay
                        animation="lazy"
                        enterStyle={{ opacity: 0 }}
                        exitStyle={{ opacity: 0 }}
                    />
                </Sheet>
            </Select.Adapt>

            <Select.Content zIndex={200000}>
                <Select.ScrollUpButton
                    alignItems="center"
                    justifyContent="center"
                    position="relative"
                    width="100%"
                    height="$3"
                >
                    <Stack zIndex={10}>
                        <ChevronUp size={20} />
                    </Stack>
                </Select.ScrollUpButton>

                <Select.Viewport minWidth={200}>
                    <Select.Group>
                        <Select.Label>{t('settings.language')}</Select.Label>
                        {supportedLanguages.map((lang) => (
                            <Select.Item
                                index={supportedLanguages.indexOf(lang)}
                                key={lang}
                                value={lang}
                            >
                                <Select.ItemText>{languageNames[lang]}</Select.ItemText>
                                <Select.ItemIndicator marginLeft="auto">
                                    <Check size={16} />
                                </Select.ItemIndicator>
                            </Select.Item>
                        ))}
                    </Select.Group>
                </Select.Viewport>

                <Select.ScrollDownButton
                    alignItems="center"
                    justifyContent="center"
                    position="relative"
                    width="100%"
                    height="$3"
                >
                    <Stack zIndex={10}>
                        <ChevronDown size={20} />
                    </Stack>
                </Select.ScrollDownButton>
            </Select.Content>
        </Select>
    );
};

export default LanguageSelector; 