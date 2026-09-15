import React from 'react';
import { View } from 'react-native';

export function CardRefatorado({ children }: { children?: React.ReactNode }) {
  return (
    <View className="flex-row justify-between p-4">
      <View className="flex-1 items-center">
        {children}
      </View>
    </View>
  );
}