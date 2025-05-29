// User profile types for Linkor.uz

export interface Skill {
    id: string;
    name: string;
    category: string;
    level: 'beginner' | 'intermediate' | 'expert';
}

export interface Education {
    id: string;
    institution: string;
    degree: string;
    fieldOfStudy: string;
    startYear: number;
    endYear?: number;
    description?: string;
}

export interface WorkExperience {
    id: string;
    company: string;
    position: string;
    startDate: Date;
    endDate?: Date;
    description: string;
    skills: string[];
}

export interface PortfolioItem {
    id: string;
    title: string;
    description: string;
    images: string[];
    url?: string;
    technologies: string[];
    completedAt: Date;
}

export interface EmployeeProfile {
    id: string;
    userId: string;
    fullName: string;
    photo?: string;
    description: string;
    skills: Skill[];
    education: Education[];
    workExperience: WorkExperience[];
    portfolio: PortfolioItem[];
    resumeUrl?: string;
    hourlyRate?: number;
    availability: 'available' | 'busy' | 'unavailable';
    rating: number;
    completedJobs: number;
    languages: string[];
}

export interface EmployerProfile {
    id: string;
    userId: string;
    companyName: string;
    logo?: string;
    description: string;
    specializations: string[];
    website?: string;
    location: string;
    companySize: string;
    rating: number;
    jobsPosted: number;
} 