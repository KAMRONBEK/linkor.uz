# Linkor.uz 🚀

A modern professional networking platform built with React Native, Expo, and Firebase. This project follows atomic design principles and uses TypeScript for type safety.

## 🌟 Features

- **Professional Networking**: Connect with professionals in your field
- **Multi-language Support**: English, Russian, and Uzbek languages
- **Real-time Messaging**: Chat with your connections
- **Post Sharing**: Share professional updates and insights
- **Profile Management**: Comprehensive user profiles
- **Cross-platform**: iOS, Android, and Web support

## 🏗️ Architecture

This project implements a clean, scalable architecture with:

- **Frontend**: React Native with Expo Router
- **Backend**: Firebase/Firestore with Expo API Routes
- **UI Framework**: Tamagui for modern, performant components
- **Design System**: Atomic Design (Atoms → Molecules → Organisms → Templates → Pages)
- **Type Safety**: Strict TypeScript configuration
- **Code Quality**: ESLint with custom rules for architectural enforcement

## 📁 Project Structure

```
src/
├── backend/                    # Server-side logic
│   ├── api/                   # API route handlers
│   │   └── users+api.ts       # User CRUD operations
│   ├── config/                # Configuration files
│   │   └── firebase.ts        # Firebase setup & emulator config
│   ├── models/                # Data models
│   │   └── User.ts           # User interface & class
│   └── services/              # Business logic
│       └── UserService.ts     # User operations service
├── frontend/                  # Client-side application
│   ├── app/                   # Expo Router pages
│   │   ├── (tabs)/           # Tab navigation
│   │   │   ├── _layout.tsx   # Tab layout configuration
│   │   │   ├── index.tsx     # Home screen with login
│   │   │   └── explore.tsx   # Explore screen
│   │   └── _layout.tsx       # Root layout with Tamagui
│   ├── components/            # UI components (Atomic Design)
│   │   ├── atoms/            # Basic building blocks
│   │   │   ├── Button/       # Reusable button component
│   │   │   └── Input/        # Reusable input component
│   │   ├── molecules/        # Component combinations
│   │   │   └── LoginForm/    # Login form with validation
│   │   └── navigation/       # Navigation components
│   │       └── TabBarIcon.tsx
│   ├── constants/            # App constants
│   │   └── Colors.ts         # Theme colors
│   └── hooks/                # Custom React hooks
│       └── useColorScheme.ts # Color scheme detection
├── shared/                    # Shared utilities & types
│   ├── types/                # TypeScript type definitions
│   │   └── api.ts           # API response types
│   └── utils/               # Utility functions
│       └── validation.ts    # Zod validation schemas
└── tamagui.config.ts         # Tamagui configuration
```

## 🌍 Internationalization (i18n)

The app supports three languages with automatic device language detection:

### Supported Languages
- **English (en)** - Default language
- **Russian (ru)** - Русский язык
- **Uzbek (uz)** - O'zbek tili

### Implementation Details

#### Configuration
The i18n system is built with `react-i18next` and `expo-localization`:

```typescript
// src/shared/i18n/index.ts
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import * as Localization from 'expo-localization';
```

#### Language Detection
- Automatically detects device language on app startup
- Falls back to English if device language is not supported
- Supports manual language switching via UI

#### Translation Files
Translation files are organized by language in JSON format:

```
src/shared/i18n/locales/
├── en.json    # English translations
├── ru.json    # Russian translations
└── uz.json    # Uzbek translations
```

#### Usage in Components
Use the `useI18n` hook for translations:

```typescript
import { useI18n } from '@/shared/hooks/useI18n';

const MyComponent = () => {
  const { t, changeLanguage, currentLanguage } = useI18n();
  
  return (
    <Text>{t('auth.welcome')}</Text>
  );
};
```

#### Language Selector Component
A reusable language selector component is available:

```typescript
import { LanguageSelector } from '@/components/atoms/LanguageSelector';

<LanguageSelector size="small" variant="outlined" />
```

### Adding New Languages

1. Create a new translation file in `src/shared/i18n/locales/`
2. Add the language code to `SUPPORTED_LANGUAGES` in `useI18n.ts`
3. Update the `LANGUAGE_NAMES` object with the native language name
4. Add translations for all existing keys

### Translation Keys Structure

