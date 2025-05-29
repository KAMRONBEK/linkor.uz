import { X } from '@tamagui/lucide-icons';
import React, { useMemo } from 'react';
import { Adapt, AdaptWhen, Button, Sheet, Dialog as TamaguiDialog, Unspaced, useMedia, VisuallyHidden, XStack, YStack } from 'tamagui';

export interface DialogProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    title?: string;
    description?: string;
    children: React.ReactNode;
    showCloseButton?: boolean;
    preventCloseOnOverlayClick?: boolean;
    size?: 'small' | 'medium' | 'large';
    modal?: boolean;
}

export function Dialog({
    open,
    onOpenChange,
    title,
    description,
    children,
    showCloseButton = true,
    preventCloseOnOverlayClick = false,
    size = 'medium',
    modal = true,
}: DialogProps) {
    const media = useMedia();

    // Compute all responsive values once using useMemo
    const responsiveValues = useMemo(() => {
        // Content width logic
        const contentWidth = (() => {
            switch (true) {
                case media.xs:
                    return '95%';
                case media.sm:
                    return '90%';
                default:
                    switch (size) {
                        case 'small':
                            return 400;
                        case 'large':
                            return media.lg ? 800 : 600;
                        default:
                            return media.md ? 500 : 450;
                    }
            }
        })();

        // Max height logic
        const maxHeight = (() => {
            switch (true) {
                case media.xs:
                case media.sm:
                    return '95%';
                default:
                    return '90%';
            }
        })();

        // Padding logic
        const padding = (() => {
            switch (true) {
                case media.xs:
                case media.sm:
                    return '$3';
                default:
                    return '$4';
            }
        })();

        // Typography and UI values
        const titleFontSize = media.xs ? '$5' : '$6';
        const closeButtonSize = media.xs ? '$1' : '$2';
        const closeButtonPadding = media.xs ? '$1' : '$2';
        const closeIconSize = media.xs ? 14 : 16;
        const descriptionFontSize = media.xs ? '$3' : '$4';
        const titleNumberOfLines = media.xs ? 2 : 1;

        return {
            contentWidth,
            maxHeight,
            padding,
            titleFontSize,
            closeButtonSize,
            closeButtonPadding,
            closeIconSize,
            descriptionFontSize,
            titleNumberOfLines,
        };
    }, [media.xs, media.sm, media.md, media.lg, size]);

    // Destructure for cleaner usage
    const {
        contentWidth,
        maxHeight,
        padding,
        titleFontSize,
        closeButtonSize,
        closeButtonPadding,
        closeIconSize,
        descriptionFontSize,
        titleNumberOfLines,
    } = responsiveValues;

    return (
        <TamaguiDialog modal={modal} open={open} onOpenChange={onOpenChange}>
            <TamaguiDialog.Trigger asChild>
                <div style={{ display: 'none' }} />
            </TamaguiDialog.Trigger>

            <Adapt when={"$sm" as keyof AdaptWhen} platform="touch">
                <Sheet animation="medium" zIndex={200000} modal dismissOnSnapToBottom>
                    <Sheet.Frame padding={padding} gap="$4">
                        <Adapt.Contents />
                    </Sheet.Frame>
                    <Sheet.Overlay
                        animation="lazy"
                        enterStyle={{ opacity: 0 }}
                        exitStyle={{ opacity: 0 }}
                        onPress={preventCloseOnOverlayClick ? undefined : () => onOpenChange(false)}
                    />
                </Sheet>
            </Adapt>

            <TamaguiDialog.Portal>
                <TamaguiDialog.Overlay
                    key="overlay"
                    animation="slow"
                    opacity={0.5}
                    enterStyle={{ opacity: 0 }}
                    exitStyle={{ opacity: 0 }}
                    onPress={preventCloseOnOverlayClick ? undefined : () => onOpenChange(false)}
                />

                <TamaguiDialog.Content
                    bordered
                    elevate
                    key="content"
                    animateOnly={['transform', 'opacity']}
                    animation={[
                        'quick',
                        {
                            opacity: {
                                overshootClamping: true,
                            },
                        },
                    ]}
                    enterStyle={{ x: 0, y: -20, opacity: 0, scale: 0.9 }}
                    exitStyle={{ x: 0, y: 10, opacity: 0, scale: 0.95 }}
                    gap="$4"
                    maxWidth={contentWidth}
                    width={typeof contentWidth === 'string' ? contentWidth : undefined}
                    maxHeight={maxHeight}
                    padding="$0"
                    backgroundColor="$background"
                >
                    {/* Header */}
                    {(title || showCloseButton) && (
                        <XStack
                            alignItems="center"
                            justifyContent="space-between"
                            padding={padding}
                            paddingBottom="$2"
                            borderBottomWidth={title ? 1 : 0}
                            borderBottomColor="$borderColor"
                        >
                            <TamaguiDialog.Title
                                fontSize={titleFontSize}
                                fontWeight="bold"
                                flex={1}
                                numberOfLines={titleNumberOfLines}
                            >
                                {title || ''}
                            </TamaguiDialog.Title>

                            {showCloseButton && (
                                <Unspaced>
                                    <TamaguiDialog.Close asChild>
                                        <Button
                                            size={closeButtonSize}
                                            variant="outlined"
                                            borderRadius="$12"
                                            padding={closeButtonPadding}
                                        >
                                            <X size={closeIconSize} />
                                        </Button>
                                    </TamaguiDialog.Close>
                                </Unspaced>
                            )}
                        </XStack>
                    )}

                    {/* Description (if provided) */}
                    {description && (
                        <TamaguiDialog.Description
                            paddingHorizontal={padding}
                            paddingTop={title ? "$0" : padding}
                            color="$gray11"
                            fontSize={descriptionFontSize}
                        >
                            {description}
                        </TamaguiDialog.Description>
                    )}

                    {/* Content */}
                    <YStack
                        flex={1}
                        padding={padding}
                        paddingTop={title || description ? "$2" : padding}
                        overflow="hidden"
                    >
                        {children}
                    </YStack>

                    {/* Hidden close button for accessibility */}
                    <VisuallyHidden>
                        <TamaguiDialog.Close asChild>
                            <Button>Close</Button>
                        </TamaguiDialog.Close>
                    </VisuallyHidden>
                </TamaguiDialog.Content>
            </TamaguiDialog.Portal>
        </TamaguiDialog>
    );
} 