// Authentication Flow Component for Linkor.uz
// Simple login/password authentication system

import { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { Button, H2, Separator, Text, XStack, YStack } from 'tamagui';

import { Input } from '@/atoms';
import { useI18n, UserRole } from '@/shared';

interface AuthFlowProps {
    mode: 'login' | 'register';
    onSuccess: (user: any, token: string) => void;
    onError: (error: string) => void;
}

interface AuthFormData {
    email: string;
    password: string;
    confirmPassword?: string;
    fullName?: string;
    role?: UserRole;
}

export function AuthFlow({ mode, onSuccess, onError }: AuthFlowProps) {
    const { t } = useI18n();
    const [currentStep, setCurrentStep] = useState<'auth' | 'role'>('auth');
    const [isLoading, setIsLoading] = useState(false);

    const { control, handleSubmit, formState: { errors, isValid }, watch } = useForm<AuthFormData>({
        mode: 'onChange',
        defaultValues: {
            email: '',
            password: '',
            confirmPassword: '',
            fullName: '',
            role: undefined
        }
    });

    const password = watch('password');

    const validateEmail = (value: string) => {
        if (!value) return t('auth.emailRequired');
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) return t('auth.emailInvalid');
        return true;
    };

    const validatePassword = (value: string) => {
        if (!value) return t('auth.passwordRequired');
        if (value.length < 6) return t('auth.passwordTooShort');
        return true;
    };

    const validateConfirmPassword = (value: string | undefined) => {
        if (mode === 'register') {
            if (!value) return t('auth.confirmPasswordRequired');
            if (value !== password) return t('auth.passwordsDoNotMatch');
        }
        return true;
    };

    const validateFullName = (value: string | undefined) => {
        if (mode === 'register') {
            if (!value?.trim()) return t('auth.fullNameRequired');
            if (value.trim().length < 2) return t('auth.fullNameTooShort');
        }
        return true;
    };

    const handleAuthSubmit = async (data: AuthFormData) => {
        setIsLoading(true);
        try {
            if (mode === 'register') {
                const response = await register(data.email, data.password, {
                    email: data.email,
                    role: data.role || 'employee'
                });

                if (response.success) {
                    if (data.role) {
                        onSuccess(response.data.user, response.data.token);
                    } else {
                        setCurrentStep('role');
                    }
                } else {
                    onError(response.error || t('auth.registrationFailed'));
                }
            } else {
                const response = await login(data.email, data.password);

                if (response.success) {
                    onSuccess(response.data.user, response.data.token);
                } else {
                    onError(response.error || t('auth.loginFailed'));
                }
            }
        } catch {
            onError(t('auth.networkError'));
        } finally {
            setIsLoading(false);
        }
    };

    const handleRoleSubmit = async (data: AuthFormData) => {
        setIsLoading(true);
        try {
            const response = await selectUserRole('temp-user-id', data.role!);

            if (response.success) {
                onSuccess(response.data, 'temp-token');
            } else {
                onError(response.error || t('auth.roleSelectionFailed'));
            }
        } catch {
            onError(t('auth.networkError'));
        } finally {
            setIsLoading(false);
        }
    };

    const onSubmit = (data: AuthFormData) => {
        if (currentStep === 'auth') {
            handleAuthSubmit(data);
        } else if (currentStep === 'role') {
            handleRoleSubmit(data);
        }
    };

    const switchMode = () => {
        // This would be handled by parent component
        console.log('Switch to', mode === 'login' ? 'register' : 'login');
    };

    return (
        <YStack gap="$4" padding="$4" maxWidth={400} margin="auto">
            <YStack gap="$2" alignItems="center">
                <H2>{mode === 'register' ? t('auth.createAccount') : t('auth.signInToAccount')}</H2>
                <Text color="$gray11">{t('auth.welcome')}</Text>
            </YStack>

            {/* Authentication Step */}
            {currentStep === 'auth' && (
                <YStack gap="$4">
                    {/* Full Name (Register only) */}
                    {mode === 'register' && (
                        <Controller
                            control={control}
                            name="fullName"
                            rules={{ validate: validateFullName }}
                            render={({ field: { onChange, value } }) => (
                                <Input
                                    placeholder={t('auth.fullNamePlaceholder')}
                                    value={value || ''}
                                    onChangeText={onChange}
                                    error={errors.fullName?.message}
                                    autoComplete="name"
                                />
                            )}
                        />
                    )}

                    {/* Email */}
                    <Controller
                        control={control}
                        name="email"
                        rules={{ validate: validateEmail }}
                        render={({ field: { onChange, value } }) => (
                            <Input
                                placeholder={t('auth.emailPlaceholder')}
                                value={value}
                                onChangeText={onChange}
                                error={errors.email?.message}
                                keyboardType="email-address"
                                autoComplete="email"
                                autoCapitalize="none"
                            />
                        )}
                    />

                    {/* Password */}
                    <Controller
                        control={control}
                        name="password"
                        rules={{ validate: validatePassword }}
                        render={({ field: { onChange, value } }) => (
                            <Input
                                placeholder={t('auth.passwordPlaceholder')}
                                value={value}
                                onChangeText={onChange}
                                error={errors.password?.message}
                                secureTextEntry
                                autoComplete={mode === 'register' ? 'new-password' : 'current-password'}
                            />
                        )}
                    />

                    {/* Confirm Password (Register only) */}
                    {mode === 'register' && (
                        <Controller
                            control={control}
                            name="confirmPassword"
                            rules={{ validate: validateConfirmPassword }}
                            render={({ field: { onChange, value } }) => (
                                <Input
                                    placeholder={t('auth.confirmPasswordPlaceholder')}
                                    value={value || ''}
                                    onChangeText={onChange}
                                    error={errors.confirmPassword?.message}
                                    secureTextEntry
                                    autoComplete="new-password"
                                />
                            )}
                        />
                    )}

                    <Button
                        onPress={handleSubmit(onSubmit)}
                        disabled={!isValid || isLoading}
                        opacity={isLoading ? 0.6 : 1}
                    >
                        {isLoading ? t('common.loading') : mode === 'register' ? t('auth.signUp') : t('auth.signIn')}
                    </Button>

                    <XStack gap="$2" justifyContent="center" alignItems="center">
                        <Separator />
                        <Text color="$gray11">{t('common.or')}</Text>
                        <Separator />
                    </XStack>

                    <Button variant="outlined" onPress={switchMode} disabled={isLoading}>
                        {mode === 'register' ? t('auth.haveAccount') : t('auth.needAccount')}
                    </Button>
                </YStack>
            )}

            {/* Role Selection Step (Registration only) */}
            {currentStep === 'role' && mode === 'register' && (
                <YStack gap="$4">
                    <YStack gap="$2" alignItems="center">
                        <Text fontWeight="bold">{t('auth.selectAccountType')}</Text>
                        <Text color="$gray11" textAlign="center">
                            {t('auth.selectAccountTypeDesc')}
                        </Text>
                    </YStack>

                    <Controller
                        control={control}
                        name="role"
                        rules={{ required: t('auth.roleRequired') }}
                        render={({ field: { onChange, value } }) => (
                            <YStack gap="$3">
                                <Button
                                    variant={value === 'employee' ? 'outlined' : undefined}
                                    onPress={() => onChange('employee')}
                                    padding="$4"
                                    height="auto"
                                    backgroundColor={value === 'employee' ? '$blue2' : undefined}
                                >
                                    <YStack gap="$1" alignItems="center">
                                        <Text fontWeight="bold">{t('auth.workAsEmployee')}</Text>
                                        <Text color="$gray11" fontSize="$3" textAlign="center">
                                            {t('auth.workAsEmployeeDesc')}
                                        </Text>
                                    </YStack>
                                </Button>

                                <Button
                                    variant={value === 'employer' ? 'outlined' : undefined}
                                    onPress={() => onChange('employer')}
                                    padding="$4"
                                    height="auto"
                                    backgroundColor={value === 'employer' ? '$green2' : undefined}
                                >
                                    <YStack gap="$1" alignItems="center">
                                        <Text fontWeight="bold">{t('auth.hireEmployees')}</Text>
                                        <Text color="$gray11" fontSize="$3" textAlign="center">
                                            {t('auth.hireEmployeesDesc')}
                                        </Text>
                                    </YStack>
                                </Button>
                            </YStack>
                        )}
                    />

                    {errors.role && (
                        <Text color="$red10" fontSize="$3">{errors.role.message}</Text>
                    )}

                    <Button
                        onPress={handleSubmit(onSubmit)}
                        disabled={!isValid || isLoading}
                        opacity={isLoading ? 0.6 : 1}
                    >
                        {isLoading ? t('common.loading') : t('auth.completeRegistration')}
                    </Button>

                    <Button variant="outlined" onPress={() => setCurrentStep('auth')} disabled={isLoading}>
                        {t('common.back')}
                    </Button>
                </YStack>
            )}
        </YStack>
    );
}

// API functions - will be replaced with actual API calls
async function register(_email: string, _password: string, _userData: any) {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    return {
        success: true,
        data: { user: { email: _email, role: _userData.role }, token: 'jwt-token' },
        error: undefined
    };
}

async function login(_email: string, _password: string) {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    return {
        success: true,
        data: { user: { email: _email }, token: 'jwt-token' },
        error: undefined
    };
}

async function selectUserRole(_userId: string, _role: UserRole) {
    return { success: true, data: { role: _role }, error: undefined };
} 