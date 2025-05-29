import { Stack, Text } from 'tamagui';

import { useI18n } from '@/shared/hooks/useI18n';

export default function ExploreScreen() {
    const { t } = useI18n();

    return (
        <Stack flex={1} backgroundColor="$background" padding="$4">
            <Stack flex={1} justifyContent="center" alignItems="center">
                <Text fontSize="$6" fontWeight="bold" marginBottom="$4">
                    {t('navigation.explore')}
                </Text>
                <Text fontSize="$4" color="$gray11" textAlign="center">
                    {t('app.description')}
                </Text>
            </Stack>
        </Stack>
    );
} 