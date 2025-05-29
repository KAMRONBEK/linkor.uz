// Search and filter types for Linkor.uz

import type { PaymentMethod } from './common';

export interface JobSearchFilters {
    category?: string;
    skills?: string[];
    budgetMin?: number;
    budgetMax?: number;
    timeline?: string;
    location?: string;
    paymentMethod?: PaymentMethod[];
    sortBy?: 'newest' | 'budget_high' | 'budget_low' | 'deadline';
}

export interface EmployeeSearchFilters {
    skills?: string[];
    hourlyRateMin?: number;
    hourlyRateMax?: number;
    rating?: number;
    availability?: string;
    location?: string;
    languages?: string[];
    sortBy?: 'rating' | 'rate_low' | 'rate_high' | 'experience';
} 