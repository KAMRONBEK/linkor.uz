import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import { Stack, Text } from 'tamagui';

import { Button, Input } from '@/atoms';
import { useI18n } from '@/shared';

export interface LoginFormProps {
    onSubmit: (credentials: LoginCredentials) => void;
    isLoading?: boolean;
    error?: string;
}

export interface LoginCredentials {
    email: string;
    password: string;
}

export const LoginForm: React.FC<LoginFormProps> = ({
    onSubmit,
    isLoading = false,
    error,
}) => {
    const { t } = useI18n();

    const {
        control,
        handleSubmit,
        formState: { errors, isValid },
    } = useForm<LoginCredentials>({
        mode: 'onChange',
        defaultValues: {
            email: '',
            password: '',
        },
    });

    const validateEmail = (value: string) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!value) {
            return t('auth.emailRequired');
        }
        if (!emailRegex.test(value)) {
            return t('auth.emailInvalid');
        }
        return true;
    };

    const validatePassword = (value: string) => {
        if (!value) {
            return t('auth.passwordRequired');
        }
        if (value.length < 6) {
            return t('auth.passwordTooShort');
        }
        return true;
    };

    const onFormSubmit = (data: LoginCredentials) => {
        onSubmit(data);
    };

    return (
        <Stack gap="$4" padding="$4">
            <Stack gap="$2">
                <Text fontSize="$6" fontWeight="bold" textAlign="center">
                    {t('auth.welcome')}
                </Text>
                <Text fontSize="$4" color="$gray11" textAlign="center">
                    {t('auth.signInToAccount')}
                </Text>
            </Stack>

            <Stack gap="$3">
                <Controller
                    control={control}
                    name="email"
                    rules={{ validate: validateEmail }}
                    render={({ field: { onChange, value } }) => (
                        <Input
                            label={t('auth.email')}
                            placeholder={t('auth.email')}
                            value={value}
                            onChangeText={onChange}
                            error={errors.email?.message}
                            keyboardType="email-address"
                            autoCapitalize="none"
                            autoComplete="email"
                        />
                    )}
                />

                <Controller
                    control={control}
                    name="password"
                    rules={{ validate: validatePassword }}
                    render={({ field: { onChange, value } }) => (
                        <Input
                            label={t('auth.password')}
                            placeholder={t('auth.password')}
                            value={value}
                            onChangeText={onChange}
                            error={errors.password?.message}
                            secureTextEntry
                            autoComplete="password"
                        />
                    )}
                />

                {error && (
                    <Text color="$red10" fontSize="$3" textAlign="center">
                        {error}
                    </Text>
                )}

                <Button
                    onPress={handleSubmit(onFormSubmit)}
                    disabled={isLoading || !isValid}
                    size="lg"
                >
                    {isLoading ? t('auth.signingIn') : t('auth.signIn')}
                </Button>
            </Stack>

            <Stack gap="$2" alignItems="center">
                <Text fontSize="$3" color="$gray11">
                    {t('auth.dontHaveAccount')}
                </Text>
                <Button variant="ghost" size="sm">
                    {t('auth.signUp')}
                </Button>
            </Stack>
        </Stack>
    );
}; 