```json
{
  "common": { "loading": "Loading...", "error": "Error" },
  "navigation": { "home": "Home", "explore": "Explore" },
  "auth": { "welcome": "Welcome", "signIn": "Sign In" },
  "settings": { "language": "Language", "theme": "Theme" },
  "app": { "name": "Linkor.uz", "tagline": "Your professional networking platform" }
}
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn
- Expo CLI (`npm install -g @expo/cli`)
- Firebase CLI (`npm install -g firebase-tools`) - for backend development

### Installation

1. **Clone and install dependencies**
   ```bash
   git clone <repository-url>
   cd linkor.uz
   npm install
   ```

2. **Set up environment variables**
   ```bash
   cp .env.example .env
   ```
   
   Edit `.env` with your Firebase configuration:
   ```env
   # Firebase Configuration
   EXPO_PUBLIC_FIREBASE_API_KEY=your_api_key_here
   EXPO_PUBLIC_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
   EXPO_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
   EXPO_PUBLIC_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
   EXPO_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
   EXPO_PUBLIC_FIREBASE_APP_ID=your_app_id
   
   # Development
   NODE_ENV=development
   EXPO_PUBLIC_API_URL=http://localhost:8081
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

### Firebase Setup (Optional)

For full backend functionality:

1. **Create a Firebase project**
   - Go to [Firebase Console](https://console.firebase.google.com/)
   - Create a new project
   - Enable Firestore Database
   - Enable Authentication

2. **Configure Firebase locally**
   ```bash
   firebase login
   firebase init firestore
   firebase init emulators
   ```

3. **Start Firebase emulators** (for local development)
   ```bash
   firebase emulators:start
   ```

## 🛠️ Development

### Available Scripts

```bash
# Development
npm start              # Start Expo development server
npm run android        # Run on Android emulator
npm run ios           # Run on iOS simulator
npm run web           # Run in web browser

# Code Quality
npm run lint          # Run ESLint
npm run lint:fix      # Fix ESLint issues automatically
npm run type-check    # Run TypeScript type checking
npm run format        # Format code with Prettier
npm run format:check  # Check code formatting

# Build
npm run build         # Build for production
```

### Code Quality Standards

This project enforces strict code quality standards:

- **TypeScript**: Strict mode enabled with `noImplicitAny`
- **ESLint**: Custom rules enforcing atomic design architecture
- **Prettier**: Consistent code formatting
- **Import Organization**: Automatic import sorting and grouping

### Atomic Design Enforcement

ESLint rules prevent architectural violations:

- **Atoms** cannot import from molecules, organisms, templates, or pages
- **Molecules** cannot import from organisms, templates, or pages  
- **Organisms** cannot import from templates or pages
- **Backend** cannot import from frontend

## 🎨 UI Components

### Design System

Built with Tamagui for optimal performance and developer experience:

- **Atoms**: Button, Input, Text, etc.
- **Molecules**: LoginForm, SearchBar, etc.
- **Organisms**: Header, Sidebar, etc.
- **Templates**: Page layouts
- **Pages**: Complete screens

### Example Usage

```tsx
import { Button } from '@/atoms/Button';
import { Input } from '@/atoms/Input';
import { LoginForm } from '@/molecules/LoginForm';

// Use components with full TypeScript support
<LoginForm
  onSubmit={(credentials) => handleLogin(credentials)}
  isLoading={isLoading}
  error={error}
/>
```

## 🔥 Firebase Integration

### Features

- **Authentication**: User registration and login
- **Firestore**: Real-time database for user data
- **API Routes**: RESTful endpoints using Expo API Routes
- **Emulator Support**: Local development with Firebase emulators

### API Endpoints

```
GET    /api/users              # Get all users
GET    /api/users?id=123       # Get user by ID
GET    /api/users?email=...    # Get user by email
POST   /api/users              # Create new user
PUT    /api/users?id=123       # Update user
DELETE /api/users?id=123       # Delete user
```

## 📱 Platform Support

- **iOS**: Native iOS app
- **Android**: Native Android app  
- **Web**: Progressive Web App
- **Desktop**: Electron app (future)

## 🧪 Testing

```bash
# Run tests (when implemented)
npm test

# Run tests in watch mode
npm run test:watch

# Generate coverage report
npm run test:coverage
```

## 🚀 Deployment

### Expo Application Services (EAS)

```bash
# Install EAS CLI
npm install -g eas-cli

# Configure EAS
eas build:configure

# Build for production
eas build --platform all

# Submit to app stores
eas submit
```

### Web Deployment

```bash
# Build for web
npm run build

# Deploy to Vercel, Netlify, or your preferred platform
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Follow the coding standards and run quality checks
4. Commit your changes (`git commit -m 'Add amazing feature'`)
5. Push to the branch (`git push origin feature/amazing-feature`)
6. Open a Pull Request

### Development Guidelines

- Follow atomic design principles
- Write TypeScript with strict typing
- Add proper JSDoc comments for complex functions
- Ensure all linting and type checking passes
- Test on multiple platforms before submitting

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Expo](https://expo.dev/) - React Native development platform
- [Tamagui](https://tamagui.dev/) - Universal UI system
- [Firebase](https://firebase.google.com/) - Backend services
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [Zod](https://zod.dev/) - Schema validation

---

**Built with ❤️ for the professional networking community**
