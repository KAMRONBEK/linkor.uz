// Reviews and favorites types for Linkor.uz

export interface Favorite {
    id: string;
    userId: string;
    jobId: string;
    createdAt: Date;
}

export interface Review {
    id: string;
    jobId: string;
    reviewerId: string;
    revieweeId: string;
    rating: number;
    comment: string;
    createdAt: Date;
} 