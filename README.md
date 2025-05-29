# Linkor.uz 🚀

A modern freelancing platform built with React Native, Expo, and Tamagui. Connect talented freelancers with clients across Uzbekistan. This project follows atomic design principles and uses TypeScript for type safety.

## 🌟 Features

### For Freelancers
- **Browse & Apply**: Find projects that match your skills
- **Gig Creation**: Offer your services with custom packages
- **Portfolio Management**: Showcase your best work
- **Real-time Messaging**: Communicate with clients
- **Earnings Tracking**: Monitor your income and withdrawals
- **Proposal System**: Submit competitive bids

### For Clients
- **Project Posting**: Post detailed project requirements
- **Freelancer Discovery**: Browse services and profiles
- **Proposal Management**: Review and compare freelancer bids
- **Order Management**: Track project progress and deliverables
- **Review System**: Rate and review completed work

### Platform Features
- **Multi-language Support**: Uzbek (primary), English, and Russian
- **Cross-platform**: iOS, Android, and Web support
- **Real-time Chat**: Instant messaging between users
- **Secure Payments**: Integrated payment processing
- **Advanced Search**: Filter by skills, budget, delivery time
- **Professional Profiles**: Comprehensive user profiles with verification

## 🏗️ Architecture

This project implements a clean, scalable architecture with:

- **Frontend**: React Native with Expo Router
- **UI Framework**: Tamagui for modern, performant components
- **Design System**: Atomic Design (Atoms → Molecules → Organisms → Templates → Pages)
- **Type Safety**: Comprehensive TypeScript interfaces
- **Internationalization**: i18next with automatic language detection
- **Code Quality**: ESLint with custom architectural enforcement rules

## 📁 Project Structure

```
src/
├── shared/                     # Shared utilities & types
│   ├── types/                 # TypeScript type definitions
│   │   └── freelancing.ts     # Complete freelancing platform types
│   ├── constants/             # App constants
│   │   └── screens.ts         # Screen names and routes
│   ├── i18n/                  # Internationalization
│   │   ├── index.ts          # i18n configuration
│   │   └── locales/          # Translation files
│   │       ├── en.json       # English translations
│   │       ├── ru.json       # Russian translations
│   │       └── uz.json       # Uzbek translations (primary)
│   └── hooks/                # Custom React hooks
│       └── useI18n.ts        # Internationalization hook
├── frontend/                  # Client-side application
│   └── components/            # UI components (Atomic Design)
│       ├── atoms/            # Basic building blocks
│       │   ├── Button/       # Reusable button component
│       │   ├── Input/        # Reusable input component
│       │   └── LanguageSelector/ # Language switching component
│       ├── molecules/        # Component combinations
│       │   └── LoginForm/    # Login form with validation
│       └── navigation/       # Navigation components
│           └── TabBarIcon.tsx # Tab bar icons
└── app/                       # Expo Router pages
    ├── (tabs)/               # Main tab navigation
    │   ├── _layout.tsx       # Tab layout configuration
    │   ├── index.tsx         # Home/Landing page
    │   ├── browse-gigs.tsx   # Browse services/gigs
    │   ├── my-projects.tsx   # Project management
    │   ├── messages.tsx      # Real-time messaging
    │   └── profile.tsx       # User profiles
    └── _layout.tsx           # Root layout with Tamagui
```

## 🌍 Internationalization (i18n)

The platform supports three languages targeting the Uzbekistan market:

### Supported Languages
- **Uzbek (uz)** - O'zbek tili (Primary language)
- **English (en)** - English (Fallback language)
- **Russian (ru)** - Русский язык (Additional language)

### Features
- **Automatic Detection**: Detects device language on startup
- **Manual Switching**: Language selector component
- **Comprehensive Coverage**: All UI elements, messages, and content
- **Professional Terminology**: Freelancing-specific translations

### Usage in Components
```typescript
import { useI18n } from '@/shared';

const MyComponent = () => {
  const { t, changeLanguage, currentLanguage } = useI18n();
  
  return (
    <Text>{t('gigs.browseGigs')}</Text>
  );
};
```

### Translation Categories
- `common.*` - Common UI elements
- `navigation.*` - Navigation labels
- `auth.*` - Authentication flows
- `gigs.*` - Service/gig management
- `projects.*` - Project management
- `proposals.*` - Proposal system
- `orders.*` - Order management
- `messages.*` - Messaging system
- `reviews.*` - Review system
- `earnings.*` - Payment and earnings
- `categories.*` - Service categories
- `search.*` - Search and filtering

