export const SCREEN_NAMES = {
    // Main Tabs
    HOME: 'index',
    EXPLORE: 'explore',
    SETTINGS: 'settings',

    // Modal Screens (presented as modals)
    LOGIN_MODAL: 'login',
    SIGNUP_MODAL: 'signup',
    PROFILE_MODAL: 'profile',
    LANGUAGE_SETTINGS_MODAL: 'language-settings',
    FORGOT_PASSWORD_MODAL: 'forgot-password',
    RESET_PASSWORD_MODAL: 'reset-password',

    // Regular Screens
    POST_DETAILS: 'post-details',
    USER_PROFILE: 'user-profile',
    NOTIFICATIONS: 'notifications',
    ACCOUNT_SETTINGS: 'account-settings',
    PRIVACY_SETTINGS: 'privacy-settings',
    THEME_SETTINGS: 'theme-settings',
} as const;

export type ScreenName = typeof SCREEN_NAMES[keyof typeof SCREEN_NAMES];

// Modal presentation configuration for Expo Router
export const MODAL_PRESENTATION = {
    LOGIN: { name: 'modal', screen: SCREEN_NAMES.LOGIN_MODAL },
    SIGNUP: { name: 'modal', screen: SCREEN_NAMES.SIGNUP_MODAL },
    PROFILE: { name: 'modal', screen: SCREEN_NAMES.PROFILE_MODAL },
    LANGUAGE_SETTINGS: { name: 'modal', screen: SCREEN_NAMES.LANGUAGE_SETTINGS_MODAL },
    FORGOT_PASSWORD: { name: 'modal', screen: SCREEN_NAMES.FORGOT_PASSWORD_MODAL },
    RESET_PASSWORD: { name: 'modal', screen: SCREEN_NAMES.RESET_PASSWORD_MODAL },
} as const;

// Modal screen names for easier filtering
export const MODAL_SCREENS = [
    SCREEN_NAMES.LOGIN_MODAL,
    SCREEN_NAMES.SIGNUP_MODAL,
    SCREEN_NAMES.PROFILE_MODAL,
    SCREEN_NAMES.LANGUAGE_SETTINGS_MODAL,
    SCREEN_NAMES.FORGOT_PASSWORD_MODAL,
    SCREEN_NAMES.RESET_PASSWORD_MODAL,
] as const;

export type ModalScreenName = typeof MODAL_SCREENS[number];

// Public routes - accessible without authentication
export const PUBLIC_ROUTES = [
    SCREEN_NAMES.HOME,
    SCREEN_NAMES.EXPLORE,
    SCREEN_NAMES.LOGIN_MODAL,
    SCREEN_NAMES.SIGNUP_MODAL,
    SCREEN_NAMES.FORGOT_PASSWORD_MODAL,
    SCREEN_NAMES.RESET_PASSWORD_MODAL,
    SCREEN_NAMES.LANGUAGE_SETTINGS_MODAL,
] as const;

// Private routes - require authentication
export const PRIVATE_ROUTES = [
    SCREEN_NAMES.PROFILE_MODAL,
    SCREEN_NAMES.NOTIFICATIONS,
    SCREEN_NAMES.ACCOUNT_SETTINGS,
    SCREEN_NAMES.PRIVACY_SETTINGS,
    SCREEN_NAMES.THEME_SETTINGS,
    SCREEN_NAMES.POST_DETAILS,
    SCREEN_NAMES.USER_PROFILE,
    SCREEN_NAMES.SETTINGS,
] as const;

export type PublicRouteName = typeof PUBLIC_ROUTES[number];
export type PrivateRouteName = typeof PRIVATE_ROUTES[number];

// Helper functions
export const isPublicRoute = (screenName: string): screenName is PublicRouteName => PUBLIC_ROUTES.includes(screenName as PublicRouteName);

export const isPrivateRoute = (screenName: string): screenName is PrivateRouteName => PRIVATE_ROUTES.includes(screenName as PrivateRouteName);

export const isModalScreen = (screenName: string): screenName is ModalScreenName => MODAL_SCREENS.includes(screenName as ModalScreenName); 