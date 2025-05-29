import { forwardRef } from 'react';
import { TextInput, TextInputProps } from 'react-native';
import { Stack, styled, Text } from 'tamagui';

export interface InputProps extends TextInputProps {
    label?: string;
    error?: string;
    size?: 'sm' | 'md' | 'lg';
    variant?: 'default' | 'filled' | 'outline';
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

const StyledTextInput = styled(TextInput, {
    name: 'Input',
    borderRadius: '$3',
    borderWidth: 1,
    paddingHorizontal: '$3',
    backgroundColor: '$background',

    variants: {
        variant: {
            default: {
                borderColor: '$gray7',
                focusStyle: {
                    borderColor: '$blue8',
                    outlineColor: '$blue8',
                    outlineWidth: 2,
                },
            },
            filled: {
                backgroundColor: '$gray3',
                borderColor: 'transparent',
                focusStyle: {
                    backgroundColor: '$gray4',
                    borderColor: '$blue8',
                    outlineColor: '$blue8',
                    outlineWidth: 2,
                },
            },
            outline: {
                backgroundColor: 'transparent',
                borderColor: '$gray8',
                focusStyle: {
                    borderColor: '$blue8',
                    outlineColor: '$blue8',
                    outlineWidth: 2,
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
                    outlineColor: '$red9',
                },
            },
        },
    },
});

const ErrorText = styled(Text, {
    name: 'ErrorText',
    fontSize: '$2',
    color: '$red10',
    marginTop: '$1',
});

export const Input = forwardRef<TextInput, InputProps>(
    ({ label, error, size = 'md', variant = 'default', style, ...props }, ref) => (
        <InputContainer>
            {label && <InputLabel>{label}</InputLabel>}
            <StyledTextInput
                ref={ref}
                // @ts-ignore - Tamagui variant typing issue
                variant={variant}
                size={size}
                hasError={!!error}
                style={[
                    {
                        fontSize: size === 'sm' ? 14 : size === 'lg' ? 18 : 16,
                        color: '#374151',
                    },
                    style,
                ]}
                {...props}
            />
            {error && <ErrorText>{error}</ErrorText>}
        </InputContainer>
    )
);

Input.displayName = 'Input'; 