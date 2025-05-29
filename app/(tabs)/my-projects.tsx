import { Briefcase, CheckCircle, Clock, Plus, XCircle } from '@tamagui/lucide-icons';
import { ScrollView, Stack, Text, XStack, YStack } from 'tamagui';

import { Button } from '@/atoms';
import { useI18n } from '@/shared';

export default function MyProjectsScreen() {
    const { t } = useI18n();

    return (
        <Stack flex={1} backgroundColor="$background">
            {/* Header */}
            <Stack padding="$4" paddingTop="$6" borderBottomWidth={1} borderBottomColor="$borderColor">
                <XStack justifyContent="space-between" alignItems="center">
                    <Text fontSize="$6" fontWeight="bold">
                        {t('navigation.myProjects')}
                    </Text>
                    <Button size="sm" icon={<Plus size={16} />}>
                        {t('projects.postProject')}
                    </Button>
                </XStack>
            </Stack>

            <ScrollView flex={1}>
                <YStack padding="$4" gap="$4">
                    {/* Project Status Tabs */}
                    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                        <XStack gap="$3" paddingHorizontal="$1">
                            {[
                                { key: 'active', label: t('projects.activeProjects'), icon: Clock },
                                { key: 'completed', label: t('projects.completedProjects'), icon: CheckCircle },
                                { key: 'cancelled', label: t('projects.cancelledProjects'), icon: XCircle },
                            ].map((tab) => (
                                <Button
                                    key={tab.key}
                                    variant="outline"
                                    size="sm"
                                    minWidth={120}
                                    icon={<tab.icon size={16} />}
                                >
                                    {tab.label}
                                </Button>
                            ))}
                        </XStack>
                    </ScrollView>

                    {/* Projects List */}
                    <YStack gap="$3">
                        {/* Placeholder for project cards */}
                        {[1, 2, 3].map((i) => (
                            <Stack
                                key={i}
                                backgroundColor="$gray2"
                                borderRadius="$4"
                                padding="$4"
                                borderWidth={1}
                                borderColor="$borderColor"
                            >
                                <XStack alignItems="center" gap="$3" marginBottom="$3">
                                    <Briefcase size={20} color="$blue10" />
                                    <Text fontSize="$4" fontWeight="500" flex={1}>
                                        Sample Project Title {i}
                                    </Text>
                                    <Stack
                                        backgroundColor="$green9"
                                        paddingHorizontal="$2"
                                        paddingVertical="$1"
                                        borderRadius="$2"
                                    >
                                        <Text fontSize="$2" color="white" fontWeight="500">
                                            {t('orders.inProgress')}
                                        </Text>
                                    </Stack>
                                </XStack>

                                <Text fontSize="$3" color="$gray10" marginBottom="$3">
                                    Looking for a skilled developer to create a modern web application...
                                </Text>

                                <XStack justifyContent="space-between" alignItems="center" marginBottom="$3">
                                    <XStack alignItems="center" gap="$4">
                                        <Text fontSize="$3" color="$gray10">
                                            Budget: <Text fontWeight="600" color="$green10">$500-$1000</Text>
                                        </Text>
                                        <Text fontSize="$3" color="$gray10">
                                            {t('proposals.proposals')}: <Text fontWeight="600">12</Text>
                                        </Text>
                                    </XStack>
                                    <Text fontSize="$2" color="$gray9">
                                        Posted 3 days ago
                                    </Text>
                                </XStack>

                                <XStack gap="$2" justifyContent="flex-end">
                                    <Button variant="outline" size="sm">
                                        {t('proposals.viewProposals')}
                                    </Button>
                                    <Button size="sm">
                                        {t('common.edit')}
                                    </Button>
                                </XStack>
                            </Stack>
                        ))}
                    </YStack>

                    {/* Empty State */}
                    <Stack alignItems="center" paddingVertical="$8">
                        <Briefcase size={48} color="$gray8" />
                        <Text fontSize="$4" color="$gray10" marginTop="$3" textAlign="center">
                            No projects yet
                        </Text>
                        <Text fontSize="$3" color="$gray9" marginTop="$2" textAlign="center" maxWidth={200}>
                            Post your first project to find talented freelancers
                        </Text>
                        <Button marginTop="$4" icon={<Plus size={16} />}>
                            {t('projects.postProject')}
                        </Button>
                    </Stack>
                </YStack>
            </ScrollView>
        </Stack>
    );
} 