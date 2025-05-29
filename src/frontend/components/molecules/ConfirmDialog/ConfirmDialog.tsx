import { Button, XStack, YStack } from 'tamagui';

import { Dialog } from '@/atoms';
import { useI18n } from '@/shared';

export interface ConfirmDialogProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    title: string;
    description?: string;
    confirmText?: string;
    cancelText?: string;
    confirmVariant?: 'primary' | 'destructive';
    onConfirm: () => void;
    onCancel?: () => void;
    isLoading?: boolean;
}

export function ConfirmDialog({
    open,
    onOpenChange,
    title,
    description,
    confirmText,
    cancelText,
    confirmVariant = 'primary',
    onConfirm,
    onCancel,
    isLoading = false,
}: ConfirmDialogProps) {
    const { t } = useI18n();

    const handleConfirm = () => {
        onConfirm();
        if (!isLoading) {
            onOpenChange(false);
        }
    };

    const handleCancel = () => {
        onCancel?.();
        onOpenChange(false);
    };

    return (
        <Dialog
            open={open}
            onOpenChange={onOpenChange}
            title={title}
            description={description}
            size="small"
            showCloseButton={false}
            preventCloseOnOverlayClick={isLoading}
        >
            <YStack gap="$4">
                <XStack gap="$3" justifyContent="flex-end">
                    <Button
                        variant="outlined"
                        onPress={handleCancel}
                        disabled={isLoading}
                        flex={1}
                    >
                        {cancelText || t('common.cancel')}
                    </Button>
                    <Button
                        onPress={handleConfirm}
                        disabled={isLoading}
                        opacity={isLoading ? 0.6 : 1}
                        backgroundColor={confirmVariant === 'destructive' ? '$red9' : undefined}
                        borderColor={confirmVariant === 'destructive' ? '$red9' : undefined}
                        color={confirmVariant === 'destructive' ? 'white' : undefined}
                        flex={1}
                    >
                        {isLoading ? t('common.loading') : confirmText || t('common.confirm')}
                    </Button>
                </XStack>
            </YStack>
        </Dialog>
    );
} 