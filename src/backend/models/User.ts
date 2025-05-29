import { Timestamp } from 'firebase/firestore';

export interface IUser {
    id: string;
    email: string;
    displayName?: string;
    photoURL?: string;
    phoneNumber?: string;
    emailVerified: boolean;
    createdAt: Timestamp;
    updatedAt: Timestamp;
    profile?: IUserProfile;
}

export interface IUserProfile {
    firstName?: string;
    lastName?: string;
    bio?: string;
    dateOfBirth?: Timestamp;
    location?: string;
    website?: string;
    socialLinks?: ISocialLinks;
    preferences?: IUserPreferences;
}

export interface ISocialLinks {
    twitter?: string;
    linkedin?: string;
    github?: string;
    instagram?: string;
}

export interface IUserPreferences {
    theme: 'light' | 'dark' | 'system';
    language: string;
    notifications: INotificationPreferences;
    privacy: IPrivacySettings;
}

export interface INotificationPreferences {
    email: boolean;
    push: boolean;
    sms: boolean;
    marketing: boolean;
}

export interface IPrivacySettings {
    profileVisibility: 'public' | 'private' | 'friends';
    showEmail: boolean;
    showPhone: boolean;
    allowMessaging: boolean;
}

export type CreateUserData = Omit<IUser, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateUserData = Partial<Omit<IUser, 'id' | 'createdAt' | 'updatedAt'>>;

interface FirestoreUserData {
    email: string;
    displayName?: string;
    photoURL?: string;
    phoneNumber?: string;
    emailVerified: boolean;
    createdAt: Timestamp;
    updatedAt: Timestamp;
    profile?: IUserProfile;
}

export class User implements IUser {
    public id: string;
    public email: string;
    public displayName?: string;
    public photoURL?: string;
    public phoneNumber?: string;
    public emailVerified: boolean;
    public createdAt: Timestamp;
    public updatedAt: Timestamp;
    public profile?: IUserProfile;

    constructor(
        id: string,
        email: string,
        displayName: string | undefined,
        photoURL: string | undefined,
        phoneNumber: string | undefined,
        emailVerified: boolean,
        createdAt: Timestamp,
        updatedAt: Timestamp,
        profile?: IUserProfile
    ) {
        this.id = id;
        this.email = email;
        this.displayName = displayName;
        this.photoURL = photoURL;
        this.phoneNumber = phoneNumber;
        this.emailVerified = emailVerified;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
        this.profile = profile;
    }

    static fromFirestore(data: FirestoreUserData, id: string): User {
        return new User(
            id,
            data.email,
            data.displayName,
            data.photoURL,
            data.phoneNumber,
            data.emailVerified,
            data.createdAt,
            data.updatedAt,
            data.profile
        );
    }

    toFirestore(): FirestoreUserData {
        return {
            email: this.email,
            ...(this.displayName !== undefined && { displayName: this.displayName }),
            ...(this.photoURL !== undefined && { photoURL: this.photoURL }),
            ...(this.phoneNumber !== undefined && { phoneNumber: this.phoneNumber }),
            emailVerified: this.emailVerified,
            createdAt: this.createdAt,
            updatedAt: this.updatedAt,
            ...(this.profile !== undefined && { profile: this.profile }),
        };
    }
} 