import { Tabs } from 'expo-router';
import React from 'react';

import { TabBarIcon } from '../../components/navigation/TabBarIcon';
import { Colors } from '../../constants/Colors';
import { useColorScheme } from '../../hooks/useColorScheme';

import { useI18n } from '@/shared/hooks/useI18n';

interface TabScreenOptions {
    title: string;
    tabBarIcon: ({ color, focused }: { color: string; focused: boolean }) => React.ReactNode;
}

export default function TabLayout() {
    const colorScheme = useColorScheme();
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
                tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
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