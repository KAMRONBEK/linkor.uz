// User Types
export interface User {
    id: string;
    email: string;
    firstName: string;
    lastName: string;
    avatar?: string;
    bio?: string;
    location?: string;
    website?: string;
    phoneNumber?: string;
    dateOfBirth?: string;
    userType: 'client' | 'freelancer' | 'both';
    isVerified: boolean;
    memberSince: string;
    lastSeen?: string;
    isOnline: boolean;
}

export interface FreelancerProfile extends User {
    title: string;
    hourlyRate?: number;
    skills: string[];
    portfolio: PortfolioItem[];
    experience: ExperienceItem[];
    education: EducationItem[];
    certifications: CertificationItem[];
    languages: LanguageSkill[];
    responseTime: string;
    completionRate: number;
    rating: number;
    reviewCount: number;
    totalEarnings: number;
    completedOrders: number;
    activeOrders: number;
}

export interface ClientProfile extends User {
    companyName?: string;
    industry?: string;
    projectsPosted: number;
    totalSpent: number;
    activeProjects: number;
}

// Portfolio & Experience Types
export interface PortfolioItem {
    id: string;
    title: string;
    description: string;
    images: string[];
    url?: string;
    technologies: string[];
    completedAt: string;
}

export interface ExperienceItem {
    id: string;
    title: string;
    company: string;
    description: string;
    startDate: string;
    endDate?: string;
    isCurrent: boolean;
}

export interface EducationItem {
    id: string;
    degree: string;
    institution: string;
    fieldOfStudy: string;
    startDate: string;
    endDate?: string;
    description?: string;
}

export interface CertificationItem {
    id: string;
    name: string;
    issuer: string;
    issueDate: string;
    expiryDate?: string;
    credentialId?: string;
    url?: string;
}

export interface LanguageSkill {
    language: string;
    proficiency: 'basic' | 'conversational' | 'fluent' | 'native';
}

// Gig Types
export interface Gig {
    id: string;
    freelancerId: string;
    freelancer: FreelancerProfile;
    title: string;
    description: string;
    category: string;
    subcategory: string;
    tags: string[];
    images: string[];
    video?: string;
    packages: GigPackage[];
    requirements?: string;
    faq: FAQ[];
    rating: number;
    reviewCount: number;
    ordersInQueue: number;
    isActive: boolean;
    createdAt: string;
    updatedAt: string;
}

export interface GigPackage {
    type: 'basic' | 'standard' | 'premium';
    title: string;
    description: string;
    price: number;
    deliveryTime: number; // in days
    revisions: number;
    features: string[];
}

export interface FAQ {
    question: string;
    answer: string;
}

// Project Types
export interface Project {
    id: string;
    clientId: string;
    client: ClientProfile;
    title: string;
    description: string;
    category: string;
    subcategory: string;
    skillsRequired: string[];
    budget: ProjectBudget;
    timeline: string;
    experienceLevel: 'beginner' | 'intermediate' | 'expert';
    projectType: 'fixed' | 'hourly';
    attachments: string[];
    status: 'open' | 'in_progress' | 'completed' | 'cancelled';
    proposalCount: number;
    createdAt: string;
    updatedAt: string;
    deadline?: string;
}

export interface ProjectBudget {
    type: 'fixed' | 'hourly';
    min?: number;
    max?: number;
    fixed?: number;
    hourlyRate?: number;
}

// Proposal Types
export interface Proposal {
    id: string;
    projectId: string;
    freelancerId: string;
    freelancer: FreelancerProfile;
    coverLetter: string;
    proposedBudget: number;
    estimatedDelivery: string;
    milestones?: Milestone[];
    attachments: string[];
    status: 'pending' | 'accepted' | 'rejected' | 'withdrawn';
    createdAt: string;
    updatedAt: string;
}

export interface Milestone {
    id: string;
    title: string;
    description: string;
    amount: number;
    dueDate: string;
    status: 'pending' | 'in_progress' | 'completed' | 'approved';
}

// Order Types
export interface Order {
    id: string;
    gigId?: string;
    projectId?: string;
    clientId: string;
    freelancerId: string;
    client: ClientProfile;
    freelancer: FreelancerProfile;
    title: string;
    description: string;
    amount: number;
    status: 'active' | 'delivered' | 'completed' | 'cancelled' | 'disputed';
    deliveryDate: string;
    requirements?: string;
    deliverables: Deliverable[];
    revisions: Revision[];
    maxRevisions: number;
    createdAt: string;
    updatedAt: string;
}

export interface Deliverable {
    id: string;
    description: string;
    files: string[];
    deliveredAt: string;
}

export interface Revision {
    id: string;
    description: string;
    requestedAt: string;
    status: 'pending' | 'completed';
}

// Review Types
export interface Review {
    id: string;
    orderId: string;
    reviewerId: string;
    revieweeId: string;
    reviewer: User;
    rating: number;
    comment: string;
    isRecommended: boolean;
    isHelpful?: boolean;
    createdAt: string;
}

// Message Types
export interface Conversation {
    id: string;
    participants: User[];
    lastMessage?: Message;
    unreadCount: number;
    createdAt: string;
    updatedAt: string;
}

export interface Message {
    id: string;
    conversationId: string;
    senderId: string;
    content: string;
    type: 'text' | 'file' | 'image' | 'voice';
    attachments?: string[];
    isRead: boolean;
    createdAt: string;
}

// Category Types
export interface Category {
    id: string;
    name: string;
    description: string;
    icon: string;
    subcategories: Subcategory[];
    gigCount: number;
    isPopular: boolean;
}

export interface Subcategory {
    id: string;
    name: string;
    description: string;
    gigCount: number;
}

// Search & Filter Types
export interface SearchFilters {
    query?: string;
    category?: string;
    subcategory?: string;
    minPrice?: number;
    maxPrice?: number;
    deliveryTime?: number;
    rating?: number;
    location?: string;
    skills?: string[];
    experienceLevel?: 'beginner' | 'intermediate' | 'expert';
    sortBy?: 'relevance' | 'newest' | 'oldest' | 'price_low' | 'price_high' | 'rating' | 'delivery_time';
}

export interface SearchResult<T> {
    items: T[];
    total: number;
    page: number;
    limit: number;
    hasMore: boolean;
}

// Notification Types
export interface Notification {
    id: string;
    userId: string;
    type: 'message' | 'order' | 'proposal' | 'review' | 'payment' | 'system';
    title: string;
    message: string;
    data?: Record<string, any>;
    isRead: boolean;
    createdAt: string;
}

// Payment Types
export interface PaymentMethod {
    id: string;
    type: 'card' | 'paypal' | 'bank_transfer';
    last4?: string;
    brand?: string;
    expiryMonth?: number;
    expiryYear?: number;
    isDefault: boolean;
}

export interface Transaction {
    id: string;
    userId: string;
    orderId?: string;
    type: 'payment' | 'withdrawal' | 'refund' | 'fee';
    amount: number;
    currency: string;
    status: 'pending' | 'completed' | 'failed' | 'cancelled';
    description: string;
    createdAt: string;
}

export interface Earnings {
    totalEarnings: number;
    availableForWithdrawal: number;
    pendingEarnings: number;
    thisMonth: number;
    lastMonth: number;
    thisYear: number;
} 