// Application types for Linkor.uz

import type { ApplicationStatus } from './common';

export interface Application {
    id: string;
    jobId: string;
    employeeId: string;
    coverLetter: string;
    proposedBudget: number;
    proposedTimeline: string;
    status: ApplicationStatus;
    attachments: string[];
    createdAt: Date;
    updatedAt: Date;
} 