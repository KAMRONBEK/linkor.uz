import React, { forwardRef } from 'react';
import { TextInput, TextInputProps } from 'react-native';
import { Stack, styled, Text, XStack } from 'tamagui';

export interface InputProps extends TextInputProps {
    label?: string;
    error?: string;
    size?: 'sm' | 'md' | 'lg';
    variant?: 'default' | 'filled' | 'outline';
    leftIcon?: React.ReactNode;
    rightIcon?: React.ReactNode;
}

const InputContainer = styled(Stack, {
    name: 'InputContainer',
    gap: '$2',
});

const InputLabel = styled(Text, {
    name: 'InputLabel',
    fontSize: '$3',
    fontWeight: '500',
    color: '$gray12',
});

const InputWrapper = styled(XStack, {
    name: 'InputWrapper',
    borderRadius: '$3',
    borderWidth: 1,
    alignItems: 'center',
    backgroundColor: '$background',

    variants: {
        variant: {
            default: {
                borderColor: '$gray7',
                focusStyle: {
                    borderColor: '$blue8',
                },
            },
            filled: {
                backgroundColor: '$gray3',
                borderColor: 'transparent',
                focusStyle: {
                    backgroundColor: '$gray4',
                    borderColor: '$blue8',
                },
            },
            outline: {
                backgroundColor: 'transparent',
                borderColor: '$gray8',
                focusStyle: {
                    borderColor: '$blue8',
                },
            },
        },
        size: {
            sm: {
                height: 32,
                paddingHorizontal: '$2',
            },
            md: {
                height: 40,
                paddingHorizontal: '$3',
            },
            lg: {
                height: 48,
                paddingHorizontal: '$4',
            },
        },
        hasError: {
            true: {
                borderColor: '$red8',
                focusStyle: {
                    borderColor: '$red9',
                },
            },
        },
    },
});

const StyledTextInput = styled(TextInput, {
    name: 'Input',
    flex: 1,
    backgroundColor: 'transparent',
    borderWidth: 0,
    outline: 'none',

    variants: {
        size: {
            sm: {
                fontSize: 14,
            },
            md: {
                fontSize: 16,
            },
            lg: {
                fontSize: 18,
            },
        },
    },
});

const IconContainer = styled(Stack, {
    name: 'IconContainer',
    alignItems: 'center',
    justifyContent: 'center',
});

const ErrorText = styled(Text, {
    name: 'ErrorText',
    fontSize: '$2',
    color: '$red10',
    marginTop: '$1',
});

export const Input = forwardRef<TextInput, InputProps>(
    ({ label, error, size = 'md', variant = 'default', leftIcon, rightIcon, style, ...props }, ref) => (
        <InputContainer>
            {label && <InputLabel>{label}</InputLabel>}
            <InputWrapper
                // @ts-ignore - Tamagui variant typing issue
                variant={variant}
                size={size}
                hasError={!!error}
            >
                {leftIcon && (
                    <IconContainer marginRight="$2">
                        {leftIcon}
                    </IconContainer>
                )}
                <StyledTextInput
                    ref={ref}
                    // @ts-ignore - Tamagui variant typing issue
                    size={size}
                    style={[
                        {
                            color: '#374151',
                        },
                        style,
                    ]}
                    {...props}
                />
                {rightIcon && (
                    <IconContainer marginLeft="$2">
                        {rightIcon}
                    </IconContainer>
                )}
            </InputWrapper>
            {error && <ErrorText>{error}</ErrorText>}
        </InputContainer>
    )
);

Input.displayName = 'Input'; 