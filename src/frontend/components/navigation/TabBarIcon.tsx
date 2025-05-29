import React from 'react';
import { StyleProp, ViewStyle } from 'react-native';
export interface TabBarIconProps {
    IconComponent: React.ComponentType<{ color?: string; size?: number, style: StyleProp<ViewStyle> }>;
    color: string;
    focused?: boolean;
}

export function TabBarIcon({ IconComponent, color, focused }: TabBarIconProps) {
    return (
        <IconComponent
            size={24}
            color={color}
            style={{ opacity: focused ? 1 : 0.7 }}
        />
    );
} 