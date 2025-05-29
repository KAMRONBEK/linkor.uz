// Base API Response structure
export interface ApiResponse<T = unknown> {
    success: boolean;
    data?: T;
    error?: string;
    message?: string;
}

// Pagination types
export interface PaginationParams {
    page?: number;
    limit?: number;
    offset?: number;
}

export interface PaginatedResponse<T> extends ApiResponse<T[]> {
    pagination: {
        page: number;
        limit: number;
        total: number;
        totalPages: number;
        hasNext: boolean;
        hasPrev: boolean;
    };
}

// Error types
export interface ApiError {
    code: string;
    message: string;
    details?: Record<string, unknown>;
}

export interface ValidationError {
    field: string;
    message: string;
    code: string;
}

// Request/Response types
export interface CreateRequest<T> {
    data: T;
}

export interface UpdateRequest<T> {
    id: string;
    data: Partial<T>;
}

export interface DeleteRequest {
    id: string;
}

// Query types
export interface SearchParams {
    query?: string;
    filters?: Record<string, unknown>;
    sort?: {
        field: string;
        order: 'asc' | 'desc';
    };
}

// HTTP Status codes
export enum HttpStatus {
    OK = 200,
    CREATED = 201,
    NO_CONTENT = 204,
    BAD_REQUEST = 400,
    UNAUTHORIZED = 401,
    FORBIDDEN = 403,
    NOT_FOUND = 404,
    CONFLICT = 409,
    INTERNAL_SERVER_ERROR = 500,
}

// API Endpoints
export const API_ENDPOINTS = {
    USERS: '/api/users',
    AUTH: '/api/auth',
    PROFILE: '/api/profile',
} as const;

export type ApiEndpoint = typeof API_ENDPOINTS[keyof typeof API_ENDPOINTS]; 