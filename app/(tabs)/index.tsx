// Home/Onboarding Screen for Linkor.uz
// Serves as the main landing page with hero section, categories, and featured projects

import { Clock, Search, Star, Users } from '@tamagui/lucide-icons';
import { useRouter } from 'expo-router';
import { useEffect, useState } from 'react';
import { Button, Card, H1, H2, Separator, Text, useTheme, XStack, YStack } from 'tamagui';

import { AuthModal } from '@/molecules';
import { useI18n } from '@/shared';
import { ResponsiveContainer } from '@/templates';

interface FeaturedProject {
    id: string;
    title: string;
    budget: string;
    category: string;
    skills: string[];
    timePosted: string;
    applicantCount: number;
}

interface CategoryStats {
    id: string;
    name: string;
    projectCount: number;
    icon: string;
}

export default function HomeScreen() {
    const { t } = useI18n();
    const router = useRouter();
    const theme = useTheme();
    const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
    const [authMode, setAuthMode] = useState<'login' | 'register'>('register');
    const [featuredProjects, setFeaturedProjects] = useState<FeaturedProject[]>([]);
    const [categories, setCategories] = useState<CategoryStats[]>([]);

    useEffect(() => {
        loadFeaturedProjects();
        loadCategories();
    }, []);

    const loadFeaturedProjects = async () => {
        // Mock data - will be replaced with API call
        const mockProjects: FeaturedProject[] = [
            {
                id: '1',
                title: 'E-commerce website design and development',
                budget: '$500 - $1,500',
                category: 'Web Development',
                skills: ['React', 'Node.js', 'MongoDB'],
                timePosted: '2 hours ago',
                applicantCount: 8
            },
            {
                id: '2',
                title: 'Mobile app UI/UX design for startup',
                budget: '$300 - $800',
                category: 'Design',
                skills: ['Figma', 'UI/UX', 'Mobile Design'],
                timePosted: '5 hours ago',
                applicantCount: 12
            },
            {
                id: '3',
                title: 'Content writing for tech blog',
                budget: '$50 - $200',
                category: 'Content Writing',
                skills: ['Technical Writing', 'SEO', 'Research'],
                timePosted: '1 day ago',
                applicantCount: 15
            }
        ];
        setFeaturedProjects(mockProjects);
    };

    const loadCategories = async () => {
        // Mock data - will be replaced with API call
        const mockCategories: CategoryStats[] = [
            { id: '1', name: 'Web Development', projectCount: 245, icon: '💻' },
            { id: '2', name: 'Mobile Development', projectCount: 189, icon: '📱' },
            { id: '3', name: 'Design', projectCount: 312, icon: '🎨' },
            { id: '4', name: 'Content Writing', projectCount: 156, icon: '✍️' },
            { id: '5', name: 'Marketing', projectCount: 98, icon: '📊' },
            { id: '6', name: 'Data Science', projectCount: 73, icon: '📈' }
        ];
        setCategories(mockCategories);
    };

    const handleAuthSuccess = (user: any, token: string) => {
        // Handle successful authentication
        console.log('Auth success:', { user, token });
    };

    const handleAuthError = (error: string) => {
        console.error('Auth error:', error);
        // Show error message
    };

    const openAuthModal = (mode: 'login' | 'register') => {
        setAuthMode(mode);
        setIsAuthModalOpen(true);
    };

    const HeroSection = () => (
        <YStack gap="$6" alignItems="center" paddingVertical="$8" paddingHorizontal="$4">
            <YStack gap="$4" alignItems="center" maxWidth={600}>
                <H1
                    fontSize="$10"
                    fontWeight="bold"
                    textAlign="center"
                    $sm={{ fontSize: "$8" }}
                >
                    {t('home.heroTitle')}
                </H1>
                <Text
                    fontSize="$6"
                    color="$gray11"
                    textAlign="center"
                    $sm={{ fontSize: "$4" }}
                >
                    {t('home.heroSubtitle')}
                </Text>
            </YStack>

            <XStack gap="$3" flexWrap="wrap" justifyContent="center">
                <Button
                    size="$5"
                    onPress={() => openAuthModal('register')}
                    $sm={{ size: "$4" }}
                >
                    {t('auth.signUp')}
                </Button>
                <Button
                    size="$5"
                    variant="outlined"
                    onPress={() => router.push('/browse-gigs')}
                    $sm={{ size: "$4" }}
                >
                    {t('home.browseProjects')}
                </Button>
            </XStack>

            <XStack gap="$6" alignItems="center" $sm={{ gap: "$4", flexDirection: "column" }}>
                <YStack alignItems="center" gap="$1">
                    <Text fontSize="$7" fontWeight="bold" color="$blue10">1,200+</Text>
                    <Text color="$gray11">{t('home.activeProjects')}</Text>
                </YStack>
                <YStack alignItems="center" gap="$1">
                    <Text fontSize="$7" fontWeight="bold" color="$green10">850+</Text>
                    <Text color="$gray11">{t('home.freelancers')}</Text>
                </YStack>
                <YStack alignItems="center" gap="$1">
                    <Text fontSize="$7" fontWeight="bold" color="$purple10">450+</Text>
                    <Text color="$gray11">{t('home.clients')}</Text>
                </YStack>
            </XStack>
        </YStack>
    );

    const CategoriesSection = () => (
        <YStack gap="$4" paddingVertical="$6">
            <YStack gap="$2" alignItems="center">
                <H2 fontSize="$8" fontWeight="bold">{t('home.popularCategories')}</H2>
                <Text color="$gray11" textAlign="center">{t('home.categoriesSubtitle')}</Text>
            </YStack>

            <XStack gap="$3" flexWrap="wrap" justifyContent="center">
                {categories.map((category) => (
                    <Card
                        key={category.id}
                        padding="$4"
                        borderRadius="$4"
                        pressStyle={{ scale: 0.95 }}
                        hoverStyle={{ borderColor: theme.borderColorHover?.val }}
                        onPress={() => router.push(`/browse-gigs?category=${category.id}`)}
                        width={180}
                        $sm={{ width: "45%" }}
                        $xs={{ width: "100%" }}
                    >
                        <YStack gap="$2" alignItems="center">
                            <Text fontSize="$8">{category.icon}</Text>
                            <Text fontWeight="bold" textAlign="center">{category.name}</Text>
                            <Text color="$gray11" fontSize="$3">
                                {category.projectCount} {t('home.projects')}
                            </Text>
                        </YStack>
                    </Card>
                ))}
            </XStack>

            <Button
                variant="outlined"
                alignSelf="center"
                onPress={() => router.push('/browse-gigs')}
            >
                {t('home.viewAllCategories')}
            </Button>
        </YStack>
    );

    const FeaturedProjectsSection = () => (
        <YStack gap="$4" paddingVertical="$6" paddingHorizontal="$4">
            <YStack gap="$2" alignItems="center">
                <H2 fontSize="$8" fontWeight="bold">{t('home.featuredProjects')}</H2>
                <Text color="$gray11" textAlign="center">{t('home.featuredProjectsSubtitle')}</Text>
            </YStack>

            <YStack gap="$4">
                {featuredProjects.map((project) => (
                    <Card
                        key={project.id}
                        padding="$4"
                        borderRadius="$4"
                        pressStyle={{ scale: 0.98 }}
                        hoverStyle={{ borderColor: theme.borderColorHover?.val }}
                        onPress={() => router.push(`/project/${project.id}`)}
                    >
                        <YStack gap="$3">
                            <YStack gap="$2">
                                <Text fontSize="$6" fontWeight="bold">{project.title}</Text>
                                <XStack gap="$4" alignItems="center" flexWrap="wrap">
                                    <XStack gap="$1" alignItems="center">
                                        <Text color="$green10" fontWeight="bold">{project.budget}</Text>
                                    </XStack>
                                    <XStack gap="$1" alignItems="center">
                                        <Text color="$gray11">{project.category}</Text>
                                    </XStack>
                                    <XStack gap="$1" alignItems="center">
                                        <Clock size={16} color={theme.gray11?.val} />
                                        <Text color="$gray11" fontSize="$3">{project.timePosted}</Text>
                                    </XStack>
                                </XStack>
                            </YStack>

                            <XStack gap="$2" flexWrap="wrap">
                                {project.skills.map((skill, index) => (
                                    <Text
                                        key={index}
                                        backgroundColor="$gray3"
                                        color="$gray11"
                                        paddingHorizontal="$2"
                                        paddingVertical="$1"
                                        borderRadius="$2"
                                        fontSize="$3"
                                    >
                                        {skill}
                                    </Text>
                                ))}
                            </XStack>

                            <XStack gap="$2" alignItems="center" justifyContent="space-between">
                                <XStack gap="$1" alignItems="center">
                                    <Users size={16} color={theme.gray11?.val} />
                                    <Text color="$gray11" fontSize="$3">
                                        {project.applicantCount} {t('home.applicants')}
                                    </Text>
                                </XStack>
                                <Button size="$3" variant="outlined">
                                    {t('projects.viewDetails')}
                                </Button>
                            </XStack>
                        </YStack>
                    </Card>
                ))}
            </YStack>

            <Button
                variant="outlined"
                alignSelf="center"
                onPress={() => router.push('/browse-gigs')}
            >
                {t('home.viewAllProjects')}
            </Button>
        </YStack>
    );

    const HowItWorksSection = () => (
        <YStack gap="$6" paddingVertical="$8" backgroundColor="$gray2" paddingHorizontal="$4">
            <YStack gap="$2" alignItems="center">
                <H2 fontSize="$8" fontWeight="bold">{t('home.howItWorks')}</H2>
                <Text color="$gray11" textAlign="center">{t('home.howItWorksSubtitle')}</Text>
            </YStack>

            <XStack gap="$4" justifyContent="center" flexWrap="wrap">
                <YStack gap="$3" alignItems="center" maxWidth={250} $sm={{ maxWidth: "100%" }}>
                    <YStack
                        width={80}
                        height={80}
                        borderRadius="$10"
                        backgroundColor="$blue3"
                        alignItems="center"
                        justifyContent="center"
                    >
                        <Search size={32} color={theme.blue10?.val} />
                    </YStack>
                    <Text fontWeight="bold" fontSize="$5">{t('home.step1Title')}</Text>
                    <Text color="$gray11" textAlign="center">{t('home.step1Description')}</Text>
                </YStack>

                <YStack gap="$3" alignItems="center" maxWidth={250} $sm={{ maxWidth: "100%" }}>
                    <YStack
                        width={80}
                        height={80}
                        borderRadius="$10"
                        backgroundColor="$green3"
                        alignItems="center"
                        justifyContent="center"
                    >
                        <Users size={32} color={theme.green10?.val} />
                    </YStack>
                    <Text fontWeight="bold" fontSize="$5">{t('home.step2Title')}</Text>
                    <Text color="$gray11" textAlign="center">{t('home.step2Description')}</Text>
                </YStack>

                <YStack gap="$3" alignItems="center" maxWidth={250} $sm={{ maxWidth: "100%" }}>
                    <YStack
                        width={80}
                        height={80}
                        borderRadius="$10"
                        backgroundColor="$purple3"
                        alignItems="center"
                        justifyContent="center"
                    >
                        <Star size={32} color={theme.purple10?.val} />
                    </YStack>
                    <Text fontWeight="bold" fontSize="$5">{t('home.step3Title')}</Text>
                    <Text color="$gray11" textAlign="center">{t('home.step3Description')}</Text>
                </YStack>
            </XStack>
        </YStack>
    );

    const CTASection = () => (
        <YStack gap="$4" alignItems="center" paddingVertical="$8" paddingHorizontal="$4">
            <H2 fontSize="$8" fontWeight="bold" textAlign="center">
                {t('home.ctaTitle')}
            </H2>
            <Text fontSize="$5" color="$gray11" textAlign="center" maxWidth={500}>
                {t('home.ctaSubtitle')}
            </Text>
            <XStack gap="$3" $sm={{ flexDirection: "column", width: "100%" }}>
                <Button
                    size="$5"
                    onPress={() => openAuthModal('register')}
                    $sm={{ width: "100%" }}
                >
                    {t('home.getStarted')}
                </Button>
                <Button
                    size="$5"
                    variant="outlined"
                    onPress={() => openAuthModal('login')}
                    $sm={{ width: "100%" }}
                >
                    {t('auth.signIn')}
                </Button>
            </XStack>
        </YStack>
    );

    return (
        <ResponsiveContainer maxWidth={1400} scrollable={true}>
            <YStack>
                <HeroSection />
                <Separator />
                <CategoriesSection />
                <Separator />
                <FeaturedProjectsSection />
                <HowItWorksSection />
                <CTASection />
            </YStack>

            {/* Auth Modal */}
            <AuthModal
                open={isAuthModalOpen}
                onOpenChange={setIsAuthModalOpen}
                mode={authMode}
                onSuccess={handleAuthSuccess}
                onError={handleAuthError}
            />
        </ResponsiveContainer>
    );
} 