## 🎨 Freelancing Platform Screens

### Main Navigation Tabs
- **Home**: Landing page with hero section, categories, featured gigs
- **Browse Gigs**: Search and filter freelancer services
- **My Projects**: Project management and proposal viewing
- **Messages**: Real-time chat with online indicators
- **Profile**: User profiles with portfolio, skills, and stats

### Key Features by Screen

#### Home Screen
- Hero section with search
- Popular categories
- Featured gigs
- Platform statistics
- "How it works" guide

#### Browse Gigs Screen
- Advanced search and filters
- Category browsing
- Gig cards with ratings and pricing
- Sort by relevance, price, delivery time

#### My Projects Screen
- Project status tabs (Active, Completed, Cancelled)
- Proposal management
- Project details and timeline
- Budget and milestone tracking

#### Messages Screen
- Conversation list
- Real-time messaging
- Online/offline status
- File attachments support

#### Profile Screen
- Professional profile display
- Portfolio showcase
- Skills and experience
- Reviews and ratings
- Earnings statistics

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn
- Expo CLI (`npm install -g @expo/cli`)

### Installation

1. **Clone and install dependencies**
   ```bash
   git clone <repository-url>
   cd linkor.uz
   npm install
   ```

2. **Start the development server**
   ```bash
   npm start
   ```

3. **Run on different platforms**
   ```bash
   npm run android        # Android emulator
   npm run ios           # iOS simulator  
   npm run web           # Web browser
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
```

### Code Quality Standards

- **TypeScript**: Strict typing with comprehensive interfaces
- **ESLint**: Custom rules enforcing atomic design architecture
- **Import Organization**: Automatic import sorting and barrel exports
- **Component Architecture**: Enforced separation between atomic design layers

### Architectural Rules
- Atoms cannot import molecules/organisms/templates/pages
- Molecules cannot import organisms/templates/pages
- Organisms cannot import templates/pages
- All imports use absolute paths with barrel exports

## 🎨 UI Components & Design System

Built with Tamagui for optimal performance and modern design:

### Component Library
- **Atoms**: Button, Input, LanguageSelector
- **Molecules**: LoginForm, SearchBar
- **Navigation**: TabBarIcon with Lucide icons

### Example Usage
```tsx
import { Button, Input } from '@/atoms';
import { LoginForm } from '@/molecules';

<Button 
  variant="primary" 
  size="md" 
  icon={<Plus size={16} />}
>
  Post Project
</Button>
```

## 💼 Freelancing Platform Types

Comprehensive TypeScript interfaces covering:

- **Users & Profiles**: Freelancer and client profiles
- **Gigs**: Service offerings with packages and pricing
- **Projects**: Client project postings
- **Proposals**: Freelancer bids and proposals
- **Orders**: Project execution and deliverables
- **Messages**: Real-time communication
- **Reviews**: Rating and feedback system
- **Categories**: Service categorization
- **Payments**: Earnings and transactions

## 🌟 Key Features Implementation

### Search & Discovery
- Category-based browsing
- Advanced filtering (price, delivery time, rating)
- Location-based results
- Skill-based matching

### Project Management
- Milestone-based project tracking
- Proposal comparison tools
- Real-time progress updates
- File sharing and collaboration

### Communication
- Real-time messaging
- Online/offline status
- Conversation history
- File attachments

### Payments & Earnings
- Secure payment processing
- Earnings tracking
- Withdrawal management
- Transaction history

## 📱 Platform Support

- **iOS**: Native iOS app via Expo
- **Android**: Native Android app via Expo
- **Web**: Progressive Web App
- **Future**: Desktop app support planned

## 🚀 Deployment

### Expo Application Services (EAS)

```bash
# Install EAS CLI
npm install -g eas-cli

# Configure EAS
eas build:configure

# Build for production
eas build --platform all
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/freelancing-feature`)
3. Follow the coding standards and architectural guidelines
4. Ensure all TypeScript types are properly defined
5. Test on multiple platforms
6. Submit a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 🙏 Acknowledgments

- [Expo](https://expo.dev/) - React Native development platform
- [Tamagui](https://tamagui.dev/) - Universal UI system and design tokens
- [Lucide Icons](https://lucide.dev/) - Beautiful icon library
- [react-i18next](https://react.i18next.com/) - Internationalization framework
- [React Hook Form](https://react-hook-form.com/) - Performant forms with validation

---

**Connecting talent with opportunity across Uzbekistan** 🇺🇿
