import { Slot, Tabs } from 'expo-router';
import { Platform } from 'react-native';
import { useMedia, useTheme } from 'tamagui';

import { ResponsiveNavigation, TabBarIcon } from '@/nav-components';
import { NAVIGATION_ITEMS, useI18n } from '@/shared';

export default function TabLayout() {
    const theme = useTheme();
    const { t } = useI18n();
    const media = useMedia();

    // On web with larger screens, use ResponsiveNavigation with Slot
    if (Platform.OS === 'web' && media.gtSm) {
        return (
            <ResponsiveNavigation>
                <Slot />
            </ResponsiveNavigation>
        );
    }

    // On mobile and small web screens, use traditional tabs
    return (
        <ResponsiveNavigation>
            <Tabs
                screenOptions={{
                    tabBarActiveTintColor: theme.color12?.val,
                    tabBarInactiveTintColor: theme.color11?.val,
                    headerShown: false,
                    tabBarStyle: {
                        backgroundColor: theme.background?.val,
                        borderTopColor: theme.borderColor?.val,
                    },
                }}
            >
                {NAVIGATION_ITEMS.map((item) => (
                    <Tabs.Screen
                        key={item.name}
                        name={item.name}
                        options={{
                            title: t(item.labelKey),
                            tabBarIcon: ({ color, focused }) => (
                                <TabBarIcon IconComponent={item.icon} color={color} focused={focused} />
                            ),
                        }}
                    />
                ))}
            </Tabs>
        </ResponsiveNavigation>
    );
} 