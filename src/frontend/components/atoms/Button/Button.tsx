import React, { forwardRef } from 'react';
import { Stack, StackProps, styled, Text } from 'tamagui';

export interface ButtonProps extends Omit<StackProps, 'size'> {
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
    size?: 'sm' | 'md' | 'lg';
    children: React.ReactNode;
    disabled?: boolean;
    icon?: React.ReactNode;
    iconPosition?: 'left' | 'right';
}

const StyledButton = styled(Stack, {
    name: 'Button',
    borderRadius: '$4',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    userSelect: 'none',
    flexDirection: 'row',
    gap: '$2',

    variants: {
        variant: {
            primary: {
                backgroundColor: '$blue10',
                borderColor: '$blue10',
                borderWidth: 1,
                hoverStyle: {
                    backgroundColor: '$blue11',
                    borderColor: '$blue11',
                },
                pressStyle: {
                    backgroundColor: '$blue9',
                    borderColor: '$blue9',
                },
            },
            secondary: {
                backgroundColor: '$gray4',
                borderColor: '$gray6',
                borderWidth: 1,
                hoverStyle: {
                    backgroundColor: '$gray5',
                    borderColor: '$gray7',
                },
                pressStyle: {
                    backgroundColor: '$gray3',
                    borderColor: '$gray5',
                },
            },
            outline: {
                backgroundColor: 'transparent',
                borderColor: '$blue10',
                borderWidth: 1,
                hoverStyle: {
                    backgroundColor: '$blue2',
                    borderColor: '$blue11',
                },
                pressStyle: {
                    backgroundColor: '$blue1',
                    borderColor: '$blue9',
                },
            },
            ghost: {
                backgroundColor: 'transparent',
                borderColor: 'transparent',
                borderWidth: 1,
                hoverStyle: {
                    backgroundColor: '$gray3',
                },
                pressStyle: {
                    backgroundColor: '$gray2',
                },
            },
        },
        size: {
            sm: {
                height: 32,
                paddingHorizontal: '$3',
            },
            md: {
                height: 40,
                paddingHorizontal: '$4',
            },
            lg: {
                height: 48,
                paddingHorizontal: '$5',
            },
        },
        disabled: {
            true: {
                opacity: 0.5,
                cursor: 'not-allowed',
                pointerEvents: 'none',
            },
        },
    },
});

const ButtonText = styled(Text, {
    name: 'ButtonText',
    fontWeight: '600',

    variants: {
        variant: {
            primary: {
                color: 'white',
            },
            secondary: {
                color: '$gray12',
            },
            outline: {
                color: '$blue11',
            },
            ghost: {
                color: '$gray12',
            },
        },
        size: {
            sm: {
                fontSize: '$3',
            },
            md: {
                fontSize: '$4',
            },
            lg: {
                fontSize: '$5',
            },
        },
    },
});

export const Button = forwardRef<any, ButtonProps>(
    ({
        children,
        variant = 'primary',
        size = 'md',
        disabled = false,
        icon,
        iconPosition = 'left',
        ...props
    }, ref) => (
        <StyledButton
            ref={ref}
            // @ts-ignore
            variant={variant}
            size={size}
            disabled={disabled}
            {...props}
        >
            {icon && iconPosition === 'left' && icon}
            <ButtonText variant={variant} size={size}>
                {children}
            </ButtonText>
            {icon && iconPosition === 'right' && icon}
        </StyledButton>
    )
);

Button.displayName = 'Button'; 