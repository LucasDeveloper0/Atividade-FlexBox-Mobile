import React from 'react';
import { View, Text } from 'react-native';

export function IconeComTexto({ texto }: { texto: string }) {
  return (
    <View className="flex-row items-center gap-2">
      <View className="w-6 h-6 bg-blue-500 rounded-full" />
      <Text className="text-base text-gray-800">{texto}</Text>
    </View>
  );
}