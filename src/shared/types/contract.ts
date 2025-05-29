// Contract and deliverable types for Linkor.uz

import type { ContractStatus, PaymentMethod } from './common';

export interface Contract {
    id: string;
    jobId: string;
    employeeId: string;
    employerId: string;
    budget: number;
    timeline: string;
    terms: string;
    status: ContractStatus;
    paymentMethod: PaymentMethod;
    createdAt: Date;
    startDate?: Date;
    endDate?: Date;
    deliverables: Deliverable[];
}

export interface Deliverable {
    id: string;
    contractId: string;
    title: string;
    description: string;
    dueDate: Date;
    isCompleted: boolean;
    submissionUrl?: string;
    feedback?: string;
} 