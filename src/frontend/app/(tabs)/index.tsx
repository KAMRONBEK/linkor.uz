import { useState } from 'react';
import { Stack, Text, XStack } from 'tamagui';

import { LanguageSelector } from '@/atoms';
import { LoginCredentials, LoginForm } from '@/molecules';
import { useI18n } from '@/shared/hooks/useI18n';

export default function HomeScreen() {
    const { t } = useI18n();
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | undefined>();

    const handleLogin = async (credentials: LoginCredentials) => {
        setIsLoading(true);
        setError(undefined);

        try {
            // Simulate API call
            await new Promise(resolve => setTimeout(resolve, 2000));

            // For demo purposes, simulate success
            console.log('Login attempt:', credentials);

            // You would typically call your authentication service here
            // const result = await authService.login(credentials);

        } catch (err) {
            setError(t('auth.loginFailed'));
            console.error('Login error:', err);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <Stack flex={1} backgroundColor="$background">
            {/* Header with Language Selector */}
            <XStack
                justifyContent="space-between"
                alignItems="center"
                padding="$4"
                paddingTop="$6"
            >
                <Text fontSize="$4" fontWeight="500">
                    {t('app.name')}
                </Text>
                <LanguageSelector size="small" variant="ghost" />
            </XStack>

            <Stack flex={1} justifyContent="center" alignItems="center" padding="$4">
                <Stack maxWidth={400} width="100%">
                    <Stack marginBottom="$6" alignItems="center">
                        <Text fontSize="$8" fontWeight="bold" color="$blue11">
                            {t('app.name')}
                        </Text>
                        <Text fontSize="$4" color="$gray11" textAlign="center" marginTop="$2">
                            {t('app.tagline')}
                        </Text>
                    </Stack>

                    <LoginForm
                        onSubmit={handleLogin}
                        isLoading={isLoading}
                        error={error}
                    />
                </Stack>
            </Stack>
        </Stack>
    );
} 