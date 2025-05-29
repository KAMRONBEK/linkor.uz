// Job types for Linkor.uz

import type { Application } from './application';
import type { JobStatus, PaymentMethod } from './common';

export interface JobCategory {
    id: string;
    name: string;
    slug: string;
    description: string;
    subcategories: string[];
}

export interface JobBudget {
    type: 'fixed' | 'hourly';
    min: number;
    max: number;
    currency: 'UZS' | 'USD';
}

export interface Job {
    id: string;
    employerId: string;
    title: string;
    description: string;
    category: JobCategory;
    budget: JobBudget;
    timeline: string;
    skills: string[];
    paymentMethod: PaymentMethod;
    status: JobStatus;
    viewCount: number;
    favoriteCount: number;
    applications: Application[];
    createdAt: Date;
    updatedAt: Date;
    deadline?: Date;
    attachments: string[];
} 