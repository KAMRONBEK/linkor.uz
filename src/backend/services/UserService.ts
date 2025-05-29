import {
    addDoc,
    collection,
    deleteDoc,
    doc,
    DocumentData,
    getDoc,
    getDocs,
    limit,
    orderBy,
    query,
    QueryDocumentSnapshot,
    Timestamp,
    updateDoc,
    where,
} from 'firebase/firestore';

import { db } from '../config/firebase';
import { CreateUserData, IUser, IUserProfile, UpdateUserData, User } from '../models/User';

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

export class UserService {
    private static readonly COLLECTION_NAME = 'users';

    /**
     * Create a new user
     */
    static async createUser(userData: CreateUserData): Promise<User> {
        try {
            const now = Timestamp.now();
            const userWithTimestamps = {
                ...userData,
                createdAt: now,
                updatedAt: now,
            };

            const docRef = await addDoc(
                collection(db, this.COLLECTION_NAME),
                userWithTimestamps
            );

            return new User(
                docRef.id,
                userData.email,
                userData.displayName,
                userData.photoURL,
                userData.phoneNumber,
                userData.emailVerified,
                now,
                now,
                userData.profile
            );
        } catch (error) {
            console.error('Error creating user:', error);
            throw new Error('Failed to create user');
        }
    }

    /**
     * Get user by ID
     */
    static async getUserById(userId: string): Promise<User | null> {
        try {
            const docRef = doc(db, this.COLLECTION_NAME, userId);
            const docSnap = await getDoc(docRef);

            if (docSnap.exists()) {
                return User.fromFirestore(docSnap.data() as FirestoreUserData, docSnap.id);
            }

            return null;
        } catch (error) {
            console.error('Error getting user by ID:', error);
            throw new Error('Failed to get user');
        }
    }

    /**
     * Get user by email
     */
    static async getUserByEmail(email: string): Promise<User | null> {
        try {
            const q = query(
                collection(db, this.COLLECTION_NAME),
                where('email', '==', email),
                limit(1)
            );

            const querySnapshot = await getDocs(q);

            if (!querySnapshot.empty) {
                const docSnapshot = querySnapshot.docs[0];
                return User.fromFirestore(docSnapshot.data() as FirestoreUserData, docSnapshot.id);
            }

            return null;
        } catch (error) {
            console.error('Error getting user by email:', error);
            throw new Error('Failed to get user by email');
        }
    }

    /**
     * Update user
     */
    static async updateUser(
        userId: string,
        updateData: UpdateUserData
    ): Promise<User> {
        try {
            const docRef = doc(db, this.COLLECTION_NAME, userId);
            const updateDataWithTimestamp = {
                ...updateData,
                updatedAt: Timestamp.now(),
            };

            await updateDoc(docRef, updateDataWithTimestamp);

            const updatedUser = await this.getUserById(userId);
            if (!updatedUser) {
                throw new Error('User not found after update');
            }

            return updatedUser;
        } catch (error) {
            console.error('Error updating user:', error);
            throw new Error('Failed to update user');
        }
    }

    /**
     * Delete user
     */
    static async deleteUser(userId: string): Promise<void> {
        try {
            const docRef = doc(db, this.COLLECTION_NAME, userId);
            await deleteDoc(docRef);
        } catch (error) {
            console.error('Error deleting user:', error);
            throw new Error('Failed to delete user');
        }
    }

    /**
     * Get all users with pagination
     */
    static async getUsers(
        limitCount: number = 10,
        orderByField: keyof IUser = 'createdAt'
    ): Promise<User[]> {
        try {
            const q = query(
                collection(db, this.COLLECTION_NAME),
                orderBy(orderByField, 'desc'),
                limit(limitCount)
            );

            const querySnapshot = await getDocs(q);
            return querySnapshot.docs.map((doc: QueryDocumentSnapshot<DocumentData>) =>
                User.fromFirestore(doc.data() as FirestoreUserData, doc.id)
            );
        } catch (error) {
            console.error('Error getting users:', error);
            throw new Error('Failed to get users');
        }
    }

    /**
     * Search users by display name
     */
    static async searchUsersByDisplayName(searchTerm: string): Promise<User[]> {
        try {
            const q = query(
                collection(db, this.COLLECTION_NAME),
                where('displayName', '>=', searchTerm),
                where('displayName', '<=', `${searchTerm}\uf8ff`),
                limit(20)
            );

            const querySnapshot = await getDocs(q);
            return querySnapshot.docs.map((doc: QueryDocumentSnapshot<DocumentData>) =>
                User.fromFirestore(doc.data() as FirestoreUserData, doc.id)
            );
        } catch (error) {
            console.error('Error searching users:', error);
            throw new Error('Failed to search users');
        }
    }

    /**
     * Check if user exists by email
     */
    static async userExistsByEmail(email: string): Promise<boolean> {
        try {
            const user = await this.getUserByEmail(email);
            return user !== null;
        } catch (error) {
            console.error('Error checking user existence:', error);
            return false;
        }
    }
} 