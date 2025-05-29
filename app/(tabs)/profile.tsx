import { Calendar, Edit3, MapPin, Settings, Star } from '@tamagui/lucide-icons';
import { Avatar, ScrollView, Stack, Text, XStack, YStack } from 'tamagui';

import { Button } from '@/atoms';
import { useI18n } from '@/shared';

export default function ProfileScreen() {
    const { t } = useI18n();

    return (
        <Stack flex={1} backgroundColor="$background">
            <ScrollView flex={1}>
                {/* Header Section */}
                <Stack backgroundColor="$blue2" paddingTop="$6" paddingBottom="$4">
                    <XStack justifyContent="space-between" alignItems="center" paddingHorizontal="$4" marginBottom="$4">
                        <Text fontSize="$6" fontWeight="bold">
                            {t('navigation.profile')}
                        </Text>
                        <Button variant="outline" size="sm" icon={<Settings size={16} />}>
                            {t('navigation.settings')}
                        </Button>
                    </XStack>

                    {/* Profile Info */}
                    <Stack alignItems="center" paddingHorizontal="$4">
                        <Avatar circular size="$8" marginBottom="$3">
                            <Avatar.Image src="https://picsum.photos/120/120" />
                            <Avatar.Fallback backgroundColor="$blue9">
                                <Text color="white" fontSize="$6" fontWeight="600">
                                    JD
                                </Text>
                            </Avatar.Fallback>
                        </Avatar>

                        <Text fontSize="$6" fontWeight="bold" marginBottom="$1">
                            John Doe
                        </Text>
                        <Text fontSize="$4" color="$blue11" marginBottom="$2">
                            Full Stack Developer
                        </Text>

                        <XStack alignItems="center" gap="$2" marginBottom="$3">
                            <MapPin size={16} color="$gray10" />
                            <Text fontSize="$3" color="$gray10">
                                Tashkent, Uzbekistan
                            </Text>
                        </XStack>

                        <XStack alignItems="center" gap="$4" marginBottom="$4">
                            <XStack alignItems="center" gap="$1">
                                <Star size={16} color="$yellow9" fill="$yellow9" />
                                <Text fontSize="$3" fontWeight="600">4.9</Text>
                                <Text fontSize="$3" color="$gray10">(127 reviews)</Text>
                            </XStack>
                            <Text fontSize="$3" color="$gray10">•</Text>
                            <Text fontSize="$3" color="$gray10">92% completion rate</Text>
                        </XStack>

                        <Button icon={<Edit3 size={16} />} size="sm">
                            {t('profile.editProfile')}
                        </Button>
                    </Stack>
                </Stack>

                <YStack padding="$4" gap="$4">
                    {/* Stats Cards */}
                    <XStack gap="$3">
                        <Stack flex={1} backgroundColor="$gray2" borderRadius="$4" padding="$3" alignItems="center">
                            <Text fontSize="$5" fontWeight="bold" color="$green10">
                                156
                            </Text>
                            <Text fontSize="$2" color="$gray10" textAlign="center">
                                {t('orders.completedOrders')}
                            </Text>
                        </Stack>
                        <Stack flex={1} backgroundColor="$gray2" borderRadius="$4" padding="$3" alignItems="center">
                            <Text fontSize="$5" fontWeight="bold" color="$blue10">
                                $12,450
                            </Text>
                            <Text fontSize="$2" color="$gray10" textAlign="center">
                                {t('earnings.totalEarnings')}
                            </Text>
                        </Stack>
                        <Stack flex={1} backgroundColor="$gray2" borderRadius="$4" padding="$3" alignItems="center">
                            <Text fontSize="$5" fontWeight="bold" color="$purple10">
                                18
                            </Text>
                            <Text fontSize="$2" color="$gray10" textAlign="center">
                                {t('orders.activeOrders')}
                            </Text>
                        </Stack>
                    </XStack>

                    {/* About Section */}
                    <YStack gap="$3">
                        <Text fontSize="$5" fontWeight="600">
                            About
                        </Text>
                        <Text fontSize="$3" color="$gray10" lineHeight={20}>
                            Experienced full-stack developer with 5+ years of expertise in React, Node.js, and mobile app development. I specialize in creating scalable web applications and have delivered 150+ successful projects.
                        </Text>
                    </YStack>

                    {/* Skills Section */}
                    <YStack gap="$3">
                        <Text fontSize="$5" fontWeight="600">
                            {t('profile.skills')}
                        </Text>
                        <XStack flexWrap="wrap" gap="$2">
                            {['React', 'Node.js', 'TypeScript', 'React Native', 'MongoDB', 'PostgreSQL', 'AWS', 'Docker'].map((skill) => (
                                <Stack
                                    key={skill}
                                    backgroundColor="$blue3"
                                    paddingHorizontal="$3"
                                    paddingVertical="$2"
                                    borderRadius="$3"
                                >
                                    <Text fontSize="$3" color="$blue11" fontWeight="500">
                                        {skill}
                                    </Text>
                                </Stack>
                            ))}
                        </XStack>
                    </YStack>

                    {/* Recent Work Section */}
                    <YStack gap="$3">
                        <XStack justifyContent="space-between" alignItems="center">
                            <Text fontSize="$5" fontWeight="600">
                                Recent Work
                            </Text>
                            <Button variant="outline" size="sm">
                                View All
                            </Button>
                        </XStack>

                        {[1, 2].map((i) => (
                            <Stack
                                key={i}
                                backgroundColor="$gray2"
                                borderRadius="$4"
                                padding="$4"
                                borderWidth={1}
                                borderColor="$borderColor"
                            >
                                <Text fontSize="$4" fontWeight="500" marginBottom="$2">
                                    E-commerce Website Development
                                </Text>
                                <Text fontSize="$3" color="$gray10" marginBottom="$3">
                                    Built a modern e-commerce platform with React and Node.js
                                </Text>
                                <XStack justifyContent="space-between" alignItems="center">
                                    <XStack alignItems="center" gap="$2">
                                        <Star size={14} color="$yellow9" fill="$yellow9" />
                                        <Text fontSize="$3" fontWeight="600">5.0</Text>
                                        <Text fontSize="$3" color="$gray10">• $850</Text>
                                    </XStack>
                                    <Text fontSize="$2" color="$gray9">
                                        Completed 2 weeks ago
                                    </Text>
                                </XStack>
                            </Stack>
                        ))}
                    </YStack>

                    {/* Member Since */}
                    <XStack alignItems="center" gap="$2" paddingVertical="$3">
                        <Calendar size={16} color="$gray10" />
                        <Text fontSize="$3" color="$gray10">
                            {t('profile.memberSince')} March 2021
                        </Text>
                    </XStack>
                </YStack>
            </ScrollView>
        </Stack>
    );
} 