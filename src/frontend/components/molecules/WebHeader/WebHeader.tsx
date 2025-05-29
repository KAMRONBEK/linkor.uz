import { Link } from 'expo-router';
import { Platform } from 'react-native';
import { Button, Text, XStack } from 'tamagui';

import { LanguageSelector } from '@/atoms';
import { useI18n } from '@/shared';

interface WebHeaderProps {
    /** Whether to show the language selector */
    showLanguageSelector?: boolean;
    /** Additional navigation items */
    navigationItems?: Array<{
        label: string;
        href: string;
    }>;
}

export function WebHeader({
    showLanguageSelector = true,
    navigationItems = []
}: WebHeaderProps) {
    const { t } = useI18n();

    // Only render on web
    if (Platform.OS !== 'web') {
        return null;
    }

    return (
        <XStack
            backgroundColor="$background"
            borderBottomWidth={1}
            borderBottomColor="$borderColor"
            paddingHorizontal="$4"
            paddingVertical="$3"
            alignItems="center"
            gap="$4"
            justifyContent="space-between"
            minHeight={60}
        >
            {/* Logo/Brand */}
            <Link href="/" asChild>
                <Button unstyled pressStyle={{ opacity: 0.8 }}>
                    <Text fontSize="$6" fontWeight="bold" color="$blue11">
                        {t('app.name')}
                    </Text>
                </Button>
            </Link>

            {/* Navigation Items */}
            <XStack gap="$4" alignItems="center" flex={1} justifyContent="center">
                {navigationItems.map((item) => (
                    <Link key={item.href} href={item.href} asChild>
                        <Button
                            variant="outlined"
                            size="$3"
                            fontWeight="500"
                            hoverStyle={{
                                backgroundColor: '$blue3',
                            }}
                        >
                            {item.label}
                        </Button>
                    </Link>
                ))}
            </XStack>

            {/* Right side actions */}
            <XStack gap="$3" alignItems="center">
                {showLanguageSelector && (
                    <LanguageSelector size="small" variant="ghost" />
                )}

                <Link href="/auth/login" asChild>
                    <Button variant="outlined" size="$3">
                        {t('auth.signIn')}
                    </Button>
                </Link>

                <Link href="/auth/signup" asChild>
                    <Button theme="blue" size="$3">
                        {t('auth.signUp')}
                    </Button>
                </Link>
            </XStack>
        </XStack>
    );
}

export default WebHeader; 