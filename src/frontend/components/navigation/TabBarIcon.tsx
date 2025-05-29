import { Ionicons } from '@expo/vector-icons';
import React from 'react';

export interface TabBarIconProps {
    name: React.ComponentProps<typeof Ionicons>['name'];
    color: string;
    focused?: boolean;
}

export function TabBarIcon({ name, color, focused }: TabBarIconProps) {
    return (
        <Ionicons
            name={name}
            size={24}
            color={color}
            style={{ opacity: focused ? 1 : 0.7 }}
        />
    );
} 