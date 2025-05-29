export const SCREEN_NAMES = {
    // Main Tabs
    HOME: 'index',
    BROWSE_GIGS: 'browse-gigs',
    MY_PROJECTS: 'my-projects',
    MESSAGES: 'messages',
    PROFILE: 'profile',

    // Secondary Tabs (for different user types)
    POST_PROJECT: 'post-project',
    MY_GIGS: 'my-gigs',
    EARNINGS: 'earnings',
    SETTINGS: 'settings',

    // Modal Screens (presented as modals)
    LOGIN_MODAL: 'login',
    SIGNUP_MODAL: 'signup',
    SIGNUP_TYPE_MODAL: 'signup-type', // Client vs Freelancer
    PROFILE_MODAL: 'profile',
    LANGUAGE_SETTINGS_MODAL: 'language-settings',
    FORGOT_PASSWORD_MODAL: 'forgot-password',
    RESET_PASSWORD_MODAL: 'reset-password',
    GIG_DETAILS_MODAL: 'gig-details',
    PROJECT_DETAILS_MODAL: 'project-details',
    CREATE_GIG_MODAL: 'create-gig',
    PROPOSAL_MODAL: 'proposal',
    REVIEW_MODAL: 'review',

    // Regular Screens
    GIG_DETAILS: 'gig-details',
    PROJECT_DETAILS: 'project-details',
    USER_PROFILE: 'user-profile',
    FREELANCER_PROFILE: 'freelancer-profile',
    CLIENT_PROFILE: 'client-profile',
    NOTIFICATIONS: 'notifications',
    ACCOUNT_SETTINGS: 'account-settings',
    PRIVACY_SETTINGS: 'privacy-settings',
    THEME_SETTINGS: 'theme-settings',
    PAYMENT_SETTINGS: 'payment-settings',
    PORTFOLIO: 'portfolio',
    PROPOSALS: 'proposals',
    ACTIVE_ORDERS: 'active-orders',
    ORDER_HISTORY: 'order-history',
    REVIEWS: 'reviews',
    SEARCH_RESULTS: 'search-results',
    CATEGORIES: 'categories',
    CATEGORY_GIGS: 'category-gigs',
    ONBOARDING: 'onboarding',
} as const;

export type ScreenName = typeof SCREEN_NAMES[keyof typeof SCREEN_NAMES];

// Modal presentation configuration for Expo Router
export const MODAL_PRESENTATION = {
    LOGIN: { name: 'modal', screen: SCREEN_NAMES.LOGIN_MODAL },
    SIGNUP: { name: 'modal', screen: SCREEN_NAMES.SIGNUP_MODAL },
    SIGNUP_TYPE: { name: 'modal', screen: SCREEN_NAMES.SIGNUP_TYPE_MODAL },
    PROFILE: { name: 'modal', screen: SCREEN_NAMES.PROFILE_MODAL },
    LANGUAGE_SETTINGS: { name: 'modal', screen: SCREEN_NAMES.LANGUAGE_SETTINGS_MODAL },
    FORGOT_PASSWORD: { name: 'modal', screen: SCREEN_NAMES.FORGOT_PASSWORD_MODAL },
    RESET_PASSWORD: { name: 'modal', screen: SCREEN_NAMES.RESET_PASSWORD_MODAL },
    GIG_DETAILS: { name: 'modal', screen: SCREEN_NAMES.GIG_DETAILS_MODAL },
    PROJECT_DETAILS: { name: 'modal', screen: SCREEN_NAMES.PROJECT_DETAILS_MODAL },
    CREATE_GIG: { name: 'modal', screen: SCREEN_NAMES.CREATE_GIG_MODAL },
    PROPOSAL: { name: 'modal', screen: SCREEN_NAMES.PROPOSAL_MODAL },
    REVIEW: { name: 'modal', screen: SCREEN_NAMES.REVIEW_MODAL },
} as const;

