import { Link, usePathname } from 'expo-router';
import React, { PropsWithChildren } from 'react';
import { Platform } from 'react-native';
import { Button, Stack, Text, useMedia, useTheme, XStack, YStack } from 'tamagui';

import { LanguageSelector, ThemeSwitcher } from '@/atoms';
import { NAVIGATION_ITEMS, NavigationItem, useI18n } from '@/shared';

interface SidebarItemProps {
    item: NavigationItem;
    isActive: boolean;
    collapsed?: boolean;
}

function SidebarItem({ item, isActive, collapsed = false }: SidebarItemProps) {
    const theme = useTheme();
    const { t } = useI18n();
    const Icon = item.icon;

    return (
        <Link href={item.href} asChild>
            <Button
                unstyled
                flexDirection="row"
                alignItems="center"
                padding="$3"
                borderRadius="$4"
                backgroundColor={isActive ? '$blue3' : 'transparent'}
                hoverStyle={{
                    backgroundColor: isActive ? '$blue4' : '$gray3',
                }}
                pressStyle={{
                    backgroundColor: isActive ? '$blue5' : '$gray4',
                }}
                gap="$3"
                justifyContent={collapsed ? 'center' : 'flex-start'}
                minHeight="$5"
            >
                <Icon
                    size={20}
                    color={isActive ? theme.blue11?.val : theme.color11?.val}
                />
                {!collapsed && (
                    <Text
                        fontSize="$4"
                        fontWeight={isActive ? '600' : '400'}
                        color={isActive ? '$blue11' : '$color11'}
                    >
                        {t(item.labelKey)}
                    </Text>
                )}
            </Button>
        </Link>
    );
}

interface WebSidebarProps {
    children: React.ReactNode;
}

function WebSidebar({ children }: WebSidebarProps) {
    const pathname = usePathname();
    const { t } = useI18n();
    const media = useMedia();

    // Determine if sidebar should be collapsed on smaller screens
    const isCollapsed = media.lg ? false : media.md ? true : false;

    return (
        <XStack flex={1} minHeight="100vh">
            {/* Sidebar */}
            <YStack
                width={isCollapsed ? 80 : 280}
                backgroundColor="$background"
                borderRightWidth={1}
                borderRightColor="$borderColor"
                padding="$4"
                gap="$4"
                $sm={{
                    display: 'none', // Hide sidebar on small screens, fallback to mobile tabs
                }}
            >
                {/* Header */}
                <YStack
                    gap="$3"
                    paddingBottom="$4"
                    borderBottomWidth={1}
                    borderBottomColor="$borderColor"
                >
                    {!isCollapsed && (
                        <Text fontSize="$6" fontWeight="bold" color="$blue11">
                            {t('app.name')}
                        </Text>
                    )}

                    {/* Controls */}
                    <YStack gap="$2">
                        <LanguageSelector size="small" variant="ghost" />
                        <ThemeSwitcher size="sm" variant="compact" />
                    </YStack>
                </YStack>

                {/* Navigation Items */}
                <YStack gap="$2">
                    {NAVIGATION_ITEMS.map((item) => (
                        <SidebarItem
                            key={item.name}
                            item={item}
                            isActive={pathname === item.href}
                            collapsed={isCollapsed}
                        />
                    ))}
                </YStack>
            </YStack>

            {/* Main Content Area */}
            <Stack flex={1} backgroundColor="$background">
                {children}
            </Stack>
        </XStack>
    );
}

interface ResponsiveNavigationProps extends PropsWithChildren {
    // This component will wrap the tab content
}

export function ResponsiveNavigation({ children }: ResponsiveNavigationProps) {
    const media = useMedia();

    // On web (and larger screens), use sidebar layout
    if (Platform.OS === 'web' && media.gtSm) {
        return <WebSidebar>{children}</WebSidebar>;
    }

    // On mobile (and small web screens), let the tabs handle navigation
    return <>{children}</>;
}

export default ResponsiveNavigation; 