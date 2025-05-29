import { Bell, Globe, Info, Palette, Settings as SettingsIcon, Shield } from '@tamagui/lucide-icons';
import React from 'react';
import { ScrollView, Separator, Text, XStack, YStack } from 'tamagui';

import { LanguageSelector } from '@/atoms';
import { useI18n } from '@/shared';

export default function SettingsScreen() {
    const { t } = useI18n();

    const SettingItem = ({
        icon: Icon,
        title,
        description,
        children
    }: {
        icon: React.ComponentType<{ size?: number; color?: string }>;
        title: string;
        description?: string;
        children?: React.ReactNode;
    }) => (
        <XStack
            alignItems="center"
            justifyContent="space-between"
            padding="$4"
            backgroundColor="$background"
            borderRadius="$4"
            gap="$3"
        >
            <XStack alignItems="center" gap="$3" flex={1}>
                <Icon size={20} color="$color" />
                <YStack flex={1}>
                    <Text fontSize="$4" fontWeight="500">
                        {title}
                    </Text>
                    {description && (
                        <Text fontSize="$3" color="$gray11">
                            {description}
                        </Text>
                    )}
                </YStack>
            </XStack>
            {children}
        </XStack>
    );

    return (
        <ScrollView flex={1} backgroundColor="$backgroundSoft">
            <YStack padding="$4" gap="$4">
                {/* Header */}
                <XStack alignItems="center" gap="$3" paddingVertical="$2">
                    <SettingsIcon size={24} color="$color" />
                    <Text fontSize="$6" fontWeight="bold">
                        {t('settings.settings')}
                    </Text>
                </XStack>

                {/* Language Settings */}
                <YStack gap="$3">
                    <Text fontSize="$5" fontWeight="600" color="$gray12">
                        {t('settings.language')}
                    </Text>
                    <SettingItem
                        icon={Globe}
                        title={t('settings.language')}
                        description="Choose your preferred language"
                    >
                        <LanguageSelector size="small" variant="outlined" />
                    </SettingItem>
                </YStack>

                <Separator />

                {/* Appearance Settings */}
                <YStack gap="$3">
                    <Text fontSize="$5" fontWeight="600" color="$gray12">
                        Appearance
                    </Text>
                    <SettingItem
                        icon={Palette}
                        title={t('settings.theme')}
                        description="Customize the app appearance"
                    >
                        <Text fontSize="$3" color="$gray11">
                            {t('settings.systemTheme')}
                        </Text>
                    </SettingItem>
                </YStack>

                <Separator />

                {/* Notifications */}
                <YStack gap="$3">
                    <Text fontSize="$5" fontWeight="600" color="$gray12">
                        {t('settings.notifications')}
                    </Text>
                    <SettingItem
                        icon={Bell}
                        title={t('settings.notifications')}
                        description="Manage your notification preferences"
                    />
                </YStack>

                <Separator />

                {/* Privacy & Security */}
                <YStack gap="$3">
                    <Text fontSize="$5" fontWeight="600" color="$gray12">
                        {t('settings.privacy')} & {t('settings.security')}
                    </Text>
                    <SettingItem
                        icon={Shield}
                        title={t('settings.privacy')}
                        description="Control your privacy settings"
                    />
                    <SettingItem
                        icon={Shield}
                        title={t('settings.security')}
                        description="Manage your account security"
                    />
                </YStack>

                <Separator />

                {/* About */}
                <YStack gap="$3">
                    <Text fontSize="$5" fontWeight="600" color="$gray12">
                        {t('settings.about')}
                    </Text>
                    <SettingItem
                        icon={Info}
                        title={t('settings.version')}
                        description="1.0.0"
                    />
                    <SettingItem
                        icon={Info}
                        title={t('settings.termsOfService')}
                    />
                    <SettingItem
                        icon={Info}
                        title={t('settings.privacyPolicy')}
                    />
                    <SettingItem
                        icon={Info}
                        title={t('settings.contactSupport')}
                    />
                </YStack>
            </YStack>
        </ScrollView>
    );
} 