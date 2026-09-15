import React from 'react';
import { View, Text } from 'react-native';

export function ListaDeChips({ chips }: { chips: string[] }) {
  return (
    <View className="flex-row flex-wrap gap-2">
      {chips.map((item, index) => (
        <View key={index} className="px-3 py-1.5 border border-gray-300 rounded-full bg-gray-100">
          <Text className="text-sm text-gray-700">{item}</Text>
        </View>
      ))}
    </View>
  );
}