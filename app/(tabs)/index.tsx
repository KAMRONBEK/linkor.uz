import { Briefcase, Search, Star, TrendingUp, Users } from '@tamagui/lucide-icons';
import { ScrollView, Stack, Text, XStack, YStack } from 'tamagui';

import { Button, Input, LanguageSelector } from '@/atoms';
import { useI18n } from '@/shared';

export default function HomeScreen() {
    const { t } = useI18n();

    return (
        <Stack flex={1} backgroundColor="$background">
            {/* Header with Language Selector */}
            <XStack
                justifyContent="space-between"
                alignItems="center"
                padding="$4"
                paddingTop="$6"
                borderBottomWidth={1}
                borderBottomColor="$borderColor"
            >
                <Text fontSize="$5" fontWeight="bold" color="$blue11">
                    {t('app.name')}
                </Text>
                <LanguageSelector size="small" variant="ghost" />
            </XStack>

            <ScrollView flex={1}>
                <YStack padding="$4" gap="$6">
                    {/* Hero Section */}
                    <YStack alignItems="center" gap="$4" paddingVertical="$6">
                        <Text fontSize="$8" fontWeight="bold" textAlign="center" maxWidth={300}>
                            {t('app.tagline')}
                        </Text>
                        <Text fontSize="$4" color="$gray10" textAlign="center" maxWidth={280}>
                            {t('app.description')}
                        </Text>

                        {/* Search Bar */}
                        <Stack width="100%" maxWidth={400}>
                            <Input
                                placeholder={t('search.searchPlaceholder')}
                                leftIcon={<Search size={20} color="$gray10" />}
                                size="md"
                            />
                        </Stack>

                        {/* CTA Buttons */}
                        <XStack gap="$3" flexWrap="wrap" justifyContent="center">
                            <Button size="md" theme="blue">
                                {t('app.findTalent')}
                            </Button>
                            <Button size="md" variant="outline">
                                {t('app.findWork')}
                            </Button>
                        </XStack>
                    </YStack>

                    {/* Stats Section */}
                    <XStack gap="$3" justifyContent="space-around" paddingVertical="$4">
                        <YStack alignItems="center" gap="$2">
                            <Users size={24} color="$blue10" />
                            <Text fontSize="$5" fontWeight="bold">10K+</Text>
                            <Text fontSize="$3" color="$gray10" textAlign="center">
                                Freelancers
                            </Text>
                        </YStack>
                        <YStack alignItems="center" gap="$2">
                            <Briefcase size={24} color="$green10" />
                            <Text fontSize="$5" fontWeight="bold">5K+</Text>
                            <Text fontSize="$3" color="$gray10" textAlign="center">
                                Projects
                            </Text>
                        </YStack>
                        <YStack alignItems="center" gap="$2">
                            <Star size={24} color="$yellow9" />
                            <Text fontSize="$5" fontWeight="bold">4.8</Text>
                            <Text fontSize="$3" color="$gray10" textAlign="center">
                                Avg Rating
                            </Text>
                        </YStack>
                    </XStack>

                    {/* Popular Categories */}
                    <YStack gap="$3">
                        <XStack alignItems="center" gap="$2">
                            <TrendingUp size={20} color="$blue10" />
                            <Text fontSize="$5" fontWeight="600">
                                {t('categories.popularCategories')}
                            </Text>
                        </XStack>

                        <XStack flexWrap="wrap" gap="$3">
                            {[
                                { name: t('categories.webDevelopment'), color: '$blue10' },
                                { name: t('categories.mobileDevelopment'), color: '$green10' },
                                { name: t('categories.designCreative'), color: '$purple10' },
                                { name: t('categories.digitalMarketing'), color: '$orange10' },
                                { name: t('categories.writingTranslation'), color: '$red10' },
                                { name: t('categories.dataScience'), color: '$cyan10' },
                            ].map((category) => (
                                <Stack
                                    key={category.name}
                                    flex={1}
                                    minWidth="45%"
                                    backgroundColor="$gray2"
                                    borderRadius="$4"
                                    padding="$4"
                                    borderWidth={1}
                                    borderColor="$borderColor"
                                    pressStyle={{ backgroundColor: '$gray3' }}
                                >
                                    <Text fontSize="$4" fontWeight="500" color={category.color} marginBottom="$1">
                                        {category.name}
                                    </Text>
                                    <Text fontSize="$3" color="$gray10">
                                        {Math.floor(Math.random() * 500) + 100}+ services
                                    </Text>
                                </Stack>
                            ))}
                        </XStack>
                    </YStack>

                    {/* Featured Gigs */}
                    <YStack gap="$3">
                        <Text fontSize="$5" fontWeight="600">
                            Featured Gigs
                        </Text>

                        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                            <XStack gap="$3" paddingHorizontal="$1">
                                {[1, 2, 3].map((i) => (
                                    <Stack
                                        key={i}
                                        width={280}
                                        backgroundColor="$gray2"
                                        borderRadius="$4"
                                        borderWidth={1}
                                        borderColor="$borderColor"
                                        overflow="hidden"
                                    >
                                        <Stack height={120} backgroundColor="$gray5" />
                                        <Stack padding="$3" gap="$2">
                                            <Text fontSize="$4" fontWeight="500" numberOfLines={2}>
                                                I will create a modern React website
                                            </Text>
                                            <XStack alignItems="center" gap="$2">
                                                <Stack width={24} height={24} borderRadius={12} backgroundColor="$blue9" />
                                                <Text fontSize="$3" color="$gray10">
                                                    John Developer
                                                </Text>
                                            </XStack>
                                            <XStack justifyContent="space-between" alignItems="center">
                                                <XStack alignItems="center" gap="$1">
                                                    <Star size={14} color="$yellow9" fill="$yellow9" />
                                                    <Text fontSize="$3" fontWeight="500">4.9</Text>
                                                    <Text fontSize="$3" color="$gray10">(127)</Text>
                                                </XStack>
                                                <Text fontSize="$4" fontWeight="600" color="$green10">
                                                    From ${50 + i * 25}
                                                </Text>
                                            </XStack>
                                        </Stack>
                                    </Stack>
                                ))}
                            </XStack>
                        </ScrollView>
                    </YStack>

                    {/* How It Works */}
                    <YStack gap="$4" paddingVertical="$4">
                        <Text fontSize="$5" fontWeight="600" textAlign="center">
                            {t('app.howItWorks')}
                        </Text>

                        <YStack gap="$4">
                            {[
                                { step: '1', title: 'Post your project', desc: 'Tell us what you need done in minutes.' },
                                { step: '2', title: 'Get proposals', desc: 'Receive proposals from talented freelancers.' },
                                { step: '3', title: 'Hire & collaborate', desc: 'Work together and get your project completed.' },
                            ].map((item) => (
                                <XStack key={item.step} alignItems="center" gap="$4">
                                    <Stack
                                        width={40}
                                        height={40}
                                        borderRadius={20}
                                        backgroundColor="$blue9"
                                        alignItems="center"
                                        justifyContent="center"
                                    >
                                        <Text color="white" fontSize="$4" fontWeight="bold">
                                            {item.step}
                                        </Text>
                                    </Stack>
                                    <YStack flex={1} gap="$1">
                                        <Text fontSize="$4" fontWeight="500">
                                            {item.title}
                                        </Text>
                                        <Text fontSize="$3" color="$gray10">
                                            {item.desc}
                                        </Text>
                                    </YStack>
                                </XStack>
                            ))}
                        </YStack>
                    </YStack>
                </YStack>
            </ScrollView>
        </Stack>
    );
} 