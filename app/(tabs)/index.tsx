import { Briefcase, Search, Star, TrendingUp, Users } from '@tamagui/lucide-icons';
import { Text, XStack, YStack } from 'tamagui';

import { Button, Input, LanguageSelector } from '@/atoms';
import { useI18n } from '@/shared';
import { ResponsiveContainer } from '@/templates';

export default function HomeScreen() {
    const { t } = useI18n();

    // Sample sidebar content for larger screens
    const sidebarContent = (
        <YStack gap="$4">
            <YStack gap="$3">
                <Text fontSize="$5" fontWeight="600">
                    Quick Stats
                </Text>
                <YStack gap="$2">
                    <XStack justifyContent="space-between">
                        <Text fontSize="$3" color="$gray11">Active Projects</Text>
                        <Text fontSize="$3" fontWeight="500">12</Text>
                    </XStack>
                    <XStack justifyContent="space-between">
                        <Text fontSize="$3" color="$gray11">Completed</Text>
                        <Text fontSize="$3" fontWeight="500">45</Text>
                    </XStack>
                    <XStack justifyContent="space-between">
                        <Text fontSize="$3" color="$gray11">In Progress</Text>
                        <Text fontSize="$3" fontWeight="500">8</Text>
                    </XStack>
                </YStack>
            </YStack>

            <YStack gap="$3">
                <Text fontSize="$5" fontWeight="600">
                    Recent Activity
                </Text>
                <YStack gap="$3">
                    <YStack padding="$3" backgroundColor="$gray2" borderRadius="$3">
                        <Text fontSize="$3" fontWeight="500">New project proposal</Text>
                        <Text fontSize="$2" color="$gray11">2 hours ago</Text>
                    </YStack>
                    <YStack padding="$3" backgroundColor="$gray2" borderRadius="$3">
                        <Text fontSize="$3" fontWeight="500">Payment received</Text>
                        <Text fontSize="$2" color="$gray11">1 day ago</Text>
                    </YStack>
                </YStack>
            </YStack>
        </YStack>
    );

    return (
        <ResponsiveContainer sidebar={sidebarContent} sidebarWidth={25}>
            {/* Header - only show on mobile since web has it in sidebar */}
            <XStack
                justifyContent="space-between"
                alignItems="center"
                paddingBottom="$4"
                borderBottomWidth={1}
                borderBottomColor="$borderColor"
                $gtSm={{ display: 'none' }} // Hide on larger screens since sidebar has it
            >
                <Text fontSize="$5" fontWeight="bold" color="$blue11">
                    {t('app.name')}
                </Text>
                <LanguageSelector size="small" variant="ghost" />
            </XStack>

            {/* Hero Section */}
            <YStack alignItems="center" gap="$4" paddingVertical="$6">
                <Text
                    fontSize="$8"
                    fontWeight="bold"
                    textAlign="center"
                    maxWidth={300}
                    $sm={{ fontSize: '$7' }}
                    $xs={{ fontSize: '$6' }}
                >
                    {t('app.tagline')}
                </Text>
                <Text
                    fontSize="$4"
                    color="$gray10"
                    textAlign="center"
                    maxWidth={280}
                    $sm={{ fontSize: '$3' }}
                >
                    {t('app.description')}
                </Text>

                {/* Search Bar */}
                <XStack width="100%" maxWidth={400}>
                    <Input
                        placeholder={t('search.searchPlaceholder')}
                        leftIcon={<Search size={20} color="$gray10" />}
                        size="md"
                    />
                </XStack>

                {/* CTA Buttons */}
                <XStack
                    gap="$3"
                    flexWrap="wrap"
                    justifyContent="center"
                    $sm={{
                        flexDirection: 'column',
                        width: '100%',
                        maxWidth: 300
                    }}
                >
                    <Button size="md" theme="blue">
                        {t('app.findTalent')}
                    </Button>
                    <Button size="md" variant="outline">
                        {t('app.findWork')}
                    </Button>
                </XStack>
            </YStack>

            {/* Stats Section */}
            <XStack
                gap="$3"
                justifyContent="space-around"
                paddingVertical="$4"
                $sm={{
                    flexDirection: 'column',
                    gap: '$4'
                }}
            >
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

                <XStack
                    flexWrap="wrap"
                    gap="$3"
                    $sm={{ flexDirection: 'column' }}
                >
                    {[
                        { name: t('categories.webDevelopment'), color: '$blue10' },
                        { name: t('categories.mobileDevelopment'), color: '$green10' },
                        { name: t('categories.designCreative'), color: '$purple10' },
                        { name: t('categories.digitalMarketing'), color: '$orange10' },
                        { name: t('categories.writingTranslation'), color: '$red10' },
                        { name: t('categories.dataScience'), color: '$cyan10' },
                    ].map((category) => (
                        <YStack
                            key={category.name}
                            flex={1}
                            minWidth="45%"
                            backgroundColor="$gray2"
                            borderRadius="$4"
                            padding="$4"
                            borderWidth={1}
                            borderColor="$borderColor"
                            pressStyle={{ backgroundColor: '$gray3' }}
                            $sm={{ minWidth: '100%' }}
                        >
                            <Text fontSize="$4" fontWeight="500" color={category.color} marginBottom="$1">
                                {category.name}
                            </Text>
                            <Text fontSize="$3" color="$gray10">
                                {Math.floor(Math.random() * 500) + 100}+ services
                            </Text>
                        </YStack>
                    ))}
                </XStack>
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
                        <XStack
                            key={item.step}
                            alignItems="center"
                            gap="$4"
                            $sm={{
                                flexDirection: 'column',
                                textAlign: 'center'
                            }}
                        >
                            <YStack
                                width={40}
                                height={40}
                                borderRadius={20}
                                backgroundColor="$blue9"
                                alignItems="center"
                                justifyContent="center"
                                flexShrink={0}
                            >
                                <Text color="white" fontSize="$4" fontWeight="bold">
                                    {item.step}
                                </Text>
                            </YStack>
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
        </ResponsiveContainer>
    );
} 