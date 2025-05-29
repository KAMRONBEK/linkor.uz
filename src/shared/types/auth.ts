// Authentication types for Linkor.uz

import type { AuthMethod, UserRole } from './common';
import type { EmployeeProfile, EmployerProfile } from './user';

export interface AuthRequest {
    method: AuthMethod;
    phone?: string;
    email?: string;
    verificationCode?: string;
}

export interface User {
    id: string;
    role: UserRole;
    phone?: string;
    email?: string;
    isVerified: boolean;
    createdAt: Date;
    updatedAt: Date;
    profile: EmployeeProfile | EmployerProfile;
} 