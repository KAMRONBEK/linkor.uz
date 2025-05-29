import { Briefcase, Home, MessageCircle, Search, User } from '@tamagui/lucide-icons';

import { SCREEN_NAMES } from './screens';

export interface NavigationItem {
    href: string;
    icon: any;
    labelKey: string;
    name: string;
}

export const NAVIGATION_ITEMS: NavigationItem[] = [
    {
        href: '/',
        icon: Home,
        labelKey: 'navigation.home',
        name: SCREEN_NAMES.HOME
    },
    {
        href: '/browse-gigs',
        icon: Search,
        labelKey: 'navigation.browseGigs',
        name: SCREEN_NAMES.BROWSE_GIGS
    },
    {
        href: '/my-projects',
        icon: Briefcase,
        labelKey: 'navigation.myProjects',
        name: SCREEN_NAMES.MY_PROJECTS
    },
    {
        href: '/messages',
        icon: MessageCircle,
        labelKey: 'navigation.messages',
        name: SCREEN_NAMES.MESSAGES
    },
    {
        href: '/profile',
        icon: User,
        labelKey: 'navigation.profile',
        name: SCREEN_NAMES.PROFILE
    },
]; 