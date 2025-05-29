import { Filter, Grid3x3, Search } from '@tamagui/lucide-icons';
import { ScrollView, Stack, Text, XStack, YStack } from 'tamagui';

import { Button, Input } from '@/atoms';
import { useI18n } from '@/shared';

export default function BrowseGigsScreen() {
    const { t } = useI18n();

    return (
        <Stack flex={1} backgroundColor="$background">
            {/* Header */}
            <Stack padding="$4" paddingTop="$6" borderBottomWidth={1} borderBottomColor="$borderColor">
                <Text fontSize="$6" fontWeight="bold" marginBottom="$3">
                    {t('navigation.browseGigs')}
                </Text>

                {/* Search and Filters */}
                <XStack gap="$3" alignItems="center">
                    <Stack flex={1}>
                        <Input
                            placeholder={t('search.searchPlaceholder')}
                            leftIcon={<Search size={20} color="$gray10" />}
                        />
                    </Stack>
                    <Button variant="outline" size="sm" icon={<Filter size={16} />}>
                        {t('common.filter')}
                    </Button>
                    <Button variant="outline" size="sm" icon={<Grid3x3 size={16} />}>
                        {t('categories.categories')}
                    </Button>
                </XStack>
            </Stack>

            <ScrollView flex={1}>
                <YStack padding="$4" gap="$4">
                    {/* Categories Section */}
                    <YStack gap="$3">
                        <Text fontSize="$5" fontWeight="600">
                            {t('categories.popularCategories')}
                        </Text>
                        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                            <XStack gap="$3" paddingHorizontal="$1">
                                {[
                                    t('categories.webDevelopment'),
                                    t('categories.mobileDevelopment'),
                                    t('categories.designCreative'),
                                    t('categories.digitalMarketing'),
                                    t('categories.writingTranslation'),
                                ].map((category) => (
                                    <Button
                                        key={category}
                                        variant="outline"
                                        size="sm"
                                        minWidth={120}
                                    >
                                        {category}
                                    </Button>
                                ))}
                            </XStack>
                        </ScrollView>
                    </YStack>

                    {/* Featured Gigs */}
                    <YStack gap="$3">
                        <Text fontSize="$5" fontWeight="600">
                            Featured Gigs
                        </Text>
                        {/* Placeholder for gig cards */}
                        {[1, 2, 3].map((i) => (
                            <Stack
                                key={i}
                                backgroundColor="$gray2"
                                borderRadius="$4"
                                padding="$4"
                                borderWidth={1}
                                borderColor="$borderColor"
                            >
                                <Text fontSize="$4" fontWeight="500" marginBottom="$2">
                                    Sample Gig Title {i}
                                </Text>
                                <Text fontSize="$3" color="$gray10" marginBottom="$3">
                                    I will create a professional website for your business...
                                </Text>
                                <XStack justifyContent="space-between" alignItems="center">
                                    <Text fontSize="$4" fontWeight="600" color="$green10">
                                        From $50
                                    </Text>
                                    <XStack alignItems="center" gap="$2">
                                        <Text fontSize="$2" color="$gray10">
                                            ⭐ 4.9 (123)
                                        </Text>
                                    </XStack>
                                </XStack>
                            </Stack>
                        ))}
                    </YStack>
                </YStack>
            </ScrollView>
        </Stack>
    );
} 