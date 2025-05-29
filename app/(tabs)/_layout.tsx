import { Briefcase, Home, MessageCircle, Search, User } from '@tamagui/lucide-icons';
import { Tabs } from 'expo-router';
import { useTheme } from 'tamagui';

import { TabBarIcon } from '@/nav-components';
import { useI18n } from '@/shared';

export default function TabLayout() {
    const theme = useTheme();
    const { t } = useI18n();

    return (
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
            <Tabs.Screen
                name="index"
                options={{
                    title: t('navigation.home'),
                    tabBarIcon: ({ color, focused }) => (
                        <TabBarIcon IconComponent={Home} color={color} focused={focused} />
                    ),
                }}
            />
            <Tabs.Screen
                name="browse-gigs"
                options={{
                    title: t('navigation.browseGigs'),
                    tabBarIcon: ({ color, focused }) => (
                        <TabBarIcon IconComponent={Search} color={color} focused={focused} />
                    ),
                }}
            />
            <Tabs.Screen
                name="my-projects"
                options={{
                    title: t('navigation.myProjects'),
                    tabBarIcon: ({ color, focused }) => (
                        <TabBarIcon IconComponent={Briefcase} color={color} focused={focused} />
                    ),
                }}
            />
            <Tabs.Screen
                name="messages"
                options={{
                    title: t('navigation.messages'),
                    tabBarIcon: ({ color, focused }) => (
                        <TabBarIcon IconComponent={MessageCircle} color={color} focused={focused} />
                    ),
                }}
            />
            <Tabs.Screen
                name="profile"
                options={{
                    title: t('navigation.profile'),
                    tabBarIcon: ({ color, focused }) => (
                        <TabBarIcon IconComponent={User} color={color} focused={focused} />
                    ),
                }}
            />
        </Tabs>
    );
} 