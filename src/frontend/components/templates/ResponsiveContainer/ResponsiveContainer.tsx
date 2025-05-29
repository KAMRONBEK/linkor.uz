import React, { PropsWithChildren } from 'react';
import { Platform } from 'react-native';
import { ScrollView, Stack, XStack, YStack, useMedia } from 'tamagui';

interface ResponsiveContainerProps extends PropsWithChildren {
    /** Whether the container should be scrollable */
    scrollable?: boolean;
    /** Maximum width for the main content area on large screens */
    maxWidth?: number;
    /** Whether to add padding to the container */
    padded?: boolean;
    /** Optional sidebar content for larger screens */
    sidebar?: React.ReactNode;
    /** Sidebar width percentage (only used on web) */
    sidebarWidth?: number;
}

export function ResponsiveContainer({
    children,
    scrollable = true,
    maxWidth = 1200,
    padded = true,
    sidebar,
    sidebarWidth = 30,
}: ResponsiveContainerProps) {
    const media = useMedia();

    const padding = padded ? '$4' : 0;
    const gap = padded ? '$4' : 0;

    // Mobile-first: single column layout
    const MobileLayout = () => {
        const Container = scrollable ? ScrollView : Stack;

        return (
            <Container
                flex={1}
                backgroundColor="$background"
                padding={padding}
                $sm={{ padding: padded ? '$3' : 0 }}
                $xs={{ padding: padded ? '$2' : 0 }}
            >
                {children}
            </Container>
        );
    };

    // Desktop: multi-column layout with optional sidebar
    const DesktopLayout = () => {
        const mainWidth = sidebar ? (100 - sidebarWidth) : 100;

        return (
            <XStack flex={1} backgroundColor="$background">
                {/* Main content area */}
                <Stack
                    flex={1}
                    maxWidth={sidebar ? `${mainWidth}%` : maxWidth}
                    alignSelf="center"
                    width="100%"
                >
                    {scrollable ? (
                        <ScrollView
                            flex={1}
                            padding={padding}
                            showsVerticalScrollIndicator={false}
                        >
                            <YStack gap={gap} maxWidth="100%">
                                {children}
                            </YStack>
                        </ScrollView>
                    ) : (
                        <Stack flex={1} padding={padding}>
                            {children}
                        </Stack>
                    )}
                </Stack>

                {/* Sidebar for larger screens */}
                {sidebar && (
                    <YStack
                        width={`${sidebarWidth}%`}
                        backgroundColor="$background"
                        borderLeftWidth={1}
                        borderLeftColor="$borderColor"
                        padding={padding}
                        $md={{ display: 'none' }} // Hide sidebar on medium screens and below
                    >
                        {sidebar}
                    </YStack>
                )}
            </XStack>
        );
    };

    // Show desktop layout on larger web screens, mobile layout otherwise
    if (Platform.OS === 'web' && media.gtMd) {
        return <DesktopLayout />;
    }

    return <MobileLayout />;
}

export default ResponsiveContainer; 