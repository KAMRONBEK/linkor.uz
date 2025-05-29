import { MessageCircle, Phone, Search, Video } from '@tamagui/lucide-icons';
import { Avatar, ScrollView, Stack, Text, XStack, YStack } from 'tamagui';

import { Input } from '@/atoms';
import { useI18n } from '@/shared';

export default function MessagesScreen() {
    const { t } = useI18n();

    return (
        <Stack flex={1} backgroundColor="$background">
            {/* Header */}
            <Stack padding="$4" paddingTop="$6" borderBottomWidth={1} borderBottomColor="$borderColor">
                <Text fontSize="$6" fontWeight="bold" marginBottom="$3">
                    {t('navigation.messages')}
                </Text>

                {/* Search */}
                <Input
                    placeholder="Search conversations..."
                    leftIcon={<Search size={20} color="$gray10" />}
                />
            </Stack>

            <ScrollView flex={1}>
                <YStack>
                    {/* Conversations List */}
                    {[1, 2, 3, 4, 5].map((i) => (
                        <Stack
                            key={i}
                            padding="$4"
                            borderBottomWidth={1}
                            borderBottomColor="$borderColor"
                            pressStyle={{ backgroundColor: '$gray2' }}
                        >
                            <XStack alignItems="center" gap="$3">
                                <Stack position="relative">
                                    <Avatar circular size="$4">
                                        <Avatar.Image src={`https://picsum.photos/40/40?random=${i}`} />
                                        <Avatar.Fallback backgroundColor="$blue9">
                                            <Text color="white" fontSize="$3" fontWeight="600">
                                                U{i}
                                            </Text>
                                        </Avatar.Fallback>
                                    </Avatar>
                                    {/* Online indicator */}
                                    <Stack
                                        position="absolute"
                                        bottom={-2}
                                        right={-2}
                                        width={12}
                                        height={12}
                                        borderRadius={6}
                                        backgroundColor={i <= 2 ? '$green9' : '$gray6'}
                                        borderWidth={2}
                                        borderColor="$background"
                                    />
                                </Stack>

                                <YStack flex={1} gap="$1">
                                    <XStack justifyContent="space-between" alignItems="center">
                                        <Text fontSize="$4" fontWeight="500">
                                            John Doe {i}
                                        </Text>
                                        <Text fontSize="$2" color="$gray9">
                                            {i <= 2 ? 'Online' : '2h ago'}
                                        </Text>
                                    </XStack>

                                    <XStack justifyContent="space-between" alignItems="center">
                                        <Text fontSize="$3" color="$gray10" numberOfLines={1} flex={1}>
                                            {i === 1
                                                ? "Thanks for the quick delivery!"
                                                : i === 2
                                                    ? "When can you start the project?"
                                                    : "I have reviewed your proposal..."
                                            }
                                        </Text>
                                        {i <= 2 && (
                                            <Stack
                                                backgroundColor="$blue9"
                                                width={20}
                                                height={20}
                                                borderRadius={10}
                                                alignItems="center"
                                                justifyContent="center"
                                                marginLeft="$2"
                                            >
                                                <Text color="white" fontSize="$1" fontWeight="600">
                                                    {i}
                                                </Text>
                                            </Stack>
                                        )}
                                    </XStack>
                                </YStack>

                                <XStack gap="$2">
                                    <Stack
                                        width={36}
                                        height={36}
                                        borderRadius={18}
                                        backgroundColor="$gray4"
                                        alignItems="center"
                                        justifyContent="center"
                                        pressStyle={{ backgroundColor: '$gray5' }}
                                    >
                                        <Phone size={16} color="$gray11" />
                                    </Stack>
                                    <Stack
                                        width={36}
                                        height={36}
                                        borderRadius={18}
                                        backgroundColor="$gray4"
                                        alignItems="center"
                                        justifyContent="center"
                                        pressStyle={{ backgroundColor: '$gray5' }}
                                    >
                                        <Video size={16} color="$gray11" />
                                    </Stack>
                                </XStack>
                            </XStack>
                        </Stack>
                    ))}
                </YStack>
            </ScrollView>

            {/* Empty State */}
            {false && (
                <Stack flex={1} alignItems="center" justifyContent="center" padding="$8">
                    <MessageCircle size={48} color="$gray8" />
                    <Text fontSize="$4" color="$gray10" marginTop="$3" textAlign="center">
                        {t('messages.noMessages')}
                    </Text>
                    <Text fontSize="$3" color="$gray9" marginTop="$2" textAlign="center" maxWidth={200}>
                        Start a conversation with freelancers or clients
                    </Text>
                </Stack>
            )}
        </Stack>
    );
} 