// Job Posting Form Component for Linkor.uz
// Allows employers to post detailed job listings

import { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { Button, H3, ScrollView, Separator, Text, XStack, YStack } from 'tamagui';

import { Input } from '@/atoms';
import {
    Job,
    JobBudget,
    JobCategory,
    PaymentMethod, useI18n
} from '@/shared';

interface JobPostFormProps {
    onSubmit: (job: Partial<Job>) => void;
    onCancel: () => void;
    categories: JobCategory[];
    isLoading?: boolean;
}

interface JobFormData {
    title: string;
    description: string;
    categoryId: string;
    skills: string;
    budgetType: 'fixed' | 'hourly';
    budgetMin: string;
    budgetMax: string;
    currency: 'UZS' | 'USD';
    timeline: string;
    paymentMethod: PaymentMethod;
    requirements: string;
    experienceLevel: 'beginner' | 'intermediate' | 'expert';
}

export function JobPostForm({ onSubmit, onCancel, categories, isLoading = false }: JobPostFormProps) {
    const { t } = useI18n();
    const [attachments, setAttachments] = useState<string[]>([]);

    const { control, handleSubmit, formState: { errors, isValid }, watch, setValue } = useForm<JobFormData>({
        mode: 'onChange',
        defaultValues: {
            title: '',
            description: '',
            categoryId: '',
            skills: '',
            budgetType: 'fixed',
            budgetMin: '',
            budgetMax: '',
            currency: 'UZS',
            timeline: '',
            paymentMethod: 'payme',
            requirements: '',
            experienceLevel: 'intermediate'
        }
    });

    const budgetType = watch('budgetType');
    const selectedCurrency = watch('currency');

    const validateTitle = (value: string) => {
        if (!value.trim()) return t('jobs.titleRequired');
        if (value.length < 10) return t('jobs.titleTooShort');
        if (value.length > 100) return t('jobs.titleTooLong');
        return true;
    };

    const validateDescription = (value: string) => {
        if (!value.trim()) return t('jobs.descriptionRequired');
        if (value.length < 50) return t('jobs.descriptionTooShort');
        if (value.length > 5000) return t('jobs.descriptionTooLong');
        return true;
    };

    const validateBudget = (value: string) => {
        if (!value) return t('jobs.budgetRequired');
        const numValue = parseFloat(value);
        if (isNaN(numValue) || numValue <= 0) return t('jobs.budgetInvalid');
        if (selectedCurrency === 'UZS' && numValue < 50000) return t('jobs.budgetTooLow');
        if (selectedCurrency === 'USD' && numValue < 5) return t('jobs.budgetTooLow');
        return true;
    };

    const validateSkills = (value: string) => {
        if (!value.trim()) return t('jobs.skillsRequired');
        const skills = value.split(',').map(s => s.trim()).filter(Boolean);
        if (skills.length < 1) return t('jobs.skillsRequired');
        if (skills.length > 10) return t('jobs.tooManySkills');
        return true;
    };

    const onFormSubmit = (data: JobFormData) => {
        const budget: JobBudget = {
            type: data.budgetType,
            min: parseFloat(data.budgetMin),
            max: parseFloat(data.budgetMax || data.budgetMin),
            currency: data.currency
        };

        const skills = data.skills.split(',').map(s => s.trim()).filter(Boolean);

        const job: Partial<Job> = {
            title: data.title.trim(),
            description: data.description.trim(),
            category: categories.find(c => c.id === data.categoryId)!,
            budget,
            timeline: data.timeline,
            skills,
            paymentMethod: data.paymentMethod,
            attachments,
            status: 'draft'
        };

        onSubmit(job);
    };

    const addAttachment = () => {
        // Implementation for file upload
        // This would open file picker and upload files
        console.log('Add attachment functionality to be implemented');
    };

    const removeAttachment = (index: number) => {
        setAttachments(prev => prev.filter((_, i) => i !== index));
    };

    return (
        <ScrollView>
            <YStack gap="$4" padding="$4" maxWidth={800} margin="auto">
                <YStack gap="$2" alignItems="center">
                    <H3>{t('jobs.postJob')}</H3>
                    <Text color="$gray11" textAlign="center">
                        {t('jobs.postJobDescription')}
                    </Text>
                </YStack>

                <Separator />

                {/* Job Title */}
                <YStack gap="$2">
                    <Text fontWeight="bold">{t('jobs.jobTitle')}</Text>
                    <Controller
                        control={control}
                        name="title"
                        rules={{ validate: validateTitle }}
                        render={({ field: { onChange, value } }) => (
                            <Input
                                placeholder={t('jobs.titlePlaceholder')}
                                value={value}
                                onChangeText={onChange}
                                error={errors.title?.message}
                                maxLength={100}
                            />
                        )}
                    />
                    <Text color="$gray11" fontSize="$2">
                        {t('jobs.titleHint')}
                    </Text>
                </YStack>

                {/* Category Selection */}
                <YStack gap="$2">
                    <Text fontWeight="bold">{t('jobs.category')}</Text>
                    <Controller
                        control={control}
                        name="categoryId"
                        rules={{ required: t('jobs.categoryRequired') }}
                        render={({ field: { onChange, value } }) => (
                            <YStack gap="$2">
                                {categories.map((category) => (
                                    <Button
                                        key={category.id}
                                        variant={value === category.id ? 'outlined' : undefined}
                                        onPress={() => onChange(category.id)}
                                        justifyContent="flex-start"
                                        padding="$3"
                                        backgroundColor={value === category.id ? '$blue2' : undefined}
                                    >
                                        <YStack gap="$1" alignItems="flex-start">
                                            <Text fontWeight="bold">{category.name}</Text>
                                            <Text color="$gray11" fontSize="$2">{category.description}</Text>
                                        </YStack>
                                    </Button>
                                ))}
                            </YStack>
                        )}
                    />
                    {errors.categoryId && (
                        <Text color="$red10" fontSize="$3">{errors.categoryId.message}</Text>
                    )}
                </YStack>

                {/* Job Description */}
                <YStack gap="$2">
                    <Text fontWeight="bold">{t('jobs.jobDescription')}</Text>
                    <Controller
                        control={control}
                        name="description"
                        rules={{ validate: validateDescription }}
                        render={({ field: { onChange, value } }) => (
                            <Input
                                placeholder={t('jobs.descriptionPlaceholder')}
                                value={value}
                                onChangeText={onChange}
                                error={errors.description?.message}
                                multiline
                                style={{ minHeight: 150 }}
                                maxLength={5000}
                            />
                        )}
                    />
                    <Text color="$gray11" fontSize="$2">
                        {t('jobs.descriptionHint')}
                    </Text>
                </YStack>

                {/* Skills Required */}
                <YStack gap="$2">
                    <Text fontWeight="bold">{t('jobs.skillsRequired')}</Text>
                    <Controller
                        control={control}
                        name="skills"
                        rules={{ validate: validateSkills }}
                        render={({ field: { onChange, value } }) => (
                            <Input
                                placeholder={t('jobs.skillsPlaceholder')}
                                value={value}
                                onChangeText={onChange}
                                error={errors.skills?.message}
                            />
                        )}
                    />
                    <Text color="$gray11" fontSize="$2">
                        {t('jobs.skillsHint')}
                    </Text>
                </YStack>

                {/* Budget Configuration */}
                <YStack gap="$2">
                    <Text fontWeight="bold">{t('jobs.budget')}</Text>

                    {/* Budget Type Selection */}
                    <XStack gap="$2">
                        <Button
                            variant={budgetType === 'fixed' ? 'outlined' : undefined}
                            onPress={() => setValue('budgetType', 'fixed')}
                            flex={1}
                            backgroundColor={budgetType === 'fixed' ? '$blue2' : undefined}
                        >
                            {t('jobs.fixedPrice')}
                        </Button>
                        <Button
                            variant={budgetType === 'hourly' ? 'outlined' : undefined}
                            onPress={() => setValue('budgetType', 'hourly')}
                            flex={1}
                            backgroundColor={budgetType === 'hourly' ? '$blue2' : undefined}
                        >
                            {t('jobs.hourlyRate')}
                        </Button>
                    </XStack>

                    {/* Currency Selection */}
                    <XStack gap="$2">
                        <Button
                            variant={selectedCurrency === 'UZS' ? 'outlined' : undefined}
                            onPress={() => setValue('currency', 'UZS')}
                            flex={1}
                            backgroundColor={selectedCurrency === 'UZS' ? '$green2' : undefined}
                        >
                            UZS (сум)
                        </Button>
                        <Button
                            variant={selectedCurrency === 'USD' ? 'outlined' : undefined}
                            onPress={() => setValue('currency', 'USD')}
                            flex={1}
                            backgroundColor={selectedCurrency === 'USD' ? '$green2' : undefined}
                        >
                            USD ($)
                        </Button>
                    </XStack>

                    {/* Budget Range */}
                    <XStack gap="$2">
                        <YStack flex={1} gap="$1">
                            <Text fontSize="$3" color="$gray11">
                                {budgetType === 'fixed' ? t('jobs.minBudget') : t('jobs.minHourlyRate')}
                            </Text>
                            <Controller
                                control={control}
                                name="budgetMin"
                                rules={{ validate: validateBudget }}
                                render={({ field: { onChange, value } }) => (
                                    <Input
                                        placeholder="0"
                                        value={value}
                                        onChangeText={onChange}
                                        error={errors.budgetMin?.message}
                                        keyboardType="numeric"
                                    />
                                )}
                            />
                        </YStack>
                        <YStack flex={1} gap="$1">
                            <Text fontSize="$3" color="$gray11">
                                {budgetType === 'fixed' ? t('jobs.maxBudget') : t('jobs.maxHourlyRate')}
                            </Text>
                            <Controller
                                control={control}
                                name="budgetMax"
                                render={({ field: { onChange, value } }) => (
                                    <Input
                                        placeholder={t('jobs.optionalMaxBudget')}
                                        value={value}
                                        onChangeText={onChange}
                                        keyboardType="numeric"
                                    />
                                )}
                            />
                        </YStack>
                    </XStack>
                </YStack>

                {/* Timeline */}
                <YStack gap="$2">
                    <Text fontWeight="bold">{t('jobs.timeline')}</Text>
                    <Controller
                        control={control}
                        name="timeline"
                        rules={{ required: t('jobs.timelineRequired') }}
                        render={({ field: { onChange, value } }) => (
                            <Input
                                placeholder={t('jobs.timelinePlaceholder')}
                                value={value}
                                onChangeText={onChange}
                                error={errors.timeline?.message}
                            />
                        )}
                    />
                </YStack>

                {/* Payment Method */}
                <YStack gap="$2">
                    <Text fontWeight="bold">{t('jobs.paymentMethod')}</Text>
                    <Controller
                        control={control}
                        name="paymentMethod"
                        render={({ field: { onChange, value } }) => (
                            <XStack gap="$2">
                                <Button
                                    variant={value === 'payme' ? 'outlined' : undefined}
                                    onPress={() => onChange('payme')}
                                    flex={1}
                                    backgroundColor={value === 'payme' ? '$purple2' : undefined}
                                >
                                    Payme
                                </Button>
                                <Button
                                    variant={value === 'click' ? 'outlined' : undefined}
                                    onPress={() => onChange('click')}
                                    flex={1}
                                    backgroundColor={value === 'click' ? '$purple2' : undefined}
                                >
                                    Click
                                </Button>
                                <Button
                                    variant={value === 'cash' ? 'outlined' : undefined}
                                    onPress={() => onChange('cash')}
                                    flex={1}
                                    backgroundColor={value === 'cash' ? '$purple2' : undefined}
                                >
                                    {t('jobs.cash')}
                                </Button>
                            </XStack>
                        )}
                    />
                </YStack>

                {/* Experience Level */}
                <YStack gap="$2">
                    <Text fontWeight="bold">{t('jobs.experienceLevel')}</Text>
                    <Controller
                        control={control}
                        name="experienceLevel"
                        render={({ field: { onChange, value } }) => (
                            <XStack gap="$2">
                                <Button
                                    variant={value === 'beginner' ? 'outlined' : undefined}
                                    onPress={() => onChange('beginner')}
                                    flex={1}
                                    backgroundColor={value === 'beginner' ? '$orange2' : undefined}
                                >
                                    {t('jobs.beginner')}
                                </Button>
                                <Button
                                    variant={value === 'intermediate' ? 'outlined' : undefined}
                                    onPress={() => onChange('intermediate')}
                                    flex={1}
                                    backgroundColor={value === 'intermediate' ? '$orange2' : undefined}
                                >
                                    {t('jobs.intermediate')}
                                </Button>
                                <Button
                                    variant={value === 'expert' ? 'outlined' : undefined}
                                    onPress={() => onChange('expert')}
                                    flex={1}
                                    backgroundColor={value === 'expert' ? '$orange2' : undefined}
                                >
                                    {t('jobs.expert')}
                                </Button>
                            </XStack>
                        )}
                    />
                </YStack>

                {/* Attachments */}
                <YStack gap="$2">
                    <Text fontWeight="bold">{t('jobs.attachments')}</Text>
                    <Button variant="outlined" onPress={addAttachment}>
                        {t('jobs.addAttachment')}
                    </Button>
                    {attachments.length > 0 && (
                        <YStack gap="$2">
                            {attachments.map((attachment, index) => (
                                <XStack key={index} gap="$2" alignItems="center">
                                    <Text flex={1}>{attachment}</Text>
                                    <Button
                                        size="$2"
                                        variant="outlined"
                                        onPress={() => removeAttachment(index)}
                                    >
                                        {t('common.remove')}
                                    </Button>
                                </XStack>
                            ))}
                        </YStack>
                    )}
                </YStack>

                <Separator />

                {/* Action Buttons */}
                <XStack gap="$2" paddingTop="$4">
                    <Button
                        variant="outlined"
                        onPress={onCancel}
                        flex={1}
                        disabled={isLoading}
                    >
                        {t('common.cancel')}
                    </Button>
                    <Button
                        onPress={handleSubmit(onFormSubmit)}
                        disabled={!isValid || isLoading}
                        opacity={isLoading ? 0.6 : 1}
                        flex={1}
                    >
                        {isLoading ? t('common.loading') : t('jobs.postJob')}
                    </Button>
                </XStack>

                <Text color="$gray11" fontSize="$2" textAlign="center">
                    {t('jobs.postJobDisclaimer')}
                </Text>
            </YStack>
        </ScrollView>
    );
} 