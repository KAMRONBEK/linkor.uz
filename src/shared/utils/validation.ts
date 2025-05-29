import { z } from 'zod';

// Email validation
export const emailSchema = z
    .string()
    .email('Please enter a valid email address')
    .min(1, 'Email is required');

// Password validation
export const passwordSchema = z
    .string()
    .min(6, 'Password must be at least 6 characters')
    .max(100, 'Password must be less than 100 characters');

// Name validation
export const nameSchema = z
    .string()
    .min(1, 'Name is required')
    .max(50, 'Name must be less than 50 characters')
    .regex(/^[a-zA-Z\s]+$/, 'Name can only contain letters and spaces');

// Phone validation
export const phoneSchema = z
    .string()
    .regex(/^\+?[\d\s\-()]+$/, 'Please enter a valid phone number')
    .optional();

// URL validation
export const urlSchema = z
    .string()
    .url('Please enter a valid URL')
    .optional()
    .or(z.literal(''));

// User profile validation schemas
export const userProfileSchema = z.object({
    firstName: nameSchema.optional(),
    lastName: nameSchema.optional(),
    bio: z.string().max(500, 'Bio must be less than 500 characters').optional(),
    dateOfBirth: z.date().optional(),
    location: z.string().max(100, 'Location must be less than 100 characters').optional(),
    website: urlSchema,
    socialLinks: z.object({
        twitter: urlSchema,
        linkedin: urlSchema,
        github: urlSchema,
        instagram: urlSchema,
    }).optional(),
});

// Login form validation
export const loginSchema = z.object({
    email: emailSchema,
    password: passwordSchema,
});

// Registration form validation
export const registrationSchema = z.object({
    email: emailSchema,
    password: passwordSchema,
    confirmPassword: passwordSchema,
    firstName: nameSchema,
    lastName: nameSchema,
}).refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
});

// Validation helper functions
export const validateEmail = (email: string): boolean => {
    try {
        emailSchema.parse(email);
        return true;
    } catch {
        return false;
    }
};

export const validatePassword = (password: string): boolean => {
    try {
        passwordSchema.parse(password);
        return true;
    } catch {
        return false;
    }
};

export const getValidationErrors = (error: z.ZodError): Record<string, string> => {
    const errors: Record<string, string> = {};

    error.errors.forEach((err) => {
        const path = err.path.join('.');
        errors[path] = err.message;
    });

    return errors;
};

// Type exports
export type LoginFormData = z.infer<typeof loginSchema>;
export type RegistrationFormData = z.infer<typeof registrationSchema>;
export type UserProfileData = z.infer<typeof userProfileSchema>; 