// Modal screen names for easier filtering
export const MODAL_SCREENS = [
    SCREEN_NAMES.LOGIN_MODAL,
    SCREEN_NAMES.SIGNUP_MODAL,
    SCREEN_NAMES.SIGNUP_TYPE_MODAL,
    SCREEN_NAMES.PROFILE_MODAL,
    SCREEN_NAMES.LANGUAGE_SETTINGS_MODAL,
    SCREEN_NAMES.FORGOT_PASSWORD_MODAL,
    SCREEN_NAMES.RESET_PASSWORD_MODAL,
    SCREEN_NAMES.GIG_DETAILS_MODAL,
    SCREEN_NAMES.PROJECT_DETAILS_MODAL,
    SCREEN_NAMES.CREATE_GIG_MODAL,
    SCREEN_NAMES.PROPOSAL_MODAL,
    SCREEN_NAMES.REVIEW_MODAL,
] as const;

export type ModalScreenName = typeof MODAL_SCREENS[number];

// Public routes - accessible without authentication
export const PUBLIC_ROUTES = [
    SCREEN_NAMES.HOME,
    SCREEN_NAMES.BROWSE_GIGS,
    SCREEN_NAMES.LOGIN_MODAL,
    SCREEN_NAMES.SIGNUP_MODAL,
    SCREEN_NAMES.SIGNUP_TYPE_MODAL,
    SCREEN_NAMES.FORGOT_PASSWORD_MODAL,
    SCREEN_NAMES.RESET_PASSWORD_MODAL,
    SCREEN_NAMES.LANGUAGE_SETTINGS_MODAL,
    SCREEN_NAMES.GIG_DETAILS,
    SCREEN_NAMES.GIG_DETAILS_MODAL,
    SCREEN_NAMES.USER_PROFILE,
    SCREEN_NAMES.FREELANCER_PROFILE,
    SCREEN_NAMES.SEARCH_RESULTS,
    SCREEN_NAMES.CATEGORIES,
    SCREEN_NAMES.CATEGORY_GIGS,
] as const;

// Private routes - require authentication
export const PRIVATE_ROUTES = [
    SCREEN_NAMES.MY_PROJECTS,
    SCREEN_NAMES.MESSAGES,
    SCREEN_NAMES.PROFILE,
    SCREEN_NAMES.POST_PROJECT,
    SCREEN_NAMES.MY_GIGS,
    SCREEN_NAMES.EARNINGS,
    SCREEN_NAMES.SETTINGS,
    SCREEN_NAMES.PROFILE_MODAL,
    SCREEN_NAMES.PROJECT_DETAILS,
    SCREEN_NAMES.PROJECT_DETAILS_MODAL,
    SCREEN_NAMES.CREATE_GIG_MODAL,
    SCREEN_NAMES.PROPOSAL_MODAL,
    SCREEN_NAMES.REVIEW_MODAL,
    SCREEN_NAMES.NOTIFICATIONS,
    SCREEN_NAMES.ACCOUNT_SETTINGS,
    SCREEN_NAMES.PRIVACY_SETTINGS,
    SCREEN_NAMES.THEME_SETTINGS,
    SCREEN_NAMES.PAYMENT_SETTINGS,
    SCREEN_NAMES.PORTFOLIO,
    SCREEN_NAMES.PROPOSALS,
    SCREEN_NAMES.ACTIVE_ORDERS,
    SCREEN_NAMES.ORDER_HISTORY,
    SCREEN_NAMES.REVIEWS,
    SCREEN_NAMES.CLIENT_PROFILE,
    SCREEN_NAMES.ONBOARDING,
] as const;

export type PublicRouteName = typeof PUBLIC_ROUTES[number];
export type PrivateRouteName = typeof PRIVATE_ROUTES[number];

// Helper functions
export const isPublicRoute = (screenName: string): screenName is PublicRouteName => PUBLIC_ROUTES.includes(screenName as PublicRouteName);

export const isPrivateRoute = (screenName: string): screenName is PrivateRouteName => PRIVATE_ROUTES.includes(screenName as PrivateRouteName);

export const isModalScreen = (screenName: string): screenName is ModalScreenName => MODAL_SCREENS.includes(screenName as ModalScreenName); 