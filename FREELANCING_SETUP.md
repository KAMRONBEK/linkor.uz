# Linkor.uz - Freelancing Platform Setup

## Overview

Linkor.uz is a freelancing platform similar to Upwork, Fiverr, and Kwork, built with React Native/Expo, TypeScript, and Tamagui. The platform connects freelancers with clients in Uzbekistan.

## Architecture

### Project Structure
```
src/
├── frontend/           # Frontend components and logic
│   ├── components/     # Atomic design components
│   │   ├── atoms/      # Basic building blocks (Button, Input, etc.)
│   │   ├── molecules/  # Component combinations (LoginForm, etc.)
│   │   ├── organisms/  # Complex component sections
│   │   ├── templates/  # Page layouts
│   │   └── pages/      # Complete pages
│   └── navigation/     # Navigation components
├── backend/            # Backend utilities and services
└── shared/             # Shared utilities, hooks, and constants
    ├── constants/      # Screen names, routes
    ├── hooks/          # Custom hooks (useI18n)
    ├── i18n/          # Internationalization
    ├── types/         # TypeScript types
    └── utils/         # Utility functions

app/                   # Expo Router app directory
├── (tabs)/           # Tab navigation
│   ├── index.tsx     # Home screen
│   ├── browse-gigs.tsx # Browse available gigs
│   ├── my-projects.tsx # User's projects
│   ├── messages.tsx  # Chat/messaging
│   ├── profile.tsx   # User profile
│   └── settings.tsx  # Settings
└── _layout.tsx       # Root layout
```

### Key Features Implemented

#### 1. Navigation Structure
- **Home**: Landing page with featured gigs, categories, and platform overview
- **Browse Gigs**: Search and filter available services
- **My Projects**: Manage posted projects and proposals
- **Messages**: Chat with freelancers/clients
- **Profile**: User profile with stats, portfolio, and reviews
- **Settings**: Account settings, preferences, and app configuration

#### 2. Internationalization (i18n)
- Support for 3 languages: Uzbek (primary), English, Russian
- Automatic device language detection
- Comprehensive translations for all platform features

#### 3. Component System
- Atomic design methodology
- Reusable components with consistent theming
- TypeScript interfaces for type safety

#### 4. Type System
Comprehensive TypeScript types for:
- **Users**: Client and Freelancer profiles
- **Gigs**: Service listings with packages and pricing
- **Projects**: Client project postings
- **Proposals**: Freelancer bids on projects
- **Orders**: Active work contracts
- **Messages**: Chat system
- **Reviews**: Rating and feedback system
- **Payments**: Transaction and earnings tracking

### Core Types

#### User Types
```typescript
interface User {
    id: string;
    email: string;
    firstName: string;
    lastName: string;
    userType: 'client' | 'freelancer' | 'both';
    // ... other fields
}

interface FreelancerProfile extends User {
    title: string;
    hourlyRate?: number;
    skills: string[];
    portfolio: PortfolioItem[];
    rating: number;
    completionRate: number;
    // ... other fields
}
```

#### Gig Types
```typescript
interface Gig {
    id: string;
    freelancerId: string;
    title: string;
    description: string;
    category: string;
    packages: GigPackage[];
    rating: number;
    // ... other fields
}
```

#### Project Types
```typescript
interface Project {
    id: string;
    clientId: string;
    title: string;
    description: string;
    budget: ProjectBudget;
    skillsRequired: string[];
    status: 'open' | 'in_progress' | 'completed' | 'cancelled';
    // ... other fields
}
```

## Getting Started

### Prerequisites
- Node.js 18+
- Expo CLI
- React Native development environment

### Installation
```bash
# Install dependencies
npm install
# or
yarn install

# Start development server
npm start
# or
yarn start
```

### Development
```bash
# Run on web
npm run web

# Run on iOS simulator
npm run ios

# Run on Android emulator
npm run android

# Type checking
npm run type-check

# Linting
npm run lint
npm run lint:fix
```

## Platform Features

### For Freelancers
- Create and manage gigs with multiple packages
- Browse and bid on projects
- Portfolio showcase
- Earnings tracking
- Client communication
- Order management

### For Clients
- Post projects with detailed requirements
- Browse freelancer profiles and gigs
- Review proposals and hire freelancers
- Project management
- Payment processing
- Review and rating system

### Core Functionality
- **Search & Discovery**: Advanced filtering and search
- **Messaging**: Real-time chat between users
- **Payment System**: Secure transactions and escrow
- **Review System**: Ratings and feedback
- **Notifications**: Real-time updates
- **Multi-language**: Uzbek, English, Russian support

## Next Steps

### Backend Integration
- Set up API endpoints for all CRUD operations
- Implement authentication and authorization
- Add real-time messaging with WebSocket
- Payment gateway integration
- File upload and storage

### Additional Features
- Video calls for consultations
- Advanced search with AI recommendations
- Mobile app optimization
- Admin dashboard
- Analytics and reporting

### Deployment
- Set up CI/CD pipeline
- Configure production environment
- Database setup and migrations
- CDN for file storage
- Monitoring and logging

## Contributing

1. Follow the atomic design principles
2. Use TypeScript for all new code
3. Add translations for new features
4. Write tests for components and utilities
5. Follow the established code style and linting rules

## Tech Stack

- **Frontend**: React Native, Expo, TypeScript
- **UI Library**: Tamagui
- **Navigation**: Expo Router
- **State Management**: React hooks (can be extended with Zustand/Redux)
- **Internationalization**: i18next
- **Icons**: Tamagui Lucide Icons
- **Forms**: React Hook Form
- **Validation**: Zod

This setup provides a solid foundation for building a comprehensive freelancing platform with modern development practices and scalable architecture. 