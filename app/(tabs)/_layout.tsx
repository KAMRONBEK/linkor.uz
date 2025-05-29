import { Tabs } from 'expo-router';
import React from 'react';
import { useTheme } from 'tamagui';

import { TabBarIcon } from '@/nav-components';
import { useI18n } from '@/shared';

interface TabScreenOptions {
    title: string;
    tabBarIcon: ({ color, focused }: { color: string; focused: boolean }) => React.ReactNode;
}

export default function TabLayout() {
    const theme = useTheme();
    const { t } = useI18n();

    const getTabScreenOptions = (
        title: string,
        iconName: React.ComponentProps<typeof TabBarIcon>['name']
    ): TabScreenOptions => ({
        title,
        tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={iconName} color={color} focused={focused} />
        ),
    });

    return (
        <Tabs
            screenOptions={{
                tabBarActiveTintColor: theme.color12?.val,
                tabBarInactiveTintColor: theme.color11?.val,
                tabBarStyle: {
                    backgroundColor: theme.background?.val,
                    borderTopColor: theme.borderColor?.val,
                },
                headerShown: false,
            }}
        >
            <Tabs.Screen
                name="index"
                options={getTabScreenOptions(t('navigation.home'), 'home')}
            />
            <Tabs.Screen
                name="explore"
                options={getTabScreenOptions(t('navigation.explore'), 'code')}
            />
            <Tabs.Screen
                name="settings"
                options={getTabScreenOptions(t('navigation.settings'), 'settings')}
            />
        </Tabs>
    );
} 