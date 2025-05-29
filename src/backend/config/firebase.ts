import { initializeApp } from 'firebase/app';
import { connectAuthEmulator, getAuth } from 'firebase/auth';
import { connectFirestoreEmulator, getFirestore } from 'firebase/firestore';
import { connectStorageEmulator, getStorage } from 'firebase/storage';

// Firebase configuration
const firebaseConfig = {
    apiKey: process.env.EXPO_PUBLIC_FIREBASE_API_KEY || '',
    authDomain: process.env.EXPO_PUBLIC_FIREBASE_AUTH_DOMAIN || '',
    projectId: process.env.EXPO_PUBLIC_FIREBASE_PROJECT_ID || '',
    storageBucket: process.env.EXPO_PUBLIC_FIREBASE_STORAGE_BUCKET || '',
    messagingSenderId: process.env.EXPO_PUBLIC_FIREBASE_MESSAGING_SENDER_ID || '',
    appId: process.env.EXPO_PUBLIC_FIREBASE_APP_ID || '',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase services
export const db = getFirestore(app);
export const storage = getStorage(app);
export const auth = getAuth(app);

// Connect to emulators in development
if (__DEV__) {
    const EMULATOR_HOST = 'localhost';

    // Connect to Firestore emulator
    if (!firebaseConfig.projectId.includes('demo-')) {
        try {
            connectFirestoreEmulator(db, EMULATOR_HOST, 8080);
        } catch {
            console.log('Firestore emulator already connected');
        }
    }

    // Connect to Storage emulator
    try {
        connectStorageEmulator(storage, EMULATOR_HOST, 9199);
    } catch {
        console.log('Storage emulator already connected');
    }

    // Connect to Auth emulator
    try {
        connectAuthEmulator(auth, `http://${EMULATOR_HOST}:9099`);
    } catch {
        console.log('Auth emulator already connected');
    }
}

export default app; 