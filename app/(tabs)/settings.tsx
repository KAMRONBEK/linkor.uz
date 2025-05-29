import {
    Bell,
    ChevronRight,
    CreditCard,
    FileText,
    Globe,
    HelpCircle,
    LogOut,
    Palette,
    Settings,
    Shield,
    User,
    Wallet
} from '@tamagui/lucide-icons';
import React from 'react';
import { ScrollView, Stack, Switch, Text, XStack, YStack } from 'tamagui';

import { Button, LanguageSelector } from '@/atoms';
import { useI18n } from '@/shared';

export default function SettingsScreen() {
    const { t } = useI18n();

    const SettingsItem = ({
        icon,
        title,
        subtitle,
        onPress,
        showChevron = true,
        rightComponent
    }: {
        icon: React.ReactNode;
        title: string;
        subtitle?: string;
        onPress?: () => void;
        showChevron?: boolean;
        rightComponent?: React.ReactNode;
    }) => (
        <Stack
            padding="$4"
            borderBottomWidth={1}
            borderBottomColor="$borderColor"
            pressStyle={{ backgroundColor: '$gray2' }}
            onPress={onPress}
        >
            <XStack alignItems="center" gap="$3">
                <Stack
                    width={40}
                    height={40}
                    borderRadius={20}
                    backgroundColor="$gray3"
                    alignItems="center"
                    justifyContent="center"
                >
                    {icon}
                </Stack>

                <YStack flex={1} gap="$1">
                    <Text fontSize="$4" fontWeight="500">
                        {title}
                    </Text>
                    {subtitle && (
                        <Text fontSize="$3" color="$gray10">
                            {subtitle}
                        </Text>
                    )}
                </YStack>

                {rightComponent || (showChevron && (
                    <ChevronRight size={20} color="$gray10" />
                ))}
            </XStack>
        </Stack>
    );

    return (
        <Stack flex={1} backgroundColor="$background">
            {/* Header */}
            <Stack padding="$4" paddingTop="$6" borderBottomWidth={1} borderBottomColor="$borderColor">
                <Text fontSize="$6" fontWeight="bold">
                    {t('navigation.settings')}
                </Text>
            </Stack>

            <ScrollView flex={1}>
                <YStack>
                    {/* Account Section */}
                    <YStack paddingTop="$4">
                        <Text fontSize="$4" fontWeight="600" color="$gray11" paddingHorizontal="$4" marginBottom="$2">
                            Account
                        </Text>

                        <SettingsItem
                            icon={<User size={20} color="$blue10" />}
                            title={t('settings.accountSettings')}
                            subtitle="Personal information, profile settings"
                        />

                        <SettingsItem
                            icon={<CreditCard size={20} color="$green10" />}
                            title={t('settings.paymentMethods')}
                            subtitle="Manage cards and payment options"
                        />

                        <SettingsItem
                            icon={<Wallet size={20} color="$purple10" />}
                            title="Earnings & Payouts"
                            subtitle="Withdrawal methods and earnings"
                        />

                        <SettingsItem
                            icon={<FileText size={20} color="$orange10" />}
                            title={t('settings.taxInformation')}
                            subtitle="Tax forms and documentation"
                        />
                    </YStack>

                    {/* Preferences Section */}
                    <YStack paddingTop="$4">
                        <Text fontSize="$4" fontWeight="600" color="$gray11" paddingHorizontal="$4" marginBottom="$2">
                            Preferences
                        </Text>

                        <SettingsItem
                            icon={<Bell size={20} color="$yellow10" />}
                            title={t('settings.notificationSettings')}
                            subtitle="Email, push, and SMS preferences"
                        />

                        <SettingsItem
                            icon={<Globe size={20} color="$cyan10" />}
                            title={t('settings.language')}
                            subtitle="Choose your preferred language"
                            rightComponent={<LanguageSelector size="small" variant="outlined" />}
                            showChevron={false}
                        />

                        <SettingsItem
                            icon={<Palette size={20} color="$indigo10" />}
                            title={t('settings.theme')}
                            subtitle="Light, dark, or system theme"
                        />
                    </YStack>

                    {/* Privacy & Security Section */}
                    <YStack paddingTop="$4">
                        <Text fontSize="$4" fontWeight="600" color="$gray11" paddingHorizontal="$4" marginBottom="$2">
                            Privacy & Security
                        </Text>

                        <SettingsItem
                            icon={<Shield size={20} color="$red10" />}
                            title={t('settings.privacy')}
                            subtitle="Profile visibility and data settings"
                        />

                        <SettingsItem
                            icon={<Settings size={20} color="$gray10" />}
                            title={t('settings.security')}
                            subtitle="Password, 2FA, and security settings"
                        />
                    </YStack>

                    {/* Quick Settings */}
                    <YStack paddingTop="$4">
                        <Text fontSize="$4" fontWeight="600" color="$gray11" paddingHorizontal="$4" marginBottom="$2">
                            Quick Settings
                        </Text>

                        <Stack
                            padding="$4"
                            borderBottomWidth={1}
                            borderBottomColor="$borderColor"
                        >
                            <XStack alignItems="center" justifyContent="space-between">
                                <XStack alignItems="center" gap="$3">
                                    <Stack
                                        width={40}
                                        height={40}
                                        borderRadius={20}
                                        backgroundColor="$gray3"
                                        alignItems="center"
                                        justifyContent="center"
                                    >
                                        <Bell size={20} color="$blue10" />
                                    </Stack>
                                    <YStack>
                                        <Text fontSize="$4" fontWeight="500">
                                            Push Notifications
                                        </Text>
                                        <Text fontSize="$3" color="$gray10">
                                            Receive notifications for messages and updates
                                        </Text>
                                    </YStack>
                                </XStack>
                                <Switch size="$3" defaultChecked />
                            </XStack>
                        </Stack>

                        <Stack
                            padding="$4"
                            borderBottomWidth={1}
                            borderBottomColor="$borderColor"
                        >
                            <XStack alignItems="center" justifyContent="space-between">
                                <XStack alignItems="center" gap="$3">
                                    <Stack
                                        width={40}
                                        height={40}
                                        borderRadius={20}
                                        backgroundColor="$gray3"
                                        alignItems="center"
                                        justifyContent="center"
                                    >
                                        <User size={20} color="$green10" />
                                    </Stack>
                                    <YStack>
                                        <Text fontSize="$4" fontWeight="500">
                                            Profile Visibility
                                        </Text>
                                        <Text fontSize="$3" color="$gray10">
                                            Make your profile visible to clients
                                        </Text>
                                    </YStack>
                                </XStack>
                                <Switch size="$3" defaultChecked />
                            </XStack>
                        </Stack>
                    </YStack>

                    {/* Support Section */}
                    <YStack paddingTop="$4">
                        <Text fontSize="$4" fontWeight="600" color="$gray11" paddingHorizontal="$4" marginBottom="$2">
                            Support
                        </Text>

                        <SettingsItem
                            icon={<HelpCircle size={20} color="$blue10" />}
                            title={t('settings.contactSupport')}
                            subtitle="Get help from our support team"
                        />

                        <SettingsItem
                            icon={<FileText size={20} color="$gray10" />}
                            title={t('settings.termsOfService')}
                            subtitle="Read our terms and conditions"
                        />

                        <SettingsItem
                            icon={<Shield size={20} color="$gray10" />}
                            title={t('settings.privacyPolicy')}
                            subtitle="Learn about how we protect your data"
                        />
                    </YStack>

                    {/* App Info */}
                    <YStack padding="$4" paddingTop="$6" alignItems="center" gap="$2">
                        <Text fontSize="$3" color="$gray9">
                            {t('app.name')} v1.0.0
                        </Text>
                        <Text fontSize="$2" color="$gray8" textAlign="center">
                            Built with ❤️ for freelancers in Uzbekistan
                        </Text>
                    </YStack>

                    {/* Sign Out */}
                    <Stack padding="$4">
                        <Button
                            variant="outline"
                            theme="red"
                            icon={<LogOut size={16} />}
                            onPress={() => {
                                // Handle sign out
                                console.log('Sign out');
                            }}
                        >
                            {t('auth.signOut')}
                        </Button>
                    </Stack>
                </YStack>
            </ScrollView>
        </Stack>
    );
} 