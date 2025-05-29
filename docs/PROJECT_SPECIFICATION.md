# Linkor.uz - Project Specification

**Freelancing Platform for Uzbekistan Market (Upwork Analog)**

## 🎯 Project Overview

Linkor.uz is an online platform for finding freelancers and projects, similar to Upwork, oriented towards the Uzbekistan market. The platform will support three languages: Russian, Uzbek, and (in the future) English. The launch is divided into three phases: free, AI-enhanced, and full commercial with monetization and community features.

## 🌐 Supported Languages

- **Russian** (ru) - Primary language
- **Uzbek** (uz) - Primary language  
- **English** (en) - Future implementation

## 📈 Development Phases

### Phase 1: Free Platform (MVP)
**Goal**: Provide users with a starting platform for job searching and hiring without payment, only core functionality.

#### Core Features
- **Home page (Onboarding)**
- **Registration and login** (by phone number and email)
- **Interface** in Russian, English and Uzbek languages
- **Worker profile completion**: Name, photo, description, skills, education, work experience
- **Employer profile completion**: Role selection, basic data, logo, specializations
- **Job posting**: Task description, budget, payment method
- **Application processing**: Filtering, chat, interviews
- **Contract conclusion**: Selection, signing, payment through Click/Payme
- **Project control**: Status, acceptance, reviews
- **Resume upload and download** in PDF format
- **Search for projects and freelancers**
- **Work categories** (design, programming, etc.)
- **Project viewing and favorites**
- **Project application submission**
- **Chat between client and freelancer**
- **Notifications**
- **View count for posted orders**
- **Add to favorites**
- **Admin panel** for user management

### Phase 2: AI-Enhanced Platform
**Goal**: Improve profile quality through automatic resume processing using AI.

#### AI Features
- **AI profile completion** from uploaded resume (PDF/DOCX/LinkedIn)
- **Automatic quality profile generation**
- **Project and freelancer recommendations** based on skills
- **Enhanced resume and automatic PDF generation**
- **User view and action history**
- **Profile statistics viewing**

### Phase 3: Full Commercial Platform with Payment and Community
**Goal**: Transform the platform into a commercial product with a complete set of features.

#### Commercial Features
- **Payment system integration** (Payme, Click, Uzcard, VISA/MasterCard)
- **Commission retention** from orders (e.g., 10%)
- **Analytics**: Income, projects, hours
- **Community section** (Q&A, forums, badges)
- **Profiles with achievements and ratings**
- **Reviews and scoring system**
- **Paid subscriptions** with bonuses (priority, analytics, etc.)
- **Connect purchases**
- **Reports, diaries, analytics**

## 🎨 User Roles

### 👨‍💼 Worker (Freelancer)
**Profile Fields:**
- Full Name (ФИО)
- Profile Photo
- Description
- Skills
- Education
- Work Experience
- Portfolio
- Resume (PDF upload/download)

**Capabilities:**
- Browse and search projects
- Submit project applications
- Chat with clients
- Manage project status
- Receive notifications
- Add projects to favorites

### 🏢 Employer (Client)
**Profile Fields:**
- Role selection
- Basic company data
- Company logo
- Specializations
- Contact information

**Capabilities:**
- Post job listings
- Review applications
- Filter and interview candidates
- Create contracts
- Process payments (Click/Payme)
- Monitor project progress
- Leave reviews

## 💳 Payment Integration

### Phase 1 (Basic)
- **Click** payment system
- **Payme** payment system
- Basic contract and payment flow

### Phase 3 (Full Commercial)
- **Uzcard** integration
- **VISA/MasterCard** support
- **Commission system** (10% platform fee)
- **Subscription payments**
- **Connect purchasing system**

## 🏗️ Technical Architecture

### Current Implementation Status
✅ **Responsive Design** - Mobile and web adaptive UI  
✅ **Multi-language Support** - i18n with uz, ru, en  
✅ **Navigation System** - Adaptive tabs/sidebar  
✅ **Component System** - Atomic design with TypeScript  
✅ **Form Handling** - React Hook Form integration  

### Required Implementation

#### Authentication System
- Phone number registration
- Email registration
- SMS verification
- User role selection (Worker/Employer)

#### Profile Management
- Dynamic profile forms based on user role
- Photo upload functionality
- Skills and education management
- Portfolio/work history

#### Project Management
- Job posting system
- Application/proposal system
- Project status tracking
- Contract management

#### Communication
- Real-time chat system
- Notification system
- Interview scheduling

#### Search & Discovery
- Advanced project search
- Freelancer discovery
- Category-based filtering
- Favorites system

## 📱 Platform Features by Phase

### Phase 1: MVP Features
| Feature | Status | Priority |
|---------|--------|----------|
| User Registration/Login | 🔄 Pending | High |
| Profile Creation | 🔄 Pending | High |
| Job Posting | 🔄 Pending | High |
| Project Search | 🔄 Pending | High |
| Basic Chat | 🔄 Pending | High |
| Payment Integration (Click/Payme) | 🔄 Pending | Medium |
| Admin Panel | 🔄 Pending | Medium |

### Phase 2: AI Features
| Feature | Status | Priority |
|---------|--------|----------|
| AI Profile Generation | 🔄 Future | High |
| Skill-based Recommendations | 🔄 Future | High |
| Enhanced Resume Processing | 🔄 Future | Medium |
| User Analytics | 🔄 Future | Medium |

### Phase 3: Commercial Features
| Feature | Status | Priority |
|---------|--------|----------|
| Commission System | 🔄 Future | High |
| Advanced Analytics | 🔄 Future | High |
| Community Features | 🔄 Future | Medium |
| Subscription System | 🔄 Future | Medium |
| Connect System | 🔄 Future | Low |

## 🎯 Success Metrics

### Phase 1 Goals
- **User Registration**: 1,000+ users in first 3 months
- **Job Postings**: 100+ active projects
- **Successful Contracts**: 50+ completed projects
- **Platform Adoption**: 10% market share in Uzbekistan freelance market

### Phase 2 Goals
- **AI Adoption**: 70% of users use AI profile generation
- **Improved Matching**: 40% increase in successful project matches
- **User Retention**: 60% monthly active user retention

### Phase 3 Goals
- **Revenue Generation**: $10,000+ monthly recurring revenue
- **Community Engagement**: 500+ active community members
- **Subscription Adoption**: 20% premium user base
- **Market Leadership**: #1 freelancing platform in Uzbekistan

## 🚀 Next Steps

1. **Implement Phase 1 MVP** with current responsive architecture
2. **Set up authentication system** with phone/email registration
3. **Create user role-based profile forms**
4. **Implement project posting and discovery**
5. **Integrate basic payment systems** (Click/Payme)
6. **Build admin panel** for user management
7. **Prepare for Phase 2 AI integration**

---

*This specification serves as the foundation for building Uzbekistan's leading freelancing platform.* 