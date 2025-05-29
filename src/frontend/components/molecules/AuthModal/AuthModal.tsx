
import { AuthFlow } from '../AuthFlow/AuthFlow';

import { Dialog } from '@/atoms';
import { useI18n } from '@/shared';

export interface AuthModalProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    mode: 'login' | 'register';
    onSuccess: (user: any, token: string) => void;
    onError: (error: string) => void;
}

export function AuthModal({
    open,
    onOpenChange,
    mode,
    onSuccess,
    onError,
}: AuthModalProps) {
    const { t } = useI18n();

    const handleSuccess = (user: any, token: string) => {
        onOpenChange(false);
        onSuccess(user, token);
    };

    return (
        <Dialog
            open={open}
            onOpenChange={onOpenChange}
            title={mode === 'register' ? t('auth.createAccount') : t('auth.signInToAccount')}
            size="medium"
            showCloseButton={true}
        >
            <AuthFlow
                mode={mode}
                onSuccess={handleSuccess}
                onError={onError}
            />
        </Dialog>
    );
} 