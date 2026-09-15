import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

export function LinhaDeAcoes() {
  return (
    <View className="flex-row justify-between items-center w-full p-4">
      <View className="w-6 h-6 bg-gray-500 rounded" />
      <TouchableOpacity>
        <Text className="text-blue-600 font-semibold">Ver mais</Text>
      </TouchableOpacity>
    </View>
  );
}