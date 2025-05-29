// Common types and API response types for Linkor.uz

export type UserRole = 'employee' | 'employer';
export type AuthMethod = 'phone' | 'email';
export type JobStatus = 'draft' | 'open' | 'in_progress' | 'completed' | 'cancelled';
export type ApplicationStatus = 'pending' | 'accepted' | 'rejected' | 'withdrawn';
export type PaymentMethod = 'click' | 'payme' | 'cash';
export type ContractStatus = 'pending' | 'active' | 'completed' | 'cancelled';

// API Response Types
export interface ApiResponse<T> {
    success: boolean;
    data?: T;
    error?: string;
    message?: string;
}

export interface PaginatedResponse<T> {
    items: T[];
    totalCount: number;
    page: number;
    pageSize: number;
    totalPages: number;
} 