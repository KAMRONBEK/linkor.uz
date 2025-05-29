import React, { PropsWithChildren } from 'react';
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
    _sidebarWidth?: number;
}

export function ResponsiveContainer({
    children,
    scrollable = true,
    maxWidth = 1200,
    padded = true,
    sidebar,
    _sidebarWidth = 30,
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

    // Desktop: centered layout with max-width constraint
    const DesktopLayout = () => (
        <Stack flex={1} backgroundColor="$background" alignItems="center">
            <XStack
                flex={1}
                width="100%"
                maxWidth={maxWidth}
                justifyContent="center"
            >
                {/* Main content area */}
                <Stack
                    flex={sidebar ? 1 : undefined}
                    width={sidebar ? undefined : "100%"}
                    minWidth={0} // Prevent flex overflow
                >
                    {scrollable ? (
                        <ScrollView
                            flex={1}
                            padding={padding}
                            showsVerticalScrollIndicator={false}
                        >
                            <YStack gap={gap} width="100%">
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
                        width={320} // Fixed width instead of percentage
                        backgroundColor="$background"
                        borderLeftWidth={1}
                        borderLeftColor="$borderColor"
                        padding={padding}
                        $lg={{ display: 'none' }} // Hide sidebar on large screens and below
                    >
                        {sidebar}
                    </YStack>
                )}
            </XStack>
        </Stack>
    );

    // Show desktop layout on larger screens, mobile layout otherwise
    if (media.gtMd) {
        return <DesktopLayout />;
    }

    return <MobileLayout />;
}

export default ResponsiveContainer; 